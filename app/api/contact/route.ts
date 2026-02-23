import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const schema = z.object({ name: z.string().min(2), email: z.string().email(), message: z.string().min(10) });

export async function POST(request: Request) {
  const body = await request.json();
  const parse = schema.safeParse(body);
  if (!parse.success) return NextResponse.json({ error: "Invalid input" }, { status: 400 });

  if (process.env.RESEND_API_KEY) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "Newborn Bliss <hello@newbornbliss.com>",
      to: ["support@newbornbliss.com"],
      replyTo: parse.data.email,
      subject: `New contact from ${parse.data.name}`,
      html: `<p>${parse.data.message}</p>`
    });
  }

  return NextResponse.json({ success: true });
}
