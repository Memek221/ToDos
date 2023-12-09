/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        text: '#0B0C14',
        background: '#EBEDF4',
        primary: '#2E3656',
        secondary: '#C0C5DD',
        accent: '#495588',
      },
    },
    fontFamily: {
      sans: ['Work Sans', 'sans-serif'],
    },
  },
  plugins: [],
};
