import {
  ArrowRight,
  Code,
  Layout,
  PenTool,
  BarChart,
  Rocket,
  Search,
  Shield,
  Smartphone,
  Check,
} from "lucide-react";
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
    title: "Web Design & SEO Services | EDC Web Design",
    description:
      "Explore our custom website design, SEO, and development services — made for small businesses in El Dorado County, including Placerville, Folsom, and beyond.",
    alternates: {
      canonical: "https://www.edcwebdesign.com/services",
    },
    openGraph: {
      title: "Web Design & SEO Services | EDC Web Design",
      description:
        "From mobile-optimized websites to search engine optimization and custom builds — we offer full-service web design for small businesses in the El Dorado County area.",
      url: "https://www.edcwebdesign.com/services",
      siteName: "EDC Web Design",
      type: "website",
      images: ["https://www.edcwebdesign.com/assets/logo.webp"],
    },
    twitter: {
      card: "summary_large_image",
      title: "Web Design & SEO Services",
      description:
        "Full-service web design for businesses in Placerville, Folsom, Cameron Park, and surrounding areas. Built for growth, speed, and visibility.",
      images: ["https://www.edcwebdesign.com/assets/logo.webp"],
    },
  };
}

function getServicesJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.edcwebdesign.com/#services",
    name: "Services | EDC Web Design",
    url: "https://www.edcwebdesign.com/services",
    description:
      "EDC Web Design offers a full suite of web services tailored for small businesses — including responsive design, SEO, branding, analytics, and custom development.",
    mainEntityOfPage: {
      "@type": "LocalBusiness",
      "@id": "https://www.edcwebdesign.com/#localbusiness",
      name: "EDC Web Design",
      url: "https://www.edcwebdesign.com",
      email: "garret@edcwebdesign.com",
      telephone: "+1-530-391-7473",
      serviceType: ["Website Design", "SEO Optimization", "Custom Development"],
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
        "EDC Web Design helps small businesses build SEO-friendly, user-focused websites that stand out online and drive real growth.",
      sameAs: [
        "https://instagram.com/garret.grant",
        "https://facebook.com/garret.d.grant",
      ],
      image: "https://www.edcwebdesign.com/assets/logo.webp",
      priceRange: "$$",
    },
    hasPart: [
      {
        "@type": "Service",
        name: "Website Design & Development",
        description:
          "Modern websites tailored to your brand — from high-performing single-page sites to full five-page builds.",
        serviceType: "Website Design",
        areaServed: [
          "Placerville",
          "Folsom",
          "Tahoe",
          "El Dorado Hills",
          "Cameron Park",
        ],
      },
      {
        "@type": "Service",
        name: "Search Engine Optimization",
        description:
          "Get found on Google with practical, local SEO strategies that help real customers discover your business.",
        serviceType: "SEO Optimization",
        areaServed: [
          "Placerville",
          "Folsom",
          "Tahoe",
          "El Dorado Hills",
          "Cameron Park",
        ],
      },
      {
        "@type": "Service",
        name: "Website Setup & Launch Support",
        description:
          "Launch-ready support including domains, email, hosting, SSL, and more.",
        serviceType: "Website Setup",
        areaServed: [
          "Placerville",
          "Folsom",
          "Tahoe",
          "El Dorado Hills",
          "Cameron Park",
        ],
      },
      {
        "@type": "Service",
        name: "Custom Development",
        description:
          "Technical web solutions including APIs, databases, and custom app logic.",
        serviceType: "Custom Development",
        areaServed: [
          "Placerville",
          "Folsom",
          "Tahoe",
          "El Dorado Hills",
          "Cameron Park",
        ],
      },
      {
        "@type": "Service",
        name: "Analytics & Reporting",
        description:
          "Track your traffic, conversions, and performance with easy-to-understand reports.",
        serviceType: "Analytics & Reporting",
        areaServed: [
          "Placerville",
          "Folsom",
          "Tahoe",
          "El Dorado Hills",
          "Cameron Park",
        ],
      },
      {
        "@type": "Service",
        name: "Website Maintenance",
        description:
          "Keep your site secure and running smoothly with ongoing maintenance and updates.",
        serviceType: "Website Maintenance",
        areaServed: [
          "Placerville",
          "Folsom",
          "Tahoe",
          "El Dorado Hills",
          "Cameron Park",
        ],
      },
      {
        "@type": "Service",
        name: "Mobile App Design",
        description:
          "Clean, scalable mobile app design aligned with your brand and UX goals.",
        serviceType: "Mobile App Design",
        areaServed: [
          "Placerville",
          "Folsom",
          "Tahoe",
          "El Dorado Hills",
          "Cameron Park",
        ],
      },
      {
        "@type": "Service",
        name: "Branding & Identity",
        description:
          "Professional logos and visual identity packages that reflect your business personality.",
        serviceType: "Branding & Identity",
        areaServed: [
          "Placerville",
          "Folsom",
          "Tahoe",
          "El Dorado Hills",
          "Cameron Park",
        ],
      },
    ],
  };
}

