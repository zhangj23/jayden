import type { Metadata } from "next";
import { Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "leaflet/dist/leaflet.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Jayden Zhang | Business & Finance Portfolio",
  description: "B.S. Business Administration (Finance & Real Estate) at University at Buffalo. Specializing in Real Estate Market Analysis and Equity Strategy. Exploring markets, visualizing growth, building communities.",
  keywords: ["Real Estate", "Finance", "Business", "University at Buffalo", "Market Analysis", "Investment", "Jayden Zhang"],
  authors: [{ name: "Jayden Zhang" }],
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Jayden Zhang | Business & Finance Portfolio",
    description: "B.S. Business Administration (Finance & Real Estate) at University at Buffalo. Specializing in Real Estate Market Analysis and Equity Strategy.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${sora.variable} ${jetbrainsMono.variable} antialiased noise-overlay`}
        style={{ fontFamily: 'var(--font-sora), system-ui, sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}
