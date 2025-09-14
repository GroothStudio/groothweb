/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        xs: "475px", // for very small phones
        // sm: 640px, md: 768px, lg: 1024px, etc. are defaults
      },
    },
  },
  plugins: [],
};
