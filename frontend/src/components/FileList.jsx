// src/components/FileList.jsx

function formatSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}

export default function FileList({ files, tool, onRemove }) {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mt-5">
      <p className="text-sm font-semibold text-slate-700 mb-3">
        {files.length} file{files.length !== 1 ? "s" : ""} selected
      </p>

      <ul className="space-y-2">
        {files.map((file, i) => (
          <li
            key={i}
            className="flex items-center gap-3 bg-white border border-slate-100 rounded-lg px-3 py-2.5"
          >
            <span className="text-xl flex-shrink-0">{tool.emoji}</span>

            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-800 truncate">
                {file.name}
              </p>
              <p className="text-xs text-slate-500">{formatSize(file.size)}</p>
            </div>

            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="text-xs text-green-600 font-medium bg-green-50 px-2 py-0.5 rounded-full border border-green-200">
                ✓ Ready
              </span>
              {onRemove && (
                <button
                  onClick={() => onRemove(i)}
                  className="text-slate-400 hover:text-red-500 transition-colors text-sm leading-none"
                  title="Remove file"
                >
                  ✕
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
