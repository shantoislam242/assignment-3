/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [],
  }

  // tailwind.config.js
module.exports = {
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('/images/bg.jpg')",
      },
    },
  },
  plugins: [],
}
