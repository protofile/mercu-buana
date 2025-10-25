/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'mc-blue': {
          1: '#10538D',
          2: '#042157'
        },
        'mc-green': {
          1: '#5F931C'
        }
      },
      fontFamily:{
        'plusjakartasans': '"Plus Jakarta Sans", sans-serif',
        'poltawski': '"Poltawski Nowy", serif'
      },
      fontSize: {
        'xsm': ['.8125rem', {
          lineHeight: '1rem',
        }],
        'xxs': ['.6875rem', {
          lineHeight: '1rem',
        }],
        'md': ['16px', {
          lineHeight: '1rem',
        }],
      },
      lineHeight: {
        'leading-half': '0.5rem',
      }
    },
  },
  plugins: [],
}

