import { useEffect, useState } from "react";
import AdBanner from "./AdBanner";
export default function DownloadCard({ result, tool, onReset }) {
  const [url, setUrl] = useState(null);
  useEffect(() => {
    if (result?.blob) { const u = URL.createObjectURL(result.blob); setUrl(u); return () => URL.revokeObjectURL(u); }
  }, [result]);
  const share = async () => {
    if (navigator.share) await navigator.share({ title: "FileConvert", url: "https://file-converters.vercel.app" }).catch(() => {});
    else { await navigator.clipboard.writeText("https://file-converters.vercel.app").catch(() => {}); alert("Link copied!"); }
  };
  return (
    <div className="text-center py-8">
      <div className="inline-flex items-center justify-center w-20 h-20 bg-green-50 rounded-full mb-5 text-4xl border border-green-100">✅</div>
      <h3 className="font-extrabold text-slate-900 text-2xl mb-1">Conversion Complete!</h3>
      <p className="text-slate-500 text-sm mb-6">Your {tool.to} file is ready to download</p>
      <AdBanner variant="horizontal" />
      <div className="flex flex-col sm:flex-row gap-3 justify-center mt-5">
        <a href={url} download={result?.filename || `converted${tool.outputExt}`}
          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-white font-bold rounded-xl shadow-lg hover:opacity-90 active:scale-95 transition-all text-sm"
          style={{ background: `linear-gradient(135deg, ${tool.color}, ${tool.color}cc)` }}>
          ⬇️ &nbsp;Download {tool.to} File
        </a>
        <button onClick={onReset} className="px-6 py-3.5 border-2 border-slate-200 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition-all text-sm">
          Convert Another
        </button>
      </div>
      <div className="mt-7 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-slate-500">
        <span>🔒 File deleted from servers in 1 hour</span>
        <button onClick={share} className="flex items-center gap-1.5 text-blue-600 hover:text-blue-700 font-medium">📤 Share FileConvert</button>
      </div>
      <p className="text-xs text-slate-400 mt-3">Converted with ❤️ using FileConvert.io</p>
    </div>
  );
}
