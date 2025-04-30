import React from "react";

const About = () => {
  // Timeline data
  const timeline = [
    {
      year: "2023 - Present",
      title: "Senior Frontend Developer",
      company: "Tech Company",
      description:
        "Leading development of user interfaces and implementing advanced features.",
    },
    {
      year: "2020 - 2023",
      title: "Frontend Developer",
      company: "Digital Agency",
      description:
        "Created responsive websites and web applications for various clients.",
    },
    {
      year: "2018 - 2020",
      title: "Junior Developer",
      company: "Startup",
      description:
        "Started my career working on web projects and learning modern technologies.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-portfolio-background via-portfolio-background to-[#0a0a35]/40 py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="gradient-text mb-6">About Me</h1>
              <p className="text-xl text-portfolio-text-secondary">
                My journey, experience, and passion for web development.
              </p>
            </div>
          </div>
        </section>

        {/* About Content */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="animate-fade-in">
                <h2 className="text-2xl font-bold mb-6">My Story</h2>
                <div className="space-y-4">
                  <p>
                    Hello! I&apos;m Your Name, a passionate full-stack developer
                    with a love for creating beautiful, functional, and
                    user-friendly websites and applications.
                  </p>
                  <p>
                    My journey in web development began in 2018 when I first
                    discovered HTML and CSS. I was fascinated by how a few lines
                    of code could create something visual and interactive that
                    anyone around the world could access.
                  </p>
                  <p>
                    Since then, I&apos;ve continuously expanded my knowledge and
                    skills, learning new technologies and frameworks like React,
                    Node.js, and TypeScript. I&apos;ve worked on projects
                    ranging from simple landing pages to complex web
                    applications.
                  </p>
                  <p>
                    When I&apos;m not coding, I enjoy staying up-to-date with
                    the latest tech trends, contributing to open-source
                    projects, and sharing my knowledge through blog posts.
                  </p>
                </div>
              </div>

              {/* Timeline */}
              <div className="animate-fade-in">
                <h2 className="text-2xl font-bold mb-6">Experience</h2>
                <div className="space-y-8">
                  {timeline.map((item, index) => (
                    <div
                      key={index}
                      className="relative pl-8 border-l border-portfolio-primary/30"
                    >
                      <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-portfolio-primary"></div>
                      <span className="text-portfolio-primary text-sm">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-bold mt-1">{item.title}</h3>
                      <p className="text-portfolio-secondary">{item.company}</p>
                      <p className="text-portfolio-text-secondary mt-2">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Education & Certifications */}
            <div className="mt-16 animate-fade-in">
              <h2 className="text-2xl font-bold mb-6">
                Education & Certifications
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-portfolio-background/30 border border-portfolio-primary/10 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-2">
                    Bachelor&apos;s Degree in Computer Science
                  </h3>
                  <p className="text-portfolio-secondary">University Name</p>
                  <p className="text-portfolio-text-secondary mt-2">
                    2015 - 2019
                  </p>
                </div>

                <div className="bg-portfolio-background/30 border border-portfolio-primary/10 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-2">
                    Web Development Bootcamp
                  </h3>
                  <p className="text-portfolio-secondary">Bootcamp Name</p>
                  <p className="text-portfolio-text-secondary mt-2">2020</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
