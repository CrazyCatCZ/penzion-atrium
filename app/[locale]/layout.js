import "./globals.css";
import { redirect } from "next/navigation";
import { Urbanist } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import { locales } from "@/navigation";

import Navbar from "@/Components/Other/Navbar/Navbar";
import Footer from "@/Components/Other/Footer/Footer";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Penzion Atrium Trutnov",
  description: "Generated by create next app",
};

export default function RootLayout({ children, params: { locale } }) {
  if (!locales.includes(locale)) {
    redirect("/");
  }

  return (
    <html lang={locale}>
      <body className={urbanist.className}>
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
