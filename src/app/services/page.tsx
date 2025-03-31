import {
  ArrowRight,
  Code,
  Layout,
  PenTool,
  BarChart,
  Globe,
  Search,
  Shield,
  Smartphone,
  Check,
} from "lucide-react";

const ServicePage = () => {
  const services = [
    {
      title: "Website Design & Development",
      description:
        "Beautiful, responsive websites built to convert visitors into customers.",
      icon: <Layout className="w-12 h-12" />,
      features: [
        "Custom responsive design",
        "Mobile optimization",
        "User experience focused",
        "Fast-loading pages",
        "Content management system",
        "Contact forms and lead capture",
      ],
    },
    {
      title: "Search Engine Optimization",
      description:
        "Get found online with our proven SEO strategies tailored for local businesses.",
      icon: <Search className="w-12 h-12" />,
      features: [
        "Keyword research",
        "On-page optimization",
        "Local SEO setup",
        "Google Business profile optimization",
        "SEO audit and reporting",
        "Content strategy",
      ],
    },
    {
      title: "E-commerce Solutions",
      description:
        "Turn your website into a 24/7 sales machine with our e-commerce expertise.",
      icon: <Globe className="w-12 h-12" />,
      features: [
        "Product catalog setup",
        "Payment gateway integration",
        "Inventory management",
        "Shipping options configuration",
        "Order notification system",
        "Customer account management",
      ],
    },
    {
      title: "Custom Development",
      description:
        "Tailored solutions with clean code for your specific business needs.",
      icon: <Code className="w-12 h-12" />,
      features: [
        "Custom web applications",
        "API integrations",
        "Automation tools",
        "Database design",
        "Third-party service connections",
        "Performance optimization",
      ],
    },
    {
      title: "Branding & Identity",
      description:
        "Establish a cohesive visual identity that resonates with your target audience.",
      icon: <PenTool className="w-12 h-12" />,
      features: [
        "Logo design",
        "Brand style guide",
        "Color palette selection",
        "Typography system",
        "Business card design",
        "Social media templates",
      ],
    },
    {
      title: "Analytics & Reporting",
      description:
        "Gain insights into your website's performance to make data-driven decisions.",
      icon: <BarChart className="w-12 h-12" />,
      features: [
        "Google Analytics setup",
        "Conversion tracking",
        "User behavior analysis",
        "Monthly performance reports",
        "Competitor analysis",
        "Improvement recommendations",
      ],
    },
    {
      title: "Website Maintenance",
      description:
        "Keep your website secure, updated, and performing at its best.",
      icon: <Shield className="w-12 h-12" />,
      features: [
        "Security monitoring",
        "Regular backups",
        "Software updates",
        "Bug fixes",
        "Performance optimization",
        "Content updates",
      ],
    },
    {
      title: "Mobile App Design",
      description: "Extend your web presence with a custom mobile application.",
      icon: <Smartphone className="w-12 h-12" />,
      features: [
        "UI/UX design",
        "Prototype development",
        "Cross-platform solutions",
        "App store submission",
        "Push notification setup",
        "Ongoing maintenance",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative px-6 lg:px-8 py-24">
          <div className="mx-auto max-w-7xl">
            <h1 className="text-4xl font-bold tracking-tight text-primary mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#F3C969] bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="max-w-2xl text-lg text-secondary mb-12">
              Comprehensive web design and digital solutions to help your small
              business establish a powerful online presence.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="px-6 lg:px-8 pb-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid md:grid-cols-2 gap-12">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="border border-border rounded-xl p-8 hover:shadow-md transition-all"
                >
                  <div className="text-accent mb-6">{service.icon}</div>
                  <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                  <p className="text-secondary mb-6">{service.description}</p>

                  <div className="mb-6">
                    <h3 className="font-medium mb-4">What&quot;s included:</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check className="w-5 h-5 text-accent flex-shrink-0 mr-2" />
                          <span className="text-secondary text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-surface px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-16">
              Our Process
            </h2>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  description:
                    "We learn about your business, goals, target audience, and competition to create an effective strategy.",
                },
                {
                  step: "02",
                  title: "Design",
                  description:
                    "We create wireframes and visual designs that align with your brand and business objectives.",
                },
                {
                  step: "03",
                  title: "Development",
                  description:
                    "Our developers build your site with clean code, focusing on performance, security, and usability.",
                },
                {
                  step: "04",
                  title: "Launch & Support",
                  description:
                    "After thorough testing, we launch your site and provide ongoing support to help it grow.",
                },
              ].map((process, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-primary font-bold text-2xl mx-auto mb-6">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    {process.title}
                  </h3>
                  <p className="text-secondary">{process.description}</p>
                  {index < 3 && (
                    <div className="hidden md:block w-full h-1 mt-8 relative">
                      <div className="absolute top-1/2 w-full border-t-2 border-dashed border-border"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-16">
              What Our Clients Say
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "EDC Web Design transformed our online presence. Our new website has already increased leads by 40% in just two months.",
                  name: "Sarah Johnson",
                  company: "Mountain Café",
                  image:
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
                },
                {
                  quote:
                    "Working with EDC was a game-changer for our real estate business. Professional, responsive, and they delivered exactly what we needed.",
                  name: "Michael Chen",
                  company: "Harbor Real Estate",
                  image:
                    "https://images.unsplash.com/photo-1560250097-0b93528c311a",
                },
                {
                  quote:
                    "The e-commerce solution they built for our flower shop has completely streamlined our ordering process and boosted our sales.",
                  name: "Jessica Williams",
                  company: "Bloom Florists",
                  image:
                    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-background border border-border rounded-xl p-6"
                >
                  <p className="text-secondary mb-6 italic">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium">{testimonial.name}</h4>
                      <p className="text-secondary text-sm">
                        {testimonial.company}
                      </p>
                    </div>
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
              Ready to discuss your project?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Let&apos;s talk about how our services can help your business grow
              online.
            </p>
            <button className="px-8 py-4 bg-accent text-primary rounded-full font-semibold hover:bg-accent/90 transition-colors">
              Get in Touch
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ServicePage;
