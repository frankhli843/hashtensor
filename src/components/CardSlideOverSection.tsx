"use client";

import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export const CardSlideOverSection: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const elementContainerRef = React.useRef<HTMLDivElement>(null);
  const titleSectionRef = React.useRef<HTMLDivElement>(null);
  const titleRef = React.useRef<HTMLDivElement>(null);
  const scrollSectionRef = React.useRef<HTMLDivElement>(null);
  const endTextRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (
      !containerRef.current ||
      !elementContainerRef.current ||
      !scrollSectionRef.current ||
      !titleSectionRef.current ||
      !titleRef.current ||
      !endTextRef.current
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
      [titleRef.current],
      {
        y: 0,
      },
      {
        y: "-30vh",
      },
      "1.2"
    );

    timeline.fromTo(
      [titleRef.current],
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
      "1"
    );

    timeline.fromTo(
      [scrollSectionRef.current],
      {
        opacity: 0,
        y: "30vh",
      },
      {
        opacity: 1,
        y: 0,
      },
      "1"
    );

    timeline.fromTo(
      [scrollSectionRef.current],
      {
        x: "50%",
      },
      {
        x: "-50%",
        duration: 2,
      },
      "2"
    );

    timeline.fromTo(
      [scrollSectionRef.current],
      {
        x: "-50%",
      },
      {
        x: "-100%",
        duration: 2,
      },
      "4"
    );

    timeline.fromTo(
      [endTextRef.current],
      {
        x: "100%",
        opacity: 0,
      },
      {
        x: "0%",
        opacity: 1,
        duration: 2,
      },
      "4"
    );

    timeline.fromTo(
      [endTextRef.current],
      {
        opacity: 1,
      },
      {
        opacity: 1,
        duration: 1,
      },
      "7"
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
        minHeight: "600vh",
        marginTop: "-140vh",
        position: "relative",
        overflow: "hidden",
        width: "100%",
        isolation: "isolate",
      }}
    >
      <div
        ref={elementContainerRef}
        style={{
          width: "100%",
          height: "100vh",
          backgroundSize: "100%",
        }}
      >
        <div
          className="flex justify-center items-center"
          style={{
            width: "100%",
            height: "100vh",
          }}
        >
          <div
            className="absolute  w-full h-full flex flex-col gap-16 items-center"
            ref={titleSectionRef}
          >
            <div
              ref={titleRef}
              className="relative w-full flex items-end justify-between p-4 py-12 md:p-32"
            >
              <h2
                className="text-4xl md:text-9xl tracking-widest uppercase font-semibold text-blue-950"
                style={{
                  backfaceVisibility: "hidden",
                  zIndex: 10,
                  maxWidth: "1580px",
                }}
              >
                what we <br />
                <span>
                  <svg
                    className="w-[2rem] h-[2rem] ml-[1ch] mr-[0.5rem] mt-[-2.5%] md:w-[6rem] md:h-[6rem] md:mt-[-3.5%]"
                    style={{
                      display: "inline-block",
                    }}
                    viewBox="0 0 122 122"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.7333 0.000166893L0.666626 13.0668L90.2666 102.667H9.99996V121.333H122V9.3335H103.333V89.6002L13.7333 0.000166893Z"
                      fill="#2449E0"
                    />
                  </svg>
                </span>
                Do best...
              </h2>
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "nowrap",
                flexDirection: "row",
                alignItems: "center",
                height: "100%",
                position: "absolute",
              }}
            >
              <div
                ref={scrollSectionRef}
                style={{
                  opacity: 0,
                  display: "flex",
                  flexWrap: "nowrap",
                  flexDirection: "row",
                  alignItems: "top",
                  gap: "4vw",
                  position: "relative",
                  transform: "translateX(50%)",
                }}
              >
                <div
                  className="flex flex-col gap-10"
                  style={{
                    width: "max(30vw, 30vh)",
                  }}
                >
                  <div
                    className="relative overflow-hidden"
                    style={{
                      width: "max(30vw, 30vh)",
                      height: "max(30vw, 30vh)",
                      borderRadius: "24px",
                      background: "blue",
                    }}
                  >
                    <p className="absolute text-white text-3xl md:text-4xl top-4 left-4 z-10 font-semibold">
                      [ 1 ]
                    </p>
                    <img
                      src="./whatwedo-1.png"
                      alt="what we do"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        position: "absolute",
                        top: 0,
                        left: 0,
                      }}
                    />
                  </div>
                  <h3 className="text-2xl md:text-3xl uppercase font-semibold text-blue-950">
                    AI-BASED applications
                  </h3>
                  <p className="text-xl md:text-2xl">
                    We create AI-driven applications tailored to industry needs,
                    leveraging the expertise of FAANG-level engineers to deliver
                    scalable, accessible solutions.
                  </p>
                </div>
                <div
                  className="flex flex-col gap-10"
                  style={{
                    width: "max(30vw, 30vh)",
                  }}
                >
                  <div
                    className="relative overflow-hidden"
                    style={{
                      width: "max(30vw, 30vh)",
                      height: "max(30vw, 30vh)",
                      borderRadius: "24px",
                      background: "blue",
                    }}
                  >
                    <p className="absolute text-white text-3xl md:text-4xl top-4 left-4 z-10 font-semibold">
                      [ 2 ]
                    </p>
                    <img
                      src="./whatwedo-2.png"
                      alt="what we do"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        position: "absolute",
                        top: 0,
                        left: 0,
                      }}
                    />
                  </div>
                  <h3 className="text-2xl md:text-3xl uppercase font-semibold text-blue-950">
                    Product Design
                  </h3>
                  <p className="text-xl md:text-2xl">
                    Our designers craft user-centered experiences with a focus
                    on scalability and innovation. Backed by FAANG-level talent,
                    we ensure every design meets the highest industry standards.
                  </p>
                </div>
                <div
                  className="flex flex-col gap-10"
                  style={{
                    width: "max(30vw, 30vh)",
                  }}
                >
                  <div
                    className="relative overflow-hidden"
                    style={{
                      width: "max(30vw, 30vh)",
                      height: "max(30vw, 30vh)",
                      borderRadius: "24px",
                      background: "blue",
                    }}
                  >
                    <p className="absolute text-white text-3xl md:text-4xl top-4 left-4 z-10 font-semibold">
                      [ 3 ]
                    </p>
                    <img
                      src="./whatwedo-3.png"
                      alt="what we do"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        position: "absolute",
                        top: 0,
                        left: 0,
                      }}
                    />
                  </div>
                  <h3 className="text-2xl md:text-3xl uppercase font-semibold text-blue-950">
                    design & development
                  </h3>
                  <p className="text-xl md:text-2xl">
                    We build scalable, AI-powered applications with seamless
                    performance. Our FAANG-experienced developers deliver
                    solutions that drive engagement and ROI.
                  </p>
                </div>
                <div
                  className="flex flex-col gap-10"
                  style={{
                    width: "max(30vw, 30vh)",
                  }}
                >
                  <div
                    className="relative overflow-hidden"
                    style={{
                      width: "max(30vw, 30vh)",
                      height: "max(30vw, 30vh)",
                      borderRadius: "24px",
                      background: "blue",
                    }}
                  >
                    <p className="absolute text-white text-3xl md:text-4xl top-4 left-4 z-10 font-semibold">
                      [ 4 ]
                    </p>
                    <img
                      src="./whatwedo-4.png"
                      alt="what we do"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        position: "absolute",
                        top: 0,
                        left: 0,
                      }}
                    />
                  </div>
                  <h3 className="text-2xl md:text-3xl uppercase font-semibold text-blue-950">
                    BRANDING & GRAPHIC DESIGN
                  </h3>
                  <p className="text-xl md:text-2xl">
                    We shape impactful brand identities with strategic insights
                    and bold visuals. Our team’s expertise, including
                    FAANG-level design talent, ensures your brand stands out.
                  </p>
                </div>
              </div>
            </div>
            <div
              ref={endTextRef}
              className="flex flex-col align-center justify-center text-center absolute"
              style={{
                width: "100vw",
                height: "100vh",
                opacity: 0,
              }}
            >
              <h3 className="text-5xl md:text-8xl text-blue-950 uppercase font-semibold px-4">
                But wait
                <br />
                there&apos;s more...
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
