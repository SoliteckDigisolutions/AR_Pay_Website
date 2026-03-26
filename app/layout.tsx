import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";


export const metadata: Metadata = {
  title: "AR Pay",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
