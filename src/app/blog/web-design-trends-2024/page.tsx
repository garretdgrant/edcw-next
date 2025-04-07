import React from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const WebDesignTrends = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-primary/95 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-4">
              <Link
                href="/blog"
                className="text-white/80 hover:text-white flex items-center gap-2 mb-6 inline-block"
              >
                <ArrowLeft size={16} />
                Back to Blog
              </Link>
              <div className="text-white/70 mb-3">
                May 28, 2024 • 12 min read • By Samantha Chen
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                How to Improve Your Website&apos;s Core Web Vitals
              </h1>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <div className="w-full max-w-5xl mx-auto -mt-10 px-6">
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
              alt="Core Web Vitals"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>

        {/* Article Content */}
        <article className="py-16 px-6">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <p className="lead text-xl text-secondary mb-8">
              Core Web Vitals have become a critical component of Google&apos;s
              ranking algorithm, directly impacting your website&apos;s
              visibility in search results. Understanding and optimizing these
              metrics can significantly improve both user experience and SEO
              performance.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">
              What Are Core Web Vitals?
            </h2>
            <p>
              Core Web Vitals are a set of specific factors that Google
              considers important in a webpage&apos;s overall user experience.
              They measure aspects of web usability such as load time,
              interactivity, and visual stability. The three main Core Web
              Vitals metrics are:
            </p>

            <ul className="list-disc pl-6 mt-4 mb-6">
              <li className="mb-2">
                <strong>Largest Contentful Paint (LCP):</strong> Measures
                loading performance. To provide a good user experience, LCP
                should occur within 2.5 seconds of when the page first starts
                loading.
              </li>
              <li className="mb-2">
                <strong>First Input Delay (FID):</strong> Measures
                interactivity. Pages should have a FID of less than 100
                milliseconds.
              </li>
              <li className="mb-2">
                <strong>Cumulative Layout Shift (CLS):</strong> Measures visual
                stability. Pages should maintain a CLS of less than 0.1.
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">
              Strategies to Improve LCP (Largest Contentful Paint)
            </h2>

            <h3 className="text-xl font-bold mt-8 mb-4">
              1. Optimize Server Response Times
            </h3>
            <p>
              The time it takes for your server to respond to a request
              significantly impacts LCP. Consider these improvements:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-6">
              <li>Upgrade your web hosting to a more powerful plan</li>
              <li>Implement server-side caching</li>
              <li>
                Use a Content Delivery Network (CDN) to serve content from
                locations closer to users
              </li>
              <li>Optimize your database queries and server-side code</li>
            </ul>

            <h3 className="text-xl font-bold mt-8 mb-4">
              2. Eliminate Render-Blocking Resources
            </h3>
            <p>
              JavaScript and CSS files that block the rendering of a page can
              significantly delay LCP. To address this:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-6">
              <li>Defer non-critical JavaScript</li>
              <li>Inline critical CSS and defer non-critical styles</li>
              <li>Remove unused CSS and JavaScript</li>
              <li>Minify and compress code files</li>
            </ul>

            <h3 className="text-xl font-bold mt-8 mb-4">
              3. Optimize and Compress Images
            </h3>
            <p>
              Images often represent the largest contentful element on a page.
              Improve their loading time by:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-6">
              <li>Compressing images without significant quality loss</li>
              <li>Converting images to next-gen formats like WebP or AVIF</li>
              <li>Implementing responsive images with appropriate sizes</li>
              <li>Using image CDNs for optimization and faster delivery</li>
              <li>Lazy-loading images that appear below the fold</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">
              Strategies to Improve FID (First Input Delay)
            </h2>

            <h3 className="text-xl font-bold mt-8 mb-4">
              1. Minimize JavaScript Execution Time
            </h3>
            <p>
              Heavy JavaScript processing can block the main thread and cause
              input delay:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-6">
              <li>Break up long tasks into smaller, asynchronous tasks</li>
              <li>Remove unused JavaScript and minimize polyfills</li>
              <li>Defer or lazy-load non-critical scripts</li>
              <li>Use web workers for computationally intensive tasks</li>
            </ul>

            <h3 className="text-xl font-bold mt-8 mb-4">
              2. Optimize Third-Party Impact
            </h3>
            <p>
              Third-party scripts, like analytics and ads, often contribute
              significantly to FID issues:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-6">
              <li>
                Audit and limit third-party scripts to only those providing
                significant value
              </li>
              <li>Load third-party resources after critical page content</li>
              <li>Consider self-hosting third-party scripts when possible</li>
              <li>Use iframe for non-critical third-party content</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">
              Strategies to Improve CLS (Cumulative Layout Shift)
            </h2>

            <h3 className="text-xl font-bold mt-8 mb-4">
              1. Specify Image and Video Dimensions
            </h3>
            <p>
              Always include width and height attributes for images and video
              elements. This allows the browser to allocate the right amount of
              space while the media is loading, preventing layout shifts when
              the content finally appears.
            </p>

            <h3 className="text-xl font-bold mt-8 mb-4">
              2. Be Careful with Dynamically Injected Content
            </h3>
            <p>
              Content that&apos;s added to the page after the initial load (like
              ads, embeds, or AJAX-loaded content) is a common cause of layout
              shifts:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-6">
              <li>Reserve space for ads and embeds</li>
              <li>Avoid inserting new content above existing content</li>
              <li>
                Transform animations using CSS properties that don&apos;t
                trigger layout changes
              </li>
            </ul>

            <h3 className="text-xl font-bold mt-8 mb-4">
              3. Use Font Display Strategies
            </h3>
            <p>
              Custom fonts can cause layout shifts when they finish loading and
              replace the fallback font:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-6">
              <li>Use `font-display: optional` or `font-display: swap`</li>
              <li>Preload critical fonts</li>
              <li>
                Choose fallback fonts that closely match the metrics of your
                custom fonts
              </li>
              <li>Consider using the Font Loading API for more control</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">
              Tools for Measuring Core Web Vitals
            </h2>
            <p>
              Several tools can help you measure and monitor your Core Web
              Vitals performance:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-6">
              <li>
                <strong>Google PageSpeed Insights:</strong> Provides lab and
                field data for your pages, along with specific recommendations
                for improvement
              </li>
              <li>
                <strong>Google Search Console:</strong> Offers a dedicated Core
                Web Vitals report for your entire website
              </li>
              <li>
                <strong>Lighthouse:</strong> Available in Chrome DevTools, as a
                Chrome extension, or as a Node module for automated testing
              </li>
              <li>
                <strong>Chrome User Experience Report (CrUX):</strong> Provides
                real-user measurement data across millions of websites
              </li>
              <li>
                <strong>Web Vitals JavaScript library:</strong> For implementing
                custom performance monitoring
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">Conclusion</h2>
            <p>
              Improving Core Web Vitals requires a methodical approach to
              addressing speed, interactivity, and visual stability issues.
              While the technical optimizations can be complex, the benefits are
              substantial: better search rankings, higher user engagement, and
              improved conversion rates.
            </p>
            <p>
              Remember that Core Web Vitals optimization is not a one-time task
              but an ongoing process. Regular monitoring and refinement are
              essential as your website evolves and as Google continues to
              update its performance metrics and algorithms.
            </p>

            <p className="mt-10 pt-8 border-t border-border text-secondary">
              Need help optimizing your website&apos;s Core Web Vitals? Our team
              of performance experts at EDC Web Design can audit your site and
              implement targeted improvements.
              <Link href="/contact" className="text-primary font-medium ml-1">
                Contact us today
              </Link>{" "}
              to learn how we can help boost your site&apos;s performance and
              search visibility.
            </p>
          </div>
        </article>

        {/* Related Posts */}
        <section className="py-16 px-6 bg-surface">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Link href="/blog/web-design-trends-2024" className="block group">
                <div className="bg-background border border-border rounded-lg overflow-hidden h-full hover:shadow-md transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1481487196290-c152efe083f5"
                      alt="Web Design Trends"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-secondary text-sm mb-2">June 15, 2024</p>
                    <h3 className="text-xl font-bold mb-3">
                      10 Web Design Trends to Watch in 2024
                    </h3>
                    <p className="text-secondary">
                      Discover the latest design trends that are shaping the web
                      landscape this year, from glassmorphism to variable fonts
                      and micro-interactions.
                    </p>
                  </div>
                </div>
              </Link>

              <Link
                href="/blog/small-business-seo-guide"
                className="block group"
              >
                <div className="bg-background border border-border rounded-lg overflow-hidden h-full hover:shadow-md transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a"
                      alt="SEO Guide"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-secondary text-sm mb-2">May 12, 2024</p>
                    <h3 className="text-xl font-bold mb-3">
                      The Small Business Guide to SEO in 2024
                    </h3>
                    <p className="text-secondary">
                      A comprehensive guide for small business owners looking to
                      improve their search engine visibility without breaking
                      the bank.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Is your website performing at its best?
            </h2>
            <p className="mb-8 text-secondary max-w-2xl mx-auto">
              Our team can help you optimize your site&apos;s Core Web Vitals
              and overall performance for better search rankings and user
              experience.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-accent text-primary font-medium px-8 py-3 rounded-md hover:bg-accent/90 transition-colors"
            >
              Get a Performance Audit
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default WebDesignTrends;
