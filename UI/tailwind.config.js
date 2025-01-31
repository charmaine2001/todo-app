/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'navy-blue': "#032B44",
        'light-blue':"#ADD8E6",
        'navy-gray':"#2E4053",
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate'),

  ],
};


