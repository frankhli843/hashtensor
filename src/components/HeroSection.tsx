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
          top: "0.75vw",
          left: "-16px",
          maxWidth: "calc(100% + 32px)",
          height: "6vw",
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
        delay: 2.5,
      }
    );
  }, [target]);

  return <span ref={textRef}>0</span>;
};

const HIGHLIGHT_OFFSET = 2.25;

export const HeroSection: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const contentRef = React.useRef<HTMLDivElement>(null);
  const line1Ref = React.useRef<HTMLSpanElement>(null);
  const line2Ref = React.useRef<HTMLSpanElement>(null);
  const line3Ref = React.useRef<HTMLSpanElement>(null);
  const line4Ref = React.useRef<HTMLSpanElement>(null);

  const block1Ref = React.useRef<HTMLDivElement>(null);
  const block2Ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (
      line1Ref.current === null ||
      line2Ref.current === null ||
      line3Ref.current === null ||
      line4Ref.current === null ||
      block1Ref.current === null ||
      block2Ref.current === null
    )
      return;

    const timeline = gsap.timeline();

    timeline.fromTo(
      line1Ref.current,
      {
        autoAlpha: 0,
        y: "10vh",
        "--hero-line-1-blur": "50px",
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.5,
        "--hero-line-1-blur": "0px",
      },
      "0"
    );
    timeline.fromTo(
      line2Ref.current,
      {
        autoAlpha: 0,
        y: "10vh",
        "--hero-line-2-blur": "50px",
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.5,
        "--hero-line-2-blur": "0px",
      },
      "0.2"
    );
    timeline.fromTo(
      line3Ref.current,
      {
        autoAlpha: 0,
        y: "10vh",
        "--hero-line-3-blur": "50px",
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.5,
        "--hero-line-3-blur": "0px",
      },
      "0.4"
    );
    timeline.fromTo(
      line4Ref.current,
      {
        autoAlpha: 0,
        y: "10vh",
        "--hero-line-4-blur": "50px",
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.5,
        "--hero-line-4-blur": "0px",
      },
      "0.6"
    );

    timeline.fromTo(
      block1Ref.current,
      {
        autoAlpha: 0,
        x: "50vw",
      },
      {
        autoAlpha: 1,
        x: "0vw",
        duration: 0.5,
      },
      "1.2"
    );
    timeline.fromTo(
      block2Ref.current,
      {
        autoAlpha: 0,
        x: "50vw",
      },
      {
        autoAlpha: 1,
        x: "0vw",
        duration: 0.5,
      },
      "1.5"
    );
  }, []);

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
          <div className="w-full flex gap-16 relative mx-auto">
            <div
              className="ml-8"
              style={{
                width: "fit-content",
              }}
            >
              <h1
                className=" font-normal leading-tight"
                style={{
                  fontSize: "6vw",
                }}
              >
                <span
                  ref={line1Ref}
                  style={{
                    opacity: 0,
                    display: "inline-block",
                    filter: "blur(var(--hero-line-1-blur))",
                  }}
                >
                  Blending{" "}
                  <HighlightText delay={HIGHLIGHT_OFFSET}>
                    creativity
                  </HighlightText>
                </span>
                <br />
                <span
                  ref={line2Ref}
                  style={{
                    opacity: 0,
                    display: "inline-block",
                    filter: "blur(var(--hero-line-2-blur))",
                  }}
                >
                  and{" "}
                  <HighlightText delay={HIGHLIGHT_OFFSET + 1}>AI</HighlightText>{" "}
                  through
                </span>
                <br />
                <span
                  ref={line3Ref}
                  style={{
                    opacity: 0,
                    display: "inline-block",
                    filter: "blur(var(--hero-line-3-blur))",
                  }}
                >
                  <HighlightText delay={HIGHLIGHT_OFFSET + 1.6}>
                    design
                  </HighlightText>{" "}
                  and
                </span>
                <br />
                <span
                  ref={line4Ref}
                  style={{
                    opacity: 0,
                    display: "inline-block",
                    filter: "blur(var(--hero-line-4-blur))",
                  }}
                >
                  <HighlightText delay={HIGHLIGHT_OFFSET + 2.4}>
                    engineering.
                  </HighlightText>
                </span>
              </h1>
            </div>
            <div
              className="flex flex-col justify-between"
              style={{ minHeight: "100%", flex: 1 }}
            >
              <p className="text-2xl" ref={block1Ref} style={{ opacity: 0 }}>
                Hashtensor is a studio that specializes in AI-driven solutions,
                creating intuitive experiences that connect and inspire.
              </p>
              <div
                className="flex flex-col gap-4"
                ref={block2Ref}
                style={{ opacity: 0 }}
              >
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
                <div className="flex flex-col">
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
    </div>
  );
};
