/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        gray: {
          1: "#B4CAD5",
          2: "#B4CAD580",
          3: "#262A2D",
        },
        gold: {
          1: "#F4BF31"
        },
        iconColor: {
          1: "#C6CACD"
        },
        gradient: {
          1: "#FFFFFF66",
          2: "#EEEDED33"
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
