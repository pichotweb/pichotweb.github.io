/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './en/index.html', './assets/js/**/*.js'],
  theme: {
    extend: {
      colors: {
        ink: '#121212',
        panel: '#1a1a1a',
        paper: '#EDEDED',
        muted: '#8a8a8a',
        accent: '#E8821E',
        violet: '#8B7FD1',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [],
}
