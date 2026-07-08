import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const { name, title, organization, email, phone, interest, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "name, email, and message are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const { error: dbError } = await supabase.from("contact_submissions").insert({
      name,
      title: title || null,
      organization: organization || null,
      email,
      phone: phone || null,
      interest: interest || null,
      message,
    });

    if (dbError) {
      console.error("DB insert error:", dbError);
      return new Response(
        JSON.stringify({ error: "Failed to save submission. Please try again." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const resendKey = Deno.env.get("RESEND_API_KEY");
    if (resendKey) {
      const emailBody = [
        `<h2>New contact form submission</h2>`,
        `<table style="border-collapse:collapse;font-family:sans-serif;font-size:14px;">`,
        `<tr><td style="padding:6px 16px 6px 0;color:#888;white-space:nowrap;">Name</td><td style="padding:6px 0;"><strong>${name}</strong></td></tr>`,
        title ? `<tr><td style="padding:6px 16px 6px 0;color:#888;">Title</td><td style="padding:6px 0;">${title}</td></tr>` : "",
        organization ? `<tr><td style="padding:6px 16px 6px 0;color:#888;">Organization</td><td style="padding:6px 0;">${organization}</td></tr>` : "",
        `<tr><td style="padding:6px 16px 6px 0;color:#888;">Email</td><td style="padding:6px 0;"><a href="mailto:${email}">${email}</a></td></tr>`,
        phone ? `<tr><td style="padding:6px 16px 6px 0;color:#888;">Phone</td><td style="padding:6px 0;">${phone}</td></tr>` : "",
        interest ? `<tr><td style="padding:6px 16px 6px 0;color:#888;">Interested in</td><td style="padding:6px 0;">${interest}</td></tr>` : "",
        `</table>`,
        `<hr style="margin:16px 0;border:none;border-top:1px solid #eee;">`,
        `<h3 style="margin-bottom:8px;">Message</h3>`,
        `<p style="white-space:pre-wrap;font-family:sans-serif;font-size:14px;line-height:1.6;">${message}</p>`,
      ].join("");

      const resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Encountive Contact Form <noreply@encountive.com>",
          to: ["contact@encountive.com"],
          reply_to: email,
          subject: `New contact: ${name}${organization ? ` — ${organization}` : ""}`,
          html: emailBody,
        }),
      });

      if (!resendRes.ok) {
        const resendError = await resendRes.text();
        console.error("Resend error:", resendError);
        return new Response(
          JSON.stringify({ success: true, emailError: resendError }),
          { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
        );
      }
    } else {
      console.warn("RESEND_API_KEY not set — email not sent");
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (err) {
    console.error("Unexpected error:", err);
    return new Response(
      JSON.stringify({ error: "An unexpected error occurred. Please try again." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
