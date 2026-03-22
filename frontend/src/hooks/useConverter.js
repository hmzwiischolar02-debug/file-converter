// src/hooks/useConverter.js
import { useState, useCallback } from "react";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:8000";
const TIMEOUT_MS = 120_000; // 2 minutes — enough for heavy conversions

async function callAPI(toolId, files, extras = {}) {
  const formData = new FormData();
  files.forEach((f) => formData.append("files", f));

  Object.entries(extras).forEach(([key, val]) => {
    if (val !== undefined && val !== null && val !== "") {
      formData.append(key, val);
    }
  });

  // AbortController gives us a proper timeout
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

  let res;
  try {
    res = await fetch(`${API_BASE}/convert/${toolId}`, {
      method: "POST",
      body: formData,
      signal: controller.signal,
    });
  } catch (err) {
    if (err.name === "AbortError") {
      throw new Error(
        "Conversion timed out after 2 minutes. Try a smaller file."
      );
    }
    throw new Error(
      "Cannot reach the backend server. Please try again in a moment."
    );
  } finally {
    clearTimeout(timer);
  }

  if (!res.ok) {
    if (res.status === 429) {
      throw new Error("Too many conversions. Please wait a minute and try again.");
    }
    let detail = `Server error (${res.status})`;
    try {
      const json = await res.json();
      detail = json.detail || detail;
    } catch {}
    throw new Error(detail);
  }

  const blob = await res.blob();
  const disposition = res.headers.get("Content-Disposition") || "";
  const match = disposition.match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/);
  const filename = match ? match[1].replace(/['"]/g, "") : `converted_file`;

  return { blob, filename };
}

export function useConverter(tool) {
  const [files,    setFiles]    = useState([]);
  const [status,   setStatus]   = useState("idle");
  const [progress, setProgress] = useState(0);
  const [result,   setResult]   = useState(null);
  const [error,    setError]    = useState(null);

  const handleFiles = useCallback(
    (incoming) => {
      const valid = Array.from(incoming).filter((f) => {
        const ext = "." + f.name.split(".").pop().toLowerCase();
        return tool.accept.split(",").includes(ext);
      });

      if (!valid.length) {
        const allowed = tool.accept.replace(/\./g, "").toUpperCase().split(",").join(", ");
        setError(`Invalid file type. Accepted formats: ${allowed}`);
        return;
      }

      const oversized = valid.filter((f) => f.size > 10 * 1024 * 1024);
      if (oversized.length) {
        setError("File is too large. Maximum allowed size is 10 MB.");
        return;
      }

      setFiles(valid);
      setError(null);
      setStatus("idle");
      setResult(null);
    },
    [tool]
  );

  const convert = useCallback(
    async (extras = {}) => {
      if (!files.length) return;

      setStatus("converting");
      setProgress(0);
      setError(null);

      // Progress animation — speeds up near the end to show activity
      const interval = setInterval(() => {
        setProgress((p) => {
          if (p < 60) return p + Math.random() * 12;
          if (p < 80) return p + Math.random() * 4;
          if (p < 90) return p + Math.random() * 1.5;
          return p; // Hold at 90% until real response
        });
      }, 400);

      try {
        const res = await callAPI(tool.id, files, extras);
        clearInterval(interval);
        setProgress(100);
        setTimeout(() => {
          setResult(res);
          setStatus("done");
        }, 350);
      } catch (err) {
        clearInterval(interval);
        setError(err.message);
        setStatus("error");
      }
    },
    [files, tool]
  );

  const reset = useCallback(() => {
    setFiles([]);
    setStatus("idle");
    setProgress(0);
    setResult(null);
    setError(null);
  }, []);

  return { files, status, progress, result, error, handleFiles, convert, reset };
}
