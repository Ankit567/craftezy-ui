module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      inter: ["Inter", "sans-serif"],
      "open-sans": ["Open Sans", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      rotate: {
        270: "270deg",
      },
      colors: {
        price: "#3F9D3F",
        brown: "#474338",
        "anti-flash": "#F1F1F1",
        cultured: "#F5F5F5",
        "dark-cultured": "#F6F6F6",
        beer: "#F7941D",
        "light-orange": "#FFDBB0",
        "taupe-gray": "#888888",
        "davy-gray": "#545454",
        onyx: "#383737",
        lotion: "#FBFBFB",
        "raisin-black": "#212121",
      },
    },
  },
  plugins: [],
};
