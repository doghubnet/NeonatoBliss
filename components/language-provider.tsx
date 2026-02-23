"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Language = "en" | "am";

type Dictionary = Record<string, string>;

const dictionary: Record<Language, Dictionary> = {
  en: {
    navHome: "Home",
    navShop: "Shop",
    navCourse: "Online Course",
    navConsulting: "Consulting",
    navResources: "Free Resources",
    navBlog: "Blog",
    navAbout: "About",
    navContact: "Contact",
    getFreeGuide: "Get Free Guide",
    heroTitle: "NeonatoBliss: Science + Real-Life = Calm Baby & Thriving Growth",
    heroSubtitle:
      "Practical tools for 0-12 months that actually reduce crying, improve sleep, and build strong bonds – trusted by parents in 20+ countries.",
    founderHey: "hey there!",
    founderWelcome: "Welcome to NeonatoBliss.",
    founderBody:
      "NeonatoBliss exists to help every new parent create calm, thriving days with their newborn.\n\nRooted in the latest biological science and proven real-life nurturing practices from around the world, we provide simple, practical tools that actually work – reducing excessive crying, improving sleep, and building strong bonds.\n\nWe meet your baby right where they are developmentally and tailor every strategy to match your family’s unique priorities and lifestyle.",
    downloadGuide: "Download Free Guide",
    browseResources: "Browse All Resources",
    shopTitle: "Shop / Featured Resources",
    addToCart: "Add to Cart",
    instantDownload: "Instant Download",
    card1: "12-Page Quick Start eBook",
    card1b1: "Simple daily & night routines for the first 12 weeks",
    card1b2: "Responsive feeding & soothing cues explained",
    card1b3: "Instant PDF download + printable checklist",
    card2: "Full 35-Page Comprehensive Guide",
    card2b1: "Complete 0-12 month roadmap with biology + real-life scripts",
    card2b2: "Milestone tracking, danger signs & growth charts",
    card2b3: "All in one beautiful PDF with illustrations",
    card3: "Premium Newborn eBook Bundle",
    card3b1: "Quick Start + Full Guide + Bonus 50-page checklists & routines",
    card3b2: "Best value for complete newborn support",
    card3b3: "All files delivered instantly",
    disclaimer:
      "Not medical advice – always consult your healthcare provider. Backed by WHO, UNICEF, AAP, and pediatric insights.",
    instagramTitle: "on Instagram",
    instagramSub: "Join our community of over 2 million families",
    emailTitle: "Join our email list",
    emailSub: "I’ll send free newborn tips straight to your inbox.",
    subscribe: "Subscribe",
    products: "Products",
    information: "Information",
    support: "Support",
    legal: "Legal",
    reclaim: "RECLAIM THE JOY OF PARENTHOOD",
    rights: "© 2026 NeonatoBliss. All rights reserved.",
    evidence: "Evidence-Based",
    whoBacked: "WHO/UNICEF Backed",
    secure: "Secure Payments"
  },
  am: {
    navHome: "መነሻ",
    navShop: "ሱቅ",
    navCourse: "የመስመር ላይ ኮርስ",
    navConsulting: "ኮንሰልቲንግ",
    navResources: "ነጻ ምንጮች",
    navBlog: "ብሎግ",
    navAbout: "ስለ እኛ",
    navContact: "አግኙን",
    getFreeGuide: "ነጻ መመሪያ አውርድ",
    heroTitle: "ኒዮናቶብሊስ: ሳይንስ + ተግባራዊ ሕይወት = ጸጥታ ያለው ሕፃን & ጤናማ እድገት",
    heroSubtitle:
      "ከ0-12 ወር ለሚደረግ ተግባራዊ መሳሪያዎች – ማልቀስን የሚቀንሱ፣ እንቅልፍን የሚያሻሽሉ እና ጠንካራ ትስስር የሚገነቡ – በ20+ ሀገሮች የተፈተኑ",
    founderHey: "ሰላም!",
    founderWelcome: "ወደ ኒዮናቶብሊስ እንኳን በደህና መጡ።",
    founderBody:
      "ኒዮናቶብሊስ እያንዳንዱ አዲስ ወላጅ ከሕፃኑ ጋር ጸጥታ እና እድገት ያለው ቀን እንዲፈጥር ይረዳል።\n\nበዘመናዊ ባዮሎጂ ሳይንስ እና በእውነተኛ የእንክብካቤ ተሞክሮ ላይ የተመሰረቱ ቀላል እና ተግባራዊ መሳሪያዎችን እናቀርባለን።\n\nሕፃንዎ በእድገቱ ያለበትን ደረጃ በመከታተል መፍትሄዎችን ለቤተሰብዎ የሚስማሙ እንዲሆኑ እናዘጋጃለን።",
    downloadGuide: "ነጻ መመሪያ አውርድ",
    browseResources: "ሁሉንም ምንጮች ይመልከቱ",
    shopTitle: "ሱቅ / ተመራጭ ምንጮች",
    addToCart: "ወደ ጋሪ ጨምር",
    instantDownload: "ወዲያውኑ ማውረድ",
    card1: "12-ገፅ ፈጣን ጅምር eBook",
    card1b1: "ለመጀመሪያ 12 ሳምንታት ቀላል የቀንና የሌሊት ስርዓት",
    card1b2: "ምላሽ የሚሰጥ መመገብ እና ማረጋጋት ምልክቶች",
    card1b3: "ወዲያውኑ PDF + ማተሚያ ቼክሊስት",
    card2: "ሙሉ 35-ገፅ አጠቃላይ መመሪያ",
    card2b1: "0-12 ወር ሙሉ መንገድ ካርታ ከባዮሎጂ + ተግባራዊ መመሪያዎች ጋር",
    card2b2: "የዕድገት ክትትል፣ የአደጋ ምልክቶች እና የእድገት ገበታ",
    card2b3: "በስዕሎች የተሞላ ውብ PDF",
    card3: "ፕሪሚየም የአራስ eBook ባንድል",
    card3b1: "Quick Start + Full Guide + ተጨማሪ 50-ገፅ ቼክሊስት",
    card3b2: "ለሙሉ ድጋፍ በጣም ጥሩ ዋጋ",
    card3b3: "ሁሉም ፋይሎች ወዲያውኑ ይላካሉ",
    disclaimer: "ይህ የሕክምና ምክር አይደለም – ሁልጊዜ የጤና ባለሙያዎን ያማክሩ። በWHO፣ UNICEF፣ AAP እና የህፃናት ሐኪሞች ግንዛቤ የተደገፈ።",
    instagramTitle: "በInstagram",
    instagramSub: "ከ2 ሚሊዮን በላይ ቤተሰቦች ማህበረሰባችንን ይቀላቀሉ",
    emailTitle: "የኢሜይል ዝርዝራችንን ይቀላቀሉ",
    emailSub: "ነጻ የአራስ ምክሮችን ወደ ኢንቦክስዎ እልክልዎታለሁ።",
    subscribe: "ይመዝገቡ",
    products: "ምርቶች",
    information: "መረጃ",
    support: "ድጋፍ",
    legal: "ህጋዊ",
    reclaim: "የወላጅነት ደስታን መልሱ",
    rights: "© 2026 NeonatoBliss. መብቶች ሁሉ የተጠበቁ ናቸው።",
    evidence: "በማስረጃ የተመሰረተ",
    whoBacked: "በWHO/UNICEF የተደገፈ",
    secure: "ደህንነቱ የተጠበቀ ክፍያ"
  }
};

type Ctx = {
  language: Language;
  setLanguage: (l: Language) => void;
  t: (k: keyof typeof dictionary.en) => string;
};

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("nb_lang") as Language | null;
    if (saved === "en" || saved === "am") setLanguage(saved);
  }, []);

  const changeLanguage = (l: Language) => {
    setLanguage(l);
    localStorage.setItem("nb_lang", l);
  };

  const value = useMemo(
    () => ({
      language,
      setLanguage: changeLanguage,
      t: (k: keyof typeof dictionary.en) => dictionary[language][k] ?? dictionary.en[k]
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
