import { ArrowRight, Palette, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";

const metadataBase =
  process.env.NODE_ENV === "development"
    ? new URL("http://localhost:3000")
    : new URL("https://www.edcwebdesign.com");

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase,
    title: "Portfolio | See Recent Projects by EDC Web Design",
    description:
      "Explore custom websites designed by EDC Web Design for local businesses in Placerville, Folsom, El Dorado Hills, and beyond. Built to convert, rank, and perform.",
    alternates: {
      canonical: "https://www.edcwebdesign.com/portfolio",
    },
    openGraph: {
      title: "EDC Web Design Portfolio | Small Business Websites That Work",
      description:
        "Take a look at websites we've built for small businesses across El Dorado County. Fast, mobile-friendly, and optimized for results.",
      url: "https://www.edcwebdesign.com/portfolio",
      siteName: "EDC Web Design",
      type: "website",
      images: ["/assets/logo.webp"],
    },
    twitter: {
      card: "summary_large_image",
      title: "EDC Web Design Portfolio",
      description:
        "Recent projects designed for small businesses in Placerville, Cameron Park, Folsom, and beyond. Built for SEO, speed, and success.",
      images: ["https://www.edcwebdesign.com/assets/logo.webp"],
    },
  };
}

function getPortfolioJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": "https://www.edcwebdesign.com/portfolio",
    name: "Web Design Portfolio | EDC Web Design",
    description:
      "Explore a curated portfolio of modern, SEO-optimized websites built by EDC Web Design for small businesses across California.",
    url: "https://www.edcwebdesign.com/portfolio",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Ogden Construction",
        url: "https://www.ogden-construction.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "My Fav Pet Sitter",
        url: "https://www.myfavpetsitter.org",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Snow White Cleaning",
        url: "https://snowwhitecleaning.com", // Update if not live
      },
    ],
  };
}

