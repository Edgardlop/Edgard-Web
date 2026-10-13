import { Magnetic } from "../lib/motion";
import { IconArrowUp, IconPrompt } from "./Icons";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-line/70 bg-night-900/60 px-5 py-8 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 sm:flex-row">
        <p className="flex items-center gap-2 font-mono text-[12px] text-faint">
          <IconPrompt className="text-sm text-ember" />
          © {new Date().getFullYear()} Edgard López — hecho con React, Tailwind y café
        </p>
        <p className="font-mono text-[12px] text-faint">
          rediseño de{" "}
          <a href="https://edgardlop.github.io/Edgard-Web/" target="_blank" rel="noreferrer" className="link-underline text-dim transition-colors hover:text-mint">la versión original</a>
        </p>
        <Magnetic strength={0.4}>
          <button onClick={scrollTop} aria-label="Volver arriba" className="grid h-11 w-11 place-items-center rounded-md border border-line text-dim transition-all duration-300 hover:border-ember hover:text-ember">
            <IconArrowUp className="text-lg" />
          </button>
        </Magnetic>
      </div>
    </footer>
  );
}
