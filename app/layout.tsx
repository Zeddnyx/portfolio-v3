import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const josefinSans = localFont({
  src: [
    {
      path: "./fonts/josefin/JosefinSans-Regular.ttf",
      weight: "400",
    },
    {
      path: "./fonts/josefin/JosefinSans-Medium.ttf",
      weight: "500",
    },
    {
      path: "./fonts/josefin/JosefinSans-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "./fonts/josefin/JosefinSans-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-josefin-sans",
});

const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN;
export const metadata: Metadata = {
  title: "Jaenudin Portfolio",
  description:
    "Frontend Developer. Focused on performance-driven, user-friendly interfaces. Passionate about coding efficiently with Neovim.",
  alternates: {
    canonical: DOMAIN,
  },
  openGraph: {
    type: "website",
    url: DOMAIN,
    images: ``,
    title: "Jaenudin Portfolio",
    description:
      "Frontend Developer. Focused on performance-driven, user-friendly interfaces. Passionate about coding efficiently with Neovim.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
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
        className={`${geistSans.variable} ${josefinSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
