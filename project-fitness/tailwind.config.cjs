/** @type {import('tailwindcss').Config} */
export default  {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-20": "#F8F4EB",
        "gray-50": "#EFE6E6",
        "gray-100": "#DFCCCC",
        "gray-500": "#5E0000",
        "primary-100": "#FFE1E0",
        "primary-300": "#FFA6A3",
        "primary-500": "#FF6B66",
        "secondary-400": "#FFCD5B",
        "secondary-500": "#FFC132",
        veryDimBlue: "#8A89A0",
      },
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        evolvetext: "url('/src/Assets/images/EvolveText.png')",
        abstractwaves: "url('/src/Assets/images/AbstractWaves.png')",
        sparkles: "url('/src/Assets/images/Sparkles.png')",
        circles: "url('/src/Assets/images/Circles.png')",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      smd: "880px",
      md: "960px",
      lg: "1200px",
      xlg: "1280px",
      xl: "1440px",
    },
  },
  plugins: [],
}