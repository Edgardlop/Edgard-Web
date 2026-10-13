import { EXPERIENCE } from "../data";
import { Reveal } from "../lib/motion";
import { IconCoffee } from "./Icons";

export default function Experience() {
  return (
    <section id="trayectoria" className="relative scroll-mt-24 border-t border-line/60 bg-night-900/40 px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <p className="font-mono text-[13px] text-ember"><span className="text-faint">04 /</span> trayectoria</p>
              <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl">El camino <span className="text-outline">hasta aquí</span></h2>
              <p className="mt-5 max-w-xs leading-relaxed text-dim">Cuatro años de commits, deploys en viernes (ya no) y aprendizaje constante.</p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 inline-flex items-center gap-3 rounded-lg border border-line bg-night-900 px-5 py-4">
                <IconCoffee className="text-xl text-ember" />
                <div>
                  <p className="font-display text-sm font-bold">Combustible oficial</p>
                  <p className="font-mono text-[11.5px] text-faint">café × ∞ tazas al día</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
        <div className="lg:col-span-8">
          <ol className="relative ml-3 space-y-4 border-l border-line/80 pl-8 md:ml-5 md:pl-12">
            {EXPERIENCE.map((job, i) => (
              <Reveal key={job.period} delay={0.08 * i} y={36}>
                <li className="group relative">
                  <span className={`absolute -left-[42.5px] top-7 grid h-5 w-5 place-items-center rounded-full border md:-left-[58.5px] ${job.current ? "border-mint bg-mint/15" : "border-line bg-night-900"}`}>
                    <span className={`h-1.5 w-1.5 rounded-full ${job.current ? "animate-pulse-dot bg-mint" : "bg-faint"}`} />
                  </span>
                  <div className="rounded-xl border border-line bg-night-900/70 p-6 transition-all duration-400 hover:-translate-y-1 hover:border-ember/40 hover:bg-night-800/80 md:p-7">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <p className="font-mono text-[12.5px] tracking-wide text-ember">{job.period}</p>
                      <p className="font-mono text-[12px] text-mint">{job.company}</p>
                    </div>
                    <h3 className="mt-3 font-display text-2xl font-bold tracking-tight transition-colors duration-300 group-hover:text-emberhi">{job.role}</h3>
                    <p className="mt-3 leading-relaxed text-dim">{job.description}</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {job.tags.map((t) => (
                        <li key={t} className="rounded border border-line/80 px-2.5 py-1 font-mono text-[11px] text-faint">{t}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
