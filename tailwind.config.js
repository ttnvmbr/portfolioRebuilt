module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    textShadow: {
      default: "0 2px 0 var(--base-dark)",
      md: "0 2px 2px var(--base-dark)",
      h2: "0 0 3px var(--base-mid), 0 0 5px var(--base-dark)",
    },
    extend: {
      colors: {
        baseDark: "var(--base-dark)",
        baseMid: "var(--base-mid)",
        baseNeutral: "var(--base-neutral)",
        baseLight: "var(--base-light)",
        baseAccent: "var(--base-accent)",
        baseNeutralTransparent: "rgba(162,103,105,0.5)",
        baseGreen: "var(--base-green)",
        baseGreenDark: "var(--base-green-dark)",
        baseBrown: "var(--base-brown)",
        baseBlack: "var(--base-black)",
      },
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
        "4k": "2560px",
      },
      fontFamily: {
        abc: ["abc", "sans-serif"],
        parklane: ["parklane", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("tailwind-scrollbar-hide"),
    require("tailwindcss-textshadow"),
  ],
};
