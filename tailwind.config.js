/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ejs}"],
  theme: {
    extend: {
      colors: {
        primary: '#6139ff',
        background: '#f8f9fb',
        surface: '#ffffff',
        surfaceVariant: '#f7f8fa',
        textPrimary: '#2f2e41',
        textSecondary: '#878899',
        textTertiary: '#bdc4cd',
      },
      backgroundImage: {
        'emphasis-short': 'url("/images/emphasizing-short.svg")',
        'emphasis-wide': 'url("/images/emphasizing-wide-.svg")',
        star: 'url("/images/star.svg")',
      },
      fontFamily: {
        poppins: `Poppins, sans-serif`,
        'gelica-black': `Gelica Black, sans-serif`,
      }
    },
  },
  plugins: [],
}

