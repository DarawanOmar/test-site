import Header from "@/components/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Foodie",
    template: "%s - Foodie",
  },
  description: "Come and see our delicious food!",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} max-w-7xl mx-auto `}>
        <Header />
        <main className="p-5">{children}</main>
      </body>
    </html>
  );
}
