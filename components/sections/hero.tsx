import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

export function Hero({ title, subtitle, ctaPrimary, ctaSecondary }: HeroProps) {
  return (
    <Section>
      <Container>
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Hero (stub)</h1>
          <p className="text-muted-foreground">Title: {title}</p>
          <p className="text-muted-foreground">Subtitle: {subtitle}</p>
          <p className="text-sm text-muted-foreground">
            CTAs: {ctaPrimary} / {ctaSecondary}
          </p>
        </div>
      </Container>
    </Section>
  );
}
