"use client";

import { useEffect, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { LeadMagnetForm } from "@/components/lead-magnet-form";

export function ExitIntentPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setOpen(true), 14000);
    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) setOpen(true);
    };
    document.addEventListener("mouseleave", onMouseLeave);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <h3 className="font-heading text-2xl">Before you go: grab your free 4-page survival guide</h3>
        <p className="mb-4 mt-2 text-sm text-navy/80">Quick, evidence-based steps for calmer days and nights.</p>
        <LeadMagnetForm />
      </DialogContent>
    </Dialog>
  );
}
