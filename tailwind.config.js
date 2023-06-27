/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        spartan: ["Spartan", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
        jost: ["Jost", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#3E4454",
          dark: "#2B2D33",
        },
        secondary: {
          DEFAULT: "#F75023",
        },
      },
    },
  },
  plugins: [],
};
