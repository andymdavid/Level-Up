"use client";

import { useState } from "react";
import { SectionRenderer } from "@/components/sections/registry";
import { GetStartedModal } from "@/components/ui/get-started-modal";
import { siteContent } from "@/content/site";

export function SiteShell() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <SectionRenderer
        sections={siteContent.sections}
        onGetStarted={() => setModalOpen(true)}
      />
      <GetStartedModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
