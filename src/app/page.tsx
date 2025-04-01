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

export const HOMEPAGE_IMAGE_BASE_PATH = "/assets/homepage";

export default function HomePage() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const portfolioItems = [
    {
      title: "Ogden Construction",
      description:
        "High-performance website for a Placerville-based contractor. Designed to showcase services, boost SEO, and convert visitors into local leads.",
      image: `${HOMEPAGE_IMAGE_BASE_PATH}/construction.webp`,
    },
    {
      title: "Snow White Cleaning",
      description:
        "Elegant marketing site for a professional cleaning company. Highlights services, builds trust, and drives inquiries through a clean, mobile-friendly layout.",
      image: `${HOMEPAGE_IMAGE_BASE_PATH}/cleaning.webp`,
    },
    {
      title: "Alpine Diesel",
      description:
        "Bold and rugged design for a mobile diesel mechanic. Built to capture leads from fleet owners and off-road enthusiasts in need of on-site repairs.",
      image: `${HOMEPAGE_IMAGE_BASE_PATH}/mechanic.png`,
    },
  ];

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-primary mb-6">
            We build websites that
            <br />
            <span className="bg-linear-to-r from-[#D4AF37] to-[#F3C969] bg-clip-text text-transparent">
              grow your business
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-secondary mb-8">
            Beautiful, fast-loading, and SEO-friendly websites custom-tailored
            for small business owners looking to make a big impact online.
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
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="Modern web design workspace"
              className="rounded-3xl shadow-2xl max-w-[90%] w-auto h-auto"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-surface px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-16">
            Services tailored for your success
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Website Design",
                description:
                  "Beautiful, responsive websites that look great on all devices",
                icon: <LayoutIcon className="w-8 h-8" />,
              },
              {
                title: "SEO Optimization",
                description:
                  "Get found online with our proven search engine optimization strategies",
                icon: <Zap className="w-8 h-8" />,
              },
              {
                title: "Custom Development",
                description:
                  "Tailored solutions with clean code for your specific business needs",
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
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                  <p className="text-secondary">{item.description}</p>
                  <Link
                    href="https://www.ogden-construction.com"
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
            Why Work With Us
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Fast-Loading Sites",
                description:
                  "We optimize every aspect of your website to ensure lightning-fast loading times that keep visitors engaged.",
              },
              {
                title: "SEO Best Practices",
                description:
                  "Every website we build follows SEO best practices to help your business rank higher in search results.",
              },
              {
                title: "Clean, Modern Design",
                description:
                  "Our designs are not just beautiful—they're intuitive and focused on delivering results for your business.",
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
                  "Most projects take 2-6 weeks depending on complexity. We'll provide a detailed timeline during our consultation.",
              },
              {
                question: "What's your pricing structure?",
                answer:
                  "Our pricing is project-based and transparent with no hidden fees. We provide detailed quotes after understanding your specific needs.",
              },
              {
                question: "Do you offer website maintenance?",
                answer:
                  "Yes, we offer ongoing maintenance packages to keep your site secure, updated, and performing at its best.",
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
            Ready to transform your online presence?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Let&apos;s work together to build a website that truly represents
            your business and drives real results.
          </p>
          <button className="px-8 py-4 bg-accent text-primary rounded-full font-semibold hover:bg-accent/90 transition-colors">
            Let&apos;s Build Together
          </button>
        </div>
      </section>
    </main>
  );
}
