import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  tags: string[];
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  tags,
}) => {
  return (
    <div
      className="p-10 rounded-3xl flex flex-col justify-between gap-6 border-2 border-gray-500 backdrop-blur-sm"
      style={{
        height: "50vh",
      }}
    >
      <div className="flex flex-col gap-6">
        <h3 className="text-3xl font-bold mb-2">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="border-2 px-4 py-1 rounded-lg text-sm">
              {tag}
            </span>
          ))}
        </div>
        <p className="text-lg mb-4">{description}</p>
      </div>
      <div>
        <button className="border-2 text-white px-8 py-2 rounded-full text-sm">
          Learn more
        </button>
      </div>
    </div>
  );
};
