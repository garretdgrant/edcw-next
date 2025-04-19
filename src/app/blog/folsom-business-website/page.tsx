import React from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL("https://www.edcwebdesign.com"),
    title: "Why Every Folsom Business Needs a Website | EDC Web Design",
    description:
      "Discover why local businesses in Folsom need a professional website—even if you're already busy. Learn how to get found online and build trust fast.",
    alternates: {
      canonical: "https://www.edcwebdesign.com/blog/folsom-business-website",
    },
    openGraph: {
      title: "Why Every Folsom Business Needs a Website",
      description:
        "Even busy Folsom business owners can grow by building a trustworthy website. Learn how to boost credibility, visibility, and leads online.",
      url: "https://www.edcwebdesign.com/blog/folsom-business-website",
      siteName: "EDC Web Design",
      type: "article",
      publishedTime: "2025-04-08T08:00:00.000Z",
      images: [
        {
          url: "https://www.edcwebdesign.com/assets/locations/california/folsom.webp",
          width: 1200,
          height: 630,
          alt: "Folsom Business Website Design by EDC Web Design",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Why Every Folsom Business Needs a Website",
      description:
        "Grow your Folsom business with a site that works 24/7. See why local businesses need websites to build trust, rank on Google, and attract leads.",
      images: [
        "https://www.edcwebdesign.com/assets/locations/california/folsom.webp",
      ],
    },
    other: {
      "script:ld+json": JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Why Every Folsom Business Needs a Website",
          description:
            "Learn why every Folsom business needs a website to succeed in 2025. This blog explains how a site helps with trust, visibility, and growth.",
          datePublished: "2025-04-08",
          dateModified: "2025-04-08",
          author: {
            "@type": "Organization",
            name: "EDC Web Design",
            url: "https://www.edcwebdesign.com",
          },
          image: {
            "@type": "ImageObject",
            url: "https://www.edcwebdesign.com/assets/locations/california/folsom.webp",
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
          url: "https://www.edcwebdesign.com/blog/folsom-business-website",
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
              name: "Why Every Folsom Business Needs a Website",
              item: "https://www.edcwebdesign.com/blog/folsom-business-website",
            },
          ],
        },
      ]),
    },
  };
}

function getJsonLd() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: "Why Every Folsom Business Needs a Website",
      description:
        "Learn why every Folsom business needs a website to succeed in 2025. This blog explains how a site helps with trust, visibility, and growth.",
      datePublished: "2025-04-08T08:00:00-07:00",
      dateModified: "2025-04-08T08:00:00-07:00",
      author: {
        "@type": "Organization",
        name: "EDC Web Design",
        url: "https://www.edcwebdesign.com",
      },
      image: {
        "@type": "ImageObject",
        url: "https://www.edcwebdesign.com/assets/locations/california/folsom.webp",
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
      url: "https://www.edcwebdesign.com/blog/folsom-business-website",
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
          name: "Why Every Folsom Business Needs a Website",
          item: "https://www.edcwebdesign.com/blog/folsom-business-website",
        },
      ],
    },
  ];
}

