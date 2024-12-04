import React from "react";
import { Logo } from "./Logo";

export const Footer: React.FC = () => {
  return (
    <footer
      className="w-screen p-48 flex gap-24"
      style={{
        backgroundColor: "#0D1E60 ",
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
      >
        <p className="text-lg text-white">Offices</p>
        <div className="flex flex-col gap-2">
          <p className="text-lg text-white">
            <span className="font-medium">New York:</span> 26 Broadway 8th
            floor, NY 10004, USA
          </p>
          <p className="text-lg text-white">
            <span className="font-medium">San Francisco:</span> 532 Natoma St,
            CA 94103, USA{" "}
          </p>
          <p className="text-lg text-white">
            <span className="font-medium">Vancouver:</span> 13571 Commerce Pkwy,
            BC V6V2Z8, CA{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};
