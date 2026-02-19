
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

// Sanitize HTML to prevent XSS in email content
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (!resendApiKey) {
      return new Response(
        JSON.stringify({ error: "Missing RESEND_API_KEY" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const resend = new Resend(resendApiKey);
    const { firstName, lastName, email, phone, message } = await req.json();

    // Validate required fields
    if (!firstName || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields: firstName, email, and message" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Sanitize all user inputs before embedding in HTML
    const safeFirstName = escapeHtml(String(firstName));
    const safeLastName = escapeHtml(String(lastName || ''));
    const safeEmail = escapeHtml(String(email));
    const safePhone = escapeHtml(String(phone || 'Not provided'));
    const safeMessage = escapeHtml(String(message));

    const emailResponse = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "shobhitchoudhury1@gmail.com",
      subject: "New Contact Form Submission - Shob Travels",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${safeFirstName} ${safeLastName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Phone:</strong> ${safePhone}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error) {
    console.error("Error sending email:", error);
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
