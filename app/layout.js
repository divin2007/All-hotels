import { Noto_Serif, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-noto-serif",
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300", "400", "600"],
});

export const metadata = {
  title: {
    default: "AETHERIA | Luxury Boutique Hotel",
    template: "%s | AETHERIA Boutique Hotel",
  },
  description: "A sanctuary of quiet luxury, where modern elegance meets timeless Mediterranean heritage.",
  metadataBase: new URL("https://aetheria-hotel.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aetheria-hotel.vercel.app",
    siteName: "Aetheria Boutique Hotel",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className={`${notoSerif.variable} ${manrope.variable} font-sans antialiased bg-ivory text-charcoal`}>
        {/* GA4 / GTM */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_TRACKING_ID');
          `}
        </Script>

        {/* Meta Pixel */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'META_PIXEL_ID');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* Cloudbeds Library */}
        <Script
          src="https://static1.cloudbeds.com/booking-engine/latest/static/js/immersive-experience/cb-immersive-experience.js"
          strategy="beforeInteractive"
        />

        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
