"use client";

import { CardSlideOverSection } from "@/components/CardSlideOverSection";
import { CollaborationsSection } from "@/components/CollaborationsSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { TextZoomSection } from "@/components/TextZoomSection";
import { GRAINY_IMAGE } from "@/lib/various";
import React from "react";

export default function Home() {
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

      {/* Hero Section */}
      <HeroSection />
      <TextZoomSection />

      <CardSlideOverSection />

      {/* Clients Section */}
      <CollaborationsSection />

      <Footer />
    </div>
  );
}
