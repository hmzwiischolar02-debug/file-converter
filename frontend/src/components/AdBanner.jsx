// src/components/AdBanner.jsx
const SIZES = {
  horizontal: "h-20",
  square:     "h-60",
  sidebar:    "h-48",
};

export default function AdBanner({ variant = "horizontal", className = "" }) {
  return (
    <div className={`w-full ${SIZES[variant]} ${className} rounded-xl flex items-center justify-center gap-3 my-5`}
      style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px dashed rgba(255,255,255,0.08)",
      }}>
      <span className="text-xs font-mono uppercase tracking-widest"
        style={{ color: "var(--text-subtle)" }}>
        ◈ Advertisement
      </span>
      <span className="text-xs px-2 py-0.5 rounded font-mono"
        style={{ background: "rgba(0,212,255,0.08)", color: "var(--accent)", border: "1px solid rgba(0,212,255,0.15)" }}>
        AdSense
      </span>
    </div>
  );
}
