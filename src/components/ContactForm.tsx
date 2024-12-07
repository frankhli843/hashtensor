import React from "react";

export const ContactForm: React.FC = () => {
  const sendMail = async () => {
    const res = await fetch("/api/contact", {
      method: "POST",
    });

    if (res.ok) {
      console.log("Mail sent!");
    } else {
      console.error("Error sending mail");
    }
  };

  return (
    <div className="min-h-[100vh] w-full">
      <button onClick={sendMail}>Test mail</button>
    </div>
  );
};
