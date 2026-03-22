// src/components/DropZone.jsx
import { useState, useRef, useCallback } from "react";

export default function DropZone({ tool, onFiles }) {
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef(null);

  const handleFiles = useCallback((fileList) => {
    onFiles(Array.from(fileList));
  }, [onFiles]);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  }, [handleFiles]);

  const acceptLabel = tool.accept.replace(/\./g,"").toUpperCase().split(",").join(" · ");

  return (
    <div onDragOver={e => { e.preventDefault(); setIsDragging(true); }}
      onDragLeave={e => { if (!e.currentTarget.contains(e.relatedTarget)) setIsDragging(false); }}
      onDrop={handleDrop}
      onClick={() => inputRef.current?.click()}
      className="cursor-pointer rounded-2xl p-10 text-center transition-all duration-300 relative overflow-hidden"
      style={{
        background: isDragging
          ? `rgba(0,212,255,0.05)`
          : "rgba(255,255,255,0.02)",
        border: `2px dashed ${isDragging ? tool.color : "rgba(255,255,255,0.1)"}`,
        transform: isDragging ? "scale(1.01)" : "scale(1)",
        boxShadow: isDragging ? `0 0 40px ${tool.color}22` : "none",
      }}>

      {/* Background glow when dragging */}
      {isDragging && (
        <div className="absolute inset-0 opacity-5 pointer-events-none"
          style={{ background: `radial-gradient(circle at center, ${tool.color}, transparent 70%)` }} />
      )}

      <input ref={inputRef} type="file" accept={tool.accept}
        multiple={!!tool.multiFile} className="hidden"
        onChange={e => handleFiles(e.target.files)} />

      {/* Icon */}
      <div className="text-4xl mb-4 transition-transform duration-300"
        style={{ transform: isDragging ? "scale(1.2)" : "scale(1)" }}>
        {isDragging ? "⬇️" : "☁️"}
      </div>

      {/* Title */}
      <p className="font-display font-bold text-lg mb-2" style={{ color: "var(--text-primary)" }}>
        {isDragging
          ? "Release to upload"
          : `Drop your ${tool.from} file${tool.multiFile ? "s" : ""} here`}
      </p>

      <p className="text-sm mb-6" style={{ color: "var(--text-muted)" }}>
        or click to browse from your computer
      </p>

      {/* Button */}
      <button type="button"
        className="px-7 py-2.5 text-sm font-semibold rounded-xl transition-all duration-200"
        style={{
          background: `linear-gradient(135deg, ${tool.color}, ${tool.color}cc)`,
          color: "#fff",
          boxShadow: `0 4px 16px ${tool.color}44`,
        }}
        onClick={e => { e.stopPropagation(); inputRef.current?.click(); }}>
        Choose File{tool.multiFile ? "s" : ""}
      </button>

      {/* Hint */}
      <p className="text-xs mt-4 font-mono" style={{ color: "var(--text-subtle)" }}>
        {acceptLabel} &nbsp;·&nbsp; Max 10 MB &nbsp;·&nbsp; Free
      </p>
    </div>
  );
}
