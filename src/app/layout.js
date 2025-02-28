"use client";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { metadata } from "@/lib/metadata";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function RootLayout({ children }) {
  const pageMeta = metadata.home;
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi dalam ms
      once: false,
    });
  }, []);

  return (
    <html lang="en" className="scroll-smooth scheme-only-dark">
      <head>
        <title>{pageMeta.title}</title>
        <meta name="description" content={pageMeta.description} />
        <meta name="keywords" content={pageMeta.keywords.join(", ")} />
      </head>
      <body>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
