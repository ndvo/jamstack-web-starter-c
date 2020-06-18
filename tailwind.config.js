module.exports = {
  /* TIP: Customize TailWind classes
   * By setting theme variables in tailwind.config we can use custom TailWind
   * classes
   */
  theme: {
    extend: {
      colors: {
        /* TIP: you can nest your properties. */
        primary: {
          default: '#648eff',
          dark: '#2d4482'
        },
        secondary: '#ff3232',
        dark: '#2d2d2d',
        light: '#d2f2ff',
      },
    },
  },
  variants: {
    borderWidth: ["responsive", "last", "hover", "focus"],
  },
  plugins: [],
};
