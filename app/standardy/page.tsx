import type { Metadata } from "next";
import type { CSSProperties } from "react";
import SiteHeader from "@/components/SiteHeader";
import content from "../page.module.css";
import styles from "./standardy.module.css";
import { aiTesting, testingStandards } from "../content";

export const metadata: Metadata = {
  title: "AI testování a standardy testování",
  description:
    "Přehled přístupů k testování softwaru: využití AI v testování a základní standardy a typy testů.",
};

/** Staggered scroll-reveal delay for items in a grid. */
const stagger = (i: number): CSSProperties =>
  ({ "--reveal-delay": `${i * 70}ms` }) as CSSProperties;

/** Render content text, turning `**phrase**` markers into accent-coloured spans. */
const rich = (text: string) =>
  text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className={content.hl}>
        {part}
      </span>
    ) : (
      part
    ),
  );

export default function StandardyPage() {
  return (
    <>
      <SiteHeader />
      <main className={`container ${styles.page}`}>
        <p className="eyebrow">Metodika testování</p>
        <h1 className={styles.title}>AI testování a standardy testování</h1>

        {/* AI v testování */}
        <section id="ai" className={styles.block}>
          <h2 className={content.subhead}>{aiTesting.title}</h2>
          <div className={`${content.cards} ${content.cardsWide}`}>
            {aiTesting.capabilities.map((c, i) => (
              <article
                key={c.title}
                className={content.card}
                data-reveal
                style={stagger(i % 2)}
              >
                <h3 className={content.cardTitle}>{c.title}</h3>
                <p className={content.cardText}>{c.text}</p>
              </article>
            ))}
          </div>

          <h3 className={content.miniHead}>{aiTesting.toolsIntro}</h3>
          <div className={content.cards}>
            {aiTesting.tools.map((t, i) => (
              <article
                key={t.name}
                className={content.card}
                data-reveal
                style={stagger(i)}
              >
                <h4 className={content.cardTitle}>{t.name}</h4>
                <p className={content.cardText}>{t.text}</p>
              </article>
            ))}
          </div>

          <div className={content.proCon} data-reveal>
            <div className={content.proPanel}>
              <span className={content.proConLabel}>Výhody</span>
              <p className={content.cardText}>{aiTesting.pros}</p>
            </div>
            <div className={content.conPanel}>
              <span className={content.proConLabel}>Limity</span>
              <p className={content.cardText}>{rich(aiTesting.cons)}</p>
            </div>
          </div>
        </section>

        {/* Standardy testování */}
        <section id="standardy" className={styles.block}>
          <h2 className={content.subhead}>{testingStandards.title}</h2>
          <p className={content.lead}>{testingStandards.intro}</p>
          <div className={content.stdStack}>
            {testingStandards.groups.map((g) => (
              <div key={g.label} className={content.stdGroup} data-reveal>
                <span className={content.stdLabel}>{g.label}</span>
                <div className={content.stdItems}>
                  {g.items.map((it, i) => (
                    <div key={it.name} className={content.stdItem}>
                      <span className={content.stdName}>
                        {g.ordered
                          ? `${String(i + 1).padStart(2, "0")} — `
                          : ""}
                        {it.name}
                      </span>
                      <p className={content.stdText}>{it.text}</p>
                      {"bullets" in it && it.bullets && (
                        <ul className={content.bullets}>
                          {it.bullets.map((b) => (
                            <li key={b}>{b}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <p className={styles.back}>
          <a href="/">← Zpět na úvod</a>
        </p>
      </main>
    </>
  );
}
