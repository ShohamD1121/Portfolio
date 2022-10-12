/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightTurquoise: "var(--lightTurquoise)",
        darkTurquoise: "var(--darkTurquoise)",
      },
    },
  },
  plugins: [],
};
