export default function ToolCard({ tool, navigate, size = "default" }) {
  const compact = size === "compact";
  return (
    <button onClick={() => navigate(`/tool/${tool.id}`)}
      className="group text-left w-full bg-white border-2 border-slate-200 hover:border-slate-300 rounded-2xl transition-all duration-200 hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      style={{ padding: compact ? "16px" : "22px" }}>
      <div style={{ fontSize: compact ? "26px" : "32px" }} className="mb-3">{tool.emoji}</div>
      <h3 className="font-bold text-slate-900 mb-1.5" style={{ fontSize: compact ? "13px" : "15px" }}>{tool.name}</h3>
      <p className="text-slate-500 leading-relaxed line-clamp-2" style={{ fontSize: "13px" }}>{tool.description}</p>
      <div className="mt-3 flex items-center gap-1 text-xs font-semibold" style={{ color: tool.color }}>
        Convert now <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
      </div>
    </button>
  );
}