const ServicePage = () => {
  const services = [
    {
      title: "Website Design & Development",
      description:
        "Modern websites tailored to your brand — from high-performing single-page sites to full five-page builds.",
      icon: <Layout className="w-12 h-12" />,
      features: [
        "Custom responsive design",
        "Mobile optimization",
        "Single-page or multi-page builds",
        "Fast-loading performance",
        "Easy-to-manage content",
        "Lead capture & contact forms",
      ],
    },
    {
      title: "Search Engine Optimization",
      description:
        "Get found on Google with practical, local SEO strategies that help real customers discover your business.",
      icon: <Search className="w-12 h-12" />,
      features: [
        "Local keyword research",
        "On-page SEO best practices",
        "Google Business Profile setup",
        "Structured data & metadata",
        "Site speed optimization",
        "Content improvement suggestions",
      ],
    },
    {
      title: "Website Setup & Launch Support",
      description:
        "I’ll help you connect all the technical dots — from domains to email to hosting — so your site is ready to go live smoothly and professionally.",
      icon: <Rocket className="w-12 h-12" />,
      features: [
        "Domain name registration guidance",
        "Hosting and DNS setup",
        "SSL certificate installation",
        "Professional business email setup",
        "Platform walkthrough or video tutorial",
        "Launch checklist to ensure nothing gets missed",
      ],
    },
    {
      title: "Custom Development",
      description:
        "Need something more technical? I build clean, scalable solutions tailored to your business needs.",
      icon: <Code className="w-12 h-12" />,
      features: [
        "Custom web apps",
        "API integrations",
        "Automation workflows",
        "Database design",
        "Third-party tool connections",
        "Speed & code optimization",
      ],
    },
    {
      title: "Analytics & Reporting",
      description:
        "Understand how your website performs with clear, easy-to-read data and ongoing recommendations.",
      icon: <BarChart className="w-12 h-12" />,
      features: [
        "Google Analytics integration",
        "Conversion & traffic tracking",
        "User journey analysis",
        "Monthly site reports",
        "Competitor insights",
        "Actionable growth tips",
      ],
    },
    {
      title: "Website Maintenance",
      description:
        "Don’t let your site fall behind — keep it secure, updated, and running smoothly with expert care.",
      icon: <Shield className="w-12 h-12" />,
      features: [
        "Ongoing software updates",
        "Real-time security monitoring",
        "Daily or weekly backups",
        "Quick bug fixes",
        "Speed and image optimization",
        "Content swaps and edits",
      ],
    },
    {
      title: "Mobile App Design",
      description:
        "Looking to go mobile? Get a clean, user-friendly app design that matches your brand and goals.",
      icon: <Smartphone className="w-12 h-12" />,
      features: [
        "Custom app interface design",
        "Interactive prototypes",
        "iOS + Android-ready layouts",
        "App Store graphics",
        "Push notification setup",
        "Design for growth & scalability",
      ],
    },
    {
      title: "Branding & Identity",
      description:
        "Set yourself apart with a cohesive visual identity that reflects your brand’s personality and values.",
      icon: <PenTool className="w-12 h-12" />,
      features: [
        "Professional logo design",
        "Brand style guidelines",
        "Color palette selection",
        "Font and typography system",
        "Print-ready business cards",
        "Social media visuals",
      ],
    },
  ];
  const jsonLd = getServicesJsonLd();
  return (
    <div className="min-h-screen bg-background">
      <Script
        id="jsonld-services"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative px-6 lg:px-8 py-24">
          <div className="mx-auto max-w-7xl">
            <h1 className="text-4xl font-bold tracking-tight text-primary mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#F3C969] bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="max-w-2xl text-lg text-secondary mb-12">
              Custom-built websites and growth-driven digital solutions for
              small business owners ready to level up online.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="px-6 lg:px-8 pb-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid md:grid-cols-2 gap-12">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="border border-border rounded-xl p-8 hover:shadow-md transition-all"
                >
                  <div className="text-accent mb-6">{service.icon}</div>
                  <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                  <p className="text-secondary mb-6">{service.description}</p>

                  <div className="mb-6">
                    <h3 className="font-medium mb-4">What&quot;s included:</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check className="w-5 h-5 text-accent flex-shrink-0 mr-2" />
                          <span className="text-secondary text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-surface px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-16">
              Our Process
            </h2>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  description:
                    "We learn about your business, goals, target audience, and competition to create an effective strategy.",
                },
                {
                  step: "02",
                  title: "Design",
                  description:
                    "We create wireframes and visual designs that align with your brand and business objectives.",
                },
                {
                  step: "03",
                  title: "Development",
                  description:
                    "Our developers build your site with clean code, focusing on performance, security, and usability.",
                },
                {
                  step: "04",
                  title: "Launch & Support",
                  description:
                    "After thorough testing, we launch your site and provide ongoing support to help it grow.",
                },
              ].map((process, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-primary font-bold text-2xl mx-auto mb-6">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    {process.title}
                  </h3>
                  <p className="text-secondary">{process.description}</p>
                  {index < 3 && (
                    <div className="hidden md:block w-full h-1 mt-8 relative">
                      <div className="absolute top-1/2 w-full border-t-2 border-dashed border-border"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-16">
              What Our Clients Say
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "EDC Web Design transformed our online presence. Our new website has already increased leads by 40% in just two months.",
                  name: "Sarah Johnson",
                  company: "Mountain Café",
                  image:
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
                },
                {
                  quote:
                    "Working with EDC was a game-changer for our real estate business. Professional, responsive, and they delivered exactly what we needed.",
                  name: "Michael Chen",
                  company: "Harbor Real Estate",
                  image:
                    "https://images.unsplash.com/photo-1560250097-0b93528c311a",
                },
                {
                  quote:
                    "The e-commerce solution they built for our flower shop has completely streamlined our ordering process and boosted our sales.",
                  name: "Jessica Williams",
                  company: "Bloom Florists",
                  image:
                    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-background border border-border rounded-xl p-6"
                >
                  <p className="text-secondary mb-6 italic">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={800}
                        height={800}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium">{testimonial.name}</h4>
                      <p className="text-secondary text-sm">
                        {testimonial.company}
                      </p>
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
              Ready to discuss your project?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Let&apos;s talk about how our services can help your business grow
              online.
            </p>
            <Link
              href="/contact"
              className="px-8 py-4 bg-accent text-primary rounded-full font-semibold hover:bg-accent/90 transition-colors"
            >
              Let&apos;s Talk About Your Website
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ServicePage;
