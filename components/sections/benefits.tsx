import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";

interface BenefitsProps {
  title: string;
  subtitle: string;
  benefits: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
}

export function Benefits({ title, subtitle, benefits }: BenefitsProps) {
  return (
    <Section>
      <Container>
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold">Benefits (stub)</h2>
          <p className="text-muted-foreground">Title: {title}</p>
          <p className="text-muted-foreground">Subtitle: {subtitle}</p>
          <p className="text-sm text-muted-foreground">
            {benefits.length} benefits (bento layout coming soon)
          </p>
        </div>
      </Container>
    </Section>
  );
}
