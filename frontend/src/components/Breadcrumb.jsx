// src/components/Breadcrumb.jsx
export default function Breadcrumb({ crumbs, navigate }) {
  return (
    <nav className="flex items-center gap-2 text-xs font-mono mb-6 flex-wrap"
      style={{ color: "var(--text-muted)" }}>
      {crumbs.map((crumb, i) => {
        const isLast = i === crumbs.length - 1;
        return (
          <span key={i} className="flex items-center gap-2">
            {i > 0 && <span style={{ color: "var(--text-subtle)" }}>/</span>}
            {isLast
              ? <span style={{ color: "var(--text-primary)" }}>{crumb.label}</span>
              : <button onClick={() => navigate(crumb.path)}
                  className="transition-colors"
                  onMouseEnter={e => e.target.style.color = "var(--accent)"}
                  onMouseLeave={e => e.target.style.color = "var(--text-muted)"}>
                  {crumb.label}
                </button>
            }
          </span>
        );
      })}
    </nav>
  );
}
