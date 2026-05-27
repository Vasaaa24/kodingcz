import type { CSSProperties } from "react";
import CountUp from "@/components/CountUp";
import SiteHeader from "@/components/SiteHeader";
import styles from "./page.module.css";
import {
  about,
  contact,
  dataCenter,
  hero,
  it,
  microErp,
  testing,
} from "./content";

/** Staggered scroll-reveal delay for items in a grid. */
const stagger = (i: number): CSSProperties =>
  ({ "--reveal-delay": `${i * 70}ms` }) as CSSProperties;

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main id="top">
        {/* HERO */}
        <section className={styles.hero}>
          <div className={`container ${styles.heroCopy}`}>
            <p className="eyebrow">{hero.eyebrow}</p>
            <h1 className={styles.heroTitle}>{hero.title}</h1>
            <p className={styles.heroLead}>{hero.lead}</p>

            <div className={styles.heroActions}>
              {hero.ctas.map((c) => (
                <a
                  key={c.href}
                  href={c.href}
                  className={c.primary ? styles.btnPrimary : styles.btnGhost}
                >
                  {c.label}
                </a>
              ))}
            </div>

            <ul className={styles.tags}>
              {hero.tags.map((t) => (
                <li key={t} className={styles.tag}>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className={`container ${styles.statsBar}`}>
            {hero.stats.map((s) => (
              <div key={s.label} className={styles.stat}>
                <CountUp value={s.value} className={styles.statValue} />
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* O NÁS */}
        <section id="o-nas" className={styles.section}>
          <div className="container">
            <SectionHead num="01" title={about.title} />
            <div className={styles.aboutGrid} data-reveal>
              <div className={styles.prose}>
                {about.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <ul className={styles.refList}>
                <li className={styles.refIntro}>{about.refIntro}</li>
                {about.references.map((r) => (
                  <li key={r.sector} className={styles.refItem}>
                    <span className={styles.refSector}>{r.sector}</span>
                    <span className={styles.refText}>{r.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* TESTOVÁNÍ */}
        <section id="testovani" className={`${styles.section} ${styles.alt}`}>
          <div className="container">
            <SectionHead num="02" title={testing.title} />
            <div className={styles.sectionImg} data-reveal />
            <div className={styles.cards}>
              {testing.services
                .filter((s) => !s.bullets)
                .map((s, i) => (
                  <article
                    key={s.title}
                    className={styles.card}
                    data-reveal
                    style={stagger(i)}
                  >
                    <h3 className={styles.cardTitle}>{s.title}</h3>
                    <p className={styles.cardText}>{s.text}</p>
                  </article>
                ))}
            </div>
            <div className={`${styles.cards} ${styles.cardsWide}`}>
              {testing.services
                .filter((s) => s.bullets)
                .map((s, i) => (
                  <article
                    key={s.title}
                    className={styles.card}
                    data-reveal
                    style={stagger(i)}
                  >
                    <h3 className={styles.cardTitle}>{s.title}</h3>
                    <p className={styles.cardText}>{s.text}</p>
                    <ul className={styles.bullets}>
                      {(s.bullets ?? []).map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </article>
                ))}
            </div>
          </div>
        </section>

        {/* MICRO_ERP */}
        <section id="micro-erp" className={styles.section}>
          <div className="container">
            <SectionHead
              num="03"
              eyebrow={microErp.eyebrow}
              title={microErp.title}
            />
            <div className={styles.sectionImg} data-reveal />

            <div className={styles.vendors}>
              {microErp.vendors.map((v, i) => (
                <div
                  key={v.name}
                  className={styles.vendor}
                  data-reveal
                  style={stagger(i)}
                >
                  <span className={styles.vendorRole}>{v.role}</span>
                  <span className={styles.vendorName}>{v.name}</span>
                  <span className={styles.vendorIco}>IČO: {v.ico}</span>
                </div>
              ))}
            </div>

            <h3 className={styles.subhead}>Popis systému</h3>
            <div className={styles.infoProsa} data-reveal>
              {microErp.description.map((b) => (
                <p key={b.label} className={styles.infoText}>{b.text}</p>
              ))}
            </div>

            <div className={styles.twoCol}>
              <div>
                <h3 className={styles.subhead}>Stručný přehled</h3>
                <ul className={styles.checkList}>
                  {microErp.overview.map((o) => (
                    <li key={o}>{o}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className={styles.subhead}>Hlavní výhody</h3>
                <ul className={styles.checkList}>
                  {microErp.benefits.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>

            <h3 className={styles.subhead} id="cenik">
              Ceník a služby
            </h3>
            <div className={styles.priceList}>
              {microErp.pricing.map((p, i) => (
                <article
                  key={p.item}
                  className={styles.priceItem}
                  data-reveal
                  style={stagger(i)}
                >
                  <div className={styles.priceInfo}>
                    <h4 className={styles.priceName}>{p.item}</h4>
                    {p.note && (
                      <span className={styles.priceNote}>{p.note}</span>
                    )}
                  </div>
                  <span className={styles.priceValue}>{p.price}</span>
                </article>
              ))}
            </div>

            <h3 className={styles.subhead}>Další vhodné systémy</h3>
            <div className={styles.cards}>
              {microErp.related.map((r, i) => (
                <article
                  key={r.name}
                  className={styles.card}
                  data-reveal
                  style={stagger(i)}
                >
                  <h4 className={styles.cardTitle}>{r.name}</h4>
                  <p className={styles.cardText}>{r.text}</p>
                </article>
              ))}
            </div>

            <p className={styles.note}>{microErp.note}</p>
          </div>
        </section>

        {/* DATOVÉ CENTRUM */}
        <section
          id="datove-centrum"
          className={`${styles.section} ${styles.dark}`}
        >
          <div className="container">
            <SectionHead num="04" title={dataCenter.title} dark />
            <div className={`${styles.sectionImg} ${styles.sectionImgDark}`} data-reveal />
            <p className={`${styles.lead} ${styles.leadDark}`}>
              {dataCenter.intro}
            </p>
            <div className={styles.dcGrid}>
              {dataCenter.services.map((s, i) => (
                <article
                  key={s.title}
                  className={styles.dcItem}
                  data-reveal
                  style={stagger(i % 3)}
                >
                  <span className={styles.dcNum}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className={styles.dcTitle}>{s.title}</h3>
                    <p className={styles.dcText}>{s.text}</p>
                  </div>
                </article>
              ))}
            </div>
            <p className={`${styles.closing} ${styles.leadDark}`}>
              {dataCenter.closing}
            </p>
          </div>
        </section>

        {/* IT ODDĚLENÍ */}
        <section id="it" className={styles.section}>
          <div className="container">
            <SectionHead num="05" title={it.title} />
            <div className={styles.sectionImg} data-reveal />
            <p className={styles.lead} data-reveal>
              {it.intro}
            </p>

            <div className={`${styles.cards} ${styles.cardsWide}`}>
              {it.services.map((s, i) => (
                <article
                  key={s.title}
                  className={styles.card}
                  data-reveal
                  style={stagger(i % 3)}
                >
                  <h3 className={styles.cardTitle}>{s.title}</h3>
                  <p className={styles.cardText}>{s.text}</p>
                </article>
              ))}
            </div>

            <div className={styles.itRefs} data-reveal>
              <h3 className={styles.subhead}>Reference</h3>
              <p className={styles.cardText}>{it.clientsIntro}</p>
              <div className={styles.marquee} aria-label="Reference">
                <ul className={styles.marqueeTrack}>
                  {/* The track is two identical halves; the animation shifts it
                      by exactly one half (-50%) so the loop wraps seamlessly.
                      Each half repeats the (few, short) clients enough to span
                      the viewport. Duplicates are hidden from screen readers. */}
                  {[0, 1].map((half) =>
                    [0, 1, 2, 3].flatMap(() => it.clients).map((c, i) => (
                      <li
                        key={`${half}-${i}`}
                        className={styles.tag}
                        aria-hidden={half === 1 ? "true" : undefined}
                      >
                        {c}
                      </li>
                    ))
                  )}
                </ul>
              </div>
            </div>

            <div className={styles.itRefs} data-reveal>
              <h3 className={styles.subhead}>Vybrané projekty</h3>
              <p className={styles.cardText}>{it.portfolioIntro}</p>
              <ul className={styles.portfolio}>
                {it.portfolio.map((p) => (
                  <li key={p.url}>
                    <a
                      href={p.url}
                      className={styles.portfolioLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className={styles.portfolioName}>{p.name}</span>
                      <span className={styles.portfolioUrl}>
                        {p.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.itGrid} data-reveal>
              <div>
                <h3 className={styles.subhead}>Proč si vybrat nás</h3>
                <ul className={styles.checkList}>
                  {it.why.map((w) => (
                    <li key={w}>{w}</li>
                  ))}
                </ul>
              </div>
              <ol className={styles.steps}>
                {it.steps.map((s) => (
                  <li key={s.n} className={styles.step}>
                    <span className={styles.stepNum}>{s.n}</span>
                    <span className={styles.stepLabel}>{s.label}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      </main>

      {/* KONTAKT / FOOTER */}
      <footer id="kontakt" className={styles.footer}>
        <div className="container">
          <h2 className={styles.footerTitle}>{contact.title}</h2>
          <div className={styles.footerGrid}>
            <div className={styles.footerCol}>
              <span className={styles.footerLabel}>Společnost</span>
              <span className={styles.footerValue}>{contact.company}</span>
              <span className={styles.footerMuted}>IČO: {contact.ico}</span>
            </div>
            <div className={styles.footerCol}>
              <span className={styles.footerLabel}>Datové centrum</span>
              <span className={styles.footerValue}>{contact.location}</span>
            </div>
            <div className={styles.footerCol}>
              <span className={styles.footerLabel}>Web</span>
              <a
                href="https://www.koding.cz"
                className={styles.footerValue}
                target="_blank"
                rel="noreferrer"
              >
                {contact.web}
              </a>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <span className={styles.copy}>
              © {new Date().getFullYear()} KODING.CZ s.r.o. — Všechna práva
              vyhrazena.
            </span>
            <nav className={styles.legal} aria-label="Právní informace">
              <a href="/gdpr">Ochrana osobních údajů (GDPR)</a>
              <a href="/gdpr#cookies">Cookies</a>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}

function SectionHead({
  num,
  eyebrow,
  title,
  dark,
}: {
  num: string;
  eyebrow?: string;
  title: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`${styles.sectionHead} ${dark ? styles.sectionHeadDark : ""}`}
      data-reveal
    >
      <span className={styles.sectionNum}>{num}</span>
      <div>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 className={styles.sectionTitle}>{title}</h2>
      </div>
    </div>
  );
}
