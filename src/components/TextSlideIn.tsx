"use client";

import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

interface TextSlideInProps {
  text: string;
}

export const TextSlideIn: React.FC<TextSlideInProps> = ({ text }) => {
  const textRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!textRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      textRef.current,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 90%", // Start animation when the element is near the viewport
          end: "top 60%", // Animation ends when scrolled slightly further
        },
      }
    );
  }, [text, textRef]);

  return (
    <div ref={textRef} className="">
      <div
        style={{
          clipPath: "polygon(0 0, 110% 0, 110% 110%, 0 110%)",
        }}
      >
        {text}
      </div>
    </div>
  );
};
