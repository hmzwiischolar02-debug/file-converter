import { useState, useEffect } from "react";
import { updateSEO, buildHomeSEO } from "../utils/seo";
import ToolCard from "../components/ToolCard";
import AdBanner from "../components/AdBanner";
import { TOOL_LIST } from "../data/tools";

export default function HomePage({ navigate }) {
  const [count] = useState(() => 47382 + Math.floor(Math.random() * 1000));

  useEffect(() => {
    updateSEO(buildHomeSEO());
  }, []);
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 1px 1px,rgba(255,255,255,0.4) 1px,transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-1.5 text-sm text-blue-300 mb-8 font-medium">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Free Online File Converter — No signup required
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-5 leading-tight tracking-tight">
            Convert Files{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">Instantly</span>
            <br />100% Free
          </h1>
          <p className="text-slate-300 text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            18 powerful tools — PDF, Word, Excel, PowerPoint, Images and more. Process files in seconds, no installation needed.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
            {["PDF → Word","Word → PDF","JPG → PDF","Merge PDF","Compress PDF","Remove BG"].map(t => (
              <span key={t} className="bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium">{t}</span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <button onClick={() => navigate("/tools")} className="px-10 py-4 bg-gradient-to-r from-blue-500 to-violet-500 text-white font-bold rounded-2xl shadow-2xl hover:from-blue-600 hover:to-violet-600 transition-all text-lg active:scale-95">
              Browse All 18 Tools →
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4"><AdBanner /></div>

      {/* Tools */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="font-extrabold text-slate-900 text-3xl sm:text-4xl mb-3">All Conversion Tools</h2>
          <p className="text-slate-500 text-lg">Select a tool to get started — all free, all instant</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {TOOL_LIST.map(t => <ToolCard key={t.id} tool={t} navigate={navigate} />)}
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4"><AdBanner /></div>

      {/* How it works */}
      <section className="bg-slate-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-extrabold text-slate-900 text-3xl text-center mb-3">How It Works</h2>
          <p className="text-slate-500 text-center mb-12">Convert your files in 3 simple steps</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { n:"1", i:"📁", t:"Upload Your File",   d:"Drag & drop or click to select your file from any device."     },
              { n:"2", i:"⚡", t:"We Convert It",       d:"Our servers process your file instantly with no quality loss." },
              { n:"3", i:"⬇️", t:"Download Result",     d:"Your converted file is ready. Download in one click."         },
            ].map(s => (
              <div key={s.n} className="relative bg-white border border-slate-200 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-blue-600 rounded-full text-white font-black text-sm flex items-center justify-center shadow-lg">{s.n}</div>
                <div className="text-4xl mb-4">{s.i}</div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{s.t}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { v: count.toLocaleString()+"+", l:"Files Converted", i:"📊" },
            { v:"100%",    l:"Free Forever",  i:"🎁" },
            { v:"< 10s",   l:"Average Speed", i:"⚡" },
            { v:"256-bit", l:"SSL Secured",   i:"🔒" },
          ].map(x => (
            <div key={x.l} className="bg-white border border-slate-200 rounded-2xl p-5 text-center hover:shadow-md transition-shadow">
              <div className="text-3xl mb-2">{x.i}</div>
              <div className="font-extrabold text-slate-900 text-2xl mb-0.5">{x.v}</div>
              <div className="text-slate-500 text-sm">{x.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SEO */}
      <section className="max-w-3xl mx-auto px-4 pb-20">
        <h2 className="font-extrabold text-slate-900 text-2xl mb-4">Free Online File Converter</h2>
        <p className="text-slate-600 leading-relaxed mb-4">FileConvert is the fastest free online file converter. Convert PDF to Word, compress PDFs, merge PDFs, convert images — all 18 tools completely free, no registration required.</p>
        <p className="text-slate-600 leading-relaxed">Your files are processed on secure servers and automatically deleted after 1 hour. No watermarks, no limits, no hidden fees.</p>
      </section>
    </main>
  );
}