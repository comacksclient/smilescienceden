import nodemailer from "nodemailer";

export const sendEmail = async (data: Record<string, any>) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_ID,
      pass: process.env.EMAIL_PASS,
    },
  });

  const { name, phone, email, subject, message } = data;

  await transporter.sendMail({
    from: `"${name}" <${email}>`,
    to: "comacksclient@gmail.com", 
    subject: `📩 New Inquiry: ${subject || "General Inquiry"} - Smile Science Dental Clinic`,
    text: `
You have received a new message from the contact form on the Smile Science Dental Clinic website.

Name: ${name}
Phone: ${phone}
Email: ${email}
Subject: ${subject || "Not Provided"}

Message:
${message}
    `,
    html: `
      <div style="font-family: 'Helvetica Neue', Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden; background-color: #ffffff;">
        
        <div style="background-color: #1A3C34; padding: 24px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-family: 'Georgia', serif; font-size: 24px; font-weight: normal;">Smile Science</h1>
          <p style="color: #a3b8b0; margin: 4px 0 0; font-size: 10px; letter-spacing: 2px; text-transform: uppercase;">DENTISTRY</p>
        </div>

        <div style="padding: 30px 24px;">
          <h2 style="color: #1A3C34; margin-top: 0; font-size: 18px;">📬 New Website Request</h2>
          <p style="color: #666; font-size: 14px; margin-bottom: 24px;">You have received a new inquiry via the website contact form.</p>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #888; font-size: 12px; width: 80px;">NAME</td>
              <td style="padding: 8px 0; color: #333; font-weight: bold;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #888; font-size: 12px;">PHONE</td>
              <td style="padding: 8px 0; color: #333; font-weight: bold;">
                <a href="tel:${phone}" style="color: #333; text-decoration: none;">${phone}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #888; font-size: 12px;">EMAIL</td>
              <td style="padding: 8px 0; color: #333; font-weight: bold;">
                <a href="mailto:${email}" style="color: #1A3C34; text-decoration: none;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #888; font-size: 12px;">SUBJECT</td>
              <td style="padding: 8px 0; color: #333; font-weight: bold;">${subject || "General Inquiry"}</td>
            </tr>
          </table>

          <div style="background-color: #FDFBF7; padding: 20px; border-radius: 8px; border-left: 4px solid #1A3C34; margin-top: 24px;">
            <p style="margin: 0; white-space: pre-line; color: #444; line-height: 1.6;">${message.replace(/\n/g, "<br/>")}</p>
          </div>
        </div>

        <div style="background-color: #f9fafb; padding: 15px; text-align: center; border-top: 1px solid #e5e7eb;">
          <p style="font-size: 11px; color: #9ca3af; margin: 0;">
            Sent via Smile Science Dental Clinic Web Form • Powered by <strong>Comacks</strong>
          </p>
        </div>
      </div>
    `,
  });
};