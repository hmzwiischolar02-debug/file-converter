// src/pages/HomePage.jsx
import { useState } from "react";
import ToolCard from "../components/ToolCard";
import AdBanner from "../components/AdBanner";
import { TOOL_LIST } from "../data/tools";

function TrustCard({ icon, value, label }) {
  return (
    <div className="glass glass-hover rounded-xl p-5 text-center">
      <div className="text-2xl mb-2">{icon}</div>
      <div className="font-display font-bold text-xl mb-0.5" style={{ color: "var(--text-primary)" }}>{value}</div>
      <div className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>{label}</div>
    </div>
  );
}

function StepCard({ number, icon, title, description }) {
  return (
    <div className="glass glass-hover rounded-xl p-7 text-center relative">
      <div className="absolute -top-3 -left-3 w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-bold text-black"
        style={{ background: "linear-gradient(135deg, var(--accent), #7C3AED)" }}>
        {number}
      </div>
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="font-display font-bold text-base mb-2" style={{ color: "var(--text-primary)" }}>{title}</h3>
      <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{description}</p>
    </div>
  );
}

export default function HomePage({ navigate }) {
  const [count] = useState(() => 47382 + Math.floor(Math.random() * 1000));

  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-28 px-4" style={{ background: "var(--bg-base)" }}>

        {/* Grid background */}
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-100 pointer-events-none" />

        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none animate-glow-pulse"
          style={{ background: "radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)", filter: "blur(40px)" }} />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full pointer-events-none animate-glow-pulse"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)", filter: "blur(40px)", animationDelay: "1.5s" }} />

        <div className="max-w-4xl mx-auto text-center relative">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono mb-8 animate-fade-up"
            style={{ background: "rgba(0,212,255,0.08)", border: "1px solid rgba(0,212,255,0.2)", color: "var(--accent)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Free Online File Converter — No signup required
          </div>

          {/* H1 */}
          <h1 className="font-display font-bold leading-tight tracking-tight mb-6 animate-fade-up animate-delay-100"
            style={{ fontSize: "clamp(2.5rem, 7vw, 4.5rem)", color: "var(--text-primary)" }}>
            Convert Any File{" "}
            <span className="text-gradient">Instantly</span>
            <br />Zero Cost. Zero Signup.
          </h1>

          <p className="text-lg leading-relaxed max-w-2xl mx-auto mb-10 animate-fade-up animate-delay-200"
            style={{ color: "var(--text-muted)" }}>
            18 powerful conversion tools — PDF, Word, Excel, PowerPoint, Images and more.
            Process files in seconds, directly in your browser.
          </p>

          {/* Feature chips */}
          <div className="flex flex-wrap justify-center gap-2 mb-10 animate-fade-up animate-delay-300">
            {["PDF → Word","Word → PDF","JPG → PDF","Merge PDF","Compress PDF","Remove Background"].map(t => (
              <span key={t} className="text-xs font-mono px-3 py-1.5 rounded-full"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid var(--border)", color: "var(--text-muted)" }}>
                {t}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 animate-fade-up animate-delay-400">
            <button onClick={() => navigate("/tools")}
              className="btn-electric px-8 py-3.5 text-sm font-bold rounded-xl">
              Browse All 18 Tools →
            </button>
            <button onClick={() => navigate("/tools/cat/pdf")}
              className="btn-ghost px-6 py-3.5 text-sm rounded-xl">
              PDF Tools
            </button>
          </div>
        </div>
      </section>

      {/* ── Ad ────────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4">
        <AdBanner variant="horizontal" />
      </div>

      {/* ── Tool Grid ─────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <p className="text-xs font-mono uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>
            ◈ Conversion Tools
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mb-3" style={{ color: "var(--text-primary)" }}>
            All 18 Tools — All Free
          </h2>
          <p className="text-base" style={{ color: "var(--text-muted)" }}>
            Select a tool to get started — instant, no signup
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {TOOL_LIST.map(tool => (
            <ToolCard key={tool.id} tool={tool} navigate={navigate} />
          ))}
        </div>
      </section>

      {/* ── Ad ────────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4">
        <AdBanner variant="horizontal" />
      </div>

      {/* ── How it works ──────────────────────────────────── */}
      <section className="py-20 px-4" style={{ background: "var(--bg-surface)" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-mono uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>
              ◈ How It Works
            </p>
            <h2 className="font-display font-bold text-3xl" style={{ color: "var(--text-primary)" }}>
              3 Steps to Convert
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StepCard number="1" icon="📁" title="Upload Your File"
              description="Drag & drop or click to select your file from any device." />
            <StepCard number="2" icon="⚡" title="Instant Processing"
              description="Our servers convert your file instantly with no quality loss." />
            <StepCard number="3" icon="⬇️" title="Download Result"
              description="Your converted file is ready. Download in one click." />
          </div>
        </div>
      </section>

      {/* ── Trust stats ───────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <TrustCard icon="📊" value={count.toLocaleString()+"+"} label="Files Converted" />
          <TrustCard icon="🎁" value="100%"    label="Free Forever"  />
          <TrustCard icon="⚡" value="< 10s"   label="Average Speed" />
          <TrustCard icon="🔒" value="256-bit" label="SSL Secured"   />
        </div>
      </section>

      {/* ── SEO content ───────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 pb-20">
        <hr className="divider mb-12" />
        <h2 className="font-display font-bold text-2xl mb-4" style={{ color: "var(--text-primary)" }}>
          Free Online File Converter
        </h2>
        <p className="leading-relaxed mb-4 text-sm" style={{ color: "var(--text-muted)" }}>
          FileConvert is the fastest and most reliable free online file converter. Whether you need to
          convert PDF to Word, compress a PDF, merge multiple PDFs, or convert images — all 18 tools
          are completely free with no registration required.
        </p>
        <p className="leading-relaxed text-sm" style={{ color: "var(--text-muted)" }}>
          Your files are processed on secure servers and automatically deleted after 1 hour. No
          watermarks, no limits, no hidden fees.
        </p>
      </section>
    </main>
  );
}
