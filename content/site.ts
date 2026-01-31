// Core section keys - must match registry
export type SectionKey =
  | "navbar"
  | "hero"
  | "arcCarousel"
  | "logos"
  | "benefits"
  | "howItWorks"
  | "pricing"
  | "testimonials"
  | "faq"
  | "finalCta"
  | "footer";

// Section configuration
export interface SectionConfig {
  key: SectionKey;
  enabled: boolean;
  id?: string; // For anchor links
  variant?: string; // e.g. "A" | "B" - specific to each section
  props: Record<string, any>; // Section-specific data
}

// Site metadata
export interface SiteContent {
  site: {
    name: string;
    tagline: string;
  };
  page: {
    title?: string;
    description?: string;
  };
  sections: SectionConfig[];
}

// Single source of truth for site content
export const siteContent: SiteContent = {
  site: {
    name: "Landing Template Starter",
    tagline: "Build high-converting landing pages with ease",
  },
  page: {
    title: "Landing Template Starter",
    description:
      "A Next.js landing page template with Tailwind CSS, shadcn/ui, and more",
  },
  sections: [
    {
      key: "navbar",
      enabled: true,
      props: {
        links: [
          { label: "Features", href: "#benefits" },
          { label: "How It Works", href: "#howItWorks" },
          { label: "Pricing", href: "#pricing" },
          { label: "FAQ", href: "#faq" },
        ],
        cta: {
          label: "Login",
          href: "#",
        },
      },
    },
    {
      key: "hero",
      enabled: true,
      id: "hero",
      variant: "default",
      props: {
        badge: "🚀 For schools interested in exploring applied AI",
        title: "Where students learn AI by building games",
        subtitle:
          "Level Up is a hands-on workshop where students learn how AI works in practice by building their very own game, gaining a practical understanding of how AI systems behave by actually using them.",
        ctaPrimary: { label: "Get Started", href: "#pricing" },
        socialProof: "Designed by Other Stuff, drawing on real-world AI work with teams in Australia and Silicon Valley",
      },
    },
    {
      key: "arcCarousel",
      enabled: true,
      props: {
        cards: [
          { id: "1", title: "Space Invaders", description: "Classic arcade shooter with AI enemies", badge: "Popular" },
          { id: "2", title: "Platformer Adventure", description: "Jump and run with procedural levels" },
          { id: "3", title: "Puzzle Quest", description: "AI-powered puzzle generation", badge: "New" },
          { id: "4", title: "Racing Game", description: "Compete against AI opponents" },
          { id: "5", title: "Tower Defense", description: "Strategic AI pathfinding" },
          { id: "6", title: "RPG Battle", description: "Turn-based combat with smart enemies" },
          { id: "7", title: "Maze Runner", description: "AI maze generation and solving" },
          { id: "8", title: "Card Game", description: "AI opponent with learning strategies", badge: "Advanced" },
        ],
        speed: 50,
        arcDepth: 80,
        overlapTop: "-100px",
        overlapBottom: "-40px",
      },
    },
    {
      key: "logos",
      enabled: true,
      id: "logos",
      props: {
        title: "Trusted by teams at leading companies",
        subtitle: "Join thousands of developers building better products",
        logos: [
          { name: "Acme Corp", href: "https://example.com" },
          { name: "TechStart Inc" },
          { name: "BuildFast", href: "https://example.com" },
          { name: "DevTools Co" },
          { name: "CloudScale", href: "https://example.com" },
          { name: "DataFlow" },
        ],
      },
    },
    {
      key: "benefits",
      enabled: true,
      id: "benefits",
      variant: "bento",
      props: {
        title: "Everything you need to succeed",
        subtitle: "Powerful features designed to help you convert more visitors",
        items: [
          {
            title: "Content-Driven Architecture",
            description:
              "Edit copy and structure without touching code. Perfect for rapid iteration and testing.",
            icon: "FileText",
            highlight: true,
            bullets: [
              "No JSX changes needed",
              "Agent-friendly format",
              "Version controlled content",
            ],
          },
          {
            title: "Responsive Design",
            description:
              "Beautiful on every device with mobile-first approach ensuring great UX everywhere.",
            icon: "Smartphone",
          },
          {
            title: "Type-Safe Development",
            description:
              "Full TypeScript support means fewer bugs, better autocomplete, and improved developer experience.",
            icon: "Shield",
            bullets: ["Compile-time checks", "Better IDE support", "Fewer runtime errors"],
          },
          {
            title: "Performance Optimized",
            description:
              "Built on Next.js 15 with App Router for optimal loading speed and SEO.",
            icon: "Zap",
          },
          {
            title: "Production Ready",
            description:
              "Deploy with confidence using battle-tested components and best practices.",
            icon: "CheckCircle",
            bullets: ["Zero config deployment", "SEO optimized", "Accessibility built-in"],
          },
          {
            title: "Easy to Customize",
            description:
              "Tailwind CSS and shadcn/ui make it simple to match your brand perfectly.",
            icon: "Palette",
          },
        ],
      },
    },
    {
      key: "howItWorks",
      enabled: true,
      id: "howItWorks",
      props: {
        title: "Get started in minutes",
        subtitle: "Three simple steps to launch your landing page",
        steps: [
          {
            title: "Edit Content",
            description:
              "Update the content file with your copy, structure, and configuration. All changes are version controlled.",
            icon: "FileEdit",
            bullets: [
              "No code changes required",
              "Edit copy and structure",
              "Preview changes instantly",
            ],
          },
          {
            title: "Customize Theme",
            description:
              "Adjust colors, fonts, and spacing to match your brand identity perfectly.",
            icon: "Palette",
            bullets: ["Choose your colors", "Select typography", "Set spacing values"],
          },
          {
            title: "Deploy & Ship",
            description:
              "Push to production with zero configuration. Works with Vercel, Netlify, and any modern host.",
            icon: "Rocket",
            bullets: ["One-click deployment", "Automatic optimization", "Global CDN"],
          },
        ],
        note: "No credit card required. Start building in under 5 minutes.",
      },
    },
    {
      key: "pricing",
      enabled: true,
      id: "pricing",
      props: {
        title: "Simple, transparent pricing",
        subtitle: "Choose the plan that fits your needs",
        plans: [
          {
            name: "Starter",
            price: "$29",
            period: "/month",
            description: "Perfect for small projects",
            features: [
              "Up to 3 landing pages",
              "Basic analytics",
              "Email support",
              "Standard templates",
            ],
            cta: "Get Started",
            highlighted: false,
          },
          {
            name: "Professional",
            price: "$79",
            period: "/month",
            description: "For growing businesses",
            features: [
              "Unlimited landing pages",
              "Advanced analytics",
              "Priority support",
              "Custom templates",
              "A/B testing",
            ],
            cta: "Start Free Trial",
            highlighted: true,
          },
          {
            name: "Enterprise",
            price: "$199",
            period: "/month",
            description: "For large organizations",
            features: [
              "Everything in Professional",
              "Dedicated account manager",
              "Custom integrations",
              "SLA guarantee",
              "Training & onboarding",
            ],
            cta: "Contact Sales",
            highlighted: false,
          },
        ],
      },
    },
    {
      key: "testimonials",
      enabled: true,
      id: "testimonials",
      props: {
        title: "Loved by builders everywhere",
        subtitle: "See what our customers have to say",
        testimonials: [
          {
            quote:
              "This template saved us weeks of development time. The content-driven approach is genius.",
            author: "Sarah Johnson",
            role: "CEO, TechStart",
            avatar: "/avatars/sarah.jpg",
          },
          {
            quote:
              "Finally, a landing page system that makes sense. Clean code and great documentation.",
            author: "Michael Chen",
            role: "Developer, BuildFast",
            avatar: "/avatars/michael.jpg",
          },
          {
            quote:
              "We've built 5 landing pages with this template. Each one converts better than the last.",
            author: "Emily Rodriguez",
            role: "Marketing Director, GrowthCo",
            avatar: "/avatars/emily.jpg",
          },
        ],
      },
    },
    {
      key: "faq",
      enabled: true,
      id: "faq",
      props: {
        title: "Frequently asked questions",
        subtitle: "Everything you need to know",
        faqs: [
          {
            question: "How do I customize the content?",
            answer:
              "Simply edit the content/site.ts file. All copy, structure, and configuration lives there. No need to touch component code.",
          },
          {
            question: "Can I add custom sections?",
            answer:
              "Yes! Create a new section component, add it to the registry, and reference it in your content file. The system is designed for extensibility.",
          },
          {
            question: "Is this production-ready?",
            answer:
              "Absolutely. Built with Next.js, TypeScript, and Tailwind CSS. Includes proper SEO, performance optimizations, and responsive design.",
          },
          {
            question: "What about styling and themes?",
            answer:
              "The template uses Tailwind CSS and shadcn/ui with CSS variables for theming. Easy to customize colors, fonts, and spacing.",
          },
        ],
      },
    },
    {
      key: "finalCta",
      enabled: true,
      id: "finalCta",
      props: {
        title: "Ready to get started?",
        subtitle:
          "Join thousands of teams building better landing pages with our template",
        ctaPrimary: "Start Building",
        ctaSecondary: "View Documentation",
      },
    },
    {
      key: "footer",
      enabled: true,
      id: "footer",
      props: {
        logo: "Landing Template Starter",
        tagline: "Build high-converting landing pages with ease",
        links: [
          {
            title: "Product",
            items: [
              { label: "Features", href: "#benefits" },
              { label: "Pricing", href: "#pricing" },
              { label: "FAQ", href: "#faq" },
            ],
          },
          {
            title: "Resources",
            items: [
              { label: "Documentation", href: "/docs" },
              { label: "Blog", href: "/blog" },
              { label: "Support", href: "/support" },
            ],
          },
          {
            title: "Company",
            items: [
              { label: "About", href: "/about" },
              { label: "Contact", href: "/contact" },
              { label: "Privacy", href: "/privacy" },
            ],
          },
        ],
        social: [
          { platform: "Twitter", href: "https://twitter.com" },
          { platform: "GitHub", href: "https://github.com" },
          { platform: "LinkedIn", href: "https://linkedin.com" },
        ],
      },
    },
  ],
};
