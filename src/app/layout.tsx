import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/store/StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Journal4me & Performance Dashboard",
  description: "Journal4me is designed to help you track your trades, understand your performance, and monitor your account progress.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-zinc-950 text-zinc-50 min-h-screen flex flex-col antialiased selection:bg-emerald-500/30`}>
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
