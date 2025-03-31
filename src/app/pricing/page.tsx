import { Check } from "lucide-react";

const Pricing = () => {
  const pricingPlans = [
    {
      title: "Monthly",
      setupFee: "$1,000",
      monthlyCost: "$200",
      upfrontPayment: "None",
      totalDue: "$1,200",
      savings: "—",
      totalText: "(first month)",
      popular: false,
      features: [
        "Custom responsive website design",
        "Mobile optimization",
        "Content management system",
        "Basic SEO setup",
        "Monthly maintenance & updates",
      ],
    },
    {
      title: "6-Month Prepay",
      setupFee: "$750",
      setupDiscountText: "(25% off setup)",
      monthlyCost: "$200",
      upfrontPayment: "$1,200",
      upfrontText: "(6 months)",
      totalDue: "$1,950",
      savings: "Save $250",
      popular: false,
      features: [
        "All Monthly plan features",
        "Discounted setup fee",
        "Priority support",
        "Monthly performance reports",
        "Google Analytics integration",
      ],
    },
    {
      title: "12-Month Prepay",
      setupFee: "$500",
      setupDiscountText: "(50% off setup)",
      monthlyCost: "$200",
      upfrontPayment: "$2,400",
      upfrontText: "(12 months)",
      totalDue: "$2,900",
      savings: "Save $500",
      popular: true,
      features: [
        "All 6-Month plan features",
        "Free logo refresh",
        "Quarterly strategy sessions",
        "Social media integration",
        "Enhanced SEO package",
      ],
    },
    {
      title: "18-Month Prepay",
      setupFee: "$0",
      setupDiscountText: "(No setup fee)",
      monthlyCost: "$200",
      upfrontPayment: "$3,600",
      upfrontText: "(18 months)",
      totalDue: "$3,600",
      savings: "Save $1,000",
      popular: false,
      features: [
        "All 12-Month plan features",
        "Free domain name for 2 years",
        "Premium hosting included",
        "Custom email addresses",
        "Monthly content updates",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative px-6 lg:px-8 py-24">
          <div className="mx-auto max-w-7xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary mb-6">
              Simple, Transparent{" "}
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#F3C969] bg-clip-text text-transparent">
                Pricing
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-secondary mb-12">
              Choose the plan that works best for your business. All plans
              include custom design, development, and ongoing support.
            </p>
          </div>
        </section>

        {/* Pricing Table */}
        <section className="px-6 lg:px-8 pb-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`rounded-xl overflow-hidden border ${plan.popular ? "border-accent shadow-lg scale-105" : "border-border"} transition-all flex flex-col h-full relative`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 inset-x-0 bg-accent text-primary text-center py-2 font-medium">
                      Most Popular
                    </div>
                  )}

                  <div
                    className={`p-6 text-center ${plan.popular ? "pt-12" : ""}`}
                  >
                    <h3 className="font-bold text-xl mb-6">{plan.title}</h3>

                    <div className="space-y-4 mb-8">
                      <div>
                        <p className="text-sm text-secondary">Setup Fee</p>
                        <p className="font-semibold text-primary">
                          {plan.setupFee}{" "}
                          {plan.setupDiscountText && (
                            <span className="text-sm font-normal text-secondary">
                              {plan.setupDiscountText}
                            </span>
                          )}
                        </p>
                      </div>

                      <div>
                        <p className="text-sm text-secondary">Monthly Cost</p>
                        <p className="font-semibold text-primary">
                          {plan.monthlyCost}
                        </p>
                      </div>

                      <div>
                        <p className="text-sm text-secondary">
                          Upfront Payment
                        </p>
                        <p className="font-semibold text-primary">
                          {plan.upfrontPayment}{" "}
                          {plan.upfrontText && (
                            <span className="text-sm font-normal text-secondary">
                              {plan.upfrontText}
                            </span>
                          )}
                        </p>
                      </div>

                      <div
                        className={`${plan.popular ? "bg-accent/10 py-3 rounded-lg" : ""}`}
                      >
                        <p className="text-sm text-secondary">Total Due</p>
                        <p className="font-bold text-xl text-primary">
                          {plan.totalDue}{" "}
                          {plan.totalText && (
                            <span className="text-sm font-normal text-secondary">
                              {plan.totalText}
                            </span>
                          )}
                        </p>
                      </div>

                      <div>
                        <p
                          className={`font-semibold ${plan.savings === "—" ? "text-secondary" : "text-[#22C55E]"}`}
                        >
                          {plan.savings}
                        </p>
                      </div>
                    </div>

                    <button
                      className={`w-full py-3 rounded-lg font-medium ${plan.popular ? "bg-accent text-primary" : "bg-primary text-white"} hover:opacity-90 transition-opacity`}
                    >
                      Choose Plan
                    </button>
                  </div>

                  <div className="p-6 bg-background/50 border-t border-border mt-auto">
                    <h4 className="font-medium mb-4">What&apos;s included:</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check className="w-5 h-5 text-[#22C55E] flex-shrink-0 mr-2" />
                          <span className="text-secondary text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-secondary mb-8">
                All plans include 24/7 support, free SSL certificate, and
                regular backups.
                <br />
                Need something custom? Contact us for a tailored solution.
              </p>
              <button className="px-6 py-3 border border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-colors">
                Contact for Custom Quote
              </button>
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
                  question: "What does the monthly fee cover?",
                  answer:
                    "The monthly fee includes website hosting, security updates, regular backups, basic SEO monitoring, technical support, and minor content updates as needed.",
                },
                {
                  question: "Can I upgrade or downgrade my plan later?",
                  answer:
                    "Yes, you can upgrade your plan at any time. If you need to downgrade, you can do so at the end of your current billing cycle.",
                },
                {
                  question: "Is there a refund policy?",
                  answer:
                    "We offer a 14-day money-back guarantee on the setup fee. Monthly fees are non-refundable once the service period has begun.",
                },
                {
                  question:
                    "Are there any additional costs I should know about?",
                  answer:
                    "Our pricing is transparent with no hidden fees. The only potential additional costs would be for optional add-ons like premium stock photos, custom functionality, or extensive content creation services.",
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
            <button className="px-8 py-4 bg-accent text-primary rounded-full font-semibold hover:bg-accent/90 transition-colors">
              Schedule a Consultation
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pricing;
