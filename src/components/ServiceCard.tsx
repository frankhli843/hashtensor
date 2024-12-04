import { GRAINY_IMAGE } from "@/lib/various";
import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  tags: string[];
  background: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  tags,
  background,
}) => {
  return (
    <div
      className="p-10 rounded-3xl flex justify-between gap-6 items-center relative overflow-hidden"
      style={{
        width: "100%",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "100%",
          height: "100%",
          opacity: 0.2,
          backgroundBlendMode: "multiply",
          backgroundImage: `${GRAINY_IMAGE}`,
          backgroundColor: "#2449E0",
          backgroundSize: "140%",
          zIndex: -1,
        }}
      />
      <div
        className="flex flex-col gap-6"
        style={{
          flex: 1,
        }}
      >
        <h3 className="text-8xl font-semibold mb-2 text-white uppercase">
          {title}
        </h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="border-2 px-4 py-1 rounded-lg text-md text-white"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-xl mb-4 text-white">{description}</p>
      </div>
      <div
        className="rounded-3xl"
        style={{
          width: "300px",
          height: "40vh",
          background,
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
};
