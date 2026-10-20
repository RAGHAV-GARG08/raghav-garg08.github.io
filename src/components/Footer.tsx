import { site } from "../data/site"

const year = 2026

export function Footer() {
  return (
    <footer className="border-t border-white/8 py-8">
      <div className="section-shell flex flex-col gap-2 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        <p>
          {site.name} · {year}
        </p>
        <p>Built for clarity, not decoration.</p>
      </div>
    </footer>
  )
}
