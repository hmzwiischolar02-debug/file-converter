// src/components/Header.jsx
import { useState } from "react";

export default function Header({ navigate, currentPath }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "All Tools",   path: "/tools"           },
    { label: "PDF Tools",   path: "/tools/cat/pdf"   },
    { label: "Image Tools", path: "/tools/cat/image" },
  ];

  const isActive = (linkPath) =>
    currentPath === linkPath ||
    (linkPath !== "/tools" && currentPath.startsWith(linkPath));

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* Logo */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-violet-600 rounded-lg flex items-center justify-center text-white font-black text-sm shadow-md group-hover:scale-105 transition-transform">
            F
          </div>
          <span className="font-extrabold text-slate-900 text-lg tracking-tight">
            File<span className="text-blue-600">Convert</span>
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => navigate(link.path)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                isActive(link.path)
                  ? "text-blue-600 bg-blue-50"
                  : "text-slate-600 hover:text-blue-600 hover:bg-blue-50"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <span className="hidden sm:flex items-center gap-1.5 text-xs text-green-700 bg-green-50 px-3 py-1.5 rounded-full font-medium border border-green-200">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            Free Forever
          </span>
          <button
            className="md:hidden p-2 text-slate-600 hover:text-slate-900"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 py-3 flex flex-col gap-1">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => { navigate(link.path); setMobileOpen(false); }}
              className={`text-left py-2.5 px-3 text-sm font-medium rounded-lg transition-all ${
                isActive(link.path)
                  ? "text-blue-600 bg-blue-50"
                  : "text-slate-700 hover:text-blue-600 hover:bg-blue-50"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}