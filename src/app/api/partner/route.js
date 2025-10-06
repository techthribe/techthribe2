import nodemailer from "nodemailer";

export async function POST(req) {
  try {
      const {companyName, email, contactPerson, websiteLink, kindOfPartnership, description, scheduleChat, keepInLoop }  = await req.json();


    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true, // true for SSL (465)
      auth: {
        user: process.env.ZOHO_USER,      // hello@techthribe.com
        pass: process.env.ZOHO_APP_PASS,  // your Zoho app password
      },
    });

    const mailOptions = {
      from: `hello@techthribe.com`,
      to: process.env.ZOHO_USER,
      subject: `New Message from ${companyName}`,
      html: `
        <h3>PARTNER WITH THRIBE COMMUNITY</h3>
        <p><strong>Company Name:</strong> ${companyName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contact Person:</strong><br/>${contactPerson}</p>
         <p><strong>Website Link:</strong><br/>${websiteLink}</p>
          <p><strong>Kind Of Partnership:</strong><br/>${kindOfPartnership}</p>
           <p><strong>Description:</strong><br/>${description}</p>
            <p><strong>Schedule Chat:</strong><br/>${scheduleChat}</p>
            <p><strong>Keep In Loop:</strong><br/>${keepInLoop}</p>
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