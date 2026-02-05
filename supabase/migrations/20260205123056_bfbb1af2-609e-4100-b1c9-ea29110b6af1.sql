-- Add explicit RLS policies to deny UPDATE and DELETE on book_call_requests
CREATE POLICY "No public updates on book_call_requests"
ON public.book_call_requests
FOR UPDATE
USING (false);

CREATE POLICY "No public deletes on book_call_requests"
ON public.book_call_requests
FOR DELETE
USING (false);

-- Add explicit RLS policies to deny UPDATE and DELETE on email_signups
CREATE POLICY "No public updates on email_signups"
ON public.email_signups
FOR UPDATE
USING (false);

CREATE POLICY "No public deletes on email_signups"
ON public.email_signups
FOR DELETE
USING (false);