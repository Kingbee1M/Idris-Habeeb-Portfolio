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
const sampleMetrics = (): PortfolioMetric[] => [
  { label: "Time spent", value: 68, display: "Placeholder" },
  { label: "Experience", value: 74, display: "Placeholder" },
  { label: "Projects", value: 52, display: "Placeholder" },
];

export const technologies: PortfolioEntry[] = [
  { slug: "html5", name: "HTML5", short: "HTML", mark: "5", description: "The semantic structure behind accessible, well-organized web pages.", use: "I use HTML to give page content meaning and a dependable foundation across browsers and assistive technology.", metrics: sampleMetrics() },
  { slug: "css3", name: "CSS3", short: "CSS", mark: "3", description: "The styling language that shapes responsive interfaces and motion.", use: "I use CSS to build layouts, responsive systems, visual details, and interactions that feel consistent on every screen.", metrics: sampleMetrics() },
  { slug: "javascript", name: "JavaScript", short: "JS", mark: "JS", description: "The programming language that brings interaction and application behavior to the web.", use: "I use JavaScript to connect interface events to application state, APIs, and user-facing features.", metrics: sampleMetrics() },
  { slug: "vuejs", name: "Vue.js", short: "VUE", mark: "V", description: "A progressive framework for building component-based web interfaces.", use: "I use Vue to organize interfaces into reusable components and build reactive, maintainable frontends.", metrics: sampleMetrics() },
  { slug: "nextjs", name: "Next.js", short: "NEXT", mark: "N", description: "A React framework for full-stack web applications and server-rendered experiences.", use: "I use Next.js for routing, server rendering, data-driven pages, and production-ready React applications.", metrics: sampleMetrics() },
  { slug: "react", name: "React", short: "REACT", mark: "R", description: "A component library for building interactive user interfaces.", use: "I use React to compose reusable interface pieces and manage state-driven application views.", metrics: sampleMetrics() },
  { slug: "tailwind-css", name: "Tailwind CSS", short: "TAILWIND", mark: "T", description: "A utility-first CSS framework for building custom interfaces directly in markup.", use: "I use Tailwind CSS to create consistent design systems and responsive layouts with fast iteration.", metrics: sampleMetrics() },
  { slug: "typescript", name: "TypeScript", short: "TYPESCRIPT", mark: "TS", description: "A typed language that helps make JavaScript applications easier to maintain.", use: "I use TypeScript to clarify data contracts, catch mistakes earlier, and make larger frontend codebases easier to evolve.", metrics: sampleMetrics() },
  { slug: "docker", name: "Docker", short: "DOCKER", mark: "D", description: "A platform for packaging applications and their dependencies into containers.", use: "I use Docker to create repeatable development and deployment environments for application services.", metrics: sampleMetrics() },
  { slug: "expo", name: "Expo", short: "EXPO", mark: "E", description: "A React Native platform for building and shipping iOS and Android applications.", use: "I use Expo to develop cross-platform mobile interfaces and streamline device testing and app delivery.", metrics: sampleMetrics() },
  { slug: "nestjs", name: "NestJS", short: "NESTJS", mark: "N", description: "A structured Node.js framework for building server-side applications and APIs.", use: "I use NestJS to organize backend services, API endpoints, and integrations into clear modules.", metrics: sampleMetrics() },
  { slug: "laravel", name: "Laravel", short: "LARAVEL", mark: "L", description: "A PHP framework with expressive tools for building web applications.", use: "I use Laravel to structure web application logic, data access, and backend workflows.", metrics: sampleMetrics() },
  { slug: "postgresql", name: "PostgreSQL", short: "POSTGRES", mark: "P", description: "A relational database for storing and querying structured application data.", use: "I use PostgreSQL to model application data and build reliable queries for backend features.", metrics: sampleMetrics() },
  { slug: "git", name: "Git", short: "GIT", mark: "G", description: "A version control system for tracking and coordinating changes to code.", use: "I use Git to maintain a clear history of changes and collaborate safely across branches.", metrics: sampleMetrics() },
];

export const services: PortfolioEntry[] = [
  { slug: "web-design", name: "Web Design", short: "Digital experiences", mark: "01", description: "Visual direction and interface design for clear, memorable websites.", use: "From layout and type to responsive states, I shape interfaces around the people using them and the goals they need to reach.", metrics: sampleMetrics() },
  { slug: "web-development", name: "Web Development", short: "Web applications", mark: "02", description: "Responsive websites and applications, built to work reliably.", use: "I turn designs and product requirements into accessible, maintainable web experiences with thoughtful interaction and dependable implementation.", metrics: sampleMetrics() },
  { slug: "landing-pages", name: "Landing Pages", short: "Focused campaigns", mark: "03", description: "Focused pages that make a product or offer easy to understand.", use: "I build campaign pages with a clear message, useful content hierarchy, responsive layouts, and a direct path to action.", metrics: sampleMetrics() },
  { slug: "mobile-app-development", name: "Mobile App Development", short: "iOS & Android", mark: "04", description: "Cross-platform mobile experiences designed for everyday use.", use: "I develop mobile frontends with React Native and Expo, with careful attention to device layouts, navigation, and interaction.", metrics: sampleMetrics() },
  { slug: "seo-optimization", name: "SEO Optimization", short: "Search readiness", mark: "05", description: "Technical and on-page improvements that help pages communicate clearly to search engines.", use: "I improve page structure, metadata, performance, and semantic content so sites are easier to crawl and understand.", metrics: sampleMetrics() },
  { slug: "server-side-rendering", name: "Server-Side Rendering", short: "Fast first views", mark: "06", description: "Rendering approaches that deliver useful page content from the server.", use: "I use server rendering where it suits the product, supporting faster initial content, shareable routes, and search visibility.", metrics: sampleMetrics() },
  { slug: "crm-ats-dashboards", name: "CRM & ATS Dashboards", short: "Operational tools", mark: "07", description: "Data-rich interfaces for customer, hiring, and operations workflows.", use: "I design and build dashboards that make complex records and workflows easier to scan, manage, and act on.", metrics: sampleMetrics() },
];
