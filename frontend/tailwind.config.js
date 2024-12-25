/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // Make sure to include the file paths for your React components
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#3490dc",
        "secondary": "#6574cd",
        "accent": "#f6993f",
        "background": "#f8fafc",
        "text": "#2d3748",
      },
      fontFamily: {
        primary: "'Inter', sans-serif",
        secondary: "'Roboto', sans-serif",
      },
      spacing: {
        4: "4px", // Define spacing unit to match your Sass variables
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
