/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
    fontFamily:{
      "rancho":"Rancho",
      "roboto":"Roboto",
    }
    },
  },
  plugins: [require('daisyui')],
}