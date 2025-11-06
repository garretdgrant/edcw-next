"use client";

import { useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Code,
  Layout as LayoutIcon,
  Zap,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const HOMEPAGE_IMAGE_BASE_PATH = "/assets/homepage";

export default function HomePage() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const portfolioItems = [
    {
      title: "Rose & Sugar",
      description:
        "Custom site for a Folsom-based cookie artist. Highlights hand-crafted sugar cookies, automates detailed order requests, and keeps decorating classes full with an easy signup flow.",
      image:
        "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1200&q=80",
      companyLink: "https://www.roseandsugar.com",
    },
    {
      title: "Ogden Construction",
      description:
        "High-performance website for a Placerville-based general contractor. Designed to showcase services, boost SEO, and convert visitors into local construction leads.",
      image: `${HOMEPAGE_IMAGE_BASE_PATH}/construction.webp`,
      companyLink: "https://www.ogden-construction.com",
    },
    {
      title: "Snow White Cleaning",
      description:
        "Elegant website for a residential and commercial cleaning company in Cameron Park. Built to build trust, highlight services, and drive new client inquiries through a clean, mobile-friendly layout.",
      image: `${HOMEPAGE_IMAGE_BASE_PATH}/cleaning.webp`,
      companyLink: "https://www.snow-white-cleaning.com",
    },
    {
      title: "My Favorite Petsitter",
      description:
        "Wholesome, pet-friendly design for a trusted Folsom-based pet sitter. Crafted to showcase services, build trust through testimonials, and simplify bookings for busy pet parents.",
      image: `${HOMEPAGE_IMAGE_BASE_PATH}/petsitter.webp`,
      companyLink: "https://www.myfavpetsitter.org",
    },
  ];

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-primary mb-6">
            Custom websites designed to
            <br />
            <span className="text-gold-gradient">grow your small business</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-secondary mb-8">
            We create fast, SEO-optimized websites tailored for small businesses
            that want to grow online and stand out.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/portfolio"
              className="px-6 py-3 glass rounded-full hover:bg-white/20 transition-colors flex items-center gap-2"
            >
              See Our Work <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative mt-16">
          <div className="flex justify-center">
            <Image
              src="https://www.edcwebdesign.com/assets/homepage/workspace.webp"
              alt="Modern web design workspace"
              width={1941}
              height={1292}
              className="rounded-3xl shadow-2xl max-w-[90%] w-auto h-auto"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-surface px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-16">
            Web Design, SEO, and Development Services for Small Businesses
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Website Design",
                description:
                  "Custom, mobile-friendly website design that looks great on every device and drives engagement",
                icon: <LayoutIcon className="w-8 h-8" />,
              },
              {
                title: "SEO Optimization",
                description:
                  "Boost your Google rankings with expert SEO strategies tailored to small businesses",
                icon: <Zap className="w-8 h-8" />,
              },
              {
                title: "Custom Development",
                description:
                  "Scalable web development with clean, hand-coded solutions—no templates, fully tailored to your business goals",
                icon: <Code className="w-8 h-8" />,
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-background border border-border hover:border-accent transition-colors"
              >
                <div className="mb-4 text-primary">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-secondary">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-8">
            Our Recent Work
          </h2>
          <p className="text-secondary text-center max-w-2xl mx-auto mb-16">
            Take a look at some of the projects we&apos;ve successfully
            delivered for our clients
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all"
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
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                  <p className="text-secondary">{item.description}</p>
                  <Link
                    href={item.companyLink}
                    target="_blank"
                    className="mt-4 text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    View Project <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className="px-6 py-3 border border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-24 bg-primary text-white px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center">
            Why Choose Our Web Design Services
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Fast-Loading Sites",
                description:
                  "We hand-optimize your website for speed using best practices in performance and Core Web Vitals—ensuring fast load times and better SEO rankings.",
              },
              {
                title: "SEO Best Practices",
                description:
                  "Every site we build follows on-page SEO best practices—optimized headings, meta tags, and clean structure—to help your business rank higher on Google.",
              },
              {
                title: "Clean, Modern Design",
                description:
                  "Our websites are clean, modern, and mobile-responsive—designed for great user experience, high conversions, and long-term brand credibility.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-accent text-primary mb-4">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-white/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-16">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                question: "How long does it take to build a website?",
                answer:
                  "Most websites are completed within 1–2 weeks, depending on the scope and features required. During your consultation, we’ll outline a clear timeline to ensure your website is delivered efficiently and meets your business goals.",
              },
              {
                question: "What's your pricing structure?",
                answer:
                  "We offer transparent, project-based pricing with no hidden fees. Our most popular plans include flexible monthly and annual options, with enhanced features like SEO, performance reports, and ongoing support. We also offer custom website packages tailored to your business goals. Check out the Pricing page in the navigation for full details.",
              },
              {
                question: "Do you offer website maintenance?",
                answer:
                  "Yes, website maintenance is included in all of our plans. We provide ongoing support to keep your site secure, up to date, and running smoothly—ensuring optimal performance, SEO health, and a seamless user experience.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="border border-border rounded-lg overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-background/50"
                  onClick={() =>
                    setActiveAccordion(activeAccordion === index ? null : index)
                  }
                >
                  <span className="font-medium">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      activeAccordion === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeAccordion === index && (
                  <div className="px-6 py-4 bg-background/50">
                    <p className="text-secondary">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl sm:text-5xl font-bold mb-8">
            Ready to launch a custom website that grows your business?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Let&apos;s work together to build a website that truly represents
            your business and drives real results.
          </p>
          <Link
            href="/contact"
            className="px-8 py-4 bg-accent text-primary rounded-full font-semibold hover:bg-accent/90 transition-colors"
          >
            Get Your Free Website Quote
          </Link>
        </div>
      </section>
    </main>
  );
}
