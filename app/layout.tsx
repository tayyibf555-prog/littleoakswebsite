import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans, Poppins } from "next/font/google"; // Switched to Outfit (Display) & Plus Jakarta Sans (Body)
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Little Oaks | From Sacred Space to Daily Presence",
  description: "A national framework enabling mosques and communities to build regulated childcare provision.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${plusJakarta.variable} ${poppins.variable} antialiased font-body bg-warm-white text-charcoal flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="flex-grow pt-[72px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
