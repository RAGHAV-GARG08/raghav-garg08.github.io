import type { SVGProps } from "react"

type IconProps = SVGProps<SVGSVGElement>

function icon(props: IconProps) {
  return {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
    ...props,
  }
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...icon(props)}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  )
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...icon(props)}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  )
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg {...icon(props)}>
      <path d="M8 11v8M8 8v.01" />
      <path d="M12 19v-5.5a2.5 2.5 0 0 1 5 0V19" />
      <rect x="4" y="4" width="16" height="16" rx="2" />
    </svg>
  )
}

export function GitHubIcon(props: IconProps) {
  return (
    <svg {...icon(props)}>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  )
}

export function ExternalIcon(props: IconProps) {
  return (
    <svg {...icon(props)}>
      <path d="M14 5h5v5" />
      <path d="M10 14 19 5" />
      <path d="M19 13v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6" />
    </svg>
  )
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...icon(props)}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...icon(props)}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  )
}

function filledIcon(props: IconProps) {
  return {
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": true as const,
    ...props,
  }
}

export function GlobeIcon(props: IconProps) {
  return (
    <svg {...icon(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a14 14 0 0 1 0 18" />
      <path d="M12 3a14 14 0 0 0 0 18" />
    </svg>
  )
}

export function AndroidIcon(props: IconProps) {
  return (
    <svg {...filledIcon(props)}>
      <path d="M17.6 9.48 19.44 6.3a.64.64 0 0 0-.26-.85.64.64 0 0 0-.83.22l-1.88 3.24a11.3 11.3 0 0 0-8.94 0L5.65 5.67a.64.64 0 0 0-.83-.22.64.64 0 0 0-.26.85l1.84 3.18C2.95 11.1 1 14.17 1 17.71h22c0-3.54-1.95-6.61-5.4-8.23ZM7 15.26a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm10 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
    </svg>
  )
}

export function AppleIcon(props: IconProps) {
  return (
    <svg {...filledIcon(props)}>
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  )
}

export function ChevronLeftIcon(props: IconProps) {
  return (
    <svg {...icon(props)}>
      <path d="m15 5-7 7 7 7" />
    </svg>
  )
}

export function ChevronRightIcon(props: IconProps) {
  return (
    <svg {...icon(props)}>
      <path d="m9 5 7 7-7 7" />
    </svg>
  )
}

export function FileIcon(props: IconProps) {
  return (
    <svg {...icon(props)}>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5" />
    </svg>
  )
}
