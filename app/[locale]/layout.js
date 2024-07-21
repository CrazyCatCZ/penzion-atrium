import "./globals.css";

import Script from "next/script";
import { cookies } from "next/headers";
import { useTranslations } from "next-intl";
import { redirect } from "next/navigation";
import { Urbanist } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import IconLanguageSwitcher from "@/components/Other/IconLanguageSwitcher";

import { locales } from "@/navigation";
import { Providers } from "./providers";

import CookieConsent from "../../components/Other/CookieConsent";
import Navbar from "@/components/Other/Navbar/Navbar";
import Footer from "@/components/Other/Footer/Footer";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Penzion Atrium Trutnov",
  description:
    "Náš penzion poskytuje výhodné a cenově dostupné ubytování v blízkosti historického centra Trutnov. Zajišťujeme pohodlí a snadný přístup ke všem zajímavostem, které město nabízí.",
};

export default function RootLayout({ children, params: { locale } }) {
  const cookieStore = cookies();
  const tGeneral = useTranslations("General");
  const consent = cookieStore.get("localConsent");

  if (!locales.includes(locale)) {
    redirect("/");
  }

  return (
    <html lang={locale}>
      <Script
        id="gtag"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('consent', 'default', {
          'ad_storage': 'denied',
          'analytics_storage': 'denied'
        });

        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM}');`,
        }}
      />
      {consent?.value === "true" && (
        <Script
          id="consupd"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            gtag('consent', 'update', {
              'ad_storage': 'granted',
              'analytics_storage': 'granted'
            });
          `,
          }}
        />
      )}
      <body className={urbanist.className}>
        <Providers>
          <Navbar />
          {children}
          <IconLanguageSwitcher />
          <Footer />
          <CookieConsent
            translation={{
              cookieNotice: tGeneral("cookieNotice"),
              cookieText: tGeneral("cookieText"),
              accept: tGeneral("accept"),
              deny: tGeneral("deny"),
            }}
          />
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
