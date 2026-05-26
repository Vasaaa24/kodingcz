"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  value: string;
  className?: string;
  duration?: number;
};

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

/**
 * Counts a numeric value up from zero when it scrolls into view (and after
 * the intro splash has finished, so the animation isn't wasted behind it).
 * Keeps any non-numeric prefix/suffix, e.g. "100%", "10+", "24/7".
 */
export default function CountUp({ value, className, duration = 1500 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const match = /^(\D*)(\d+)(.*)$/.exec(value);
    if (!match) {
      setDisplay(value);
      return;
    }
    const prefix = match[1];
    const target = parseInt(match[2], 10);
    const suffix = match[3];

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) {
      setDisplay(value);
      return;
    }

    setDisplay(`${prefix}0${suffix}`);

    let inView = false;
    let introDone =
      (window as Window & { __kodingIntroDone?: boolean }).__kodingIntroDone ===
      true;

    const run = () => {
      if (started.current || !inView || !introDone) return;
      started.current = true;
      const t0 = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - t0) / duration, 1);
        const current = Math.round(easeOutCubic(p) * target);
        setDisplay(`${prefix}${current}${suffix}`);
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            inView = true;
            io.unobserve(e.target);
            run();
          }
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);

    const onIntroDone = () => {
      introDone = true;
      run();
    };
    if (!introDone) window.addEventListener("koding:intro-done", onIntroDone);

    return () => {
      io.disconnect();
      window.removeEventListener("koding:intro-done", onIntroDone);
    };
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
