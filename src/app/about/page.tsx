import { Award, Clock, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative px-6 lg:px-8 py-24">
          <div className="mx-auto max-w-7xl">
            <h1 className="text-4xl font-bold tracking-tight text-primary mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#F3C969] bg-clip-text text-transparent">
                EDC Web Design
              </span>
            </h1>
            <p className="max-w-2xl text-lg text-secondary mb-12">
              A modern web design agency focused on helping small businesses
              establish a powerful online presence that drives growth and
              success.
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="px-6 lg:px-8 pb-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-secondary mb-4">
                  EDC Web Design was founded in 2018 by Emma Davis Cooper, a web
                  developer with a passion for helping small businesses thrive
                  in the digital landscape. After spending years working with
                  large agencies, Emma noticed that small businesses often
                  received cookie-cutter solutions that didn&apos;t address
                  their unique needs.
                </p>
                <p className="text-secondary mb-4">
                  What started as a one-person operation has grown into a
                  dedicated team of designers, developers, and digital
                  strategists who share a common goal: delivering exceptional
                  web experiences that drive real business results for our
                  clients.
                </p>
                <p className="text-secondary">
                  Today, EDC Web Design works exclusively with small business
                  owners who need more than just a website—they need a growth
                  partner who understands their challenges and aspirations.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
                  alt="Team working together"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="py-24 bg-surface px-6 lg:px-8">
          <div className="mx-auto max-w-7xl text-center">
            <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
            <p className="text-secondary max-w-3xl mx-auto text-lg mb-16">
              To empower small businesses with beautiful, functional websites
              that work as hard as they do, enabling them to compete effectively
              in today&apos;s digital marketplace.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Customer-Focused",
                  description:
                    "We listen first and design second, ensuring your website meets your specific business goals and customer needs.",
                  icon: <Users className="w-8 h-8" />,
                },
                {
                  title: "Quality Craftsmanship",
                  description:
                    "We don't cut corners. Every website is built with clean code, attention to detail, and a focus on performance.",
                  icon: <Award className="w-8 h-8" />,
                },
                {
                  title: "Long-Term Partnership",
                  description:
                    "We're not just here for the launch. We build relationships with our clients to support their growth over time.",
                  icon: <Clock className="w-8 h-8" />,
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-background border border-border hover:border-accent transition-colors"
                >
                  <div className="mb-4 text-primary">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-secondary">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Meet the Founder */}
        <section className="py-24 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold mb-16 text-center">
              Meet the Founder
            </h2>

            <div className="grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-2">
                <div className="rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a"
                    alt="Emma Davis Cooper"
                    className="w-full object-cover"
                  />
                </div>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-2xl font-semibold mb-4">
                  Emma Davis Cooper
                </h3>
                <p className="text-secondary mb-4">
                  With over 12 years of experience in web development and
                  design, Emma combines technical expertise with a keen eye for
                  aesthetics. She holds a degree in Computer Science and has
                  worked with businesses ranging from local startups to national
                  brands.
                </p>
                <p className="text-secondary mb-4">
                  &quot;I believe that every small business deserves a website
                  that not only looks professional but also serves as a powerful
                  tool for growth. My goal is to bridge the gap between complex
                  technology and real business needs, making the web work for
                  you rather than the other way around.&quot;
                </p>
                <p className="text-secondary">
                  When not designing websites, Emma enjoys hiking, photography,
                  and volunteering with local business mentorship programs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-primary text-white px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold mb-16 text-center">
              Why Clients Choose EDC Web Design
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                "We exclusively focus on small businesses, so we understand your unique challenges and constraints.",
                "Our websites aren't just beautiful—they're strategically designed to convert visitors into customers.",
                "We provide clear, jargon-free communication throughout the entire process.",
                "Every website we build is optimized for speed, security, and search engines from day one.",
                "We believe in transparent pricing with no hidden fees or surprise costs.",
                "Our ongoing support ensures your website continues to perform and evolve with your business.",
              ].map((reason, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="mt-1 flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-primary font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <p className="text-white/90">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">
              Ready to work with us?
            </h2>
            <p className="text-secondary mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help your business stand out online
              with a website that truly works for you.
            </p>
            <button className="px-8 py-4 bg-accent text-primary rounded-full font-semibold hover:bg-accent/90 transition-colors">
              Schedule a Free Consultation
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
