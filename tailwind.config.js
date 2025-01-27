/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-black': '#050505',
        'custom-gray-1': '#EEEEEE',
        'custom-gray-2': '#00ADB5',
        'custom-gray-3': '#ed1b76',
        'custom-gray-4': '#037a76',
      },
      colors: {
        pinkCustom: '#ed1b76',
        greenCustom: '#037a76',
      },
      fontFamily: {
        SquidFont:['Squid'],
        robotoRegular:['Regular'],
        robotoMedium:['Medium'],
        robotoBold:['Bold'],
      },
    },
  },
  plugins: [],
}

