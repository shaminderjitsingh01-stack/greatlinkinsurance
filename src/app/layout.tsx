import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GreatLink Insurance | Trusted Insurance Broker in Singapore",
  description: "GreatLink Insurance is a leading insurance broker in Singapore offering comprehensive coverage including motor, property, travel, employee benefits, engineering insurance and surety bonds. Get expert advice and competitive quotes.",
  keywords: "insurance broker Singapore, motor insurance, employee benefits, property insurance, travel insurance, engineering insurance, surety bonds, corporate insurance",
  authors: [{ name: "GreatLink Insurance Pte Ltd" }],
  creator: "GreatLink Insurance",
  publisher: "GreatLink Insurance Pte Ltd",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://greatlinkinsurance.sg"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "GreatLink Insurance | Trusted Insurance Broker in Singapore",
    description: "Your trusted insurance partner since 2015. Comprehensive coverage for individuals and businesses.",
    url: "https://greatlinkinsurance.sg",
    siteName: "GreatLink Insurance",
    locale: "en_SG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GreatLink Insurance | Trusted Insurance Broker in Singapore",
    description: "Your trusted insurance partner since 2015. Comprehensive coverage for individuals and businesses.",
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow pt-16 lg:pt-20">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
