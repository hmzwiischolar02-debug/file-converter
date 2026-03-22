import { useState } from "react";
function FAQItem({ q, a, open, onToggle }) {
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden">
      <button onClick={onToggle} className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-semibold text-sm text-slate-800 hover:bg-slate-50 transition-colors">
        {q}
        <span className="text-slate-400 text-xs flex-shrink-0 transition-transform duration-200" style={{ transform: open ? "rotate(180deg)" : "none" }}>▼</span>
      </button>
      {open && <div className="px-5 pb-4 pt-3 text-sm text-slate-600 leading-relaxed bg-slate-50 border-t border-slate-100">{a}</div>}
    </div>
  );
}
export default function FAQSection({ items }) {
  const [open, setOpen] = useState(null);
  return (
    <section className="max-w-2xl mx-auto mt-16">
      <h2 className="font-extrabold text-slate-900 text-2xl text-center mb-6">Frequently Asked Questions</h2>
      <div className="space-y-3">
        {items.map((item, i) => <FAQItem key={i} q={item.q} a={item.a} open={open === i} onToggle={() => setOpen(open === i ? null : i)} />)}
      </div>
    </section>
  );
}
