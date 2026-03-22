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
  const [password,  setPassword]  = useState("");
  const [watermark, setWatermark] = useState("CONFIDENTIAL");

  const { files, status, progress, result, error, handleFiles, convert, reset } =
    useConverter(tool);

  useEffect(() => {
    document.title = tool.metaTitle;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement("meta"); meta.name = "description"; document.head.appendChild(meta); }
    meta.content = tool.metaDesc;
  }, [tool]);

  const relatedTools   = TOOL_LIST.filter(t => t.id !== toolId).slice(0, 3);
  const needsPassword  = toolId === "unlock-pdf";
  const needsWatermark = toolId === "watermark-pdf";

  const handleConvert = () => {
    if (needsPassword)    return convert({ password });
    if (needsWatermark)   return convert({ watermark_text: watermark });
    convert({});
  };

  const handleReset = () => { reset(); setPassword(""); setWatermark("CONFIDENTIAL"); };

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <Breadcrumb navigate={navigate} crumbs={[
        { label: "Home",  path: "/" },
        { label: "Tools", path: "/tools" },
        { label: tool.name },
      ]} />

      {/* Tool header */}
      <div className="text-center mb-10">
        <div className="text-5xl mb-5">{tool.emoji}</div>
        <h1 className="font-display font-bold text-4xl mb-3" style={{ color: "var(--text-primary)" }}>
          {tool.name} Converter
        </h1>
        <p className="text-base max-w-xl mx-auto" style={{ color: "var(--text-muted)" }}>
          {tool.description}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
          {tool.keywords.map(kw => (
            <span key={kw} className="text-xs font-mono px-3 py-1 rounded-full"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid var(--border)", color: "var(--text-muted)" }}>
              {kw}
            </span>
          ))}
        </div>
      </div>

      <AdBanner variant="horizontal" />

      {/* ── Converter card ──────────────────────────────── */}
      <div className="rounded-2xl p-8 mt-6"
        style={{ background: "var(--bg-surface)", border: "1px solid var(--border)" }}>

        {/* IDLE */}
        {status === "idle" && (
          <>
            <DropZone tool={tool} onFiles={handleFiles} />

            {error && (
              <div className="mt-4 p-3 rounded-xl text-sm flex items-center gap-2"
                style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)", color: "#FCA5A5" }}>
                ⚠️ {error}
              </div>
            )}

            {files.length > 0 && (
              <>
                <FileList files={files} tool={tool} />

                {/* Password field */}
                {needsPassword && (
                  <div className="mt-4">
                    <label className="block text-xs font-mono uppercase tracking-widest mb-2"
                      style={{ color: "var(--accent)" }}>PDF Password</label>
                    <input type="password" value={password}
                      onChange={e => setPassword(e.target.value)}
                      placeholder="Enter the PDF password…"
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                      style={{
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid var(--border)",
                        color: "var(--text-primary)",
                      }}
                      onFocus={e => e.target.style.borderColor = "var(--accent)"}
                      onBlur={e => e.target.style.borderColor = "var(--border)"} />
                  </div>
                )}

                {/* Watermark field */}
                {needsWatermark && (
                  <div className="mt-4">
                    <label className="block text-xs font-mono uppercase tracking-widest mb-2"
                      style={{ color: "var(--accent)" }}>Watermark Text</label>
                    <input type="text" value={watermark}
                      onChange={e => setWatermark(e.target.value)}
                      placeholder="e.g. CONFIDENTIAL, DRAFT…"
                      maxLength={50}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                      style={{
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid var(--border)",
                        color: "var(--text-primary)",
                      }}
                      onFocus={e => e.target.style.borderColor = "var(--accent)"}
                      onBlur={e => e.target.style.borderColor = "var(--border)"} />
                    <p className="text-xs font-mono mt-1.5" style={{ color: "var(--text-subtle)" }}>
                      Appears diagonally across each page
                    </p>
                  </div>
                )}

                <AdBanner variant="horizontal" />

                <button onClick={handleConvert}
                  disabled={(needsPassword && !password.trim()) || (needsWatermark && !watermark.trim())}
                  className="w-full py-4 font-bold rounded-xl text-base mt-2 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                  style={{
                    background: `linear-gradient(135deg, ${tool.color}, ${tool.color}cc)`,
                    color: "#fff",
                    boxShadow: `0 4px 20px ${tool.color}44`,
                  }}>
                  {toolId === "unlock-pdf"    ? "Unlock PDF →"       :
                   toolId === "compress-image"? "Compress Image →"   :
                   toolId === "watermark-pdf" ? "Add Watermark →"    :
                   toolId === "html-to-pdf"   ? "Convert to PDF →"   :
                   toolId === "pdf-to-html"   ? "Convert to HTML →"  :
                   `Convert to ${tool.to} →`}
                </button>
              </>
            )}
          </>
        )}

        {/* CONVERTING */}
        {status === "converting" && <ProgressBar progress={Math.round(progress)} tool={tool} />}

        {/* DONE */}
        {status === "done" && result && <DownloadCard result={result} tool={tool} onReset={handleReset} />}

        {/* ERROR */}
        {status === "error" && (
          <div className="text-center py-10">
            <div className="text-5xl mb-4">❌</div>
            <h3 className="font-display font-bold text-xl mb-2" style={{ color: "#FCA5A5" }}>
              Conversion Failed
            </h3>
            <p className="text-sm mb-6 max-w-sm mx-auto" style={{ color: "var(--text-muted)" }}>
              {error || "An unexpected error occurred. Please try again."}
            </p>
            <button onClick={handleReset}
              className="px-8 py-3 text-sm font-semibold rounded-xl btn-ghost">
              Try Again
            </button>
          </div>
        )}
      </div>

      {/* Steps row */}
      <div className="grid grid-cols-3 gap-3 mt-5">
        {tool.steps.map((step, i) => (
          <div key={i} className="glass rounded-xl p-4 text-center">
            <div className="w-7 h-7 rounded-full text-black font-bold text-xs flex items-center justify-center mx-auto mb-2"
              style={{ background: `linear-gradient(135deg, ${tool.color}, ${tool.color}bb)` }}>
              {i + 1}
            </div>
            <p className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>{step}</p>
          </div>
        ))}
      </div>

      <AdBanner variant="square" className="mt-6" />

      {/* Related tools */}
      <section className="mt-12">
        <p className="text-xs font-mono uppercase tracking-widest mb-5" style={{ color: "var(--accent)" }}>
          ◈ Other Tools You Might Like
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {relatedTools.map(t => <ToolCard key={t.id} tool={t} navigate={navigate} size="compact" />)}
        </div>
      </section>

      <FAQSection items={tool.faq} />

      {/* SEO */}
      <section className="mt-16 max-w-2xl">
        <hr className="divider mb-8" />
        <h2 className="font-display font-bold text-2xl mb-4" style={{ color: "var(--text-primary)" }}>
          How to {tool.name} Online — Free
        </h2>
        <p className="leading-relaxed mb-4 text-sm" style={{ color: "var(--text-muted)" }}>
          Converting {tool.from} to {tool.to} has never been easier. With FileConvert, simply upload
          your file, click Convert, and download your result in seconds — no software required.
        </p>
        <p className="leading-relaxed text-sm" style={{ color: "var(--text-muted)" }}>
          Our {tool.name.toLowerCase()} tool is completely free — no watermarks, no registration,
          no hidden fees. Files up to 10MB are supported and automatically deleted after 1 hour.
        </p>
      </section>
    </main>
  );
}