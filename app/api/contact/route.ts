import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    console.log("Received Data:", data);

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your generated app password
      },
    });

    // Email message options
    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender email
      to: "chipsetrmp@gmail.com", // Receiver email (change this to where you want to receive messages)
      subject: "New Contact Form Submission",
      text: `
        📩 New Message from Contact Form:
        ----------------------------------
        🏷 Name: ${data.firstname} ${data.lastname}
        📧 Email: ${data.email}
        📝 Query: ${data.query}
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);

    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ error: "Error sending email" }, { status: 500 });
  }
}
