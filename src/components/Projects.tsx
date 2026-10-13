import type { Project } from "../data";
import { PROJECTS } from "../data";
import { Reveal } from "../lib/motion";
import { IconArrowUpRight, IconCode, IconGitHub } from "./Icons";

function ProjectImage({ project }: { project: Project }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-line bg-night-900">
      <div className="overflow-hidden aspect-[16/10]">
        <img src={project.image} alt={`Vista del proyecto ${project.title}`} loading="lazy"
          className="img-duotone h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night-950/70 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-40" />
      <span className="absolute left-4 top-4 rounded-md border border-line/70 bg-night-950/70 px-2.5 py-1 font-mono text-[11px] text-mint backdrop-blur">{project.status}</span>
      <span className="pointer-events-none absolute -bottom-4 -right-2 font-display text-[110px] font-extrabold leading-none text-outline opacity-25 transition-all duration-500 group-hover:-translate-y-2 group-hover:opacity-40">{project.index}</span>
    </div>
  );
}

function StackTags({ stack }: { stack: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {stack.map((t) => (
        <li key={t} className="rounded border border-line/80 bg-night-800/60 px-2.5 py-1 font-mono text-[11px] text-dim transition-colors duration-300 hover:border-ember/50 hover:text-ember">{t}</li>
      ))}
    </ul>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex items-center gap-5">
      <a href={project.repo} target="_blank" rel="noreferrer" className="link-underline inline-flex items-center gap-2 font-mono text-[13px] text-dim transition-colors hover:text-ember">
        <IconGitHub className="text-base" /> Código
      </a>
      <a href={project.demo} target="_blank" rel="noreferrer" className="link-underline inline-flex items-center gap-2 font-mono text-[13px] text-dim transition-colors hover:text-mint">
        <IconCode className="text-base" /> Demo en vivo <IconArrowUpRight className="text-sm" />
      </a>
    </div>
  );
}

export default function Projects() {
  const featured = PROJECTS.find((p) => p.featured) ?? PROJECTS[0];
  const rest = PROJECTS.filter((p) => p.id !== featured.id);
  const spans = ["md:col-span-7", "md:col-span-5", "md:col-span-10 md:col-start-2"];

  return (
    <section id="proyectos" className="relative scroll-mt-24 border-t border-line/60 px-5 py-24 md:px-8 md:py-32">
      <div className="pointer-events-none absolute left-[-8%] top-40 h-[420px] w-[420px] animate-drift2 rounded-full bg-ember/[0.05] blur-[110px]" />
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="font-mono text-[13px] text-ember"><span className="text-faint">03 /</span> proyectos</p>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">Cosa <span className="text-outline-ember">hecha</span>, no prometida</h2>
            </div>
            <a href="https://github.com/edgardlop" target="_blank" rel="noreferrer" className="link-underline inline-flex items-center gap-2 font-mono text-[13px] text-dim transition-colors hover:text-ember">
              <IconGitHub className="text-lg" /> ver todo en GitHub <IconArrowUpRight className="text-sm" />
            </a>
          </div>
        </Reveal>
        <div className="mt-14 grid items-center gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7" y={40}><ProjectImage project={featured} /></Reveal>
          <div className="lg:col-span-5">
            <Reveal delay={0.12}>
              <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-mint">✦ Proyecto destacado · {featured.year}</p>
              <h3 className="mt-4 font-display text-4xl font-extrabold tracking-tight md:text-5xl">{featured.title}</h3>
              <p className="mt-2 font-medium text-ember">{featured.tagline}</p>
              <p className="mt-5 leading-relaxed text-dim">{featured.description}</p>
            </Reveal>
            <Reveal delay={0.22}>
              <div className="mt-6"><StackTags stack={featured.stack} /></div>
              <div className="mt-7"><ProjectLinks project={featured} /></div>
            </Reveal>
          </div>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-12">
          {rest.map((project, i) => (
            <Reveal key={project.id} delay={0.08 * i} y={40} className={spans[i] ?? "md:col-span-6"}>
              <article className="group flex h-full flex-col gap-5">
                <ProjectImage project={project} />
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl font-bold tracking-tight transition-colors duration-300 group-hover:text-emberhi">{project.title}</h3>
                    <p className="mt-1 font-mono text-[12px] text-mint">{project.tagline}</p>
                  </div>
                  <span className="font-mono text-[12px] text-faint">{project.year}</span>
                </div>
                <p className="text-[15px] leading-relaxed text-dim">{project.description}</p>
                <StackTags stack={project.stack} />
                <div className="mt-auto pt-2"><ProjectLinks project={project} /></div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
