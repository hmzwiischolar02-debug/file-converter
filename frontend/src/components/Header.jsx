// src/components/Header.jsx
import { useState } from "react";

export default function Header({ navigate, currentPath }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "All Tools",   path: "/tools"           },
    { label: "PDF Tools",   path: "/tools/cat/pdf"   },
    { label: "Image Tools", path: "/tools/cat/image" },
  ];

  const isActive = (p) =>
    currentPath === p || (p !== "/tools" && currentPath.startsWith(p));

  return (
    <header className="sticky top-0 z-50 bg-space-900/90 backdrop-blur-xl"
      style={{ borderBottom: "1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* Logo */}
        <button onClick={() => navigate("/")} className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center font-display font-bold text-sm text-black relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #00D4FF, #7C3AED)" }}>
            <span className="relative z-10">F</span>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ background: "linear-gradient(135deg, #7C3AED, #00D4FF)" }} />
          </div>
          <span className="font-display font-bold text-lg tracking-tight" style={{ color: "var(--text-primary)" }}>
            File<span className="text-electric">Convert</span>
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button key={link.label} onClick={() => navigate(link.path)}
              className="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200"
              style={{
                color: isActive(link.path) ? "var(--accent)" : "var(--text-muted)",
                background: isActive(link.path) ? "rgba(0,212,255,0.08)" : "transparent",
                border: isActive(link.path) ? "1px solid rgba(0,212,255,0.2)" : "1px solid transparent",
              }}
              onMouseEnter={e => { if (!isActive(link.path)) e.currentTarget.style.color = "var(--text-primary)"; }}
              onMouseLeave={e => { if (!isActive(link.path)) e.currentTarget.style.color = "var(--text-muted)"; }}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <span className="hidden sm:flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-full"
            style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.25)", color: "#10B981" }}>
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
            Free Forever
          </span>
          <button className="md:hidden p-2 text-sm transition-colors"
            style={{ color: "var(--text-muted)" }}
            onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden px-4 py-3 flex flex-col gap-1"
          style={{ borderTop: "1px solid var(--border)", background: "var(--bg-surface)" }}>
          {navLinks.map((link) => (
            <button key={link.label}
              onClick={() => { navigate(link.path); setMobileOpen(false); }}
              className="text-left py-2.5 px-3 text-sm font-medium rounded-lg transition-all"
              style={{ color: isActive(link.path) ? "var(--accent)" : "var(--text-muted)" }}>
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}