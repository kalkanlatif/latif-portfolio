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
    <div className="flex items-center gap-2.5">
      <svg width="20" height="20" viewBox="0 0 15 15" className="shrink-0">
        <circle cx="7.5" cy="7.5" r="6.75" fill="none" stroke="#5fae2c" strokeWidth="1.3" />
        <line x1="7.5" y1="7.5" x2="7.5" y2="4" stroke="#5fae2c" strokeWidth="1.3" />
        <line x1="7.5" y1="7.5" x2="10" y2="8.5" stroke="#5fae2c" strokeWidth="1.3" />
      </svg>
      <span className="font-mono text-[12.5px] uppercase tracking-[0.1em] text-ink">
        Mannheim · {time}
      </span>
    </div>
  );
}
