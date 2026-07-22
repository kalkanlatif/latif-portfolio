"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { submitContactForm } from "@/app/actions/contact";

const schema = z.object({
  name: z.string().min(2, "Bitte Namen angeben"),
  email: z.string().email("Gültige E-Mail-Adresse angeben"),
  message: z.string().min(10, "Nachricht ist zu kurz"),
});

type FormValues = z.infer<typeof schema>;

const fieldClass =
  "w-full rounded-md border border-border bg-page px-3 py-2 font-body text-sm text-ink outline-none transition-colors focus:border-accent";

const labelClass =
  "mb-1 block font-mono text-[10px] uppercase tracking-[0.08em] text-muted";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    const result = await submitContactForm(data);
    if (result.success) {
      setStatus("success");
      reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div>
        <label htmlFor="contact-name" className={labelClass}>
          Name
        </label>
        <input id="contact-name" {...register("name")} className={fieldClass} />
        {errors.name && (
          <p className="mt-1 font-body text-[11.5px] text-red-600">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-email" className={labelClass}>
          E-Mail
        </label>
        <input
          id="contact-email"
          type="email"
          {...register("email")}
          className={fieldClass}
        />
        {errors.email && (
          <p className="mt-1 font-body text-[11.5px] text-red-600">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-message" className={labelClass}>
          Nachricht
        </label>
        <textarea
          id="contact-message"
          rows={4}
          {...register("message")}
          className={`${fieldClass} resize-none`}
        />
        {errors.message && (
          <p className="mt-1 font-body text-[11.5px] text-red-600">
            {errors.message.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-1 inline-flex items-center justify-center gap-2 rounded-pill bg-card-dark px-6 py-3 font-mono text-[11.5px] uppercase tracking-[0.08em] text-accent-bright transition-colors hover:bg-[#1c2417] disabled:pointer-events-none disabled:opacity-60"
      >
        {isSubmitting ? "Wird gesendet …" : "Nachricht senden"}
      </button>

      {status === "success" && (
        <p className="font-body text-[12.5px] text-accent">
          Danke! Deine Nachricht wurde gesendet.
        </p>
      )}
      {status === "error" && (
        <p className="font-body text-[12.5px] text-muted">
          Etwas ist schiefgelaufen. Schreib mir gerne direkt an{" "}
          <a href="mailto:kalkanlatif818@gmail.com" className="underline">
            kalkanlatif818@gmail.com
          </a>
          .
        </p>
      )}
    </form>
  );
}
