/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundPosition: {
        'bottom-center': 'center bottom',
      },
      backgroundImage: {
        banner: "url('./src/assets/bg4.jpeg')"
      },
    },
  },
  plugins: [],
}
