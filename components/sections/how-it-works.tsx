import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";

interface HowItWorksProps {
  title: string;
  subtitle: string;
  steps: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
}

export function HowItWorks({ title, subtitle, steps }: HowItWorksProps) {
  return (
    <Section variant="muted">
      <Container>
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold">How It Works (stub)</h2>
          <p className="text-muted-foreground">Title: {title}</p>
          <p className="text-muted-foreground">Subtitle: {subtitle}</p>
          <p className="text-sm text-muted-foreground">
            {steps.length} steps process
          </p>
        </div>
      </Container>
    </Section>
  );
}
