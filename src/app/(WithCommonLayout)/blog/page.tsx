import { Calendar, ArrowRight } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React Hooks",
      excerpt:
        "Learn how to use React Hooks to simplify your component code and manage state more effectively.",
      date: "April 15, 2023",
      category: "React",
      image: "/placeholder.svg",
      slug: "/blog/getting-started-with-react-hooks",
    },
    {
      id: 2,
      title: "Building Responsive UIs with Tailwind CSS",
      excerpt:
        "Discover how Tailwind CSS can help you create beautiful, responsive user interfaces without writing custom CSS.",
      date: "March 22, 2023",
      category: "CSS",
      image: "/placeholder.svg",
      slug: "/blog/building-responsive-uis-with-tailwind-css",
    },
    {
      id: 3,
      title: "Introduction to TypeScript for JavaScript Developers",
      excerpt:
        "A beginner-friendly guide to TypeScript and how it can improve your JavaScript development experience.",
      date: "February 10, 2023",
      category: "TypeScript",
      image: "/placeholder.svg",
      slug: "/blog/introduction-to-typescript",
    },
    {
      id: 4,
      title: "Creating Animations with Framer Motion",
      excerpt:
        "Learn how to add beautiful animations to your React applications using Framer Motion.",
      date: "January 5, 2023",
      category: "Animation",
      image: "/placeholder.svg",
      slug: "/blog/creating-animations-with-framer-motion",
    },
  ];

  // Categories
  const categories = [
    "All",
    "React",
    "CSS",
    "TypeScript",
    "Animation",
    "JavaScript",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-portfolio-background via-portfolio-background to-[#0a0a35]/40 py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="gradient-text mb-6">Blog</h1>
              <p className="text-xl text-portfolio-text-secondary">
                Thoughts, ideas, and guides on web development and technology.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row gap-10">
              <div className="lg:w-3/4">
                {/* Featured Post */}
                <div className="mb-16 animate-fade-in">
                  <div className="relative h-72 rounded-xl overflow-hidden mb-6">
                    <Image
                      fill
                      src={blogPosts[0].image}
                      alt={blogPosts[0].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-portfolio-background to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <span className="bg-portfolio-primary text-white text-sm px-3 py-1 rounded-full mb-3 inline-block">
                        {blogPosts[0].category}
                      </span>
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        {blogPosts[0].title}
                      </h2>
                      <div className="flex items-center text-portfolio-text-secondary text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{blogPosts[0].date}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-portfolio-text-secondary mb-4">
                    {blogPosts[0].excerpt}
                  </p>
                  <Link
                    href={blogPosts[0].slug}
                    className="text-portfolio-primary hover:text-portfolio-secondary transition-colors duration-200 inline-flex items-center"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>

                {/* Blog Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {blogPosts.slice(1).map((post, index) => (
                    <div
                      key={post.id}
                      className="bg-portfolio-background/30 border border-portfolio-primary/10 rounded-xl overflow-hidden card-hover animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="h-48 overflow-hidden">
                        <Image
                          fill
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="bg-portfolio-primary/10 text-portfolio-primary text-xs px-3 py-1 rounded-full">
                            {post.category}
                          </span>
                          <div className="flex items-center text-portfolio-text-secondary text-xs">
                            <Calendar className="h-3 w-3 mr-1" />
                            <span>{post.date}</span>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                        <p className="text-portfolio-text-secondary text-sm mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <Link
                          href={post.slug}
                          className="text-portfolio-primary hover:text-portfolio-secondary transition-colors duration-200 inline-flex items-center text-sm"
                        >
                          Read More
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:w-1/4 animate-fade-in-right">
                <div className="sticky top-24">
                  {/* Categories */}
                  <div className="bg-portfolio-background/30 border border-portfolio-primary/10 rounded-xl p-6 mb-8">
                    <h3 className="text-xl font-bold mb-4">Categories</h3>
                    <div className="space-y-2">
                      {categories.map((category, index) => (
                        <button
                          key={index}
                          className="block w-full text-left px-4 py-2 rounded-md hover:bg-portfolio-primary/10 transition-colors duration-200 text-portfolio-text-secondary hover:text-portfolio-primary"
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Recent Posts */}
                  <div className="bg-portfolio-background/30 border border-portfolio-primary/10 rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
                    <div className="space-y-4">
                      {blogPosts.slice(0, 3).map((post, index) => (
                        <div key={index} className="flex gap-3">
                          <div className="w-16 h-16 flex-shrink-0 rounded overflow-hidden">
                            <Image
                              fill
                              src={post.image}
                              alt={post.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium text-sm line-clamp-2 mb-1">
                              {post.title}
                            </h4>
                            <div className="flex items-center text-portfolio-text-secondary text-xs">
                              <Calendar className="h-3 w-3 mr-1" />
                              <span>{post.date}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Blog;
