// src/pages/ToolsPage.jsx
import { useState, useEffect } from "react";
import ToolCard from "../components/ToolCard";
import AdBanner from "../components/AdBanner";
import { TOOL_LIST, PDF_TOOLS, IMAGE_TOOLS } from "../data/tools";

const CATEGORIES = [
  { key: "all",   label: "All Tools",   tools: TOOL_LIST   },
  { key: "pdf",   label: "PDF Tools",   tools: PDF_TOOLS   },
  { key: "image", label: "Image Tools", tools: IMAGE_TOOLS },
];

export default function ToolsPage({ navigate, initialCategory = "all" }) {
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  useEffect(() => {
    setActiveCategory(initialCategory);
  }, [initialCategory]);

  const activeCat =
    CATEGORIES.find((c) => c.key === activeCategory) || CATEGORIES[0];

  const PAGE_TITLES = {
    all:   "All File Conversion Tools",
    pdf:   "PDF Conversion Tools",
    image: "Image Conversion Tools",
  };

  return (
    <main className="max-w-6xl mx-auto px-4 py-14">
      <div className="text-center mb-10">
        <h1 className="font-extrabold text-slate-900 text-4xl mb-2">
          {PAGE_TITLES[activeCategory] || PAGE_TITLES.all}
        </h1>
        <p className="text-slate-500 text-lg">
          Free online converters — no signup, no watermarks
        </p>
      </div>

      <AdBanner variant="horizontal" />

      {/* Category tabs */}
      <div className="flex gap-2 mb-8 mt-6 flex-wrap">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.key}
            onClick={() => {
              setActiveCategory(cat.key);
              const p = cat.key === "all" ? "/tools" : `/tools/cat/${cat.key}`;
              navigate(p);
            }}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
              activeCategory === cat.key
                ? "bg-blue-600 text-white shadow-md"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {cat.label}
            <span className={`ml-1.5 text-xs ${activeCategory === cat.key ? "text-blue-200" : "text-slate-400"}`}>
              ({cat.tools.length})
            </span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {activeCat.tools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} navigate={navigate} />
        ))}
      </div>

      <AdBanner variant="horizontal" className="mt-8" />
    </main>
  );
}