import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SKILL_GROUPS } from "../data";
import { EASE, Reveal } from "../lib/motion";

export default function Skills() {
  const [activeId, setActiveId] = useState(SKILL_GROUPS[0].id);
  const group = SKILL_GROUPS.find((g) => g.id === activeId) ?? SKILL_GROUPS[0];

  return (
    <section id="stack" className="relative scroll-mt-24 border-t border-line/60 bg-night-900/40 px-5 py-24 md:px-8 md:py-32">
      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 animate-drift rounded-full bg-mint/[0.05] blur-[100px]" />
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="font-mono text-[13px] text-ember"><span className="text-faint">02 /</span> stack</p>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">Herramientas de <span className="text-outline">trabajo</span></h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-faint">Las tecnologías con las que construyo a diario — y el nivel de confianza con cada una.</p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-wrap gap-3" role="tablist">
            {SKILL_GROUPS.map((g) => {
              const active = g.id === activeId;
              return (
                <button key={g.id} role="tab" aria-selected={active} onClick={() => setActiveId(g.id)}
                  className={`relative rounded-md px-5 py-2.5 font-mono text-[13px] transition-colors duration-300 ${active ? "text-night-950" : "text-dim hover:text-ink"}`}>
                  {active && <motion.span layoutId="tab-pill" className="absolute inset-0 rounded-md bg-ember" transition={{ duration: 0.45, ease: EASE }} />}
                  {!active && <span className="absolute inset-0 rounded-md border border-line" />}
                  <span className="relative">{g.label}</span>
                </button>
              );
            })}
          </div>
        </Reveal>
        <div className="mt-10 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <AnimatePresence mode="wait">
              <motion.div key={group.id} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.4, ease: EASE }}>
                <p className="font-display text-7xl font-extrabold text-outline-ember opacity-60">
                  {String(SKILL_GROUPS.findIndex((g) => g.id === group.id) + 1).padStart(2, "0")}
                </p>
                <p className="mt-4 max-w-xs leading-relaxed text-dim">{group.blurb}</p>
                <p className="mt-6 inline-flex items-center gap-2 rounded-md border border-mint/30 bg-mint/5 px-3 py-1.5 font-mono text-[11.5px] text-mint">
                  <span className="inline-block h-1.5 w-1.5 animate-pulse-dot rounded-full bg-mint" />
                  aprendiendo ahora: Rust & WebGPU
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.ul key={group.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.45, ease: EASE }}
                className="divide-y divide-line/70 rounded-xl border border-line bg-night-900/70">
                {group.skills.map((skill, i) => (
                  <li key={skill.name} className="group grid grid-cols-[1fr_auto] items-center gap-x-6 gap-y-2 px-5 py-4 transition-colors duration-300 hover:bg-night-800/70 sm:grid-cols-[220px_1fr_auto]">
                    <div>
                      <p className="font-medium text-ink transition-colors duration-300 group-hover:text-emberhi">{skill.name}</p>
                      <p className="mt-0.5 font-mono text-[11px] text-faint">{skill.note}</p>
                    </div>
                    <div className="skill-track order-3 col-span-2 h-1.5 overflow-hidden rounded-full sm:order-none sm:col-span-1">
                      <motion.div initial={{ width: 0 }} animate={{ width: `${skill.level}%` }} transition={{ duration: 1, delay: 0.1 + i * 0.08, ease: EASE }}
                        className="h-full rounded-full bg-gradient-to-r from-mint/70 to-ember" />
                    </div>
                    <span className="font-mono text-sm text-ember">{skill.level}%</span>
                  </li>
                ))}
              </motion.ul>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
