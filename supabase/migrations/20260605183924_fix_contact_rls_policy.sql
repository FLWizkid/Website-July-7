DROP POLICY IF EXISTS "insert_contact" ON contact_submissions;

CREATE POLICY "insert_contact" ON contact_submissions FOR INSERT
  TO anon WITH CHECK (
    char_length(trim(name))    BETWEEN 1 AND 200  AND
    char_length(trim(email))   BETWEEN 5 AND 254  AND
    char_length(trim(message)) BETWEEN 1 AND 5000 AND
    email LIKE '%@%.%'
  );
