"use client";

import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { motion } from "framer-motion";
import Image from "next/image";

interface LevelUpCard {
  id: string;
  number: string;
  title: string;
  description: string;
  primaryTag: string;
  secondaryTag?: string;
  summaryItems: Array<{
    number: string;
    text: string;
  }>;
}

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
  levelUpCards?: LevelUpCard[];
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
  levelUpCards,
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
          {levelUpCards && levelUpCards.length > 0 && (
            <div className="mt-10 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen px-8 md:px-16 lg:px-24">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 max-w-7xl mx-auto items-end">
                {levelUpCards.map((card, index) => {
                  // Progressive step-up: cards are same height but offset vertically
                  // First card (index 0) is lowest, last card is highest
                  const stepOffset = index * 32;

                  return (
                    <div
                      key={card.id}
                      className="rounded-2xl bg-[#2a2a2a] p-5 h-[380px] flex flex-col transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3),0_0_30px_rgba(161,255,98,0.1)]"
                      style={{ marginBottom: `${stepOffset}px` }}
                    >
                      {/* Top section */}
                      <div className="shrink-0">
                        <span className="text-neutral-500 text-sm font-medium">{card.number}</span>
                        <h3 className="text-white text-xl font-semibold mt-3 leading-tight">{card.title}</h3>
                        <p className="text-neutral-400 text-xs mt-3 leading-relaxed">
                          {card.description}
                        </p>
                      </div>

                      {/* Divider */}
                      <div className="border-t border-neutral-700 my-5 shrink-0" />

                      {/* Tags */}
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="px-2.5 py-1 text-xs font-semibold bg-[#a1ff62] text-black rounded uppercase tracking-wide">
                          {card.primaryTag}
                        </span>
                        {card.secondaryTag && (
                          <span className="px-2.5 py-1 text-xs font-medium text-neutral-400 border border-neutral-600 rounded flex items-center gap-1.5">
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <circle cx="12" cy="12" r="10" strokeWidth="2" />
                              <path strokeLinecap="round" strokeWidth="2" d="M12 6v6l4 2" />
                            </svg>
                            {card.secondaryTag}
                          </span>
                        )}
                      </div>

                      {/* Summary box */}
                      <div className="mt-4 flex-1 rounded-xl bg-[#1a1a1a] px-4 flex flex-col">
                        {card.summaryItems.map((item, itemIndex) => (
                          <div key={item.number} className="flex-1 flex items-center border-b border-neutral-800 last:border-b-0">
                            <div className="flex items-baseline gap-3">
                              <span className="text-[#a1ff62] text-xs font-medium shrink-0">{item.number}</span>
                              <span className="text-white text-xs">{item.text}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </motion.div>
      </Container>
    </Section>
  );
}
