/* eslint-disable @next/next/no-img-element */
"use client";

/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as THREE from "three";
import React from "react";
import gsap from "gsap";
import useWindowSize from "@/lib/useWindowSize";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

interface ScrollImageProps {
  src: string;
}
const ScrollImage: React.FC<ScrollImageProps> = ({ src }) => {
  return (
    <div
      style={{
        height: "64px",
      }}
    >
      <img
        src={src}
        height="64px"
        style={{
          objectFit: "contain",
          minHeight: "64px",
          maxHeight: "64px",
        }}
        alt=""
        role="presentation"
      />
    </div>
  );
};

export const CollaborationsSection = () => {
  const waveModel = React.useRef<THREE.Mesh>(
    null
  ) as React.MutableRefObject<THREE.Mesh>;
  const renderer2 = React.useRef<THREE.WebGLRenderer>(
    null
  ) as React.MutableRefObject<THREE.WebGLRenderer>;
  const camera2 = React.useRef<THREE.OrthographicCamera>(
    null
  ) as React.MutableRefObject<THREE.OrthographicCamera>;

  const contentRef = React.useRef<HTMLDivElement>(
    null
  ) as React.MutableRefObject<HTMLDivElement>;

  const canvasRef = React.useRef<HTMLCanvasElement>(
    null
  ) as React.MutableRefObject<HTMLCanvasElement>;

  const containerRef = React.useRef<HTMLDivElement>(
    null
  ) as React.MutableRefObject<HTMLDivElement>;

  const backdropRef = React.useRef<HTMLDivElement>(
    null
  ) as React.MutableRefObject<HTMLDivElement>;

  const textRef = React.useRef<HTMLDivElement>(
    null
  ) as React.MutableRefObject<HTMLDivElement>;

  const { width, height } = useWindowSize();

  React.useEffect(() => {
    if (!renderer2.current || !camera2.current || !width || !height) return;

    const container = canvasRef.current.getBoundingClientRect();
    camera2.current.updateProjectionMatrix();
    renderer2.current.setSize(container.width, container.height);
  }, [renderer2, camera2, width, height]);

  React.useEffect(() => {
    InitializeThreeJS(canvasRef, waveModel, renderer2, camera2);
    BuildAnimation(waveModel, containerRef, contentRef, backdropRef, textRef);
  }, [width, height]);

  return (
    <div
      style={{
        marginTop: "-165vh",
        width: "100%",
        height: "200vh",
        overflow: "clip",
      }}
    >
      <div
        ref={containerRef}
        style={{
          width: "100%",
          height: "200vh",
          position: "absolute",
        }}
      >
        <div
          ref={contentRef}
          className="flex flex-col justify-center items-center"
          style={{
            width: "100%",
            height: "100vh",
            top: "0",
            transform: "translateZ(0)",
            position: "sticky",
          }}
        >
          <canvas
            ref={canvasRef}
            style={{
              position: "absolute",
              width: "100%",
              height: "100vh",
            }}
          />
          <div
            ref={backdropRef}
            style={{
              position: "absolute",
              bottom: "0",
              left: "0",
              width: "100%",
              height: "50%",
              background: "linear-gradient(0deg, #0D1E60 0%, transparent 100%)",
            }}
          />
          <div
            ref={textRef}
            style={{
              width: "100%",
              zIndex: 10,
            }}
          >
            <h1 className="text-2xl md:text-4xl text-white font-light text-center container">
              We Collaborate with the Best
            </h1>
            <p className="text-white text-4xl md:text-7xl uppercase mt-8 font-semibold text-center container">
              partnering with some of the fastest-growing products and startups
            </p>
            <div className="relative w-full overflow-clip z-10 m-0 p-0 mt-16">
              <div
                style={{
                  overflow: "hidden",
                  height: "100%",
                  whiteSpace: "nowrap",
                  margin: "0",
                  padding: "0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "64px",
                  width: "calc(3905.59px * 1)",
                  animation: "scrollLogos 30s infinite linear",
                }}
              >
                <ScrollImage src="./hashmatrix-logo.svg" />
                <ScrollImage src="./homezai.svg" />
                <ScrollImage src="./pageon.svg" />
                <ScrollImage src="./sharpstakes.png" />
                <ScrollImage src="./hashmatrix-logo.svg" />
                <ScrollImage src="./homezai.svg" />
                <ScrollImage src="./pageon.svg" />
                <ScrollImage src="./sharpstakes.png" />
                <ScrollImage src="./hashmatrix-logo.svg" />
                <ScrollImage src="./homezai.svg" />
                <ScrollImage src="./pageon.svg" />
                <ScrollImage src="./sharpstakes.png" />
                <ScrollImage src="./hashmatrix-logo.svg" />
                <ScrollImage src="./homezai.svg" />
                <ScrollImage src="./pageon.svg" />
                <ScrollImage src="./sharpstakes.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const InitializeThreeJS = (
  canvasRef: React.MutableRefObject<HTMLCanvasElement>,
  waveModel: React.MutableRefObject<THREE.Mesh>,
  rendererRef: React.MutableRefObject<THREE.WebGLRenderer>,
  cameraRef: React.MutableRefObject<THREE.OrthographicCamera>
) => {
  if (!canvasRef.current) return;

  const {
    width,
    height, // @ts-ignore
  } = canvasRef.current.getBoundingClientRect();
  const scene = new THREE.Scene();
  const camera = (cameraRef.current = new THREE.OrthographicCamera(
    width / -2,
    width / 2,
    height / 2,
    height / -2,
    1,
    1000
  ));

  const renderer = (rendererRef.current = new THREE.WebGLRenderer({
    antialias: true,
    canvas: canvasRef.current,
    alpha: true,
  }));

  renderer.setSize(width, height);
  renderer.setClearColor(0xfff, 0);

  const light2 = new THREE.AmbientLight(0xfff);
  scene.add(light2);

  camera.position.z = 5;

  const wave1Depth = -1.5;
  const wave1Height = height;
  const wave1Width = width;
  const wave1 = (waveModel.current = generateWaveMesh(
    wave1Depth,
    wave1Width,
    wave1Height,
    0x617ef8,
    0.99
  ));
  scene.add(wave1);

  const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);

    wave1.material.uniforms.delta.value += 0.025;
  };
  animate();
};

