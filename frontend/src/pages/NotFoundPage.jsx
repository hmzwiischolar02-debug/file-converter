// src/pages/NotFoundPage.jsx
export default function NotFoundPage({ navigate }) {
  return (
    <div className="max-w-md mx-auto px-4 py-36 text-center">
      <div className="text-6xl mb-6">🌌</div>
      <h1 className="font-display font-bold text-3xl mb-3" style={{ color: "var(--text-primary)" }}>
        Lost in Space
      </h1>
      <p className="mb-8 font-mono text-sm" style={{ color: "var(--text-muted)" }}>
        This page doesn't exist in our universe.
      </p>
      <div className="flex flex-wrap gap-3 justify-center">
        <button onClick={() => navigate("/")}
          className="btn-electric px-8 py-3 text-sm font-bold rounded-xl text-black">
          Go Home
        </button>
        <button onClick={() => navigate("/tools")}
          className="btn-ghost px-6 py-3 text-sm rounded-xl">
          Browse Tools
        </button>
      </div>
    </div>
  );
}