module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {

      spacing: {
        '13': '3.25rem',
        '15': '3.75rem',
        '128': '32rem',
        '144': '36rem',
      },
      fontFamily: {
        'redex': 'Readex Pro',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'goyang': 'wiggle ease-in-out 3s infinite'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      aspectRatio: {
        '4/3': '4 / 3',
      },
    }
  },
  plugins: [],
}
