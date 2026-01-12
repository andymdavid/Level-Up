import { SectionKey, SectionConfig } from "@/content/site";
import { Navbar } from "./navbar";
import { Hero } from "./hero";
import { Logos } from "./logos";
import { Benefits } from "./benefits";
import { HowItWorks } from "./how-it-works";
import { Pricing } from "./pricing";
import { Testimonials } from "./testimonials";
import { Faq } from "./faq";
import { FinalCta } from "./final-cta";
import { Footer } from "./footer";

// Map section keys to their components
const sectionComponents: Record<SectionKey, React.ComponentType<any>> = {
  navbar: Navbar,
  hero: Hero,
  logos: Logos,
  benefits: Benefits,
  howItWorks: HowItWorks,
  pricing: Pricing,
  testimonials: Testimonials,
  faq: Faq,
  finalCta: FinalCta,
  footer: Footer,
};

interface SectionRendererProps {
  sections: SectionConfig[];
}

export function SectionRenderer({ sections }: SectionRendererProps) {
  return (
    <>
      {sections.map((section, index) => {
        // Skip disabled sections
        if (!section.enabled) {
          return null;
        }

        // Get the component for this section key
        const Component = sectionComponents[section.key];

        // Fallback for unknown section keys (dev warning)
        if (!Component) {
          if (process.env.NODE_ENV === "development") {
            return (
              <div
                key={`${section.key}-${index}`}
                className="p-4 border border-red-500 bg-red-50 text-red-900"
              >
                <strong>Unknown section key:</strong> {section.key}
              </div>
            );
          }
          return null;
        }

        // Render the section with its props
        return <Component key={`${section.key}-${index}`} {...section.props} />;
      })}
    </>
  );
}
