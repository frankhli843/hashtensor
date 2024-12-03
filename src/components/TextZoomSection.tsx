"use client";

import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { GRAINY_IMAGE } from "@/lib/various";

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
        y: "100vh",
        opacity: 0,
      },
      {
        y: "0vh",
        opacity: 1,
      },
      "0"
    );

    timeline.fromTo(
      section1Ref.current,
      {
        backgroundPositionY: "0%",
        "--text-zoom-initial-opacity": "0",
      },
      {
        backgroundPositionY: "100%",
        "--text-zoom-initial-opacity": "1",
      },
      "+=0.10"
    );

    timeline.fromTo(
      section1Ref.current,
      {
        scale: 1,
        opacity: 1,
      },
      {
        scale: 40,
        opacity: 0,
        // y: "250%",
        // x: "-575%",
        ease: "power4.in",
        delay: 0.2,
      }
    );

    timeline.fromTo(
      section2Ref.current,
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
      },
      "-=0.2"
    );
    timeline.fromTo(
      section2Ref.current,
      {
        scale: 1,
        opacity: 1,
      },
      {
        scale: 40,
        // y: "-120%",
        // x: "1100%",
        opacity: 0,
        ease: "power4.in",
      }
    );

    timeline.fromTo(
      section3Ref.current,
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
      },
      "-=0.15"
    );
    timeline.fromTo(
      section3Ref.current,
      {
        scale: 1,
        opacity: 1,
      },
      {
        scale: 40,
        // y: "-120%",
        // x: "700%",
        opacity: 0,
        ease: "power4.in",
      }
    );

    timeline.fromTo(
      section4Ref.current,
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
      },
      "-=0.15"
    );
    timeline.fromTo(
      section4Ref.current,
      {
        scale: 1,
        opacity: 1,
      },
      {
        scale: 40,
        // y: "-300%",
        // x: "300%",
        opacity: 0,
        ease: "power4.in",
      }
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
        marginTop: "-200vh",
        width: "100%",
        minHeight: "600vh",
        position: "relative",
        overflow: "hidden",
        maxWidth: "100vw",
      }}
    >
      <div
        ref={elementContainerRef}
        className="flex justify-center items-center"
        style={{
          width: "100%",
          height: "100vh",
          overflow: "hidden",

          // background: "grey",
        }}
      >
        <div
          ref={section1Ref}
          className="absolute h-full flex items-center px-8"
          style={{
            opacity: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(to top, hsl(var(--primary)) 50%, transparent 100%)",
            backgroundSize: "100vw 200vh",
            mixBlendMode: "multiply",
          }}
        >
          <div
            style={{
              opacity: "var(--text-zoom-initial-opacity)",
            }}
          >
            <h2 className="text-9xl uppercase font-bold text-white">
              Transforming <br />
              Concepts int
              <span
                style={{
                  position: "relative",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    display: "block",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -52.5%)",
                    width: "4.125rem",
                    height: "4.125rem",
                    background: "white",
                  }}
                ></span>
                o
              </span>{" "}
              <br />
              Seamless Digital <br />
              Products
            </h2>
          </div>
        </div>

        <div
          ref={section2Ref}
          style={{
            opacity: 0,
          }}
          className="absolute w-full h-full flex items-center px-8"
        >
          <div className="container mx-auto flex items-end">
            <div className="flex gap-4 items-end ">
              <h3 className="text-lg flex flex-col gap-8 ">
                <div className="text-5xl">01/</div>
                <div className="text-8xl uppercase font-semibold text-primary">
                  Our
                  <br />
                  Strategy is <br />
                  about <br />
                  Defining the <br />
                  Vision
                </div>
              </h3>
              <p className="ml-12 w-1/3 text-lg">
                We start by understanding your goals, market, and users. Through
                research and strategic planning, we build a foundation that
                aligns with your vision and sets a clear direction.
              </p>
            </div>
          </div>
        </div>

        <div
          ref={section3Ref}
          style={{
            opacity: 0,
          }}
          className="absolute w-full h-full flex items-center px-8"
        >
          <div className="container mx-auto flex items-end">
            <div className="flex gap-4 items-end ">
              <h3 className="text-lg flex flex-col gap-8 ">
                <div className="text-5xl">02/</div>
                <div className="text-8xl uppercase font-semibold text-primary">
                  Our
                  <br />
                  Designers <br />
                  Craft the <br />
                  right <br />
                  experience
                </div>
              </h3>
              <p className="ml-12 w-1/3 text-lg">
                With a user-centered approach, we transform ideas into engaging,
                functional designs. Every detail is thoughtfully crafted to
                ensure an intuitive and visually compelling experience.
              </p>
            </div>
          </div>
        </div>

        <div
          ref={section4Ref}
          style={{
            opacity: 0,
          }}
          className="absolute w-full h-full flex items-center px-8"
        >
          <div className="container mx-auto flex items-end">
            <div className="flex gap-4 items-end ">
              <h3 className="text-lg flex flex-col gap-8 ">
                <div className="text-5xl">03/</div>
                <div className="text-8xl uppercase font-semibold text-primary">
                  Our
                  <br />
                  Engineers <br />
                  Bring Those <br />
                  Ideas to life
                </div>
              </h3>
              <p className="ml-12 w-1/3 text-lg">
                Our skilled engineers turn designs into dynamic digital
                products, ensuring robust, scalable solutions. We focus on
                seamless functionality, optimization, and performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
