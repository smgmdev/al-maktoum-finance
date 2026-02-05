import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

// Schema validation for book call requests
const BookCallSchema = z.object({
  type: z.literal("book_call").optional(),
  fullName: z.string().min(2, "Name must be at least 2 characters").max(100, "Name too long").regex(/^[a-zA-Z\s'-]+$/, "Invalid characters in name"),
  email: z.string().email("Invalid email format").max(255, "Email too long"),
  whatsappNumber: z.string().min(5, "Phone number too short").max(20, "Phone number too long").regex(/^\+?[0-9\s\-()]+$/, "Invalid phone format"),
  areaOfInterest: z.string().min(10, "Please provide more details").max(1000, "Message too long"),
});

// Schema validation for email signup
const EmailSignupSchema = z.object({
  type: z.literal("email_signup"),
  email: z.string().email("Invalid email format").max(255, "Email too long"),
});

// HTML escape function to prevent XSS in emails
function escapeHtml(text: string): string {
  const htmlEntities: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  };
  return text.replace(/[&<>"']/g, (char) => htmlEntities[char] || char);
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const requestType = body.type || "book_call";

    let emailResponse;

    if (requestType === "email_signup") {
      // Validate email signup request
      const validationResult = EmailSignupSchema.safeParse(body);
      if (!validationResult.success) {
        return new Response(
          JSON.stringify({ error: "Invalid input. Please check your email and try again." }),
          { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
        );
      }

      const { email } = validationResult.data;
      const safeEmail = escapeHtml(email);

      emailResponse = await resend.emails.send({
        from: "Al Maktoum Finance <onboarding@resend.dev>",
        to: ["stankeviciusmgm@gmail.com"],
        subject: "New Golden Visa Campaign Signup",
        html: `
          <h1>New Email Signup</h1>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p>A new user has signed up for the Golden Visa campaign.</p>
        `,
      });
    } else {
      // Validate book call request
      const validationResult = BookCallSchema.safeParse(body);
      if (!validationResult.success) {
        return new Response(
          JSON.stringify({ error: "Invalid input. Please check your details and try again." }),
          { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
        );
      }

      const { fullName, email, whatsappNumber, areaOfInterest } = validationResult.data;
      
      // Escape HTML to prevent XSS
      const safeFullName = escapeHtml(fullName);
      const safeEmail = escapeHtml(email);
      const safeWhatsappNumber = escapeHtml(whatsappNumber);
      const safeAreaOfInterest = escapeHtml(areaOfInterest);

      emailResponse = await resend.emails.send({
        from: "Al Maktoum Finance <onboarding@resend.dev>",
        to: ["stankeviciusmgm@gmail.com"],
        subject: "New corporate business banking request",
        html: `
          <h1>New Corporate Business Banking Request</h1>
          <p><strong>Full Name:</strong> ${safeFullName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>WhatsApp Number:</strong> ${safeWhatsappNumber}</p>
          <p><strong>Area of Interest:</strong></p>
          <p>${safeAreaOfInterest}</p>
        `,
      });
    }

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: unknown) {
    // Log detailed error server-side only
    console.error("Error in send-book-call-email function:", error);
    
    // Return generic error to client - never expose internal details
    return new Response(
      JSON.stringify({ error: "Unable to process your request. Please try again later." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
