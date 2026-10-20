import type { ProjectTone } from "../data/site"

const tones: Record<ProjectTone, string> = {
  vecto: "from-cyan-400/30 to-teal-700/40 text-teal-100",
  shanti: "from-amber-300/30 to-orange-800/40 text-amber-100",
  jhallak: "from-fuchsia-400/30 to-violet-800/40 text-fuchsia-100",
  studio: "from-sky-400/30 to-slate-800/40 text-sky-100",
  vama: "from-rose-400/30 to-orange-800/40 text-rose-100",
  adda: "from-indigo-400/30 to-blue-800/40 text-indigo-100",
}

type BrandMarkProps = {
  name: string
  initials: string
  tone: ProjectTone
  logo?: string
  size?: "md" | "lg"
}

export function BrandMark({
  name,
  initials,
  tone,
  logo,
  size = "md",
}: BrandMarkProps) {
  const box = size === "lg" ? "h-14 w-14 text-lg" : "h-12 w-12 text-sm"

  if (logo) {
    return (
      <img
        src={logo}
        alt={`${name} logo`}
        className={`${box} rounded-2xl bg-white object-contain p-0.5`}
      />
    )
  }

  return (
    <div
      className={`inline-flex ${box} items-center justify-center rounded-2xl bg-linear-to-br font-semibold tracking-tight ${tones[tone]}`}
      aria-hidden="true"
    >
      {initials}
    </div>
  )
}
