const pxToRem = (num: number) => `${num / 16}rem`;

const colors = {
  white: '#FFF',
  black: '#0C0C0C',
  mediumColor: "#969696",

  primary: '#748C70',
  primaryDark: '#5A6D57',
  primaryLight: '#D1D9CF',
  neutralGray: '#404040',
  grayLight: '#CBCBCB',

  danger: '#B31B1B',
}

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    './lib/*.{js,ts,jsx,tsx}',
    "./lib/**/*.{js,jsx,ts,tsx,css}",
    "./lib/**/**/*.{js,jsx,ts,tsx,css}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "768px",
        md: "1024px",
        lg: "1366px",
        xl: "1920px",
        "2xl": "2560px",
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        10: pxToRem(10), // '10px'
        12: pxToRem(12), // '12px'
        14: pxToRem(14), // '14px'
        16: pxToRem(16), // '16px'
        18: pxToRem(18), // '18px'
        20: pxToRem(20), // '20px'
        24: pxToRem(24), // '24px'
        32: pxToRem(32), // '32px'
        40: pxToRem(40), // '40px'
      },
      lineHeight: {
        10: pxToRem(10), // '10px'
        12: pxToRem(12), // '12px'
        14: pxToRem(14), // '14px'
        16: pxToRem(16), // '16px'
        18: pxToRem(18), // '18px'
        20: pxToRem(20), // '20px'
        24: pxToRem(24), // '24px'
        32: pxToRem(32), // '32px'
        40: pxToRem(40), // '40px'
      },
    },
    textColor: {
      ...colors
    },
    backgroundColor: {
      ...colors,
    },
    borderColor: {
      ...colors,
    },
  },
  plugins: [],
};
