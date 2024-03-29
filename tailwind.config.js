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
        'green':'#00605F',
        'darkgreen':'#004343',
        'primarygreen':'#007E7C',
        'line':' #77BEBD',
        'stroke':'#CACACA',
        'bgopacity':'#333',
        
      },
      fontFamily:{
        'poppins':['Poppins', 'sans-serif'],
        'inter':[ 'Inter', 'sans-serif']
      },
      textColor:{
        'hexgray':'#717171',
        'green':'#004343',
        'lightgray':'#B3B3B3',
        'primarygreen':'#007E7C',
        'customgreen':'#1A9C9A',
       
      },
      borderColor:{
        'green':'#004343',
        'bordergreen':'#1A9C9A',
        'bordergray':'#DBDBDB',
        'bordersearch':'#9F9F9F',
        'borderoutline':'#CFCFCF',
       
      
      },
      stroke:{
        'customgreen':'#1A9C9A'

      }
      
      
    },
  },
  plugins: [],
}

