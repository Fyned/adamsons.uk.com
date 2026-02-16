/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#3f4042',
          700: '#4a4b4c',
          600: '#5b5c5d',
          500: '#707273',
          300: '#b7b9ba',
          100: '#d7d9da'
        },
        surface: {
          DEFAULT: '#ffffff',
          soft: '#f6f7f7'
        },
        border: {
          DEFAULT: '#b7b9ba'
        },
        text: {
          DEFAULT: '#5b5c5d',
          muted: '#707273',
          soft: '#b7b9ba'
        },
        // Keep semantic colors for notifications etc.
        success: {
          500: '#48BB78',
        },
        warning: {
          500: '#ED8936',
        },
        danger: {
          500: '#F56565',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      textShadow: {
        sm: '0 1px 2px rgba(0, 0, 0, 0.25)',
        DEFAULT: '0 2px 4px rgba(0, 0, 0, 0.25)',
        md: '0 2px 8px rgba(0, 0, 0, 0.3)',
        lg: '0 4px 16px rgba(0, 0, 0, 0.3)',
      },
      dropShadow: {
        logo: ['0 0 12px rgba(255,255,255,0.9)']
      }
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require('@tailwindcss/typography'),
    function({ addUtilities, theme, e }) {
      const newUtilities = {};
      const textShadows = theme('textShadow');
      if (textShadows) {
        Object.keys(textShadows).forEach(key => {
          const value = textShadows[key];
          const className = key === 'DEFAULT' ? 'text-shadow' : `text-shadow-${key}`;
          newUtilities[`.${e(className)}`] = {
            textShadow: value,
          };
        });
        addUtilities(newUtilities, ['responsive', 'hover']);
      }
    },
  ],
}