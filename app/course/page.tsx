import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CoursePage() {
  return (
    <main className="section-wrap py-16">
      <h1 className="font-heading text-4xl">4-Week Online Video Course</h1>
      <p className="mt-3 max-w-2xl text-navy/80">Weekly modules, recordings, and community support for parents worldwide.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {["Week 1: Crying + Nervous System Basics", "Week 2: Sleep Cycles + Practical Routines", "Week 3: Responsive Feeding + Growth", "Week 4: Bonding, Partners, and Sustainability"].map((m) => <Card key={m}>{m}</Card>)}
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <Card><h2 className="font-semibold">Video Preview Placeholder</h2><div className="mt-4 h-52 rounded-2xl bg-navy/10" /></Card>
        <Card><h2 className="font-semibold">What you get</h2><ul className="mt-3 list-disc pl-5 text-sm"><li>Recordings + worksheets</li><li>Private community</li><li>Global payment options</li><li>30-day happiness guarantee</li></ul><Button className="mt-4">Enroll for $79 USD</Button></Card>
      </div>
      <p className="disclaimer mt-6">Not medical advice – always consult your healthcare provider. Backed by WHO, UNICEF, AAP, and pediatric insights.</p>
    </main>
  );
}
