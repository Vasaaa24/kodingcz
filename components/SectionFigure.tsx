import styles from "./SectionFigure.module.css";

/** Which illustration to draw — one per content section. */
export type FigureVariant = "testing" | "erp" | "datacenter" | "it";

/**
 * Hand-drawn line-art figure that fills a section's lead image slot.
 * Strokes use `currentColor`, so the dark variant only has to flip the
 * wrapper's text colour. The brand red is pulled in via `var(--accent)`.
 */
export default function SectionFigure({
  variant,
  dark = false,
  center = false,
}: {
  variant: FigureVariant;
  dark?: boolean;
  /** Centre the figure instead of aligning it to the left. */
  center?: boolean;
}) {
  return (
    <div
      className={`${styles.figure} ${dark ? styles.dark : ""} ${
        center ? styles.center : ""
      }`}
      data-reveal
      role="img"
      aria-label={LABELS[variant]}
    >
      <svg
        className={styles.svg}
        viewBox={VIEWBOXES[variant]}
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {FIGURES[variant]}
      </svg>
    </div>
  );
}

/* Each viewBox is cropped tight to that figure's content (and centred on it),
   so there's no dead canvas padding around the drawing. */
const VIEWBOXES: Record<FigureVariant, string> = {
  testing: "58 46 678 238",
  erp: "130 46 552 227",
  datacenter: "106 50 544 225",
  it: "32 48 736 208",
};

const LABELS: Record<FigureVariant, string> = {
  testing: "Ilustrace: aplikace pod lupou a kontrolní seznam testů",
  erp: "Ilustrace: jádro systému micro_ERP s napojenými moduly",
  datacenter: "Ilustrace: serverové racky, cloud a zabezpečení",
  it: "Ilustrace: vývoj, podpora a infrastruktura IT služeb",
};

