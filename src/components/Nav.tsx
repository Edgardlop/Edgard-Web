import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS } from "../data";
import { EASE } from "../lib/motion";
import { IconClose, IconMenu, IconPrompt } from "./Icons";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["inicio", ...NAV_LINKS.map((l) => l.id)];
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: "-38% 0px -55% 0px" });
    ids.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);


  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <motion.header initial={{ y: -24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "border-b border-line/70 bg-night-950/85 backdrop-blur-md" : "border-b border-transparent bg-transparent"}`}>
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-[72px] md:px-8">
          <a href="#inicio" className="group flex items-center gap-2 font-mono text-sm font-medium tracking-tight" onClick={() => setOpen(false)}>
            <span className="grid h-8 w-8 place-items-center rounded-md border border-line bg-night-800 text-ember transition-colors duration-300 group-hover:border-ember/50 group-hover:text-emberhi">
              <IconPrompt className="text-[15px]" />
            </span>
            <span className="text-ink">edgard<span className="text-faint">.</span>lop<span className="ml-1 text-ember">_</span></span>
          </a>
          <nav className="hidden items-center gap-7 md:flex">
            {NAV_LINKS.map((link) => (
              <a key={link.id} href={`#${link.id}`} className={`font-mono text-[13px] transition-colors duration-300 ${active === link.id ? "text-ember" : "text-dim hover:text-ink"}`}>
                <span className="mr-1 text-faint">/</span>{link.label}
              </a>
            ))}
            <a href="#contacto" className="rounded-md border border-ember/40 bg-ember/10 px-4 py-2 font-mono text-[13px] text-ember transition-all duration-300 hover:border-ember hover:bg-ember hover:text-night-950">Hablemos ↗</a>
          </nav>
          <button aria-label={open ? "Cerrar menú" : "Abrir menú"} onClick={() => setOpen((v) => !v)} className="grid h-10 w-10 place-items-center rounded-md border border-line text-ink transition-colors hover:border-ember/50 hover:text-ember md:hidden">
            {open ? <IconClose className="text-lg" /> : <IconMenu className="text-lg" />}
          </button>
        </div>
      </motion.header>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.3, ease: EASE }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-night-950/97 px-8 pt-16 backdrop-blur-lg md:hidden">
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link, i) => (
                <motion.a key={link.id} href={`#${link.id}`} onClick={() => setOpen(false)} initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.06 * i, duration: 0.4, ease: EASE }}
                  className="flex items-baseline gap-4 border-b border-line/60 py-5">
                  <span className="font-mono text-xs text-faint">0{i + 1}</span>
                  <span className="font-display text-3xl font-bold text-ink transition-colors hover:text-ember">{link.label}</span>
                </motion.a>
              ))}
            </nav>
            <p className="mt-10 font-mono text-xs text-faint">edgard.lopez.dev — disponible para proyectos</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
