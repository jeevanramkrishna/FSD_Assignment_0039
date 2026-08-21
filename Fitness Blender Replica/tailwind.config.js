/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fb: {
          teal: '#008080',
          'teal-dark': '#006666',
          'teal-light': '#e6f4f4',
          aqua: '#2ea1a1',
          dusk: '#34384d',
          sand: '#f5f4f0',
          dark: '#1e2229',
          gray: '#5a6270',
          'light-gray': '#f8f9fa',
          border: '#e2e8f0',
          yellow: '#f4c430',
          plus: '#10b981',
        }
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
