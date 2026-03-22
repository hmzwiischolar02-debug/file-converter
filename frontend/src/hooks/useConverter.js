// src/hooks/useConverter.js
import { useState, useCallback } from "react";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:8000";

async function callAPI(toolId, files, extras = {}) {
  const formData = new FormData();
  files.forEach((f) => formData.append("files", f));

  // Append any extra fields (e.g. password for unlock-pdf)
  Object.entries(extras).forEach(([key, val]) => {
    if (val !== undefined && val !== null && val !== "") {
      formData.append(key, val);
    }
  });

  let res;
  try {
    res = await fetch(`${API_BASE}/convert/${toolId}`, {
      method: "POST",
      body: formData,
    });
  } catch {
    throw new Error(
      "Cannot reach the backend server. Make sure it is running on port 8000."
    );
  }

  if (!res.ok) {
    // Rate limit exceeded
    if (res.status === 429) {
      throw new Error(
        "Too many conversions. Please wait a minute and try again."
      );
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

  // extras: optional object e.g. { password: "abc" }
  const convert = useCallback(
    async (extras = {}) => {
      if (!files.length) return;

      setStatus("converting");
      setProgress(0);
      setError(null);

      const interval = setInterval(() => {
        setProgress((p) => (p >= 85 ? 85 : p + Math.random() * 10));
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