import { LeadMagnetForm } from "@/components/lead-magnet-form";
import { Card } from "@/components/ui/card";

export default function ResourcesPage() {
  return (
    <main className="section-wrap py-16">
      <h1 className="font-heading text-4xl">Free Resources</h1>
      <div id="free-guide" className="mt-6 grid gap-6 lg:grid-cols-2">
        <Card><h2 className="font-heading text-2xl">4-page Newborn Survival Guide (Free PDF)</h2><p className="mt-2 text-sm text-navy/80">Get practical, science-backed steps for the first days home.</p><div className="mt-4"><LeadMagnetForm /></div></Card>
        <Card><h2 className="font-semibold">Free downloads</h2><ul className="mt-3 list-disc pl-5 text-sm"><li>Newborn day schedule sample</li><li>Feeding cue checklist</li><li>Sleep-friendly evening rhythm template</li><li>Partner communication scripts</li></ul></Card>
      </div>
      <p className="disclaimer mt-6">Not medical advice – consult your healthcare provider. Backed by WHO, UNICEF, AAP, and pediatric insights.</p>
    </main>
  );
}
