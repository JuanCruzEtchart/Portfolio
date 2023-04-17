/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      listStyleType: {
        none: "none",
        disc: "disc",
        decimal: "decimal",
        square: "square",
        roman: "upper-roman",
      },
      colors: {
        detail: "#FFC700",
      },
      boxShadow: {
        default: "0 6px 6px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
