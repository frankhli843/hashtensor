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
      className="p-10 rounded-3xl flex justify-between gap-6 bg-white items-center"
      style={{
        width: "100%",
      }}
    >
      <div
        className="flex flex-col gap-6"
        style={{
          flex: 1,
        }}
      >
        <h3 className="text-8xl font-semibold mb-2 text-primary uppercase">
          {title}
        </h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="border-2 px-4 py-1 rounded-lg text-sm">
              {tag}
            </span>
          ))}
        </div>
        <p className="text-lg mb-4">{description}</p>
      </div>
      <div
        className="rounded-3xl"
        style={{
          width: "300px",
          height: "40vh",
          background,
        }}
      ></div>
    </div>
  );
};
