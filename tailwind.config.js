/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lato", "sans"],
        display: ["Bowlby One SC", "serif"],
        monospace: ["Source Code Pro", "monospace"],
      },
      spacing: {
        1: "8px",
        2: "12px",
        3: "16px",
        4: "24px",
        5: "32px",
        6: "48px",
      },
      fontSize: {
        xs: "12px",
        sm: "14px",
        base: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "30px",
        "4xl": "36px",
        "5xl": "48px",
      },
      screens: {
        sm: "450px",
        md: "600px",
        lg: "800px",
      },
      colors: {
        transparent: "transparent",
        white: "#fafaf9",
        black: "#0c0a09",
        gray: "#525252",
        disabled: "#a8a29e",
        primary: "#06b6d4",
        secondary: "#10b981",
        cta: "#d97706",
        text: "#57534e",
        error: "#e11d48",
      },
    },
  },
  plugins: [],
};
