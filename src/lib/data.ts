export type Product = {
  id: number;
  slug: string;
  title: string;
  category: "Steel" | "Cement" | "Aggregates" | "Equipment";
  description: string;
  image: string;
  specs: string[];
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Gallery", href: "/gallery" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

export const services = [
  {
    title: "Structural Engineering Supply",
    description:
      "Reliable premium-grade structural materials for commercial and industrial builds.",
  },
  {
    title: "Bulk Material Distribution",
    description:
      "Fast and scalable logistics network delivering cement, steel, and aggregates on schedule.",
  },
  {
    title: "Project Procurement Support",
    description:
      "Dedicated sourcing specialists helping teams reduce delay, cost, and supply risk.",
  },
  {
    title: "Site Equipment Solutions",
    description:
      "Modern machinery and construction tools tailored to project scope and duration.",
  },
];

export const products: Product[] = [
  {
    id: 1,
    slug: "ultra-strength-rebar",
    title: "Ultra Strength Rebar",
    category: "Steel",
    description:
      "High-tensile anti-corrosion reinforcement bars ideal for heavy-load infrastructure.",
    image:
      "https://images.unsplash.com/photo-1626885930974-4b69aa21bbf2?auto=format&fit=crop&w=1200&q=80",
    specs: ["Grade 500D", "Corrosion-resistant finish", "6mm to 32mm diameters"],
  },
  {
    id: 2,
    slug: "prime-bond-cement",
    title: "PrimeBond Cement",
    category: "Cement",
    description:
      "Performance cement blend engineered for superior bonding, durability, and curing speed.",
    image:
      "https://images.unsplash.com/photo-1611293388250-580b08c4a145?auto=format&fit=crop&w=1200&q=80",
    specs: ["53 Grade OPC", "Low heat hydration", "Moisture-protect packaging"],
  },
  {
    id: 3,
    slug: "clean-crushed-aggregate",
    title: "Clean Crushed Aggregate",
    category: "Aggregates",
    description:
      "Washed and graded aggregate for robust roadwork foundations and concrete mixes.",
    image:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80",
    specs: ["10mm, 20mm, 40mm", "Dust-controlled", "Lab-tested consistency"],
  },
  {
    id: 4,
    slug: "hydra-lift-excavator",
    title: "HydraLift Excavator",
    category: "Equipment",
    description:
      "Fuel-efficient heavy-duty excavator with precision hydraulic control for smart sites.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    specs: ["27-ton class", "Smart telemetry", "Low-emission compliant"],
  },
  {
    id: 5,
    slug: "galvanized-beam-series",
    title: "Galvanized Beam Series",
    category: "Steel",
    description:
      "Structural steel beams with zinc protection for high-lifespan commercial installations.",
    image:
      "https://images.unsplash.com/photo-1590261239431-2f3f4f98fcf7?auto=format&fit=crop&w=1200&q=80",
    specs: ["I and H profiles", "Hot-dip galvanized", "Custom cut lengths"],
  },
  {
    id: 6,
    slug: "rapid-set-cement-plus",
    title: "RapidSet Cement Plus",
    category: "Cement",
    description:
      "Quick-setting cement optimized for deadline-driven developments and repair jobs.",
    image:
      "https://images.unsplash.com/photo-1607400201515-c2c41f1ef4cf?auto=format&fit=crop&w=1200&q=80",
    specs: ["Fast cure profile", "Crack-minimizing blend", "High early strength"],
  },
];

export const whyChooseUs = [
  "20+ years of construction supply excellence",
  "ISO-compliant quality and certified inventory",
  "On-time deliveries backed by smart logistics",
  "Dedicated account managers for enterprise clients",
];

export const stats = [
  { label: "Projects Supported", value: 1250 },
  { label: "Tons Delivered", value: 900000 },
  { label: "Strategic Partners", value: 170 },
  { label: "Countries Served", value: 14 },
];

export const testimonials = [
  {
    name: "Rahul Menon",
    role: "Project Director, Skyline Infra",
    quote:
      "PRIME CONSTRUCT consistently delivers high-grade materials before schedule. They are a strategic partner, not just a vendor.",
  },
  {
    name: "Sarah Adeyemi",
    role: "Procurement Lead, Nova Build",
    quote:
      "From steel to site equipment, every order arrived with clear documentation and exceptional quality standards.",
  },
];

export const clients = [
  "Apex Housing",
  "MetroSpan",
  "Titan Infrastructure",
  "BlueStone Projects",
  "Urban Frame",
  "Civitas Works",
];

export const timeline = [
  { year: "2005", detail: "Founded as a regional supplier for structural materials." },
  { year: "2011", detail: "Expanded to multi-city distribution with dedicated logistics hubs." },
  { year: "2017", detail: "Introduced smart inventory tracking and enterprise procurement support." },
  { year: "2023", detail: "Became a trusted partner for mega infrastructure projects." },
];

export const team = [
  { name: "Daniel Reyes", role: "Chief Executive Officer" },
  { name: "Anika Sharma", role: "Head of Operations" },
  { name: "Michael Osei", role: "Supply Chain Director" },
  { name: "Lina Park", role: "Client Success Lead" },
];

export const certifications = [
  "ISO 9001:2015 Quality Management",
  "ISO 14001:2015 Environmental Management",
  "OHSAS 18001 Safety Compliance",
];

export const galleryItems = [
  {
    title: "Bridge Reinforcement Works",
    category: "Projects",
    image:
      "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Bulk Cement Dispatch",
    category: "Materials",
    image:
      "https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Site Tower Crane Setup",
    category: "Work Sites",
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Road Foundation Delivery",
    category: "Projects",
    image:
      "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Steel Yard Quality Check",
    category: "Materials",
    image:
      "https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Night Shift Concrete Pour",
    category: "Work Sites",
    image:
      "https://images.unsplash.com/photo-1465447142348-e9952c393450?auto=format&fit=crop&w=1200&q=80",
  },
];

export const jobs = [
  {
    id: "site-engineer",
    title: "Site Engineer",
    location: "Lagos, NG",
    type: "Full-time",
    description: "Oversee on-site execution, quality checks, and safety compliance.",
  },
  {
    id: "procurement-specialist",
    title: "Procurement Specialist",
    location: "Dubai, UAE",
    type: "Full-time",
    description: "Drive supplier negotiations and strategic sourcing decisions.",
  },
  {
    id: "logistics-coordinator",
    title: "Logistics Coordinator",
    location: "Remote / Hybrid",
    type: "Contract",
    description: "Plan dispatch schedules and optimize multi-location delivery routes.",
  },
];

export const blogPosts = [
  {
    slug: "future-of-sustainable-construction",
    title: "The Future of Sustainable Construction Supply Chains",
    excerpt:
      "How data-led sourcing and lower-emission materials are shaping premium construction delivery.",
    date: "April 10, 2026",
  },
  {
    slug: "choosing-the-right-rebar",
    title: "Choosing the Right Rebar for Large-Scale Infrastructure",
    excerpt:
      "A practical guide to tensile grades, corrosion protection, and long-term structural performance.",
    date: "March 22, 2026",
  },
  {
    slug: "reducing-project-delays-with-procurement",
    title: "Reducing Project Delays with Smarter Procurement",
    excerpt:
      "Proactive logistics and transparent forecasting techniques that keep builds on track.",
    date: "February 28, 2026",
  },
];

export const faqs = [
  {
    question: "Do you handle large-volume international orders?",
    answer:
      "Yes. PRIME CONSTRUCT supports enterprise-scale regional and international shipments with dedicated logistics planning.",
  },
  {
    question: "Can I request product certifications before purchase?",
    answer:
      "Absolutely. Our team shares test reports, compliance documents, and quality certificates before dispatch.",
  },
  {
    question: "Do you offer custom procurement packages?",
    answer:
      "Yes. We build tailored supply bundles based on project timeline, budget, and technical requirements.",
  },
];
