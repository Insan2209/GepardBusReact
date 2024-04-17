/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        tawny: "#CC5803",
        cocoa_brown: "#E2711D",
        princeton_orange: "#FF9505",
        selective_yellow: "#FFB627",
        xanthous: "#FFC971",
      },
      fontFamily: {
        poppins: ['"Poppins"', "sans-serif"],
        archivo_black: ['"Grandstander"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
