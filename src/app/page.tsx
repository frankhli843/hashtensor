import { ServiceCard } from "@/components/ServiceCard";
import React from "react";

interface ClientLogoProps {
  name: string;
}

const ClientLogo: React.FC<ClientLogoProps> = ({ name }) => {
  return <div className="text-gray-400 text-4xl font-bold mx-4">{name}</div>;
};

export default function Home() {
  return (
    <div className="container mx-auto relative">
      {/* Header */}
      <header className="absolute flex justify-between items-center p-6 container z-50">
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
      </header>

      {/* Hero Section */}
      <section className="flex justify-center	items-center p-16 gap-8 h-screen">
        <div className="flex flex-col gap-8 items-center text-center">
          <h1 className="text-7xl ">
            Bridging creativity and technology <br />
            through design and engineering
          </h1>
          <p className="text-lg text-gray-300">
            Hashtensor is a studio that transforms ideas into products.
          </p>
          <div className="p-2 flex items-center gap-1 rounded-full border-2">
            <p className="text-sm mx-3 text-gray-400">
              HashTensor is accepting new clients
            </p>
            <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-bold">
              Join us
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="flex flex-col justify-center items-center py-16 h-screen">
        <h2 className="text-4xl font-thin mb-8 text-gray-300">01</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          <ServiceCard
            title="Digital marketing"
            description="Delivering eye-catching motion graphics and campaigns that earn attention, spark emotion and increase conversions."
            tags={[
              "Marketing support",
              "Creative campaigns",
              "Motion graphics",
              "Social media",
            ]}
          />
          <ServiceCard
            title="Web design & development"
            description="Craft digital experiences that blend beauty and ROI, capturing attention and unlocking revenue with every interaction."
            tags={[
              "Creative web design",
              "Web development",
              "Copywriting",
              "Web flow",
            ]}
          />
          <ServiceCard
            title="Branding and graphic design"
            description="We start with your brand, applying strategic insights to build or refine a powerful and cohesive brand identity."
            tags={[
              "Brand strategy",
              "Design systems",
              "Tone of voice",
              "Visual identity",
            ]}
          />
        </div>
      </section>

      {/* Clients Section */}
      <section className="flex flex-col justify-center items-center py-16 h-screen">
        <h2 className="text-4xl font-thin mb-8 text-gray-300">02</h2>
        <p className="text-6xl mb-8 text-center">
          We are behind some of the fastest growing products
        </p>
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
