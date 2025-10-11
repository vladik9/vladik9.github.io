import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/components/language-provider";
import "./globals.css";
import { vocabulary } from "@/lib/vocabulary";
export const metadata: Metadata = {
  title: vocabulary.en.hero.name,
  description: vocabulary.en.hero.description,
  icons: {
    icon: "https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <ThemeProvider>
          <LanguageProvider>
            <Suspense fallback={null}>{children}</Suspense>
            <Analytics />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
