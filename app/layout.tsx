import type { Metadata } from "next";
import { Inter, Anton, Jersey_10, Bungee } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { siteContent } from "@/content/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

const jersey = Jersey_10({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-jersey",
});

const bungee = Bungee({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bungee",
});

const alfabet = localFont({
  src: "../public/Alfabet_Black.otf",
  variable: "--font-alfabet",
});

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
      <body
        className={`${inter.variable} ${anton.variable} ${jersey.variable} ${bungee.variable} ${alfabet.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
