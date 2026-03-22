// src/pages/ToolsPage.jsx
import { useState, useEffect } from "react";
import ToolCard from "../components/ToolCard";
import AdBanner from "../components/AdBanner";
import { TOOL_LIST, PDF_TOOLS, IMAGE_TOOLS } from "../data/tools";

const CATEGORIES = [
  { key: "all",   label: "All Tools",   count: TOOL_LIST.length,   tools: TOOL_LIST   },
  { key: "pdf",   label: "PDF Tools",   count: PDF_TOOLS.length,   tools: PDF_TOOLS   },
  { key: "image", label: "Image Tools", count: IMAGE_TOOLS.length, tools: IMAGE_TOOLS },
];

export default function ToolsPage({ navigate, initialCategory = "all" }) {
  const [active, setActive] = useState(initialCategory);

  useEffect(() => { setActive(initialCategory); }, [initialCategory]);

  const cat = CATEGORIES.find(c => c.key === active) || CATEGORIES[0];

  const TITLES = {
    all:   "All Conversion Tools",
    pdf:   "PDF Conversion Tools",
    image: "Image Conversion Tools",
  };

  return (
    <main className="max-w-6xl mx-auto px-4 py-14">
      <div className="text-center mb-10">
        <p className="text-xs font-mono uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>
          ◈ {cat.count} Tools Available
        </p>
        <h1 className="font-display font-bold text-4xl mb-2" style={{ color: "var(--text-primary)" }}>
          {TITLES[active]}
        </h1>
        <p className="text-base" style={{ color: "var(--text-muted)" }}>
          Free online converters — no signup, no watermarks
        </p>
      </div>

      <AdBanner variant="horizontal" />

      {/* Category tabs */}
      <div className="flex gap-2 mt-6 mb-8 flex-wrap">
        {CATEGORIES.map(c => (
          <button key={c.key}
            onClick={() => {
              setActive(c.key);
              navigate(c.key === "all" ? "/tools" : `/tools/cat/${c.key}`);
            }}
            className="px-5 py-2 rounded-full text-sm font-mono font-medium transition-all duration-200"
            style={{
              background: active === c.key ? "var(--accent)" : "rgba(255,255,255,0.04)",
              color:      active === c.key ? "#000"         : "var(--text-muted)",
              border:     active === c.key ? "1px solid var(--accent)" : "1px solid var(--border)",
              boxShadow:  active === c.key ? "0 4px 16px rgba(0,212,255,0.25)" : "none",
            }}>
            {c.label}
            <span className="ml-2 text-xs opacity-70">({c.count})</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {cat.tools.map(tool => (
          <ToolCard key={tool.id} tool={tool} navigate={navigate} />
        ))}
      </div>

      <AdBanner variant="horizontal" className="mt-8" />
    </main>
  );
}
