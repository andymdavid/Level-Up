import type { Metadata } from "next";
import "./globals.css";
import { siteContent } from "@/content/site";

export const metadata: Metadata = {
  title: siteContent.page.title || siteContent.site.name,
  description: siteContent.page.description || siteContent.site.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
