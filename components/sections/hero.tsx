"use client";

import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  badge?: string;
  title: string;
  subtitle: string;
  ctaPrimary:
    | string
    | {
        label: string;
        href: string;
      };
  socialProof?: string;
}

export function Hero({
  badge,
  title,
  subtitle,
  ctaPrimary,
  socialProof,
}: HeroProps) {
  // Normalize CTA props to objects
  const primaryCta =
    typeof ctaPrimary === "string"
      ? { label: ctaPrimary, href: "#pricing" }
      : ctaPrimary;

  return (
    <Section className="min-h-screen flex items-center justify-center">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center space-y-6 max-w-5xl mx-auto"
        >
          {/* Optional Badge */}
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Badge
                variant="secondary"
                className="inline-flex items-center gap-1 px-3 py-1 text-lg font-jersey"
              >
                {badge}
              </Badge>
            </motion.div>
          )}

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-anton text-4xl tracking-tight sm:text-5xl md:text-6xl uppercase"
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base text-[#201d1d] max-w-4xl"
          >
            {subtitle}
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button size="lg" asChild className="group">
              <a href={primaryCta.href}>
                {primaryCta.label}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>

          {/* Social Proof */}
          {socialProof && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-sm text-muted-foreground"
            >
              {socialProof}
            </motion.p>
          )}
        </motion.div>
      </Container>
    </Section>
  );
}
