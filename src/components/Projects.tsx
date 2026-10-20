import { projects, type Project } from "../data/site"
import { BrandMark } from "./BrandMark"
import { StoreLinks } from "./StoreLinks"
import { Reveal } from "./Reveal"
import { SectionHeading } from "./SectionHeading"

const tones: Record<Project["tone"], string> = {
  vecto: "from-cyan-400/25 via-teal-950 to-zinc-950",
  shanti: "from-amber-300/20 via-orange-950 to-zinc-950",
  jhallak: "from-fuchsia-400/20 via-violet-950 to-zinc-950",
  studio: "from-sky-400/20 via-slate-950 to-zinc-950",
  vama: "from-rose-400/25 via-orange-950 to-zinc-950",
  adda: "from-indigo-400/25 via-blue-950 to-zinc-950",
}

export function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 py-20 sm:py-28"
      aria-labelledby="projects-title"
    >
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            id="projects-title"
            eyebrow="03 / Projects"
            title="Selected work."
            description="Four products I owned or helped take from idea to a shipped experience."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.name} delay={index * 70}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-white/8 bg-elevated transition hover:border-accent/30">
      <div
        className={`relative flex h-28 shrink-0 items-end overflow-hidden bg-linear-to-br p-5 sm:h-32 ${tones[project.tone]}`}
      >
        <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(115deg,transparent_40%,rgb(255_255_255_/_0.08)_50%,transparent_60%)]" />
        <div className="relative flex w-full items-end justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            {project.logo ? (
              <BrandMark
                name={project.name}
                initials={project.name.slice(0, 2).toUpperCase()}
                tone={project.tone}
                logo={project.logo}
                size="lg"
              />
            ) : null}
            <p className="truncate font-serif text-3xl italic text-white/90">
              {project.name}
            </p>
          </div>
          <StoreLinks
            name={project.name}
            website={project.website}
            playStore={project.playStore}
            appStore={project.appStore}
            compact
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold text-zinc-50">{project.name}</h3>
        <p className="mt-1 font-mono text-[11px] tracking-wide text-accent">
          {project.role}
        </p>
        <p className="mt-3 text-sm leading-6 text-zinc-400">
          {project.description}
        </p>

        <div className="mt-4">
          <p className="font-mono text-[11px] tracking-[0.16em] text-zinc-500 uppercase">
            What I built
          </p>
          <ul className="mt-2 space-y-2">
            {project.contributions.map((item) => (
              <li
                key={item}
                className="relative pl-4 text-sm leading-6 text-zinc-400 before:absolute before:left-0 before:top-[0.65rem] before:h-1 before:w-1 before:rounded-full before:bg-accent/80"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-white/8 bg-white/3 px-2.5 py-1 font-mono text-[11px] tracking-wide text-zinc-400"
            >
              {tag}
            </li>
          ))}
        </ul>

        {project.note ? (
          <p className="mt-auto pt-5 text-xs leading-5 text-zinc-500">
            {project.note}
          </p>
        ) : null}
      </div>
    </article>
  )
}
