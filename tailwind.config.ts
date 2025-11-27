import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        // Новая палитра
        primary: '#4CAAB2',      // основной (60%) - бирюзовый
        secondary: '#CFBD60',    // акцент (10%) - золотистый  
        accent: '#F4F7F8',       // вторичный (30%) - светлый фон
        background: '#ffffff',
        surface: '#f8fafc',
        text: {
          DEFAULT: '#0f172a',
          light: '#475569'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
      },
      spacing: {
        'section': '5rem',
        'section-sm': '3rem',
      }
    },
  },
  plugins: [],
}
export default config