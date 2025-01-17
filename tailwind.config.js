/** @type {import('tailwindcss').Config} */
export default {
  content : ["./src/**/*.{js,jsx,ts,tsx}","./index.html"],
  theme: {
    extend: {
      colors: {
        // primary:"#f97316",
        // secondary:"#64748b",
        primary:"#0287a8",
        secondary:"#00c3c7",
        dark: "#ffcf22",
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
}

