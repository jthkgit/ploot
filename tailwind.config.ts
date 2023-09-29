import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'
import files from './files'
import { blurs, boxShadows, colors, fontSizes } from './untitled-ui'

export default {
  content: [...files],
  future: {
    disableColorOpacityUtilitiesByDefault: true,
  },
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    blur: {
      ...blurs,
    },
    boxShadow: {
      ...boxShadows,
    },
    colors: {
      ...colors,
      primary: {
        50: '#e6e9eb',
        100: '#b2bbc0',
        200: '#8c9ba1',
        300: '#586d76',
        400: '#37515c',
        500: '#052533', // Base color
        600: '#05222e',
        700: '#041a24',
        800: '#03141c',
        900: '#021015',
      },
      secondary: {
        50: '#f1f4f5',
        100: '#d5dddf',
        200: '#c0ccd0',
        300: '#a3b5bb',
        400: '#91a6ad',
        500: '#769099', // Base color
        600: '#6b838b',
        700: '#54666d',
        800: '#414f54',
        900: '#323c40',
      },
    },
    fontSize: {
      ...fontSizes,
    },
    extend: {
      backgroundImage: {
        'greek-gradient':
          'linear-gradient(45deg, rgba(255 199 156 / 0.75) 0%, rgba(255 248 238 / 0.75) 50%, rgba(61 196 194 / 0.75) 100%);',
      },
      colors: {
        neutral: {
          50: '#fefefe',
          100: '#fcfdfd',
          200: '#fafcfc',
          300: '#f8fafb',
          400: '#f6f9fa',
          500: '#f4f8f9', // Base color
          600: '#dee2e3',
          700: '#adb0b1',
          800: '#868889',
          900: '#666869',
        },
        'accent-1': {
          50: '#e8f8f7',
          100: '#b7e9e7',
          200: '#94dedc',
          300: '#63cfcc',
          400: '#45c5c2',
          500: '#16b7b3', // Base color
          600: '#14a7a3',
          700: '#10827f',
          800: '#0c6562',
          900: '#094d4b',
        },
      },
      fontFamily: {
        sans: ['Manrope', ...fontFamily.sans],
        heading: ['Outfit', ...fontFamily.sans],
      },
      minWidth: {
        xs: '320px',
      },
    },
  },
  plugins: [],
} satisfies Config
