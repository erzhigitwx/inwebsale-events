/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      "sans": ["Inter", "ui-sans-serif", "system-ui"]
    },
    colors: {
      "blue": "#0D63F3",
      "black": "#000000",
      "purple": "#F5E3DC",
      "blue-light": "#E2ECF4",
      "gray": "#93A2B8",
      "gray-light": "#BCBEC0",
      "red": "#E16D65",
      "white": "#fff",
      "dark-blue": "#07156a",
      "dark-blue-light": "#0a081c",
      "green": "#0cce20",
      "green-light": "#EAF9E8"
    },
    extend: {
      borderRadius: {
        "xl": "5px"
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.black"),
            fontSize: theme("fontSize.base"),
            fontWeight: theme("fontWeight.medium"),
          },
        },
        darkMode: {
          css: {
            color: theme("colors.white"),
          }
        }
      }),
    }
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("autoprefixer"),
  ],
};