const Portfolio = () => {
  const portfolioItems = [
    {
      title: "Ogden Construction",
      description:
        "High-performance website for a Placerville-based contractor. Designed to showcase services, boost SEO, and convert visitors into local leads.",
      image: "/assets/homepage/construction.webp",
      technologies: ["Next.js", "Tailwind CSS", "Vercel"],
      outcome:
        "Increased qualified lead inquiries and boosted visibility in local search results.",
      companyLink: "https://www.ogden-construction.com",
    },
    {
      title: "Snow White Cleaning",
      description:
        "Elegant marketing site for a Cameron Park cleaning company. Built to build trust, display pricing, and drive bookings from local homeowners.",
      image: "/assets/homepage/cleaning.webp",
      technologies: ["Next.js", "Tailwind CSS", "Vercel"],
      outcome:
        "Helped a solo business owner look more established and attract ideal clients.",
      companyLink: "https://www.snow-white-cleaning.com",
    },
    {
      title: "My Favorite Petsitter",
      description:
        "Wholesome, pet-friendly design for a trusted Folsom-based sitter. Built to highlight services, build trust with testimonials, and simplify booking for busy pet parents.",
      image: "/assets/homepage/petsitter.webp",
      technologies: ["Next.js", "Tailwind CSS", "Vercel"],
      outcome:
        "Enabled smooth online scheduling and helped the brand rank locally in Folsom.",
      companyLink: "https://www.myfavpetsitter.org",
    },
  ];

  const mockupItems = [
    {
      title: "BeastMode Construction",
      description:
        "Bold, high-impact landing page for a Placerville-based contractor. Designed to reflect a rugged brand identity while clearly presenting services and encouraging local lead generation.",
      image: "/assets/mockups/beastmode.webp",
      technologies: ["Next.js", "Tailwind CSS", "Vercel"],
      outcome:
        "Shared as a cold outreach mockup to demonstrate visual strength, professionalism, and conversion-focused layout.",
      companyLink: "https://beastmodeconstruction.netlify.app/",
    },
    {
      title: "Natural Bridges Learning",
      description:
        "Therapeutic support mockup for a wellness-focused education company. Designed to convey warmth, trust, and professionalism for families seeking help with behavioral and emotional development.",
      image:
        "https://images.unsplash.com/photo-1528716321680-815a8cdb8cbe?q=80&w=2152&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["Next.js", "Tailwind CSS", "Vercel"],
      outcome:
        "Presented as a mockup to demonstrate how a calming, informative site can inspire trust and better communicate the mission of a child- and family-focused service.",
      companyLink: "https://naturalbridgeslearning.netlify.app/",
    },
    {
      title: "Cakes and Classes",
      description:
        "Playful and inviting landing page for a Placerville-based cake artist offering custom desserts and baking classes. Focused on building emotional connection and showcasing offerings with warmth.",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
      technologies: ["Next.js", "Tailwind CSS", "Vercel"],
      outcome:
        "Created as a showcase of how an engaging visual design can help increase customer trust, inquiries, and class bookings.",
      companyLink: "https://cakesandclasses.netlify.app",
    },
    {
      title: "Tahoe Plumbing Concept",
      description:
        "Professional mockup for a South Lake Tahoe plumbing and general contracting company. Built to showcase essential services, establish credibility, and serve as a strong outreach asset.",
      image:
        "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["Next.js", "Tailwind CSS", "Vercel"],
      outcome:
        "Used as a cold outreach mockup to demonstrate how a modern, trust-building site could support service-based lead generation and brand credibility.",
      companyLink: "https://tahoeplumbing.netlify.app/",
    },
    {
      title: "Folsom Landscaping Concept",
      description:
        "Clean, professional mockup for a Folsom-based landscaping company. Designed to highlight services like lawn care, hardscaping, planting, and maintenance while building trust and attracting local leads.",
      image:
        "https://images.unsplash.com/photo-1558904541-efa843a96f01?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.0.3",
      technologies: ["Next.js", "Tailwind CSS", "Vercel"],
      outcome:
        "Created as an outreach asset to showcase how a modern website can elevate brand presence and drive service inquiries from local homeowners.",
      companyLink: "https://folsom-landscaping.netlify.app/",
    },
  ];
  const jsonLd = getPortfolioJsonLd();
  return (
    <div className="min-h-screen bg-background">
      <Script
        id="jsonld-portfolio"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative px-6 lg:px-8 py-24">
          <div className="mx-auto max-w-7xl">
            <h1 className="text-4xl font-bold tracking-tight text-primary mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#F3C969] bg-clip-text text-transparent">
                Portfolio
              </span>
            </h1>
            <p className="max-w-2xl text-lg text-secondary mb-12">
              Take a look at the websites we&apos;ve built for real small
              businesses — each project is designed for performance, trust, and
              growth.
            </p>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="px-6 lg:px-8 pb-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.map((item, index) => (
                <div
                  key={index}
                  className="rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all flex flex-col h-full"
                >
                  <div className="h-48 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      height={800}
                      width={1200}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                    <p className="text-secondary mb-4">{item.description}</p>

                    <div className="mt-auto">
                      <div className="mb-4">
                        <h4 className="font-medium text-sm text-primary mb-2">
                          Technologies Used:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {item.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="inline-block px-2 py-1 text-xs bg-background border border-border rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-medium text-sm text-primary mb-2">
                          Client Outcome:
                        </h4>
                        <p className="text-secondary text-sm">{item.outcome}</p>
                      </div>

                      <Link
                        href={item.companyLink}
                        className="text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all"
                        target="_blank"
                      >
                        View Website <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="relative py-12">
          <div className="absolute inset-0 flex items-center px-6 lg:px-8">
            <div className="w-full border-t border-border"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-background px-6 py-3">
              <h2 className="text-2xl font-semibold text-primary flex items-center gap-2">
                <Palette className="w-5 h-5 text-accent" />
                Mockups & Concepts
              </h2>
            </div>
          </div>
          <div className="text-center mt-4 px-6 lg:px-8">
            <p className="text-secondary max-w-2xl mx-auto">
              Creative previews designed to showcase layout, branding, or
              outreach ideas.
            </p>
          </div>
        </div>

        {/* Mockups Section */}
        <section className="px-6 lg:px-8 pb-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mockupItems.map((item, index) => (
                <div
                  key={index}
                  className="rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all flex flex-col h-full bg-secondary/5"
                >
                  <div className="h-48 overflow-hidden relative">
                    <Image
                      src={item.image}
                      alt={item.title}
                      height={800}
                      width={1200}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                    <Badge
                      variant="secondary"
                      className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm"
                    >
                      <Sparkles className="w-3 h-3 mr-1" />
                      Concept
                    </Badge>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                    <p className="text-secondary mb-4">{item.description}</p>

                    <div className="mt-auto">
                      <div className="mb-4">
                        <h4 className="font-medium text-sm text-primary mb-2">
                          Technologies Used:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {item.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="inline-block px-2 py-1 text-xs bg-background border border-border rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-medium text-sm text-primary mb-2">
                          Concept Highlights:
                        </h4>
                        <p className="text-secondary text-sm">{item.outcome}</p>
                      </div>

                      <Link
                        href={item.companyLink}
                        className="text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all"
                        target="_blank"
                      >
                        View Concept <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
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
              Ready to transform your online presence?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Let&apos;s collaborate to build a custom website that works hard
              for your business—just like these success stories.
            </p>
            <Link
              href="/contact"
              className="px-8 py-4 bg-accent text-primary rounded-full font-semibold hover:bg-accent/90 transition-colors"
            >
              Start Your Website Project Today
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;
