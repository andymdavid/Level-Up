"use client";

import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { motion } from "framer-motion";
import Image from "next/image";

interface TwoColumnProps {
  title: string;
  body: string;
  singleColumn?: boolean;
  fullHeight?: boolean;
  blocks?: Array<{
    number: string;
    title: string;
    body: string;
    image?: string;
    imageAlt?: string;
    video?: string;
  }>;
  hideTitle?: boolean;
  bodyVariant?: "default" | "display";
  blocksVariant?: "numbered" | "feature";
}

export function TwoColumn({
  title,
  body,
  singleColumn = false,
  fullHeight = false,
  blocks,
  hideTitle = false,
  bodyVariant = "default",
  blocksVariant = "numbered",
}: TwoColumnProps) {
  const bodyClassName =
    bodyVariant === "display"
      ? "mt-4 text-2xl sm:text-3xl md:text-4xl leading-snug text-[#201d1d] text-center"
      : `mt-8 text-sm md:text-base text-[#201d1d]${singleColumn ? " text-center mb-8" : " mb-8"}`;

  return (
    <Section className={`${fullHeight ? "min-h-screen" : "min-h-[75vh]"} flex items-center`}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          {!hideTitle ? (
            <h2 className="font-anton text-[40px] tracking-tight uppercase text-center">
              {title}
            </h2>
          ) : null}
          <p
            className={`${bodyClassName} ${
              singleColumn
                ? bodyVariant === "display"
                  ? "max-w-3xl mx-auto"
                  : "max-w-[40rem] mx-auto"
                : "md:columns-2 md:gap-10"
            }`}
          >
            {body}
          </p>
          {blocks && blocks.length > 0 ? (
            blocksVariant === "feature" ? (
              <div className="mt-10 pt-6 grid gap-x-10 gap-y-12 md:grid-cols-3">
                {blocks.map((block) => (
                  <div key={block.number} className="border-t border-neutral-300/70 pt-6">
                    <h3 className="text-base font-semibold text-[#201d1d]">
                      {block.title}
                    </h3>
                    <p className="mt-2 text-sm text-neutral-600">{block.body}</p>
                    <div className="mt-6 overflow-hidden rounded-xl bg-neutral-200/70">
                      {block.video ? (
                        <video
                          className="aspect-[16/10] w-full object-contain bg-white"
                          src={block.video}
                          autoPlay
                          loop
                          muted
                          playsInline
                        />
                      ) : block.image ? (
                        <div className="relative aspect-[16/10] w-full bg-white p-10">
                          <Image
                            src={block.image}
                            alt={block.imageAlt || block.title}
                            fill
                            className="object-contain"
                          />
                        </div>
                      ) : (
                        <div className="aspect-[16/10] w-full bg-neutral-300/70" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-10 pt-6 grid gap-x-12 gap-y-12 md:grid-cols-2">
                {blocks.map((block) => (
                  <div key={block.number} className="border-t border-neutral-300/70 pt-8">
                    <div className="flex gap-6">
                      <span className="text-sm text-neutral-500">{block.number}</span>
                      <div>
                        <h3 className="text-base font-semibold text-[#201d1d]">
                          {block.title}
                        </h3>
                        <p className="mt-2 text-sm text-neutral-600">{block.body}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )
          ) : null}
        </motion.div>
      </Container>
    </Section>
  );
}
