// Veškerý textový obsah webu KODING.CZ na jednom místě.
// Texty převzaty doslovně z podkladových PDF (opravena diakritika a překlepy).

export const nav = [
  { href: "/#o-nas", label: "O nás" },
  { href: "/#testovani", label: "Testování" },
  { href: "/#micro-erp", label: "Micro ERP" },
  { href: "/#cenik", label: "Ceník" },
  { href: "/#datove-centrum", label: "Datové centrum" },
  { href: "/#it", label: "IT oddělení" },
  { href: "/#kontakt", label: "Kontakt" },
];

export const hero = {
  eyebrow: "KODING.CZ s.r.o.",
  title: "Odborná skupina nezávislých profesionálů",
  lead: "Tým specialistů s dlouholetou praxí v oborech IT, FinTech, pojišťovnictví, bankovního a finančního managementu.",
  tags: ["IT", "FinTech", "Pojišťovnictví", "Bankovnictví", "Finanční management"],
  ctas: [
    { href: "/#testovani", label: "Naše služby", primary: true },
    { href: "/#kontakt", label: "Kontaktujte nás", primary: false },
  ],
  stats: [
    { value: "24/7", label: "Monitoring a podpora (NOC)" },
    { value: "3", label: "regulovaná odvětví" },
    { value: "10+", label: "služeb datového centra" },
    { value: "100%", label: "data v rukou klienta" },
  ],
};

export const cta = {
  eyebrow: "Spojme síly",
  title: "Pojďme posunout vaše IT, testování a data o úroveň výš.",
  text: "Od testování aplikací v regulovaných odvětvích přes systémy micro_ERP až po provoz datového centra — řešení šijeme na míru vašim potřebám.",
  button: { href: "/#kontakt", label: "Kontaktujte nás" },
};

export const about = {
  title: "O nás",
  paragraphs: [
    "Jsme odborná skupina nezávislých profesionálů. KODING.CZ je tým specialistů s dlouholetou praxí v oborech: IT, FinTech, pojišťovnictví, bankovního a finančního managementu.",
    "Vyvíjíme, aplikujeme a spravujeme databáze a interaktivní řídicí systémy ERP a CRM. Šité na míru dle potřeb a požadavků zákazníka! Oddíl IT se zaměřuje i na rozsáhlé programování v rámci externích systémů.",
    "Provozujeme a nabízíme rozsáhlé služby Datového Centra (DC – Zbraslav).",
  ],
  refIntro: "Zkušenosti z testování softwaru v regulovaných odvětvích.",
  references: [
    {
      sector: "Bankovnictví",
      text: "Bezpečnostní testování bankovních aplikací a ochrana dat.",
    },
    {
      sector: "Pojišťovnictví",
      text: "Testování úvěrových modulů a systémů.",
    },
    {
      sector: "Státní správa",
      text: "Testování aplikací dodaných na zakázku.",
    },
  ],
};

export const testing = {
  title: "Testování aplikací",
  services: [
    {
      title: "Funkční testování",
      text: "Ověřujeme, že vaše aplikace dělá přesně to, co má. Testujeme scénáře, funkce i okrajové případy.",
    },
    {
      title: "Automatizované testování",
      text: "Implementujeme automatizované testy pro rychlé a opakovatelné ověřování kvality.",
    },
    {
      title: "Výkonnostní testování",
      text: "Simulujeme zátěž a analyzujeme chování aplikace při vysokém provozu.",
    },
    {
      title: "Bezpečnostní testování",
      text: "Identifikujeme zranitelnosti a chráníme vaše data.",
    },
    {
      title: "UX / uživatelské testování",
      text: "Zlepšujeme použitelnost a uživatelský zážitek.",
    },
    {
      title: "Kybernetická bezpečnost",
      text: "Chráníme infrastrukturu před kybernetickými hrozbami a zajišťujeme její odolnost.",
      bullets: [
        "Ochrana proti útokům (např. DDoS)",
        "Správa firewallů a bezpečnostních politik",
        "Aktualizace a patch management",
        "Identifikace zranitelností",
      ],
    },
    {
      title: "Monitoring a podpora (NOC 24/7)",
      text: "Nepřetržitý dohled nad systémy a rychlá reakce na incidenty.",
      bullets: [
        "24/7 monitoring infrastruktury",
        "Proaktivní řešení problémů",
        "Minimalizace výpadků",
        "Reporting a podpora",
      ],
    },
  ],
};

