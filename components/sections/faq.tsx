import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";

interface FaqProps {
  title: string;
  subtitle: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export function Faq({ title, subtitle, faqs }: FaqProps) {
  return (
    <Section>
      <Container>
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold">FAQ (stub)</h2>
          <p className="text-muted-foreground">Title: {title}</p>
          <p className="text-muted-foreground">Subtitle: {subtitle}</p>
          <p className="text-sm text-muted-foreground">
            {faqs.length} frequently asked questions
          </p>
        </div>
      </Container>
    </Section>
  );
}
