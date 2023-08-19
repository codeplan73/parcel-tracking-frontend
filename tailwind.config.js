/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': "url('./assets/gig-bg.jpeg')",
        'footer-bg': "url('./assets/footer-bg.svg')",
      },
    },
  },
  plugins: ['@tailwindcss/forms'],
}
