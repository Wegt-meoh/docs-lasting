/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mask: "rgba(0,0,0,0.2)",
      },
    },
  },
  plugins: [],
};
