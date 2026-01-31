import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import Image from "next/image";

interface LogoItem {
  name: string;
  src?: string;
  href?: string;
}

interface LogosProps {
  title?: string;
  subtitle?: string;
  logos: LogoItem[];
}

function LogoDisplay({ logo }: { logo: LogoItem }) {
  const content = logo.src ? (
    <div className="relative h-8 w-full flex items-center justify-center">
      <Image
        src={logo.src}
        alt={logo.name}
        fill
        className="object-contain opacity-60 hover:opacity-100 transition-opacity"
      />
    </div>
  ) : (
    <div className="flex items-center justify-center h-8 px-4">
      <span className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
        {logo.name}
      </span>
    </div>
  );

  if (logo.href) {
    return (
      <a
        href={logo.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
        aria-label={`Visit ${logo.name}`}
      >
        {content}
      </a>
    );
  }

  return <div>{content}</div>;
}

export function Logos({ title, subtitle, logos }: LogosProps) {
  return (
    <Section className="py-12 sm:py-16">
      <Container>
        <div className="flex flex-col items-center space-y-8">
          {/* Optional Header */}
          {(title || subtitle) && (
            <div className="text-center space-y-2 max-w-2xl">
              {title && (
                <p className="text-sm font-medium text-muted-foreground">
                  {title}
                </p>
              )}
              {subtitle && (
                <p className="text-xs text-muted-foreground/80">{subtitle}</p>
              )}
            </div>
          )}

          {/* Logos Grid */}
          <div className="w-full">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 items-center">
              {logos.map((logo, index) => (
                <div key={`${logo.name}-${index}`} className="flex justify-center">
                  <LogoDisplay logo={logo} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
