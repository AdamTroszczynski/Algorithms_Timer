/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,vue,js,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      black: '#000000',
      white: '#FFFFFF',
      darkWhite: '#EEEEEE',
      grey: '#7C7C7C',
      lightGrey: '#8A8A8A',
      darkGrey: '#5C5C5C',
      green: '#73B96D',
      red: '#CB6B6B',
    },
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
      '3xl': '1600px',
      '4xl': '1800px',
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: false,
    darkTheme: 'dark',
    base: false,
    logs: false,
  },
};
