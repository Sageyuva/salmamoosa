import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Salma Moosa",
  description:
    "Building Businesses. Mentoring Founders. Empowering Possibilities.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Apply persisted theme before first paint to avoid flash/mismatch */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("salmamoosa-theme");if(t==="light"){document.documentElement.classList.remove("dark")}else{document.documentElement.classList.add("dark")}}catch(e){}})()`,
          }}
        />
      </head>
      <body
        className={`${geistSans.className} relative flex min-h-full flex-col font-sans`}
      >
        <ThemeProvider>
          {/* Ambient color depth */}
          <div
            className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
            aria-hidden="true"
          >
            <div className="absolute -left-32 top-[-10%] h-[42rem] w-[42rem] rounded-full bg-sky-200 opacity-30 blur-3xl dark:bg-teal-900 dark:opacity-20" />
            <div className="absolute right-[-15%] top-[20%] h-[36rem] w-[36rem] rounded-full bg-rose-200 opacity-30 blur-3xl dark:bg-indigo-800 dark:opacity-20" />
            <div className="absolute bottom-[-10%] left-[25%] h-[40rem] w-[40rem] rounded-full bg-amber-100 opacity-30 blur-3xl dark:bg-amber-900 dark:opacity-20" />
          </div>

          <Navbar />

          <main className="relative z-0 flex flex-1 flex-col pt-12">
            {children}
          </main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
