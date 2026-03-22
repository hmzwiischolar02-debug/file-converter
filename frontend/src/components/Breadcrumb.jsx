export default function Breadcrumb({ crumbs, navigate }) {
  return (
    <nav className="flex items-center gap-1.5 text-sm text-slate-500 mb-6 flex-wrap">
      {crumbs.map((c, i) => {
        const last = i === crumbs.length - 1;
        return (
          <span key={i} className="flex items-center gap-1.5">
            {i > 0 && <span className="text-slate-300">/</span>}
            {last ? <span className="font-semibold text-slate-800">{c.label}</span>
                  : <button onClick={() => navigate(c.path)} className="hover:text-blue-600 transition-colors">{c.label}</button>}
          </span>
        );
      })}
    </nav>
  );
}
