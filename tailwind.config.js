/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#243E63",
        secondary: "#6415FF",
        Gray:"#4A5568",
        BlueWhite: "rgb(237,242,247)",
        blue: "#1A202C",
      },
      container: {
        center : true,
        padding: "1rem"
      },
    },
  },
  plugins: [],
}
