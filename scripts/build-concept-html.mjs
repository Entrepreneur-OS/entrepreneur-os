import { promises as fs } from "node:fs";
import path from "node:path";

const root = new URL("..", import.meta.url).pathname;
const conceptsDir = path.join(root, "concepts");

const faTitles = {
  "aarrr-funnel": "قیف AARRR",
  brand: "برند",
  cac: "هزینه جذب مشتری",
  churn: "ریزش",
  "cohort-analysis": "تحلیل کوهورت",
  distribution: "توزیع",
  flywheel: "فلای‌ویل",
  gtm: "ورود به بازار",
  icp: "پروفایل مشتری ایده‌آل",
  jtbd: "کارهایی که باید انجام شوند",
  ltv: "ارزش طول عمر مشتری",
  moat: "خندق دفاعی",
  "mrr-arr": "درآمد تکرارشونده ماهانه و سالانه",
  mvp: "حداقل محصول پذیرفتنی",
  "network-effects": "اثر شبکه‌ای",
  "nrr-expansion": "نگهداشت درآمد خالص و توسعه",
  plg: "رشد محصول‌محور",
  positioning: "جایگاه‌یابی",
  pricing: "قیمت‌گذاری",
  retention: "نگهداشت",
  "runway-burn": "ران‌وی و نرخ سوخت",
  "sales-cycle": "چرخه فروش",
  "switching-costs": "هزینه‌های تغییر",
  "tam-sam-som": "TAM، SAM و SOM",
  "virality-k-factor": "ویروسی‌شدن و ضریب K",
};

const faSectionTitles = new Map([
  ["What it is", "چیست؟"],
  ["Why it exists / the problem it solves", "چرا وجود دارد؟"],
  ["How experts reason with it", "استدلال متخصص‌ها"],
  ["When you use it", "زمان استفاده"],
  ["Metrics / how it's measured", "سنجه‌ها و اندازه‌گیری"],
  ["Common misconceptions", "برداشت‌های غلط رایج"],
  ["Examples", "مثال‌ها"],
  ["Talking to an LLM about it", "حرف زدن با LLM درباره آن"],
  ["My evolving understanding", "فهم در حال تکامل من"],
  ["Sources", "منابع"],
]);

const faChrome = {
  conceptMap: "نقشه مفهوم",
  domain: "دامنه",
  stage: "مرحله",
  prerequisites: "پیش‌نیازها",
  related: "مرتبط",
  contrast: "در تقابل با",
  markdown: "منبع Markdown",
  english: "نسخه انگلیسی",
  persian: "نسخه فارسی",
  note: "یادداشت: این صفحه نسخه راست‌به‌چپ طراحی‌شده از منبع Markdown است. عنوان‌ها و قاب صفحه فارسی شده‌اند؛ متن تخصصی بدنه از منبع اصلی حفظ شده تا ترجمه مفهومی هر یادداشت جداگانه بازبینی شود.",
};

const enChrome = {
  conceptMap: "Concept Map",
  domain: "Domain",
  stage: "Stage",
  prerequisites: "Prerequisites",
  related: "Related",
  contrast: "Contrast",
  markdown: "Markdown source",
  english: "English version",
  persian: "Persian version",
  note: "",
};

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function slugifyHeading(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "") || "section";
}

