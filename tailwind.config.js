/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      darkBlue: "#213894",
      blue: "#0062AB",
      lightBlue1: "#05A5EF",
      lightBlue2: "#56BCED",
      beige: "#FCF8F3",
      white: "#FFFFFF",
      black: "#1D1D1D",
    },
    fontFamily: {
      amatic_sc: "amatic_sc",
      bebas_neue: "bebas_neue",
      lato_thin: "lato_thin",
      lato_thin_italic: "lato_thin_italic",
      lato_light: "lato_light",
      lato_regular: "lato-regular",
    },
    screens: {
      phoneTiny: "320px",
      phoneSmall: "400px",
      phoneLarge: "600px",
      tablet: "900px",
      desktop: "1300px",
      desktopLarge: "1500px",
    },
    fontSize: {
      paragraph: "1.25rem",
      heading: [
        "1.75rem",
        {
          letterSpacing: ".09rem",
        },
      ],
    },
    extend: {},
  },
  plugins: [],
};