const FolsomBusinessWebsite = () => {
  return (
    <div className="min-h-screen bg-background">
      <Script
        id="jsonld-blog-folsom-business-website"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getJsonLd()) }}
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
                April 8, 2025 • 6 min read • By EDC Web Design
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Why Every Folsom Business Needs a Website (Even If You&apos;re
                Already Busy)
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
              Folsom is home to some of the most hard-working small business
              owners in California. Whether you&apos;re a contractor, a boutique
              owner, or a local service provider, you&apos;re probably already
              juggling a million things. So it makes sense that building a
              website may not have been at the top of your list. But here&apos;s
              the truth: if you&apos;re running a business in Folsom and you
              don&apos;t have a website, you&apos;re leaving money on the table.
            </p>

            <p>
              In this article, we&apos;ll break down why a professional website
              is no longer optional—and how it can actually make your life
              easier. According to a recent study, over{" "}
              <Link
                href="https://www.statista.com/statistics/617136/digital-population-worldwide/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                5 billion people actively use the internet
              </Link>{" "}
              today. That means your customers are online, even if your business
              isn&apos;t. And if they&apos;re searching for your services, you
              want to show up. In fact,{" "}
              <Link
                href="https://blog.hubspot.com/marketing/local-seo-stats"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                46% of all Google searches
              </Link>{" "}
              are looking for local information. A good website makes sure they
              find you first.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">
              First Impressions Happen Online
            </h2>
            <p>
              Even if most of your customers come from referrals or
              word-of-mouth, chances are the first thing they do after hearing
              about you is Google your name. If they can&apos;t find you—or they
              land on a Facebook page with outdated info or a site that
              doesn&apos;t load on mobile—that first impression is already gone.
            </p>

            <p>
              At{" "}
              <Link
                className="text-blue-600 hover:text-blue-800 hover:underline"
                href="/"
              >
                EDC Web Design
              </Link>
              , we specialize in helping small businesses in{" "}
              <Link
                className="text-blue-600 hover:text-blue-800 hover:underline"
                href="/locations/california/folsom"
              >
                Folsom
              </Link>{" "}
              and throughout El Dorado County create fast, trustworthy websites
              that turn clicks into clients.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">
              A Website That Works While You Sleep
            </h2>
            <p>
              Your website should be your hardest-working employee. It never
              takes a break, doesn&apos;t ask for time off, and is always ready
              to answer questions, collect leads, or even close sales. With
              features like contact forms, service info, and Google-ready SEO,
              your website can be a 24/7 sales tool—if it&apos;s built the right
              way.
            </p>

            <p>
              Our{" "}
              <Link
                className="text-blue-600 hover:text-blue-800 hover:underline"
                href="/services"
              >
                services
              </Link>{" "}
              include everything from one-page websites for startups to
              multi-page sites for growing brands. And yes, we make sure it all
              works perfectly on mobile too.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">
              Build Trust With Local Customers
            </h2>
            <p>
              In a close-knit community like Folsom, trust is everything. A
              well-designed website instantly shows that you&apos;re
              professional, invested in your business, and here for the long
              haul. Adding testimonials, real photos, and a clean contact
              section makes it even easier for people to feel confident reaching
              out.
            </p>

            <p>
              If you&apos;re curious about how we&apos;ve helped other small
              businesses build trust online, check out our{" "}
              <Link
                className="text-blue-600 hover:text-blue-800 hover:underline"
                href="/portfolio"
              >
                portfolio
              </Link>{" "}
              for live examples.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">
              Show Up in Local Search Results
            </h2>
            <p>
              Folsom is growing fast—and so is the competition. When someone
              searches &quot;[your service] in Folsom,&quot; you want to be on
              that first page of Google. A properly built website helps you show
              up in search results and appear on Google Maps when people look
              for what you offer.
            </p>

            <p>
              We optimize every site we build with local SEO in mind. So whether
              you&apos;re in Folsom,{" "}
              <Link
                className="text-blue-600 hover:text-blue-800 hover:underline"
                href="/locations/california/el-dorado-hills"
              >
                El Dorado Hills
              </Link>
              , or{" "}
              <Link
                className="text-blue-600 hover:text-blue-800 hover:underline"
                href="/locations/california/placerville"
              >
                Placerville
              </Link>
              , you can attract the right traffic without spending a dime on
              ads.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">
              It Doesn&apos;t Have to Be Complicated (or Expensive)
            </h2>
            <p>
              One of the biggest reasons business owners put off getting a
              website is they assume it&apos;s going to be expensive, confusing,
              or take forever. We get it. That&apos;s why we keep things simple,
              transparent, and built around your goals.
            </p>

            <p>
              You can view our{" "}
              <Link
                className="text-blue-600 hover:text-blue-800 hover:underline"
                href="/pricing"
              >
                pricing
              </Link>{" "}
              to get an idea of what to expect—no surprises, just value. And if
              you&apos;re not ready to commit, we offer a free mockup so you can
              see exactly what your site could look like first.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">
              Ready to Take the First Step?
            </h2>
            <p>
              If you&apos;re a Folsom business owner and you still don&apos;t
              have a website—or you&apos;re running one that looks like it
              hasn&apos;t been updated since 2012—we&apos;re here to help.
            </p>

            <p>
              Let&apos;s make your business easier to find, easier to trust, and
              easier to grow.
            </p>

            <p>
              <Link
                className="text-blue-600 hover:text-blue-800 hover:underline"
                href="/contact"
              >
                Contact us
              </Link>{" "}
              to get started or claim your free mockup today.
            </p>

            <p className="mt-10 pt-8 border-t border-border text-secondary">
              Looking for more tips and local insights? Visit our{" "}
              <Link
                className="text-blue-600 hover:text-blue-800 hover:underline"
                href="/blog"
              >
                blog
              </Link>{" "}
              for more articles like this one.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
};

export default FolsomBusinessWebsite;
