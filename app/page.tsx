import { siteContent } from "@/content/site";
import { SectionRenderer } from "@/components/sections/registry";

export default function Home() {
  return <SectionRenderer sections={siteContent.sections} />;
}
