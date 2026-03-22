// src/components/FAQSection.jsx
import { useState } from "react";

function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="rounded-xl overflow-hidden transition-all duration-200"
      style={{ border: `1px solid ${isOpen ? "rgba(0,212,255,0.2)" : "var(--border)"}` }}>
      <button onClick={onToggle}
        className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 transition-colors"
        style={{ background: isOpen ? "rgba(0,212,255,0.04)" : "transparent" }}>
        <span className="font-medium text-sm" style={{ color: "var(--text-primary)" }}>{question}</span>
        <span className="text-xs flex-shrink-0 transition-transform duration-200 font-mono"
          style={{ color: "var(--accent)", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}>
          ▼
        </span>
      </button>
      {isOpen && (
        <div className="px-5 pb-4 pt-3 text-sm leading-relaxed"
          style={{ background: "rgba(0,212,255,0.02)", borderTop: "1px solid var(--border)", color: "var(--text-muted)" }}>
          {answer}
        </div>
      )}
    </div>
  );
}

export default function FAQSection({ items }) {
  const [open, setOpen] = useState(null);
  return (
    <section className="max-w-2xl mx-auto mt-16">
      <h2 className="font-display font-bold text-2xl text-center mb-6" style={{ color: "var(--text-primary)" }}>
        Frequently Asked Questions
      </h2>
      <div className="space-y-3">
        {items.map((item, i) => (
          <FAQItem key={i} question={item.q} answer={item.a}
            isOpen={open === i} onToggle={() => setOpen(open === i ? null : i)} />
        ))}
      </div>
    </section>
  );
}
