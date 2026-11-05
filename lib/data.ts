// ─────────────────────────────────────────────────────────────
//  All site content lives here. Edit this file to update the site.
//  Leave a link as "" to hide its button.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Chris Hirwa",
  handle: "moon",
  role: "Software Engineer",
  tagline: "I build web platforms that businesses actually run on.",
  intro:
    "Full-stack developer in Kigali. I take projects from a blank repo to a live domain — design, code, database, deployment, DNS, the lot — and I stay around after launch to keep things running.",
  location: "Kigali, Rwanda",
  timezone: "UTC+2 (CAT)",
  email: "hirwachris301@gmail.com",
  phone: "+250 786 142 001",
  whatsapp: "250786142001",
  github: "https://github.com/c-hirwa",
  linkedin: "https://www.linkedin.com/in/chris-hirwa",
  cv: "/Chris_Hirwa_CV.pdf", // drop your CV PDF in /public with this name
  available: true,
};

export const about = [
  "I started out shipping websites for small businesses at Klab, spent a couple of years doing high-volume client work at Schnell Media, and now spend most of my time building production systems — the kind with real users, real data and real deadlines.",
  "Clients tend to stick with me because I own the whole thing end to end: if the domain breaks at 11pm or the payment flow needs rethinking, I'm the one who fixes it. I care about clean code, but I care more about whether the thing works for the people using it.",
  "Currently studying Software Engineering at African Leadership University. Off the keyboard: basketball, game dev experiments, and too many hours reading about AI.",
];

export const quickFacts = [
  { k: "based_in", v: "Kigali, RW" },
  { k: "focus", v: "full-stack web" },
  { k: "studying", v: "BSc SE @ ALU" },
  { k: "gpa", v: "4.10" },
  { k: "english", v: "C2 (EF SET)" },
  { k: "off_hours", v: "basketball, game dev" },
];

export const services = [
  {
    id: "01",
    title: "Business websites",
    body: "Fast, custom-coded sites that look sharp on a phone and rank on Google. No page-builder lock-in.",
    tags: ["Next.js", "SEO", "Analytics"],
  },
  {
    id: "02",
    title: "Web apps & internal tools",
    body: "Dashboards, portals, requisition and workflow systems with proper roles, auth and a real database behind them.",
    tags: ["TypeScript", "PostgreSQL", "Auth"],
  },
  {
    id: "03",
    title: "E-commerce",
    body: "Storefronts with product catalogues, filtering and checkout flows that fit how your customers buy — including WhatsApp ordering.",
    tags: ["Storefronts", "Payments", "WhatsApp"],
  },
  {
    id: "04",
    title: "Migration & infrastructure",
    body: "Moving off Wix/Squarespace-type builders, domain transfers, DNS, business email and hosting — handled without downtime.",
    tags: ["DNS", "Email", "Deploys"],
  },
];

export type Project = {
  slug: string;
  name: string;
  client: string;
  year?: string;
  summary: string;
  points: string[];
  stack: string[];
  live?: string;
  repo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "ngali-mining",
    name: "Ngali Mining Platform",
    client: "Minetech Ltd · Ngali Mining",
    year: "2025–26",
    summary:
      "A requisition and workflow management system used day to day across multiple departments of a jewellery and mining operation.",
    points: [
      "Department portals for cutting, finance and operations, each with its own workflows",
      "Database-backed approval flows with structured CRUD for every core entity",
      "Troubleshot API issues and handled deployments to keep the system live",
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle ORM"],
    live: "",
    repo: "",
    featured: true,
  },
  {
    slug: "lauture-global",
    name: "Lauture Global",
    client: "Lauture Global LTD",
    year: "ongoing",
    summary:
      "Full digital infrastructure for a relocation and consulting firm — from their first custom site to CRM, SEO, email and analytics.",
    points: [
      "Migrated the client off a website builder onto a custom-coded platform",
      "Ran the domain transfer and DNS across multiple providers with no downtime",
      "Architecture designed to grow into a full client portal and web app",
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle ORM"],
    live: "",
    featured: true,
  },
  {
    slug: "culture-plug",
    name: "The Culture Plug",
    client: "Streetwear brand",
    summary:
      "E-commerce site for a limited-drop streetwear label inspired by music and anime culture.",
    points: [
      "Mobile-first, dark-themed UI with smooth motion",
      "Dynamic product pages and category filtering",
      "WhatsApp-based ordering flow that matches how local customers buy",
    ],
    stack: ["Next.js", "TypeScript", "Vercel"],
    live: "",
    featured: true,
  },
  {
    slug: "event-translation",
    name: "Live Event Suite",
    client: "Professional event, Rwanda",
    summary:
      "Event tool with QR-code check-in and real-time AI translation between English, French and Kinyarwanda.",
    points: [
      "QR-based guest check-in",
      "Simultaneous AI translation streamed to attendees in real time",
    ],
    stack: ["Next.js", "Supabase Realtime", "Claude API"],
  },
  {
    slug: "careerbridge",
    name: "CareerBridge",
    client: "Personal / ALU",
    summary:
      "Full-stack platform connecting students with internships and jobs — listings, applications and employer accounts.",
    points: ["End-to-end build with auth, database and a live deployment on Render"],
    stack: ["Full-stack", "PostgreSQL", "Render"],
    repo: "",
  },
];

export const experience = [
  {
    company: "Minetech Ltd.",
    role: "Software Developer Intern & Personal Assistant",
    period: "Sep 2025 — May 2026",
    points: [
      "Built and tested features on the Ngali Mining web application with the team",
      "Debugged backend and API issues and shipped the fixes",
      "Kept systems running through documentation and deployments",
    ],
  },
  {
    company: "Freelance",
    role: "Full-stack Developer",
    period: "Ongoing",
    points: [
      "Long-running infrastructure engagement with Lauture Global LTD",
      "E-commerce and business sites for local brands",
    ],
  },
  {
    company: "Schnell Media Rwanda Ltd.",
    role: "Photoshop Operator",
    period: "Jul 2023 — Feb 2025",
    points: [
      "Delivered 100+ client projects under tight deadlines",
      "Standardised editing workflows across the team",
      "Helped grow repeat business by 15%",
    ],
  },
  {
    company: "Klab Rw",
    role: "Software Developer Intern",
    period: "Jun 2022 — Aug 2022",
    points: [
      "Shipped 5+ production websites for SMEs",
      "Trained clients to manage their own platforms",
    ],
  },
];

export const stack = {
  languages: ["TypeScript", "JavaScript", "Python", "SQL", "PHP", "Java", "C/C++"],
  frontend: ["Next.js", "React", "Tailwind CSS", "HTML/CSS", "Figma", "WordPress"],
  backend: ["Node.js", "PostgreSQL", "Drizzle ORM", "NextAuth", "Flask", "Supabase"],
  ops: ["Git/GitHub", "Linux/Shell", "Vercel", "Render", "DNS & domains"],
};

export const certificates = [
  "AI Career Essentials — ALX",
  "Freelancer Academy — ALX",
  "Cyber Security VE — Mastercard",
  "EF SET English Certificate (C2)",
];
