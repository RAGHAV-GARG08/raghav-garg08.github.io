import { useEffect, useState } from "react"
import { navItems } from "../data/site"

const ids = navItems.map((item) => item.id)

export function useActiveSection() {
  const [active, setActive] = useState<string>("")

  useEffect(() => {
    const update = () => {
      const marker = 128
      let current = ""
      for (const id of ids) {
        const element = document.getElementById(id)
        if (element && element.getBoundingClientRect().top <= marker) {
          current = id
        }
      }
      setActive(current)
    }

    update()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    return () => {
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [])

  return active
}
