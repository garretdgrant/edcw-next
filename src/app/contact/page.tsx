// app/contact/page.tsx
import Navigation from "@/components/Navigation";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, Instagram, Facebook } from "lucide-react";
import { Metadata } from "next";
import Script from "next/script";

const metadataBase =
  process.env.NODE_ENV === "development"
    ? new URL("http://localhost:3000")
    : new URL("https://www.edcwebdesign.com");

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase,
    title: "Contact EDC Web Design | Local Web Design for Small Businesses",
    description:
      "Reach out to EDC Web Design, we build fast, modern websites for small businesses in Placerville, Folsom, and surrounding areas.",
    alternates: {
      canonical: "https://www.edcwebdesign.com/contact",
    },
    openGraph: {
      title: "Contact EDC Web Design | Local Web Design for Small Businesses",
      description:
        "Let's build a fast, modern website that helps your business grow. Serving Placerville, Folsom, and nearby areas.",
      url: "https://www.edcwebdesign.com/contact",
      siteName: "EDC Web Design",
      type: "website",
      images: ["/assets/logo.webp"],
    },
    twitter: {
      card: "summary_large_image",
      title: "Contact EDC Web Design",
      description:
        "Custom websites for small businesses in Placerville, Folsom, Cameron Park, and more.",
      images: ["https://www.edcwebdesign.com/assets/logo.webp"],
    },
    other: {
      "script:ld+json": JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "@id": "https://www.edcwebdesign.com/#contact",
        name: "Contact EDC Web Design",
        url: "https://www.edcwebdesign.com/contact",
        mainEntityOfPage: {
          "@type": "LocalBusiness",
          "@id": "https://www.edcwebdesign.com/#localbusiness",
          name: "EDC Web Design",
          url: "https://www.edcwebdesign.com",
          email: "garret@edcwebdesign.com",
          telephone: "+1-530-391-7473",
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
            "EDC Web Design helps small businesses build custom, SEO-friendly websites that generate leads and build trust.",
          sameAs: [
            "https://instagram.com/garret.grant",
            "https://facebook.com/garret.d.grant",
          ],
          image: "https://www.edcwebdesign.com/assets/logo.webp",
        },
      }),
    },
  };
}
function getContactJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://www.edcwebdesign.com/contact",
    name: "Contact EDC Web Design",
    url: "https://www.edcwebdesign.com/contact",
    description:
      "Get in touch with EDC Web Design. We build SEO-optimized websites for small businesses in Placerville, Folsom, and nearby areas.",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.edcwebdesign.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Contact",
          item: "https://www.edcwebdesign.com/contact",
        },
      ],
    },
    mainEntity: {
      "@type": "Organization",
      "@id": "https://www.edcwebdesign.com/#localbusiness",
    },
  };
}

const ContactPage = () => {
  const jsonLd = getContactJsonLd();
  return (
    <>
      <Script
        id="jsonld-contact-page"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <div className="flex-1">
          <div className="pt-28 pb-16 px-6 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Contact a{" "}
              <span className="text-gold-gradient">Local Web Designer</span> You
              Can Trust
            </h1>
            <p className="text-secondary text-center mb-12 text-lg max-w-2xl mx-auto">
              Let&apos;s talk about your website goals. Whether you&apos;re
              starting from scratch or need a redesign, I help small businesses
              in El Dorado County build fast, modern websites that work.
            </p>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-surface rounded-xl p-8 shadow-sm border border-border">
                <ContactForm />
              </div>

              <div className="flex flex-col justify-center">
                <div className="bg-surface rounded-xl p-8 shadow-sm border border-border h-fit">
                  <h2 className="text-2xl font-bold mb-6">
                    Other Ways to Reach Me
                  </h2>
                  <p className="text-secondary mb-5">
                    Prefer to reach out directly? No problem — here&apos;s how
                    to get in touch.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-accent mr-3" />
                      <div>
                        <p className="font-medium">Email</p>
                        <a
                          href="mailto:garret@edcwebdesign.com"
                          className="text-secondary hover:text-primary transition-colors"
                        >
                          garret@edcwebdesign.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-accent mr-3" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-secondary">(530) 391-7473</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <Instagram className="h-5 w-5 text-accent mr-3" />
                      <div>
                        <p className="font-medium">Instagram</p>
                        <a
                          href="https://instagram.com/garret.grant"
                          className="text-secondary hover:text-primary transition-colors"
                        >
                          @garret.grant
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <Facebook className="h-5 w-5 text-accent mr-3" />
                      <div>
                        <p className="font-medium">Facebook</p>
                        <a
                          href="https://facebook.com/garret.grant"
                          className="text-secondary hover:text-primary transition-colors"
                        >
                          EDC Web Design
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-medium mb-3">Office Hours</h3>
                    <p className="text-secondary mb-1">
                      Monday - Friday: 9am - 5pm PST
                    </p>
                    <p className="text-secondary">Weekends: By appointment</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-sm text-center text-muted-foreground max-w-3xl mx-auto">
              <p>
                EDC Web Design is based in El Dorado County, CA. I proudly serve
                clients in Placerville, El Dorado Hills, Cameron Park, and
                nearby areas. If you&apos;re searching for a reliable local web
                designer, you&apos;re in the right place.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
