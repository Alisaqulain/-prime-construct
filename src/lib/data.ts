/** Site-wide contact blocks (update for production) */
export const contactInfo = {
  phone: "+91 98765 43210",
  email: "projects@primeconstruct.com",
  whatsapp: "919876543210",
  hours: "Monday – Saturday: 9:00 AM – 6:00 PM IST",
  address: "Prime Construct Corporate Office, India",
};

export type MainSolution = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  image: string;
  audience?: string;
};

export type GypsumProduct = {
  name: string;
  tagline: string;
  description: string;
  image: string;
  specs: string[];
};

export type HeroVisualStory = {
  label: string;
  caption: string;
  image: string;
};

export type VideoTestimonialSlot = {
  id: string;
  audience: "Builders" | "Contractors" | "Homeowners";
  placeholder: boolean;
};

export type CaseStudyPhase = {
  phase: "before" | "process" | "after";
  label: string;
  description: string;
};

export type CaseStudyTemplate = {
  slug: string;
  location: string;
  projectType: string;
  areaCovered: string;
  clientStoryPrompt: string;
  phases: CaseStudyPhase[];
  /** Video URL when available */
  beforeVideo?: string;
  processVideo?: string;
  afterVideo?: string;
  published: boolean;
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Products", href: "/products" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
];

