import Navigation from "@/components/Navigation";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Pricing = () => {
  const pricingPlans = [
    {
      title: "Starter Site",
      tagline: "Simple & Effective",
      audience:
        "Perfect for new businesses or those just establishing an online presence",
      popular: false,
      features: [
        "Custom responsive single-page design",
        "Mobile optimization",
        "Contact form integration",
        "Basic SEO setup",
        "Hosting & domain assistance",
      ],
      ctaText: "Get Started",
    },
    {
      title: "Business Builder",
      tagline: "Growth & Engagement",
      audience:
        "Ideal for established businesses looking to expand their online reach",
      popular: true,
      features: [
        "Multi-page professional website",
        "Content management system",
        "Search engine optimization",
        "Google Analytics integration",
        "Regular maintenance & updates",
      ],
      ctaText: "Most Popular Choice",
    },
    {
      title: "Tailored Solution",
      tagline: "Custom & Comprehensive",
      audience:
        "For businesses with specific needs and advanced functionality requirements",
      popular: false,
      features: [
        "Fully customized design & functionality",
        "E-commerce or membership capabilities",
        "Advanced integrations",
        "Content strategy & creation",
        "Priority support & quarterly reviews",
      ],
      ctaText: "Request Custom Quote",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative px-6 lg:px-8 py-24">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary mb-6">
              Website Packages for{" "}
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#F3C969] bg-clip-text text-transparent">
                Small Businesses
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-secondary mb-8">
              Clear, transparent packages designed to get your business online
              quickly with all the features you need to succeed.
            </p>
            <p className="text-sm text-secondary">
              Packages starting at $500/year
              <br />
              (plus one-time setup fee)
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="px-6 lg:px-8 pb-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <Card
                  key={index}
                  className={`h-full ${
                    plan.popular
                      ? "border-accent shadow-lg relative"
                      : "border-border"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 inset-x-0 flex justify-center">
                      <Badge className="bg-accent text-primary px-4 py-1">
                        Most Popular
                      </Badge>
                    </div>
                  )}

                  <CardHeader
                    className={`text-center ${plan.popular ? "pt-8" : "pt-6"}`}
                  >
                    <CardTitle className="text-xl font-bold">
                      {plan.title}
                    </CardTitle>
                    <CardDescription className="text-secondary font-medium">
                      {plan.tagline}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <p className="text-sm text-center text-secondary">
                      {plan.audience}
                    </p>

                    <div className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start">
                          <Check className="w-5 h-5 text-[#22C55E] flex-shrink-0 mr-3" />
                          <span className="text-secondary text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="pt-4">
                    <Button
                      className={`w-full ${
                        plan.popular
                          ? "bg-accent text-primary hover:bg-accent/90"
                          : "bg-primary text-white hover:bg-primary/90"
                      }`}
                    >
                      {plan.ctaText}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-surface px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-center mb-16">
              Frequently Asked Questions
            </h2>
            <div className="space-y-8">
              {[
                {
                  question: "What is included in the setup fee?",
                  answer:
                    "The setup fee covers initial design, development, content migration, domain and hosting setup, and the launch of your new website. It's a one-time cost to get your site up and running.",
                },
                {
                  question: "What does the annual fee cover?",
                  answer:
                    "The annual fee includes website hosting, security updates, regular backups, basic SEO monitoring, technical support, and minor content updates as needed.",
                },
                {
                  question: "Can I upgrade my plan later?",
                  answer:
                    "Yes, you can upgrade your plan at any time as your business grows. We'll work with you to ensure a smooth transition with minimal disruption to your site.",
                },
                {
                  question: "Is there a refund policy?",
                  answer:
                    "We offer a 14-day money-back guarantee on the setup fee. Annual fees are non-refundable once the service period has begun.",
                },
                {
                  question:
                    "Do I need technical knowledge to maintain my website?",
                  answer:
                    "Not at all. We handle all the technical aspects of your website. For content updates, we provide simple tools and guidance, or you can contact us directly for assistance.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="border border-border rounded-lg overflow-hidden"
                >
                  <div className="px-6 py-4">
                    <h3 className="font-medium text-lg">{faq.question}</h3>
                  </div>
                  <div className="px-6 py-4 bg-background/50 border-t border-border">
                    <p className="text-secondary">{faq.answer}</p>
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
              Ready to get started?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Choose a plan that fits your needs and let&apos;s build a website
              that grows your business.
            </p>
            <Button className="px-8 py-4 bg-accent text-primary rounded-full font-semibold hover:bg-accent/90 text-lg h-auto">
              Schedule a Consultation
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pricing;
