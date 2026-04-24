import type { Metadata } from "next";
import { Manrope, Noto_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

const manrope = Manrope({
  subsets: ["latin"],
  variable: '--font-manrope',
  display: 'swap',
});

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ['300', '400'],
  style: ['normal', 'italic'],
  variable: '--font-noto-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://aetheria-hotel.com'),
  title: {
    default: "AETHERIA Boutique Hotel | Luxury & Serenity",
    template: "%s | AETHERIA Boutique Hotel"
  },
  description: "Experience the pinnacle of luxury at AETHERIA Boutique Hotel. Discover our Michelin-star dining, world-class wellness, and curated experiences.",
  keywords: ["luxury hotel", "boutique hotel", "fine dining", "wellness retreat", "Michelin star"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aetheria-hotel.com",
    siteName: "AETHERIA Boutique Hotel",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${notoSerif.variable}`}>
      <head>
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>

        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'XXXXXXXXXXXXXXX');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body className="font-body-md bg-background text-on-surface">
        <Navbar />
        {children}
        <Footer />

        {/* Structured Data */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Hotel",
              "name": "AETHERIA Boutique Hotel",
              "description": "A sanctuary of understated luxury and Michelin-star gastronomy.",
              "url": "https://aetheria-hotel.com",
              "telephone": "+1-234-567-8900",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Luxury Avenue 1",
                "addressLocality": "Serenity Bay",
                "addressRegion": "Paradise",
                "postalCode": "12345",
                "addressCountry": "US"
              }
            })
          }}
        />
      </body>
    </html>
  );
}
