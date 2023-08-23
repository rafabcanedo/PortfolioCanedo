/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      // eslint-disable-next-line no-dupe-keys
      white: '#fff',
      dark: '#202020',

      subtitle: '#c3c3c3',
      primary: '#ffc93c',
      nav: '#2e2e2e',
      nuv: '#f2f2f2',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      cursive: ['Akaya Telivigala', 'cursive'],
    },
    extend: {},
  },
  plugins: [],
}
