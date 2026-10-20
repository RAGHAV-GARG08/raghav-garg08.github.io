import { contact, site } from "../data/site"
import { Reveal } from "./Reveal"
import { SectionHeading } from "./SectionHeading"
import { SocialLinks } from "./SocialLinks"

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 py-20 sm:py-28"
      aria-labelledby="contact-title"
    >
      <div className="section-shell">
        <Reveal>
          <SectionHeading id="contact-title" eyebrow="06 / Contact" title="Let’s talk." />
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-10 max-w-2xl">
            <p className="font-serif text-3xl italic leading-snug text-zinc-100 sm:text-4xl">
              {contact.heading}
            </p>
            <p className="mt-4 text-zinc-400">{contact.note}</p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-teal-200"
              >
                {site.email}
              </a>
              <SocialLinks labelled includeEmail={false} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
