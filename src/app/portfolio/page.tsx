import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
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
          "Browse a selection of websites built by EDC Web Design for small businesses. Each site is crafted to load fast, rank well, and generate quality leads.",
        sameAs: [
          "https://instagram.com/garret.grant",
          "https://facebook.com/garret.d.grant",
        ],
        image: "https://www.edcwebdesign.com/assets/logo.webp",
      }),
    },
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
    // {
    //   title: "Wellness Yoga Studio",
    //   description:
    //     "Modern membership website for a community yoga studio in Grass Valley. Includes class scheduling, instructor bios, and integrated online payments for ease of booking.",
    //   image: "https://images.unsplash.com/photo-1545389336-cf090694435e",
    //   technologies: ["React", "Tailwind CSS", "WordPress API"],
    //   outcome:
    //     "Increased class bookings by 75% and doubled new student sign-ups in the first 60 days.",
    //   companyLink: "https://www.wellnessyogagv.com",
    // },
    // {
    //   title: "Artisan Bakery",
    //   description:
    //     "Charming online storefront for a boutique bakery in Auburn, CA. Built to showcase their menu, enable custom cake orders, and highlight catering services.",
    //   image: "https://images.unsplash.com/photo-1509440159596-0249088772ff",
    //   technologies: ["React", "MongoDB", "Express.js"],
    //   outcome:
    //     "Catering inquiries grew by 60% within 3 months after launch, leading to recurring event partnerships.",
    //   companyLink: "https://www.artisanbakeshopca.com",
    // },
    // {
    //   title: "Urban Fitness Club",
    //   description:
    //     "Sleek membership portal for a downtown Sacramento gym. Includes class registration, progress tracking, and nutrition planning to engage members digitally.",
    //   image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48",
    //   technologies: ["React", "Node.js", "Chart.js"],
    //   outcome:
    //     "Improved member retention by 25% and reduced admin time through self-serve tools.",
    //   companyLink: "https://www.urbanfitclub.com",
    // },
  ];

  return (
    <div className="min-h-screen bg-background">
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
              Take a look at the websites we’ve built for real small businesses
              — each project is designed for performance, trust, and growth.
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
                    <img
                      src={item.image}
                      alt={item.title}
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
