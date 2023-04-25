/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Santoshi', 'Sans-serif'],
        inter: ['Inter', 'Sans-serif'],
      },
    },
  },
  plugins: [],
};
