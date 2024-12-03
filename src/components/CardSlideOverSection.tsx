"use client";

import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { ServiceCard } from "./ServiceCard";

export const CardSlideOverSection: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const elementContainerRef = React.useRef<HTMLDivElement>(null);
  const titleSectionRef = React.useRef<HTMLDivElement>(null);
  const section1Ref = React.useRef<HTMLDivElement>(null);
  const section2Ref = React.useRef<HTMLDivElement>(null);
  const section3Ref = React.useRef<HTMLDivElement>(null);

  const blob1Ref = React.useRef<HTMLDivElement>(null);
  const blob2Ref = React.useRef<HTMLDivElement>(null);
  const blob3Ref = React.useRef<HTMLDivElement>(null);
  const blob4Ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (
      !containerRef.current ||
      !elementContainerRef.current ||
      !section1Ref.current ||
      !section2Ref.current ||
      !section3Ref.current ||
      !blob1Ref.current ||
      !blob2Ref.current ||
      !blob3Ref.current ||
      !blob4Ref.current
    )
      return;
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      defaults: { ease: "none", duration: 1 }, // Smoother ease and consistent duration
    });

    timeline.fromTo(
      [
        titleSectionRef.current,
        blob1Ref.current,
        blob2Ref.current,
        blob3Ref.current,
        blob4Ref.current,
      ],
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
      titleSectionRef.current,
      {
        y: 0,
        x: 0,
        rotateY: 0,
      },
      {
        x: "-100vw",
        y: -500,
        rotateY: 30,
        ease: "power4.in",
      },
      "1"
    );

    timeline.fromTo(
      section1Ref.current,
      {
        y: 500,
        x: "100vw",
        rotateY: -30,
      },
      {
        x: "-100vw",
        y: -500,
        rotateY: 30,
      },
      "1.5"
    );
    timeline.fromTo(
      blob1Ref.current,
      {
        width: 700,
        height: 700,
        top: 0,
        left: -300,
      },
      {
        z: 2,
        top: 0,
        left: 0,
        width: "150vw",
        height: "150vh",
      },
      "1.5"
    );

    timeline.fromTo(
      section2Ref.current,
      {
        y: 500,
        x: "100vw",
        rotateY: -30,
      },
      {
        x: "-100vw",
        y: -500,
        rotateY: 30,
      },
      "2"
    );
    timeline.fromTo(
      blob2Ref.current,
      {
        width: 600,
        height: 600,
        bottom: 0,
        left: -300,
      },
      {
        z: 2,
        left: 0,
        bottom: 0,
        width: "150vw",
        height: "150vh",
      },
      "2"
    );

    timeline.fromTo(
      section3Ref.current,
      {
        y: 500,
        x: "100vw",
        rotateY: -30,
      },
      {
        x: "-100vw",
        y: -500,
        rotateY: 30,
      },
      "2.5"
    );
    timeline.fromTo(
      blob3Ref.current,
      {
        width: 700,
        height: 700,
        top: 0,
        right: -300,
      },
      {
        z: 2,
        top: 0,
        right: 0,
        width: "150vw",
        height: "150vh",
      },
      "2.5"
    );

    timeline.fromTo(
      [blob1Ref.current, blob2Ref.current, blob3Ref.current, blob4Ref.current],
      {
        scale: 1,
        autoAlpha: 1,
      },
      {
        scale: 0,
        autoAlpha: 0,
      },
      "3"
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
        marginTop: "-120vh",
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "300vh",
      }}
    >
      <div
        ref={elementContainerRef}
        style={{
          width: "100%",
          height: "100vh",
        }}
      >
        <div>
          <div
            ref={blob1Ref}
            style={{
              position: "absolute",
              top: 0,
              left: -300,
              width: "700px",
              height: "700px",
              filter: "blur(100px)",
            }}
          >
            <img
              loading="lazy"
              src={"./background-gradient-1.png"}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                clipPath: `url("#blob1")`,
              }}
            />
          </div>
          <div
            ref={blob2Ref}
            style={{
              position: "absolute",
              bottom: 0,
              left: -100,
              width: "600px",
              height: "600px",
              filter: "blur(100px)",
            }}
          >
            <img
              loading="lazy"
              src={"./background-gradient-3.png"}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                clipPath: `url("#blob3")`,
              }}
            />
          </div>

          <div
            ref={blob3Ref}
            style={{
              position: "absolute",
              top: 0,
              right: -300,
              width: "700px",
              height: "700px",
              filter: "blur(100px)",
            }}
          >
            <img
              loading="lazy"
              src={"./background-gradient-2.png"}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                clipPath: `url("#blob4")`,
              }}
            />
          </div>
          <div
            ref={blob4Ref}
            style={{
              position: "absolute",
              bottom: 0,
              right: -100,
              width: "600px",
              height: "600px",
              filter: "blur(100px)",
            }}
          >
            <img
              loading="lazy"
              src={"./background-gradient-1.png"}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                clipPath: `url("#blob3")`,
              }}
            />
          </div>
        </div>
        <div
          className="flex justify-center items-center"
          style={{
            width: "100%",
            height: "100vh",
            perspective: "1000px",
            transformStyle: "preserve-3d",
          }}
        >
          <div
            className="absolute  w-full h-full flex justify-center items-center"
            ref={titleSectionRef}
          >
            <div className="relative w-full h-full flex justify-center items-center">
              <h2
                className="text-center text-8xl tracking-widest container"
                style={{
                  backfaceVisibility: "hidden",
                  zIndex: 10,
                }}
              >
                We specialize in transforming ideas into impactful digital
                experiences.
              </h2>
            </div>
          </div>

          <div className="absolute w-full container" ref={section1Ref}>
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

          <div className="absolute w-full container" ref={section2Ref}>
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

          <div className="absolute w-full container" ref={section3Ref}>
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
        </div>
      </div>
    </div>
  );
};
