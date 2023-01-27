/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}" ],
  theme: {

    sm: '640px', // => media (min-width: 640px) { ... }

    md: '768px', // => media (min-width: 768px) { ... }

    lg: '1024px', // => media (min-width: 1024px) { ... }

    xl: '1280px', // => media (min-width: 1280px) { ... }

    '2xl': '1536', // => media (min-width: 1536px) { ... }

    extend: {
       backgroundColor: {
        bgColor: "#112429",
        navColor: "#182F35",
        imgColor: '#7AE7C7'
       },

       textColor: {
       txColor: "#7AE7C7",
       tx1Color: "#182F35",
       tx2Color: "#112429"
       },
    

    }

  },
  plugins: [],
}
