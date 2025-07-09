// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}, // Recommended for browser compatibility
  },
};
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html', // Looks for HTML files in the root
    './src/**/*.{html,js,}', // Adjust based on your project structure
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
