import nodemailer from "nodemailer";

export async function POST(req) {
  try {
       const {title, story, anonymous}  = await req.json();


    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.ZOHO_USER,  
        pass: process.env.ZOHO_APP_PASS,
      },
    });

    const mailOptions = {
      from: `hello@techthribe.com`,
      to: process.env.ZOHO_USER,
      subject: `${title}`,
      html: `
        <h3>LEND YOUR VOICE WITH THRIBE</h3>
        <p><strong>Title:</strong> ${title}</p>
        <p><strong>Story:</strong> ${story}</p>
        <p><strong>Stay Anonymous:</strong><br/>${anonymous}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    // console.error("Zoho Email Error:", error);
    return new Response(
      JSON.stringify({ success: false, error: "Failed to send email" }),
      { status: 500 }
    );
  }
}