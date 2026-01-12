"use client";

import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";

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
  ctaSecondary:
    | string
    | {
        label: string;
        href: string;
      };
  socialProof?: string;
  media?: {
    type: "image" | "video";
    src: string;
    alt: string;
  };
}

export function Hero({
  badge,
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  socialProof,
  media,
}: HeroProps) {
  // Normalize CTA props to objects
  const primaryCta =
    typeof ctaPrimary === "string"
      ? { label: ctaPrimary, href: "#pricing" }
      : ctaPrimary;
  const secondaryCta =
    typeof ctaSecondary === "string"
      ? { label: ctaSecondary, href: "#benefits" }
      : ctaSecondary;

  return (
    <Section className="pt-20 lg:pt-28">
      <Container>
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-6"
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
                  className="inline-flex items-center gap-1 px-3 py-1 text-sm"
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
              className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl"
            >
              {title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-muted-foreground sm:text-xl max-w-2xl"
            >
              {subtitle}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" asChild className="group">
                <a href={primaryCta.href}>
                  {primaryCta.label}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="group">
                <a href={secondaryCta.href}>
                  <Play className="mr-2 h-4 w-4" />
                  {secondaryCta.label}
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

          {/* Right Column - Media */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            {media ? (
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border bg-muted/50 shadow-2xl">
                {media.type === "image" && (
                  <Image
                    src={media.src}
                    alt={media.alt}
                    fill
                    className="object-cover"
                    priority
                  />
                )}
              </div>
            ) : (
              // Tasteful placeholder when no media is provided
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border bg-gradient-to-br from-muted/50 to-muted shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-2 p-8">
                    <div className="w-16 h-16 mx-auto rounded-lg bg-primary/10 flex items-center justify-center">
                      <Play className="h-8 w-8 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Product Demo
                    </p>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
