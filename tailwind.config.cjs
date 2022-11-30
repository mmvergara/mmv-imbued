/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik Distressed", "cursive"],
      },
      colors: {
        cream: "#F3EFE0",
        bgPrimary: "#222222",
        bgSecondary: "#434242",
        priCyan: "#22A39F",
      },
    },
  },
  plugins: [],
};
