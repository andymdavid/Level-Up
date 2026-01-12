import { Container } from "@/components/layout/container";

interface FooterProps {
  logo: string;
  tagline: string;
  links: Array<{
    title: string;
    items: Array<{ label: string; href: string }>;
  }>;
  social: Array<{ platform: string; href: string }>;
}

export function Footer({ logo, tagline, links, social }: FooterProps) {
  return (
    <footer className="border-t">
      <Container>
        <div className="py-8">
          <div className="text-center space-y-4">
            <div className="font-semibold">{logo}</div>
            <p className="text-sm text-muted-foreground">{tagline}</p>
            <p className="text-xs text-muted-foreground">
              Footer (stub) - {links.length} link groups, {social.length} social
              links
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
