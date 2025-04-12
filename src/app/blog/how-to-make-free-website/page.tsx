// app/blog/how-to-make-a-website-for-free/page.tsx
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL("https://www.edcwebdesign.com"),
    title:
      "How to Make a Website for Free (And Why It Might Cost You Later) | EDC Web Design",
    description:
      "Can you really make a website for free? This guide explains the tradeoffs of free builders like Wix and Canva—and when it makes sense to hire a pro.",
    alternates: {
      canonical:
        "https://www.edcwebdesign.com/blog/how-to-make-a-website-for-free",
    },
    openGraph: {
      title: "How to Make a Website for Free (And Why It Might Cost You Later)",
      description:
        "Learn how to make a website for free with tools like Wix or WordPress—and why many small business owners eventually choose custom, SEO-ready sites instead.",
      url: "https://www.edcwebdesign.com/blog/how-to-make-a-website-for-free",
      siteName: "EDC Web Design",
      type: "article",
      publishedTime: "2025-04-12T08:00:00.000Z",
      images: [
        {
          url: "https://www.edcwebdesign.com/assets/blog/blog_featured.webp",
          width: 1200,
          height: 630,
          alt: "Free Website Builder Concept by EDC Web Design",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "How to Make a Website for Free (And Why It Might Cost You Later)",
      description:
        "Free website builders seem great—until you hit limits on speed, SEO, and trust. Find out when it's worth hiring a local pro.",
      images: ["https://www.edcwebdesign.com/assets/blog/blog_featured.webp"],
    },
    other: {
      "script:ld+json": JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline:
            "How to Make a Website for Free (And Why It Might Cost You Later)",
          description:
            "Free website builders can work in a pinch—but they come with limitations. Here's what you need to know before trusting your business to a free solution.",
          datePublished: "2025-04-12",
          dateModified: "2025-04-12",
          author: {
            "@type": "Organization",
            name: "EDC Web Design",
            url: "https://www.edcwebdesign.com",
          },
          image: {
            "@type": "ImageObject",
            url: "https://www.edcwebdesign.com/assets/blog/blog_featured.webp",
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
          url: "https://www.edcwebdesign.com/blog/how-to-make-a-website-for-free",
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
              name: "How to Make a Website for Free",
              item: "https://www.edcwebdesign.com/blog/how-to-make-a-website-for-free",
            },
          ],
        },
      ]),
    },
  };
}

const HowToMakeWebsiteFree = () => {
  return (
    <div className="min-h-screen bg-background">
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
                April 12, 2025 • 7 min read • By EDC Web Design
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                How to Make a Website for Free (And Why It Might Cost You Later)
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
              Building a website for free sounds great on the surface — and for
              some, it&apos;s a great starting point. But if your goal is to
              grow a business, be found on Google, and look professional online,
              there&apos;s more to the story.
            </p>

            <p>
              In this post, we&apos;ll walk through the free options out there,
              what they&apos;re good for, and why they often fall short when it
              comes to SEO, speed, and long-term growth. And when you&apos;re
              ready for something custom, we&apos;ll show you a better path
              forward.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">
              Can You Really Make a Website for Free?
            </h2>

            <p>Yes — here&apos;s how most people do it:</p>

            <ul className="list-disc pl-6 mt-4 mb-6">
              <li>
                <strong>Wix:</strong> Easy drag-and-drop with free templates,
                but your site will have ads and a wixsite.com domain.
              </li>
              <li>
                <strong>WordPress.com:</strong> Offers a free tier with limited
                control and branding.
              </li>
              <li>
                <strong>Canva Sites:</strong> Surprisingly quick and stylish,
                but not built for SEO or performance.
              </li>
            </ul>

            <p>
              These tools are great for getting something live quickly — a
              personal blog, a resume site, or even a basic landing page. But if
              you&apos;re serious about showing up in search results or
              converting visitors into leads, keep reading.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">
              The Hidden Tradeoffs of Free Website Builders
            </h2>

            <p>Most people hit a wall pretty quickly. Here&apos;s why:</p>

            <ul className="list-disc pl-6 mt-4 mb-6">
              <li>
                <strong>Speed issues:</strong> Free sites often load slowly,
                especially on mobile — which hurts both user experience and
                rankings.
              </li>
              <li>
                <strong>SEO limitations:</strong> You can&apos;t edit meta tags
                properly, structure headings, add schema, or control your
                sitemap.
              </li>
              <li>
                <strong>Template lock-in:</strong> You&apos;re stuck working
                inside someone else&apos;s design framework, even if it
                doesn&apos;t match your brand.
              </li>
              <li>
                <strong>No real support:</strong> If something breaks,
                you&apos;re on your own unless you upgrade.
              </li>
            </ul>

            <p>
              For a hobby project, these limits are manageable. But for a real
              business? It&apos;s like putting a “cheap and temporary” sign on
              your front door.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">
              Free Website = Free Marketing?
            </h2>

            <p>
              The biggest myth is that a free website helps people find your
              business. In reality, it might hurt your visibility. Google
              rewards pages that are fast, well-structured, and technically
              sound. Most free websites fail those tests.
            </p>

            <p>
              For example, at{" "}
              <Link
                href="/"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                EDC Web Design
              </Link>
              , we carefully build every site with:
            </p>

            <ul className="list-disc pl-6 mt-4 mb-6">
              <li>SEO-optimized metadata and Open Graph tags</li>
              <li>Structured data (JSON-LD) for rich Google listings</li>
              <li>
                Lightning-fast performance and Core Web Vitals optimization
              </li>
              <li>
                Local SEO targeting for areas like{" "}
                <Link
                  href="/locations/california/placerville"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Placerville
                </Link>
                ,{" "}
                <Link
                  href="/locations/california/folsom"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Folsom
                </Link>
                , and{" "}
                <Link
                  href="/locations/california/el-dorado-hills"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  El Dorado Hills
                </Link>
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">
              So What&apos;s the Better Alternative?
            </h2>

            <p>
              You don&apos;t have to choose between “free” and “$10,000 agency
              site.” At EDC Web Design, we build custom, high-performing
              websites that are surprisingly affordable — especially when you
              consider what it could do for your business long-term.
            </p>

            <p>
              Whether you need a{" "}
              <Link
                href="/services"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                one-pager to start
              </Link>{" "}
              or a full five-page site, everything is:
            </p>

            <ul className="list-disc pl-6 mt-4 mb-6">
              <li>Built with your brand in mind</li>
              <li>Google-ready from day one</li>
              <li>Mobile-first and lightning fast</li>
              <li>Easy to manage — because we do it all for you</li>
            </ul>

            <p>
              And if you&apos;re still on the fence, I offer a{" "}
              <strong>free custom homepage mockup</strong> — so you can see
              exactly what your site could look like before you spend a dime.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">
              Final Thoughts: Should You Build It Yourself?
            </h2>

            <p>
              If your goal is just to put something online quickly, a free
              website might work. But if you&apos;re trying to rank on Google,
              win over customers, and grow a brand — that free site might
              actually cost you in the long run.
            </p>

            <p>
              Ready to build something real?{" "}
              <Link
                href="/contact"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                Reach out for a free homepage mockup
              </Link>{" "}
              and let&apos;s take your online presence to the next level.
            </p>

            <p className="mt-10 pt-8 border-t border-border text-secondary">
              Want more tips and honest advice on web design and digital growth?
              Visit the{" "}
              <Link
                href="/blog"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                EDC Web Design Blog
              </Link>{" "}
              for more.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
};

export default HowToMakeWebsiteFree;
