import React from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL("https://www.edcwebdesign.com"),
    title:
      "Why Responsive Web Design Matters for Small Business | EDC Web Design",
    description:
      "Mobile users now dominate the web. Here's why responsive web design is critical for small business success—and how EDC Web Design gets it right.",
    alternates: {
      canonical:
        "https://www.edcwebdesign.com/blog/responsive-web-design-small-business",
    },
    openGraph: {
      title: "Why Responsive Web Design Matters for Small Business",
      description:
        "If your site isn't mobile-friendly, you're losing leads. Discover how responsive web design helps small businesses build trust and convert visitors.",
      url: "https://www.edcwebdesign.com/blog/responsive-web-design-small-business",
      siteName: "EDC Web Design",
      type: "article",
      publishedTime: "2025-04-10T08:00:00.000Z",
      images: [
        {
          url: "https://www.edcwebdesign.com/assets/locations/california/sacramento.webp",
          width: 1200,
          height: 630,
          alt: "Responsive Web Design by EDC Web Design",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Why Responsive Web Design Matters for Small Business",
      description:
        "Your customers are on their phones—so your website better be too. Learn how responsive design can win more leads and trust.",
      images: [
        "https://www.edcwebdesign.com/assets/locations/california/sacramento.webp",
      ],
    },
  };
}

export function getJsonLd() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: "Why Responsive Web Design Matters for Small Business",
      description:
        "Learn why responsive web design is crucial in 2025 for small businesses. This guide breaks down the benefits, pitfalls of builders, and how custom design leads to real growth.",
      datePublished: "2025-04-10",
      dateModified: "2025-04-10",
      author: {
        "@type": "Organization",
        name: "EDC Web Design",
        url: "https://www.edcwebdesign.com",
      },
      image: {
        "@type": "ImageObject",
        url: "https://www.edcwebdesign.com/assets/locations/california/sacramento.webp",
        width: 1200,
        height: 630,
      },
      mainEntityOfPage: {
        "@type": "LocalBusiness",
        "@id": "https://www.edcwebdesign.com/#localbusiness",
      },
      publisher: {
        "@type": "Organization",
        name: "EDC Web Design",
        logo: {
          "@type": "ImageObject",
          url: "https://www.edcwebdesign.com/assets/logo.webp",
        },
      },
      url: "https://www.edcwebdesign.com/blog/responsive-web-design-small-business",
    },
    {
      "@context": "https://schema.org",
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
          name: "Blog",
          item: "https://www.edcwebdesign.com/blog",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Why Responsive Web Design Matters for Small Business",
          item: "https://www.edcwebdesign.com/blog/responsive-web-design-small-business",
        },
      ],
    },
  ];
}