const BuildAnimation = (
  waveModel: React.MutableRefObject<THREE.Mesh>,
  containerRef: React.MutableRefObject<HTMLDivElement>,
  contentRef: React.MutableRefObject<HTMLDivElement>,
  backdropRef: React.MutableRefObject<HTMLDivElement>,
  textRef: React.MutableRefObject<HTMLDivElement>
) => {
  if (!waveModel.current) return;

  gsap.registerPlugin(ScrollTrigger);

  const timeline = gsap.timeline();

  const model = waveModel.current;

  timeline.fromTo(
    model.position,
    { y: -model.userData.height / 3 },
    { y: 0, duration: 1.5 },
    0
  );
  timeline.fromTo(
    // @ts-ignore
    model.material.uniforms.seed,
    { value: 1 },
    { value: 0, duration: 1.5, ease: "power3.in" },
    0
  );
  timeline.fromTo(
    backdropRef.current,
    {
      height: "50%",
    },
    {
      height: "100%",
      duration: 1,
    },
    "0"
  );
  timeline.fromTo(
    textRef.current,
    {
      y: "100vh",
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
    },
    "0"
  );

  ScrollTrigger.create({
    trigger: containerRef.current,
    start: "top top",
    end: "bottom bottom",
    animation: timeline,
    scrub: true,
    toggleActions: "play none none reverse",
  });
};

const generateWaveMesh = (
  depth: number,
  width: number,
  height: number,
  color: number,
  seed: number,
  sideCircleColor?: number
) => {
  const aspectRatio = width / height;
  const verticalSegments = 64;
  const horizontalSegments = verticalSegments * aspectRatio;
  const geometry = new THREE.PlaneGeometry(
    width,
    height,
    horizontalSegments,
    verticalSegments
  );

  // Material Logic
  const vertexShader = () => {
    return `
                varying vec3 vUv; 
                uniform float delta;
                uniform float seed;
            
                void main() {
                    vec3 morphedPos = position;
    
                    if(morphedPos.y >= 5.0) {
                      morphedPos.y -= (
                        (sin((position.x / 50.0) + (delta * 2.0)) * 30.0) + 
                        (sin((position.x / 70.0) + (delta * 1.5)) * 30.0) + 
                        (sin((position.x / 150.0) + (delta * 1.25)) * 40.0)
                      ) * seed;
                    }
    
                    vUv = morphedPos; 
                    
    
                    vec4 modelViewPosition = modelViewMatrix * vec4(morphedPos, 1.0);
                    gl_Position = projectionMatrix * modelViewPosition; 
                }
            `;
  };

  const fragmentShader = () => {
    return `
                uniform vec3 color; 
                varying vec3 vUv;
        
                void main() {
                  gl_FragColor = vec4(color, 1.0);
                }
            `;
  };

  const uniforms = {
    color: { type: "vec3", value: new THREE.Color(color) },
    resolution: {
      type: "vec3",
      value: new THREE.Vector2(window.innerWidth, window.innerHeight),
    },
    circleColor: {
      type: "vec3",
      value: new THREE.Color(sideCircleColor || color),
    },
    delta: { type: "float", value: Math.sin(Date.now()) },
    seed: { type: "float", value: seed },
  };
  const material = new THREE.ShaderMaterial({
    uniforms: uniforms,
    fragmentShader: fragmentShader(),
    vertexShader: vertexShader(),
  });
  const mesh = new THREE.Mesh(geometry, material);

  mesh.position.z = depth;
  mesh.position.y = 0 - height / 2;
  mesh.userData.height = height;
  return mesh;
};
