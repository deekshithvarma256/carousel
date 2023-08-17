/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation:{
        'slide-in-bottom': 'slide-in-bottom 0.5s ease-in-out',
        'slide-out-bottom': 'slide-out-bottom 0.5s ease-in-out',

      },
      keyframes:{
        'slide-in-bottom': {
          '0%': { transform: 'translateY(100%)', opacity:0 },
          '100%': { transform: 'translateY(0)', opacity:1 },
        },
        'slide-out-bottom': {
          '0%': { transform: 'translateY(0)', opacity:1 },
          '100%': { transform: 'translateY(100%)', opacity:0 },
        },
      }
    },
  },
  plugins: [],
}