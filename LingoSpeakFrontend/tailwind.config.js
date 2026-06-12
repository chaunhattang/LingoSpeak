/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",
        "primary-light": "#3b82f6",

        background: "#f5f7fb",
        surface: "#ffffff",

        text: "#1e293b",
        "text-light": "#64748b",

        border: "#e2e8f0",

        success: "#22c55e",
        info: "#3b82f6",
        warning: "#f59e0b",
        danger: "#ef4444",
      },

      fontFamily: {
        display: ["Lexend", "sans-serif"],
        body: ["Noto Sans", "sans-serif"],
      },

      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "1rem",
        xl: "1.5rem",
        "2xl": "2rem",
        full: "9999px",
      },
    },
  },
  plugins: [],
};