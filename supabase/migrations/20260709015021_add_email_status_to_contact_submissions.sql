-- Track the delivery outcome of the Resend notification email for each
-- submission, so failures are visible and recoverable rather than silent.
--
-- Pairs with the capture-first send-contact-email edge function, which now
-- persists every submission before attempting email and records the result.

ALTER TABLE contact_submissions
  ADD COLUMN IF NOT EXISTS email_status text,
  ADD COLUMN IF NOT EXISTS email_error text,
  ADD COLUMN IF NOT EXISTS email_sent_at timestamptz;

COMMENT ON COLUMN contact_submissions.email_status IS 'Resend delivery status: sent | failed | skipped';
COMMENT ON COLUMN contact_submissions.email_error IS 'Resend error detail when email_status = failed';
COMMENT ON COLUMN contact_submissions.email_sent_at IS 'Timestamp the notification email was accepted by Resend';
