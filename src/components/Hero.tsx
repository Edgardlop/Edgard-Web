import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { EASE, Magnetic, RotatingWords, usePrefersReducedMotion, useScramble } from "../lib/motion";
import { IconArrowDown, IconPin, IconSpark } from "./Icons";

type OutLine = { t: string; c?: "ink" | "dim" | "mint" };
const SCRIPT: { cmd: string; out: OutLine[] }[] = [
  { cmd: "whoami", out: [{ t: "edgard.lopez — desarrollador full stack", c: "ink" }] },
  { cmd: "cat stack.txt", out: [{ t: "react · typescript · node · tailwind · postgres", c: "dim" }] },
  { cmd: "ls proyectos/", out: [{ t: "devboard/   ritmo/   clima/   mercado/", c: "mint" }] },
  { cmd: "./estado.sh", out: [{ t: "✓ disponible para nuevos proyectos", c: "mint" }] },
];

type TermLine = { text: string; kind: "cmd" | "out"; color?: OutLine["c"] };

function Terminal() {
  const [lines, setLines] = useState<TermLine[]>([]);
  const [done, setDone] = useState(false);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) {
      const all: TermLine[] = [];
      SCRIPT.forEach((item) => {
        all.push({ text: `$ ${item.cmd}`, kind: "cmd" });
        item.out.forEach((o) => all.push({ text: o.t, kind: "out", color: o.c }));
      });
      setLines(all); setDone(true); return;
    }
    let cancelled = false;
    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
    (async () => {
      await sleep(700);
      for (const item of SCRIPT) {
        let cur = "";
        setLines((ls) => [...ls, { text: "$ ", kind: "cmd" }]);
        for (const ch of item.cmd) {
          if (cancelled) return;
          cur += ch;
          const snap = cur;
          setLines((ls) => [...ls.slice(0, -1), { text: `$ ${snap}`, kind: "cmd" }]);
          await sleep(36 + Math.random() * 42);
        }
        await sleep(280);
        for (const o of item.out) {
          if (cancelled) return;
          setLines((ls) => [...ls, { text: o.t, kind: "out", color: o.c }]);
          await sleep(320);
        }
        await sleep(430);
      }
      if (!cancelled) setDone(true);
    })();
    return () => { cancelled = true; };
  }, [reduced]);

  const colorClass = (c?: OutLine["c"]) => c === "mint" ? "text-mint" : c === "dim" ? "text-dim" : "text-ink";

  return (
    <div className="overflow-hidden rounded-xl border border-line bg-night-900/90 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]">
      <div className="flex items-center gap-2 border-b border-line/70 bg-night-850 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-ember/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-mint/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-faint/60" />
        <span className="ml-3 font-mono text-[11px] text-faint">edgard@web: ~/portfolio</span>
      </div>
      <div className="h-[300px] overflow-hidden px-4 py-4 font-mono text-[12.5px] leading-relaxed sm:h-[320px] sm:text-[13px]">
        {lines.map((line, i) => (
          <p key={i} className={line.kind === "cmd" ? "text-ink" : colorClass(line.color)}>
            {line.kind === "cmd" && <span className="text-ember">$ </span>}
            {line.kind === "cmd" ? line.text.slice(2) : line.text}
          </p>
        ))}
        {done && (
          <p className="text-ink">
            <span className="text-ember">$ </span>
            <span className="inline-block h-[15px] w-[8px] translate-y-[2px] animate-blink bg-mint" />
          </p>
        )}
      </div>
    </div>
  );
}

function OrbitBadge() {
  return (
    <div className="pointer-events-none absolute -bottom-8 -left-8 hidden h-28 w-28 animate-spin-slow lg:block">
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <defs>
          <path id="circlePath" d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" />
        </defs>
        <text className="fill-dim font-mono" style={{ fontSize: "8.6px", letterSpacing: "1.6px" }}>
          <textPath href="#circlePath">DISPONIBLE PARA PROYECTOS ✦ SCRIBEME ✦</textPath>
        </text>
        <circle cx="50" cy="50" r="4" className="fill-ember" />
      </svg>
    </div>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const name1 = useScramble("EDGARD", inView, 30);
  const name2 = useScramble("LÓPEZ", inView, 34);

  return (
    <section id="inicio" ref={ref} className="relative flex min-h-svh flex-col justify-center overflow-hidden px-5 pb-20 pt-28 md:px-8">
      <div className="grid-layer pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -top-32 right-[-10%] h-[480px] w-[480px] animate-drift rounded-full bg-ember/[0.07] blur-[110px]" />
      <div className="pointer-events-none absolute bottom-[-20%] left-[-12%] h-[520px] w-[520px] animate-drift2 rounded-full bg-mint/[0.06] blur-[120px]" />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
            className="mb-6 flex items-center gap-3 font-mono text-[13px] text-mint">
            <span className="inline-block h-2 w-2 animate-pulse-dot rounded-full bg-mint" />
            ~/portfolio — rediseño v2.0
          </motion.p>
            <h1 className="font-display font-extrabold leading-[0.92] tracking-tight">
            <motion.span initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: EASE, delay: 0.25 }}
              className="block text-[19vw] text-ink sm:text-7xl md:text-8xl xl:text-[104px]">{name1}</motion.span>
            <motion.span initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: EASE, delay: 0.38 }}
              className="text-outline block text-[19vw] sm:text-7xl md:text-8xl xl:text-[104px]">
              {name2}<span className="text-ember" style={{ WebkitTextStroke: "0px" }}>.</span>
            </motion.span>
          </h1>
          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE, delay: 0.55 }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-dim md:text-xl">
            Desarrollador web full stack. Construyo{" "}
            <RotatingWords words={["interfaces que se sienten vivas.", "APIs rápidas y limpias.", "experiencias que cuentan historias.", "código que escala sin drama."]} />
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE, delay: 0.7 }}
            className="mt-9 flex flex-wrap items-center gap-4">
            <Magnetic>
              <a href="#proyectos" className="group inline-flex items-center gap-3 rounded-md bg-ember px-6 py-3.5 font-display text-sm font-bold tracking-wide text-night-950 transition-colors duration-300 hover:bg-emberhi">
                Ver proyectos <IconArrowDown className="text-base transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#contacto" className="inline-flex items-center gap-3 rounded-md border border-line px-6 py-3.5 font-display text-sm font-bold tracking-wide text-ink transition-all duration-300 hover:border-mint/60 hover:text-mint">
                <IconSpark className="text-sm text-mint" /> Hablemos
              </a>
            </Magnetic>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.95 }}
            className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-2 font-mono text-[12.5px] text-faint">
            <span className="flex items-center gap-2"><IconPin className="text-sm text-ember" /> Latinoamérica · Remoto</span>
            <span className="flex items-center gap-2"><span className="inline-block h-1.5 w-1.5 rounded-full bg-mint" /> UTC−6 · flexible</span>
            <span>español / english</span>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, y: 40, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.9, ease: EASE, delay: 0.5 }} className="relative lg:col-span-5">
          <div className="animate-floaty"><Terminal /></div>
          <OrbitBadge />
        </motion.div>
      </div>
      <motion.a href="#sobre-mi" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 0.8 }}
        className="group absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[11px] tracking-widest text-faint transition-colors hover:text-mint md:flex">
        SCROLL <IconArrowDown className="animate-floaty text-base text-ember" />
      </motion.a>
    </section>
  );
}
