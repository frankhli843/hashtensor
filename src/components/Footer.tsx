import React from "react";
import { Logo } from "./Logo";

export const Footer: React.FC = () => {
  return (
    <footer
      className="w-screen p-8 md:p-8 flex flex-col md:flex-row gap-24"
      style={{
        backgroundColor: "#0D1E60 ",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div
        className="flex flex-col gap-8"
        style={{
          flex: 1,
        }}
      >
        <Logo colorOverride="#fff" />
        <p className="text-lg text-white">
          Hashtensor is a studio that blends creativity and technology to
          transform ideas into impactful digital products. From strategic
          planning to user-centered design and robust engineering, we bring
          visions to life with seamless functionality and performance.
        </p>
        <p className="text-lg font-medium text-white">
          {new Date().getFullYear()} Hashtensor, All rights reserved.
        </p>
      </div>
      <div
        className="flex flex-col gap-8"
        style={{
          flex: 1,
        }}
      ></div>
    </footer>
  );
};
