// src/components/AdBanner.jsx
// Replace the placeholder divs with real <ins class="adsbygoogle"> tags
// after your AdSense account is approved.
//
// Example real ad unit:
// <ins className="adsbygoogle"
//   style={{ display: "block" }}
//   data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
//   data-ad-slot="XXXXXXXXXX"
//   data-ad-format="auto"
//   data-full-width-responsive="true"
// />

const SIZES = {
  horizontal: "h-24",
  square: "h-64",
  sidebar: "h-48",
};

const LABELS = {
  horizontal: "728 × 90 — Leaderboard",
  square: "300 × 250 — Rectangle",
  sidebar: "300 × 250 — Sidebar",
};

export default function AdBanner({ variant = "horizontal", className = "" }) {
  return (
    <div
      className={`w-full ${SIZES[variant]} my-5 bg-gradient-to-r from-slate-100 to-slate-50 border-2 border-dashed border-slate-200 rounded-xl flex flex-col items-center justify-center gap-1 text-slate-400 ${className}`}
    >
      <div className="flex items-center gap-2 text-sm font-medium">
        <span>📢</span>
        <span>Advertisement</span>
      </div>
      <span className="text-xs bg-slate-200 text-slate-500 px-2 py-0.5 rounded">
        Google AdSense · {LABELS[variant]}
      </span>
    </div>
  );
}
