import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
          {/* <div className="absolute mx-auto my-0 top-16 left-0 right-0 w-full max-w-[1000px] h-full max-h-[762px] bg-[rgba(158,139,248,0.3)] blur-[500px] -z-10"></div> */}
          {children}
        </main>
      </body>
    </html>
  );
}
