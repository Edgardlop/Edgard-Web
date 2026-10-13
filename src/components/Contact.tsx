import { useState } from "react";
import { EMAIL, SOCIALS } from "../data";
import { Magnetic, Reveal } from "../lib/motion";
import { IconCheck, IconCopy, IconGitHub, IconGlobe, IconLinkedIn, IconMail, IconSpark } from "./Icons";

const SOCIAL_ICONS: Record<string, (p: { className?: string }) => JSX.Element> = {
  github: (p) => <IconGitHub {...p} />,
  linkedin: (p) => <IconLinkedIn {...p} />,
  site: (p) => <IconGlobe {...p} />,
};

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section id="contacto" className="relative scroll-mt-24 overflow-hidden border-t border-line/60 px-5 py-24 md:px-8 md:py-36">
      <div className="grid-layer pointer-events-none absolute inset-0 opacity-70" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 animate-drift rounded-full bg-ember/[0.06] blur-[120px]" />
      <div className="relative mx-auto max-w-6xl text-center">
        <Reveal>
          <p className="font-mono text-[13px] text-ember"><span className="text-faint">05 /</span> contacto</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mx-auto mt-6 max-w-4xl font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl">
            ¿Construimos algo{" "}
            <span className="relative inline-block text-ember">
              juntos?
              <svg viewBox="0 0 220 12" className="absolute -bottom-2 left-0 w-full" aria-hidden="true">
                <path d="M3 9c40-6 140-6 214-3" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.55" />
              </svg>
            </span>
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mx-auto mt-7 max-w-xl leading-relaxed text-dim">Tengo espacio para nuevos proyectos y colaboraciones. Cuéntame tu idea — respondo rápido y sin plantillas.</p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Magnetic>
              <a href={`mailto:${EMAIL}`} className="group inline-flex items-center gap-3 rounded-md bg-ember px-7 py-4 font-display text-base font-bold text-night-950 transition-colors duration-300 hover:bg-emberhi">
                <IconMail className="text-lg transition-transform duration-300 group-hover:-rotate-6" /> Escríbeme un correo
              </a>
            </Magnetic>
            <Magnetic>
              <button onClick={copy} className={`inline-flex items-center gap-3 rounded-md border px-7 py-4 font-mono text-sm transition-all duration-300 ${copied ? "border-mint/60 bg-mint/10 text-mint" : "border-line text-dim hover:border-ember/50 hover:text-ink"}`}>
                {copied ? <IconCheck className="text-base" /> : <IconCopy className="text-base" />}
                {copied ? "¡correo copiado!" : EMAIL}
              </button>
            </Magnetic>
          </div>
        </Reveal>
            <Reveal delay={0.32}>
          <div className="mt-14 flex items-center justify-center gap-4">
            {SOCIALS.map((s) => (
              <Magnetic key={s.id} strength={0.35}>
                <a href={s.url} target="_blank" rel="noreferrer" aria-label={`${s.label} — ${s.handle}`} title={`${s.label} · ${s.handle}`}
                  className="grid h-12 w-12 place-items-center rounded-md border border-line bg-night-900/80 text-dim transition-all duration-300 hover:border-ember/60 hover:text-ember">
                  {SOCIAL_ICONS[s.id]({ className: "text-xl" })}
                </a>
              </Magnetic>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.4}>
          <p className="mt-12 flex items-center justify-center gap-2 font-mono text-[12px] text-faint">
            <IconSpark className="text-[10px] text-mint" /> tiempo promedio de respuesta: menos de 24 horas
          </p>
        </Reveal>
      </div>
    </section>
  );
}
