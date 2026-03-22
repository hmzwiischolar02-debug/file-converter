// src/components/DownloadCard.jsx
import { useEffect, useState } from "react";
import AdBanner from "./AdBanner";

export default function DownloadCard({ result, tool, onReset }) {
  const [dlUrl, setDlUrl] = useState(null);

  useEffect(() => {
    if (result?.blob) {
      const url = URL.createObjectURL(result.blob);
      setDlUrl(url);
      return () => URL.revokeObjectURL(url);
    }
  }, [result]);

  const handleShare = async () => {
    const data = { title: "FileConvert", url: "https://file-converters.vercel.app" };
    if (navigator.share) await navigator.share(data).catch(() => {});
    else { await navigator.clipboard.writeText(data.url).catch(() => {}); alert("Link copied!"); }
  };

  return (
    <div className="text-center py-8">
      {/* Success ring */}
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mx-auto mb-5 relative">
        <div className="absolute inset-0 rounded-full animate-ping opacity-20"
          style={{ background: "rgba(16,185,129,0.3)" }} />
        <div className="absolute inset-0 rounded-full"
          style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.3)" }} />
        <span className="text-3xl relative z-10">✅</span>
      </div>

      <h3 className="font-display font-bold text-2xl mb-2" style={{ color: "var(--text-primary)" }}>
        Conversion Complete
      </h3>
      <p className="text-sm mb-6 font-mono" style={{ color: "var(--text-muted)" }}>
        Your {tool.to} file is ready to download
      </p>

      <AdBanner variant="horizontal" />

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center mt-5">
        <a href={dlUrl} download={result?.filename || `converted${tool.outputExt}`}
          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-black font-bold rounded-xl text-sm transition-all"
          style={{
            background: "linear-gradient(135deg, var(--accent), var(--accent-dim))",
            boxShadow: "0 4px 20px rgba(0,212,255,0.3)",
          }}>
          ⬇️ &nbsp;Download {tool.to} File
        </a>
        <button onClick={onReset}
          className="px-6 py-3.5 text-sm font-semibold rounded-xl transition-all btn-ghost">
          Convert Another
        </button>
      </div>

      {/* Meta */}
      <div className="mt-7 pt-5 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-mono"
        style={{ borderTop: "1px solid var(--border)", color: "var(--text-subtle)" }}>
        <span>◈ File deleted from servers in 1 hour</span>
        <button onClick={handleShare}
          className="flex items-center gap-1.5 transition-colors"
          style={{ color: "var(--accent)" }}
          onMouseEnter={e => e.currentTarget.style.color = "var(--text-primary)"}
          onMouseLeave={e => e.currentTarget.style.color = "var(--accent)"}>
          ↗ Share FileConvert
        </button>
      </div>
      <p className="text-xs font-mono mt-3" style={{ color: "var(--text-subtle)" }}>
        Converted with FileConvert.io
      </p>
    </div>
  );
}