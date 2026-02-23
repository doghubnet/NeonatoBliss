"use client";

import { useLanguage } from "@/components/language-provider";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="rounded-full border border-navy/25 px-3 py-2 text-sm font-medium text-navy">
      <button onClick={() => setLanguage("en")} className={language === "en" ? "font-bold" : "opacity-70"}>
        EN
      </button>
      <span className="mx-2">|</span>
      <button onClick={() => setLanguage("am")} className={language === "am" ? "font-bold" : "opacity-70"}>
        አማ
      </button>
    </div>
  );
}
