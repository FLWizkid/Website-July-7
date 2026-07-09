// Supabase Edge Function: send-contact-email
//
// Handles a contact form submission with a CAPTURE-FIRST strategy:
//   1. Persist the submission to `contact_submissions` immediately, so a lead
//      is never lost even if email delivery is misconfigured or down.
//   2. Attempt to email the notification to contact@encountive.com via Resend.
//   3. Record the delivery outcome (sent | failed | skipped) on the stored row.
//
// The visitor gets a success response as long as their message was captured;
// email delivery is decoupled so an email outage never blocks the form or
// shows the visitor a scary error. Failures are logged and stored for recovery.
//
// Secrets (set in the Supabase dashboard, never in code):
//   RESEND_API_KEY  - Resend API key for the account where encountive.com is a
//                     *verified* sending domain.
//   SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY - injected automatically.
//
// Deploy with verify_jwt = false so the public website form can call it.

import { createClient } from "npm:@supabase/supabase-js@2";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

// FROM must be on a Resend-verified domain. TO is the destination inbox.
const FROM = "Encountive Website <noreply@encountive.com>";
const TO = "contact@encountive.com";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

type Payload = {
  name?: string;
  title?: string;
  organization?: string;
  email?: string;
  phone?: string;
  interest?: string;
  message?: string;
  website?: string; // honeypot
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return json({ error: "Method not allowed" }, 405);
  }

  let payload: Payload;
  try {
    payload = await req.json();
  } catch {
    return json({ error: "Invalid request body." }, 400);
  }

  // Honeypot: silently accept bot submissions without storing or sending.
  if (payload.website && payload.website.trim() !== "") {
    return json({ ok: true });
  }

  const name = (payload.name ?? "").trim();
  const email = (payload.email ?? "").trim();
  const message = (payload.message ?? "").trim();

  // Mirror the database constraints so validation is consistent.
  if (
    name.length < 1 || name.length > 200 ||
    email.length < 5 || email.length > 254 ||
    !/^.+@.+\..+$/.test(email) ||
    message.length < 1 || message.length > 5000
  ) {
    return json({ error: "Please provide a valid name, email, and message." }, 400);
  }

  const title = (payload.title ?? "").trim();
  const organization = (payload.organization ?? "").trim();
  const phone = (payload.phone ?? "").trim();
  const interest = (payload.interest ?? "").trim();

  // --- 1. Capture first: persist the submission before anything can fail. ---
  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  const supabase = supabaseUrl && serviceKey
    ? createClient(supabaseUrl, serviceKey)
    : null;

  let submissionId: string | null = null;
  if (supabase) {
    const { data, error } = await supabase
      .from("contact_submissions")
      .insert({
        name,
        title: title || null,
        organization: organization || null,
        email,
        phone: phone || null,
        interest: interest || null,
        message,
      })
      .select("id")
      .single();

    if (error) {
      // If we cannot even capture the lead, surface a real error so the
      // visitor knows to retry rather than silently dropping their message.
      console.error("Submission insert failed:", error);
      return json({ error: "We couldn't submit your message. Please try again." }, 500);
    }
    submissionId = data?.id ?? null;
  } else {
    console.error("Supabase env not available - submission not persisted");
  }

  // --- 2. Best-effort email notification via Resend. ---
  let emailStatus = "skipped";
  let emailError: string | null = null;

  if (RESEND_API_KEY) {
    const rows: [string, string][] = [
      ["Name", name],
      ["Title", title],
      ["Organization", organization],
      ["Email", email],
      ["Phone", phone],
      ["Interested in", interest],
    ];

    const htmlRows = rows
      .filter(([, v]) => v !== "")
      .map(
        ([label, value]) =>
          `<tr><td style="padding:4px 12px 4px 0;font-weight:600;color:#0a0f1f;vertical-align:top">${label}</td><td style="padding:4px 0;color:#1f2937">${escapeHtml(value)}</td></tr>`,
      )
      .join("");

    const html = `
    <div style="font-family:Inter,Arial,sans-serif;max-width:640px;margin:0 auto">
      <h2 style="color:#0a0f1f">New contact form submission</h2>
      <table style="border-collapse:collapse;margin-bottom:16px">${htmlRows}</table>
      <h3 style="color:#0a0f1f;margin-bottom:4px">Message</h3>
      <p style="white-space:pre-wrap;color:#1f2937;line-height:1.6">${escapeHtml(message)}</p>
    </div>`;

    const text = [
      "New contact form submission",
      "",
      ...rows.filter(([, v]) => v !== "").map(([label, value]) => `${label}: ${value}`),
      "",
      "Message:",
      message,
    ].join("\n");

    try {
      const resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: FROM,
          to: [TO],
          reply_to: email,
          subject: `New contact form submission from ${name}`,
          html,
          text,
        }),
      });

      if (resendRes.ok) {
        emailStatus = "sent";
      } else {
        emailStatus = "failed";
        emailError = `${resendRes.status}: ${await resendRes.text()}`;
        console.error("Resend error:", emailError);
      }
    } catch (err) {
      emailStatus = "failed";
      emailError = String(err);
      console.error("Resend request threw:", err);
    }
  } else {
    console.error("RESEND_API_KEY is not set - notification email not sent");
  }

  // --- 3. Record the delivery outcome on the captured row (best-effort). ---
  if (supabase && submissionId) {
    const { error } = await supabase
      .from("contact_submissions")
      .update({
        email_status: emailStatus,
        email_error: emailError,
        email_sent_at: emailStatus === "sent" ? new Date().toISOString() : null,
      })
      .eq("id", submissionId);
    if (error) console.error("Failed to record email status:", error);
  }

  // The visitor's message is captured; report success regardless of email
  // delivery so an email outage never blocks the form.
  return json({ ok: true });
});
