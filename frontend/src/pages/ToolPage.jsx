// src/pages/ToolPage.jsx
import { useEffect, useState } from "react";
import { TOOLS, TOOL_LIST } from "../data/tools";
import { useConverter } from "../hooks/useConverter";

import Breadcrumb   from "../components/Breadcrumb";
import DropZone     from "../components/DropZone";
import FileList     from "../components/FileList";
import ProgressBar  from "../components/ProgressBar";
import DownloadCard from "../components/DownloadCard";
import FAQSection   from "../components/FAQSection";
import AdBanner     from "../components/AdBanner";
import ToolCard     from "../components/ToolCard";

export default function ToolPage({ toolId, navigate }) {
  const tool = TOOLS[toolId];
  const [password, setPassword] = useState("");

  const { files, status, progress, result, error, handleFiles, convert, reset } =
    useConverter(tool);

  // SEO — update title + meta per tool
  useEffect(() => {
    document.title = tool.metaTitle;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = tool.metaDesc;
  }, [tool]);

  const relatedTools = TOOL_LIST.filter((t) => t.id !== toolId).slice(0, 3);
  const needsPassword = toolId === "unlock-pdf";

  const handleConvert = () => {
    convert(needsPassword ? { password } : {});
  };

  const handleReset = () => {
    reset();
    setPassword("");
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <Breadcrumb
        navigate={navigate}
        crumbs={[
          { label: "Home",  path: "/" },
          { label: "Tools", path: "/tools" },
          { label: tool.name },
        ]}
      />

      {/* Tool header */}
      <div className="text-center mb-10">
        <div className="text-5xl mb-4">{tool.emoji}</div>
        <h1 className="font-extrabold text-slate-900 text-4xl mb-3">
          {tool.name} Converter
        </h1>
        <p className="text-slate-500 text-lg max-w-xl mx-auto">
          {tool.description}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
          {tool.keywords.map((kw) => (
            <span key={kw} className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full">
              {kw}
            </span>
          ))}
        </div>
      </div>

      <AdBanner variant="horizontal" />

      {/* ── Converter card ──────────────────────────────────── */}
      <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xl shadow-slate-100 mt-6">

        {/* IDLE */}
        {status === "idle" && (
          <>
            <DropZone tool={tool} onFiles={handleFiles} />

            {error && (
              <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700 flex items-center gap-2">
                ⚠️ {error}
              </div>
            )}

            {files.length > 0 && (
              <>
                <FileList files={files} tool={tool} />

                {/* Password field for Unlock PDF */}
                {needsPassword && (
                  <div className="mt-4">
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      PDF Password
                    </label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter the PDF password…"
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl text-sm focus:outline-none focus:border-red-400 transition-colors"
                    />
                    <p className="text-xs text-slate-400 mt-1.5">
                      Required to unlock a password-protected PDF
                    </p>
                  </div>
                )}

                <AdBanner variant="horizontal" />

                <button
                  onClick={handleConvert}
                  disabled={needsPassword && !password.trim()}
                  className="w-full py-4 text-white font-bold rounded-2xl shadow-lg hover:opacity-90 active:scale-95 transition-all text-lg mt-2 disabled:opacity-40 disabled:cursor-not-allowed"
                  style={{ background: `linear-gradient(135deg, ${tool.color}, ${tool.color}cc)` }}
                >
                  {toolId === "unlock-pdf"   ? "Unlock PDF →"         :
                   toolId === "compress-image" ? "Compress Image →"   :
                   `Convert to ${tool.to} →`}
                </button>
              </>
            )}
          </>
        )}

        {/* CONVERTING */}
        {status === "converting" && (
          <ProgressBar progress={Math.round(progress)} tool={tool} />
        )}

        {/* DONE */}
        {status === "done" && result && (
          <DownloadCard result={result} tool={tool} onReset={handleReset} />
        )}

        {/* ERROR */}
        {status === "error" && (
          <div className="text-center py-10">
            <div className="text-5xl mb-4">❌</div>
            <h3 className="font-bold text-red-700 text-xl mb-2">Conversion Failed</h3>
            <p className="text-slate-600 text-sm mb-6 max-w-sm mx-auto">
              {error || "An unexpected error occurred. Please try again."}
            </p>
            <button
              onClick={handleReset}
              className="px-8 py-3 bg-slate-900 text-white font-semibold rounded-xl hover:bg-slate-800 transition-colors"
            >
              Try Again
            </button>
          </div>
        )}
      </div>

      {/* Steps row */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        {tool.steps.map((step, i) => (
          <div key={i} className="rounded-2xl p-4 text-center" style={{ background: tool.lightBg }}>
            <div
              className="w-8 h-8 rounded-full text-white font-black text-sm flex items-center justify-center mx-auto mb-2 shadow"
              style={{ background: tool.color }}
            >
              {i + 1}
            </div>
            <p className="text-slate-700 text-sm font-medium">{step}</p>
          </div>
        ))}
      </div>

      <AdBanner variant="square" className="mt-6" />

      {/* Related tools */}
      <section className="mt-12">
        <h2 className="font-extrabold text-slate-900 text-2xl mb-5">
          Other Tools You Might Like
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {relatedTools.map((t) => (
            <ToolCard key={t.id} tool={t} navigate={navigate} size="compact" />
          ))}
        </div>
      </section>

      <FAQSection items={tool.faq} />

      {/* SEO content */}
      <section className="mt-16 max-w-2xl">
        <h2 className="font-extrabold text-slate-900 text-2xl mb-4">
          How to {tool.name} Online — Free
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          Converting {tool.from} to {tool.to} has never been easier. With
          FileConvert, simply upload your file, click Convert, and download your
          result in seconds — no software installation required.
        </p>
        <p className="text-slate-600 leading-relaxed">
          Our {tool.name.toLowerCase()} tool is completely free with no
          watermarks, no registration, and no hidden fees. Files up to 10MB are
          supported and automatically deleted after 1 hour for your privacy.
        </p>
      </section>
    </main>
  );
}
