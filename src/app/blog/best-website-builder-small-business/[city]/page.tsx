import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";
import { formatCityName } from "@/lib/utils"; // optional utility

type Props = {
  params: Promise<{ city: string }>;
};

// ✅ Static Params
export async function generateStaticParams(): Promise<{ city: string }[]> {
  return [
    "placerville",
    "el-dorado-hills",
    "folsom",
    "auburn",
    "napa-valley",
    "sacramento",
  ].map((city) => ({ city }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const cityName = formatCityName(city);
  const baseUrl = "https://www.edcwebdesign.com";
  const slug = "best-website-builder-small-business";
  const fullUrl = `${baseUrl}/blog/${slug}/${city}`;
  const imageUrl = `${baseUrl}/assets/locations/california/${city}.webp`;

  return {
    metadataBase: new URL(baseUrl),
    title: `Best Website Builder for Small Business in ${cityName} (2025 Guide) | EDC Web Design`,
    description: `Wix, Squarespace, Shopify? Learn which website builder is best for ${cityName} small businesses—and when a custom site makes more sense.`,
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      title: `Best Website Builder for Small Business in ${cityName} (And Why Custom Might Be Better)`,
      description: `Comparing Wix, Squarespace, and Shopify in ${cityName}? This guide explains which builder works best—and when it’s time to go custom.`,
      url: fullUrl,
      siteName: "EDC Web Design",
      type: "article",
      publishedTime: "2025-04-09T08:00:00.000Z",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `Best Website Builders in ${cityName} - EDC Web Design`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Best Website Builder for Small Business in ${cityName} (2025)`,
      description: `Wix, Squarespace, Shopify? Learn which website builder is best for ${cityName} small businesses—and when to hire a pro.`,
      images: [imageUrl],
    },
    other: {
      "script:ld+json": JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: `Best Website Builder for Small Business in ${cityName} (2025 Guide)`,
          description: `Wondering which website builder is best for your ${cityName} small business? This guide compares top platforms and explains when custom is the smarter move.`,
          datePublished: "2025-04-09",
          dateModified: "2025-04-09",
          author: {
            "@type": "Organization",
            name: "EDC Web Design",
            url: baseUrl,
          },
          image: {
            "@type": "ImageObject",
            url: imageUrl,
            width: 1200,
            height: 630,
          },
          mainEntityOfPage: {
            "@type": "LocalBusiness",
            "@id": `${baseUrl}/#localbusiness`,
          },
          publisher: {
            "@type": "Organization",
            name: "EDC Web Design",
            logo: {
              "@type": "ImageObject",
              url: `${baseUrl}/assets/logo.webp`,
            },
          },
          url: fullUrl,
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: baseUrl,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Blog",
              item: `${baseUrl}/blog`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Best Website Builder for Small Business",
              item: `${baseUrl}/blog/${slug}`,
            },
            {
              "@type": "ListItem",
              position: 4,
              name: `Best Website Builder in ${cityName}`,
              item: fullUrl,
            },
          ],
        },
      ]),
    },
  };
}

