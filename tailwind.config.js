/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '3rem',
      },
    },
    extend: {
      colors: {
        primary: '#FFA112',
        primaryDarker: '#FFA012CB',
        secondary: '#1C1D24',
        // tertiary: '#131419',
        // tertiary: '#1E1E1E',
        tertiary: '#141414',
        accent: {
          DEFAULT: '#ac6b34',
          hover: '#925a2b',
        },
        paragraph: '#878e99',
      },
    },
  },
  plugins: [],
}
