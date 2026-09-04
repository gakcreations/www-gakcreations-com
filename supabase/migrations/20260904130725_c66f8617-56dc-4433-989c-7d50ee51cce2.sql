CREATE TABLE public.studio_signups (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  name TEXT,
  source TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

CREATE UNIQUE INDEX studio_signups_email_key ON public.studio_signups (lower(email));

GRANT INSERT ON public.studio_signups TO anon;
GRANT INSERT ON public.studio_signups TO authenticated;
GRANT ALL ON public.studio_signups TO service_role;

ALTER TABLE public.studio_signups ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can join the studio list"
  ON public.studio_signups
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (email IS NOT NULL AND email <> '');