"use client";

import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { ServiceCard } from "./ServiceCard";
import { GRAINY_IMAGE } from "@/lib/various";

export const CardSlideOverSection: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const elementContainerRef = React.useRef<HTMLDivElement>(null);
  const titleSectionRef = React.useRef<HTMLDivElement>(null);
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

    const timeline = gsap.timeline({
      defaults: { ease: "none", duration: 1 }, // Smoother ease and consistent duration
    });

    timeline.fromTo(
      [titleSectionRef.current],
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
      },
      "0"
    );
    timeline.fromTo(
      elementContainerRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        ease: "power4.inOut",
      },
      "0"
    );

    timeline.fromTo(
      elementContainerRef.current,
      {
        backgroundColor: "#2449E0",
      },
      {
        backgroundColor: "#617EF8",
        duration: 5.5,
        ease: "power4.inOut",
      },
      "0"
    );

    timeline.fromTo(
      titleSectionRef.current,
      {
        x: 0,
        z: 0,
        rotateY: 0,
      },
      {
        x: "-100vw",
        z: -500,
        rotateY: -30,
        ease: "power4.in",
      },
      "1"
    );

    timeline.fromTo(
      section1Ref.current,
      {
        x: "100vw",
        z: -500,
        rotateY: 30,
      },
      {
        x: "0vw",
        z: 0,
        rotateY: 0,
        duration: 1,
      },
      "1.5"
    );
    timeline.fromTo(
      section1Ref.current,
      {
        x: "0vw",
        z: 0,
        rotateY: 0,
      },
      {
        x: "-100vw",
        z: -500,
        rotateY: -30,
      },
      "2.5"
    );

    timeline.fromTo(
      section2Ref.current,
      {
        x: "100vw",
        z: -500,
        rotateY: 30,
      },
      {
        x: "0vw",
        z: 0,
        rotateY: 0,
        duration: 1,
      },
      "2.5"
    );
    timeline.fromTo(
      section2Ref.current,
      {
        x: "0vw",
        z: 0,
        rotateY: 0,
      },
      {
        x: "-100vw",
        z: -500,
        rotateY: -30,
      },
      "3.5"
    );

    timeline.fromTo(
      section3Ref.current,
      {
        x: "100vw",
        z: -500,
        rotateY: 30,
      },
      {
        x: "0vw",
        z: 0,
        rotateY: 0,
        duration: 1,
      },
      "3.5"
    );
    timeline.fromTo(
      section3Ref.current,
      {
        x: "0vw",
        z: 0,
        rotateY: 0,
      },
      {
        x: "-100vw",
        z: -500,
        rotateY: -30,
      },
      "4.5"
    );

    timeline.fromTo(
      section4Ref.current,
      {
        x: "100vw",
        z: -500,
        rotateY: 30,
      },
      {
        x: "0vw",
        z: 0,
        rotateY: 0,
        duration: 1,
      },
      "4.5"
    );
    timeline.fromTo(
      section4Ref.current,
      {
        x: "0vw",
        z: 0,
        opacity: 1,
        rotateY: 0,
      },
      {
        x: "0vw",
        z: 0,
        rotateY: 0,
        opacity: 0,
        duration: 1,
      },
      "5.5"
    );
    timeline.fromTo(
      section4Ref.current,
      {
        x: "0vw",
        z: 0,
        rotateY: 0,
      },
      {
        x: "0vw",
        z: 0,
        rotateY: 0,
        duration: 1,
      },
      "6.5"
    );

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom bottom",
      animation: timeline,
      scrub: 1,
      pin: elementContainerRef.current,
    });
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        minHeight: "700vh",
        marginTop: "-150vh",
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "300vh",
        isolation: "isolate",
      }}
    >
      <div
        ref={elementContainerRef}
        style={{
          width: "100%",
          height: "100vh",
          backgroundImage: `${GRAINY_IMAGE}`,
          backgroundColor: "blue",
          backgroundBlendMode: "darken",
          backgroundSize: "100%",
          backgroundPosition: "-200% -100%",
        }}
      >
        <div
          className="flex justify-center items-center"
          style={{
            width: "100%",
            height: "100vh",
            perspective: "50vw",
            transformStyle: "preserve-3d",
          }}
        >
          <div
            className="absolute  w-full h-full flex  items-center"
            ref={titleSectionRef}
          >
            <div
              className="relative w-full flex items-end justify-between p-32"
              style={{
                maxWidth: "1580px",
              }}
            >
              <h2
                className=" text-9xl tracking-widest uppercase font-semibold text-white"
                style={{
                  backfaceVisibility: "hidden",
                  zIndex: 10,
                }}
              >
                We <br />
                Transform <br />
                Ideas into <br />
                Impactful <br />
                Experiences
              </h2>
              <svg
                width="122"
                height="122"
                viewBox="0 0 122 122"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.7333 0.000166893L0.666626 13.0668L90.2666 102.667H9.99996V121.333H122V9.3335H103.333V89.6002L13.7333 0.000166893Z"
                  fill="#E6E6FA"
                />
              </svg>
            </div>
          </div>

          <div className="absolute w-full " ref={section1Ref}>
            <ServiceCard
              title="Digital marketing"
              description="Delivering eye-catching motion graphics and campaigns that earn attention, spark emotion and increase conversions."
              tags={[
                "Marketing support",
                "Creative campaigns",
                "Motion graphics",
                "Social media",
              ]}
              background="url(./background-gradient-1.png)"
            />
          </div>

          <div className="absolute w-full " ref={section2Ref}>
            <ServiceCard
              title="Web design & development"
              description="Craft digital experiences that blend beauty and ROI, capturing attention and unlocking revenue with every interaction."
              tags={[
                "Creative web design",
                "Web development",
                "Copywriting",
                "Web flow",
              ]}
              background="url(./background-gradient-3.png)"
            />
          </div>

          <div className="absolute w-full " ref={section3Ref}>
            <ServiceCard
              title="Branding & design"
              description="We start with your brand, applying strategic insights to build or refine a powerful and cohesive brand identity."
              tags={[
                "Brand strategy",
                "Design systems",
                "Tone of voice",
                "Visual identity",
              ]}
              background="url(./background-gradient-2.png)"
            />
          </div>

          <div className="absolute w-full container" ref={section4Ref}>
            <div className="flex flex-col w-full items-center justify-center">
              <h2 className="text-9xl text-white font-semibold uppercase">
                But that&apos;s <br />
                not all...
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
