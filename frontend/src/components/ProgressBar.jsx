// src/components/ProgressBar.jsx
const MSGS = ["Uploading file…","Analysing content…","Converting format…","Optimising output…","Almost done…"];

export default function ProgressBar({ progress, tool }) {
  const msgIdx = Math.min(Math.floor(progress / 20), MSGS.length - 1);

  return (
    <div className="text-center py-12">
      <div className="text-5xl mb-6 animate-float">{tool.emoji}</div>
      <h3 className="font-display font-bold text-xl mb-1" style={{ color: "var(--text-primary)" }}>
        Converting your file…
      </h3>
      <p className="text-sm font-mono mb-8" style={{ color: "var(--text-muted)" }}>
        {MSGS[msgIdx]}
      </p>

      {/* Progress bar */}
      <div className="max-w-xs mx-auto">
        <div className="h-1.5 rounded-full overflow-hidden"
          style={{ background: "rgba(255,255,255,0.06)" }}>
          <div className="h-full rounded-full transition-all duration-500 ease-out relative"
            style={{
              width: `${progress}%`,
              background: `linear-gradient(90deg, ${tool.color}88, ${tool.color}, var(--accent))`,
              boxShadow: `0 0 10px ${tool.color}66`,
            }}>
            {/* Moving glow dot */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
              style={{ background: "#fff", boxShadow: `0 0 6px ${tool.color}` }} />
          </div>
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-xs font-mono" style={{ color: "var(--text-subtle)" }}>{MSGS[msgIdx]}</span>
          <span className="text-xs font-mono" style={{ color: "var(--accent)" }}>{Math.round(progress)}%</span>
        </div>
      </div>

      <p className="text-xs font-mono mt-6" style={{ color: "var(--text-subtle)" }}>
        Usually takes under 10 seconds
      </p>
    </div>
  );
}
