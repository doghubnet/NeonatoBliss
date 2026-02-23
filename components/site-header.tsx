import Link from "next/link";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/data";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-navy/10 bg-white/90 backdrop-blur">
      <div className="section-wrap flex h-16 items-center justify-between gap-4">
        <Link href="/" className="font-heading text-xl font-bold text-navy">
          Newborn Bliss
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
            <Link href="/resources#free-guide">Get Free Guide</Link>
          </Button>
          <Button variant="outline" size="sm">
            EN ▾
          </Button>
        </div>
      </div>
    </header>
  );
}
