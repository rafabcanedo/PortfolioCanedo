/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
     'white': '#FFFFFF',
     'black': '#000000',
     'white':'#fff',
     'dark': '#202020',

     'subtitle': '#c3c3c3',
     'primary': '#ffc93c',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      cursive: ['Akaya Telivigala', 'cursive'],
    },
    extend: {},
  },
  plugins: [],
}

