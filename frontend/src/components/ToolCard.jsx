// src/components/ToolCard.jsx

export default function ToolCard({ tool, navigate, size = "default" }) {
  const isCompact = size === "compact";

  return (
    <button
      onClick={() => navigate(`/tool/${tool.id}`)}
      className="group text-left w-full bg-white border-2 border-slate-200 hover:border-slate-300 rounded-2xl transition-all duration-200 hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      style={{ padding: isCompact ? "16px" : "22px" }}
    >
      <div style={{ fontSize: isCompact ? "24px" : "32px" }} className="mb-2.5">
        {tool.emoji}
      </div>

      <h3
        className="font-bold text-slate-900 mb-1.5"
        style={{ fontSize: isCompact ? "13px" : "15px" }}
      >
        {tool.name}
      </h3>

      <p
        className="text-slate-500 leading-relaxed"
        style={{
          fontSize: isCompact ? "12px" : "13px",
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: 2,
          overflow: "hidden",
        }}
      >
        {tool.description}
      </p>

      <div
        className="mt-3 flex items-center gap-1 text-xs font-semibold"
        style={{ color: tool.color }}
      >
        Convert now{" "}
        <span className="group-hover:translate-x-1 transition-transform inline-block">
          →
        </span>
      </div>
    </button>
  );
}