const FIGURES: Record<FigureVariant, React.ReactNode> = {
  /* ---------- 02 · Testování aplikací ---------- */
  testing: (
    <>
      {/* App window */}
      <rect x="70" y="58" width="320" height="190" rx="14" />
      <line x1="70" y1="96" x2="390" y2="96" />
      <circle cx="96" cy="77" r="4.5" fill="currentColor" stroke="none" />
      <circle cx="116" cy="77" r="4.5" fill="currentColor" stroke="none" />
      <circle cx="136" cy="77" r="4.5" fill="currentColor" stroke="none" />
      {/* Axes + line chart being tested */}
      <line x1="106" y1="130" x2="106" y2="224" />
      <line x1="106" y1="224" x2="362" y2="224" />
      <polyline
        points="122,206 168,168 214,188 260,138 306,158 352,118"
        stroke="var(--accent)"
        strokeWidth="3"
      />
      <circle cx="260" cy="138" r="4.5" fill="var(--accent)" stroke="none" />
      {/* Magnifier inspecting the chart */}
      <circle cx="300" cy="190" r="52" />
      <line x1="339" y1="229" x2="382" y2="272" strokeWidth="7" />

      {/* Checklist of test results */}
      <circle cx="486" cy="96" r="16" stroke="var(--accent)" />
      <path d="M478 96 l6 7 l11 -14" stroke="var(--accent)" strokeWidth="3" />
      <line x1="520" y1="96" x2="708" y2="96" />

      <circle cx="486" cy="152" r="16" />
      <path d="M478 152 l6 7 l11 -14" strokeWidth="3" />
      <line x1="520" y1="152" x2="724" y2="152" />

      <circle cx="486" cy="208" r="16" />
      <path d="M478 208 l6 7 l11 -14" strokeWidth="3" />
      <line x1="520" y1="208" x2="690" y2="208" />
    </>
  ),

  /* ---------- 03 · micro_ERP ---------- */
  erp: (
    <>
      {/* Connectors — start just outside the hub, stop short of each module
          so the dashes never touch an icon. */}
      <g stroke="currentColor" strokeWidth="2" strokeDasharray="3 7" opacity="0.45">
        <line x1="330" y1="124" x2="226" y2="106" />
        <line x1="470" y1="124" x2="586" y2="106" />
        <line x1="330" y1="176" x2="226" y2="220" />
        <line x1="470" y1="176" x2="586" y2="220" />
      </g>

      {/* Central ERP core */}
      <rect x="350" y="108" width="100" height="84" rx="14" />
      <rect x="368" y="126" width="24" height="22" rx="4" />
      <rect x="410" y="126" width="24" height="22" rx="4" />
      <rect x="368" y="156" width="24" height="22" rx="4" fill="var(--accent)" stroke="none" />
      <rect x="410" y="156" width="24" height="22" rx="4" />

      {/* Module: document / invoices (top-left) */}
      <rect x="142" y="58" width="60" height="72" rx="7" />
      <line x1="156" y1="78" x2="188" y2="78" />
      <line x1="156" y1="94" x2="188" y2="94" />
      <line x1="156" y1="110" x2="174" y2="110" />

      {/* Module: analytics / chart (top-right) */}
      <rect x="606" y="58" width="64" height="68" rx="7" />
      <line x1="620" y1="112" x2="620" y2="98" />
      <line x1="638" y1="112" x2="638" y2="86" />
      <line x1="656" y1="112" x2="656" y2="74" />
      <line x1="614" y1="112" x2="662" y2="112" />

      {/* Module: warehouse / box (bottom-left) */}
      <path d="M144 212 l28 -15 l28 15 v34 l-28 15 l-28 -15 z" />
      <path d="M144 212 l28 15 l28 -15" />
      <line x1="172" y1="227" x2="172" y2="261" />

      {/* Module: finance / coins (bottom-right) */}
      <ellipse cx="638" cy="214" rx="30" ry="11" />
      <path d="M608 214 v14 c0 6 13 11 30 11 s30 -5 30 -11 v-14" />
      <path d="M608 228 v14 c0 6 13 11 30 11 s30 -5 30 -11 v-14" />
    </>
  ),

  /* ---------- 04 · Datové centrum (dark) ---------- */
  datacenter: (
    <>
      {/* Connectors — leave a clear gap before the cloud and the shield. */}
      <g stroke="currentColor" strokeWidth="2" strokeDasharray="3 7" opacity="0.5">
        <line x1="390" y1="114" x2="486" y2="108" />
        <line x1="390" y1="196" x2="540" y2="204" />
      </g>

      {/* Server rack 1 */}
      <rect x="120" y="64" width="118" height="176" rx="10" />
      <line x1="120" y1="104" x2="238" y2="104" />
      <line x1="120" y1="144" x2="238" y2="144" />
      <line x1="120" y1="184" x2="238" y2="184" />
      <circle cx="216" cy="84" r="3.5" fill="currentColor" stroke="none" />
      <circle cx="216" cy="124" r="3.5" fill="var(--accent)" stroke="none" />
      <circle cx="216" cy="164" r="3.5" fill="currentColor" stroke="none" />
      <circle cx="216" cy="212" r="3.5" fill="currentColor" stroke="none" />

      {/* Server rack 2 */}
      <rect x="252" y="64" width="118" height="176" rx="10" />
      <line x1="252" y1="104" x2="370" y2="104" />
      <line x1="252" y1="144" x2="370" y2="144" />
      <line x1="252" y1="184" x2="370" y2="184" />
      <circle cx="348" cy="84" r="3.5" fill="currentColor" stroke="none" />
      <circle cx="348" cy="124" r="3.5" fill="currentColor" stroke="none" />
      <circle cx="348" cy="164" r="3.5" fill="var(--accent)" stroke="none" />
      <circle cx="348" cy="212" r="3.5" fill="currentColor" stroke="none" />

      {/* Cloud (top-right) */}
      <path d="M512 128 a26 26 0 0 1 4 -51 a32 32 0 0 1 62 7 a24 24 0 0 1 -2 44 z" />

      {/* Shield with check (security, bottom-right) */}
      <path
        d="M600 168 l36 13 v26 c0 30 -20 45 -36 54 c-16 -9 -36 -24 -36 -54 v-26 z"
        stroke="var(--accent)"
      />
      <path d="M584 208 l11 12 l22 -26" stroke="var(--accent)" strokeWidth="3" />
    </>
  ),

  /* ---------- 05 · IT oddělení ---------- */
  it: (
    <>
      {/* Tile 1 — Vývoj (monitor + code) */}
      <rect x="44" y="60" width="216" height="184" rx="14" />
      <rect x="92" y="100" width="120" height="78" rx="8" />
      <line x1="152" y1="178" x2="152" y2="196" />
      <line x1="124" y1="196" x2="180" y2="196" />
      <path d="M132 122 l-16 17 l16 17" />
      <path d="M172 122 l16 17 l-16 17" />
      <line x1="162" y1="116" x2="142" y2="162" stroke="var(--accent)" strokeWidth="3" />

      {/* Tile 2 — Podpora (headset) */}
      <rect x="292" y="60" width="216" height="184" rx="14" />
      <path d="M356 158 a44 44 0 0 1 88 0" />
      <rect x="346" y="150" width="20" height="40" rx="7" />
      <rect x="434" y="150" width="20" height="40" rx="7" />
      <path d="M444 188 c0 22 -22 30 -42 30" />
      <circle cx="398" cy="218" r="5" fill="var(--accent)" stroke="none" />

      {/* Tile 3 — Infrastruktura (cloud + network) */}
      <rect x="540" y="60" width="216" height="184" rx="14" />
      <path d="M600 138 a24 24 0 0 1 4 -47 a30 30 0 0 1 58 6 a22 22 0 0 1 -2 41 z" />
      <line x1="648" y1="150" x2="616" y2="180" />
      <line x1="648" y1="150" x2="648" y2="178" />
      <line x1="648" y1="150" x2="680" y2="180" />
      <circle cx="616" cy="192" r="11" />
      <circle cx="648" cy="192" r="11" fill="var(--accent)" stroke="none" />
      <circle cx="680" cy="192" r="11" />
    </>
  ),
};
