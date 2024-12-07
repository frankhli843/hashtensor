/* eslint-disable @typescript-eslint/ban-ts-comment */
// import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST() {
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

  const mailOptions = {
    from: "hashtensorautomailer@gmail.com",
    to: "henrikheywork@gmail.com",
    subject: "Nodemailer Project",
    text: "Hi from your nodemailer project",
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
