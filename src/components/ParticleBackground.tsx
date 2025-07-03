"use client";

import React, { useRef, useEffect, useState } from "react";

const PARTICLE_COUNT = 60;
const BALL_COLOR = "#111";

function randomBetween(a: number, b: number) {
  return a + Math.random() * (b - a);
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLight, setIsLight] = useState(false);

  // Track light mode
  useEffect(() => {
    const checkLight = () => {
      setIsLight(!document.documentElement.classList.contains("dark"));
    };
    checkLight();
    const observer = new MutationObserver(checkLight);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isLight) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    const dpr = window.devicePixelRatio || 1;
    const resize = () => {
      if (!canvas || !ctx) return;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    // Initialize particles
    const particles = Array.from({ length: PARTICLE_COUNT }).map(() => ({
      x: randomBetween(0, window.innerWidth),
      y: randomBetween(0, window.innerHeight),
      r: randomBetween(8, 18),
      dx: randomBetween(-0.7, 0.7),
      dy: randomBetween(-0.7, 0.7),
    }));

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.x += p.dx;
        p.y += p.dy;
        // Bounce off edges
        if (p.x < p.r || p.x > window.innerWidth - p.r) p.dx *= -1;
        if (p.y < p.r || p.y > window.innerHeight - p.r) p.dy *= -1;
        if (!ctx) continue;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
        ctx.fillStyle = BALL_COLOR;
        ctx.globalAlpha = 0.13;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
      animationFrameId = requestAnimationFrame(animate);
    }
    animationFrameId = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isLight]);

  if (!isLight) return null;

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "none",
        background: "#fff",
        transition: "background 0.5s",
      }}
    />
  );
};

export default ParticleBackground; 