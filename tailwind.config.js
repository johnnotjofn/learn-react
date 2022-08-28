/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'primary-gradient': `linear-gradient(86.88deg, #7D6AFF 1.38%, #FFB86C 64.35%, #FC2872 119.91%)`,
        'secondary-gradient': `linear-gradient(86.88deg, #20e3b2, #2cccff)`,
      }
    },
  },
  plugins: [],
}
