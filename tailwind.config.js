/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      lineHeight: {
        '72': '72px', // Adds a custom line height with the key '72' and value '72px'
      },
      backgroundImage: {
        'img': "url('../src/assets/background-complete.png')",
       // 'emp':"url('../src/assets/img/emp.png')"
    },


    },
    fontFamily: {
      Montserrat:['Montserrat'],
      OpenSans:['Open Sans']
     },
    colours:{
      "colour1":'#80BBFF',
      "colour2":'#0078FF'
    }
  
  },
  plugins: [],
}

