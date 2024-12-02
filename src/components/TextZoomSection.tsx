"use client";

import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { TextSlideIn } from "./TextSlideIn";

export const TextZoomSection: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const elementContainerRef = React.useRef<HTMLDivElement>(null);
  const section1Ref = React.useRef<HTMLDivElement>(null);
  const section2Ref = React.useRef<HTMLDivElement>(null);
  const section3Ref = React.useRef<HTMLDivElement>(null);
  const section4Ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (
      !containerRef.current ||
      !elementContainerRef.current ||
      !section1Ref.current ||
      !section2Ref.current ||
      !section3Ref.current ||
      !section4Ref.current
    )
      return;
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline();

    timeline.fromTo(
      section1Ref.current,
      {
        scale: 1,
        autoAlpha: 1,
      },
      {
        scale: 40,
        autoAlpha: 0,
        y: "1400%",
        ease: "power4.in",
        delay: 0.2,
      }
    );

    timeline.fromTo(
      section2Ref.current,
      {
        scale: 0,
        autoAlpha: 0,
      },
      {
        scale: 1,
        autoAlpha: 1,
      },
      "-=0.2"
    );
    timeline.fromTo(
      section2Ref.current,
      {
        scale: 1,
        autoAlpha: 1,
      },
      {
        scale: 40,
        autoAlpha: 0,
        ease: "power4.in",
      }
    );

    timeline.fromTo(
      section3Ref.current,
      {
        scale: 0,
        autoAlpha: 0,
      },
      {
        scale: 1,
        autoAlpha: 1,
      },
      "-=0.25"
    );
    timeline.fromTo(
      section3Ref.current,
      {
        scale: 1,
        autoAlpha: 1,
      },
      {
        scale: 40,
        autoAlpha: 0,
        ease: "power4.in",
      }
    );

    timeline.fromTo(
      section4Ref.current,
      {
        scale: 0,
        autoAlpha: 0,
      },
      {
        scale: 1,
        autoAlpha: 1,
      },
      "-=0.25"
    );

    const scrollTrigger = ScrollTrigger.create({
      trigger: containerRef.current,
      pin: elementContainerRef.current,
      start: "top top",
      end: "bottom bottom",
      animation: timeline,
      scrub: true,
      toggleActions: "play none none reverse",
    });

    return () => {
      scrollTrigger.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        minHeight: "600vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        ref={elementContainerRef}
        className="flex justify-center items-center"
        style={{
          width: "100%",
          height: "100vh",
          // background: "grey",
        }}
      >
        <div ref={section1Ref} className="absolute">
          <h2 className="text-center text-lg tracking-widest text-gray-400 mb-4">
            Our Process
          </h2>
          <h1 className="text-center text-6xl mb-24">
            <TextSlideIn text="From Concept to Creation: A Seamless Path" />
            <TextSlideIn text="to Digital Innovation" />
          </h1>
        </div>

        <div ref={section2Ref} className="absolute">
          <div className="flex flex-col gap-4 items-center justify-center">
            <h3 className="text-lg flex flex-col gap-2 text-center">
              <div className="text-gray-400">01/Strategy</div>
              <div className="text-5xl">
                Defining the{" "}
                <span
                  style={{
                    background: "-webkit-linear-gradient(#fff, #333)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Vision
                </span>
              </div>
            </h3>
            <p className="mt-4 text-gray-400 text-xl text-center max-w-screen-sm">
              We start by understanding your goals, market, and users. Through
              research and strategic planning, we build a foundation that aligns
              with your vision and sets a clear direction.
            </p>
          </div>
        </div>

        <div ref={section3Ref} className="absolute">
          <div className="flex flex-col gap-4 items-center justify-center">
            <h3 className="text-lg flex flex-col gap-2 text-center">
              <div className="text-gray-400">02/Design</div>
              <div className="text-5xl">Crafting the Experience</div>
            </h3>
            <p className="mt-4 text-gray-400 text-xl text-center max-w-screen-sm">
              With a user-centered approach, we transform ideas into engaging,
              functional designs. Every detail is thoughtfully crafted to ensure
              an intuitive and visually compelling experience.
            </p>
          </div>
        </div>

        <div ref={section4Ref} className="absolute">
          <div className="flex flex-col gap-4 items-center justify-center">
            <h3 className="text-lg flex flex-col gap-2 text-center">
              <div className="text-gray-400">03/Development</div>
              <div className="text-5xl">Bringing Ideas to Life</div>
            </h3>
            <p className="mt-4 text-gray-400 text-xl text-center max-w-screen-sm">
              Our skilled engineers turn designs into dynamic digital products,
              ensuring robust, scalable solutions. We focus on seamless
              functionality, optimization, and performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
