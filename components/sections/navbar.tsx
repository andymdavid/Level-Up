import { Container } from "@/components/layout/container";

interface NavbarProps {
  logo: string;
  links: Array<{ label: string; href: string }>;
  ctaLabel: string;
}

export function Navbar({ logo, links, ctaLabel }: NavbarProps) {
  return (
    <header className="border-b">
      <Container>
        <div className="py-4">
          <div className="flex items-center justify-between">
            <div className="font-semibold">{logo}</div>
            <div className="text-sm text-muted-foreground">
              Navbar (stub) - {links.length} links, CTA: {ctaLabel}
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
