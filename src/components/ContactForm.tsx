"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "Bitte Namen angeben"),
  email: z.string().email("Gültige E-Mail-Adresse angeben"),
  message: z.string().min(10, "Nachricht ist zu kurz"),
});

type FormValues = z.infer<typeof schema>;

const fieldClass =
  "w-full rounded-md border border-card-dark/20 bg-white px-3 py-2 font-body text-sm text-ink outline-none transition-colors focus:border-card-dark";

const labelClass =
  "mb-1 block font-mono text-[10.5px] uppercase tracking-[0.06em] text-card-dark";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormValues) => {
    const subject = encodeURIComponent(`Portfolio-Kontakt von ${data.name}`);
    const body = encodeURIComponent(
      `${data.message}\n\n— ${data.name} (${data.email})`,
    );
    const mailtoUrl = `mailto:kalkanlatif818@gmail.com?subject=${subject}&body=${body}`;
    // eslint-disable-next-line react-hooks/immutability -- navigation side effect in a submit handler, not a render
    window.location.href = mailtoUrl;
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div>
        <label className={labelClass}>Name</label>
        <input {...register("name")} className={fieldClass} />
        {errors.name && (
          <p className="mt-1 font-body text-[11.5px] text-red-600">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label className={labelClass}>E-Mail</label>
        <input type="email" {...register("email")} className={fieldClass} />
        {errors.email && (
          <p className="mt-1 font-body text-[11.5px] text-red-600">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label className={labelClass}>Nachricht</label>
        <textarea
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
        className="mt-1 inline-flex items-center justify-center gap-2 rounded-pill bg-card-dark px-6 py-3 font-mono text-[11.5px] uppercase tracking-[0.08em] text-accent-bright transition-all duration-200 hover:-translate-y-0.5 hover:scale-105 hover:bg-[#1c2417] hover:shadow-[0_10px_20px_-6px_rgba(20,31,14,0.5)]"
      >
        Nachricht senden
      </button>

      {isSubmitSuccessful && (
        <p className="font-body text-[12px] text-card-dark/80">
          Dein E-Mail-Programm öffnet sich mit der vorausgefüllten
          Nachricht.
        </p>
      )}
    </form>
  );
}
