// src/utils/seo.js
// Call updateSEO() on every page mount to keep meta tags current.

const BASE_URL = "https://file-converters.vercel.app";
const SITE_NAME = "FileConvert";

/**
 * Update all head meta tags for the current page.
 */
export function updateSEO({ title, description, canonical, ogImage, schema }) {
  // ── Title ──────────────────────────────────────────────
  document.title = title;

  // ── Helper: upsert a <meta> tag ────────────────────────
  const setMeta = (selector, attr, value) => {
    let el = document.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      const [attrName, attrVal] = attr.split("=");
      el.setAttribute(attrName, attrVal.replace(/"/g, ""));
      document.head.appendChild(el);
    }
    el.setAttribute("content", value);
  };

  const setLink = (rel, href) => {
    let el = document.querySelector(`link[rel="${rel}"]`);
    if (!el) { el = document.createElement("link"); el.rel = rel; document.head.appendChild(el); }
    el.href = href;
  };

  // ── Standard meta ──────────────────────────────────────
  setMeta('meta[name="description"]',        'name="description"',        description);
  setMeta('meta[name="robots"]',             'name="robots"',             "index, follow, max-snippet:-1, max-image-preview:large");

  // ── Canonical ──────────────────────────────────────────
  if (canonical) setLink("canonical", canonical);

  // ── Open Graph ─────────────────────────────────────────
  setMeta('meta[property="og:title"]',       'property="og:title"',       title);
  setMeta('meta[property="og:description"]', 'property="og:description"', description);
  setMeta('meta[property="og:url"]',         'property="og:url"',         canonical || BASE_URL);
  setMeta('meta[property="og:image"]',       'property="og:image"',       ogImage || `${BASE_URL}/og-image.png`);
  setMeta('meta[property="og:type"]',        'property="og:type"',        "website");
  setMeta('meta[property="og:site_name"]',   'property="og:site_name"',   SITE_NAME);

  // ── Twitter ────────────────────────────────────────────
  setMeta('meta[name="twitter:title"]',      'name="twitter:title"',      title);
  setMeta('meta[name="twitter:description"]','name="twitter:description"',description);
  setMeta('meta[name="twitter:image"]',      'name="twitter:image"',      ogImage || `${BASE_URL}/og-image.png`);

  // ── Structured data ────────────────────────────────────
  if (schema) {
    const existing = document.getElementById("page-schema");
    if (existing) existing.remove();
    const script = document.createElement("script");
    script.id = "page-schema";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  }
}

/**
 * Build SEO data for a tool page.
 */
export function buildToolSEO(tool) {
  const url = `${BASE_URL}/tool/${tool.id}`;

  const title = tool.metaTitle;
  const description = tool.metaDesc;

  // SoftwareApplication schema per tool
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      // SoftwareApplication
      {
        "@type": "SoftwareApplication",
        "name": `${tool.name} — FileConvert`,
        "url": url,
        "description": tool.description,
        "applicationCategory": "UtilitiesApplication",
        "operatingSystem": "Any",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
        "featureList": tool.keywords,
      },
      // HowTo schema — great for rich snippets
      {
        "@type": "HowTo",
        "name": `How to ${tool.name} Online — Free`,
        "description": tool.description,
        "totalTime": "PT10S",
        "estimatedCost": { "@type": "MonetaryAmount", "currency": "USD", "value": "0" },
        "step": tool.steps.map((step, i) => ({
          "@type": "HowToStep",
          "position": i + 1,
          "name": step,
          "text": step,
        })),
      },
      // FAQPage schema — enables FAQ rich results in Google
      {
        "@type": "FAQPage",
        "mainEntity": tool.faq.map(({ q, a }) => ({
          "@type": "Question",
          "name": q,
          "acceptedAnswer": { "@type": "Answer", "text": a },
        })),
      },
      // BreadcrumbList
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home",  "item": BASE_URL },
          { "@type": "ListItem", "position": 2, "name": "Tools", "item": `${BASE_URL}/tools` },
          { "@type": "ListItem", "position": 3, "name": tool.name, "item": url },
        ],
      },
    ],
  };

  return { title, description, canonical: url, schema };
}

/**
 * Build SEO data for the home page.
 */
export function buildHomeSEO() {
  return {
    title: "Free Online File Converter – 18 Tools | FileConvert",
    description:
      "Convert PDF to Word, Word to PDF, JPG to PDF, Excel to PDF, compress PDF, merge PDF and more — 18 free tools, no signup, instant results.",
    canonical: BASE_URL,
    schema: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Free Online File Conversion Tools",
      "description": "18 free online file conversion tools for PDF, Word, Excel, PowerPoint and images.",
      "url": BASE_URL,
      "numberOfItems": 18,
      "itemListElement": [
        { "@type": "ListItem", "position": 1,  "name": "PDF to Word",    "url": `${BASE_URL}/tool/pdf-to-word`    },
        { "@type": "ListItem", "position": 2,  "name": "Word to PDF",    "url": `${BASE_URL}/tool/word-to-pdf`    },
        { "@type": "ListItem", "position": 3,  "name": "JPG to PDF",     "url": `${BASE_URL}/tool/jpg-to-pdf`     },
        { "@type": "ListItem", "position": 4,  "name": "PDF to JPG",     "url": `${BASE_URL}/tool/pdf-to-jpg`     },
        { "@type": "ListItem", "position": 5,  "name": "Merge PDF",      "url": `${BASE_URL}/tool/merge-pdf`      },
        { "@type": "ListItem", "position": 6,  "name": "Compress PDF",   "url": `${BASE_URL}/tool/compress-pdf`   },
        { "@type": "ListItem", "position": 7,  "name": "Excel to PDF",   "url": `${BASE_URL}/tool/excel-to-pdf`   },
        { "@type": "ListItem", "position": 8,  "name": "PPT to PDF",     "url": `${BASE_URL}/tool/ppt-to-pdf`     },
        { "@type": "ListItem", "position": 9,  "name": "PDF to PNG",     "url": `${BASE_URL}/tool/pdf-to-png`     },
        { "@type": "ListItem", "position": 10, "name": "Compress Image", "url": `${BASE_URL}/tool/compress-image` },
        { "@type": "ListItem", "position": 11, "name": "Unlock PDF",     "url": `${BASE_URL}/tool/unlock-pdf`     },
        { "@type": "ListItem", "position": 12, "name": "PNG to ICO",     "url": `${BASE_URL}/tool/png-to-ico`     },
        { "@type": "ListItem", "position": 13, "name": "JPG to PNG",     "url": `${BASE_URL}/tool/jpg-to-png`     },
        { "@type": "ListItem", "position": 14, "name": "PNG to JPG",     "url": `${BASE_URL}/tool/png-to-jpg`     },
        { "@type": "ListItem", "position": 15, "name": "HTML to PDF",    "url": `${BASE_URL}/tool/html-to-pdf`    },
        { "@type": "ListItem", "position": 16, "name": "Watermark PDF",  "url": `${BASE_URL}/tool/watermark-pdf`  },
        { "@type": "ListItem", "position": 17, "name": "PDF to HTML",    "url": `${BASE_URL}/tool/pdf-to-html`    },
        { "@type": "ListItem", "position": 18, "name": "Remove Background", "url": `${BASE_URL}/tool/remove-background` },
      ],
    },
  };
}