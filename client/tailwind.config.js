export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        backy:
          "url('https://i.pinimg.com/736x/32/49/14/324914bb1233fa62e640c6a1133d550c.jpg')",
      },
      colors: {
        primaryApp: "#FE724C",
        primary: {
          light: "#4F46E5",
          dark: "#6366F1",
        },
        text: {
          light: "#1F2937",
          lightSecondary: "#4B5563",
          dark: "#E0E7FF",
          darkSecondary: "#A5B4FC",
          indigo: "#4f46e5",
        },
        background: {
          dark: "#1E293B",
        },
        surface: {
          dark: "#273449",
        },
        gray: {
          500: "#6B7280",
        },
      },
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui"],
      },
      transitionProperty: {
        colors:
          "color, background-color, border-color, text-decoration-color, fill, stroke",
      },
      transitionDuration: {
        DEFAULT: "300ms",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
