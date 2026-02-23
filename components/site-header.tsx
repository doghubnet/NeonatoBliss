"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";
import { LanguageSwitcher } from "@/components/language-switcher";

export function SiteHeader() {
  const { t } = useLanguage();
  const navLinks = [
    { href: "/", label: t("navHome") },
    { href: "/shop", label: t("navShop") },
    { href: "/course", label: t("navCourse") },
    { href: "/consulting", label: t("navConsulting") },
    { href: "/resources", label: t("navResources") },
    { href: "/blog", label: t("navBlog") },
    { href: "/about", label: t("navAbout") },
    { href: "/contact", label: t("navContact") }
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-navy/10 bg-white/90 backdrop-blur">
      <div className="section-wrap flex h-16 items-center justify-between gap-4">
        <Link href="/" className="font-heading text-xl font-bold text-navy">
          NeonatoBliss
        </Link>
        <nav className="hidden items-center gap-4 text-sm lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-navy/80 hover:text-navy">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild size="sm">
            <Link href="/resources#free-guide">{t("getFreeGuide")}</Link>
          </Button>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
