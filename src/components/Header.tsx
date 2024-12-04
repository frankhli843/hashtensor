"use client";

import React from "react";
import { Logo } from "./Logo";
import gsap from "gsap";

export const Header: React.FC = () => {
  const logoRef = React.useRef<HTMLDivElement>(null);
  const navRef = React.useRef<HTMLDivElement>(null);
  const buttonRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!logoRef.current || !navRef.current || !buttonRef.current) return;
    const timeline = gsap.timeline();

    // slide and fade in logo
    timeline.fromTo(
      logoRef.current,
      {
        x: "-100%",
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
      },
      "0"
    );

    // slide and fade in nav
    timeline.fromTo(
      navRef.current,
      {
        y: "-100%",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
      },
      "0"
    );

    // slide and fade in button
    timeline.fromTo(
      buttonRef.current,
      {
        x: "100%",
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
      },
      "0"
    );
  }, []);

  return (
    <header className="absolute w-screen flex justify-between items-center px-16 py-4 z-50 overflow-hidden">
      <div ref={logoRef} style={{ opacity: 0 }}>
        <Logo />
      </div>
      <nav
        className="flex rounded-full text-lg"
        ref={navRef}
        style={{ opacity: 0 }}
      >
        <a href="#main" className="px-8 py-3 ">
          Main
        </a>
        <a href="#showcase" className="px-8 py-3">
          Showcase
        </a>
        <a href="#services" className="px-8 py-3 ">
          Services
        </a>
        <a href="#about" className="px-8 py-3">
          About us
        </a>
      </nav>
      <div ref={buttonRef} style={{ opacity: 0 }}>
        <button className="bg-primary text-white px-16 py-2 rounded-full text-lg">
          Contact us
        </button>
      </div>
    </header>
  );
};
