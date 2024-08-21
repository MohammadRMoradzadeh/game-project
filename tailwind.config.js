/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      '2xl': '1024px',
      // => @media (min-width: 1024px) { ... }

      '3xl': '1550px',
      // => @media (min-width: 1280px) { ... }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "1rem",
        xl: "4.375rem",
        "2xl": "4.375rem",
      },
    },
    extend: {
      colors: {
        primary: {
          "blue": "#6C5DD3",
          "orange": "#FF754C",
          "gray":"#808191"

        },
      },
    },
  },
  plugins: [
    ({ addVariant }) => {
      addVariant("child", "&>*");
      addVariant("child-hover", "&>*:hover");
    },
    ({ addUtilities }) => {
      addUtilities({
        ".text-Pinar-Bold": {
          fontFamily: "Pinar-Bold",
        },
        ".text-Pinar-Black": {
          fontFamily: "Pinar-Black",
        },
        ".text-Pinar-ExtraBold": {
          fontFamily: "Pinar-ExtraBold",
        },
        ".textPinar-Light": {
          fontFamily: "Pinar-Light",
        },
        ".text-Pinar-Medium": {
          fontFamily: "Pinar-Medium",
        },
        ".text-Pinar-Regular": {
          fontFamily: "Pinar-Regular",
        },
        ".text-Pinar-SemiBold": {
          fontFamily: "Pinar-SemiBold",
        },
        ".text-Roboto-Bold": {
          fontFamily: "Roboto-Bold",
        },
        ".text-Roboto-Black": {
          fontFamily: "Roboto-Black",
        },
        ".text-Roboto-Thin": {
          fontFamily: "Roboto-Thin",
        },
        ".text-Roboto-Light": {
          fontFamily: "Roboto-Light",
        },
        ".text-Roboto-Medium": {
          fontFamily: "Roboto-Medium",
        },
        ".text-Roboto-Regular": {
          fontFamily: "Roboto-Regular",
        },
      });
    },
  ],
};
