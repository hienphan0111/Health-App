/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

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
    extend: {
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
    },
  },
  plugins: [daisyui],
  daisyui: {
    styled: false,
    themes: true,
    rtl: false,
  },
}

