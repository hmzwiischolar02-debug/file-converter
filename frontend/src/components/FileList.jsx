// src/components/FileList.jsx
function fmt(bytes) {
  if (bytes < 1024)       return `${bytes} B`;
  if (bytes < 1024*1024)  return `${(bytes/1024).toFixed(1)} KB`;
  return `${(bytes/1024/1024).toFixed(2)} MB`;
}

export default function FileList({ files, tool }) {
  return (
    <div className="rounded-xl p-4 mt-4"
      style={{ background: "rgba(255,255,255,0.02)", border: "1px solid var(--border)" }}>
      <p className="text-xs font-mono uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>
        ◈ {files.length} file{files.length !== 1 ? "s" : ""} selected
      </p>
      <ul className="space-y-2">
        {files.map((file, i) => (
          <li key={i} className="flex items-center gap-3 rounded-lg px-3 py-2.5"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)" }}>
            <span className="text-xl flex-shrink-0">{tool.emoji}</span>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate" style={{ color: "var(--text-primary)" }}>{file.name}</p>
              <p className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>{fmt(file.size)}</p>
            </div>
            <span className="text-xs font-mono px-2 py-0.5 rounded-full flex-shrink-0"
              style={{ background: "rgba(16,185,129,0.1)", color: "#10B981", border: "1px solid rgba(16,185,129,0.2)" }}>
              ✓ Ready
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
