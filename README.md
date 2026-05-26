# KODING.CZ — prezentační web

Černobílý, minimalistický web pro KODING.CZ s.r.o. Postaveno na **Next.js 16** (App Router, TypeScript). Pouze texty a obrázky — žádné přihlašování ani databáze.

## Spuštění

```bash
npm install      # jednou
npm run dev      # vývojový režim → http://localhost:3000
npm run build    # produkční build
npm run start    # spuštění produkčního buildu
```

## Struktura

| Soubor | Obsah |
| --- | --- |
| `app/content.ts` | **Veškerý text webu** — sekce, ceník, kontakty. Upravujte zde. |
| `app/page.tsx` | Sestavení stránky ze sekcí. |
| `app/page.module.css` | Vzhled (černobílý design). |
| `app/globals.css` | Globální styly, barvy, fonty. |
| `components/Logo.tsx` | Logo (placeholder ve stylu značky). |

## Sekce

O nás · Testování aplikací · Systémy micro_ERP · Datové centrum · IT oddělení · Kontakt

## Logo

V `components/Logo.tsx` je zatím **placeholder** ve stylu značky (černý odznak
„KODING.CZ"). Pro nasazení oficiálního loga:

1. Vložte soubor do `public/logo.svg` (nebo `logo.png`).
2. V `components/Logo.tsx` nahraďte SVG za `next/image` odkazující na tento soubor.

## Poznámka k fontům

Diakritika (ě, š, č, ř, ž, ů) je zajištěna podsadou `latin-ext` u fontů
Inter a JetBrains Mono v `app/layout.tsx`.
