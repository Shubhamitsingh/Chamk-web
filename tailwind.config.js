/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF1B7C',
          50: '#FFE5F2',
          100: '#FFB3D6',
          200: '#FF80BA',
          300: '#FF4D9E',
          400: '#FF1A82',
          500: '#FF1B7C',
          600: '#E6176D',
          700: '#CC135E',
          800: '#B30F4F',
          900: '#990B40',
        },
        secondary: {
          DEFAULT: '#FF1B7C',
          50: '#FFE5F2',
          100: '#FFB3D6',
          200: '#FF80BA',
          300: '#FF4D9E',
          400: '#FF1A82',
          500: '#FF1B7C',
          600: '#E6176D',
          700: '#CC135E',
          800: '#B30F4F',
          900: '#990B40',
        },
        accent: {
          DEFAULT: '#FF1B7C',
          50: '#FFE5F2',
          100: '#FFB3D6',
          200: '#FF80BA',
          300: '#FF4D9E',
          400: '#FF1A82',
          500: '#FF1B7C',
          600: '#E6176D',
          700: '#CC135E',
          800: '#B30F4F',
          900: '#990B40',
        },
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #FF1B7C 0%, #E6176D 100%)',
        'gradient-hero': 'linear-gradient(135deg, #FF1B7C 0%, #E6176D 50%, #CC135E 100%)',
        'gradient-vibrant': 'linear-gradient(135deg, #FF1B7C 0%, #E6176D 25%, #CC135E 50%, #E6176D 75%, #FF1B7C 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'gradient': 'gradient 15s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}

