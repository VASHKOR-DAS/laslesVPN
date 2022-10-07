// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{html,js,jsx,ts,tsx}",

//     'node_modules/daisyui/dist/**/*.js', 'node_modules/react-daisyui/dist/**/*.js'

//   ],
//   theme: {
//     extend: {},
//   },

//    // add daisyUI plugin
//   // plugins: [
//   //   require('daisyui'),
//   //   require("@tailwindcss/typography")
//   // ],
  
//   // daisyUI config (optional)
//   daisyui: {
//     styled: true,
//     themes: true,
//     base: true,
//     utils: true,
//     logs: true,
//     rtl: false,
//     prefix: ""
    
//   }
// }


module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  //.....................................................
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#669999",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
    //....................................................
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/typography")
],

}