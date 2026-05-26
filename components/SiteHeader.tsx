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
