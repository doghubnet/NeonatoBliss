import { Card } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <main className="section-wrap py-16">
      <h1 className="font-heading text-4xl">About Newborn Bliss</h1>
      <Card className="mt-6">
        <p>
          Newborn Bliss was founded to bridge rigorous infant science and everyday parenting reality. Rooted in Ethiopia and
          built for the world, we support families across cultures, languages, and resource levels.
        </p>
        <p className="mt-3 text-sm text-navy/80">
          Our approach combines insights around oxytocin, cortisol regulation, microbiome protection, brain development, and
          sleep cycles with tools families can actually sustain.
        </p>
      </Card>
      <p className="disclaimer mt-6">Not medical advice – consult your healthcare provider. Backed by WHO, UNICEF, AAP, and pediatric insights.</p>
    </main>
  );
}
