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
        "gradient-red":
          "linear-gradient(94.06deg, #EE0033 -1.21%, #FF6D8D 58.66%, #FFF5F7 116.84%)",
        "gradient-overlay":
          "linear-gradient(180deg, rgba(68, 73, 77, 0) 0%, #44494D 100%)",
      },
      colors: {
        "th-gray-50": "var(--color-gray-50)",
        "th-gray-100": "var(--color-gray-100)",
        "th-gray-200": "var(--color-gray-200)",
        "th-gray-250": "var(--color-gray-250)",
        "th-gray-280": "var(--color-gray-280)",
        "th-gray-300": "var(--color-gray-300)",
        "th-gray-310": "var(--color-gray-310)",
        "th-gray-330": "var(--color-gray-330)",
        "th-gray-400": "var(--color-gray-400)",
        "th-gray-500": "var(--color-gray-500)",
        "th-red-500": "var(--color-red-500)",
        "th-white": "var(--color-white)",
        "th-black-overlay": "var(--color-black-overlay)",
        "th-white-overlay": "var(--color-white-overlay)",
      },
    },
  },
};
