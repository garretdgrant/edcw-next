import { Button } from "@/components/ui/button";
import Image from "next/image";
import type { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";

const formatCityName = (slug: string): string => {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

type Props = {
  params: Promise<{ city: string }>;
};

function getCityJsonLd(city: string, cityName: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `https://www.edcwebdesign.com/locations/california/${city}`,
    name: `Web Design in ${cityName} | EDC Web Design`,
    url: `https://www.edcwebdesign.com/locations/california/${city}`,
    description: `EDC Web Design offers custom websites tailored for small businesses in ${cityName}. Get fast, responsive designs that attract and convert local customers.`,
    hasMap: `https://www.google.com/maps/search/${encodeURIComponent(cityName + ", CA")}`,
    about: {
      "@type": "Thing",
      name: `${cityName} Web Design`,
      description: `Affordable, modern websites for small businesses in ${cityName}, built to perform and generate leads.`,
    },
    mainEntityOfPage: {
      "@type": "LocalBusiness",
      "@id": "https://www.edcwebdesign.com/#localbusiness",
    },
  };
}

// ✅ Dynamic Metadata
export async function generateMetadata(
  { params }: Props,
  _parent: ResolvingMetadata,
): Promise<Metadata> {
  const { city } = await params;
  const cityName = formatCityName(city);
  const baseUrl = "https://www.edcwebdesign.com";
  const pageUrl = `${baseUrl}/locations/${city}`;
  const title = `Web Design in ${cityName}, California | EDC Web Design`;
  const description = `Get a modern, fast-loading website for your ${cityName} business. EDC Web Design builds SEO-optimized sites that convert visitors into customers.`;

  return {
    metadataBase: new URL("https://www.edcwebdesign.com"),
    title,
    description,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: "EDC Web Design",
      images: [
        {
          url: `${baseUrl}/assets/locations/${city}.webp`,
          width: 1200,
          height: 630,
          alt: `Web Design in ${cityName}`,
        },
      ],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${baseUrl}/assets/locations/${city}.webp`],
    },
  };
}

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

// ✅ Page Component
export default async function LocationPage({ params }: Props) {
  const { city } = await params;
  const cityName = formatCityName(city);
  const jsonLd = getCityJsonLd(city, cityName);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <div>
        <div className="pt-24 pb-16">
          <section className="max-w-7xl mx-auto px-6 py-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-10">
              Modern Web Design for
              <br />
              Small Businesses in{" "}
              <span className="text-gold-gradient">{cityName}</span>
            </h1>
            <p className="text-xl text-secondary max-w-3xl mx-auto mb-8">
              We create fast-loading, beautiful websites that help {cityName}{" "}
              businesses attract more customers and grow their online presence.
            </p>
            <Link href="/contact">
              <Button
                className="px-8 py-4 bg-accent text-primary rounded-full font-semibold hover:bg-accent/90 transition-colors cursor-pointer"
                size="lg"
              >
                Get a Free Consultation
              </Button>
            </Link>
          </section>

          <section className="max-w-7xl mx-auto px-6 py-12">
            <div className="rounded-lg overflow-hidden h-64 relative">
              <Image
                // src={`/assets/locations/california/${city}.webp`}
                src={`/assets/locations/california/sacramento.webp`}
                alt={`Web design for businesses in ${cityName}`}
                fill
                className="object-cover"
                priority
              />
            </div>
          </section>
          {/* SEO-optimized content */}
          <section className="max-w-4xl mx-auto px-6 py-12">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-3xl font-semibold mb-6 text-primary border-b border-accent pb-2">
                Professional Web Design Services in{" "}
                <span className="text-gold-gradient">{cityName}</span>
              </h2>
              <p className="mb-4">
                Looking for expert <strong>web design in {cityName}</strong>?
                EDC Web Design specializes in creating stunning, functional
                websites for small businesses throughout the {cityName} area.
              </p>
              <p className="mb-4">
                As one of the most{" "}
                <strong>affordable web designers in {cityName}</strong>, we
                deliver premium quality without the premium price tag.
              </p>
              <p className="mb-8">
                Whether you&apos;re launching or refreshing, our {cityName}
                -based team is here to help you stand out.
              </p>
            </div>
          </section>

          {/* Feature Section */}
          <section className="bg-secondary/30 py-16">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-3xl font-semibold text-center mb-12 text-primary border-b border-accent inline-block mx-auto pb-2">
                What Makes Our {cityName} Web Design Services Different
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  "Lightning Fast Speed",
                  "Local SEO Optimization",
                  "Mobile Responsive",
                  "Clean, Modern Design",
                  "Conversion Focused",
                  "Local Business Focus",
                ].map((title, i) => (
                  <div key={i} className="bg-white p-8 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-4 text-primary">
                      {title}
                    </h3>
                    <p>
                      Our {cityName} websites are crafted to deliver on that
                      promise — optimized, beautiful, and ready to grow your
                      business.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="max-w-5xl mx-auto px-6 py-16 text-center">
            <h2 className="text-3xl font-semibold mb-6 text-primary">
              Ready to Transform Your Online Presence?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Get a professionally designed website that helps your {cityName}{" "}
              business stand out and convert more customers.
            </p>
            <Link href="/contact">
              <Button
                className="px-8 py-4 bg-accent text-primary rounded-full font-semibold hover:bg-accent/90 transition-colors cursor-pointer"
                size="lg"
              >
                Get a Free Quote for Your {cityName} Business
              </Button>
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}
