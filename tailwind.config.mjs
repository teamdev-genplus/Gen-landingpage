/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    colors: {
      skyblue: "#2165FF",
      "black-blue": "#0A244C",
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
