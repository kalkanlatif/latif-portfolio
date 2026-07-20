"use server";

import { z } from "zod";
import { Resend } from "resend";
import { createClient } from "@/lib/supabase/server";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

type ContactInput = z.infer<typeof schema>;

export type ContactFormState = {
  success: boolean;
  error?: string;
};

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(
  data: ContactInput,
): Promise<ContactFormState> {
  const parsed = schema.safeParse(data);
  if (!parsed.success) {
    return { success: false, error: "Ungültige Eingabe." };
  }

  const supabase = await createClient();
  const { error } = await supabase.from("contact_messages").insert({
    name: parsed.data.name,
    email: parsed.data.email,
    message: parsed.data.message,
  });

  if (error) {
    return {
      success: false,
      error: "Nachricht konnte nicht gesendet werden.",
    };
  }

  try {
    await resend.emails.send({
      from: "Portfolio Kontaktformular <onboarding@resend.dev>",
      to: "kalkanlatif818@gmail.com",
      replyTo: parsed.data.email,
      subject: `Neue Nachricht von ${parsed.data.name}`,
      text: `Name: ${parsed.data.name}\nE-Mail: ${parsed.data.email}\n\n${parsed.data.message}`,
    });
  } catch (emailError) {
    console.error("Resend email send failed:", emailError);
  }

  return { success: true };
}
