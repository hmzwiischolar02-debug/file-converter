import { useState, useEffect } from "react";
import ToolCard from "../components/ToolCard";
import AdBanner from "../components/AdBanner";
import { TOOL_LIST, PDF_TOOLS, IMAGE_TOOLS } from "../data/tools";

const CATS = [
  { key:"all",   label:"All Tools",   tools: TOOL_LIST   },
  { key:"pdf",   label:"PDF Tools",   tools: PDF_TOOLS   },
  { key:"image", label:"Image Tools", tools: IMAGE_TOOLS },
];

export default function ToolsPage({ navigate, initialCategory = "all" }) {
  const [active, setActive] = useState(initialCategory);
  useEffect(() => { setActive(initialCategory); }, [initialCategory]);
  const cat = CATS.find(c => c.key === active) || CATS[0];
  const TITLES = { all:"All File Conversion Tools", pdf:"PDF Conversion Tools", image:"Image Conversion Tools" };

  return (
    <main className="max-w-6xl mx-auto px-4 py-14">
      <div className="text-center mb-10">
        <h1 className="font-extrabold text-slate-900 text-4xl mb-2">{TITLES[active]}</h1>
        <p className="text-slate-500 text-lg">Free online converters — no signup, no watermarks</p>
      </div>
      <AdBanner />
      <div className="flex gap-2 mt-6 mb-8 flex-wrap">
        {CATS.map(c => (
          <button key={c.key} onClick={() => { setActive(c.key); navigate(c.key === "all" ? "/tools" : `/tools/cat/${c.key}`); }}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${active === c.key ? "bg-blue-600 text-white shadow-md" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}>
            {c.label} <span className={`ml-1 text-xs ${active === c.key ? "text-blue-200" : "text-slate-400"}`}>({c.tools.length})</span>
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {cat.tools.map(t => <ToolCard key={t.id} tool={t} navigate={navigate} />)}
      </div>
      <AdBanner className="mt-8" />
    </main>
  );
}
