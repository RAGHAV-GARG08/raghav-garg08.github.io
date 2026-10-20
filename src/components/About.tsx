import { about } from "../data/site"
import { Reveal } from "./Reveal"
import { SectionHeading } from "./SectionHeading"

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-28" aria-labelledby="about-title">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            id="about-title"
            eyebrow="01 / About"
            title="Product-minded mobile engineering."
          />
        </Reveal>

        <div className="mt-10 grid min-w-0 gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-16">
          <Reveal delay={80}>
            <div className="space-y-5 text-base leading-7 text-zinc-300 sm:text-lg sm:leading-8">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={140}>
            <dl className="grid gap-4 rounded-2xl border border-white/8 bg-elevated p-6">
              {about.facts.map((fact) => (
                <div key={fact.label} className="border-b border-white/6 pb-4 last:border-b-0 last:pb-0">
                  <dt className="font-mono text-[11px] tracking-[0.18em] text-zinc-500 uppercase">
                    {fact.label}
                  </dt>
                  <dd className="mt-1.5 text-sm leading-6 text-zinc-200">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
