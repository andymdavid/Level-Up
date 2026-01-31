import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";

interface FinalCtaProps {
  title: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

export function FinalCta({
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
}: FinalCtaProps) {
  return (
    <Section>
      <Container>
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold">Final CTA (stub)</h2>
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
