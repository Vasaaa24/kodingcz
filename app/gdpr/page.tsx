import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import { contact } from "../content";
import styles from "./gdpr.module.css";

export const metadata: Metadata = {
  title: "Ochrana osobních údajů (GDPR)",
  description:
    "Zásady zpracování a ochrany osobních údajů a používání cookies společnosti KODING.CZ",
};

export default function GdprPage() {
  return (
    <>
      <SiteHeader />
      <main className={`container ${styles.page}`}>
        <p className="eyebrow">Právní informace</p>
        <h1 className={styles.title}>Ochrana osobních údajů</h1>
        <p className={styles.updated}>Účinné od 26. 5. 2026</p>

        <section className={styles.section}>
          <h2>1. Správce osobních údajů</h2>
          <p>
            Správcem osobních údajů je společnost{" "}
            <strong>{contact.company}</strong>, IČO: {contact.ico} (dále jen
            „správce"). Správce lze kontaktovat prostřednictvím údajů uvedených
            na webu {contact.web}.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Jaké údaje zpracováváme</h2>
          <ul>
            <li>Identifikační a kontaktní údaje (jméno, e-mail, telefon, firma).</li>
            <li>Údaje z komunikace a poptávek, které nám sami poskytnete.</li>
            <li>
              Technické údaje o návštěvě webu (IP adresa, typ prohlížeče,
              soubory cookies — viz část 7).
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>3. Účely a právní základ zpracování</h2>
          <ul>
            <li>Vyřízení poptávky a komunikace — plnění smlouvy / oprávněný zájem.</li>
            <li>Plnění zákonných povinností (účetnictví, daně).</li>
            <li>
              Analýza návštěvnosti a zlepšování webu — na základě vašeho
              souhlasu.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>4. Doba uchování</h2>
          <p>
            Osobní údaje uchováváme pouze po nezbytně nutnou dobu, případně po
            dobu stanovenou právními předpisy, a poté je bezpečně likvidujeme.
          </p>
        </section>

        <section className={styles.section}>
          <h2>5. Předání třetím stranám</h2>
          <p>
            Údaje nepředáváme nikomu, kdo by je zneužil. Zpracovatelé (např.
            poskytovatelé IT a hostingu) jsou vázáni zpracovatelskou smlouvou a
            mlčenlivostí.
          </p>
        </section>

        <section className={styles.section}>
          <h2>6. Vaše práva</h2>
          <p>V souladu s GDPR máte právo na:</p>
          <ul>
            <li>přístup k osobním údajům a jejich opravu;</li>
            <li>výmaz („právo být zapomenut") a omezení zpracování;</li>
            <li>přenositelnost údajů;</li>
            <li>vznesení námitky proti zpracování;</li>
            <li>odvolání souhlasu kdykoli;</li>
            <li>
              podání stížnosti u Úřadu pro ochranu osobních údajů (uoou.cz).
            </li>
          </ul>
        </section>

        <section id="cookies" className={styles.section}>
          <h2>7. Cookies</h2>
          <p>
            Cookies jsou malé soubory ukládané ve vašem prohlížeči. Používáme:
          </p>
          <ul>
            <li>
              <strong>Nezbytné cookies</strong> — potřebné pro základní fungování
              webu (např. uložení vaší volby souhlasu). Tyto cookies nelze
              odmítnout.
            </li>
            <li>
              <strong>Analytické cookies</strong> — pomáhají nám pochopit, jak je
              web používán. Používáme je pouze s vaším souhlasem.
            </li>
          </ul>
          <p>
            Svůj souhlas s cookies můžete kdykoli změnit smazáním uložené volby
            v prohlížeči (vymazáním dat webu), čímž se vám lišta se souhlasem
            znovu zobrazí.
          </p>
        </section>

        <section className={styles.section}>
          <h2>8. Kontakt</h2>
          <p>
            S dotazy ohledně zpracování osobních údajů se obraťte na správce:{" "}
            {contact.company}, IČO: {contact.ico}, prostřednictvím kontaktních
            údajů uvedených na webu {contact.web}.
          </p>
        </section>

        <p className={styles.back}>
          <a href="/">← Zpět na úvod</a>
        </p>
      </main>
    </>
  );
}
