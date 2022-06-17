/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
       yellow: {
         650 : '#FF782E',
       },
     },
    },
  },
  plugins: [],
}
