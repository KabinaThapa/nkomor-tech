/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        'customgreen':'#1A9C9A',
        'green':'#00605F'
      },
      fontFamily:{
        'poppins':['Urbanist', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

