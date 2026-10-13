import { MARQUEE_ITEMS } from "../data";
import { IconSpark } from "./Icons";

export default function Marquee() {
  const row = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <section aria-label="Tecnologías" className="relative border-y border-line/70 bg-night-900/60 py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-night-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-night-950 to-transparent" />
      <div className="flex overflow-hidden">
        <div className="flex min-w-max animate-marquee items-center">
          {row.map((item, i) => (
            <span key={i} className="mr-10 flex items-center gap-10 font-display text-lg font-semibold uppercase tracking-wide text-dim transition-colors hover:text-ember">
              {item}<IconSpark className="text-[10px] text-ember/70" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
