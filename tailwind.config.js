/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'kalam': ['var(--font-kalam)', 'cursive'],
        'inter': ['var(--font-inter)', 'sans-serif'],
        'sora': ['var(--font-sora)', 'sans-serif'],
        'jetbrains-mono': ['var(--font-jetbrains-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}