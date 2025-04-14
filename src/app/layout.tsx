import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Layout } from "@/components/Layout";
import { ToasterProvider } from "@/components/ToasterProvider";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});
const metadataBase =
  process.env.NODE_ENV === "development"
    ? new URL("http://localhost:3000")
    : new URL("https://www.edcwebdesign.com");

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase,
    title: "Custom Web Design for Small Businesses | EDC Web Design",
    description:
      "EDC Web Design creates SEO-optimized websites for small businesses in Placerville, Folsom, and nearby cities—helping you grow online and win more customers.",
    alternates: {
      canonical: "https://www.edcwebdesign.com",
    },
    openGraph: {
      title: "Custom Websites That Grow Your Business | EDC Web Design",
      description:
        "We design and build clean, SEO-optimized websites that help small businesses boost visibility and convert visitors into leads.",
      url: "https://www.edcwebdesign.com",
      siteName: "EDC Web Design",
      type: "website",
      images: ["/assets/logo.webp"],
    },
    twitter: {
      card: "summary_large_image",
      title: "Web Design for Local Businesses | EDC Web Design",
      description:
        "Mobile-friendly, SEO-optimized websites crafted for small businesses in Placerville, El Dorado Hills, and nearby areas.",
      images: ["https://www.edcwebdesign.com/assets/logo.webp"],
    },
    other: {
      "script:ld+json": JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://www.edcwebdesign.com/#localbusiness",
        name: "EDC Web Design",
        url: "https://www.edcwebdesign.com",
        email: "garret@edcwebdesign.com",
        telephone: "+15303917473",
        serviceType: [
          "Website Design",
          "SEO Optimization",
          "Custom Development",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-530-391-7473",
          contactType: "Customer Support",
          areaServed: ["US"],
          availableLanguage: ["English"],
        },
        hasMap: "https://www.google.com/maps/place/Placerville,+CA",
        founder: {
          "@type": "Person",
          name: "Garret Grant",
          url: "https://www.edcwebdesign.com",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Placerville",
          addressRegion: "CA",
          postalCode: "95667",
          addressCountry: "US",
        },
        areaServed: [
          { "@type": "Place", name: "Placerville" },
          { "@type": "Place", name: "Tahoe" },
          { "@type": "Place", name: "Folsom" },
          { "@type": "Place", name: "El Dorado Hills" },
          { "@type": "Place", name: "Cameron Park" },
        ],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
        ],
        description:
          "EDC Web Design creates SEO-friendly, custom websites for small businesses in the El Dorado County area. Our goal is to help you stand out online and convert traffic into leads.",
        sameAs: [
          "https://instagram.com/garret.grant",
          "https://facebook.com/garret.d.grant",
        ],
        image: "https://www.edcwebdesign.com/assets/logo.webp",
        priceRange: "$$",
      }),
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {/* Google Ads Global Site Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17005186129"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'AW-17005186129');
      `}
        </Script>
        <Layout>{children}</Layout>
        <ToasterProvider />
      </body>
    </html>
  );
}
