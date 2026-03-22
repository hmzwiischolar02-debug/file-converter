function fmt(b) {
  if (b < 1024) return `${b} B`;
  if (b < 1048576) return `${(b/1024).toFixed(1)} KB`;
  return `${(b/1048576).toFixed(2)} MB`;
}
export default function FileList({ files, tool }) {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mt-4">
      <p className="text-sm font-semibold text-slate-700 mb-3">{files.length} file{files.length !== 1 ? "s" : ""} selected</p>
      <ul className="space-y-2">
        {files.map((f, i) => (
          <li key={i} className="flex items-center gap-3 bg-white border border-slate-100 rounded-lg px-3 py-2.5">
            <span className="text-xl">{tool.emoji}</span>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-800 truncate">{f.name}</p>
              <p className="text-xs text-slate-500">{fmt(f.size)}</p>
            </div>
            <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full border border-green-200">✓ Ready</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
