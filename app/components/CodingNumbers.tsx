"use client";

import { useEffect, useRef } from "react";

const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789{}[]<>/\\+-*=:$#@|;~!?";
const FONT_SIZE = 14;
const CELL_WIDTH = 8.5;
const LINE_HEIGHT = 23;

type Glyph = { value: string; accent: boolean; alpha: number };

function randomGlyph(): Glyph {
  return {
    value: CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)],
    accent: Math.random() < 0.13,
    alpha: 0.18 + Math.random() * 0.45,
  };
}

export default function CodingNumbers() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    const container = canvas?.parentElement;
    if (!canvas || !context || !container) return;

    let width = 0;
    let height = 0;
    let columns = 0;
    let rows = 0;
    let glyphs: Glyph[] = [];
    let frame = 0;

    const resize = () => {
      const bounds = container.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = bounds.width;
      height = bounds.height;
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      context.font = `500 ${FONT_SIZE}px "SFMono-Regular", Consolas, "Liberation Mono", monospace`;
      context.textBaseline = "top";
      columns = Math.ceil(width / CELL_WIDTH);
      rows = Math.ceil(height / LINE_HEIGHT);
      glyphs = Array.from({ length: columns * rows }, randomGlyph);
      draw();
    };

    const draw = () => {
      const palette = canvas.closest<HTMLElement>(".code-window-screen")
        ?? canvas.closest<HTMLElement>(".portfolio")
        ?? canvas;
      const styles = getComputedStyle(palette);
      const accent = styles.getPropertyValue("--accent").trim() || "#ff9e24";
      const foreground = styles.getPropertyValue("--soft").trim() || "#c5c2bc";

      context.clearRect(0, 0, width, height);
      for (let row = 0; row < rows; row++) {
        for (let column = 0; column < columns; column++) {
          const glyph = glyphs[row * columns + column];
          context.globalAlpha = glyph.alpha;
          context.fillStyle = glyph.accent ? accent : foreground;
          context.fillText(glyph.value, column * CELL_WIDTH, row * LINE_HEIGHT);
        }
      }
      context.globalAlpha = 1;
    };

    const animate = () => {
      frame = window.setInterval(() => {
        const changes = Math.max(1, Math.floor(glyphs.length * 0.018));
        for (let index = 0; index < changes; index++) {
          const position = Math.floor(Math.random() * glyphs.length);
          glyphs[position] = randomGlyph();
        }
        draw();
      }, 90);
    };

    const observer = new ResizeObserver(resize);
    observer.observe(container);
    resize();
    animate();

    return () => {
      observer.disconnect();
      window.clearInterval(frame);
    };
  }, []);

  return (
    <div
      className="coding-numbers"
      aria-hidden="true"
      style={{ width: "100%", height: "clamp(320px, 26vw, 420px)", overflow: "hidden", contain: "size layout paint" }}
    >
      <canvas ref={canvasRef} style={{ display: "block", width: "100%", height: "100%" }} />
    </div>
  );
}
