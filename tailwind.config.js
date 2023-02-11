/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{html,js,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        hkcompakt: ['var(--font-hkcompakt)'],
        monumentextended: ['var(--font-monumentextended)']
      },
    },
  },
  plugins: [],
}
