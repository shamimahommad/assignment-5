// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,js}", // অথবা আপনার ফাইলের পাথ
    "./index.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui")
  ],
};