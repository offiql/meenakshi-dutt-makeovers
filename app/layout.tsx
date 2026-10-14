import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const SITE_URL = "https://your-domain.com";
const BRAND_NAME = "Meenakshi Dutt Makeovers";
const SITE_DESCRIPTION =
  "Discover luxury bridal makeup, celebrity-inspired makeup artistry, hair styling, skincare, and personalized beauty experiences at Meenakshi Dutt Makeovers in Dehradun, Uttarakhand.";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default:
      "Meenakshi Dutt Makeovers | Luxury Bridal Makeup & Beauty Studio",
    template: `%s | ${BRAND_NAME}`,
  },

  description: SITE_DESCRIPTION,

  keywords: [
    "Meenakshi Dutt Makeovers",
    "Bridal Makeup Artist Dehradun",
    "Celebrity Makeup Artist",
    "Luxury Makeup Studio Dehradun",
    "Bridal Makeup Uttarakhand",
    "HD Bridal Makeup",
    "Airbrush Makeup",
    "Engagement Makeup",
    "Destination Wedding Makeup",
    "Luxury Beauty Studio",
    "Hair Styling Dehradun",
    "Beauty Salon Dehradun",
    "Professional Makeup Artist",
    "Makeup Artist Uttarakhand",
  ],

  authors: [{ name: BRAND_NAME }],
  creator: BRAND_NAME,
  publisher: BRAND_NAME,
  applicationName: BRAND_NAME,
  category: "Beauty & Makeup",

  openGraph: {
    title:
      "Meenakshi Dutt Makeovers | Luxury Bridal Makeup & Beauty Studio",
    description:
      "Celebrate your beauty with personalized bridal makeup, signature glam, and premium beauty experiences in Dehradun, Uttarakhand.",
    url: SITE_URL,
    siteName: BRAND_NAME,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Meenakshi Dutt Makeovers — Luxury Bridal Makeup & Beauty",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Meenakshi Dutt Makeovers | Luxury Bridal Makeup & Beauty Studio",
    description:
      "Discover personalized bridal makeup, signature glam, and luxury beauty experiences in Dehradun.",
    images: ["/og-image.jpg"],
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

  alternates: {
    canonical: SITE_URL,
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen overflow-x-hidden bg-[#FFF5F8] font-sans text-[#422633] antialiased">
        {children}
      </body>
    </html>
  );
}