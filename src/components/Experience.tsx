import { experience } from "../data/site"
import { ExternalIcon } from "./icons"
import { Reveal } from "./Reveal"
import { SectionHeading } from "./SectionHeading"

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 py-20 sm:py-28"
      aria-labelledby="experience-title"
    >
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            id="experience-title"
            eyebrow="02 / Experience"
            title="Where I’ve been building."
            description="A compact look at the roles, products, and systems I’ve owned."
          />
        </Reveal>

        <ol className="relative mt-12 border-l border-white/10 ml-1 space-y-12">
          {experience.map((item, index) => (
            <li key={item.company} className="relative pl-8">
              <span className="absolute top-1.5 -left-[5px] h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_0_4px_rgb(9_9_11)]" />
              <Reveal delay={index * 70}>
                <article>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                    <div>
                      <h3 className="text-xl font-semibold text-zinc-50">
                        {item.company}
                        {item.website ? (
                          <a
                            href={item.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-2 inline-flex align-middle text-zinc-500 transition hover:text-accent"
                            aria-label={`${item.company} website`}
                          >
                            <ExternalIcon className="h-3.5 w-3.5" />
                          </a>
                        ) : null}
                      </h3>
                      <p className="mt-1 text-sm text-zinc-500">
                        {item.location}
                      </p>
                    </div>
                    <p className="font-mono text-xs text-zinc-500">{item.dates}</p>
                  </div>

                  <div className="mt-5 space-y-8">
                    {item.roles.map((role) => (
                      <div key={role.title}>
                        {item.roles.length > 1 ? (
                          <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
                            <p className="text-sm font-medium text-accent">{role.title}</p>
                            <p className="font-mono text-xs text-zinc-500">{role.dates}</p>
                          </div>
                        ) : (
                          <p className="mb-3 text-sm font-medium text-accent">{role.title}</p>
                        )}
                        <ul className="space-y-2.5">
                          {role.bullets.map((bullet) => (
                            <li
                              key={bullet}
                              className="relative pl-4 text-sm leading-7 text-zinc-400 before:absolute before:left-0 before:top-[0.7rem] before:h-1 before:w-1 before:rounded-full before:bg-zinc-600"
                            >
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
