import type { ReactNode, SVGProps } from "react"
import type { SimpleIcon } from "simple-icons"
import {
  siAndroid,
  siCircleci,
  siClickup,
  siDart,
  siFastlane,
  siFigma,
  siFirebase,
  siFlutter,
  siGetx,
  siGit,
  siGithubactions,
  siGoogleanalytics,
  siGooglecloud,
  siJenkins,
  siJira,
  siKotlin,
  siMixpanel,
  siOpenjdk,
  siPostman,
  siStripe,
  siSwagger,
  siXml,
} from "simple-icons"

const brands: Record<string, SimpleIcon> = {
  Dart: siDart,
  Kotlin: siKotlin,
  Java: siOpenjdk,
  XML: siXml,
  Flutter: siFlutter,
  "Android SDK": siAndroid,
  GetX: siGetx,
  "REST APIs": siSwagger,
  Crashlytics: siFirebase,
  Analytics: siGoogleanalytics,
  "Realtime Database": siFirebase,
  "Cloud Functions": siGooglecloud,
  Mixpanel: siMixpanel,
  Git: siGit,
  "GitHub Actions": siGithubactions,
  Fastlane: siFastlane,
  Jenkins: siJenkins,
  Postman: siPostman,
  Figma: siFigma,
  Jira: siJira,
  ClickUp: siClickup,
  "Payment Integration": siStripe,
  "CI/CD": siCircleci,
  "Cross-platform Development": siFlutter,
  "Add-to-App": siFlutter,
  "Method Channels": siFlutter,
}

function mark(props: SVGProps<SVGSVGElement>) {
  return {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
    ...props,
  }
}

const custom: Record<string, ReactNode> = {
  "Clean Architecture": (
    <svg {...mark({ className: "h-3.5 w-3.5" })}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  ),
  MVVM: (
    <svg {...mark({ className: "h-3.5 w-3.5" })}>
      <rect x="4" y="4" width="16" height="4" rx="1" />
      <rect x="4" y="10" width="16" height="4" rx="1" />
      <rect x="4" y="16" width="16" height="4" rx="1" />
    </svg>
  ),
  BLoC: (
    <svg {...mark({ className: "h-3.5 w-3.5" })}>
      <rect x="4" y="4" width="7" height="7" rx="1.2" />
      <rect x="13" y="4" width="7" height="7" rx="1.2" />
      <rect x="4" y="13" width="7" height="7" rx="1.2" />
      <rect x="13" y="13" width="7" height="7" rx="1.2" />
    </svg>
  ),
  "Deep Linking": (
    <svg {...mark({ className: "h-3.5 w-3.5" })}>
      <path d="M10 13a5 5 0 0 0 7.07 0l1.41-1.41a5 5 0 0 0-7.07-7.07L10 5.93" />
      <path d="M14 11a5 5 0 0 0-7.07 0L5.52 12.41a5 5 0 0 0 7.07 7.07L14 18.07" />
    </svg>
  ),
  MoEngage: (
    <svg {...mark({ className: "h-3.5 w-3.5" })}>
      <circle cx="12" cy="12" r="8" />
      <path d="M8 15V9l4 4 4-4v6" />
    </svg>
  ),
}

export function SkillIcon({ name }: { name: string }) {
  const brand = brands[name]
  if (brand) {
    return (
      <span
        className="inline-flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-[4px] bg-white p-px"
        aria-hidden="true"
      >
        <svg viewBox="0 0 24 24" className="h-full w-full" fill={`#${brand.hex}`}>
          <path d={brand.path} />
        </svg>
      </span>
    )
  }

  return (
    <span className="inline-flex h-4.5 w-4.5 shrink-0 items-center justify-center text-accent" aria-hidden="true">
      {custom[name] ?? (
        <span className="flex h-full w-full items-center justify-center rounded-[4px] bg-accent/15 font-mono text-[8px] font-semibold">
          {name.replaceAll(/[^A-Za-z]/g, "").slice(0, 2).toUpperCase()}
        </span>
      )}
    </span>
  )
}
