"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { GRAINY_IMAGE } from "@/lib/various";
import React from "react";

export default function Contact() {
  React.useEffect(() => {
    window.scrollTo(0, 0); // values are x,y-offset
  }, []);

  return (
    <div
      className="relative w-full"
      style={{
        overflowX: "clip",
      }}
    >
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          background: `radial-gradient(circle, #E6EAF2 40%, #B0BDF5 100%), ${GRAINY_IMAGE}`,
          backgroundBlendMode: "screen",
          backgroundSize: "100%",
          backgroundPosition: "-50% -100%",
          zIndex: -1,
        }}
      />
      {/* Header */}
      <Header />
      <div className="flex flex-col lg:flex-row gap-24 py-24 container">
        <div style={{ flex: 1 }}>
          <h1 className="text-primary text-5xl lg:text-7xl font-semibold">
            Let’s create something memorable
          </h1>
          <p className="text-2xl mt-4">
            We’d love to hear from you! Whether it’s a big vision or a small
            idea scribbled on a napkin, drop us a message or shoot us an
            email—whatever works best for you. We’ll make sure to get back to
            you :)
          </p>
          <div className="mt-10 flex flex-col gap-2 rounded-3xl border p-8 border-primary">
            <h2 className="text-3xl">Email</h2>
            <p className="text-xl lg:text-4xl text-blue-950">
              wsfccorp@gmail.com
            </p>
          </div>
        </div>
        <div style={{ flex: 1 }}>{/* <ContactForm /> */}</div>
      </div>
      <Footer />
    </div>
  );
}
