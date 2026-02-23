import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ThankYouPage() {
  return (
    <main className="section-wrap py-24 text-center">
      <h1 className="font-heading text-4xl">Thank you for your purchase!</h1>
      <p className="mx-auto mt-4 max-w-xl text-navy/80">Your instant download links are ready below. Save these files to your device.</p>
      <div className="mx-auto mt-8 grid max-w-xl gap-3 text-left">
        <a className="rounded-xl border border-navy/10 bg-white p-4" href="#">Download Quick Start eBook (PDF)</a>
        <a className="rounded-xl border border-navy/10 bg-white p-4" href="#">Download Full Guide (PDF)</a>
        <a className="rounded-xl border border-navy/10 bg-white p-4" href="#">Access Course Dashboard</a>
      </div>
      <Button asChild className="mt-8"><Link href="/">Return home</Link></Button>
    </main>
  );
}
