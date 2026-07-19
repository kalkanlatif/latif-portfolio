"use client";

import { useSyncExternalStore } from "react";

function formatTime(date: Date) {
  return date.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Europe/Berlin",
  });
}

function subscribe(callback: () => void) {
  const interval = setInterval(callback, 30000);
  return () => clearInterval(interval);
}

function getSnapshot() {
  return formatTime(new Date());
}

function getServerSnapshot() {
  return "--:--";
}

export default function LiveClock() {
  const time = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <div className="flex items-center gap-[9px]">
      <svg width="14" height="14" viewBox="0 0 15 15" className="shrink-0">
        <circle cx="7.5" cy="7.5" r="6.75" fill="none" stroke="#5d6b66" strokeWidth="1" />
        <line x1="7.5" y1="7.5" x2="7.5" y2="4" stroke="#5d6b66" strokeWidth="1" />
        <line x1="7.5" y1="7.5" x2="10" y2="8.5" stroke="#5d6b66" strokeWidth="1" />
      </svg>
      <span className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-muted">
        Mannheim · {time}
      </span>
    </div>
  );
}
