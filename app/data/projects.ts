export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  brief: string;
  approach: string;
  stack: string[];
  image: string;
  imageAlt: string;
  link: string | null;
};

export const projects: Project[] = [
  {
    slug: "framer",
    title: "Framer",
    category: "LANDING PAGE",
    description: "A visually engaging and fully responsive landing page featuring sleek UI components and modern design patterns.",
    brief: "Create a polished landing page that introduces Framer's product and makes its key features easy to explore.",
    approach: "The page pairs a clear product message with a striking hero visual, responsive layouts, and focused calls to action.",
    stack: ["Next.js", "Tailwind CSS", "TypeScript"],
    image: "/projects/framer.webp",
    imageAlt: "Framer landing page with a blue productivity hero and abstract 3D artwork",
    link: null,
  },
  {
    slug: "fasco-ecommerce",
    title: "Fasco Ecommerce website",
    category: "E-COMMERCE",
    description: "A modern, responsive fashion store built for style and functionality. It features a sleek interface, dynamic product listings, category filters, and a smooth checkout flow.",
    brief: "Build a fashion storefront where customers can discover collections, browse products, and move smoothly toward checkout.",
    approach: "The store combines a clean fashion-led presentation with product listings, category filters, and a responsive shopping flow.",
    stack: ["Next.js", "TypeScript", "Framer animation UI", "Tailwind CSS"],
    image: "/projects/Fasco.webp",
    imageAlt: "FASCO fashion storefront with a monochrome editorial sale banner",
    link: null,
  },
  {
    slug: "infinite-solutions",
    title: "Infinite Solutions",
    category: "BUSINESS WEBSITE",
    description: "A modern and responsive website for Infinite Solutions, showcasing their services and expertise in a user-friendly format.",
    brief: "Present Infinite Solutions' web, app, and SEO services in a clear, approachable business website.",
    approach: "A bold service-led hero and clearly structured service cards help visitors understand the company's offer and find a next step.",
    stack: ["Next.js", "Tailwind CSS", "TypeScript"],
    image: "/projects/infinitesolutions.webp",
    imageAlt: "Infinite Solutions website showing its web and app development services",
    link: null,
  },
  {
    slug: "oceanica",
    title: "Oceanica",
    category: "TOURISM WEBSITE",
    description: "A modern, visually engaging tourism landing page. It highlights travel packages, client testimonials, and emphasizes seamless user experience for promoting exotic destinations.",
    brief: "Introduce Oceanica's travel experiences and help visitors discover tours and destinations.",
    approach: "The landing page uses immersive ocean imagery and clear tour information to make the destinations and activities easy to explore.",
    stack: ["React", "Tailwind CSS", "TypeScript"],
    image: "/projects/Oceanica.webp",
    imageAlt: "Oceanica tourism landing page featuring ocean activities and travel experiences",
    link: null,
  },
  {
    slug: "emporium-website",
    title: "Emporium Website",
    category: "E-COMMERCE PLATFORM",
    description: "The Emporium website introduces the product and guides users to learn more, visit the vendor dashboard, or open a seller's storefront.",
    brief: "Help people understand Emporium and connect them with the right part of the platform, whether they are learning about it or shopping with a seller.",
    approach: "The experience brings product information and clear routes to the vendor dashboard and storefront into one public website.",
    stack: ["Next.js", "Tailwind CSS", "TypeScript"],
    image: "/projects/emporium-storefront.png",
    imageAlt: "Emporium website promoting an online store and vendor dashboard",
    link: "https://shopwithemporium.com/",
  },
  {
    slug: "emporium-vendor",
    title: "Emporium Vendor Dashboard",
    category: "VENDOR DASHBOARD",
    description: "The Emporium vendor dashboard helps sellers manage their storefront and run their business from one place.",
    brief: "Give Emporium vendors a dedicated workspace for managing their storefront and day-to-day selling activity.",
    approach: "The dashboard brings storefront management and seller tools into a single vendor-facing app.",
    stack: ["Next.js", "Tailwind CSS", "TypeScript"],
    image: "/projects/Screenshot%202026-11-03%20113122.png",
    imageAlt: "Emporium vendor login screen with storefront and order management imagery",
    link: "https://vendor.shopwithemporium.com/login",
  },
];
