import { Github, Linkedin, Mail, FileText } from "lucide-react"
import { NavLink } from "@/components/nav-link"
import { ProjectCard } from "@/components/project-card"
import { TerminalIntro } from "@/components/terminal-intro"
import { SJLogo } from "@/components/sj-logo"

export default function Home() {
  const projects = [
    {
      title: "Financial Portfolio Dashboard",
      description:
        "Real-time investment tracker integrating live market data. Optimized data fetching to reduce API latency by 40% using SWR caching.",
      techStack: ["React", "Node.js", "Yahoo Finance API", "Chart.js"],
      githubUrl: "https://github.com/sujankowshik/Yahoo-finance-dashboard",
      imageUrl: "/finance-dashboard-ui.png",
    },
    {
      title: "Full-Stack eCommerce Platform",
      description:
        "Secure marketplace with Stripe integration. Implemented inventory management system that improved order processing speed by 25%.",
      techStack: ["React", "Node.js", "Stripe/PayPal", "Firebase Auth", "JWT"],
      githubUrl: "https://github.com/sujankowshik/eCommerce-Store-with-Admin-Dashboard",
      imageUrl: "/ecommerce-platform-ui.jpg",
    },
    {
      title: "House Price Prediction",
      description:
        "Machine learning API for residential property values. Achieved a 92% prediction accuracy using optimized Gradient Boosting regression.",
      techStack: ["Flask", "Python", "Machine Learning"],
      githubUrl: "https://github.com/sujankowshik/house_price_predictor",
      imageUrl: "/machine-learning-chart.jpg",
    },
  ]

  const skills = [
    { category: "Programming Languages", items: ["JavaScript", "Python", "Java", "C", "SQL"] },
    {
      category: "Web Technologies",
      items: ["React", "Next.js", "Node.js", "Flask", "HTML", "CSS", "Tailwind CSS"],
    },
    { category: "Databases", items: ["MySQL", "Firebase"] },
    { category: "Tools & Concepts", items: ["Git", "REST APIs", "JWT Authentication", "Stripe/PayPal Integration"] },
  ]

  const achievements = [
    {
      title: "1st Place – Tejas 2K25 (Anurag University)",
      description: "Secured top position in a competitive technical event.",
    },
    {
      title: "2nd Place – Hackverse (Anurag University)",
      description: "Earned second place for an innovative solution among top-tier teams.",
    },
    {
      title: "Top Performer – Visionnova (Anurag University)",
      description: "Recognized as a top performer in a highly competitive event.",
    },
    {
      title: "Top 10 Finalist – Udhgam Hackathon (Woxsen University)",
      description: "Achieved top 10 for developing a creative and impactful project.",
    },
    {
      title: "Top 10 Finalist – Tech Hack (Anurag University)",
      description: "Secured top 10 position showcasing technical expertise and problem-solving skills.",
    },
    {
      title: "1st Place - Fintech Hackathon 2025",
      description: "Developed a blockchain-based micro-lending solution for underserved businesses.",
    },
    {
      title: "HackMIT 2024 - Top 10 Finalist",
      description: "Built a real-time financial dashboard used by over 200 beta testers during the competition.",
    },
    {
      title: "Dean's List - Computer Science",
      description: "Recognized for academic excellence across all semesters.",
    },
  ]

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        {/* Left Column: Fixed Header */}
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
          <div>
            <SJLogo className="mb-6 h-12 w-12 text-primary" />
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              <a href="/">Sujan Kowshik Jilla</a>
            </h1>
            <h2 className="mt-3 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              Software Engineer | Full-Stack & FinTech Enthusiast
            </h2>
            <p className="mt-2 text-base text-muted-foreground">Computer Science Undergraduate</p>
            <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
              I build scalable, secure web applications with a strong focus on full-stack development and financial
              technology.
            </p>

            <div className="mt-8">
              <a
                href="https://drive.google.com/file/d/1i9YVrU96WV_56XXSDEnWyPHwWB8eVbPm/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-md bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition-all hover:bg-primary/20 hover:scale-105 active:scale-95"
              >
                <FileText className="h-4 w-4" />
                Download Resume
              </a>
            </div>

            <nav className="nav hidden lg:block" aria-label="In-page jump links">
              <ul className="mt-16 w-max">
                <li>
                  <NavLink href="#about" label="About" />
                </li>
                <li>
                  <NavLink href="#skills" label="Skills" />
                </li>
                <li>
                  <NavLink href="#projects" label="Projects" />
                </li>
                <li>
                  <NavLink href="#achievements" label="Achievements" />
                </li>
                <li>
                  <NavLink href="#contact" label="Contact" />
                </li>
              </ul>
            </nav>
          </div>

          <ul className="ml-1 mt-8 flex items-center gap-5 relative z-30" aria-label="Social media">
            <li>
              <a
                className="block text-primary transition-all duration-200 hover:text-primary/80 hover:-translate-y-1"
                href="https://github.com/sujankowshik"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub (opens in a new tab)"
              >
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" strokeWidth={2} />
              </a>
            </li>
            <li>
              <a
                className="block text-primary transition-all duration-200 hover:text-primary/80 hover:-translate-y-1"
                href="https://www.linkedin.com/in/sujankowshikjilla/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn (opens in a new tab)"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" strokeWidth={2} />
              </a>
            </li>
            <li>
              <a
                className="block text-primary transition-all duration-200 hover:text-primary/80 hover:-translate-y-1"
                href="mailto:sujankowshikjilla@gmail.com"
                aria-label="Email Sujan"
              >
                <span className="sr-only">Email</span>
                <Mail className="h-6 w-6" strokeWidth={2} />
              </a>
            </li>
          </ul>
        </header>

        {/* Right Column: Scrollable Content */}
        <main className="pt-24 lg:w-1/2 lg:py-24">
          <div className="mb-16 lg:mb-24">
            <TerminalIntro />
          </div>

          <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">About</h2>
            </div>
            <div>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                I'm a Computer Science student at the intersection of Full-Stack development and FinTech. I build
                scalable systems that solve real problems—from real-time market trackers to high-conversion eCommerce
                platforms.
              </p>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                My approach combines clean UI design with robust backend architecture. I've delivered production-ready
                projects using React, Node.js, and Python, always focusing on performance and security.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently seeking internship opportunities to contribute to high-impact engineering teams and build the
                future of financial technology.
              </p>
            </div>
          </section>

          <section id="skills" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Skills">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">Skills</h2>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {skills.map((skillGroup) => (
                <div key={skillGroup.category}>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-3">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="text-sm text-muted-foreground transition-all duration-150 hover:text-primary hover:scale-110 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section
            id="projects"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="Selected projects"
          >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">Projects</h2>
            </div>
            <div className="group/list">
              {projects.map((project, index) => (
                <div key={index} className="mb-12 last:mb-0">
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </section>

          <section
            id="achievements"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="Achievements"
          >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">Achievements</h2>
            </div>
            <ol className="group/list">
              {achievements.map((achievement, index) => (
                <li key={index} className="mb-12 last:mb-0">
                  <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-accent" />
                    <div className="z-10 sm:col-span-8">
                      <h3 className="font-medium leading-tight text-foreground text-base">{achievement.title}</h3>
                      <p className="mt-2 text-sm leading-normal text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section id="contact" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Contact">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">Contact</h2>
            </div>
            <div className="rounded-lg border border-border bg-card p-8 transition-all hover:border-primary/50">
              <h3 className="text-xl font-bold text-foreground mb-4">Let's work together.</h3>
              <p className="text-muted-foreground mb-8">
                I'm currently looking for internship and junior software engineering opportunities. Whether you have a
                question or just want to say hi, my inbox is always open.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:sujankowshikjilla@gmail.com"
                  className="group relative inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  <span className="relative">
                    Say Hello
                    <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary-foreground transition-all duration-300 group-hover:w-full" />
                  </span>
                </a>
                <a
                  href="https://drive.google.com/file/d/1i9YVrU96WV_56XXSDEnWyPHwWB8eVbPm/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </section>

          <footer className="max-w-md pb-16 text-sm text-muted-foreground sm:pb-0">
            <div className="mb-4 flex items-center gap-3">
              <SJLogo className="h-8 w-8 text-primary" />
              <span className="font-mono text-xs tracking-wider text-primary">SJ</span>
            </div>
            <p>
              Built with{" "}
              <a
                href="https://nextjs.org"
                className="font-medium text-foreground hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Next.js
              </a>{" "}
              and{" "}
              <a
                href="https://tailwindcss.com"
                className="font-medium text-foreground hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tailwind CSS
              </a>
              . Designed for impact.
            </p>
          </footer>
        </main>
      </div>
    </div>
  )
}