function linkTarget(href, locale) {
  if (!href.endsWith(".md")) return href;
  const slug = href.replace(/^\.\//, "").replace(/\.md$/, "");
  return locale === "fa" ? `./${slug}-fa.html` : `./${slug}.html`;
}

function inlineMarkdown(text, locale) {
  let value = escapeHtml(text);
  value = value.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, href) => {
    return `<a href="${escapeHtml(linkTarget(href, locale))}">${label}</a>`;
  });
  value = value.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  value = value.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  value = value.replace(/`([^`]+)`/g, "<code>$1</code>");
  return value;
}

function parseConcept(markdown) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const titleLine = lines.find((line) => line.startsWith("# ")) || "# Untitled";
  const title = titleLine.replace(/^#\s+/, "").trim();
  const quoteLines = [];
  const meta = [];
  const sections = [];
  let current = null;

  for (const line of lines.slice(1)) {
    if (line.startsWith("> ")) {
      quoteLines.push(line.replace(/^>\s?/, ""));
      continue;
    }

    if (line.startsWith("- **") && !current) {
      meta.push(line);
      continue;
    }

    if (line.startsWith("## ")) {
      current = { title: line.replace(/^##\s+/, "").trim(), lines: [] };
      sections.push(current);
      continue;
    }

    if (current) current.lines.push(line);
  }

  return {
    title,
    definition: quoteLines.join(" ").trim(),
    meta: parseMeta(meta),
    sections,
  };
}

function parseMeta(lines) {
  const meta = {};
  for (const line of lines) {
    const match = line.match(/^- \*\*([^:]+):\*\*\s*(.*)$/);
    if (!match) continue;
    const key = match[1].toLowerCase();
    meta[key] = match[2].trim();
  }
  return meta;
}

function blocksToHtml(lines, locale) {
  const html = [];
  let paragraph = [];
  let list = null;

  function flushParagraph() {
    if (!paragraph.length) return;
    html.push(`<p>${inlineMarkdown(paragraph.join(" "), locale)}</p>`);
    paragraph = [];
  }

  function flushList() {
    if (!list) return;
    html.push(`<${list.type}>${list.items.map((item) => `<li>${inlineMarkdown(item, locale)}</li>`).join("")}</${list.type}>`);
    list = null;
  }

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) {
      flushParagraph();
      flushList();
      continue;
    }

    const unordered = line.match(/^-\s+(.*)$/);
    const ordered = line.match(/^\d+\.\s+(.*)$/);
    if (unordered || ordered) {
      flushParagraph();
      const type = unordered ? "ul" : "ol";
      if (!list || list.type !== type) {
        flushList();
        list = { type, items: [] };
      }
      list.items.push((unordered || ordered)[1]);
      continue;
    }

    flushList();
    paragraph.push(line);
  }

  flushParagraph();
  flushList();
  return html.join("\n");
}

function sectionTitle(title, locale) {
  if (locale !== "fa") return title;
  return faSectionTitles.get(title) || title;
}

function pageTitle(concept, slug, locale) {
  if (locale === "fa") return faTitles[slug] || concept.title;
  return concept.title;
}

function metadataHtml(concept, locale) {
  const chrome = locale === "fa" ? faChrome : enChrome;
  const rows = [
    [chrome.domain, concept.meta.domain],
    [chrome.stage, concept.meta.stage],
    [chrome.prerequisites, concept.meta.prerequisites],
    [chrome.related, concept.meta.related],
  ].filter(([, value]) => value);

  return rows.map(([label, value]) => `
          <div class="meta-item">
            <span class="meta-label">${escapeHtml(label)}</span>
            <span class="meta-value">${inlineMarkdown(value, locale)}</span>
          </div>`).join("");
}

function renderPage(concept, slug, locale) {
  const isFa = locale === "fa";
  const chrome = isFa ? faChrome : enChrome;
  const title = pageTitle(concept, slug, locale);
  const sourceHref = `./${slug}.md`;
  const counterpartHref = isFa ? `./${slug}.html` : `./${slug}-fa.html`;
  const navSections = concept.sections.map((section) => ({
    id: slugifyHeading(section.title),
    title: sectionTitle(section.title, locale),
  }));
  const definition = isFa && slug !== "pmf"
    ? chrome.note
    : concept.definition;

  return `<!doctype html>
