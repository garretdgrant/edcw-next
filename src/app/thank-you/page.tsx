import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, MessageSquare, Star } from "lucide-react";
import Link from "next/link";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center mb-6 p-3 rounded-full bg-accent/20">
              <CheckCircle className="w-8 h-8 text-accent" strokeWidth={2} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-6">
              Thanks for reaching out!
            </h1>
            <p className="text-lg text-secondary mb-10 max-w-2xl mx-auto">
              We&apos;ve received your message and will get back to you shortly
              — usually within one business day.
            </p>
            <div className="mt-12 mb-16">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                alt="Work desk with laptop"
                className="rounded-xl w-full max-w-2xl mx-auto shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* What Happens Next Section */}
        <section className="py-16 bg-secondary/5 px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-10 text-center">
              Here&apos;s what to expect:
            </h2>
            <div className="space-y-6">
              <div className="flex gap-5 items-start">
                <div className="bg-accent/10 p-3 rounded-full">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">
                    Initial Contact
                  </h3>
                  <p className="text-secondary">
                    We&apos;ll review your inquiry and reach out via email or
                    phone.
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <div className="bg-accent/10 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">
                    Quick Consultation
                  </h3>
                  <p className="text-secondary">
                    We may follow up with a few quick questions to understand
                    your goals.
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <div className="bg-accent/10 p-3 rounded-full">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">
                    Free Homepage Mockup
                  </h3>
                  <p className="text-secondary">
                    You&apos;ll get a free homepage mockup to visualize your new
                    site.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="py-16 md:py-20 px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">
              In the meantime, check out our work:
            </h2>

            <div className="mb-10 p-8 rounded-xl bg-secondary/5 border border-border">
              <div className="flex justify-center mb-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      className="w-5 h-5 fill-accent text-accent"
                    />
                  ))}
                </div>
              </div>
              <blockquote className="text-lg text-secondary italic mb-4">
                &quot;EDC Web Design transformed our online presence. Their team
                was responsive, professional, and delivered a website that
                exceeded our expectations.&quot;
              </blockquote>
              <p className="font-medium">
                — Sarah Johnson, Folsom Small Business Owner
              </p>
            </div>

            <div className="flex justify-center">
              <Link href="/portfolio">
                <Button size="lg" className="font-medium bg-accent">
                  See Our Work
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Friendly Footer Message */}
        <section className="py-10 bg-primary text-white px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl md:text-2xl font-medium">
              We&apos;re excited to help your business grow online!
            </h3>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ThankYou;
