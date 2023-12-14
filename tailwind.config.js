/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'Nunito': ['Nunito Sans', 'sans-serif']
      },
      colors: {
        dark: {
          'dark-blue': 'hsl(209, 23%, 22%)',
          'very-dark-blue': 'hsl(207, 26%, 17%)',
        },
        light: {
          'very-dark-blue': 'hsl(200, 15%, 8%)',
          'dark-gray': 'hsl(0, 0%, 52%)',
          'very-light-gray': 'hsl(0, 0%, 98%)',
          'white': 'hsl(0, 0%, 100%)',
        },
      },
    },
  },
  plugins: [],
}
