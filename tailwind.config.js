module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        first: "#86B9E0",
        second: "#EBF2F6",
        gray: "#F2F2F2",
        white: "#ffffff",
        black: "#000000",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
