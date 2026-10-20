import { useEffect, useState } from "react"
import { navItems, site } from "../data/site"
import { useActiveSection } from "../hooks/useActiveSection"
import { CloseIcon, FileIcon, MenuIcon } from "./icons"

export function Navbar() {
  const active = useActiveSection()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 max-w-[100vw] transition-colors ${
        open
          ? "bg-page border-b border-white/8"
          : scrolled
            ? "nav-blur border-b border-white/8"
            : ""
      }`}
    >
      <nav
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6"
        aria-label="Primary"
      >
        <a
          href="#top"
          className="font-semibold tracking-tight text-zinc-100"
        >
          {site.name}
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`text-sm transition hover:text-accent ${
                  active === item.id ? "text-accent" : "text-zinc-400"
                }`}
                aria-current={active === item.id ? "location" : undefined}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={site.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/12 px-3.5 py-1.5 text-sm text-zinc-200 transition hover:border-accent/50 hover:text-accent"
            >
              <FileIcon className="h-3.5 w-3.5" />
              Resume
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="relative z-10 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 text-zinc-100 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div className="md:hidden">
          <div id="mobile-nav" className="border-t border-white/8 bg-page">
            <ul className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="block rounded-lg px-3 py-3 text-zinc-200"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={site.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-lg px-3 py-3 text-accent"
                  onClick={() => setOpen(false)}
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
          <button
            type="button"
            className="fixed inset-0 top-16 -z-10 bg-black/55"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />
        </div>
      ) : null}
    </header>
  )
}