export const footerPrimaryLinks = [
  { label: "About", href: "/about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Products", href: "/products" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

/** Hero visual storytelling panels — gypsum as the product hero */
export const heroVisualStories: HeroVisualStory[] = [
  {
    label: "Premium finish",
    caption: "Luxury gypsum-finished walls with mirror-smooth surfaces",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=80",
  },
  {
    label: "Smooth interiors",
    caption: "Paint-ready white surfaces for modern homes",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
  },
  {
    label: "Moisture protection",
    caption: "Engineered gypsum systems for durable wall protection",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1400&q=80",
  },
  {
    label: "Expert application",
    caption: "Skilled teams applying gypsum plaster on site",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80",
  },
  {
    label: "Final result",
    caption: "Premium home interiors ready for handover",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80",
  },
];

export const valueStack = [
  {
    title: "Mirror-smooth walls",
    copy: "Gypsum delivers a premium white finish — no heavy putty, no uneven patches.",
  },
  {
    title: "Faster handover",
    copy: "72-hour dry cycle vs weeks of cement curing keeps your programme on track.",
  },
  {
    title: "Material + execution",
    copy: "Import-backed gypsum supply with trained application teams under one roof.",
  },
];

export const targetAudience = ["Builders", "Contractors", "Homeowners"];

/** Three core solution offerings */
export const mainSolutions: MainSolution[] = [
  {
    id: "application",
    title: "Gypsum Plaster Application Service",
    subtitle: "Professional on-site execution",
    description:
      "Trained labour teams for machine and manual gypsum plaster application — delivering smooth, paint-ready walls with disciplined site supervision.",
    highlights: [
      "Professional labour team",
      "Machine & manual application",
      "Smooth finishing to spec",
    ],
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "supply",
    title: "Material Supply Solution",
    subtitle: "For builders, dealers & contractors",
    description:
      "Bulk premium gypsum plaster supply with batch traceability, quality assurance, and timely delivery aligned to your project schedule.",
    highlights: ["Bulk gypsum supply", "Quality-tested material", "Timely delivery"],
    audience: "Builders · Dealers · Contractors",
    image:
      "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "complete",
    title: "Complete Project Solution",
    subtitle: "Material + skilled application",
    description:
      "End-to-end gypsum programme — from material dispatch through application crews to final QA sign-off on your site.",
    highlights: [
      "Material + labour combined",
      "Single point of accountability",
      "Paint-ready handover",
    ],
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80",
  },
];

export const gypsumProducts: GypsumProduct[] = [
  {
    name: "Prime Gypsum Plaster",
    tagline: "Flagship interior plaster",
    description:
      "Premium-grade gypsum plaster for internal walls and ceilings — smooth finish, fast drying, paint-ready surfaces.",
    image:
      "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?auto=format&fit=crop&w=1200&q=80",
    specs: ["Smooth white finish", "72-hour dry cycle", "No water curing"],
  },
  {
    name: "Prime Moisture Shield",
    tagline: "Enhanced protection",
    description:
      "Gypsum formulation engineered for areas requiring additional moisture resistance — bathrooms, kitchens, and coastal zones.",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
    specs: ["Moisture-resistant formula", "Mould prevention", "Durable substrate"],
  },
  {
    name: "Prime Machine Grade",
    tagline: "High-volume application",
    description:
      "Optimized mix for spray-machine application on large residential and commercial programmes.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
    specs: ["Machine-compatible", "High daily output", "Consistent batch quality"],
  },
];

export const gypsumVsCement = [
  { metric: "Drying Time", gypsum: "72 hours", cement: "7–14 days" },
  { metric: "Water Curing", gypsum: "Not required", cement: "Required daily" },
  { metric: "Finish Quality", gypsum: "Smooth, paint-ready", cement: "Needs putty & rework" },
  { metric: "Labour Output", gypsum: "Higher sq ft/day", cement: "Lower sq ft/day" },
];

/** Published case studies — empty until real projects are documented */
export const publishedCaseStudies: CaseStudyTemplate[] = [];

/** Template showing future case study structure (UI preview only) */
export const caseStudyLayoutPreview: CaseStudyTemplate = {
  slug: "preview-template",
  location: "City, State",
  projectType: "Residential / Commercial",
  areaCovered: "— sq ft",
  clientStoryPrompt: "Why they chose Prime Construction gypsum",
  phases: [
    {
      phase: "before",
      label: "Before Construction",
      description: "Raw walls, cement substrate, or pre-plaster stage",
    },
    {
      phase: "process",
      label: "Gypsum Application",
      description: "Actual gypsum plaster work — not cement",
    },
    {
      phase: "after",
      label: "Final Finished Result",
      description: "Paint-ready premium interior surfaces",
    },
  ],
  published: false,
};

export const videoTestimonialSlots: VideoTestimonialSlot[] = [
  { id: "builders", audience: "Builders", placeholder: true },
  { id: "contractors", audience: "Contractors", placeholder: true },
  { id: "homeowners", audience: "Homeowners", placeholder: true },
];

export const videoInterviewPrompts = [
  "Why did you choose Prime Construction?",
  "What problem did gypsum solve?",
  "Experience with our team?",
  "Final result feedback?",
];

export const faqs = [
  {
    question: "What is gypsum plaster?",
    answer:
      "Gypsum plaster is a premium wall-finishing material made from natural gypsum. It is applied as a smooth layer over brick or block walls to create paint-ready interior surfaces — faster and smoother than conventional cement plaster.",
  },
  {
    question: "Why choose gypsum instead of cement plaster?",
    answer:
      "Gypsum dries in ~72 hours without water curing, delivers a mirror-smooth finish that reduces or eliminates putty, and allows higher daily labour output — helping you protect handover dates and margins.",
  },
  {
    question: "Is gypsum waterproof?",
    answer:
      "Standard gypsum plaster is designed for interior dry-zone applications. We offer moisture-shield formulations for bathrooms and kitchens. For external or direct water exposure, consult our team for the right system specification.",
  },
  {
    question: "Where can gypsum be used?",
    answer:
      "Internal walls and ceilings in residential towers, villas, commercial offices, retail, hospitality, and institutional buildings — anywhere a premium interior finish is required.",
  },
  {
    question: "Do you provide labour also?",
    answer:
      "Yes. Our professional application teams handle machine and manual gypsum plaster work with site supervision, quality checkpoints, and paint-ready handover.",
  },
  {
    question: "Do you supply material only?",
    answer:
      "Yes. We supply bulk premium gypsum plaster to builders, dealers, and contractors with quality assurance and timely delivery — without application services if you prefer.",
  },
  {
    question: "How long does application take?",
    answer:
      "Application speed depends on area, crew size, and site conditions. Gypsum typically allows significantly faster coverage than cement plaster, with surfaces paint-ready within 72 hours of application.",
  },
];

export const timeline = [
  { year: "2012", detail: "Founded with a mission to modernize wall finishing in India." },
  { year: "2017", detail: "Built specialist contractor network and technical training wing." },
  { year: "2021", detail: "Crossed 10M sq ft gypsum applications delivered." },
  { year: "2025", detail: "Strengthened import & logistics through Dropshore Import and Export partnerships." },
];

export const coreValues = [
  {
    title: "Integrity",
    copy: "Transparent specifications, honest timelines, and no shortcuts on batch quality.",
  },
  {
    title: "Precision",
    copy: "Measured application, disciplined crews, and documentation that survives client QA.",
  },
  {
    title: "Reliability",
    copy: "Material availability and dispatch discipline you can schedule your trades around.",
  },
  {
    title: "Partnership",
    copy: "We align with contractors and consultants as execution partners—not just vendors.",
  },
];

export const operationalCapabilities = [
  "National material sourcing with import/export documentation support",
  "Multi-city warehousing and Dropshore-aligned supply scheduling",
  "Dedicated site supervisors and snag-prevention checklists",
  "Training for applicator teams on mix ratios, open time, and finish standards",
  "Integration with MEP, false ceiling, and paint contractors for clash-free handover",
];

export const whyChoose = [
  "Premium gypsum grades backed by import and distribution strength",
  "Professional application teams focused on finish quality and timelines",
  "Supply chain reliability through Dropshore Import and Export",
  "Corporate documentation, safety briefings, and structured communication",
];

export const sustainabilityHighlights = [
  "No water curing requirement reduces freshwater dependency significantly.",
  "Lower embodied energy than conventional wet plaster workflows.",
  "Cleaner execution with reduced site waste and material rejection.",
  "Supports indoor comfort through thermal and acoustic performance benefits.",
];

export const projectTypeOptionsForForm = [
  "Residential villa / apartment",
  "Residential township / tower",
  "Commercial office",
  "Retail / hospitality",
  "Material supply only",
  "Application service only",
  "Complete project (material + labour)",
  "Other",
];

/** @deprecated Use projectTypeOptionsForForm — kept for API backward compatibility */
export const serviceOptionsForForm = projectTypeOptionsForForm;

export const jobs = [
  {
    id: "site-application-engineer",
    title: "Site Application Engineer",
    location: "Bengaluru",
    type: "Full-time",
    description: "Lead contractor enablement and ensure finish quality benchmarks on site.",
  },
  {
    id: "specification-manager",
    title: "Specification Manager",
    location: "Mumbai",
    type: "Full-time",
    description: "Partner with architects and consultants to drive gypsum specification wins.",
  },
  {
    id: "inside-sales-lead",
    title: "Inside Sales Lead",
    location: "Gurugram",
    type: "Full-time",
    description: "Convert inbound B2B leads into qualified project opportunities.",
  },
];
