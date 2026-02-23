"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email()
});

type FormData = z.infer<typeof schema>;

export function LeadMagnetForm() {
  const [message, setMessage] = useState("");
  const form = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit(values: FormData) {
    const res = await fetch("/api/lead-magnet", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values)
    });
    setMessage(res.ok ? "Check your email for the guide link." : "Something went wrong. Please try again.");
  }

  return (
    <form className="grid gap-3" onSubmit={form.handleSubmit(onSubmit)}>
      <Input placeholder="Your name" {...form.register("name")} />
      <Input type="email" placeholder="Email address" {...form.register("email")} />
      <Button type="submit">Download Free 4-Page Survival Guide</Button>
      {message && <p className="text-sm text-navy/80">{message}</p>}
      <p className="disclaimer">
        Not medical advice – consult your healthcare provider. Backed by WHO, UNICEF, AAP, and pediatric insights.
      </p>
    </form>
  );
}
