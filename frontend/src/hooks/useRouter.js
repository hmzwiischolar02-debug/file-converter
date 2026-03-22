// src/hooks/useRouter.js
// Uses the HTML5 History API (real URLs, no # prefix)
// Requires vercel.json rewrite rule to redirect all paths to index.html

import { useState, useEffect, useCallback } from "react";

export function useRouter() {
  const getPath = () => window.location.pathname;
  const [path, setPath] = useState(getPath);

  useEffect(() => {
    // Listen for browser back/forward navigation
    const handler = () => setPath(getPath());
    window.addEventListener("popstate", handler);
    return () => window.removeEventListener("popstate", handler);
  }, []);

  const navigate = useCallback((to) => {
    window.history.pushState(null, "", to);
    setPath(to);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return { path, navigate };
}
