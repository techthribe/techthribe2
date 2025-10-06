import nodemailer from "nodemailer";

export async function POST(req) {
  try {
     const {fullname, role, email, phone_no, why_join_thribe, accept_terms, payment_plan} = await req.json();


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
        <h3>JOIN PREMIUM COMMUNITY</h3>
        <p><strong>Name:</strong> ${fullname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>role:</strong><br/>${role}</p>
         <p><strong>Reason to join:</strong><br/>${why_join_thribe}</p>
          <p><strong>Phone number:</strong><br/>${phone_no}</p>
           <p><strong>Accept terms:</strong><br/>${accept_terms}</p>
            <p><strong>Payment plan:</strong><br/>${payment_plan}</p>
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