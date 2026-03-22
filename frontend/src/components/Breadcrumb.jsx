// src/components/Breadcrumb.jsx

export default function Breadcrumb({ crumbs, navigate }) {
  // crumbs: [{ label, path }, ...] — last item is current page (no link)
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center gap-1.5 text-sm text-slate-500 mb-6 flex-wrap"
    >
      {crumbs.map((crumb, i) => {
        const isLast = i === crumbs.length - 1;
        return (
          <span key={i} className="flex items-center gap-1.5">
            {i > 0 && <span className="text-slate-300">/</span>}
            {isLast ? (
              <span className="font-medium text-slate-900">{crumb.label}</span>
            ) : (
              <button
                onClick={() => navigate(crumb.path)}
                className="hover:text-blue-600 transition-colors"
              >
                {crumb.label}
              </button>
            )}
          </span>
        );
      })}
    </nav>
  );
}
