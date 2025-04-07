import React from "react";
import BlogPost from "@/components/BlogPost";

const Blog = () => {
  const blogPosts = [
    {
      title: "10 Web Design Trends to Watch in 2024",
      excerpt:
        "Discover the latest design trends that are shaping the web landscape this year, from glassmorphism to variable fonts and micro-interactions.",
      imageUrl: "https://images.unsplash.com/photo-1481487196290-c152efe083f5",
      date: "June 15, 2024",
      readTime: "8 min read",
      slug: "web-design-trends-2024",
    },
    // {
    //   title: "How to Improve Your Website's Core Web Vitals",
    //   excerpt:
    //     "Learn practical strategies to enhance your website's performance metrics and provide a better user experience that Google will reward.",
    //   imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    //   date: "May 28, 2024",
    //   readTime: "12 min read",
    // },
    // {
    //   title: "The Small Business Guide to SEO in 2024",
    //   excerpt:
    //     "A comprehensive guide for small business owners looking to improve their search engine visibility without breaking the bank.",
    //   imageUrl: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a",
    //   date: "May 12, 2024",
    //   readTime: "15 min read",
    // },
    // {
    //   title: "Creating Accessible Websites: A Practical Guide",
    //   excerpt:
    //     "Why accessibility matters and how to implement inclusive design principles that benefit all users while meeting legal requirements.",
    //   imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    //   date: "April 25, 2024",
    //   readTime: "10 min read",
    // },
    // {
    //   title: "The Psychology Behind Effective Landing Pages",
    //   excerpt:
    //     "Understanding user behavior and implementing psychological principles to create landing pages that convert visitors into customers.",
    //   imageUrl: "https://images.unsplash.com/photo-1553484771-371a605b060b",
    //   date: "April 10, 2024",
    //   readTime: "9 min read",
    // },
    // {
    //   title: "Why Website Maintenance is Crucial for Your Business",
    //   excerpt:
    //     "Understanding the importance of regular website maintenance and how it affects security, performance, and user experience.",
    //   imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998",
    //   date: "March 22, 2024",
    //   readTime: "7 min read",
    // },
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
