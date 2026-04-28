export type Product = {
  id: number;
  slug: string;
  title: string;
  category: "Base Coat" | "Finish Coat" | "Ceiling" | "Additives";
  description: string;
  image: string;
  benefits: string[];
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Calculator", href: "/calculator" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Gallery", href: "/gallery" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const trustLogos = [
  "L&T BuildTech",
  "Shapoorji Developers",
  "Sobha Interiors",
  "BIM Studio India",
  "Urban Frame Projects",
  "K2 Contractors",
];

export const heroStats = [
  { label: "Faster Execution", value: 50, suffix: "%" },
  { label: "Dry Time", value: 72, suffix: "hr" },
  { label: "Water Curing", value: 0, suffix: "" },
];

export const valueStack = [
  {
    title: "Smooth finish, no putty",
    copy: "Superior finish quality reduces post-plaster rework and putty cost.",
  },
  {
    title: "Fast dry cycle",
    copy: "72-hour dry time helps contractors hand over spaces faster.",
  },
  {
    title: "No water curing",
    copy: "Cuts water consumption while lowering labor intensity at scale.",
  },
];

export const targetAudience = ["Contractors", "Architects", "Interior Designers"];

export const products: Product[] = [
  {
    id: 1,
    slug: "prime-rapid-base",
    title: "Prime Rapid Base",
    category: "Base Coat",
    description: "High-coverage gypsum base plaster for machine and manual application.",
    image:
      "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=1200&q=80",
    benefits: ["Low shrinkage", "Fast setting", "Uniform wall thickness"],
  },
  {
    id: 2,
    slug: "prime-silk-finish",
    title: "Prime Silk Finish",
    category: "Finish Coat",
    description: "Ultra-fine finish layer delivering premium paint-ready surfaces.",
    image:
      "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1200&q=80",
    benefits: ["Mirror smooth finish", "No putty required", "Crack resistance"],
  },
  {
    id: 3,
    slug: "prime-ceiling-lite",
    title: "Prime Ceiling Lite",
    category: "Ceiling",
    description: "Lightweight gypsum blend engineered for superior overhead bonding.",
    image:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80",
    benefits: ["10mm, 20mm, 40mm", "Dust-controlled", "Lab-tested consistency"],
  },
  {
    id: 4,
    slug: "prime-bond-admix",
    title: "Prime Bond Admix",
    category: "Additives",
    description: "Performance additive to optimize workability and bond strength.",
    image:
      "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?auto=format&fit=crop&w=1200&q=80",
    benefits: ["Higher adhesion", "Longer open time", "Consistent finish quality"],
  },
];

export const gypsumVsCement = [
  { metric: "Drying Time", gypsum: "72 hours", cement: "7-14 days" },
  { metric: "Water Curing", gypsum: "Not required", cement: "Required daily" },
  { metric: "Finish Quality", gypsum: "Smooth, paint-ready", cement: "Needs putty and rework" },
  { metric: "Labor Productivity", gypsum: "Higher output/day", cement: "Lower output/day" },
];

export const caseStudies = [
  {
    slug: "skyline-residences",
    project: "Skyline Residences, Pune",
    problem: "Wall finishing delays were pushing handover by 6 weeks.",
    solution: "Shifted 1.8 lakh sq ft from cement plaster to Prime Rapid Base + Silk Finish.",
    result: "Project recovered 34 days and saved INR 42 lakhs in labor + finishing.",
    image:
      "https://images.unsplash.com/photo-1465447142348-e9952c393450?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "vertex-it-park",
    project: "Vertex IT Park, Hyderabad",
    problem: "High water usage and repaint defects from uneven wall finish.",
    solution: "Adopted gypsum system with process SOPs for all interior walls.",
    result: "Cut water use by 61% and reduced snag list by 47% at final QA.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
  },
];

export const testimonials = [
  {
    name: "Rohit Mehta",
    role: "Project Head, Urban Grid Builders",
    quote:
      "Prime Construct helped us compress our finishing cycle and protect our margin. Their gypsum system performs exactly as promised.",
  },
  {
    name: "Nidhi Kapoor",
    role: "Principal Architect, NKA Studio",
    quote:
      "The finish quality is consistently premium. My clients notice smoother walls and faster possession.",
  },
];

export const faqs = [
  {
    question: "Is gypsum plaster suitable for large residential and commercial projects?",
    answer:
      "Yes. Our gypsum systems are designed for scale and are regularly used in high-volume projects where speed and finish consistency are critical.",
  },
  {
    question: "Can gypsum plaster reduce or remove putty cost?",
    answer:
      "In many projects, yes. Because the finish is smoother than conventional cement plaster, putty use is often reduced significantly or eliminated.",
  },
  {
    question: "How much faster is gypsum compared to cement plaster?",
    answer:
      "Typical drying time is around 72 hours, compared to multi-day curing cycles for cement plaster. This helps accelerate handover schedules.",
  },
  {
    question: "Do you provide on-site application and quality support?",
    answer:
      "Yes. PRIME CONSTRUCT teams support contractor onboarding, application best practices, and quality checks during rollout.",
  },
  {
    question: "Is gypsum plaster aligned with sustainability goals?",
    answer:
      "Yes. It removes water curing requirements and reduces site waste, helping teams improve resource efficiency and green-building readiness.",
  },
  {
    question: "How can we get a project-specific estimate quickly?",
    answer:
      "Use our cost calculator for an instant estimate, then connect with our team for a project-level recommendation and implementation plan.",
  },
];

export const timeline = [
  { year: "2012", detail: "Founded with a mission to modernize wall finishing in India." },
  { year: "2017", detail: "Built specialist contractor network and technical training wing." },
  { year: "2021", detail: "Crossed 10M sq ft gypsum applications delivered." },
  { year: "2025", detail: "Expanded into green-building consultation and lifecycle support." },
];

export const whyChoose = [
  "Site-first technical support from practitioners, not just sales teams",
  "Proven speed and finish outcomes across residential and commercial projects",
  "Predictable costing framework with transparent ROI estimates",
  "Sustainability-first systems aligned with LEED and IGBC pathways",
];

export const sustainabilityHighlights = [
  "No water curing requirement reduces freshwater dependency significantly.",
  "Lower embodied energy than conventional wet plaster workflows.",
  "Cleaner execution with reduced site waste and material rejection.",
  "Supports indoor comfort through thermal and acoustic performance benefits.",
];

export const galleryItems = [
  {
    title: "Before: Rough Cement Surface",
    category: "Before",
    image:
      "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "After: Gypsum Smooth Finish",
    category: "After",
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Before: Water Curing Workflow",
    category: "Before",
    image:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "After: Fast Interior Handover",
    category: "After",
    image:
      "https://images.unsplash.com/photo-1542621334-a254cf47733d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Site Application in Progress",
    category: "Application",
    image:
      "https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Machine Spray Finish",
    category: "Application",
    image:
      "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?auto=format&fit=crop&w=1200&q=80",
  },
];

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
