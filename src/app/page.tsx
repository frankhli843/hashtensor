import { CardSlideOverSection } from "@/components/CardSlideOverSection";
import { HeroSection } from "@/components/HeroSection";
import { TextSlideIn } from "@/components/TextSlideIn";
import { TextZoomSection } from "@/components/TextZoomSection";
import { GRAINY_IMAGE } from "@/lib/various";
import React from "react";

interface ClientLogoProps {
  name: string;
}

const ClientLogo: React.FC<ClientLogoProps> = ({ name }) => {
  return <div className="text-gray-400 text-4xl font-bold mx-4">{name}</div>;
};

export default function Home() {
  return (
    <div className="relative w-full">
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
        }}
      />
      {/* Header */}
      {/* <header className="absolute flex justify-between items-center p-6  z-50">
        <div className="text-xl font-bold">hashtensor</div>
        <nav className="flex backdrop-blur-sm rounded-full overflow-hidden">
          <a
            href="#main"
            className="px-8 py-3 border-2 border-gray-400"
            style={{
              borderRight: "none",
              borderRadius: "64px 0 0 64px",
            }}
          >
            Main
          </a>
          <a
            href="#showcase"
            className="px-8 py-3 border-2 text-gray-400"
            style={{
              borderRight: "none",
              borderLeft: "none",
            }}
          >
            Showcase
          </a>
          <a
            href="#services"
            className="px-8 py-3 border-2 text-gray-400"
            style={{
              borderRight: "none",
              borderLeft: "none",
            }}
          >
            Services
          </a>
          <a
            href="#about"
            className="px-8 py-3 border-2 text-gray-400"
            style={{
              borderLeft: "none",
              borderRadius: "0 64px 64px 0",
            }}
          >
            About us
          </a>
        </nav>
        <button className="bg-white text-black px-8 py-2 rounded-full text-sm font-bold">
          Contact us
        </button>
      </header> */}

      {/* Hero Section */}
      <HeroSection />
      <TextZoomSection />

      <CardSlideOverSection />

      {/* Clients Section */}
      <section
        className="flex flex-col justify-center items-center py-16"
        style={{
          minHeight: "100vh",
          marginTop: "-100vh",
        }}
      >
        <div>
          <h2 className="text-center text-lg tracking-widest text-gray-400 mb-4">
            We Collaborate with the Best
          </h2>
          <h1 className="text-center text-6xl mb-24">
            <TextSlideIn text="Proudly partnering with some of the" />
            <TextSlideIn text="fastest-growing products and startups" />
            <TextSlideIn text="in the industry." />
          </h1>
        </div>
        <div className="flex flex-wrap justify-center space-x-6">
          <ClientLogo name="Cider" />
          <ClientLogo name="Minimax" />
          <ClientLogo name="OpenArt" />
          <ClientLogo name="Monica" />
          <ClientLogo name="Anker" />
        </div>
      </section>
    </div>
  );
}