export default async function BestWebsiteBuilder({ params }: Props) {
  const { city } = await params;
  const cityName = formatCityName(city);

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
                April 9, 2025 • 6 min read • By EDC Web Design
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Best Website Builder for Small Business in {cityName} (And Why
                Going Custom Might Be Better)
              </h1>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <div className="w-full max-w-5xl mx-auto -mt-10 px-6">
          <div className="rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://www.edcwebdesign.com/assets/blog/blog_featured.webp"
              alt={`Web design in ${cityName}`}
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
              If you&apos;re a small business owner in {cityName} trying to get
              online, you&apos;re probably wondering which website builder is
              the best. With so many options—Wix, Squarespace, Shopify—it&apos;s
              easy to feel overwhelmed. But what if the best option isn&apos;t a
              builder at all?
            </p>

            <p>
              In this post, we&apos;ll compare the top website builders for
              small businesses and explain why many business owners in{" "}
              {cityName} eventually choose a custom-built website instead—
              especially when growth, SEO, and flexibility matter.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">
              Top Website Builders for Small Business (Quick Overview)
            </h2>

            <ul className="list-disc pl-6 mt-4 mb-6">
              <li>
                <strong>Wix:</strong> Easy drag-and-drop editor, but limited
                flexibility and slower performance.
              </li>
              <li>
                <strong>Squarespace:</strong> Stylish templates, but more design
                restrictions and learning curve.
              </li>
              <li>
                <strong>Shopify:</strong> Great for e-commerce, but overkill for
                service businesses.
              </li>
              <li>
                <strong>WordPress.com:</strong> Powerful, but often requires
                plugins and some tech setup.
              </li>
              <li>
                <strong>Webflow:</strong> Advanced design freedom, but steeper
                learning curve and dev-like UX.
              </li>
            </ul>

            <p>
              These builders work for some businesses—but most come with
              trade-offs. Many {cityName} business owners end up frustrated with
              rigid templates, hidden costs, or the time it takes to manage the
              site themselves.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">
              The Problem With DIY Website Builders
            </h2>
            <p>
              Let&apos;s be real: building a business is hard enough without
              having to become a website expert too. Here are the most common
              issues we see when small businesses in {cityName} use website
              builders:
            </p>
            <ul className="list-disc pl-6 mt-4 mb-6">
              <li>
                <strong>SEO Limitations:</strong> Many builders have slow load
                times and weak technical SEO setups.
              </li>
              <li>
                <strong>Design Lock-In:</strong> You&apos;re stuck with their
                templates, even if they don&apos;t fully match your brand.
              </li>
              <li>
                <strong>Maintenance Headaches:</strong> You have to update,
                troubleshoot, and fix things yourself.
              </li>
              <li>
                <strong>Scalability:</strong> As your business grows, your site
                often needs features these builders can&apos;t support well.
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">
              The Alternative: A Custom Site Without the Headache
            </h2>
            <p>
              At{" "}
              <Link
                href="/"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                EDC Web Design
              </Link>
              , we specialize in building fast, mobile-friendly websites for
              small businesses in {cityName} that want to look professional
              without doing it themselves.
            </p>

            <p>You get a clean, modern website that&apos;s:</p>

            <ul className="list-disc pl-6 mt-4 mb-6">
              <li>Custom to your brand</li>
              <li>Search engine optimized</li>
              <li>Mobile-ready and fast</li>
              <li>Easy to manage — because we handle everything</li>
            </ul>

            <p>
              We&apos;ve helped local businesses across{" "}
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
              , and beyond with sites that are built to perform in their
              communities—just like {cityName}.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">
              But What About Cost?
            </h2>
            <p>
              Most people assume a custom site costs thousands—but at{" "}
              <Link
                href="/pricing"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                EDC Web Design
              </Link>
              , we keep things simple and affordable. Whether you need a
              one-page starter site or a full five-page setup, our{" "}
              <Link
                href="/services"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                services
              </Link>{" "}
              are built with small businesses in mind.
            </p>

            <p>
              And to make it even easier, we offer a{" "}
              <strong>free mockup</strong> so you can preview what your site
              could look like—no commitment required.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">
              Final Verdict: Which Website Builder Is Best?
            </h2>
            <p>
              If you&apos;re comfortable doing it all yourself and just need
              something basic fast, tools like Wix or Squarespace can get the
              job done. But if you want a website that looks great, performs
              well, and actually helps grow your business—you may want to leave
              it to a professional.
            </p>

            <p>
              Instead of wrestling with templates, let us take care of it for
              you.
              <Link
                href="/contact"
                className="text-blue-600 hover:text-blue-800 hover:underline ml-1"
              >
                Contact us
              </Link>{" "}
              for a free mockup and let&apos;s build something you&apos;re proud
              to show off in {cityName}.
            </p>

            <p className="mt-10 pt-8 border-t border-border text-secondary">
              Looking for more tips and resources? Visit our{" "}
              <Link
                href="/blog"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                blog
              </Link>{" "}
              for more small business insights.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}
