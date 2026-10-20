import { site } from "../data/site"
import { GitHubIcon, LinkedInIcon, MailIcon } from "./icons"

const linkClass =
  "inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-300 transition hover:border-accent/50 hover:text-accent"

export function SocialLinks({
  labelled,
  includeEmail = true,
}: {
  labelled?: boolean
  includeEmail?: boolean
}) {
  const links = [
    includeEmail
      ? {
          href: `mailto:${site.email}`,
          label: "Email",
          icon: MailIcon,
        }
      : null,
    {
      href: site.linkedin,
      label: "LinkedIn",
      icon: LinkedInIcon,
      external: true,
    },
    site.github
      ? {
          href: site.github,
          label: "GitHub",
          icon: GitHubIcon,
          external: true,
        }
      : null,
  ].filter((item): item is NonNullable<typeof item> => item !== null)

  return (
    <ul className="flex items-center gap-3">
      {links.map((item) => {
        const Icon = item.icon
        return (
          <li key={item.label}>
            <a
              href={item.href}
              className={
                labelled
                  ? "inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-200 transition hover:border-accent/50 hover:text-accent"
                  : linkClass
              }
              aria-label={labelled ? undefined : item.label}
              {...(item.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              <Icon className="h-4 w-4" />
              {labelled ? item.label : null}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
