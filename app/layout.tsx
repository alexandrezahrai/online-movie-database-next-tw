import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BackgroundBeams } from "@/app/components/BackgroundBeams";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movie Database",
  description: "Movie database that fetches movie data from the TMDB API.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-start justify-between relative">
          {/* <BackgroundBeams className="-z-10" /> */}
          {children}
        </main>
      </body>
    </html>
  );
}
