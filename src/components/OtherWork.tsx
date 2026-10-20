import { useCallback, useEffect, useRef, useState } from "react"
import { otherProjects } from "../data/site"
import { BrandMark } from "./BrandMark"
import { ChevronLeftIcon, ChevronRightIcon } from "./icons"
import { Reveal } from "./Reveal"
import { SectionHeading } from "./SectionHeading"
import { StoreLinks } from "./StoreLinks"

export function OtherWork() {
  const railRef = useRef<HTMLDivElement>(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(false)

  const updateScrollState = useCallback(() => {
    const rail = railRef.current
    if (!rail) return
    setCanPrev(rail.scrollLeft > 12)
    setCanNext(rail.scrollLeft + rail.clientWidth < rail.scrollWidth - 12)
  }, [])

  useEffect(() => {
    const rail = railRef.current
    if (!rail) return
    updateScrollState()
    rail.addEventListener("scroll", updateScrollState, { passive: true })
    window.addEventListener("resize", updateScrollState)
    return () => {
      rail.removeEventListener("scroll", updateScrollState)
      window.removeEventListener("resize", updateScrollState)
    }
  }, [updateScrollState, otherProjects.length])

  const scrollByPage = (direction: -1 | 1) => {
    const rail = railRef.current
    if (!rail) return
    rail.scrollBy({
      left: direction * Math.min(rail.clientWidth * 0.8, 320),
      behavior: "smooth",
    })
  }

  return (
    <section
      id="more-work"
      className="scroll-mt-24 py-20 sm:py-28"
      aria-labelledby="more-work-title"
    >
      <div className="section-shell">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              id="more-work-title"
              eyebrow="04 / More work"
              title="Others contributions."
              description="Shipped products beyond the selected case studies."
            />
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 text-zinc-200 transition hover:border-accent/50 hover:text-accent disabled:cursor-not-allowed disabled:opacity-30"
                aria-label="Previous apps"
                disabled={!canPrev}
                onClick={() => scrollByPage(-1)}
              >
                <ChevronLeftIcon className="h-4 w-4" />
              </button>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 text-zinc-200 transition hover:border-accent/50 hover:text-accent disabled:cursor-not-allowed disabled:opacity-30"
                aria-label="Next apps"
                disabled={!canNext}
                onClick={() => scrollByPage(1)}
              >
                <ChevronRightIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        </Reveal>

        <div ref={railRef} className="other-rail mt-10" aria-label="Other shipped apps">
          {otherProjects.map((project) => (
            <article
              key={project.name}
              className="flex w-[min(18rem,80vw)] shrink-0 snap-start flex-col gap-4 rounded-2xl border border-white/8 bg-elevated p-5"
            >
              <div className="flex items-center gap-3">
                <BrandMark
                  name={project.name}
                  initials={project.initials}
                  tone={project.tone}
                  logo={project.logo}
                  size="lg"
                />
                <h3 className="text-base font-semibold text-zinc-50">
                  {project.name}
                </h3>
              </div>
              <StoreLinks
                website={project.website}
                playStore={project.playStore}
                appStore={project.appStore}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
