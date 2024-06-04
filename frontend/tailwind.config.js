/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{jsx, js}"],
  theme: {
    extend: {
      colors: {
        primary: "#0000000",
        secondary: "#fffffff",
        offblue: "#ECF4FE",
        "light-blue": "#749CE7",
        "default-blue": "#150C97",
        "dark-blue": "#0B0649",
        offwhite: "#F4F5F5",
        offblack: "#131515",
        warning: "#D29F4B",
        danger: "#C94740",
      },
      fontSize: {
        "extra-small": "12px", // text-xs
        small: "14px", // text-sm
        // size: "16px" // text-base (bydefault)
        medium: "18px", // text-lg
        large: "24px", // text-2xl
        "extra-large": "30px", // text-3xl
      },
      fontFamily: {
        sans: ["Poppins", "Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};


