import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "sonner";
import TopBanner from "@/components/layout/TopBanner";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileStickyBar from "@/components/layout/MobileStickyBar";
import JsonLd from "@/components/seo/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "600", "700", "800", "900"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#07090e",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bigboyroofingbelton.com"),
  title: {
    default: "Big Boy Roofing | Belton TX Tough Roofing & Storm Restoration",
    template: "%s | Big Boy Roofing Belton TX",
  },
  description:
    "Locally owned roofing contractor in Belton, TX. Residential roof replacements, emergency hail & storm damage repairs, IKO architectural shingles, insurance adjuster assistance, and free 21-point inspections across Bell County.",
  keywords: [
    "Roofing contractor Belton TX",
    "Belton roofing company",
    "Temple TX roof replacement",
    "Bell County storm damage roofer",
    "Hail damage insurance claim Belton",
    "IKO architectural shingles Texas",
    "Roof leak repair Belton TX",
    "Juan Barron Austin Farr Big Boy Roofing",
    "Salado roofer",
    "Killeen roof inspection",
  ],
  authors: [{ name: "Big Boy Roofing" }],
  creator: "Big Boy Roofing",
  publisher: "Big Boy Roofing",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://www.bigboyroofingbelton.com",
  },
  openGraph: {
    title: "Big Boy Roofing | Belton TX Tough Roofing & Storm Restoration",
    description:
      "Built for the People! 4.8★ Google rated local roofing contractor in Belton, TX. Free drone & attic hail damage inspections.",
    url: "https://www.bigboyroofingbelton.com",
    siteName: "Big Boy Roofing",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Big Boy Roofing | Belton TX Tough Roofing & Storm Restoration",
    description:
      "Built for the People! 4.8★ Google rated local roofing contractor in Belton, TX. Free drone & attic hail damage inspections.",
  },
  icons: {
    icon: "/images/logo.jpg",
    apple: "/images/logo.jpg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${montserrat.variable} scroll-smooth`}>
      <head>
        <JsonLd />
      </head>
      <body className="min-h-screen bg-[#0a0d14] font-sans antialiased text-slate-100 selection:bg-amber-500 selection:text-slate-950 flex flex-col">
        <TopBanner />
        <Navbar />
        <main className="flex-1 pb-24 md:pb-0">{children}</main>
        <Footer />
        <MobileStickyBar />
        <Toaster position="top-right" richColors theme="dark" closeButton />
        <Analytics />
      </body>
    </html>
  );
}
