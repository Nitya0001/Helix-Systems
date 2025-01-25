import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Info, User, Link } from 'lucide-react';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Helix Systems",
    template: "%s | Helix Systems",
  },
  description: "Where Innovation Meets Automation",
  authors: [{ name: "Helix Systems Team", url: "https://helixsystems.com/team" }],
  creator: "Helix Systems",
  metadataBase: new URL("https://helixsystems.xyz"),
  openGraph: {
    title: "Helix Systems",
    description: "Where Innovation Meets Automation",
    url: "https://helixsystems.xyz",
    siteName: "Helix Systems",
    images: [
      {
        url: "https://i.imgur.com/E8NS77E.png",
        width: 800,
        height: 600,
        alt: "Helix Systems Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Helix Systems",
   // description: "Where Innovation Meets Automation",
    images: ["https://i.imgur.com/TkMZFM8.png"],
  },
  icons: {
    icon: "https://i.imgur.com/E8NS77E.png",
    shortcut: "https://i.imgur.com/E8NS77E.png",
    apple: "https://i.imgur.com/E8NS77E.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#e77948",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}