/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      light: '#fff',
      gray: '#777777',
      dark: {
        500: '#414141',
        600: '#2e2e2e',
      },
      primary: {
        300: '#ffcc21',
        400: '#ff963c',
        500: '#ea6c00',
      },
      secondary: {
        300: '#8fe9d0',
      }
    },
    fontFamily: {
      'sans': ['Inter', 'sans-serif'],
      'jp': ['Noto Sans JP'],
    },
    extend: {},
  },
  plugins: [],
}