<html lang="${isFa ? "fa" : "en"}" dir="${isFa ? "rtl" : "ltr"}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(title)} | Entrepreneur-OS</title>
  <meta name="description" content="${escapeHtml(concept.definition || title)}">
  ${isFa ? `<link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">` : ""}
  <style>
    :root {
      color-scheme: light;
      --bg: #f7f8f6;
      --paper: #ffffff;
      --ink: #17201b;
      --muted: #5d6b63;
      --line: #dce4dd;
      --accent: #0f7b5f;
      --accent-strong: #075f49;
      --accent-soft: #e4f4ef;
      --warning-soft: #fff2cc;
      --shadow: 0 22px 70px rgba(23, 32, 27, 0.10);
      --radius: 8px;
      font-family: ${isFa ? `"Vazirmatn", ` : ""}Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    }

    * { box-sizing: border-box; }

    body {
      margin: 0;
      background: linear-gradient(${isFa ? "240deg" : "120deg"}, rgba(15, 123, 95, 0.09), transparent 34rem), var(--bg);
      color: var(--ink);
      line-height: ${isFa ? "1.9" : "1.65"};
    }

    a {
      color: var(--accent-strong);
      text-decoration-thickness: 0.08em;
      text-underline-offset: 0.18em;
    }

    .shell {
      display: grid;
      grid-template-columns: ${isFa ? "minmax(0, 1fr) minmax(13rem, 17rem)" : "minmax(13rem, 17rem) minmax(0, 1fr)"};
      gap: 2.5rem;
      width: min(1180px, calc(100% - 2rem));
      margin: 0 auto;
      padding: 2rem 0 4rem;
      ${isFa ? "direction: ltr;" : ""}
    }

    .sidebar {
      position: sticky;
      top: 1rem;
      align-self: start;
      padding: 1rem 0;
      ${isFa ? "grid-column: 2; direction: rtl;" : ""}
    }

    main {
      min-width: 0;
      ${isFa ? "grid-column: 1; grid-row: 1; direction: rtl;" : ""}
    }

    .brand {
      display: inline-flex;
      align-items: center;
      gap: 0.6rem;
      color: var(--ink);
      font-weight: 850;
      text-decoration: none;
    }

    .brand-mark {
      display: grid;
      place-items: center;
      width: 2rem;
      height: 2rem;
      border: 1px solid var(--line);
      border-radius: 7px;
      background: var(--paper);
      color: var(--accent-strong);
      box-shadow: 0 8px 24px rgba(23, 32, 27, 0.08);
      font-size: 0.78rem;
    }

    .toc {
      margin-top: 2rem;
      padding-top: 1rem;
      border-top: 1px solid var(--line);
    }

    .toc-title {
      margin: 0 0 0.7rem;
      color: var(--muted);
      font-size: 0.78rem;
      font-weight: 900;
      ${isFa ? "" : "letter-spacing: 0.09em; text-transform: uppercase;"}
    }

    .toc a {
      display: block;
      padding: 0.36rem 0;
      color: var(--muted);
      font-size: 0.95rem;
      font-weight: ${isFa ? "700" : "500"};
      text-decoration: none;
    }

    .hero, section {
      border: 1px solid var(--line);
      border-radius: var(--radius);
      background: rgba(255, 255, 255, 0.9);
    }

    .hero {
      overflow: hidden;
      background: var(--paper);
      box-shadow: var(--shadow);
    }

    .hero-top {
      display: grid;
      grid-template-columns: minmax(0, 1fr) 14rem;
      gap: 2rem;
      padding: clamp(1.4rem, 4vw, 3rem);
      border-bottom: 1px solid var(--line);
    }

    .eyebrow {
      margin: 0 0 0.75rem;
      color: var(--accent-strong);
      font-size: 0.82rem;
      font-weight: 900;
      ${isFa ? "" : "letter-spacing: 0.12em; text-transform: uppercase;"}
    }

    h1 {
      margin: 0;
      max-width: ${isFa ? "14ch" : "13ch"};
      font-size: clamp(2.2rem, 6.5vw, 5.2rem);
      line-height: ${isFa ? "1.1" : "0.96"};
      letter-spacing: 0;
    }

    .subtitle {
      max-width: 45rem;
      margin: 1.2rem 0 0;
      color: var(--muted);
      font-size: clamp(1.04rem, 1.6vw, 1.28rem);
    }

    .signal {
      align-self: stretch;
      display: grid;
      align-content: center;
      gap: 1rem;
      padding: 1.1rem;
      border: 1px solid var(--line);
      border-radius: var(--radius);
      background: linear-gradient(180deg, #ffffff, #f3faf7);
    }

    .signal-line {
      height: 0.8rem;
      overflow: hidden;
      border-radius: 999px;
      background: #e3eae5;
    }

    .signal-line::before {
      content: "";
      display: block;
      width: 72%;
      height: 100%;
      border-radius: inherit;
      background: linear-gradient(90deg, #b7e4d2, var(--accent));
    }

    .signal p {
      margin: 0;
      color: var(--ink);
      font-size: 0.98rem;
      font-weight: 650;
    }

    .metadata {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 1px;
      background: var(--line);
    }

    .meta-item {
      min-width: 0;
      padding: 1rem;
      background: #fbfcfb;
    }

    .meta-label {
      display: block;
      margin-bottom: 0.2rem;
      color: var(--muted);
      font-size: 0.74rem;
      font-weight: 900;
      ${isFa ? "" : "letter-spacing: 0.1em; text-transform: uppercase;"}
    }

    .meta-value {
      display: block;
      color: var(--ink);
      font-weight: 720;
    }

    .content {
      display: grid;
      gap: 1rem;
      margin-top: 1rem;
    }

    section {
      padding: clamp(1.25rem, 3vw, 2rem);
    }

    section h2 {
      margin: 0 0 0.9rem;
      font-size: clamp(1.35rem, 2.2vw, 2rem);
      line-height: ${isFa ? "1.35" : "1.15"};
      letter-spacing: 0;
    }

    section p { margin: 0.75rem 0 0; }
    section p:first-of-type { margin-top: 0; }
    strong { font-weight: 900; }
    code {
      padding: 0.08rem 0.28rem;
      border-radius: 5px;
      background: var(--accent-soft);
      color: var(--accent-strong);
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
      direction: ltr;
      unicode-bidi: isolate;
    }

    ul, ol {
      margin: 0.8rem 0 0;
      padding-${isFa ? "right" : "left"}: 1.25rem;
      padding-${isFa ? "left" : "right"}: 0;
    }

    li + li { margin-top: 0.55rem; }

    blockquote, .note {
      margin: 0;
      padding: 1rem 1.1rem;
      border-${isFa ? "right" : "left"}: 4px solid var(--accent);
      border-radius: var(--radius);
      background: var(--accent-soft);
      color: var(--ink);
      font-weight: 700;
    }

    .footer-nav {
      display: flex;
      flex-wrap: wrap;
      gap: 0.7rem;
      margin-top: 1rem;
    }

    .pill {
      display: inline-flex;
      align-items: center;
      min-height: 2.2rem;
      padding: 0.4rem 0.75rem;
      border: 1px solid var(--line);
      border-radius: 999px;
      background: var(--paper);
      color: var(--accent-strong);
      font-weight: 760;
      text-decoration: none;
    }

    @media (max-width: 860px) {
      .shell {
        display: block;
        width: min(100% - 1rem, 46rem);
        padding-top: 0.75rem;
      }

      .sidebar {
        position: static;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        padding: 0.75rem 0 1rem;
      }

      .toc { display: none; }
      .hero-top { grid-template-columns: 1fr; }
      .metadata { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    }

    @media (max-width: 520px) {
      .metadata { grid-template-columns: 1fr; }
      section { padding: 1rem; }
    }
  </style>
</head>
<body>
  <div class="shell">
    <aside class="sidebar" aria-label="${isFa ? "ناوبری مفهوم" : "Concept navigation"}">
      <a class="brand" href="../README.md" aria-label="Entrepreneur-OS">
        <span>${isFa ? "Entrepreneur-OS" : "Entrepreneur-OS"}</span>
        <span class="brand-mark" dir="ltr">EOS</span>
      </a>
      <nav class="toc" aria-label="${isFa ? "بخش‌های صفحه" : "Page sections"}">
        <p class="toc-title">${chrome.conceptMap}</p>
        ${navSections.map((section) => `<a href="#${section.id}">${escapeHtml(section.title)}</a>`).join("\n        ")}
      </nav>
    </aside>

    <main>
      <header class="hero">
        <div class="hero-top">
          <div>
            <p class="eyebrow">${isFa ? "مفهوم کارآفرینی" : "Entrepreneurship concept"}</p>
            <h1>${escapeHtml(title)}</h1>
            <p class="subtitle">${inlineMarkdown(definition, locale)}</p>
          </div>
          <aside class="signal" aria-label="${isFa ? "سیگنال مفهومی" : "Concept signal"}">
            <div class="signal-line" aria-hidden="true"></div>
            <p>${isFa ? "از تعریف عبور کن؛ این صفحه برای فهم عملی، تصمیم‌گیری، و گفتگو با AI ساخته شده است." : "Move past the definition: use this concept to reason, decide, and prompt AI more precisely."}</p>
          </aside>
        </div>
        <div class="metadata" aria-label="${isFa ? "فراداده مفهوم" : "Concept metadata"}">${metadataHtml(concept, locale)}
        </div>
      </header>

      <div class="content">
        ${concept.sections.map((section) => `
        <section id="${slugifyHeading(section.title)}">
          <h2>${escapeHtml(sectionTitle(section.title, locale))}</h2>
          ${blocksToHtml(section.lines, locale)}
        </section>`).join("\n")}

        <section>
          <h2>${isFa ? "پیوندها" : "Links"}</h2>
          <nav class="footer-nav" aria-label="${isFa ? "پیوندهای صفحه" : "Page links"}">
            <a class="pill" href="${counterpartHref}">${isFa ? chrome.english : chrome.persian}</a>
            <a class="pill" href="${sourceHref}">${chrome.markdown}</a>
          </nav>
        </section>
      </div>
    </main>
  </div>
</body>
</html>
`;
}

const files = (await fs.readdir(conceptsDir))
  .filter((file) => file.endsWith(".md"))
  .sort();

for (const file of files) {
  const slug = file.replace(/\.md$/, "");
  const markdown = await fs.readFile(path.join(conceptsDir, file), "utf8");
  const concept = parseConcept(markdown);

  for (const locale of ["en", "fa"]) {
    const outFile = locale === "fa" ? `${slug}-fa.html` : `${slug}.html`;
    const outPath = path.join(conceptsDir, outFile);

    if (slug === "pmf") {
      continue;
    }

    await fs.writeFile(outPath, renderPage(concept, slug, locale), "utf8");
  }
}

console.log(`Generated HTML for ${files.length - 1} concepts in English and Persian shells.`);
