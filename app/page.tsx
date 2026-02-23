"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MoonStar, HeartHandshake, Baby, CloudMoon, Microscope, CheckCircle, CircleAlert } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/components/language-provider";
import { testimonials } from "@/lib/data";

const challenges = ["Excessive Crying & Colic", "Fragmented Sleep", "Feeding Confusion", "Feeling Overwhelmed"];

export default function HomePage() {
  const { t } = useLanguage();
  const featured = [
    { title: t("card1"), bullets: [t("card1b1"), t("card1b2"), t("card1b3")], price: "$12 USD" },
    { title: t("card2"), bullets: [t("card2b1"), t("card2b2"), t("card2b3")], price: "$29 USD" },
    { title: t("card3"), bullets: [t("card3b1"), t("card3b2"), t("card3b3")], price: "$39 USD" }
  ];

  return (
    <main>
      <section className="relative min-h-screen overflow-hidden">
        <Image
          src="https://img.freepik.com/free-photo/mother-with-daughter-playing-summer-field_1157-37704.jpg?semt=ais_user_personalization&w=740&q=80"
          alt="Warm golden hour mother holding newborn"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#fff9f1]/90 via-[#fff9f1]/80 to-[#fff9f1]/60" />
        <div className="section-wrap relative z-10 grid min-h-screen items-center gap-10 py-16 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-heading text-4xl leading-tight text-navy md:text-6xl">{t("heroTitle")}</h1>
            <p className="mt-4 max-w-xl text-lg text-navy/85">{t("heroSubtitle")}</p>
            <p className="disclaimer mt-6">{t("disclaimer")}</p>
          </motion.div>

          <div className="max-w-md rounded-3xl bg-white/70 p-6 backdrop-blur-sm">
            <p className="font-heading text-5xl tracking-tight leading-none text-[#E07A5F]">{t("founderHey")}</p>
            <h2 className="mt-2 font-heading text-5xl font-bold text-[#1E3A5F]">{t("founderWelcome")}</h2>
            <p className="mt-6 whitespace-pre-line text-lg leading-relaxed text-gray-700">{t("founderBody")}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild className="bg-[#E07A5F] px-8 py-6 text-white hover:bg-[#d56e52]">
                <Link href="/resources#free-guide">{t("downloadGuide")}</Link>
              </Button>
              <Button asChild variant="outline" className="border-2 border-[#1E3A5F] px-8 py-6 text-[#1E3A5F]">
                <Link href="/shop">{t("browseResources")}</Link>
              </Button>
            </div>
            <div className="mt-6 h-3 w-full rounded-full bg-gradient-to-r from-[#E07A5F] via-[#f7d3a8] to-[#A8CABA]" />
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
        <h2 className="font-heading text-3xl">{t("shopTitle")}</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <Card key={p.title} className="overflow-hidden p-0">
              <div className="h-44 bg-gradient-to-br from-sage/40 via-beige to-terracotta/20" />
              <div className="p-6">
                <p className="font-semibold">{p.title}</p>
                <ul className="mt-2 list-disc pl-5 text-sm text-navy/80">{p.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-bold">{p.price}</span>
                  <Badge>{t("instantDownload")}</Badge>
                </div>
                <Button className="mt-4 w-full bg-terracotta text-white hover:bg-terracotta/90">{t("addToCart")}</Button>
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
          ].map((f) => <Card key={f} className="text-sm">{f}</Card>)}
        </div>
      </section>

      <section className="section-wrap py-16">
        <h2 className="font-heading text-3xl">Real Parent Results</h2>
        <div className="mt-6 flex gap-4 overflow-x-auto pb-2">
          {testimonials.map((t) => (
            <Card key={t.name} className="min-w-[280px] max-w-sm shrink-0">
              <div className="flex items-center gap-3">
                <Image src={t.image} alt={`${t.name} from ${t.country}`} width={56} height={56} className="h-14 w-14 rounded-full object-cover" />
                <p className="text-sm font-semibold">{t.name} · {t.country}</p>
              </div>
              <p className="mt-3 text-sm">“{t.quote}”</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-wrap py-8">
        <h2 className="font-heading text-3xl">Who This Is Perfect For</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-5">
          {["First-time parents", "Working parents", "Partners", "Adoptive families", "Low-resource homes"].map((a) => <Card key={a} className="text-center text-sm font-semibold">{a}</Card>)}
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
              <AccordionContent>Yes. {t("disclaimer")}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="relative py-24">
        <Image src="https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&w=1800&q=80" alt="Joyful global family" fill className="object-cover" />
        <div className="absolute inset-0 bg-navy/70" />
        <div className="section-wrap relative text-center text-white">
          <h2 className="font-heading text-4xl">Start Your NeonatoBliss Journey Today</h2>
          <p className="mx-auto mt-3 max-w-2xl">Gentle, evidence-based support for calmer babies and confident caregivers worldwide.</p>
          <Button asChild size="lg" className="mt-6"><Link href="/shop">Start Now</Link></Button>
          <p className="disclaimer mt-5 text-white/90">{t("disclaimer")}</p>
        </div>
      </section>
    </main>
  );
}
