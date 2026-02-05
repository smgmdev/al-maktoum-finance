import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface BookCallRequest {
  fullName: string;
  email: string;
  whatsappNumber: string;
  areaOfInterest: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { fullName, email, whatsappNumber, areaOfInterest }: BookCallRequest = await req.json();

    // Validate required fields
    if (!fullName || !email || !whatsappNumber || !areaOfInterest) {
      throw new Error("Missing required fields");
    }

    const emailResponse = await resend.emails.send({
      from: "Al Maktoum Finance <noreply@almaktoumfinance.com>",
      to: ["noreply@almaktoumfinance.com"],
      subject: "New corporate business banking request",
      html: `
        <h1>New Corporate Business Banking Request</h1>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>WhatsApp Number:</strong> ${whatsappNumber}</p>
        <p><strong>Area of Interest:</strong></p>
        <p>${areaOfInterest}</p>
      `,
    });

    console.log("Book a call email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-book-call-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
