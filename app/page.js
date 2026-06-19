import Sidebar from "./components/Sidebar";
import AnimatedText from "./components/AnimatedText";
import ProjectGallery from "./components/ProjectGallery";
import {
  personal,
  stats,
  heroDescription,
  heroTags,
  aboutParagraphs,
  experience,
  skills,
  projects,
  education,
  certification,
  timeline,
  lookingFor,
} from "./data/portfolio";

const skillStyles = {
  violet: {
    border: "border-violet-500/20 hover:border-violet-400/40",
    heading: "text-violet-400",
    tag: "border-violet-500/20 bg-violet-500/10 text-violet-200 hover:border-violet-400/50 hover:bg-violet-500/20",
  },
  cyan: {
    border: "border-cyan-500/20 hover:border-cyan-400/40",
    heading: "text-cyan-400",
    tag: "border-cyan-500/20 bg-cyan-500/10 text-cyan-200 hover:border-cyan-400/50 hover:bg-cyan-500/20",
  },
  amber: {
    border: "border-amber-500/20 hover:border-amber-400/40",
    heading: "text-amber-400",
    tag: "border-amber-500/20 bg-amber-500/10 text-amber-200 hover:border-amber-400/50 hover:bg-amber-500/20",
  },
  rose: {
    border: "border-rose-500/20 hover:border-rose-400/40",
    heading: "text-rose-400",
    tag: "border-rose-500/20 bg-rose-500/10 text-rose-200 hover:border-rose-400/50 hover:bg-rose-500/20",
  },
};

function SectionHeading({ children, subtitle }) {
  return (
    <div className="mb-5">
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
        <span className="gradient-text">{children}</span>
      </h2>
      {subtitle && <p className="mt-1.5 text-sm text-zinc-500">{subtitle}</p>}
    </div>
  );
}

const sectionClass = "scroll-mt-20 border-t border-white/5 px-6 py-12 lg:px-16 xl:px-24";

