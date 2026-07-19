"use client";

import { useEffect } from "react";

const BG_FROM: [number, number, number] = [244, 247, 246];
const BG_TO: [number, number, number] = [0, 0, 0];

const FG_FROM: [number, number, number] = [12, 26, 22];
const FG_TO: [number, number, number] = [244, 247, 246];

const FG_MUTED_FROM: [number, number, number] = [93, 107, 102];
const FG_MUTED_TO: [number, number, number] = [108, 138, 88];

function lerp(a: number, b: number, t: number) {
  return Math.round(a + (b - a) * t);
}

function mix(from: [number, number, number], to: [number, number, number], t: number) {
  const [r, g, b] = from.map((channel, i) => lerp(channel, to[i], t));
  return `rgb(${r}, ${g}, ${b})`;
}

export default function ScrollBackground() {
  useEffect(() => {
    let ticking = false;

    function update() {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      const clamped = Math.min(1, Math.max(0, progress));
      const root = document.documentElement.style;
      root.setProperty("--scroll-bg", mix(BG_FROM, BG_TO, clamped));
      root.setProperty("--scroll-fg", mix(FG_FROM, FG_TO, clamped));
      root.setProperty(
        "--scroll-fg-muted",
        mix(FG_MUTED_FROM, FG_MUTED_TO, clamped),
      );
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return null;
}
