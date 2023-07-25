/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  colors: {
    'light': '#fff',
    'dark-600': '#2e2e2e',
    'dark-500': '#414141',
    'gray': '#777777',
    'primary-300': '#ffcc21',
    'primary-400': '#ff963c',
    'primary-500': '#ea6c00',
    'secondary-300': '#8fe9d0',
  },
  theme: {
    fontFamily: {
      'sans': ['Inter', 'sans-serif'],
      'jp': ['Noto Sans JP'],
    },
    extend: {},
  },
  plugins: [],
}

