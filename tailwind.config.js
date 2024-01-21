/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens:{
        'procodrr':'1200px',
        'media560':'560px',
        'media440':'440px'
      },
      backgroundImage:{
        'testimonial-section-background':"url(./bg.png)"
      }
    },
  },
  plugins: [],
}