/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans:    ["'DM Sans'",    "system-ui", "sans-serif"],
        display: ["'Syne'",       "system-ui", "sans-serif"],
        mono:    ["'DM Mono'",    "monospace"],
      },
      colors: {
        space: {
          950: "#03050A",
          900: "#07090F",
          800: "#0D1117",
          700: "#111827",
          600: "#1A2235",
          500: "#1E293B",
        },
        electric: {
          DEFAULT: "#00D4FF",
          dim:     "#00A8CC",
          glow:    "rgba(0,212,255,0.15)",
        },
        neon: {
          violet: "#7C3AED",
          pink:   "#EC4899",
          green:  "#10B981",
        },
      },
      backgroundImage: {
        "grid-pattern":
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      backgroundSize: {
        "grid": "40px 40px",
      },
      animation: {
        "fade-up":   "fadeUp 0.5s ease-out both",
        "fade-in":   "fadeIn 0.4s ease-out both",
        "glow-pulse":"glowPulse 3s ease-in-out infinite",
        "float":     "float 6s ease-in-out infinite",
        "scan-line": "scanLine 3s linear infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
        glowPulse: {
          "0%,100%": { opacity: "0.4" },
          "50%":     { opacity: "0.8" },
        },
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%":     { transform: "translateY(-12px)" },
        },
        scanLine: {
          from: { transform: "translateY(-100%)" },
          to:   { transform: "translateY(100vh)" },
        },
      },
      boxShadow: {
        "electric":     "0 0 20px rgba(0,212,255,0.3), 0 0 60px rgba(0,212,255,0.1)",
        "electric-sm":  "0 0 10px rgba(0,212,255,0.2)",
        "card":         "0 4px 24px rgba(0,0,0,0.4)",
        "card-hover":   "0 8px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,212,255,0.2)",
      },
    },
  },
  plugins: [],
};