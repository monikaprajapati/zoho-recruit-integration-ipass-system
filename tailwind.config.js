const { colors: defaultColors } = require('tailwindcss/defaultTheme')

const colors = {
    ...defaultColors,
    ...{
      "indigo": {
        10: 'rgba(62, 75, 152, 0.1)',
        25: 'rgba(62, 75, 152, 0.25)',
        55: 'rgba(62, 75, 152, 0.55)',
        60: 'rgba(62, 75, 152, 0.7)',
        70: '#3E4B98',
        600: '#373F6C',
        900: '#0B1037',
        100: '#D8DDFD',
        800: '#1E2448'
      },
      "orange": {
        300: '#ECAD63'
      },
      "yellow": {
        200: '#FFE484',
        300: '#FAD357'
      },
      "gray": {
        40: '#B5B6BA',
        50: '#F6F6F6',
        60: '#808189',
        70: '#67686F',
        80: '#4E4F55',
        90: '#9A9BA2',
        100: '#EAEAEB',
        300: '#CFD0D3',
        200:'#f6f6f6',
        150:'#E5E5E5',
        350: 'C4C4C4',
        400: '#95979b'
      },
      "black": {
        500: '#1E1E1F',
        600: '#1F1F1F',
        70: 'rgba(0, 0, 0, 0.7)'
      },
      "green": {
        400: '#44C561'
      },
      "blue": {
        450: '#ABB6F7',
        500: '#6982DC'
      },
      "red": {
        500: '#FE3434',
        600: '#D45757'
      }
    },
}
module.exports = {
    important: true,
    mode: 'jit',
    purge: [
      './public/**/*.html',
      './src/**/*.{js,jsx,ts,tsx,vue}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
      colors: colors,
      extend: {
        boxShadow: {
          shadowSideBar: '0px 4px 44px rgba(0, 0, 0, 0.25)'
        },
         fontFamily: {
          'inter': ['Inter', 'sans-serif'],
         },
         textColor: {
        },
        backgroundColor: {
        },   
        borderColor: theme => ({
         }),    
      }
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }