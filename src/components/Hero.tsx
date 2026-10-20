import { site } from "../data/site"
import { ArrowRightIcon } from "./icons"
import { SocialLinks } from "./SocialLinks"

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-24 lg:pt-40 lg:pb-32"
      aria-labelledby="hero-heading"
    >
      <div className="hero-grid pointer-events-none absolute inset-0" />
      <div className="hero-glow pointer-events-none absolute inset-x-0 top-0 h-[28rem]" />

      <div className="section-shell relative grid w-full min-w-0 items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div className="min-w-0 max-w-full">
          <p className="font-mono text-[11px] leading-6 tracking-[0.14em] text-accent uppercase sm:text-xs sm:tracking-[0.18em]">
            {site.role.split(" | ").map((part, index) => (
              <span key={part} className="block sm:inline">
                {index > 0 ? (
                  <span className="hidden px-2 text-accent/50 sm:inline">|</span>
                ) : null}
                {part}
              </span>
            ))}
          </p>
          <h1
            id="hero-heading"
            className="mt-5 text-4xl font-semibold tracking-tight text-zinc-50 sm:text-6xl lg:text-7xl"
          >
            {site.name}
          </h1>
          <p className="mt-6 max-w-xl text-pretty font-serif text-xl italic leading-8 text-zinc-300 sm:text-2xl">
            {site.headline}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-teal-200"
            >
              View My Work
              <ArrowRightIcon className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/12 px-5 py-2.5 text-sm font-medium text-zinc-100 transition hover:border-accent/50 hover:text-accent"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-8">
            <SocialLinks />
          </div>
        </div>

        <CodePanel />
      </div>
    </section>
  )
}

function CodePanel() {
  return (
    <aside
      className="relative hidden overflow-hidden rounded-2xl border border-white/10 bg-elevated/80 shadow-[0_24px_80px_rgb(0_0_0_/_0.35)] lg:block"
      aria-hidden="true"
    >
      <div className="flex items-center gap-2 border-b border-white/8 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent/80" />
        <span className="ml-3 font-mono text-xs text-zinc-500">product_app.dart</span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-6 text-zinc-400">
        <code>
          <span className="text-teal-200/80">class</span>
          {" ProductApp "}
          <span className="text-zinc-500">extends</span>
          {" StatelessWidget {\n"}
          {"  const ProductApp({super.key});\n\n"}
          {"  "}
          <span className="text-teal-200/80">@override</span>
          {"\n  Widget build(BuildContext context) {\n"}
          {"    return MaterialApp(\n"}
          {"      title: "}
          <span className="text-zinc-200">'Raghav Garg'</span>
          {",\n      theme: AppTheme.production(),\n"}
          {"      home: "}
          <span className="text-zinc-200">const</span>
          {" Shell(\n"}
          {"        work: ["}
          <span className="text-zinc-200">'Vecto'</span>
          {", "}
          <span className="text-zinc-200">'VAMA'</span>
          {", "}
          <span className="text-zinc-200">'Adda247'</span>
          {"],\n"}
          {"      ),\n    );\n  }\n}"}
        </code>
      </pre>
    </aside>
  )
}
