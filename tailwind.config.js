const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)",
        dark: "var(--color-primary-dark)",
      },
      textColor: {
        accent: "var(--color-text-accent)",
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
      },
      borderColor: {
        accent: "var(--border-accent)",
        primary: "var(--border-primary)",
      },
      colors: {
        orange: colors.orange,
        teal: colors.teal,
        sky: colors.sky,
      },
      animation: {
        wiggle: "wiggle 2s ease-in-out infinite",
        forward: "forward 2s ease-in-out alternate infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-5deg)" },
          "50%": { transform: "rotate(5deg)" },
        },
        forward: {
          "0%": { transform: "translateX(-3px)", opacity: "0.7" },
          "100%": { transform: "translateX(3px)", opacity: "1" },
        },
      },
    },
  },
  variants: {
    extend: { borderStyle: ["responsive", "hover"] },
  },
  plugins: [],
}
