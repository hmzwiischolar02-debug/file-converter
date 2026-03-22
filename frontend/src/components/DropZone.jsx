import { useState, useRef, useCallback } from "react";
export default function DropZone({ tool, onFiles }) {
  const [drag, setDrag] = useState(false);
  const ref = useRef();
  const handle = useCallback((list) => { onFiles(Array.from(list)); }, [onFiles]);
  const acceptLabel = tool.accept.replace(/\./g,"").toUpperCase().split(",").join(", ");
  return (
    <div onDragOver={e => { e.preventDefault(); setDrag(true); }}
      onDragLeave={e => { if (!e.currentTarget.contains(e.relatedTarget)) setDrag(false); }}
      onDrop={e => { e.preventDefault(); setDrag(false); handle(e.dataTransfer.files); }}
      onClick={() => ref.current?.click()}
      className="cursor-pointer rounded-2xl p-12 text-center transition-all duration-200 select-none"
      style={{
        border: `3px dashed ${drag ? tool.color : "#cbd5e1"}`,
        background: drag ? `${tool.lightBg}` : "#fff",
        transform: drag ? "scale(1.01)" : "scale(1)",
      }}>
      <input ref={ref} type="file" accept={tool.accept} multiple={!!tool.multiFile} className="hidden" onChange={e => handle(e.target.files)} />
      <div className="text-5xl mb-4">{drag ? "⬇️" : "☁️"}</div>
      <p className="font-bold text-slate-800 text-xl mb-2">{drag ? "Drop your file here!" : `Drop your ${tool.from} file${tool.multiFile ? "s" : ""} here`}</p>
      <p className="text-slate-500 text-sm mb-6">or click to browse from your computer</p>
      <button type="button" className="px-8 py-3 text-white font-semibold rounded-xl text-sm shadow-md hover:opacity-90 active:scale-95 transition-all"
        style={{ background: `linear-gradient(135deg, ${tool.color}, ${tool.color}cc)` }}
        onClick={e => { e.stopPropagation(); ref.current?.click(); }}>
        Choose File{tool.multiFile ? "s" : ""}
      </button>
      <p className="text-xs text-slate-400 mt-4">Accepts {acceptLabel} · Max 10MB · Free</p>
    </div>
  );
}
