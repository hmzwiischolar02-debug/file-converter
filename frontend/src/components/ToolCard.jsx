// src/components/ToolCard.jsx
export default function ToolCard({ tool, navigate, size = "default" }) {
  const compact = size === "compact";

  return (
    <button onClick={() => navigate(`/tool/${tool.id}`)}
      className="group text-left w-full rounded-xl transition-all duration-200 glass glass-hover focus:outline-none"
      style={{ padding: compact ? "14px 16px" : "20px" }}>

      {/* Top: emoji + arrow */}
      <div className="flex items-start justify-between mb-3">
        <span style={{ fontSize: compact ? "22px" : "28px" }}>{tool.emoji}</span>
        <span className="opacity-0 group-hover:opacity-100 transition-all duration-200 text-xs font-mono translate-x-0 group-hover:translate-x-1"
          style={{ color: "var(--accent)" }}>→</span>
      </div>

      {/* Name */}
      <p className="font-display font-bold mb-1.5"
        style={{ fontSize: compact ? "13px" : "15px", color: "var(--text-primary)" }}>
        {tool.name}
      </p>

      {/* Description */}
      <p className="line-clamp-2 leading-relaxed"
        style={{ fontSize: "12px", color: "var(--text-muted)" }}>
        {tool.description}
      </p>

      {/* Bottom tag */}
      <div className="mt-3 flex items-center gap-1.5">
        <span className="text-xs px-2 py-0.5 rounded-full font-mono"
          style={{
            background: `${tool.color}18`,
            color: tool.color,
            border: `1px solid ${tool.color}30`,
            fontSize: "10px",
          }}>
          {tool.from} → {tool.to}
        </span>
      </div>
    </button>
  );
}