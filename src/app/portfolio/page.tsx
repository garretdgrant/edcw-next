import { ArrowRight } from "lucide-react";

const Portfolio = () => {
  const portfolioItems = [
    {
      title: "Mountain Café",
      description:
        "A responsive website for a local coffee shop with online ordering capabilities and a loyalty program.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      technologies: ["React", "Tailwind CSS", "Node.js"],
      outcome:
        "50% increase in online orders within the first month of launch.",
    },
    {
      title: "Harbor Real Estate",
      description:
        "Property listing site with advanced search features, virtual tours, and agent profiles.",
      image: "https://images.unsplash.com/photo-1551038247-3d9af20df552",
      technologies: ["React", "Firebase", "Google Maps API"],
      outcome:
        "Reduced property listing time by 35% and increased lead generation by 65%.",
    },
    {
      title: "Bloom Florists",
      description:
        "E-commerce platform with delivery scheduling, occasion reminders, and custom arrangement builder.",
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b",
      technologies: ["React", "Stripe", "Express.js"],
      outcome:
        "Revenue increased by 40% year-over-year after website redesign.",
    },
    {
      title: "Wellness Yoga Studio",
      description:
        "Membership site with class scheduling, online payments, and instructor profiles.",
      image: "https://images.unsplash.com/photo-1545389336-cf090694435e",
      technologies: ["React", "Tailwind CSS", "WordPress API"],
      outcome:
        "Class bookings increased by 75% and new member sign-ups doubled.",
    },
    {
      title: "Artisan Bakery",
      description:
        "Website featuring product catalog, catering services, and custom order forms.",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff",
      technologies: ["React", "MongoDB", "Express.js"],
      outcome:
        "Catering orders increased by 60% within three months of launch.",
    },
    {
      title: "Urban Fitness Club",
      description:
        "Membership portal with class registration, progress tracking, and nutrition planning.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48",
      technologies: ["React", "Node.js", "Chart.js"],
      outcome:
        "Member retention improved by 25% due to enhanced digital experience.",
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
                Portfolio
              </span>
            </h1>
            <p className="max-w-2xl text-lg text-secondary mb-12">
              Explore our recent web design and development projects for small
              businesses. Each project is crafted with precision, focusing on
              user experience, performance, and business goals.
            </p>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="px-6 lg:px-8 pb-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.map((item, index) => (
                <div
                  key={index}
                  className="rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all flex flex-col h-full"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                    <p className="text-secondary mb-4">{item.description}</p>

                    <div className="mt-auto">
                      <div className="mb-4">
                        <h4 className="font-medium text-sm text-primary mb-2">
                          Technologies Used:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {item.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="inline-block px-2 py-1 text-xs bg-background border border-border rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-medium text-sm text-primary mb-2">
                          Client Outcome:
                        </h4>
                        <p className="text-secondary text-sm">{item.outcome}</p>
                      </div>

                      <button className="text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all">
                        View Case Study <ArrowRight className="w-4 h-4" />
                      </button>
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
              Ready to build your next digital project?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Let&apos;s create a website that truly represents your business
              and drives real results, just like we did for these clients.
            </p>
            <button className="px-8 py-4 bg-accent text-primary rounded-full font-semibold hover:bg-accent/90 transition-colors">
              Start Your Project
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;
