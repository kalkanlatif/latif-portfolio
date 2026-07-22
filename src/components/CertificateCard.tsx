"use client";

import { useState } from "react";
import Image from "next/image";

const badgeIcon = (
  <svg
    className="h-5 w-5 sm:h-10 sm:w-10"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#d4af37"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="8" r="6" />
    <path d="M8.7 13.5 7 22l5-3 5 3-1.7-8.5" />
  </svg>
);

export default function CertificateCard({
  issuer,
  name,
  image,
}: {
  issuer: string;
  name: string;
  image?: string;
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      role={image ? "button" : undefined}
      tabIndex={image ? 0 : undefined}
      onClick={image ? () => setFlipped((f) => !f) : undefined}
      onKeyDown={
        image
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setFlipped((f) => !f);
              }
            }
          : undefined
      }
      className="aspect-square [perspective:1000px]"
      style={image ? { cursor: "pointer" } : undefined}
    >
      <div
        className="relative h-full w-full transition-transform duration-500 ease-out [transform-style:preserve-3d]"
        style={{
          transform: flipped
            ? "scale(1.06) rotateY(180deg)"
            : "scale(1) rotateY(0deg)",
        }}
      >
        <div className="absolute inset-0 flex flex-col rounded-card border-2 border-[#d4af37] bg-card-dark p-2 [backface-visibility:hidden] sm:border-[3px] sm:p-4">
          <div className="flex flex-1 items-center justify-center">
            {badgeIcon}
          </div>
          <div className="font-mono text-[6.5px] tracking-[0.06em] text-[#d4af37]/80 uppercase sm:text-[9px]">
            Certificate
          </div>
          <div className="font-mono text-[7px] tracking-[0.06em] text-accent-bright uppercase sm:text-[10px]">
            {issuer}
          </div>
          <div className="line-clamp-3 font-body text-[8.5px] leading-[1.25] text-on-dark sm:text-[13px] sm:leading-[1.4]">
            {name}
          </div>
        </div>

        {image && (
          <div
            className="absolute inset-0 flex items-center justify-center rounded-card border-2 border-[#d4af37] bg-white p-1.5 [backface-visibility:hidden] sm:border-[3px] sm:p-2"
            style={{ transform: "rotateY(180deg)" }}
          >
            <div className="relative h-full w-full">
              <Image
                src={image}
                alt={`${issuer} — ${name}`}
                fill
                className="rounded-[4px] object-contain"
                sizes="(max-width: 640px) 33vw, 170px"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
