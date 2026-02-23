"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/components/language-provider";
import { Instagram, Facebook, Pin, Youtube, Music2, MessageCircle } from "lucide-react";

export function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer className="mt-20 border-t border-navy/10 bg-[#FAF7F2] py-14">
      <div className="section-wrap">
        <div className="grid gap-8 lg:grid-cols-[200px_1fr]">
          <div className="flex h-40 w-40 items-center justify-center rounded-full border-2 border-terracotta/50 text-center text-xs font-semibold text-navy">
            {t("reclaim")}
          </div>
          <div>
            <h3 className="font-heading text-5xl text-terracotta">{t("instagramTitle")}</h3>
            <p className="mt-2 text-lg text-navy/80">
              {t("instagramSub")} <Link href="https://instagram.com" className="font-semibold text-terracotta">@NeonatoBliss</Link>.
            </p>
            <div className="mt-6 rounded-3xl border border-navy/10 bg-white p-5">
              <p className="font-semibold text-navy">{t("emailTitle")}</p>
              <p className="mt-1 text-sm text-navy/70">{t("emailSub")}</p>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <Input placeholder="Email address" className="bg-white" />
                <Button className="bg-sage text-navy hover:bg-sage/90">{t("subscribe")}</Button>
              </div>
            </div>
            <div className="mt-5 flex gap-3 text-navy/80">
              <Instagram className="h-5 w-5" />
              <Facebook className="h-5 w-5" />
              <Pin className="h-5 w-5" />
              <Youtube className="h-5 w-5" />
              <Music2 className="h-5 w-5" />
              <MessageCircle className="h-5 w-5" />
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-4 text-sm text-navy/80">
          <div><p className="font-semibold text-navy">{t("products")}</p><ul className="mt-2 space-y-1"><li>12-Page Quick Start eBook</li><li>Full 35-Page Guide</li><li>Premium Newborn eBook Bundle</li><li>Consulting Packages</li></ul></div>
          <div><p className="font-semibold text-navy">{t("information")}</p><ul className="mt-2 space-y-1"><li>Blog</li><li>About Us</li><li>Free Resources</li><li>Science Behind the Tools</li></ul></div>
          <div><p className="font-semibold text-navy">{t("support")}</p><ul className="mt-2 space-y-1"><li>Contact Us</li><li>Frequently Asked Questions</li><li>30-Day Happiness Guarantee</li><li>Instant Digital Delivery</li></ul></div>
          <div><p className="font-semibold text-navy">{t("legal")}</p><ul className="mt-2 space-y-1"><li>Terms & Conditions</li><li>Privacy Policy</li><li>Refund Policy</li><li>Do Not Sell My Info</li></ul></div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-navy/10 pt-5 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-navy/70">{t("rights")}</p>
          <div className="flex gap-2">
            <Badge>{t("evidence")}</Badge>
            <Badge>{t("whoBacked")}</Badge>
            <Badge>{t("secure")}</Badge>
          </div>
        </div>
      </div>
    </footer>
  );
}
