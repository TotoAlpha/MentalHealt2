/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', 'system-ui', 'sans-serif'],
        display: ['Lexend', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f7f7',
          100: '#e0f0f0',
          200: '#b8e0e0',
          300: '#8ccaca',
          400: '#5ab0b0',
          500: '#3d9999',
          600: '#2d7474',
          700: '#1f5555',
          800: '#153d3d',
          900: '#0c2424',
        },
        secondary: {
          50: '#f3f8f6',
          100: '#e7f1ed',
          200: '#c5dcd4',
          300: '#9ec2b6',
          400: '#70a191',
          500: '#4d8574',
          600: '#3a6557',
          700: '#2a4a3f',
          800: '#1c332c',
          900: '#0e1a16',
        },
        accent: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        }
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(45, 116, 116, 0.07), 0 10px 20px -2px rgba(45, 116, 116, 0.04)',
      },
    },
  },
  plugins: [],
};