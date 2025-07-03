"use client";

import React, { useRef, useEffect, useState } from "react";

interface LightningBackgroundProps {
  hue?: number;
  xOffset?: number;
  speed?: number;
  intensity?: number;
  size?: number;
}

// Utility to convert hue to hsl color
function hueToHSL(hue: number, intensity: number) {
  return `hsl(${hue}, 100%, ${intensity * 50 + 25}%)`;
}

// Generate a jagged lightning path
function generateLightningPath(
  startX: number,
  startY: number,
  segments: number,
  length: number,
  jaggedness: number
) {
  const points = [{ x: startX, y: startY }];
  let x = startX;
  let y = startY;
  for (let i = 0; i < segments; i++) {
    const angle = (Math.random() - 0.5) * jaggedness;
    x += Math.sin(angle) * 20;
    y += length / segments;
    points.push({ x, y });
  }
  return points;
}

const LightningBackground: React.FC<LightningBackgroundProps> = ({
  hue = 220,
  xOffset = 0,
  speed = 0.5,
  intensity = 0.6,
  size = 2.5,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const boltRef = useRef<{ points: { x: number; y: number }[]; opacity: number }[]>([]);
  const [isDark, setIsDark] = useState(false);

  // Track dark mode
  useEffect(() => {
    const checkDark = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    checkDark();
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isDark) return;
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

    // Less frequent, less busy lightning
    const flashInterval = 600 + Math.random() * 400; // ms, less frequent
    let lastFlash = performance.now();

    function drawLightningBolt(points: { x: number; y: number }[], opacity: number) {
      if (!ctx) return;
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
      }
      ctx.strokeStyle = hueToHSL(hue, intensity);
      ctx.globalAlpha = opacity;
      ctx.lineWidth = 2.5 * size;
      ctx.shadowColor = hueToHSL(hue, 1);
      ctx.shadowBlur = 10 * intensity;
      ctx.stroke();
      ctx.restore();
    }

    function animate(now: number) {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Fade out old bolts more slowly for slow-motion
      boltRef.current = boltRef.current.filter(bolt => bolt.opacity > 0.01);
      for (const bolt of boltRef.current) {
        drawLightningBolt(bolt.points, bolt.opacity);
        bolt.opacity *= 0.96 - speed * 0.1; // slower fade for slow-motion
      }
      // Flash new bolt from top to bottom at a steady, slower rate
      if (now - lastFlash > flashInterval) {
        const lines = Math.round(1 + 2 * intensity); // fewer bolts per flash
        for (let i = 0; i < lines; i++) {
          const startX = window.innerWidth / 2 + xOffset + (Math.random() - 0.5) * window.innerWidth * 0.5;
          const path = generateLightningPath(
            startX,
            0, // always start at the very top
            Math.round(14 + 8 * size),
            window.innerHeight, // go to the bottom
            2.5 + 2 * intensity
          );
          boltRef.current.push({ points: path, opacity: 0.7 + Math.random() * 0.3 });
        }
        lastFlash = now;
      }
      animationFrameId = requestAnimationFrame(animate);
    }
    animationFrameId = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [hue, xOffset, speed, intensity, size, isDark]);

  if (!isDark) return null;

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
        background: "#0a071a",
        transition: "background 0.5s",
      }}
    />
  );
};

export default LightningBackground; 