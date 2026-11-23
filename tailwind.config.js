/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#090A0D',
        surface: '#101216',
        card: '#161920',
        elevated: '#1E222B',
        accent: {
          DEFAULT: '#3B82F6',
          hover: '#2563EB',
          soft: '#60A5FA'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      }
    }
  },
  plugins: []
};
