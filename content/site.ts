// Core section keys - must match registry
export type SectionKey =
  | "navbar"
  | "hero"
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
      id: "navbar",
      props: {
        logo: "Landing Template Starter",
        links: [
          { label: "Features", href: "#benefits" },
          { label: "How It Works", href: "#howItWorks" },
          { label: "Pricing", href: "#pricing" },
          { label: "FAQ", href: "#faq" },
        ],
        ctaLabel: "Get Started",
      },
    },
    {
      key: "hero",
      enabled: true,
      id: "hero",
      variant: "default",
      props: {
        title: "Build Landing Pages That Convert",
        subtitle:
          "A content-driven template system for creating high-converting SaaS landing pages. Edit content, not code.",
        ctaPrimary: "Get Started",
        ctaSecondary: "Learn More",
      },
    },
    {
      key: "logos",
      enabled: true,
      id: "logos",
      props: {
        title: "Trusted by leading companies",
        logos: [
          { name: "Company A", src: "/logos/company-a.svg" },
          { name: "Company B", src: "/logos/company-b.svg" },
          { name: "Company C", src: "/logos/company-c.svg" },
          { name: "Company D", src: "/logos/company-d.svg" },
          { name: "Company E", src: "/logos/company-e.svg" },
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
        benefits: [
          {
            title: "Content-Driven",
            description:
              "Edit copy and structure without touching code. Perfect for rapid iteration.",
            icon: "FileText",
          },
          {
            title: "Responsive Design",
            description:
              "Beautiful on every device. Mobile-first approach ensures great UX.",
            icon: "Smartphone",
          },
          {
            title: "Type-Safe",
            description:
              "Full TypeScript support means fewer bugs and better DX.",
            icon: "Shield",
          },
          {
            title: "Performance",
            description:
              "Built on Next.js for optimal loading speed and SEO.",
            icon: "Zap",
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
              "Update the content file with your copy, structure, and configuration.",
            icon: "Edit",
          },
          {
            title: "Customize Theme",
            description:
              "Adjust colors, fonts, and spacing to match your brand.",
            icon: "Palette",
          },
          {
            title: "Deploy",
            description:
              "Push to production with zero configuration. Works with any host.",
            icon: "Rocket",
          },
        ],
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
