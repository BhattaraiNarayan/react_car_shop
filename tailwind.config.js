/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      minHeight: {
        dvh: "100dvh",
      },
      backgroundImage: {
        "custom-bg": "url('/src/images/car.jpg')",
      },
    },
  },
  plugins: [],
};

