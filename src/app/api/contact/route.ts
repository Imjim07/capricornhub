import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, message } = body;

  try {
    
    await resend.emails.send({
      from: "Capricorn Hub <onboarding@resend.dev>",
      to: "imonitiejoshua61@gmail.com",
      subject: "New Project Inquiry from " + name,
      html: "<h2>New inquiry from " + name + "</h2><p><strong>Email:</strong> " + email + "</p><p><strong>Message:</strong></p><p>" + message + "</p>",
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ success: false }, { status: 500 });
  }
}