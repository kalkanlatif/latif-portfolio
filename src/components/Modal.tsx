"use client";

import * as Dialog from "@radix-ui/react-dialog";
import type { ReactNode } from "react";

export default function Modal({
  trigger,
  title,
  children,
  wide = false,
  contentClassName = "bg-card",
  titleClassName = "text-ink",
  closeClassName = "text-muted",
}: {
  trigger: ReactNode;
  title: string;
  children: ReactNode;
  wide?: boolean;
  contentClassName?: string;
  titleClassName?: string;
  closeClassName?: string;
}) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-ink/40" />
        <Dialog.Content
          className={`fixed top-1/2 left-1/2 z-50 max-h-[85vh] w-[90vw] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-card border border-border p-6 focus:outline-none ${wide ? "max-w-2xl" : "max-w-lg"} ${contentClassName}`}
        >
          <div className="mb-4 flex items-center justify-between">
            <Dialog.Title
              className={`font-display text-lg font-semibold ${titleClassName}`}
            >
              {title}
            </Dialog.Title>
            <Dialog.Close aria-label="Schließen" className={closeClassName}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </Dialog.Close>
          </div>
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
