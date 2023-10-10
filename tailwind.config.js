/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens:{
        'sm':'576px',
        'md':'768px',
        'lg':'992px',
        'xl':'1200px',
        '2xl':'1400px'
      }
    },
  },
  plugins: [],
}

