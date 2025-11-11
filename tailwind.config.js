/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#faf9f7',
          100: '#f5f3f0',
          200: '#e8e4de',
          300: '#d4ccc1',
          400: '#b8ab9d',
          500: '#9d8e7d',
          600: '#7a6b5c',
          700: '#5d5145',
          800: '#4a4037',
          900: '#3d352e',
        },
        accent: {
          50: '#fef7f0',
          100: '#fdeee0',
          200: '#fbd9c0',
          300: '#f8be96',
          400: '#f49a66',
          500: '#f1783a',
          600: '#e25f1f',
          700: '#bc4a18',
          800: '#963c1a',
          900: '#783418',
        },
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-raleway)', 'Georgia', 'serif'],
        heading: ['var(--font-raleway)', 'var(--font-bebas)', 'sans-serif'],
        display: ['var(--font-bebas)', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-down': 'slideDown 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

