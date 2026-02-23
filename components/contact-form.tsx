"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10)
});

type FormData = z.infer<typeof schema>;

export function ContactForm() {
  const [status, setStatus] = useState("");
  const form = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit(values: FormData) {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values)
    });
    setStatus(res.ok ? "Message sent! We will reply shortly." : "Unable to send now.");
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-3">
      <Input placeholder="Name" {...form.register("name")} />
      <Input placeholder="Email" type="email" {...form.register("email")} />
      <Textarea placeholder="How can we support you?" {...form.register("message")} />
      <Button type="submit">Send Message</Button>
    </form>
  );
}
