import { disclaimer } from "@/lib/data";

export default function PrivacyPage() {
  return (
    <main className="section-wrap py-16">
      <h1 className="font-heading text-4xl">Privacy Policy</h1>
      <p className="mt-4 text-sm text-navy/80">We respect your data privacy and only use your information to deliver resources and support.</p>
      <p className="disclaimer mt-6">{disclaimer}</p>
    </main>
  );
}
