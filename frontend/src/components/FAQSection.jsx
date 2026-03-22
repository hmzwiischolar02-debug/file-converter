// src/components/FAQSection.jsx
import { useState } from "react";

function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full text-left px-5 py-4 flex items-center justify-between font-semibold text-slate-800 text-sm hover:bg-slate-50 transition-colors gap-4"
      >
        <span>{question}</span>
        <span
          className="text-slate-400 text-xs flex-shrink-0 transition-transform duration-200"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          ▼
        </span>
      </button>

      {isOpen && (
        <div className="px-5 pb-4 pt-3 text-slate-600 text-sm leading-relaxed bg-slate-50 border-t border-slate-100">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function FAQSection({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="max-w-2xl mx-auto mt-16">
      <h2 className="font-extrabold text-slate-900 text-2xl mb-6 text-center">
        Frequently Asked Questions
      </h2>

      <div className="space-y-3">
        {items.map((item, i) => (
          <FAQItem
            key={i}
            question={item.q}
            answer={item.a}
            isOpen={openIndex === i}
            onToggle={() => toggle(i)}
          />
        ))}
      </div>
    </section>
  );
}
