export type ExperienceRole = {
  slug: string;
  company: string;
  role: string;
  arrangement: string;
  dates: string | null;
  overview: string;
  summary: string;
  contributions: string[];
  website: string | null;
  websiteLabel?: string;
};

export const experience: ExperienceRole[] = [
  {
    slug: "connekta-plc",
    company: "Connekta Plc",
    role: "Front-End Developer",
    arrangement: "Remote",
    dates: "April 1st – Present",
    overview: "A product and engineering role focused on building scalable web interfaces.",
    summary: "I build web interfaces with a focus on dependable implementation, responsive behavior, and a consistent user experience.",
    contributions: [
      "Build scalable web interfaces using Next.js, TypeScript, and Tailwind CSS.",
      "Translate product requirements into responsive front-end features.",
    ],
    website: null,
  },
  {
    slug: "outcess-solutions",
    company: "Outcess Solutions",
    role: "Front-End Developer",
    arrangement: "Hybrid",
    dates: "February 1st – Present",
    overview: "Outcess works across customer engagement, business process outsourcing, and digital solutions for organizations.",
    summary: "I developed a responsive multi-page U.S. website, bringing its page layouts and motion design together with API integrations.",
    contributions: [
      "Developed a responsive multi-page U.S. website.",
      "Added Framer Motion animations to support the site’s interactions.",
      "Integrated APIs into the front-end experience.",
    ],
    website: "https://outcess.com/",
  },
  {
    slug: "primeorb-solutions",
    company: "PrimeOrb Solutions",
    role: "Front-End Developer",
    arrangement: "Remote",
    dates: "December 2024 – January 2026",
    overview: "PrimeOrb Services describes itself as a technology partner building custom software, web applications, and mobile products.",
    summary: "I built core authentication and contact pages for the product, with attention to reusable UI and state-driven interactions.",
    contributions: [
      "Built authentication and contact pages using Next.js.",
      "Styled responsive interfaces with Tailwind CSS.",
      "Used Zustand to manage front-end state.",
    ],
    website: "https://www.primeorbs.com/",
  },
  {
    slug: "hng-internship",
    company: "HNG Internship",
    role: "Front-End Developer Intern",
    arrangement: "Remote",
    dates: null,
    overview: "A remote internship experience centered on collaborative development and rapid delivery cycles.",
    summary: "I worked through front-end tasks in fast-paced sprints, improving responsive features and resolving interface issues.",
    contributions: [
      "Developed responsive web features.",
      "Resolved front-end UI bugs during sprint cycles.",
      "Worked through scoped tasks in a fast-paced team environment.",
    ],
    website: null,
  },
  {
    slug: "leen-konnect",
    company: "LeenKonnect",
    role: "Front-End Developer",
    arrangement: "Remote / Hybrid",
    dates: "May 1st – Present",
    overview: "LeenKonnect is shown here with the Emporium website you identified as the official site for its parent company.",
    summary: "I translated design mockups into responsive, production-ready web components, carrying the intended visual direction through to implementation.",
    contributions: [
      "Converted design mockups into responsive web components.",
      "Prepared components for production use across screen sizes.",
    ],
    website: "https://shopwithemporium.com/",
    websiteLabel: "Visit Emporium official website",
  },
];
