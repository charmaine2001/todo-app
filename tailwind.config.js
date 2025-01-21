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
    },
  },
  plugins: [],
};

