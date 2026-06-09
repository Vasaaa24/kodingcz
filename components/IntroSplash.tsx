"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./IntroSplash.module.css";

/**
 * Full-screen intro shown on page load: brand logo on a dark backdrop,
 * then fades out to reveal the site. Mounts once per full page load.
 */
export default function IntroSplash() {
  const [phase, setPhase] = useState<"visible" | "leaving" | "done">("visible");

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const holdMs = reduce ? 350 : 1500;
    const fadeMs = reduce ? 150 : 600;

    // Lock scroll while the intro is on screen.
    document.body.style.overflow = "hidden";

    const signalDone = () => {
      (window as Window & { __kodingIntroDone?: boolean }).__kodingIntroDone =
        true;
      window.dispatchEvent(new Event("koding:intro-done"));
    };

    const t1 = setTimeout(() => setPhase("leaving"), holdMs);
    const t2 = setTimeout(() => {
      setPhase("done");
      document.body.style.overflow = "";
      signalDone();
    }, holdMs + fadeMs);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      document.body.style.overflow = "";
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className={`${styles.overlay} ${phase === "leaving" ? styles.leaving : ""}`}
      aria-hidden="true"
    >
      <div className={styles.stage}>
        <div className={styles.logoWrap}>
          <Image
            src="/Finnalblack.jpg"
            alt="KODING.CZ"
            width={1187}
            height={1967}
            priority
            sizes="(max-width: 600px) 62vw, 360px"
            className={styles.logo}
          />
        </div>
        <div className={styles.bar}>
          <div className={styles.barFill} />
        </div>
      </div>
    </div>
  );
}
