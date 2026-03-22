// src/pages/HomePage.jsx
import { useState } from "react";
import ToolCard from "../components/ToolCard";
import AdBanner from "../components/AdBanner";
import { TOOL_LIST } from "../data/tools";

function TrustBadge({ icon, value, label }) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 text-center hover:shadow-md transition-shadow">
      <div className="text-3xl mb-2">{icon}</div>
      <div className="font-extrabold text-slate-900 text-2xl mb-0.5">{value}</div>
      <div className="text-slate-500 text-sm">{label}</div>
    </div>
  );
}

function StepCard({ number, icon, title, description }) {
  return (
    <div className="relative bg-white border border-slate-200 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
      <div className="absolute -top-3 -left-3 w-8 h-8 bg-blue-600 rounded-full text-white font-black text-sm flex items-center justify-center shadow-lg">
        {number}
      </div>
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="font-bold text-slate-900 text-lg mb-2">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

export default function HomePage({ navigate }) {
  const [conversionCount] = useState(
    () => 47382 + Math.floor(Math.random() * 1000)
  );

  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-24 px-4 overflow-hidden">
        {/* Dot grid background */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="max-w-4xl mx-auto text-center relative">
          {/* Pill badge */}
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-1.5 text-sm text-blue-300 mb-8 font-medium">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Free Online File Converter — No signup required
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-5 leading-tight tracking-tight">
            Convert Files{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
              Instantly
            </span>
            <br />
            100% Free
          </h1>

          <p className="text-slate-300 text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            PDF, Word, JPG, PNG — convert between any format in seconds. No
            installation, no watermarks, no limits.
          </p>

          {/* Tool chips */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
            {["PDF → Word", "Word → PDF", "JPG → PDF", "Merge PDF", "Compress PDF"].map(
              (t) => (
                <span
                  key={t}
                  className="bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium"
                >
                  {t}
                </span>
              )
            )}
          </div>

          <button
            onClick={() => navigate("/tools")}
            className="px-10 py-4 bg-gradient-to-r from-blue-500 to-violet-500 text-white font-bold rounded-2xl shadow-2xl hover:from-blue-600 hover:to-violet-600 transition-all hover:shadow-blue-500/30 text-lg active:scale-95"
          >
            Browse All Tools →
          </button>
        </div>
      </section>

      {/* ── Top Ad ───────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4">
        <AdBanner variant="horizontal" />
      </div>

      {/* ── Tool Grid ─────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="font-extrabold text-slate-900 text-3xl sm:text-4xl text-center mb-2">
          All Conversion Tools
        </h2>
        <p className="text-slate-500 text-center text-lg mb-10">
          Select a tool to get started — all free, all instant
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {TOOL_LIST.map((tool) => (
            <ToolCard key={tool.id} tool={tool} navigate={navigate} />
          ))}
        </div>
      </section>

      {/* ── Mid Ad ────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4">
        <AdBanner variant="horizontal" />
      </div>

      {/* ── How It Works ──────────────────────────────────── */}
      <section className="bg-slate-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-extrabold text-slate-900 text-3xl text-center mb-2">
            How It Works
          </h2>
          <p className="text-slate-500 text-center mb-12">
            Convert your files in 3 simple steps
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StepCard
              number="1"
              icon="📁"
              title="Upload Your File"
              description="Drag & drop or click to select your file from any device."
            />
            <StepCard
              number="2"
              icon="⚡"
              title="We Convert It"
              description="Our servers process your file instantly with no quality loss."
            />
            <StepCard
              number="3"
              icon="⬇️"
              title="Download Result"
              description="Your converted file is ready. Download and done!"
            />
          </div>
        </div>
      </section>

      {/* ── Trust Signals ─────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          <TrustBadge
            icon="📊"
            value={conversionCount.toLocaleString() + "+"}
            label="Files Converted"
          />
          <TrustBadge icon="🎁" value="100%" label="Free Forever" />
          <TrustBadge icon="⚡" value="< 10s" label="Average Speed" />
          <TrustBadge icon="🔒" value="256-bit" label="SSL Secured" />
        </div>
      </section>

      {/* ── SEO Content ───────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 pb-20">
        <h2 className="font-extrabold text-slate-900 text-2xl mb-4">
          Free Online File Converter
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          FileConvert is the fastest and most reliable free online file
          converter. Whether you need to convert PDF to Word, compress a PDF,
          merge multiple PDFs, or convert images to PDF, we have the tool for
          you — completely free.
        </p>
        <p className="text-slate-600 leading-relaxed">
          Unlike other converters, we don't require registration, don't add
          watermarks, and don't limit your conversions. Your files are processed
          on secure servers and automatically deleted after 1 hour. Start
          converting your files today!
        </p>
      </section>
    </main>
  );
}
