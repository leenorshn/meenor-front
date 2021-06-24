const colors = require('tailwindcss/colors')

module.exports = {
    jit:true,
  purge: [
     './components/**/*.{vue,js}',
     './layouts/**/*.vue',
     './pages/**/*.vue',
     './plugins/**/*.{js,ts}',
     './nuxt.config.{js,ts}',
   ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        "orange":colors.orange,
        "greenP":"#21CE99"
      },
      height: {
        
        larger:'32rem'
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms")
  ],
}
