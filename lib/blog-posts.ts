export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  sections: Array<{ heading?: string; body?: string; bullets?: string[] }>;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "first-72-hours-at-home",
    title: "First 72 Hours at Home",
    excerpt: "A gentle, practical plan for the first three days with your newborn.",
    sections: [
      { body: "The first 72 hours are about regulation, connection, and caregiver confidence—not perfection." },
      {
        heading: "What matters most",
        bullets: [
          "Skin-to-skin for warmth, calmer cortisol response, and bonding",
          "Responsive feeding cues every 2–3 hours",
          "Short caregiver rest shifts to protect mental health"
        ]
      }
    ]
  },
  {
    slug: "why-responsive-feeding-works",
    title: "Why Responsive Feeding Works",
    excerpt: "How cue-based feeding supports growth, attachment, and calmer routines.",
    sections: [
      { body: "Responsive feeding helps babies trust that care arrives when needed and reduces panic crying." },
      {
        heading: "Benefits",
        bullets: [
          "Supports secure attachment",
          "Reduces frantic hunger crying",
          "Helps caregivers understand baby rhythms"
        ]
      }
    ]
  },
  {
    slug: "newborn-sleep-cycles-explained",
    title: "Newborn Sleep Cycles Explained",
    excerpt: "Understand normal newborn sleep so you can build realistic routines.",
    sections: [
      { body: "Newborn sleep is naturally fragmented. Frequent waking is biologically normal in early months." },
      {
        heading: "A realistic goal",
        bullets: [
          "Aim for predictable patterns, not perfect nights",
          "Use wake windows + cues to prevent overtiredness",
          "Support co-regulation before sleep transitions"
        ]
      }
    ]
  }
];
