import React from "react";
import BlogPost from "@/components/BlogPost";

const Blog = () => {
  const blogPosts = [
    {
      title:
        "Why Every Folsom Business Needs a Website (Even If You're Already Busy)",
      excerpt:
        "Folsom is full of hard-working business owners—but if you don't have a website, you're missing out. Here's why a great site builds trust, brings leads, and works while you sleep.",
      imageUrl:
        "https://www.edcwebdesign.com/assets/locations/california/sacramento.webp",
      date: "April 8, 2025",
      readTime: "6 min read",
      slug: "folsom-business-website",
    },

    {
      title:
        "Best Website Builder for Small Business (And Why Going Custom Might Be Better)",
      excerpt:
        "Looking at Wix, Squarespace, and more? Here's an honest breakdown of the top website builders for small business—and why a custom site might be the better investment.",
      imageUrl:
        "https://www.edcwebdesign.com/assets/locations/california/sacramento.webp",
      date: "April 9, 2025",
      readTime: "6 min read",
      slug: "best-website-builder-small-business/folsom",
    },
    {
      title:
        "Why Responsive Web Design Matters for Small Business (And How to Get It Right)",
      excerpt:
        "Mobile users now dominate the web—so if your site doesn't adapt, you're losing leads. Here's why responsive design matters and how we build it right.",
      imageUrl:
        "https://www.edcwebdesign.com/assets/locations/california/sacramento.webp",
      date: "April 10, 2025",
      readTime: "8 min read",
      slug: "responsive-web-design",
    },
    {
      title: "How to Make a Website for Free (And Why It Might Cost You Later)",
      excerpt:
        "Thinking about building your site with Wix or Canva? Here's what to know about free website builders—and when it's worth hiring a pro instead.",
      imageUrl:
        "https://www.edcwebdesign.com/assets/locations/california/sacramento.webp",
      date: "April 12, 2025",
      readTime: "7 min read",
      slug: "how-to-make-free-website",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-primary text-white py-24 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Insights & Updates
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Stay informed with the latest trends, tips, and strategies in web
              design, development, SEO, and digital marketing.
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <BlogPost
                  key={index}
                  title={post.title}
                  excerpt={post.excerpt}
                  imageUrl={post.imageUrl}
                  date={post.date}
                  readTime={post.readTime}
                  slug={post.slug}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 bg-surface">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Want to stay updated?</h2>
            <p className="mb-8 text-secondary">
              Subscribe to our newsletter to get the latest insights delivered
              straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 border border-border rounded-md w-full sm:w-auto"
              />
              <button className="bg-accent text-primary font-medium px-6 py-2 rounded-md hover:bg-accent/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Blog;