export const microErp = {
  eyebrow: "Systémy micro_ERP",
  title: "Interaktivní automatické výpočetní systémy micro_ERP ©",
  vendors: [
    { role: "Vývojář systému", name: "micro ERP s.r.o.", ico: "07715811" },
    {
      role: "Technický správce systému",
      name: "F.I.T. – Financial Information Technologies spol. s r.o.",
      ico: "28489870",
    },
    {
      role: "Poskytovatel a administrativní správce systému",
      name: "KODING.CZ s.r.o.",
      ico: "17910714",
    },
  ],
  description: [
    {
      label: "Co to je",
      text: "Systém micro_ERP je interaktivní výpočetní databáze pro správu a řízení podniků na bázi Microsoft Office, zejména Excel a Access, a vlastních programových modulů propojujících celou databázi. Programy a moduly minimalizují informativní chyby při práci se zadáváním informací a dat do systému a generováním reportů pro následnou analýzu.",
    },
    {
      label: "Zadávání dat",
      text: "Informace a data se zadávají do systému ručně, poloautomaticky i automaticky z různých serverů, aplikací a databází na základě speciálních programů.",
    },
    {
      label: "Výhody",
      text: "Výhodou micro_ERP je jeho nízká nákladnost v měřítku délky užívání a náročnosti provozu v porovnání s podobnými systémy a jednoduchost uživatelského rozhraní přizpůsobeného požadavkům klienta.",
    },
    {
      label: "Bezpečnost dat",
      text: "Bezpečnost, sdílení, uchování a únik citlivých dat a informací je zajištěno v rámci systému, kde klient nepoužívá žádné cizí servery, cloudy a úložiště — používá pouze svoji uzamykatelnou databázi, která je vždy po ruce.",
    },
    {
      label: "Využití v praxi",
      text: "Aplikování micro_ERP do obchodní struktury umožňuje detailní kontrolu a analýzu finanční situace, plánování stávajícího/budoucího rozpočtu a přehlednou finanční historii s výkazem hrubého/čistého zisku na dva kliky.",
    },
  ],
  overview: [
    "micro_ERP je interaktivní databáze finančních transakcí, kde klient přehledně sleduje, analyzuje a plánuje svou finanční stabilitu.",
    "micro_ERP se instaluje přímo na zařízení zákazníka na bázi Microsoft Office a programových prvků, modulů a kódu v programovém jazyce (VBA).",
    "micro_ERP se přizpůsobí klientovi, náročnosti a počtu jeho obchodních struktur a množství transakcí.",
  ],
  benefits: [
    "Každodenní a libovolný přehled pohybů všech finančních transakcí.",
    "Analýza, plánování a reportování pro zlepšení a koordinaci obchodního výkonu.",
    "Souhrn celkového balancu a hrubého/čistého zisku pro předešlé, současné a budoucí období.",
  ],
  pricing: [
    {
      item: "Demo verze systému",
      price: "250 000,- Kč až 750 000,- Kč",
      note: "dle náročnosti podniku a obchodní struktury",
    },
    {
      item: "Přizpůsobení a zprovoznění systému dle kritéria klienta",
      price: "50 000,- Kč až 250 000,- Kč",
      note: "",
    },
    {
      item: "Správa databáze včetně vývojářské činnosti (paušálně)",
      price: "50 000,- Kč až 150 000,- Kč měsíčně",
      note: "",
    },
    {
      item: "Zadávání informací / dat / souboru do databáze / systému",
      price: "50,- Kč až 90,- Kč",
      note: "položka / dokument",
    },
    {
      item: "Jiné služby související s dodatečnými funkcemi systému",
      price: "Individuálně",
      note: "jsou řešeny individuálně",
    },
  ],
  related: [
    {
      name: "DFU – Detailní Finanční Účetnictví",
      text: "Určeno pro správu a řízení holdingu a rozsáhlých struktur.",
    },
    {
      name: "ERP_Executant",
      text: "Správa a řízení personalistiky, využití pro pracovní agentury a CRM systémy.",
    },
    {
      name: "micro_Dock_Cloud",
      text: "Správa, řízení a archivace obchodní dokumentace a spojených procesů.",
    },
  ],
  note: "Dále nabízíme automatické systémy k testování a BETA testování aplikací, IT, FinTech a StartUp projektů, zaměřených především na správu a řízení analytických účtů a hierarchických podúčtů, výpočtu a reportu úrokových sazeb, provizních systémů a stručných přehledů o čistém zisku korporace.",
};

