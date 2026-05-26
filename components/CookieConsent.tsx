"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./CookieConsent.module.css";

const STORAGE_KEY = "koding-cookie-consent";

export default function CookieConsent() {
  // Start hidden; reveal only after we confirm no prior choice (avoids SSR flash).
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const decide = (value: "accepted" | "rejected") => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* ignore storage errors (private mode) */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className={styles.bar}
      role="dialog"
      aria-label="Souhlas s používáním cookies"
      aria-live="polite"
    >
      <div className={`container ${styles.inner}`}>
        <p className={styles.text}>
          Tento web používá nezbytné cookies pro svůj provoz. S vaším souhlasem
          můžeme používat i další cookies pro analýzu návštěvnosti. Více v{" "}
          <Link href="/gdpr" className={styles.link}>
            zásadách ochrany osobních údajů
          </Link>
          .
        </p>
        <div className={styles.actions}>
          <button
            type="button"
            className={styles.btnGhost}
            onClick={() => decide("rejected")}
          >
            Odmítnout
          </button>
          <button
            type="button"
            className={styles.btnPrimary}
            onClick={() => decide("accepted")}
          >
            Přijmout vše
          </button>
        </div>
      </div>
    </div>
  );
}
