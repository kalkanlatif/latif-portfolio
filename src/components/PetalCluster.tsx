"use client";

import { useState } from "react";
import type { ReactNode } from "react";

type Petal = {
  key: string;
  label: ReactNode;
  detail: ReactNode;
};

export default function PetalCluster({
  petals,
  cardSize,
  radius,
  clusterSize,
  cardClassName,
  labelClassName,
  detailClassName,
}: {
  petals: Petal[];
  cardSize: number;
  radius: number;
  clusterSize: number;
  cardClassName: string;
  labelClassName: string;
  detailClassName: string;
}) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div
      className="relative mx-auto"
      style={{ width: clusterSize, height: clusterSize }}
    >
      {petals.map((petal, i) => {
        const angle = (360 / petals.length) * i;
        const isHovered = hovered === i;
        const transform = isHovered
          ? "translate(-50%, -50%) rotate(0deg) scale(1.3)"
          : `translate(-50%, -50%) rotate(${angle}deg) translateY(-${radius}px)`;

        return (
          <div
            key={petal.key}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: cardSize,
              height: cardSize,
              transform,
              zIndex: isHovered ? 50 : i,
              transition:
                "transform 600ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 600ms cubic-bezier(0.22, 1, 0.36, 1)",
              boxShadow: isHovered
                ? "0 18px 34px -10px rgba(20, 31, 14, 0.45)"
                : "0 2px 6px -2px rgba(20, 31, 14, 0.18)",
            }}
            className={`flex items-center justify-center rounded-card border border-border ${cardClassName}`}
          >
            <span className={labelClassName}>{petal.label}</span>
            <div
              style={{
                position: "absolute",
                top: -cardSize * 0.55,
                left: "50%",
                transform: "translateX(-50%)",
                opacity: isHovered ? 1 : 0,
                transitionDelay: isHovered ? "200ms" : "0ms",
                boxShadow: "0 10px 24px -6px rgba(20, 31, 14, 0.5)",
              }}
              className={`pointer-events-none w-max max-w-52 rounded-md px-3 py-2 text-center transition-opacity duration-500 ${detailClassName}`}
            >
              {petal.detail}
            </div>
          </div>
        );
      })}
    </div>
  );
}
