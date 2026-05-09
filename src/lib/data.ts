/** Site-wide contact blocks (update for production) */
export const contactInfo = {
  phone: "+91 98765 43210",
  email: "projects@primeconstruct.com",
  whatsapp: "919876543210",
  hours: "Monday – Saturday: 9:00 AM – 6:00 PM IST",
  address: "Prime Construct Corporate Office, India",
};

export type ApplicationService = {
  title: string;
  description: string;
};

export type SupplierSolution = {
  /** Shown prominently on the card image */
  name: string;
  description: string;
  image: string;
};

export type PortfolioProject = {
  title: string;
  location: string;
  scope: string;
  outcome: string;
  image: string;
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Services", href: "/services" },
  { label: "Calculator", href: "/calculator" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
];

export const footerPrimaryLinks = [
  { label: "About", href: "/about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Calculator", href: "/calculator" },
  { label: "Case Studies", href: "/case-studies" },
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
  { label: "Typical dry cycle", value: 72, suffix: " hr" },
  { label: "Water curing", value: 0, suffix: "" },
  { label: "Finish confidence", value: 100, suffix: "%" },
];

export const heroServiceHighlights = [
  "Premium gypsum plaster supply",
  "Certified application & site QA",
  "Design walls, ceilings & custom finishes",
  "Backed by Dropshore Import & Export logistics",
];

export const valueStack = [
  {
    title: "Smooth, paint-ready surfaces",
    copy: "Professional gypsum application reduces rework and delivers a corporate-grade finish.",
  },
  {
    title: "Predictable project timelines",
    copy: "Faster drying vs. conventional plaster helps you protect handover dates.",
  },
  {
    title: "Supply you can trust",
    copy: "Consistent material quality and reliable delivery through our import & distribution network.",
  },
];

export const targetAudience = ["Developers", "Contractors", "Architects & designers"];

/** Left column — Application Services */
export const applicationServices: ApplicationService[] = [
  {
    title: "Gypsum Plaster Services",
    description:
      "Machine and manual application with trained crews, defined SOPs, and quality checkpoints at every stage.",
  },
  {
    title: "False Ceiling Solution",
    description:
      "Lightweight overhead systems with clean lines, acoustic options, and coordinated MEP interfaces.",
  },
  {
    title: "Design Wall Solution",
    description:
      "Feature walls and linear details executed to drawing, with substrates prepared for premium paint or cladding.",
  },
  {
    title: "Custom Design Wall Solution",
    description:
      "Bespoke geometries, textures, and multi-layer builds for signature lobbies, retail, and hospitality.",
  },
];

/** Right column — Supplier Solutions (names on cards) */
export const supplierSolutions: SupplierSolution[] = [
  {
    name: "Dropshore Premium Gypsum Supply",
    description:
      "Import-backed inventory of tested gypsum grades, batch traceability, and documentation for spec-driven projects.",
    image:
      "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Global Sourcing & Import / Export",
    description:
      "Structured procurement, compliance, and customs-aware movement of bulk material for large rollouts.",
    image:
      "https://images.unsplash.com/photo-1587293852726-70cdb56c0866?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Logistics & Just-in-Time Delivery",
    description:
      "Demand-aligned dispatch, site-slot coordination, and reduced stock-out risk across multi-tower programmes.",
    image:
      "https://images.unsplash.com/photo-1578575437130-c9d3d6ceb7c4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Warehouse & QC Assurance",
    description:
      "Climate-aware storage protocols and pre-dispatch checks so every bag meets your site-ready standard.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
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
    solution: "Shifted 1.8 lakh sq ft from cement plaster to premium gypsum with dedicated application crews.",
    result: "Project recovered 34 days and saved INR 42 lakhs in labor + finishing.",
    image:
      "https://images.unsplash.com/photo-1465447142348-e9952c393450?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "vertex-it-park",
    project: "Vertex IT Park, Hyderabad",
    problem: "High water usage and repaint defects from uneven wall finish.",
    solution: "Adopted gypsum system with Dropshore-supplied material and on-site QA sign-off per floor.",
    result: "Cut water use by 61% and reduced snag list by 47% at final QA.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
  },
];

export const portfolioProjects: PortfolioProject[] = [
  {
    title: "Luxury Towers — Full Interior Plaster Programme",
    location: "Western India",
    scope: "4.5 lakh sq ft | Gypsum plaster + design feature walls",
    outcome: "Mirror-smooth finishes; zero plaster-related repaint at handover QA.",
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Corporate HQ — Lobby & Workplace Ceilings",
    location: "Hyderabad",
    scope: "False ceiling grids, acoustic islands, corridor bulkheads",
    outcome: "Coordinated services above ceiling; delivered in a compressed fit-out window.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Retail Flagship — Custom Design Wall",
    location: "Mumbai",
    scope: "Custom curved substrate, metal reveal integration, premium paint system",
    outcome: "Architect sign-off on first inspection; brand-standard finish maintained.",
    image:
      "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Residential Township — Material + Application",
    location: "Pune",
    scope: "Bulk gypsum supply + multi-tower application teams",
    outcome: "JIT material flow from Dropshore network; no tower-level stock-out events.",
    image:
      "https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Hospital Wing — Hygiene-First Finishes",
    location: "Bengaluru",
    scope: "Low-dust application protocol, sealed corridors, QA photo logs",
    outcome: "Met infection-control contractor requirements with minimal site disruption.",
    image:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Hospitality — Curved Ceilings & Features",
    location: "Goa",
    scope: "Complex ceiling transitions, layered gypsum detailing",
    outcome: "Consistent curves across 120+ keys; reduced snagging prior to soft opening.",
    image:
      "https://images.unsplash.com/photo-1542621334-a254cf47733d?auto=format&fit=crop&w=1200&q=80",
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
      "Yes. Prime Construct teams support contractor onboarding, application best practices, and quality checks during rollout.",
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

/** Legacy gallery items for lightbox grid (optional secondary row) */
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
    title: "Site Application in Progress",
    category: "Application",
    image:
      "https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=1200&q=80",
  },
];

export const serviceOptionsForForm = [
  "Material supply",
  "Professional application",
  "False ceiling solution",
  "Design / custom wall",
  "Consultation only",
  "Other",
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
