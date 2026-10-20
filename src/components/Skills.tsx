import { skills } from "../data/site"
import { Reveal } from "./Reveal"
import { SectionHeading } from "./SectionHeading"
import { SkillIcon } from "./SkillIcon"

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-20 sm:py-28" aria-labelledby="skills-title">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            id="skills-title"
            eyebrow="05 / Skills"
            title="Tools I work with."
          />
        </Reveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {skills.map((group, index) => (
            <Reveal key={group.category} delay={index * 50}>
              <div>
                <h3 className="font-mono text-xs tracking-[0.18em] text-zinc-500 uppercase">
                  {group.category}
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-elevated px-3 py-1.5 text-sm text-zinc-300"
                    >
                      <SkillIcon name={item} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
