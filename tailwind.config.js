/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.php",                       // Include all root PHP files
    "./template-parts/**/*.php",     // Include template parts
    "./page-templates/**/*.php",     // Include page templates
    "./assets/**/*.js",              // Include JavaScript files
    "./**/*.html",                   // Include all HTML files
  ],
  theme: {
    extend: {
      colors: {
      
        orange:"#f36f21",
        gray100:"#f3f3f5",
        gray300:"#181717",
        gray400:"#141414",
        gray500:"#101010",
        gray600:"#e0d4cb",
        matGray:"#847e6d",
        black800:"#050505",
        green:"#465d04",
        placeHolder: "#8799a3"
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],

      },
      borderWidth: {
        '1': '1px', // Add custom border width of 1px
      },
    },
  },
  plugins: [],
};
