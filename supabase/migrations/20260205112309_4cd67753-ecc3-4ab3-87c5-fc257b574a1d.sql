-- Create table for book call requests
CREATE TABLE public.book_call_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  whatsapp_number TEXT NOT NULL,
  area_of_interest TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.book_call_requests ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public form)
CREATE POLICY "Anyone can submit book call request"
ON public.book_call_requests
FOR INSERT
WITH CHECK (true);

-- Requests are not publicly readable (admin only via backend)
CREATE POLICY "Requests are not publicly readable"
ON public.book_call_requests
FOR SELECT
USING (false);