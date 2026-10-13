import { PORTRAIT, STATS, SOCIALS } from "../data";
import { CountUp, Reveal } from "../lib/motion";
import { IconGitHub, IconGlobe, IconLinkedIn } from "./Icons";

const SOCIAL_ICONS: Record<string, (p: { className?: string }) => JSX.Element> = {
  github: (p) => <IconGitHub {...p} />,
  linkedin: (p) => <IconLinkedIn {...p} />,
  site: (p) => <IconGlobe {...p} />,
};

export default function About() {
  return (
    <section id="sobre-mi" className="relative scroll-mt-24 px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <p className="font-mono text-[13px] text-ember"><span className="text-faint">01 /</span> sobre mí</p>
              <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl">Detrás del <span className="text-outline-ember">código</span></h2>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="group relative mt-9 max-w-sm overflow-hidden rounded-xl border border-line bg-night-900">
                <div className="overflow-hidden">
                  <img src={PORTRAIT} alt="Ilustración de Edgard López programando" className="img-duotone aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]" />
                </div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night-950/80 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
                  <div>
                    <p className="font-display text-xl font-bold">Edgard López</p>
                    <p className="mt-1 font-mono text-[12px] text-mint">&gt; full stack developer</p>
                  </div>
                  <div className="flex gap-2">
                    {SOCIALS.slice(0, 2).map((s) => (
                      <a key={s.id} href={s.url} target="_blank" rel="noreferrer" aria-label={s.label}
                        className="grid h-9 w-9 place-items-center rounded-md border border-line/80 bg-night-950/60 text-dim backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-ember/60 hover:text-ember">
                        {SOCIAL_ICONS[s.id]({ className: "text-[15px]" })}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
        <div className="lg:col-span-7 lg:pt-24">
          <Reveal>
            <p className="text-lg leading-relaxed text-ink/90 md:text-xl">
              Soy Edgard, desarrollador web que convirtió la curiosidad por{" "}
              <em className="font-serif italic text-mint">"¿y cómo funciona esto?"</em>{" "}
              en un oficio. Empecé maquetando landings y hoy diseño y programo aplicaciones completas.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 leading-relaxed text-dim">Me obsesiona el punto donde la ingeniería se encuentra con el diseño: interfaces que cargan rápido, se leen fácil y se sienten vivas.</p>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-6 leading-relaxed text-dim">Cuando no estoy programando, probablemente estoy aprendiendo una tecnología nueva, tomando demasiado café o rediseñando este mismo portafolio.</p>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-4">
            {STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={0.08 * i} y={20} className="bg-night-900">
                <div className="group h-full px-5 py-6 transition-colors duration-300 hover:bg-night-800">
                  <p className="font-display text-4xl font-extrabold text-ember transition-colors duration-300 group-hover:text-emberhi">
                    <CountUp to={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-2 font-mono text-[11.5px] uppercase tracking-wider text-faint">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
                   <Reveal delay={0.2}>
            <blockquote className="mt-12 border-l-2 border-ember pl-5">
              <p className="font-display text-xl font-medium leading-snug text-ink md:text-2xl">"El buen código no solo funciona: se entiende, se mantiene y se disfruta."</p>
              <cite className="mt-3 block font-mono text-[12px] not-italic text-faint">— mi mantra desde el primer commit</cite>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
