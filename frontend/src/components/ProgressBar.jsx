const MSGS = ["Uploading…","Analysing content…","Converting…","Optimising…","Almost done…"];
export default function ProgressBar({ progress, tool }) {
  const idx = Math.min(Math.floor(progress / 20), 4);
  return (
    <div className="text-center py-12">
      <div className="text-5xl mb-5 animate-bounce">{tool.emoji}</div>
      <h3 className="font-bold text-slate-800 text-xl mb-1">Converting your file…</h3>
      <p className="text-slate-500 text-sm mb-8">{MSGS[idx]}</p>
      <div className="max-w-xs mx-auto">
        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
          <div className="h-full rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%`, background: `linear-gradient(90deg, ${tool.color}88, ${tool.color})` }} />
        </div>
        <div className="flex justify-between mt-2 text-xs text-slate-400">
          <span>{MSGS[idx]}</span><span>{Math.round(progress)}%</span>
        </div>
      </div>
      <p className="text-xs text-slate-400 mt-6">Usually takes under 10 seconds</p>
    </div>
  );
}
