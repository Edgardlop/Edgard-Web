import { useEffect, useRef, useState, type ReactNode, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useInView } from "framer-motion";

export const EASE = [0.22, 1, 0.36, 1] as const;

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(() => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

const SCRAMBLE_CHARS = "!<>-_\\/[]{}—=+*^?#";

export function useScramble(target: string, play: boolean, speed = 26) {
  const reduced = usePrefersReducedMotion();
  const [text, setText] = useState(() => reduced ? target : target.split("").map((c) => c === " " ? " " : SCRAMBLE_CHARS[(Math.random() * SCRAMBLE_CHARS.length) | 0]).join(""));

  useEffect(() => {
    if (!play) return;
    if (reduced) { setText(target); return; }
    let frame = 0;
    const id = window.setInterval(() => {
      frame++;
      let done = true;
      let out = "";
      for (let i = 0; i < target.length; i++) {
        const lockAt = i * 2 + 8;
        if (frame >= lockAt || target[i] === " ") { out += target[i]; }
        else { done = false; out += SCRAMBLE_CHARS[(Math.random() * SCRAMBLE_CHARS.length) | 0]; }
      }
      setText(out);
      if (done) window.clearInterval(id);
    }, speed);
    return () => window.clearInterval(id);
  }, [play, target, reduced, speed]);

  return text;
}

export function Reveal({ children, delay = 0, y = 32, className, once = true }: { children: ReactNode; delay?: number; y?: number; className?: string; once?: boolean }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once, margin: "-70px" }} transition={{ duration: 0.8, delay, ease: EASE }}>
      {children}
    </motion.div>
  );
}

export function Magnetic({ children, strength = 0.28, className }: { children: ReactNode; strength?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 14, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 180, damping: 14, mass: 0.4 });

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * strength);
    y.set((e.clientY - r.top - r.height / 2) * strength);
  };
  const onLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div ref={ref} className={className} style={{ x: sx, y: sy }} onMouseMove={onMove} onMouseLeave={onLeave}>
      {children}
    </motion.div>
  );
}

export function CountUp({ to, suffix = "", duration = 1400 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduced = usePrefersReducedMotion();
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduced) { setVal(to); return; }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(Math.round(eased * to));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration, reduced]);

  return <span ref={ref}>{val}{suffix}</span>;
}

export function RotatingWords({ words, interval = 2600, className }: { words: string[]; interval?: number; className?: string }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = window.setInterval(() => setI((v) => (v + 1) % words.length), interval);
    return () => window.clearInterval(id);
  }, [words.length, interval]);

  return (
    <span className={`relative inline-block overflow-hidden align-bottom ${className ?? ""}`}>
      <motion.span key={i} initial={{ y: "105%" }} animate={{ y: 0 }} transition={{ duration: 0.5, ease: EASE }} className="inline-block text-ember">
        {words[i]}
      </motion.span>
    </span>
  );
}
