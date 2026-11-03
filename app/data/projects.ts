export type ProjectVariant = "commerce" | "dashboard" | "mobile" | "editorial" | "booking" | "analytics";

export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  brief: string;
  approach: string;
  role: string;
  stack: string[];
  variant: ProjectVariant;
  link: string | null;
};

// Concept-only examples. Replace these objects and add real project URLs later.
export const projects: Project[] = [
  {
    slug: "northstar-commerce",
    title: "Northstar Commerce",
    category: "E-COMMERCE CONCEPT",
    description: "A considered storefront concept for a modern independent retailer.",
    brief: "Explore a storefront that makes product discovery feel calm, clear, and effortless.",
    approach: "A modular product grid, confident typography, and a restrained warm palette give the catalog room to breathe while keeping key actions easy to find.",
    role: "UI design & front-end concept",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    variant: "commerce",
    link: null,
  },
  {
    slug: "orbit-operations",
    title: "Orbit Operations",
    category: "CRM / ATS DASHBOARD",
    description: "A dashboard concept for teams managing people, pipeline, and daily work.",
    brief: "Bring operational information into one focused workspace that is easy to scan and act on.",
    approach: "The concept pairs a compact navigation rail with a clear activity overview, useful data summaries, and table patterns that can scale as records grow.",
    role: "Product UI & front-end concept",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    variant: "dashboard",
    link: null,
  },
  {
    slug: "pocket-ledger",
    title: "Pocket Ledger",
    category: "MOBILE APP CONCEPT",
    description: "A simple mobile finance concept built around clear spending insights.",
    brief: "Make everyday spending easier to understand with a small, focused mobile experience.",
    approach: "A single-screen summary, readable spending categories, and a direct navigation pattern keep the core information accessible at a glance.",
    role: "Mobile UI & interaction concept",
    stack: ["Expo", "React Native", "TypeScript"],
    variant: "mobile",
    link: null,
  },
  {
    slug: "form-and-field",
    title: "Form & Field",
    category: "LANDING PAGE CONCEPT",
    description: "A launch page concept for a creative studio and its digital services.",
    brief: "Give a small creative team a memorable introduction and a simple path to start a conversation.",
    approach: "An editorial headline, deliberate spacing, and a focused call to action make the page feel distinctive without getting in the way of the message.",
    role: "Web design & front-end concept",
    stack: ["Next.js", "Vue.js", "CSS"],
    variant: "editorial",
    link: null,
  },
  {
    slug: "harbor-booking",
    title: "Harbor Booking",
    category: "BOOKING PLATFORM CONCEPT",
    description: "A service-booking concept that keeps schedules and appointments easy to manage.",
    brief: "Give a small service team a clear way to manage appointments and let customers find an available time.",
    approach: "A simple weekly calendar, legible appointment details, and a direct booking action make the core workflow easy to understand.",
    role: "Product UI & front-end concept",
    stack: ["Vue.js", "TypeScript", "Tailwind CSS"],
    variant: "booking",
    link: null,
  },
  {
    slug: "signal-analytics",
    title: "Signal Analytics",
    category: "ANALYTICS DASHBOARD CONCEPT",
    description: "A product analytics concept for tracking engagement and growth over time.",
    brief: "Present key product signals in a compact view that helps a team spot changes and ask better questions.",
    approach: "A strong headline metric, a readable trend chart, and clear comparison labels create a useful starting point for deeper analysis.",
    role: "Dashboard UI & front-end concept",
    stack: ["Next.js", "React", "PostgreSQL"],
    variant: "analytics",
    link: null,
  },
];
