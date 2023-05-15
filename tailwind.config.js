/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "th-gray-100": "var(--color-gray-100)",
        "th-gray-200": "var(--color-gray-200)",
        "th-gray-300": "var(--color-gray-300)",
        "th-gray-400": "var(--color-gray-400)",
        "th-red-500": "var(--color-red-500)",
      },
    },
  },
  plugins: [],
};
