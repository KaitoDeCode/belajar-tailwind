 /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: 'class' ,
  theme: {
    extend: {
      fontFamily:{
        Quicksand : ['Quicksand']
      },
      animation:{
        "spin-low" : "spin 3s linear infinite",
        "move": "move 10s linear infinite"
      },
      keyframes:{
        move:{
          '0%' : {transform: 'translateY(0px)'},
          '10%' : {transform: 'rotate(-3deg)'},
          '25%' : {transform: 'translateX(40px)'},
          '40%' : {transform: 'rotate(0deg)'},
          '45%' : {transform: 'translateY(10px)'},
          '50%' : {transform: 'translateY(-30px)'},
          '60%' : {transform: 'translateY(-20px)'},
          '65%' : {transform: 'rotate(3deg)'},
          '75%' : {transform: 'translate(0px)'},
          '80%' : {transform: 'rotate(0deg)'},
          '90%' : {transform: 'translateY(-30px)'},
          '100%' : {transform: 'translateY(0px)'},
          
        }
      }
    },
  },
  plugins: [],
}

