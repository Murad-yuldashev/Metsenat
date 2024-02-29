/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          dark: "#28293D",
        },
        gray: {
          textGray: "#A5A5A5",
          backgroundGray: "#e5e5e5",
          backgroundGray2: "#FAFAFA",
          backgroundGray3: "#F1F1F3",
          backgroundGrayOpacity: "#E0E7FF33",
          borderGray: "#EBEEFC",
          borderGray2: "#E0E7FF",
          borderGray3: "#D6D6D6",
          grayOpacity: "#2E384D59",
        },
        blue: {
          blue1: "#2E5BFF"
        },
        green: {
          green1: "#00AE69",
        }
      },
      boxShadow: {
        loginShadow: "0px 5px 40px 0px rgba(0, 0, 0, 0.03)",
      }
    },
  },
  plugins: [],
}

