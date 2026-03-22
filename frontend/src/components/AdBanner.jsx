const H = { horizontal: "h-20", square: "h-56", sidebar: "h-44" };
export default function AdBanner({ variant = "horizontal", className = "" }) {
  return (
    <div className={`w-full ${H[variant]} ${className} my-5 bg-slate-50 border-2 border-dashed border-slate-200 rounded-xl flex items-center justify-center gap-3 text-slate-400 text-sm font-medium`}>
      <span>📢</span><span>Advertisement</span>
      <span className="text-xs bg-slate-200 text-slate-500 px-2 py-0.5 rounded">Google AdSense</span>
    </div>
  );
}
