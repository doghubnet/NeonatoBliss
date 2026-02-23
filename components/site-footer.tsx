import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-navy/10 bg-beige/40 py-10">
      <div className="section-wrap grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="font-heading text-xl">Newborn Bliss</h3>
          <p className="mt-3 text-sm text-navy/80">
            Science + Real-Life = Calm Baby & Thriving Growth
          </p>
          <p className="disclaimer mt-3">
            Not medical advice – consult your healthcare provider. Backed by WHO, UNICEF, AAP, and pediatric insights.
          </p>
        </div>
        <div className="space-y-2 text-sm">
          <Link href="/shop">Shop</Link>
          <br />
          <Link href="/course">Online Course</Link>
          <br />
          <Link href="/consulting">Consulting</Link>
          <br />
          <Link href="/privacy">Privacy</Link>
        </div>
        <div>
          <p className="text-sm font-semibold">Follow</p>
          <p className="mt-2 text-sm text-navy/80">Instagram · TikTok · Telegram · WhatsApp</p>
          <p className="mt-3 text-xs text-navy/70">Global payments: Stripe/Lemon Squeezy • USD/EUR/ETB ready</p>
          <p className="mt-4 text-xs text-navy/70">© {new Date().getFullYear()} Newborn Bliss</p>
        </div>
      </div>
    </footer>
  );
}
