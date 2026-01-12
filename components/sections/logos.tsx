import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";

interface LogosProps {
  title: string;
  logos: Array<{ name: string; src: string }>;
}

export function Logos({ title, logos }: LogosProps) {
  return (
    <Section variant="muted">
      <Container>
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold">Logos (stub)</h2>
          <p className="text-muted-foreground">Title: {title}</p>
          <p className="text-sm text-muted-foreground">
            {logos.length} partner logos
          </p>
        </div>
      </Container>
    </Section>
  );
}
