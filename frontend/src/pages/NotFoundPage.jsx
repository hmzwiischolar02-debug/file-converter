export default function NotFoundPage({ navigate }) {
  return (
    <div className="max-w-md mx-auto px-4 py-36 text-center">
      <div className="text-6xl mb-6">🤷</div>
      <h1 className="font-extrabold text-slate-900 text-3xl mb-3">Page Not Found</h1>
      <p className="text-slate-500 mb-8">The page you're looking for doesn't exist.</p>
      <div className="flex flex-wrap gap-3 justify-center">
        <button onClick={() => navigate("/")} className="px-8 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors">Go Home</button>
        <button onClick={() => navigate("/tools")} className="px-6 py-3 border-2 border-slate-200 text-slate-700 font-semibold rounded-xl hover:bg-slate-50">Browse Tools</button>
      </div>
    </div>
  );
}
