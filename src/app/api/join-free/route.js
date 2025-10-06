import nodemailer from "nodemailer";

export async function POST(req) {
  try {
     const {fullname, role, email, reason_to_join} = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true, // true for SSL (465)
      auth: {
        user: process.env.ZOHO_USER,      // hello@techthribe.com
        pass: process.env.ZOHO_APP_PASS,  // your Zoho app password
      },
    });

//     transporter.verify((error, success) => {
//   if (error) {
//     console.error("SMTP Error:", error);
//   } else {
//     console.log("SMTP Connection successful ✅");
//   }
// });

    const mailOptions = {
      from: `hello@techthribe.com`,
      to: process.env.ZOHO_USER,
      subject: `New Message from ${fullname}`,
      html: `
        <h3>JOIN COMMUNITY FOR FREE</h3>
        <p><strong>Name:</strong> ${fullname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${role}</p>
         <p><strong>Message:</strong><br/>${reason_to_join}</p>
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
      JSON.stringify({ success: false, errorMsg: "Failed to send email" }),
      { status: 500 }
    );
  }
}
