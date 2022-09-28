/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './js/*.js'
  ],
  theme: {
    screens: {
      'lg': '1200px'
    },
    extend: {
      fontFamily: {
        'sans': ['Manrope', 'sans-serif'],
      },
      colors: {
        softCyan: 'hsl(174, 77%, 80%)',
        strongCyan: 'hsl(174, 86%, 45%)',
        lightGrayRed: 'hsl(14, 92%, 95%)',
        lightRed: 'hsl(15, 100%, 70%)',
        paleBlue: 'hsl(226, 100%, 87%)',
        white: 'hsl(0, 0%, 100%)',
        veryPaleBlue: 'hsl(230, 100%, 99%)',
        lightGrayBlue: 'hsl(224, 65%, 95%)',
        mediumGrayBlue: 'hsl(223, 50%, 87%)',
        grayBlue: 'hsl(225, 20%, 60%)',
        darkDesatBlue: 'hsl(227, 35%, 25%)'
      }
    },
  },
  plugins: [],
}
