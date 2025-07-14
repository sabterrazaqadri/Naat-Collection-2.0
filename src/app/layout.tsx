import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";
import Navbar from "./Components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Naat Collection 2.0",
  description: "Developed By Sabter Raza Qadri Akhtari",
  icons: {
    icon: "/icon.png", // Path to the favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen bg-background`}> 
        <header className="w-full flex items-center justify-between px-4 sm:px-6 py-4 shadow-lg sticky top-0 z-20" style={{background: 'var(--header-bg)', backdropFilter: 'var(--glass-blur)'}}>
          <div className="flex items-center gap-3">
            <Image src="/icon.png" alt="DawateIslami Logo" width={44} height={44} className="rounded-full border-2 border-accent shadow" />
            <span className="text-3xl sm:text-4xl md:text-5xl font-calligraphic bg-gradient-to-r from-accent via-white to-accent bg-clip-text text-transparent drop-shadow-xl tracking-wider animate-pulse">
              Naat Collection
            </span>
          </div>
          <Navbar />
        </header>
        <main className="flex justify-center items-center min-h-[80vh] p-2 sm:p-4">
          <div className="w-full max-w-3xl rounded-3xl shadow-2xl p-2 sm:p-8 bg-card backdrop-blur-xl border border-accent/30 relative z-10">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
