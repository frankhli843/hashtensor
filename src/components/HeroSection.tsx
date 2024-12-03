"use client";

import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const HighlightText = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode | React.ReactNode[];
  delay?: number;
}) => {
  const textHighlight = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    if (!textHighlight.current) return;

    const timeline = gsap.timeline();

    timeline.fromTo(
      textHighlight.current,
      {
        width: "0%",
      },
      {
        width: "calc(100% + 32px)",
        duration: 1,
        delay,
      }
    );

    timeline.play();
  }, [textHighlight, delay]);

  return (
    <span
      style={{
        overflow: "visible",
        display: "inline-block",
        position: "relative",
      }}
    >
      <span
        ref={textHighlight}
        style={{
          position: "absolute",
          top: "0.5rem",
          left: "-16px",
          maxWidth: "calc(100% + 32px)",
          height: "9rem",
          background: "#B0BDF5",
        }}
      />
      <span
        style={{
          position: "relative",
          display: "inline-block",
          zIndex: 1,
        }}
      >
        {children}
      </span>
    </span>
  );
};

const Counter = ({
  target = 0,
  increment = 1,
}: {
  target?: number;
  increment?: number;
}) => {
  const textRef = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    if (textRef.current === null) return;

    gsap.fromTo(
      textRef.current,
      {
        textContent: 0,
        ease: "power1.in",
        snap: {
          textContent: increment,
        },
      },
      {
        textContent: target,
        snap: {
          textContent: increment,
        },
        duration: 2,
        ease: "power1.out",
        delay: 0.5,
      }
    );
  }, [target]);

  return <span ref={textRef}>0</span>;
};

const HIGHLIGHT_OFFSET = 0.5;

export const HeroSection: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const contentRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!containerRef.current || !contentRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline();

    timeline.fromTo(
      contentRef.current,
      {
        delay: 1,
        autoAlpha: 1,
      },
      {
        autoAlpha: 0,
      }
    );

    const scrollTrigger = ScrollTrigger.create({
      trigger: containerRef.current,
      animation: timeline,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      toggleActions: "play none none reverse",
    });

    return () => {
      scrollTrigger.kill();
    };
  }, [containerRef, contentRef]);

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{
        minHeight: "200vh",
        overflow: "hidden",
      }}
    >
      <div ref={contentRef}>
        <div
          className="h-screen w-full flex gap-8 items-center relative mx-auto"
          style={{
            maxWidth: "1580px",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100vw",
              height: "100%",
              zIndex: -1,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100vw",
              height: "100%",
              backgroundSize: "100%",
              zIndex: -1,
            }}
          />
          <div className="w-8/12 ml-8">
            <h1
              className="text-9xl font-normal leading-tight"
              style={{
                fontFamily: "",
              }}
            >
              Blending{" "}
              <HighlightText delay={HIGHLIGHT_OFFSET}>creativity</HighlightText>
              <br />
              and <HighlightText delay={HIGHLIGHT_OFFSET + 1}>
                AI
              </HighlightText>{" "}
              through
              <br />
              <HighlightText delay={HIGHLIGHT_OFFSET + 2}>
                design
              </HighlightText>{" "}
              and
              <br />
              <HighlightText delay={HIGHLIGHT_OFFSET + 3}>
                engineering.
              </HighlightText>
            </h1>
          </div>
          <div className="flex-1 flex flex-col justify-between h-2/5 mx-8">
            <p className="text-2xl">
              Hashtensor is a studio that specializes in AI-driven solutions,
              creating intuitive experiences that connect and inspire.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex gap-14">
                <div className="flex flex-col ">
                  <h3 className="text-7xl font-semibold text-primary">
                    <Counter target={6} />
                  </h3>
                  <p className="">Years</p>
                </div>
                <div className="flex flex-col ">
                  <h3 className="text-7xl font-semibold text-primary">
                    <Counter target={12} />
                  </h3>
                  <p className="">Clients</p>
                </div>
                <div className="flex flex-col ">
                  <h3 className="text-7xl font-semibold text-primary">
                    <Counter target={34} />
                  </h3>
                  <p className="">Projects</p>
                </div>
              </div>
              <div className="flex flex-col ">
                <h2 className="text-7xl font-semibold text-primary">
                  $<Counter target={2.1} increment={0.1} />
                  Million
                </h2>
                <p className="">In funding</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
