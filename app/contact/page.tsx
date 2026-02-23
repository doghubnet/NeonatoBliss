import { ContactForm } from "@/components/contact-form";
import { Card } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <main className="section-wrap py-16">
      <h1 className="font-heading text-4xl">Contact</h1>
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <Card><ContactForm /></Card>
        <Card><h2 className="font-semibold">Chat options</h2><p className="mt-2 text-sm">Telegram: @newbornbliss</p><p className="text-sm">WhatsApp: +000 000 0000</p><p className="disclaimer mt-6">Not medical advice – consult your healthcare provider. Backed by WHO, UNICEF, AAP, and pediatric insights.</p></Card>
      </div>
    </main>
  );
}
