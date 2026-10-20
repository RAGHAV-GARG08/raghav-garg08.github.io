import type { ProjectLinks } from "../data/site"
import { AndroidIcon, AppleIcon, GlobeIcon } from "./icons"

type StoreLinksProps = ProjectLinks & {
  compact?: boolean
  name?: string
}

type StoreLink = {
  href: string
  label: string
  Icon: typeof GlobeIcon
  iconClassName: string
}

const pillClass =
  "inline-flex items-center gap-2 rounded-full border border-white/12 px-3 py-1.5 text-sm text-zinc-200 transition hover:border-accent/50 hover:text-accent"

const iconClass =
  "inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/25 text-white/90 transition hover:border-white/50 hover:bg-black/45 hover:text-white"

export function StoreLinks({
  website,
  playStore,
  appStore,
  compact = false,
  name,
}: StoreLinksProps) {
  const links: StoreLink[] = []

  if (website) {
    links.push({
      href: website,
      label: name ? `${name} website` : "Website",
      Icon: GlobeIcon,
      iconClassName: compact ? "h-4 w-4" : "h-3.5 w-3.5",
    })
  }
  if (playStore) {
    links.push({
      href: playStore,
      label: name ? `${name} on Android` : "Android",
      Icon: AndroidIcon,
      iconClassName: compact ? "h-4 w-4 text-[#3DDC84]" : "h-3.5 w-3.5",
    })
  }
  if (appStore) {
    links.push({
      href: appStore,
      label: name ? `${name} on iOS` : "iOS",
      Icon: AppleIcon,
      iconClassName: compact ? "h-4 w-4" : "h-3.5 w-3.5",
    })
  }

  if (links.length === 0) return null

  return (
    <div className={`flex items-center ${compact ? "gap-1.5" : "flex-wrap gap-2"}`}>
      {links.map((item) => {
        const Icon = item.Icon
        return (
          <a
            key={item.href}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={compact ? iconClass : pillClass}
            aria-label={item.label}
            title={item.label}
          >
            <Icon className={item.iconClassName} />
            {compact ? null : <span>{item.label}</span>}
          </a>
        )
      })}
    </div>
  )
}
