"use client";

import { useEffect } from "react";

/**
 * Reveals elements marked with [data-reveal] as they scroll into view.
 * The hiding styles are scoped to the `.reveal-ready` class which this
 * component adds to <html> — so if JS is disabled (or reduced motion is
 * requested) nothing is ever hidden.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) return;

    const root = document.documentElement;
    root.classList.add("reveal-ready");

    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -4% 0px", threshold: 0.08 },
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
