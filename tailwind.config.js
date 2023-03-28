/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Roboto, sans-serif",
        poppins: "Poppins, sans-serif",
      },
      colors: {
        bg: {
          100: "#E2E2E2",
        },
      },
    },
  },
  plugins: [],
}

