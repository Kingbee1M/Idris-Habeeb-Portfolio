export type PortfolioMetric = { label: string; value: number; display: string };
export type PortfolioEntry = {
  slug: string;
  name: string;
  short: string;
  description: string;
  use: string;
  mark: string;
  metrics: PortfolioMetric[];
};

// Update the metric values and display labels with your own figures when ready.
const sampleMetrics = (
  timeSpent: { value: number; display: string },
  experience: { value: number; display: string },
  projects: { value: number; display: string }
): PortfolioMetric[] => [
  { label: "Time spent", ...timeSpent },
  { label: "Experience", ...experience },
  { label: "Projects", ...projects },
];

export const technologies: PortfolioEntry[] = [
  { slug: "html5", name: "HTML5", short: "HTML", mark: "5", description: "The semantic structure behind accessible, well-organized web pages.", use: "I use HTML to give page content meaning and a dependable foundation across browsers and assistive technology.", metrics: sampleMetrics(
      { value: 98, display: "98%" },
      { value: 90, display: "Advanced" },
      { value: 20, display: "10+ projects" }
    ), },
  { slug: "css3", name: "CSS3", short: "CSS", mark: "3", description: "The styling language that shapes responsive interfaces and motion.", use: "I use CSS to build layouts, responsive systems, visual details, and interactions that feel consistent on every screen.", metrics: sampleMetrics(
      { value: 85, display: "85%" },
      { value: 90, display: "Advanced" },
      { value: 20, display: "20+ projects" }
    ), },
  { slug: "javascript", name: "JavaScript", short: "JS", mark: "JS", description: "The programming language that brings interaction and application behavior to the web.", use: "I use JavaScript to connect interface events to application state, APIs, and user-facing features.", metrics: sampleMetrics(
      { value: 70, display: "70%" },
      { value: 60, display: "Advanced" },
      { value: 20, display: "20+ projects" }
    ), },
  { slug: "vuejs", name: "Vue.js", short: "VUE", mark: "V", description: "A progressive framework for building component-based web interfaces.", use: "I use Vue to organize interfaces into reusable components and build reactive, maintainable frontends.", metrics: sampleMetrics(
      { value: 30, display: "30%" },
      { value: 70, display: "Advanced" },
      { value: 20, display: "5+ projects" }
    ), },
  { slug: "nextjs", name: "Next.js", short: "NEXT", mark: "N", description: "A React framework for full-stack web applications and server-rendered experiences.", use: "I use Next.js for routing, server rendering, data-driven pages, and production-ready React applications.", metrics: sampleMetrics(
      { value: 90, display: "90%" },
      { value: 90, display: "Expert" },
      { value: 20, display: "20+ projects" }
    ), },
  { slug: "react", name: "React", short: "REACT", mark: "R", description: "A component library for building interactive user interfaces.", use: "I use React to compose reusable interface pieces and manage state-driven application views.", metrics: sampleMetrics(
      { value: 85, display: "85%" },
      { value: 90, display: "Advanced" },
      { value: 20, display: "20+ projects" }
    ), },
  
{ slug: "tailwind-css", name: "Tailwind CSS", short: "TAILWIND", mark: "T", description: "A utility-first CSS framework for building custom interfaces directly in markup.", use: "I use Tailwind CSS to create consistent design systems and responsive layouts with fast iteration.", metrics: sampleMetrics(
  { value: 92, display: "92%" },
  { value: 90, display: "Advanced" },
  { value: 30, display: "30+ projects" }
) },

{ slug: "typescript", name: "TypeScript", short: "TYPESCRIPT", mark: "TS", description: "A typed language that helps make JavaScript applications easier to maintain.", use: "I use TypeScript to clarify data contracts, catch mistakes earlier, and make larger frontend codebases easier to evolve.", metrics: sampleMetrics(
  { value: 82, display: "82%" },
  { value: 80, display: "Proficient" },
  { value: 20, display: "20+ projects" }
) },

{ slug: "expo", name: "Expo", short: "EXPO", mark: "E", description: "A React Native platform for building and shipping iOS and Android applications.", use: "I use Expo to develop cross-platform mobile interfaces and streamline device testing and app delivery.", metrics: sampleMetrics(
  { value: 68, display: "68%" },
  { value: 65, display: "Intermediate" },
  { value: 4, display: "4+ projects" }
) },

{ slug: "nestjs", name: "NestJS", short: "NESTJS", mark: "N", description: "A structured Node.js framework for building server-side applications and APIs.", use: "I use NestJS to organize backend services, API endpoints, and integrations into clear modules.", metrics: sampleMetrics(
  { value: 35, display: "35%" },
  { value: 30, display: "Beginner" },
  { value: 2, display: "2 projects" }
) },

{ slug: "postgresql", name: "PostgreSQL", short: "POSTGRES", mark: "P", description: "A relational database for storing and querying structured application data.", use: "I use PostgreSQL to model application data and build reliable queries for backend features.", metrics: sampleMetrics(
  { value: 38, display: "38%" },
  { value: 35, display: "Beginner" },
  { value: 2, display: "2 projects" }
) },

{ slug: "git", name: "Git", short: "GIT", mark: "G", description: "A version control system for tracking and coordinating changes to code.", use: "I use Git to maintain a clear history of changes and collaborate safely across branches.", metrics: sampleMetrics(
  { value: 90, display: "90%" },
  { value: 90, display: "Advanced" },
  { value: 30, display: "30+ projects" }
) },
]