export const dataCenter = {
  title: "Datové centrum",
  intro:
    "Naše datové centrum poskytuje komplexní profesionální portfolio služeb zaměřených hlavně na bezpečný a efektivní provoz IT infrastruktury zákazníků.",
  services: [
    {
      title: "Server housing / Colocation",
      text: "Nabízíme možnost umístění vlastních serverů zákazníka do našeho profesionálního datového centra. Zajišťujeme redundantní napájení, klimatizaci, vysokorychlostní konektivitu a nepřetržité fyzické zabezpečení. Zákazníci tak získávají stabilní a bezpečné prostředí bez nutnosti budovat vlastní serverovnu.",
    },
    {
      title: "Cloudové služby (IaaS, PaaS, SaaS)",
      text: "Poskytujeme moderní cloudové služby umožňující flexibilní provoz aplikací a systémů. Nabízíme virtuální servery, cloudová úložiště, platformy pro vývoj aplikací i hotové softwarové služby dostupné online. Naše cloudová infrastruktura umožňuje rychlé škálování výkonu dle potřeb zákazníka.",
    },
    {
      title: "Hosting a managed hosting",
      text: "Zajišťujeme hosting webových aplikací, databází i podnikových systémů. V rámci managed hostingu poskytujeme kompletní správu serverů včetně aktualizací, monitoringu, bezpečnostních opatření a technické podpory.",
    },
    {
      title: "Zálohování a disaster recovery",
      text: "Nabízíme profesionální zálohovací řešení a služby obnovy po havárii. Pomáháme chránit firemní data před ztrátou způsobenou výpadkem, kybernetickým útokem nebo technickou chybou a zajišťujeme rychlou obnovu systémů.",
    },
    {
      title: "Síťové služby a konektivita",
      text: "Poskytujeme vysokorychlostní a redundantní internetovou konektivitu, správu sítí, VLAN konfigurace, BGP routing i ochranu proti DDoS útokům. Naše síťová infrastruktura zajišťuje stabilní a bezpečný přenos dat.",
    },
    {
      title: "Bezpečnostní služby",
      text: "Bezpečnost je pro nás prioritou. Nabízíme fyzické zabezpečení datového centra, kamerové systémy, řízení přístupu, firewallové ochrany, monitoring bezpečnostních událostí a další nástroje pro ochranu zákaznických systémů a dat.",
    },
    {
      title: "Virtualizace a virtuální infrastruktura",
      text: "Dodáváme řešení založená na virtualizaci serverů a infrastruktury. Pomáháme zákazníkům optimalizovat využití hardwaru, snižovat provozní náklady a zvyšovat flexibilitu IT prostředí.",
    },
    {
      title: "Monitoring a správa infrastruktury",
      text: "Zajišťujeme nepřetržitý dohled nad servery, aplikacemi a síťovou infrastrukturou. Naši specialisté monitorují provoz 24/7 a v případě incidentu okamžitě reagují, aby byla zajištěna maximální dostupnost služeb.",
    },
    {
      title: "Pronájem racků a dedikovaných serverů",
      text: "Nabízíme pronájem rackových pozic i výkonných dedikovaných serverů dle požadavků zákazníka. Řešení je vhodné pro společnosti vyžadující vysoký výkon, spolehlivost a plnou kontrolu nad hardwarem.",
    },
    {
      title: "Hybridní a multi-cloud řešení",
      text: "Navrhujeme a provozujeme hybridní a multi-cloud infrastruktury kombinující privátní a veřejné cloudové služby. Pomáháme zákazníkům optimalizovat výkon, dostupnost a efektivně řídit náklady na IT.",
    },
  ],
  closing:
    "Naším cílem je poskytovat zákazníkům moderní a bezpečné IT služby, které podporují stabilní růst jejich podnikání a zajišťují vysokou dostupnost systémů.",
};

export const it = {
  title: "IT oddělení",
  why: [
    "Zkušenosti z praxe",
    "Rychlé zapojení",
    "Důraz na výsledky",
    "Moderní nástroje",
    "Transparentní komunikace",
  ],
  steps: [
    { n: "01", label: "Analýza požadavků" },
    { n: "02", label: "Návrh strategie" },
    { n: "03", label: "Testovací scénáře" },
    { n: "04", label: "Realizace" },
    { n: "05", label: "Report" },
  ],
};

export const contact = {
  title: "Kontakt",
  company: "KODING.CZ s.r.o.",
  ico: "17910714",
  location: "Datové centrum – Zbraslav",
  web: "www.koding.cz",
};
