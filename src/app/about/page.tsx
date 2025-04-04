import { Award, Clock, Users } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "About EDC Web Design | Built by a Local Developer You Can Trust",
    description:
      "Learn more about EDC Web Design — founded by Garret Grant, a local web developer passionate about helping small businesses succeed online with fast, modern websites.",
    alternates: {
      canonical: "https://www.edcwebdesign.com/about",
    },
    openGraph: {
      title: "About EDC Web Design | Built by a Local Developer You Can Trust",
      description:
        "Meet the founder behind EDC Web Design. Discover our mission, values, and how we help small businesses grow with custom, conversion-focused websites.",
      url: "https://www.edcwebdesign.com/about",
      siteName: "EDC Web Design",
      type: "website",
      images: ["https://www.edcwebdesign.com/assets/logo.webp"],
    },
    twitter: {
      card: "summary_large_image",
      title: "About EDC Web Design",
      description:
        "Get to know Garret Grant — the local web designer behind EDC Web Design, helping small businesses in El Dorado County grow online.",
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
          "EDC Web Design was founded by Garret Grant to help small businesses build SEO-friendly, user-focused websites that stand out online and drive real growth.",
        sameAs: [
          "https://instagram.com/garret.grant",
          "https://facebook.com/garret.d.grant",
        ],
        image: "https://www.edcwebdesign.com/assets/logo.webp",
      }),
    },
  };
}

const About = () => {
  const IMAGE_BASE_PATH = "/assets/about";
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative px-6 lg:px-8 py-24">
          <div className="mx-auto max-w-7xl">
            <h1 className="text-4xl font-bold tracking-tight text-primary mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#F3C969] bg-clip-text text-transparent">
                EDC Web Design
              </span>
            </h1>
            <p className="max-w-2xl text-lg text-secondary mb-12">
              EDC Web Design helps small businesses in El Dorado County and
              beyond grow their online presence with beautiful, strategic
              websites that attract, convert, and retain customers.
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="px-6 lg:px-8 pb-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-secondary mb-4">
                  EDC Web Design was founded by Garret Grant, a full-stack
                  software engineer and entrepreneur with a passion for helping
                  small business owners succeed online. Inspired by his mom, who
                  worked as a cleaning lady and built her own business from the
                  ground up, Garret started EDC with one goal in mind: to make
                  powerful, high-quality websites accessible to everyday
                  business owners.
                </p>
                <p className="text-secondary mb-4">
                  What started as a solo venture has grown into a client-first
                  agency that partners with small businesses to design fast,
                  SEO-optimized websites that actually get results. Whether
                  you&apos;re just starting out or ready to scale, we&apos;re
                  here to make your digital presence work harder for you.
                </p>
                <p className="text-secondary">
                  We specialize in understanding your local market, building
                  trust with your customers, and turning your website into a
                  tool that drives leads, sales, and credibility.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden">
                <img
                  src={`${IMAGE_BASE_PATH}/belltower.webp`}
                  alt="Garret working on a website project"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="py-24 bg-surface px-6 lg:px-8">
          <div className="mx-auto max-w-7xl text-center">
            <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
            <p className="text-secondary max-w-3xl mx-auto text-lg mb-16">
              To support small business owners with handcrafted websites that
              are fast, functional, and designed to grow your business—without
              the hassle or the fluff.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Customer-Focused",
                  description:
                    "We listen first and design second, ensuring your website meets your specific business goals and customer needs.",
                  icon: <Users className="w-8 h-8" />,
                },
                {
                  title: "Quality Craftsmanship",
                  description:
                    "We don't cut corners. Every website is built with clean code, attention to detail, and a focus on performance.",
                  icon: <Award className="w-8 h-8" />,
                },
                {
                  title: "Long-Term Partnership",
                  description:
                    "We're not just here for the launch. We build relationships with our clients to support their growth over time.",
                  icon: <Clock className="w-8 h-8" />,
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-background border border-border hover:border-accent transition-colors"
                >
                  <div className="mb-4 text-primary">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-secondary">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Meet the Founder */}
        <section className="py-24 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold mb-16 text-center">
              Meet the Founder
            </h2>

            <div className="grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-2">
                <div className="rounded-xl overflow-hidden">
                  <img
                    src={`${IMAGE_BASE_PATH}/founder.webp`}
                    alt="Garret Grant"
                    className="w-full object-cover"
                  />
                </div>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-2xl font-semibold mb-4">Garret Grant</h3>
                <p className="text-secondary mb-4">
                  Garret is a professional software engineer and founder of EDC
                  Web Design. With a strong background in both frontend and
                  backend development, he brings a practical, no-nonsense
                  approach to building websites that are fast, SEO-ready, and
                  tailored for real-world business results.
                </p>
                <p className="text-secondary mb-4">
                  &quot;I started EDC to help small business owners like my
                  mom—hardworking, passionate people who deserve more than a
                  cookie-cutter site. Your website should do more than just look
                  good—it should grow your business, establish trust, and save
                  you time.&quot;
                </p>
                <p className="text-secondary">
                  Outside of building websites, Garret enjoys staying active,
                  learning new tech, and exploring ways to help fellow
                  entrepreneurs succeed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Clients Choose Us */}
        <section className="py-24 bg-primary text-white px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold mb-16 text-center">
              Why Clients Choose EDC Web Design
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                "We specialize in serving small businesses—so we understand your budget, your time constraints, and your need to stand out.",
                "Our websites are designed with intention: built to convert visitors into loyal customers.",
                "Clear communication, honest timelines, and zero tech jargon—we speak your language.",
                "From launch to long-term support, every site is optimized for speed, security, and search engines.",
                "Upfront pricing with no hidden fees or surprise invoices—just real value.",
                "We treat every website as if it were our own, with a focus on ROI and growth.",
              ].map((reason, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="mt-1 flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-primary font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <p className="text-white/90">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">
              Ready to work with us?
            </h2>
            <p className="text-secondary mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help your business stand out online
              with a website that truly works for you.
            </p>
            <Link
              href="/contact"
              className="px-8 py-4 bg-accent text-primary rounded-full font-semibold hover:bg-accent/90 transition-colors"
            >
              Schedule Your Free Consultation
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