export const services: PortfolioEntry[] = [
  {
    slug: "web-development",
    name: "Web Development",
    short: "Web applications",
    mark: "01",
    description: "Responsive websites and applications, built to work reliably.",
    use: "I turn designs and product requirements into accessible, maintainable web experiences with thoughtful interaction and dependable implementation.",
    metrics: sampleMetrics(
      { value: 95, display: "95%" },
      { value: 95, display: "Advanced" },
      { value: 20, display: "20+ projects" }
    )
  },
  {
    slug: "mobile-app-development",
    name: "Mobile App Development",
    short: "iOS & Android",
    mark: "02",
    description: "Cross-platform mobile experiences designed for everyday use.",
    use: "I develop mobile frontends with React Native and Expo, with careful attention to device layouts, navigation, and interaction.",
    metrics: sampleMetrics(
      { value: 68, display: "68%" },
      { value: 65, display: "Intermediate" },
      { value: 4, display: "4+ projects" }
    )
  },
  {
    slug: "seo-optimization",
    name: "SEO Optimization",
    short: "Search readiness",
    mark: "03",
    description: "Technical and on-page improvements that help pages communicate clearly to search engines.",
    use: "I improve page structure, metadata, performance, and semantic content so sites are easier to crawl and understand.",
    metrics: sampleMetrics(
      { value: 65, display: "65%" },
      { value: 60, display: "Intermediate" },
      { value: 6, display: "6+ projects" }
    )
  },
  {
    slug: "server-side-rendering",
    name: "Server-Side Rendering",
    short: "Fast first views",
    mark: "04",
    description: "Rendering approaches that deliver useful page content from the server.",
    use: "I use server rendering where it suits the product, supporting faster initial content, shareable routes, and search visibility.",
    metrics: sampleMetrics(
      { value: 85, display: "85%" },
      { value: 85, display: "Advanced" },
      { value: 12, display: "12+ projects" }
    )
  },
  {
    slug: "crm-ats-dashboards",
    name: "CRM & ATS Dashboards",
    short: "Operational tools",
    mark: "05",
    description: "Data-rich interfaces for customer, hiring, and operations workflows.",
    use: "I design and build dashboards that make complex records and workflows easier to scan, manage, and act on.",
    metrics: sampleMetrics(
      { value: 88, display: "88%" },
      { value: 85, display: "Advanced" },
      { value: 5, display: "5+ projects" }
    )
  },
  {
    slug: "cookie-integration",
    name: "Cookie Integration",
    short: "Consent & privacy",
    mark: "06",
    description: "Cookie consent and preference management for privacy-conscious websites.",
    use: "I implement cookie consent interfaces, manage user preferences, and integrate consent-aware analytics and tracking scripts to help websites respect user choices.",
    metrics: sampleMetrics(
      { value: 80, display: "80%" },
      { value: 75, display: "Proficient" },
      { value: 4, display: "4+ integrations" }
    )
  },
];
