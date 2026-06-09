"use client";

import { useEffect, useState } from "react";
import { nav } from "@/app/content";
import styles from "./SiteHeader.module.css";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  // Note: we intentionally do NOT set `overflow: hidden` on <body> to lock
  // scroll — that breaks `position: sticky` on the header (sticky stops
  // working when an ancestor is overflow:hidden), which let page content
  // bleed in above the menu. The full-height fixed panel covers the page,
  // so a scroll lock isn't needed.

  // Close on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Tuned smooth scroll for in-page anchor links. The browser's native
  // `scroll-behavior: smooth` felt too fast and can't be slowed from CSS, so
  // we animate manually with easing over a distance-aware duration. Handled at
  // document level so menu links, CTAs and footer links all behave the same.
  useEffect(() => {
    const HEADER_OFFSET = 88;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const onClick = (e: MouseEvent) => {
      if (
        e.defaultPrevented ||
        e.button !== 0 ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      )
        return;
      const link = (e.target as HTMLElement).closest("a");
      const href = link?.getAttribute("href");
      if (!href) return;

      const hashIndex = href.indexOf("#");
      if (hashIndex === -1) return; // not an anchor link

      const here = (window.location.pathname.replace(/\/+$/, "") || "/");
      const there = (href.slice(0, hashIndex).replace(/\/+$/, "") || "/");
      if (here !== there) return; // different page — let the browser navigate

      const id = href.slice(hashIndex + 1);
      const target = id === "top" ? null : document.getElementById(id);
      if (id !== "top" && !target) return; // unknown anchor — leave default

      e.preventDefault();
      setOpen(false);

      const startY = window.scrollY;
      const endY = target
        ? Math.max(
            0,
            target.getBoundingClientRect().top + startY - HEADER_OFFSET,
          )
        : 0;
      const distance = endY - startY;

      if (reduce || Math.abs(distance) < 4) {
        window.scrollTo(0, endY);
        history.pushState(null, "", href);
        return;
      }

      const duration = Math.min(1100, Math.max(550, Math.abs(distance) * 0.6));
      let start: number | null = null;
      const step = (now: number) => {
        if (start === null) start = now;
        const t = Math.min(1, (now - start) / duration);
        window.scrollTo(0, startY + distance * easeInOutCubic(t));
        if (t < 1) requestAnimationFrame(step);
        else history.pushState(null, "", href);
      };
      requestAnimationFrame(step);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <>
      <header className={styles.header} data-open={open}>
        <div className={`container ${styles.inner}`}>
          <a
            href="/#top"
            className={styles.brand}
            aria-label="KODING.CZ — domů"
            onClick={() => setOpen(false)}
          >
            KODING.CZ
          </a>

          <nav className={styles.navDesktop} aria-label="Hlavní navigace">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className={styles.link}>
                {n.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className={styles.burger}
            aria-label={open ? "Zavřít menu" : "Otevřít menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            data-open={open}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile menu — rendered outside the header (which uses backdrop-filter
          and would otherwise become the containing block), so this fixed
          overlay is always positioned to the viewport, right under the bar. */}
      <div
        id="mobile-menu"
        className={styles.mobilePanel}
        data-open={open}
        hidden={!open}
      >
        <nav className={styles.navMobile} aria-label="Mobilní navigace">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className={styles.mobileLink}
              onClick={() => setOpen(false)}
            >
              {n.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
