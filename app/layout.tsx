import type { Metadata } from "next";
import "./globals.css";

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
      <body className="min-h-full bg-canvas text-text-primary font-sans">
        {children}
      </body>
    </html>
  );
}
