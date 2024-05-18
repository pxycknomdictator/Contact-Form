/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightgreen: "hsl(148, 38%, 91%)",
        green: "hsl(169, 82%, 27%)",
        red: "hsl(0, 66%, 56%)",
        mediumgray: "hsl(186, 15%, 59%)",
        darkgray: "hsl(187, 24%, 22%)",
      },
    },
  },
  plugins: [],
};
