import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function ConsultingPage() {
  return (
    <main className="section-wrap py-16">
      <h1 className="font-heading text-4xl">1:1 Virtual Consulting</h1>
      <p className="mt-3 text-navy/80">Personalized support for sleep, soothing, and feeding confidence.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <Card><h2 className="font-semibold">30-Min Session</h2><p className="mt-2 text-sm">Fast clarity call for one focused challenge.</p><Button className="mt-4">Book 30 min</Button></Card>
        <Card><h2 className="font-semibold">60-Min Session</h2><p className="mt-2 text-sm">Deep strategy + custom plan + follow-up notes.</p><Button className="mt-4">Book 60 min</Button></Card>
      </div>
      <Card className="mt-8"><h2 className="font-semibold">Booking Calendar Placeholder</h2><div className="mt-4 h-64 rounded-2xl bg-sage/20" /></Card>
      <p className="disclaimer mt-6">Not medical advice – consult your healthcare provider. Backed by WHO, UNICEF, AAP, and pediatric insights.</p>
    </main>
  );
}
