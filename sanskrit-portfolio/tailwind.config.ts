/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F5E6C8",
        textPrimary: "#4A3F35",
        textSecondary: "#6D5D4B",
        cardBackground: "#EDE0D4"
      }
    },
  },
  plugins: [],
};

export default config;
