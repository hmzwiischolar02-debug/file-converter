// src/components/Footer.jsx
import { TOOLS } from "../data/tools";

export default function Footer({ navigate }) {
  const pdfTools   = ["pdf-to-word","word-to-pdf","merge-pdf","compress-pdf","pdf-to-jpg","pdf-to-html"];
  const imageTools = ["jpg-to-pdf","png-to-ico","compress-image","remove-background","jpg-to-png","png-to-jpg"];

  return (
    <footer style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--border)", marginTop: "5rem" }}>
      <div className="max-w-6xl mx-auto px-4 py-14">

        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center font-display font-bold text-sm text-black"
                style={{ background: "linear-gradient(135deg, #00D4FF, #7C3AED)" }}>F</div>
              <span className="font-display font-bold text-base" style={{ color: "var(--text-primary)" }}>
                FileConvert
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-muted)" }}>
              Free online file converter. Fast, secure, no signup required.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono" style={{ color: "var(--text-subtle)" }}>
              <span className="text-electric">◈</span> SSL Secured &nbsp;·&nbsp; GDPR Compliant
            </div>
          </div>

          {/* PDF Tools */}
          <div>
            <p className="text-xs font-mono uppercase tracking-widest mb-4" style={{ color: "var(--accent)" }}>
              PDF Tools
            </p>
            <ul className="space-y-2.5">
              {pdfTools.map(id => TOOLS[id] && (
                <li key={id}>
                  <button onClick={() => navigate(`/tool/${id}`)}
                    className="text-xs transition-colors"
                    style={{ color: "var(--text-muted)" }}
                    onMouseEnter={e => e.target.style.color = "var(--text-primary)"}
                    onMouseLeave={e => e.target.style.color = "var(--text-muted)"}>
                    {TOOLS[id].name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Image Tools */}
          <div>
            <p className="text-xs font-mono uppercase tracking-widest mb-4" style={{ color: "var(--accent)" }}>
              Image Tools
            </p>
            <ul className="space-y-2.5">
              {imageTools.map(id => TOOLS[id] && (
                <li key={id}>
                  <button onClick={() => navigate(`/tool/${id}`)}
                    className="text-xs transition-colors"
                    style={{ color: "var(--text-muted)" }}
                    onMouseEnter={e => e.target.style.color = "var(--text-primary)"}
                    onMouseLeave={e => e.target.style.color = "var(--text-muted)"}>
                    {TOOLS[id].name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-mono uppercase tracking-widest mb-4" style={{ color: "var(--accent)" }}>
              Company
            </p>
            <ul className="space-y-2.5">
              {["Privacy Policy","Terms of Service","Contact Us"].map(l => (
                <li key={l}>
                  <a href="#" className="text-xs transition-colors"
                    style={{ color: "var(--text-muted)" }}
                    onMouseEnter={e => e.target.style.color = "var(--text-primary)"}
                    onMouseLeave={e => e.target.style.color = "var(--text-muted)"}>
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="divider mb-6" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono"
          style={{ color: "var(--text-subtle)" }}>
          <p>© {new Date().getFullYear()} FileConvert. All rights reserved.</p>
          <p>Files auto-deleted after 1 hour · No registration · 100% Free</p>
        </div>
      </div>
    </footer>
  );
}
