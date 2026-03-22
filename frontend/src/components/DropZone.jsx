// src/components/DropZone.jsx
import { useState, useRef, useCallback } from "react";

export default function DropZone({ tool, onFiles }) {
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef(null);

  const handleFiles = useCallback(
    (fileList) => {
      onFiles(Array.from(fileList));
    },
    [onFiles]
  );

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();
      setIsDragging(false);
      handleFiles(e.dataTransfer.files);
    },
    [handleFiles]
  );

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    // Only fire if leaving the drop zone entirely (not a child element)
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setIsDragging(false);
    }
  };

  const multiLabel = tool.multiFile ? " (select multiple)" : "";
  const acceptLabel = tool.accept
    .replace(/\./g, "")
    .toUpperCase()
    .split(",")
    .join(", ");

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={() => inputRef.current?.click()}
      className="cursor-pointer rounded-2xl p-12 text-center transition-all duration-200 select-none"
      style={{
        border: `3px dashed ${isDragging ? tool.color : "#cbd5e1"}`,
        background: isDragging ? tool.lightBg : "#fff",
        transform: isDragging ? "scale(1.01)" : "scale(1)",
      }}
    >
      <input
        ref={inputRef}
        type="file"
        accept={tool.accept}
        multiple={!!tool.multiFile}
        className="hidden"
        onChange={(e) => handleFiles(e.target.files)}
      />

      {/* Icon */}
      <div className="text-5xl mb-4">{isDragging ? "⬇️" : "☁️"}</div>

      {/* Title */}
      <p className="font-bold text-slate-800 text-xl mb-2">
        {isDragging
          ? "Drop your file here!"
          : `Drop your ${tool.from} file${multiLabel} here`}
      </p>

      {/* Subtitle */}
      <p className="text-slate-500 text-sm mb-6">
        or click to browse from your computer
      </p>

      {/* Button */}
      <button
        type="button"
        className="px-8 py-3 text-white font-semibold rounded-xl text-sm shadow-md hover:opacity-90 hover:shadow-lg active:scale-95 transition-all"
        style={{
          background: `linear-gradient(135deg, ${tool.color}, ${tool.color}cc)`,
        }}
        onClick={(e) => {
          e.stopPropagation();
          inputRef.current?.click();
        }}
      >
        Choose File{tool.multiFile ? "s" : ""}
      </button>

      {/* Hint */}
      <p className="text-xs text-slate-400 mt-4">
        Supports: {acceptLabel} &nbsp;·&nbsp; Max 10MB &nbsp;·&nbsp; Free
      </p>
    </div>
  );
}
