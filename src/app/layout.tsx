import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import { Toaster } from "@/components/ui/sonner";
import PageTransitionLoader from "@/components/PageTransitionLoader";

export const metadata: Metadata = {
  title: "Ethio Trails - Discover the Beauty & Culture of Ethiopia | Ethiopian Tours & Travel",
  description: "Experience authentic Ethiopian culture, history, and natural wonders with Ethio Trails. Expert-guided tours including Historic Route, Cultural Journeys, Bird Watching, Wildlife Safaris, and Adventure Expeditions across Ethiopia.",
  keywords: "Ethiopia tours, Ethiopian travel, Historic Route Ethiopia, Ethiopian culture, Lalibela tours, Axum travel, Ethiopian coffee ceremony, bird watching Ethiopia, wildlife safaris Ethiopia, Simien Mountains, Ethiopian calendar, cultural tourism Ethiopia",
  authors: [{ name: "Ethio Trails" }],
  creator: "Ethio Trails",
  publisher: "Ethio Trails",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.ethiotrails.com",
    siteName: "Ethio Trails",
    title: "Ethio Trails - Discover the Beauty & Culture of Ethiopia",
    description: "Experience authentic Ethiopian culture, history, and natural wonders with expert-guided tours across Ethiopia.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ethio Trails - Where Every Road Has a Story"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Ethio Trails - Discover the Beauty & Culture of Ethiopia",
    description: "Experience authentic Ethiopian culture, history, and natural wonders with expert-guided tours.",
    images: ["/og-image.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" />
        <style>{`
        :root {
          --font-inter: 'Inter', sans-serif;
        }
      `}</style>
      </head>
      <body className="antialiased">
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="6cd46d78-a3fb-47d7-88f1-915e4fe932bc"
        />
        <ErrorReporter />
        <PageTransitionLoader />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {children}
        <Toaster />
        <VisualEditsMessenger />
      </body>
    </html>
  );
}