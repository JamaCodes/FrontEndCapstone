module.exports = {
 purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      margin: {
        '100': '34rem',
       }
    },
  },
  variants: {
    extend: {
      fontWeight: ['hover', 'focus']
  },
  },
  plugins: [
    require('@tailwindcss/forms'),
   
  ],
}
