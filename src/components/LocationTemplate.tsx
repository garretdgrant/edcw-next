import React from "react";
import { Button } from "./ui/button";
import { useParams } from "next/navigation";
import Navigation from "./Navigation";
import Footer from "./Footer";

const formatCityName = (slug: string): string => {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const LocationTemplate = () => {
  const { city } = useParams();
  const cityName =
    typeof city === "string" ? formatCityName(city) : "[City Name]";
  return (
    <div>
      <Navigation />
      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Modern Web Design for Small Businesses in {cityName}
          </h1>
          <p className="text-xl text-secondary max-w-3xl mx-auto mb-8">
            We create fast-loading, beautiful websites that help {cityName}{" "}
            businesses attract more customers and grow their online presence.
          </p>
          <Button className="text-white bg-accent hover:bg-accent/90" size="lg">
            Get a Free Consultation
          </Button>
        </section>

        {/* City Image Section */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="bg-secondary/20 rounded-lg overflow-hidden h-64 flex items-center justify-center">
            <p className="text-xl font-medium text-secondary">
              Insert {cityName} image here
            </p>
          </div>
        </section>

        {/* SEO-optimized content */}
        <section className="max-w-4xl mx-auto px-6 py-12">
          <div className="prose prose-lg mx-auto">
            <h2 className="text-3xl font-semibold mb-6 text-primary border-b border-accent pb-2">
              Professional Web Design Services in {cityName}
            </h2>
            <p className="mb-4">
              Looking for expert <strong>web design in {cityName}</strong>? EDC
              Web Design specializes in creating stunning, functional websites
              for small businesses throughout the {cityName} area. Our team of
              talented <strong>{cityName} website design services</strong>{" "}
              professionals understands the unique needs of local businesses.
            </p>
            <p className="mb-4">
              As one of the most{" "}
              <strong>affordable web designers in {cityName}</strong>, we
              deliver premium quality without the premium price tag. We focus on
              creating{" "}
              <strong>
                modern websites for small businesses in {cityName}
              </strong>{" "}
              that not only look great but drive real business results.
            </p>
            <p className="mb-8">
              Whether you&apos;re launching a new business or refreshing your
              current online presence, our {cityName}-based web design team is
              ready to help you stand out in your local market with a website
              that converts visitors into customers.
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
              <div className="bg-white p-8 rounded-lg shadow-xs">
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  Lightning Fast Speed
                </h3>
                <p>
                  Our {cityName} websites load in milliseconds, keeping visitors
                  engaged and improving your SEO rankings.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-xs">
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  Local SEO Optimization
                </h3>
                <p>
                  Built to rank for {cityName} searches, helping local customers
                  find your business when they need it most.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-xs">
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  Mobile Responsive
                </h3>
                <p>
                  Perfect experience on every device, critical for {cityName}{" "}
                  customers searching on smartphones.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-xs">
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  Clean, Modern Design
                </h3>
                <p>
                  Professional aesthetics that reflect your {cityName}{" "}
                  business&apos;s unique brand and values.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-xs">
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  Conversion Focused
                </h3>
                <p>
                  Strategic layouts and calls-to-action designed to turn{" "}
                  {cityName} visitors into paying customers.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-xs">
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  Local Business Focus
                </h3>
                <p>
                  Specialized in the unique needs of {cityName} small businesses
                  and their target markets.
                </p>
              </div>
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
          <Button className="text-white bg-accent hover:bg-accent/90" size="lg">
            Get a Free Quote for Your {cityName} Business
          </Button>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default LocationTemplate;
