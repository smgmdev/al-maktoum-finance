-- Create table for email signups
CREATE TABLE public.email_signups (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.email_signups ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public signup)
CREATE POLICY "Anyone can submit email signup"
  ON public.email_signups
  FOR INSERT
  WITH CHECK (true);

-- Only authenticated admins could read signups (optional - can be adjusted later)
CREATE POLICY "Signups are not publicly readable"
  ON public.email_signups
  FOR SELECT
  USING (false);