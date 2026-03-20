import type { Metadata } from "next";
import "./globals.css";

import { Navbar } from "@/components/layout/navbar";

export const metadata: Metadata = {
  title: "Zaw Htike Aung",
  description: "Premium cinematic portfolio for Zaw Htike Aung.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-canvas font-sans text-text-primary">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