export default function Home() {
  return (
    <div className="min-h-screen bg-mesh text-zinc-100">
      <Sidebar />

      <main className="lg:ml-[280px]">
        {/* Hero */}
        <section id="home" className="scroll-mt-20 px-6 pb-10 pt-20 lg:px-16 lg:pt-14 xl:px-24">
          <div className="mx-auto max-w-4xl">
            <h1 className="animate-fade-in-up text-4xl font-bold tracking-tight text-white opacity-0 sm:text-5xl lg:text-6xl">
              Hi, I&apos;m{" "}
              <span className="gradient-text">{personal.name}</span> 👋
            </h1>

            <div className="opacity-0 animate-fade-in-up stagger-2">
              <AnimatedText />
            </div>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-400 opacity-0 animate-fade-in-up stagger-3 sm:text-lg">
              {heroDescription}
            </p>

            <div className="mt-4 flex flex-wrap gap-2 opacity-0 animate-fade-in-up stagger-3">
              {heroTags.map((tag) => (
                <span
                  key={tag.label}
                  className={`rounded-full border px-3 py-1 text-xs font-medium ${tag.color}`}
                >
                  {tag.label}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3 opacity-0 animate-fade-in-up stagger-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-2.5 text-sm font-medium text-white shadow-lg shadow-violet-500/20 transition-all duration-200 hover:from-violet-500 hover:to-fuchsia-500"
              >
                View Resume
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center justify-center rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-6 py-2.5 text-sm font-medium text-cyan-300 transition-all duration-200 hover:border-cyan-400/50 hover:bg-cyan-500/20"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-4 border-t border-white/5 pt-8 opacity-0 animate-fade-in-up stagger-5">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className={`text-3xl font-bold sm:text-4xl ${stat.color}`}>
                    {stat.value}
                  </p>
                  <p className="mt-0.5 text-xs text-zinc-500 sm:text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className={sectionClass}>
          <div className="mx-auto max-w-4xl">
            <SectionHeading subtitle="My story">
              About Me
            </SectionHeading>
            <div className="space-y-4 text-base leading-relaxed text-zinc-400">
              {aboutParagraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-violet-500/20 bg-violet-500/5 p-5">
                <h3 className="text-sm font-semibold text-violet-300">Education</h3>
                <ul className="mt-3 space-y-3">
                  {education.map((item) => (
                    <li key={item.degree}>
                      <p className="text-sm font-medium text-zinc-300">{item.degree}</p>
                      <p className="text-xs text-zinc-500">
                        {item.school} · {item.year}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-5">
                <h3 className="text-sm font-semibold text-cyan-300">
                  Certifications & Training
                </h3>
                <p className="mt-3 text-sm font-medium text-zinc-300">{certification.title}</p>
                <p className="text-xs text-zinc-500">Completed: {certification.completed}</p>
                <ul className="mt-3 space-y-1">
                  {certification.topics.map((topic) => (
                    <li key={topic} className="flex items-center gap-2 text-xs text-zinc-400">
                      <span className="size-1 rounded-full bg-cyan-500" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className={sectionClass}>
          <div className="mx-auto max-w-4xl">
            <SectionHeading subtitle="Building real-world products since 2024.">
              Professional Experience
            </SectionHeading>

            <div className="rounded-xl border border-amber-500/20 bg-gradient-to-br from-amber-500/5 to-zinc-950 p-5 sm:p-6">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {experience.role}{" "}
                    <span className="text-amber-400">| {experience.company}</span>
                  </h3>
                  <p className="mt-0.5 text-sm text-zinc-500">{experience.period}</p>
                </div>
                <span className="mt-2 inline-flex w-fit rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400 sm:mt-0">
                  Current Role
                </span>
              </div>
              <ul className="mt-4 space-y-2">
                {experience.highlights.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-zinc-400">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-amber-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 rounded-xl border border-fuchsia-500/20 bg-fuchsia-500/5 p-5">
              <h3 className="text-sm font-semibold text-fuchsia-300">
                What I&apos;m Looking For
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{lookingFor}</p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className={sectionClass}>
          <div className="mx-auto max-w-4xl">
            <SectionHeading subtitle="Featured work — swipe through multiple screenshots per project.">
              Projects
            </SectionHeading>

            <div className="space-y-5">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className={`group overflow-hidden rounded-xl border bg-zinc-950/40 transition-all duration-300 ${project.accent}`}
                >
                  <ProjectGallery
                    title={project.title}
                    images={project.images}
                    gradient={project.gradient}
                  />
                  <div className="flex flex-col gap-2 p-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex-1">
                      <h3 className="text-base font-semibold text-white">
                        {project.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-zinc-500">
                        {project.description}
                      </p>
                      <p className="mt-2 text-xs text-zinc-600">{project.tech}</p>
                    </div>
                    <span
                      className={`shrink-0 text-[10px] font-semibold tracking-widest ${project.categoryColor}`}
                    >
                      {project.category}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Stack */}
        <section id="stack" className={sectionClass}>
          <div className="mx-auto max-w-4xl">
            <SectionHeading subtitle="Software and technologies I use regularly.">
              Stack
            </SectionHeading>

            <div className="grid gap-4 sm:grid-cols-2">
              {Object.entries(skills).map(([category, { color, items }]) => {
                const style = skillStyles[color];
                return (
                  <div
                    key={category}
                    className={`rounded-xl border bg-zinc-950/30 p-5 transition-colors duration-200 ${style.border}`}
                  >
                    <h3 className={`text-xs font-semibold tracking-widest uppercase ${style.heading}`}>
                      {category}
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {items.map((skill) => (
                        <span
                          key={skill}
                          className={`rounded-md border px-2.5 py-1 text-sm transition-colors ${style.tag}`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section id="timeline" className={sectionClass}>
          <div className="mx-auto max-w-4xl">
            <SectionHeading subtitle="BCA → MCA → learning → building. Every step counts.">
              Timeline
            </SectionHeading>

            <div className="relative">
              <div className="absolute top-0 bottom-0 left-[7px] w-px bg-gradient-to-b from-violet-500/50 via-cyan-500/50 to-fuchsia-500/50 sm:left-[9px]" />
              <div className="space-y-5">
                {timeline.map((item, i) => (
                  <div key={i} className="relative flex gap-5 pl-8 sm:pl-10">
                    <div
                      className={`absolute left-0 top-1.5 size-[15px] rounded-full ring-4 ring-zinc-950 sm:size-[19px] ${item.color}`}
                    />
                    <div>
                      <p className="text-sm font-semibold text-white">{item.year}</p>
                      <p className="mt-0.5 text-sm text-zinc-400">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className={sectionClass}>
          <div className="mx-auto max-w-4xl">
            <SectionHeading subtitle="Let's connect and build something meaningful.">
              Contact
            </SectionHeading>

            <p className="mb-6 max-w-xl text-base text-zinc-400">{personal.tagline}</p>

            <div className="grid gap-3 sm:grid-cols-3">
              <a
                href={`mailto:${personal.email}`}
                className="group rounded-xl border border-rose-500/20 bg-rose-500/5 p-5 transition-all duration-200 hover:border-rose-400/40 hover:bg-rose-500/10"
              >
                <p className="text-xs font-semibold tracking-widest text-rose-400 uppercase">Email</p>
                <p className="mt-1.5 text-sm text-zinc-300 transition-colors group-hover:text-white">
                  {personal.email}
                </p>
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-sky-500/20 bg-sky-500/5 p-5 transition-all duration-200 hover:border-sky-400/40 hover:bg-sky-500/10"
              >
                <p className="text-xs font-semibold tracking-widest text-sky-400 uppercase">LinkedIn</p>
                <p className="mt-1.5 text-sm text-zinc-300 transition-colors group-hover:text-white">
                  shakshi-sharma
                </p>
              </a>
              <div className="rounded-xl border border-violet-500/20 bg-violet-500/5 p-5">
                <p className="text-xs font-semibold tracking-widest text-violet-400 uppercase">
                  Location
                </p>
                <p className="mt-1.5 text-sm text-zinc-300">{personal.location}</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/5 px-6 py-6 text-center lg:px-16 xl:px-24">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} {personal.name}. Built with Next.js & Tailwind CSS.
          </p>
        </footer>
      </main>
    </div>
  );
}
