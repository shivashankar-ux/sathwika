import type { Metadata } from "next";
import { Barlow_Condensed, Barlow, Caveat } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { VismePopup } from "@/components/ui/visme-popup";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-display",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-script",
});

export const metadata: Metadata = {
  title: "Sathwika | Visual Designer & Storyteller",
  description: "Portfolio of Sathwika — a passionate visual storyteller and designer crafting cute, floral, and beautiful brand experiences.",
  keywords: ["graphic design", "portfolio", "branding", "floral design", "Sathwika", "visual designer"],
  authors: [{ name: "Sathwika" }],
  openGraph: {
    title: "Sathwika | Visual Designer & Storyteller",
    description: "Portfolio of Sathwika — a passionate visual storyteller and designer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${barlowCondensed.variable} ${barlow.variable} ${caveat.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="relative min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <VismePopup />
          </div>
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
