/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#8e44ad",
        ink: "#222",
        muted: "#777",
        lightbg: "#eee",
        offwhite: "#fff9",
      },
      boxShadow: {
        soft: "0 .5rem 1rem rgba(0,0,0,.1)",
      },
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui"],
      },
      borderColor: {
        ink: "#222"
      }
    },
  },
  plugins: [],
};