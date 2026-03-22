import { TOOLS } from "../data/tools";
export default function Footer({ navigate }) {
  const pdf   = ["pdf-to-word","word-to-pdf","merge-pdf","compress-pdf","pdf-to-jpg","pdf-to-html"];
  const image = ["jpg-to-pdf","png-to-ico","compress-image","remove-background","jpg-to-png","png-to-jpg"];
  return (
    <footer className="bg-slate-900 text-slate-400 mt-24">
      <div className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-violet-500 rounded-lg flex items-center justify-center text-white font-black text-sm">F</div>
              <span className="font-bold text-white">FileConvert</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">Free online file converter. Fast, secure, no signup required.</p>
            <p className="text-xs text-slate-500">🔒 SSL Secured · GDPR Compliant</p>
          </div>
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">PDF Tools</h4>
            <ul className="space-y-2.5">
              {pdf.map(id => TOOLS[id] && <li key={id}><button onClick={() => navigate(`/tool/${id}`)} className="text-xs hover:text-white transition-colors">{TOOLS[id].name}</button></li>)}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Image Tools</h4>
            <ul className="space-y-2.5">
              {image.map(id => TOOLS[id] && <li key={id}><button onClick={() => navigate(`/tool/${id}`)} className="text-xs hover:text-white transition-colors">{TOOLS[id].name}</button></li>)}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Company</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Privacy Policy",  path: "/privacy" },
                { label: "Terms of Service",path: "/terms"   },
                { label: "Contact Us",      path: "/contact" },
              ].map(l => (
                <li key={l.label}>
                  <button onClick={() => navigate(l.path)} className="text-xs hover:text-white transition-colors text-left">
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} FileConvert. All rights reserved.</p>
          <p>Files auto-deleted after 1 hour · No registration · 100% Free</p>
        </div>
      </div>
    </footer>
  );
}