const ResponsiveWebDesign = () => {
  const jsonLd = getJsonLd();
  return (
    <div className="min-h-screen bg-background">
      <Script
        id="jsonld-blog-responsive-web-design"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-primary/95 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-4">
              <Link
                href="/blog"
                className="text-white/80 hover:text-white flex items-center gap-2 mb-6 inline-block"
              >
                <ArrowLeft size={16} />
                Back to Blog
              </Link>
              <div className="text-white/70 mb-3">
                April 10, 2025 • 8 min read • By EDC Web Design
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Why Responsive Web Design Matters for Small Business (And How to
                Get It Right)
              </h1>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <div className="w-full max-w-5xl mx-auto -mt-10 px-6">
          <div className="rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://www.edcwebdesign.com/assets/blog/blog_featured.webp"
              alt="Folsom Website Design"
              width={2426}
              height={1728}
              className="w-full h-80 object-cover"
            />
          </div>
        </div>

        {/* Article Content */}
        <article className="py-16 px-6">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <p className="lead text-xl text-secondary mb-8">
              It&apos;s 2025. Your customers are on their phones. If your
              website isn&apos;t responsive—meaning it doesn&apos;t adjust and
              look great on every screen—you&apos;re losing trust, traffic, and
              potential business without even knowing it.
            </p>

            <p>
              In this post, we&apos;re breaking down what responsive design
              actually means, why it matters (especially for local small
              businesses), and how you can make sure your website works *with*
              you—not against you.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">
              What Is Responsive Web Design?
            </h2>
            <p>
              Responsive design means your website automatically adjusts to fit
              the screen it&apos;s being viewed on—whether it&apos;s a
              smartphone, tablet, laptop, or even a 75-inch smart TV.
            </p>
            <p>
              It&apos;s not about shrinking things down—it&apos;s about
              **rethinking layout, readability, and function** so that visitors
              get the same professional experience no matter how they find you.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">
              Why It Matters for Small Businesses
            </h2>
            <ul className="list-disc pl-6 mt-4 mb-6">
              <li>
                <strong>Mobile traffic is king:</strong> Over 60% of local
                searches come from mobile devices.
              </li>
              <li>
                <strong>Google rewards it:</strong> Sites that aren&apos;t
                mobile-friendly get pushed down in search results.
              </li>
              <li>
                <strong>It builds trust:</strong> A clean, mobile-optimized
                website shows you care about your business and your customers.
              </li>
              <li>
                <strong>It boosts conversions:</strong> Easier navigation = more
                form submissions, more calls, more business.
              </li>
            </ul>

            <p>
              If your website was built more than a few years ago—or worse, if
              you don&apos;t have one yet—there&apos;s a good chance it
              isn&apos;t meeting today&apos;s mobile standards.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">
              How to Know If Your Site Isn&apos;t Responsive
            </h2>
            <ul className="list-disc pl-6 mt-4 mb-6">
              <li>You have to pinch-to-zoom just to read the text</li>
              <li>Buttons or links are too tiny to tap</li>
              <li>Content runs off the edge of the screen</li>
              <li>Slow load times, especially on mobile data</li>
            </ul>
            <p>
              If any of these sound familiar, you&apos;re not alone—and we can
              help.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">
              Examples of Responsive Sites Done Right
            </h2>
            <p>
              We&apos;ve helped businesses right here in California build clean,
              modern, responsive websites that look great on every screen:
            </p>
            <ul className="list-disc pl-6 mt-4 mb-6">
              <li>
                <Link
                  href="https://www.myfavpetsitter.org"
                  target="_blank"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  My Fav Pet Sitter
                </Link>{" "}
                — mobile-first, playful, and easy to book services
              </li>
              <li>
                <Link
                  href="https://www.ogden-construction.com"
                  target="_blank"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Ogden Construction
                </Link>{" "}
                — sleek and professional, with quick-access service info for
                on-the-go clients
              </li>
            </ul>
            <p>
              These sites weren&apos;t made from cookie-cutter templates—they
              were custom-built to reflect each business&apos;s brand and goals.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">
              Why DIY Builders Fall Short
            </h2>
            <p>
              Many DIY website builders claim to be “responsive,” but
              here&apos;s the truth: they often load slowly, break easily, and
              force you into rigid layouts that don&apos;t reflect your business
              well.
            </p>
            <p>
              Worse—some make your site mobile-friendly *technically*, but the
              actual experience still feels clunky and outdated.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">
              What Makes a Truly Responsive Website?
            </h2>
            <ul className="list-disc pl-6 mt-4 mb-6">
              <li>Readable, resizable text</li>
              <li>Images that resize and load quickly</li>
              <li>Navigation that works with your thumb</li>
              <li>Fast page speeds—even on mobile data</li>
              <li>Clean layout that adapts smoothly to any screen size</li>
            </ul>

            <p>
              At{" "}
              <Link
                href="/"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                EDC Web Design
              </Link>
              , we build responsive websites by hand—no bloated page builders or
              clunky code. Every detail is optimized for speed, usability, and
              search performance.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">
              Need a Hand? We&apos;re Local, Friendly, and Fast
            </h2>
            <p>
              We serve small businesses across{" "}
              <Link
                href="/locations/california/folsom"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                Folsom
              </Link>
              ,{" "}
              <Link
                href="/locations/california/el-dorado-hills"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                El Dorado Hills
              </Link>
              ,{" "}
              <Link
                href="/locations/california/placerville"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                Placerville
              </Link>
              , and all throughout El Dorado County. We offer{" "}
              <Link
                href="/services"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                one-page
              </Link>{" "}
              and{" "}
              <Link
                href="/services"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                multi-page websites
              </Link>{" "}
              at transparent pricing, with no templates, no fluff—just clean,
              effective design.
            </p>

            <p>
              Curious what your site could look like? We&apos;ll send you a free
              mockup first. No pressure, no pushy sales stuff—just a chance to
              see what&apos;s possible.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">
              Let&apos;s Make Your Website Work Everywhere
            </h2>
            <p>
              If you&apos;re unsure whether your site is mobile-ready—or if you
              don&apos;t have a site yet at all—let&apos;s talk.
            </p>
            <p>
              We&apos;ll help you create something clean, modern, and built to
              grow with your business.
            </p>

            <p>
              <Link
                href="/contact"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                Contact us here
              </Link>{" "}
              or claim your free mockup to get started.
            </p>

            <p className="mt-10 pt-8 border-t border-border text-secondary">
              Want more small business tips and insights? Browse the rest of our{" "}
              <Link
                href="/blog"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                blog
              </Link>{" "}
              for more.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
};

export default ResponsiveWebDesign;
