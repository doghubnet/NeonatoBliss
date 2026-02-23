"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MoonStar, HeartHandshake, Baby, CloudMoon, Microscope, CheckCircle, CircleAlert } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { LeadMagnetForm } from "@/components/lead-magnet-form";
import { disclaimer, products, testimonials } from "@/lib/data";

const challenges = ["Excessive Crying & Colic", "Fragmented Sleep", "Feeding Confusion", "Feeling Overwhelmed"];

export default function HomePage() {
  return (
    <main>
      <section className="relative min-h-screen overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1800&q=80"
          alt="Diverse parent calmly holding newborn"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/75 to-navy/30" />
        <div className="section-wrap relative z-10 grid min-h-screen items-center gap-8 py-16 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-heading text-4xl leading-tight text-white md:text-6xl">
              NeonatoBliss: Science + Real-Life = Calm Baby & Thriving Growth
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/90">
              Practical tools for 0–12 months that actually reduce crying, improve sleep, and build strong bonds –
              trusted by parents in 20+ countries.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/resources#free-guide">Download Free Guide</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/shop">Browse Resources</Link>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-2 text-xs text-white/90">
              <Badge>Evidence-Based</Badge>
              <Badge>Instant Digital Delivery</Badge>
              <Badge>30-Day Happiness Guarantee</Badge>
              <Badge>Used Worldwide</Badge>
            </div>
          </motion.div>
          <div className="mx-auto w-full max-w-md rounded-3xl bg-white/95 p-6 shadow-soft lg:mt-0">
            <h2 className="font-heading text-2xl">Get your free guide</h2>
            <LeadMagnetForm />
          </div>
        </div>
      </section>

      <section className="section-wrap py-16">
        <h2 className="font-heading text-3xl">The Challenge</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {challenges.map((c) => (
            <Card key={c}>
              <CircleAlert className="h-5 w-5 text-terracotta" />
              <p className="mt-2 font-semibold">{c}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-wrap py-8">
        <h2 className="font-heading text-3xl">How NeonatoBliss Helps</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[HeartHandshake, MoonStar, Baby, CloudMoon, Microscope, CheckCircle].map((Icon, idx) => (
            <Card key={idx}>
              <Icon className="h-6 w-6 text-terracotta" />
              <p className="mt-3 text-sm">
                Responsive Care Lowers Cortisol (Science) + practical routines adaptable for any home (Real Life).
              </p>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-wrap py-16">
        <h2 className="font-heading text-3xl">Shop / Featured Resources</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <Card key={p.slug} className="overflow-hidden p-0">
              <Image src={p.image} alt={p.title} width={500} height={320} className="h-44 w-full object-cover" />
              <div className="p-5">
                <p className="font-semibold">{p.title}</p>
                <ul className="mt-2 list-disc pl-5 text-sm text-navy/80">
                  {p.short.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-bold">{p.price}</span>
                  <Badge>Instant Download</Badge>
                </div>
                <Button asChild className="mt-4 w-full">
                  <Link href={`/product/${p.slug}`}>Add to Cart</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-wrap py-8">
        <h2 className="font-heading text-3xl">The Science Behind Every Tip</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Skin-to-Skin → 25% Cortisol Drop + Microbiome Boost",
            "Responsive Feeding → Better Weight Gain + Secure Attachment",
            "Daylight Rhythm → Melatonin Maturation",
            "Cue-Based Sleep → Less Overtired Crying",
            "Calm Caregiver Tone → Baby Nervous System Co-Regulation",
            "Partner Involvement → Lower Parent Burnout"
          ].map((f) => (
            <Card key={f} className="text-sm">
              {f}
            </Card>
          ))}
        </div>
      </section>

      <section className="section-wrap py-16">
        <h2 className="font-heading text-3xl">Real Parent Results</h2>
        <div className="mt-6 flex gap-4 overflow-x-auto pb-2">
          {testimonials.map((t) => (
            <Card key={t.name} className="min-w-[280px] max-w-sm shrink-0">
              <div className="flex items-center gap-3">
                <Image src={t.image} alt={`${t.name} from ${t.country}`} width={56} height={56} className="h-14 w-14 rounded-full object-cover" />
                <p className="text-sm font-semibold">
                  {t.name} · {t.country}
                </p>
              </div>
              <p className="mt-3 text-sm">“{t.quote}”</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-wrap py-8">
        <h2 className="font-heading text-3xl">Who This Is Perfect For</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-5">
          {["First-time parents", "Working parents", "Partners", "Adoptive families", "Low-resource homes"].map((a) => (
            <Card key={a} className="text-center text-sm font-semibold">
              {a}
            </Card>
          ))}
        </div>
      </section>

      <section className="section-wrap py-16">
        <h2 className="font-heading text-3xl">FAQ</h2>
        <Accordion type="single" collapsible className="mt-6 space-y-3">
          {[
            "Is this suitable for newborns and infants up to 12 months?",
            "Do you support multiple currencies?",
            "Is this only for one country?",
            "What if my baby has medical concerns?",
            "Are partners included?",
            "Can I access content on mobile?",
            "Do bundles save money?",
            "How quickly do I get downloads?"
          ].map((q, i) => (
            <AccordionItem key={q} value={`q${i}`}>
              <AccordionTrigger>{q}</AccordionTrigger>
              <AccordionContent>Yes. {disclaimer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="relative py-24">
        <Image
          src="https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&w=1800&q=80"
          alt="Joyful global family"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy/70" />
        <div className="section-wrap relative text-center text-white">
          <h2 className="font-heading text-4xl">Start Your NeonatoBliss Journey Today</h2>
          <p className="mx-auto mt-3 max-w-2xl">
            Gentle, evidence-based support for calmer babies and confident caregivers worldwide.
          </p>
          <Button asChild size="lg" className="mt-6">
            <Link href="/shop">Start Now</Link>
          </Button>
          <p className="disclaimer mt-5 text-white/90">{disclaimer}</p>
        </div>
      </section>
    </main>
  );
}
