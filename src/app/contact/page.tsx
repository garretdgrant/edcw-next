// app/contact/page.tsx
import Navigation from "@/components/Navigation";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, Instagram, Facebook } from "lucide-react";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Contact EDC Web Design | El Dorado County Web Designer",
    description:
      "Get in touch with EDC Web Design. I help small businesses in El Dorado County build fast, modern websites that grow your brand and generate leads.",
    alternates: {
      canonical: "https://www.edcwebdesign.com/contact",
    },
    openGraph: {
      title: "Contact EDC Web Design | El Dorado County Web Designer",
      description:
        "Reach out to a local web designer you can trust. EDC Web Design builds SEO-optimized websites for small businesses in El Dorado County.",
      url: "https://www.edcwebdesign.com/contact",
      siteName: "EDC Web Design",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Contact EDC Web Design | El Dorado County Web Designer",
      description:
        "Contact a local, reliable web designer. Serving Placerville, El Dorado Hills, Cameron Park, and nearby areas.",
    },
    other: {
      // This is how we inject JSON-LD in the <head> manually
      "script:ld+json": JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "EDC Web Design",
        url: "https://www.edcwebdesign.com",
        email: "garret@edcwebdesign.com",
        telephone: "+1-555-123-4567",
        address: {
          addressLocality: "El Dorado County",
          addressRegion: "CA",
          addressCountry: "US",
        },
        openingHours: "Mo-Fr 09:00-17:00",
        description:
          "EDC Web Design helps small businesses in El Dorado County build modern, SEO-friendly websites that generate leads and conversions.",
        sameAs: [
          "https://instagram.com/yourprofile",
          "https://facebook.com/yourpage",
        ],
        image: "https://www.edcwebdesign.com/assets/logo.webp",
      }),
    },
  };
}
const ContactPage = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <div className="flex-1">
          <div className="pt-28 pb-16 px-6 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Contact a Local Web Designer You Can Trust
            </h1>
            <p className="text-secondary text-center mb-12 text-lg max-w-2xl mx-auto">
              Let&apos;s talk about your website goals. Whether you&apos;re starting from
              scratch or need a redesign, I help small businesses in El Dorado
              County build fast, modern websites that work.
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
                        <p className="text-secondary">(555) 123-4567</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <Instagram className="h-5 w-5 text-accent mr-3" />
                      <div>
                        <p className="font-medium">Instagram</p>
                        <a
                          href="https://instagram.com/yourprofile"
                          className="text-secondary hover:text-primary transition-colors"
                        >
                          @yourprofile
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <Facebook className="h-5 w-5 text-accent mr-3" />
                      <div>
                        <p className="font-medium">Facebook</p>
                        <a
                          href="https://facebook.com/yourpage"
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
