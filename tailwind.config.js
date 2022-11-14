module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      'mobile-375': '375px',
    },
    extend: {
      colors: {
        primary: '#002EA8',
        secondary: '#3772D0',
        lightblue: '#e3edfd',
        gray333: '#333333',
        gray80: '#808080',
        gray66: '#666666',
        white: '#ffffff',
        black: '#000000',
        black22: '#222222',
        red: '#D35273',
        blueD9: '#0F5DD9',
        blueE0: '#3E7CE0',
        grayEF: '#EFEFEF',
        grayEC: '#ECECEC',
        gray99: '#999999',
        blueFF: '#EBF3FF',
        red91: '#FF6591',
        green91: '#2EBEB2',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
