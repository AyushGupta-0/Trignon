module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0ea5e9', // blue
        secondary: '#6366f1', // purple
        accent: '#f472b6', // pink
        glass: 'rgba(255,255,255,0.1)',
        glassDark: 'rgba(30,41,59,0.4)',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        glass: '0 4px 32px 0 rgba(0,0,0,0.12)',
      },
    },
  },
  plugins: [],
}; 