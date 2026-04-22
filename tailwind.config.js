/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'ivory': '#F8F9FF',
        'charcoal': '#0D1C2F',
        'navy': '#131B2E',
        'gold': '#9F7E57',
        'bronze': '#8C6D45',
      },
      fontFamily: {
        'serif': ['var(--font-noto-serif)', 'serif'],
        'sans': ['var(--font-manrope)', 'sans-serif'],
      },
      spacing: {
        'section-gap': '120px',
        'gutter': '32px',
      }
    },
  },
  plugins: [],
};
