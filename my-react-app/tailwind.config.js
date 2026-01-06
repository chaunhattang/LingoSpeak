/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#115E59",
        "background-light": "#f6f7f8",
        "background-dark": "#101922",
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
