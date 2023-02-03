/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#217AFF',
      },
      backgroundImage: {
        divider:
          'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 51.04%, rgba(0, 0, 0, 0) 100%)',
      },
      boxShadow: {
        table: '0px 2px 4px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}
