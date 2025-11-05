/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./src/**/*.{ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily:{
        'sans-extraligth':['Nunito_200ExtraLight'],
        'sans-ligth': ['Nunito_300Light'],
        'sans-regular': ['Nunito_400Regular'],
        'sans-medium': ['Nunito_500Medium'],
        'sans-bold': ['Nunito_700Bold']
      },
      colors:{
        
      }
    },
  },
  plugins: [],
}