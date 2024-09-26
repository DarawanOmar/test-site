import Header from "@/components/Header";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const inter = Nunito({
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Foodie",
    template: "%s - Foodie",
  },
  description: "Come and see our delicious food!",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nextjs-site-com.vercel.app",
    siteName: "Foodie",
  },
  metadataBase: new URL("https://nextjs-site-com.vercel.app"),
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
