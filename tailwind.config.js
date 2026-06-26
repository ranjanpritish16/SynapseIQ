/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'brand-ink':   '#172B36',
        'brand-deep':  '#114C5A',
        'brand-gold':  '#FFC801',
        'brand-amber': '#FF9932',
        'brand-mist':  '#F1F6F4',
        'brand-sage':  '#D9E8E2',
      },
      fontFamily: {
        mono:  ['"JetBrains Mono"', 'monospace'],
        sans:  ['Inter', 'sans-serif'],
      },
      screens: {
        md: '768px',
        lg: '1024px',
      },
    },
  },
  plugins: [],
}
