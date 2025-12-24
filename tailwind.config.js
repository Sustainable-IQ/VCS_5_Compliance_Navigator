/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        verra: {
          navy: '#061946',
          teal: '#047299',
          'navy-light': '#004D73',
        }
      }
    },
  },
  plugins: [],
}
