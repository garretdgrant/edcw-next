import Navigation from "@/components/Navigation";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Metadata } from "next";

const metadataBase =
  process.env.NODE_ENV === "development"
    ? new URL("http://localhost:3000")
    : new URL("https://www.edcwebdesign.com");

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase,
    title: "Website Pricing | Affordable Plans for Small Businesses",
    description:
      "See transparent website pricing from EDC Web Design. Choose from affordable plans built for small businesses in Placerville, El Dorado Hills, Folsom, and nearby areas.",
    alternates: {
      canonical: "https://www.edcwebdesign.com/pricing",
    },
    openGraph: {
      title: "Website Pricing | Affordable Plans for Small Businesses",
      description:
        "Choose the right web design plan for your business. Clear pricing, custom options, and no surprises — serving Placerville, Cameron Park, Folsom, and surrounding towns.",
      url: "https://www.edcwebdesign.com/pricing",
      siteName: "EDC Web Design",
      type: "website",
      images: ["/assets/logo.webp"],
    },
    twitter: {
      card: "summary_large_image",
      title: "Website Pricing from EDC Web Design",
      description:
        "Explore web design packages made for small businesses. Serving El Dorado County including Placerville, Folsom, and more.",
      images: ["https://www.edcwebdesign.com/assets/logo.webp"],
    },
    other: {
      "script:ld+json": JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://www.edcwebdesign.com/#pricing",
        name: "Website Pricing | EDC Web Design",
        url: "https://www.edcwebdesign.com/pricing",
        description:
          "EDC Web Design provides affordable website packages for small businesses. Get pricing transparency, professional results, and long-term support.",
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
            "EDC Web Design was founded by Garret Grant to help small businesses build SEO-friendly, user-focused websites that stand out online and drive real growth.",
          sameAs: [
            "https://instagram.com/garret.grant",
            "https://facebook.com/garret.d.grant",
          ],
          image: "https://www.edcwebdesign.com/assets/logo.webp",
          priceRange: "$$",
        },
      }),
    },
  };
}

const Pricing = () => {
  const pricingPlans = [
    {
      title: "Starter Site",
      tagline: "Simple & Effective",
      audience:
        "Perfect for new businesses or those just establishing an online presence",
      popular: false,
      priceText: "500",
      features: [
        "Custom responsive single-page design",
        "Mobile optimization",
        "Contact form integration",
        "Basic SEO setup",
        "Hosting & domain assistance",
      ],
      ctaText: "Get Started",
    },
    {
      title: "Business Builder",
      tagline: "Growth & Engagement",
      audience:
        "Ideal for established businesses looking to expand their online reach",
      popular: true,
      priceText: "600",
      features: [
        "Multi-page professional website",
        "Content management system",
        "Search engine optimization",
        "Google Analytics integration",
        "Regular maintenance & updates",
      ],
      ctaText: "Most Popular Choice",
    },
    {
      title: "Tailored Solution",
      tagline: "Custom & Comprehensive",
      audience:
        "For businesses with specific needs and advanced functionality requirements",
      popular: false,
      priceText: "750",
      features: [
        "Fully customized design & functionality",
        "E-commerce or membership capabilities",
        "Advanced integrations",
        "Content strategy & creation",
        "Priority support & quarterly reviews",
      ],
      ctaText: "Request Custom Quote",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative px-6 lg:px-8 py-24">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary mb-6">
              Website Packages for{" "}
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#F3C969] bg-clip-text text-transparent">
                Small Businesses
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-secondary mb-8">
              Clear, transparent packages designed to get your business online
              quickly with all the features you need to succeed.
            </p>
            <p className="text-base text-secondary">
              Plans start at $500/year
              <br />
              (One-time setup fee varies by project and will be discussed during
              your consultation)
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="px-6 lg:px-8 pb-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <Card
                  key={index}
                  className={`h-full ${
                    plan.popular
                      ? "border-accent shadow-lg relative"
                      : "border-border"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 inset-x-0 flex justify-center">
                      <Badge className="bg-accent text-primary px-4 py-1">
                        Most Popular
                      </Badge>
                    </div>
                  )}

                  <CardHeader
                    className={`text-center ${plan.popular ? "pt-8" : "pt-6"}`}
                  >
                    <CardTitle className="text-xl font-bold">
                      {plan.title}
                    </CardTitle>
                    <CardDescription className="text-secondary font-medium">
                      {plan.tagline}
                    </CardDescription>
                    <p className={`mt-2 text-sm font-semibold`}>
                      From{" "}
                      <span className="text-[#22C55E]">${plan.priceText}</span>{" "}
                      per year
                    </p>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <p className="text-sm text-center text-secondary">
                      {plan.audience}
                    </p>

                    <div className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start">
                          <Check className="w-5 h-5 text-[#22C55E] flex-shrink-0 mr-3" />
                          <span className="text-secondary text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="pt-4">
                    <Button
                      asChild
                      className={`w-full ${
                        plan.popular
                          ? "bg-accent text-primary hover:bg-accent/90"
                          : "bg-primary text-white hover:bg-primary/90"
                      }`}
                    >
                      <Link href="/contact">{plan.ctaText}</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-surface px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-center mb-16">
              Frequently Asked Questions
            </h2>
            <div className="space-y-8">
              {[
                {
                  question: "What is included in the setup fee?",
                  answer:
                    "The setup fee covers initial design, development, content migration, domain and hosting setup, and the launch of your new website. It's a one-time cost to get your site up and running.",
                },
                {
                  question: "What does the annual fee cover?",
                  answer:
                    "The annual fee includes website hosting, security updates, regular backups, basic SEO monitoring, technical support, and minor content updates as needed.",
                },
                {
                  question: "Can I upgrade my plan later?",
                  answer:
                    "Yes, you can upgrade your plan at any time as your business grows. We'll work with you to ensure a smooth transition with minimal disruption to your site.",
                },
                {
                  question: "Is there a refund policy?",
                  answer:
                    "We offer a 14-day money-back guarantee on the setup fee. Annual fees are non-refundable once the service period has begun.",
                },
                {
                  question:
                    "Do I need technical knowledge to maintain my website?",
                  answer:
                    "Not at all. We handle all the technical aspects of your website. For content updates, we provide simple tools and guidance, or you can contact us directly for assistance.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="border border-border rounded-lg overflow-hidden"
                >
                  <div className="px-6 py-4">
                    <h3 className="font-medium text-lg">{faq.question}</h3>
                  </div>
                  <div className="px-6 py-4 bg-background/50 border-t border-border">
                    <p className="text-secondary">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary text-white px-6 lg:px-8">
          <div className="mx-auto max-w-7xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">
              Ready to get started?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Choose a plan that fits your needs and let&apos;s build a website
              that grows your business.
            </p>
            <Link
              href="/contact"
              className="px-8 py-4 bg-accent text-primary rounded-full font-semibold hover:bg-accent/90 text-lg h-auto"
            >
              Book a Website Strategy Call
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pricing;
