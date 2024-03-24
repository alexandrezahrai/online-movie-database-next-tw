import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import { BackgroundBeams } from "@/app/components/BackgroundBeams";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Cinemate",
  description: "Movie database that fetches movie data from the TMDB API.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${inter.variable} relative`}>
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-transparent bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <main className="flex min-h-screen flex-col items-start justify-between relative font-dmSans">
          {/* <BackgroundBeams className="-z-10" /> */}
          {children}
        </main>
      </body>
    </html>
  );
}
