// src/pages/ContactPage.jsx
import { useEffect, useState } from "react";
import Breadcrumb from "../components/Breadcrumb";

export default function ContactPage({ navigate }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "General Question", message: "" });

  useEffect(() => {
    document.title = "Contact Us | FileConvert";
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production: send to a backend endpoint or use a service like Formspree
    // For now, open the user's email client
    const mailto = `mailto:support@fileconvert.io?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.location.href = mailto;
    setSent(true);
  };

  return (
    <main className="max-w-3xl mx-auto px-4 py-14">
      <Breadcrumb navigate={navigate} crumbs={[
        { label: "Home", path: "/" },
        { label: "Contact Us" },
      ]} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Left — info */}
        <div>
          <h1 className="font-extrabold text-slate-900 text-4xl mb-3">Contact Us</h1>
          <p className="text-slate-500 leading-relaxed mb-8">
            Have a question, bug report, or suggestion? We'd love to hear from you.
          </p>

          <div className="space-y-6">
            {[
              { icon: "📧", title: "Email Support", desc: "support@fileconvert.io", sub: "We reply within 24 hours" },
              { icon: "🐛", title: "Report a Bug", desc: "Found a conversion issue?", sub: "Describe the file type and error" },
              { icon: "💡", title: "Feature Request", desc: "Want a new tool?", sub: "We add the most requested tools" },
              { icon: "⚖️", title: "Legal & Privacy", desc: "legal@fileconvert.io", sub: "GDPR, copyright, takedown requests" },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-xl flex-shrink-0 border border-blue-100">
                  {item.icon}
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">{item.title}</p>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                  <p className="text-slate-400 text-xs mt-0.5">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div>
          {sent ? (
            <div className="text-center py-12">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="font-bold text-slate-900 text-xl mb-2">Message Sent!</h3>
              <p className="text-slate-500 text-sm mb-6">Your email client should have opened. We'll get back to you within 24 hours.</p>
              <button onClick={() => setSent(false)} className="px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-xl text-sm hover:bg-blue-700 transition-colors">
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Your Name</label>
                <input type="text" required value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-400 transition-colors" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email Address</label>
                <input type="email" required value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-400 transition-colors" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Subject</label>
                <select value={form.subject}
                  onChange={e => setForm({ ...form, subject: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-400 transition-colors bg-white">
                  <option>General Question</option>
                  <option>Bug Report</option>
                  <option>Feature Request</option>
                  <option>Legal / Privacy</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Message</label>
                <textarea required rows={5} value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  placeholder="Describe your question or issue in detail…"
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-400 transition-colors resize-none" />
              </div>

              <button type="submit"
                className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-violet-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-violet-700 transition-all shadow-lg hover:shadow-xl active:scale-95 text-sm">
                Send Message →
              </button>

              <p className="text-xs text-slate-400 text-center">
                This will open your email client. You can also email us directly at support@fileconvert.io
              </p>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}