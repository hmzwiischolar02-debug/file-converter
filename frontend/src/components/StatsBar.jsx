// src/components/StatsBar.jsx
export default function StatsBar({ count }) {
  return (
    <div className="bg-space-900 border-b" style={{ borderColor: "var(--border)" }}>
      <div className="max-w-6xl mx-auto px-4 py-2 flex flex-wrap items-center justify-center gap-x-8 gap-y-1">
        {[
          { icon: "◈", value: count.toLocaleString(), label: "files converted today", valueClass: "text-electric" },
          { icon: "◈", value: "< 10s",                label: "average speed",          valueClass: "text-electric" },
          { icon: "◈", value: "100% Secure",          label: "— files deleted after 1hr", valueClass: "text-white" },
        ].map((item, i) => (
          <span key={i} className="flex items-center gap-2 text-xs font-mono" style={{ color: "var(--text-muted)" }}>
            <span className="text-electric text-xs">{item.icon}</span>
            <strong className={item.valueClass}>{item.value}</strong>
            <span>{item.label}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
