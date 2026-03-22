// src/components/DownloadCard.jsx
import { useEffect, useState } from "react";
import AdBanner from "./AdBanner";

export default function DownloadCard({ result, tool, onReset }) {
  const [downloadUrl, setDownloadUrl] = useState(null);

  useEffect(() => {
    if (result?.blob) {
      const url = URL.createObjectURL(result.blob);
      setDownloadUrl(url);
      // Clean up object URL when component unmounts
      return () => URL.revokeObjectURL(url);
    }
  }, [result]);

  const handleShare = async () => {
    const shareData = {
      title: "FileConvert — Free File Converter",
      text: `I just converted a file using FileConvert — free and instant!`,
      url: "https://fileconvert.io",
    };
    if (navigator.share) {
      await navigator.share(shareData).catch(() => {});
    } else {
      await navigator.clipboard.writeText(shareData.url).catch(() => {});
      alert("Link copied to clipboard!");
    }
  };

  return (
    <div className="text-center py-8">
      {/* Success icon */}
      <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-5 text-4xl">
        ✅
      </div>

      <h3 className="font-extrabold text-slate-900 text-2xl mb-1">
        Conversion Complete!
      </h3>
      <p className="text-slate-500 mb-6 text-sm">
        Your {tool.to} file is ready to download
      </p>

      {/* Ad before download — highest CTR placement */}
      <AdBanner variant="horizontal" />

      {/* Action buttons */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center mt-5">
        <a
          href={downloadUrl}
          download={result?.filename || `converted${tool.outputExt}`}
          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-white font-bold rounded-xl shadow-lg hover:opacity-90 active:scale-95 transition-all text-base"
          style={{
            background: `linear-gradient(135deg, ${tool.color}, ${tool.color}cc)`,
          }}
        >
          ⬇️ &nbsp;Download {tool.to} File
        </a>

        <button
          onClick={onReset}
          className="px-6 py-3.5 border-2 border-slate-200 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition-all text-base"
        >
          Convert Another File
        </button>
      </div>

      {/* Meta info */}
      <div className="mt-7 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-slate-500">
        <span>🔒 File will be deleted from our servers in 1 hour</span>
        <button
          onClick={handleShare}
          className="flex items-center gap-1.5 text-blue-600 hover:text-blue-700 font-medium transition-colors"
        >
          📤 Share FileConvert
        </button>
      </div>

      <p className="text-xs text-slate-400 mt-3">
        Converted with ❤️ using FileConvert.io
      </p>
    </div>
  );
}
