import { About } from "./components/About"
import { Contact } from "./components/Contact"
import { Experience } from "./components/Experience"
import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"
import { Navbar } from "./components/Navbar"
import { OtherWork } from "./components/OtherWork"
import { Projects } from "./components/Projects"
import { Skills } from "./components/Skills"

export default function App() {
  return (
    <div className="min-h-svh max-w-[100vw] overflow-x-clip bg-page">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <OtherWork />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
