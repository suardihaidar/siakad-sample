/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        "vintage-blue": "#303D57",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
