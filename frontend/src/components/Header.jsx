import { useState } from "react";

export default function Header({ navigate, currentPath }) {
  const [mob, setMob] = useState(false);
  const links = [
    { label: "All Tools",   path: "/tools"           },
    { label: "PDF Tools",   path: "/tools/cat/pdf"   },
    { label: "Image Tools", path: "/tools/cat/image" },
  ];
  const active = (p) => currentPath === p || (p !== "/tools" && currentPath.startsWith(p));

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <button onClick={() => navigate("/")} className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-violet-600 rounded-lg flex items-center justify-center text-white font-black text-sm shadow group-hover:scale-105 transition-transform">F</div>
          <span className="font-extrabold text-slate-900 text-lg tracking-tight">File<span className="text-blue-600">Convert</span></span>
        </button>
        <nav className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <button key={l.label} onClick={() => navigate(l.path)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${active(l.path) ? "text-blue-600 bg-blue-50" : "text-slate-600 hover:text-blue-600 hover:bg-slate-50"}`}>
              {l.label}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <span className="hidden sm:flex items-center gap-1.5 text-xs text-green-700 bg-green-50 px-3 py-1.5 rounded-full font-semibold border border-green-200">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />Free Forever
          </span>
          <button className="md:hidden p-2 text-slate-500" onClick={() => setMob(!mob)}>{mob ? "✕" : "☰"}</button>
        </div>
      </div>
      {mob && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 py-3 flex flex-col gap-1">
          {links.map(l => (
            <button key={l.label} onClick={() => { navigate(l.path); setMob(false); }}
              className={`text-left py-2.5 px-3 text-sm font-medium rounded-lg ${active(l.path) ? "text-blue-600 bg-blue-50" : "text-slate-700 hover:bg-slate-50"}`}>
              {l.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
