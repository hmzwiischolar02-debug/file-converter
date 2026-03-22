// src/components/Footer.jsx
import { TOOLS } from "../data/tools";

export default function Footer({ navigate }) {
  const pdfTools = ["pdf-to-word", "word-to-pdf", "merge-pdf", "compress-pdf", "pdf-to-jpg"];
  const imageTools = ["jpg-to-pdf", "png-to-ico"];

  return (
    <footer className="bg-slate-900 text-slate-400 mt-24">
      <div className="max-w-6xl mx-auto px-4 py-14">

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-violet-500 rounded-lg flex items-center justify-center text-white font-black text-sm">
                F
              </div>
              <span className="font-bold text-white text-base">FileConvert</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Free online file converter. Fast, secure, no signup required.
            </p>
            <p className="text-xs flex items-center gap-1.5 text-slate-500">
              🔒 SSL Secured &nbsp;·&nbsp; GDPR Compliant
            </p>
          </div>

          {/* PDF Tools */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">PDF Tools</h4>
            <ul className="space-y-2.5">
              {pdfTools.map((id) => (
                <li key={id}>
                  <button
                    onClick={() => navigate(`/tool/${id}`)}
                    className="text-xs hover:text-white transition-colors"
                  >
                    {TOOLS[id].name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Image Tools */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Image Tools</h4>
            <ul className="space-y-2.5">
              {imageTools.map((id) => (
                <li key={id}>
                  <button
                    onClick={() => navigate(`/tool/${id}`)}
                    className="text-xs hover:text-white transition-colors"
                  >
                    {TOOLS[id].name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Company</h4>
            <ul className="space-y-2.5">
              {["Privacy Policy", "Terms of Service", "Contact Us", "Blog"].map((label) => (
                <li key={label}>
                  <a href="#" className="text-xs hover:text-white transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} FileConvert. All rights reserved.</p>
          <p>Files auto-deleted after 1 hour &nbsp;·&nbsp; No registration required &nbsp;·&nbsp; 100% Free</p>
        </div>
      </div>
    </footer>
  );
}
