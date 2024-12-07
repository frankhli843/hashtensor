/* eslint-disable @typescript-eslint/ban-ts-comment */
import { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  console.log("POST :: /api/contact");

  const transporter = nodemailer.createTransport({
    // @ts-ignore
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    },
  });

  console.log({
    type: "OAuth2",
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  });
  const { name, email, budget, message, tags } = await req.json();

  const mailOptions = {
    from: "hashtensorautomailer@gmail.com",
    to: "wsfccorp@gmail.com",
    subject: "HashTensor Contact Form",
    text: "Hi from your nodemailer project",
    html: `
    <p>You got mail!</p>
    <p>Name: ${name}</p>
    <p>Email: ${email}</p>
    <p>Budget: ${budget}</p>
    <p>Message: ${message}</p>
    <p>Tags: ${tags.join(", ")}</p>`,
  };

  transporter.sendMail(mailOptions, function (err, data) {
    console.log("data => ", data);
    if (err) {
      console.log("Error " + err);
    } else {
      console.log("Email sent successfully");
    }
  });

  return Response.json({ message: "Success" }, { status: 200 });
}
