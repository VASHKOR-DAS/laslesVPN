/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

    'node_modules/daisyui/dist/**/*.js', 'node_modules/react-daisyui/dist/**/*.js'

  ],
  theme: {
    extend: {},
  },

   // add daisyUI plugin
  plugins: [
    require('daisyui'),
    require("@tailwindcss/typography")
  ],
  
  // daisyUI config (optional)
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark"
  }
}
