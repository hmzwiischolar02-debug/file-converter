// src/components/StatsBar.jsx

export default function StatsBar({ count }) {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-2.5">
      <div className="max-w-6xl mx-auto px-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-1 text-xs sm:text-sm">
        <span className="flex items-center gap-2">
          📊{" "}
          <strong className="text-blue-400">{count.toLocaleString()}</strong>{" "}
          files converted today
        </span>
        <span className="flex items-center gap-2">
          ⚡ Average{" "}
          <strong className="text-green-400">8 seconds</strong>{" "}
          conversion time
        </span>
        <span className="flex items-center gap-2">
          🔒 <strong className="text-white">100% Secure</strong> — files
          deleted after 1 hr
        </span>
      </div>
    </div>
  );
}
