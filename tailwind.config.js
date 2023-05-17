/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mask: "rgba(0,0,0,0.2)",
        "text-primary-dark": "#fff",
        "text-secondary-dark": "#cdcdcd",
        "text-inactive-dark": "#cdcdcda6",
        "text-link-dark": "#e78610",
        "text-red": "#ba3925",
        "text-orange": "#e78610",
        "text-pink": "#e99b8f",
      },
      backgroundColor: {
        "primary-dark": "#1b1b1b",
        "secondary-dark": "#343434",
        "tertiary-dark": "#4e4e4e",
      },

      borderColor: {
        "primary-dark": "#858585",
        "secondary-dark": "#696969",
      },
    },
  },
  plugins: [],
};
