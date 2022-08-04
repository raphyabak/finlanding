/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: {
      boxShadow: {
        'pricing': '0px 8px 80px rgba(167, 167, 167, 0.24)',
        'progress': '6px 8px 80px rgba(148, 148, 148, 0.16)',
        'num':'8px 8px 80px rgba(167, 167, 167, 0.8)',
        'button': '0px 38px 50px rgba(5, 121, 107, 0.2)',
        'pributton': '1px solid rgba(133, 147, 163, 0.32)',
        'pricing2': '0px 8px 80px rgba(5, 121, 107, 0.32)',
        'insidebutton': '1px solid rgba(255, 255, 255, 0.32)',
        
      },
      dropShadow: {
        'pricing': '0px 8px 80px rgba(5, 94, 255, 0.4)'
      }
    },
  },
  plugins: [],
}
