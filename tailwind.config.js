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
      OpenSans:['Open Sans'],
      Poppins:['Poppins'],
      Inter:['Inter']
     },
    colours:{
      "colour1":'#80BBFF',
      "colour2":'#0078FF',
      "co":'#C7C7C7',
      "gradient":'#E6F1FE'
    },
    boxShadow: {
      '3xl': '-3 4px 16px 0px rgba(0, 0, 0, 0.04)',
      '4xl': '0px 10px 44px 0 rgba(0, 0, 0, 0.1);'
    },
     letterSpacing: {
      
      custom:'-0.02em',
      letter:'0.03em'
    },
  
  },
  plugins: [
    
  ],
}

