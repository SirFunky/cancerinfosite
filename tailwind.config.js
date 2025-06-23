/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'blue': {
          600: '#2563eb', // Primary blue
          700: '#1d4ed8', // Darker blue for hover
        },
        'gray': {
          50: '#f9fafb',  // Testimonial background
          600: '#4b5563',  // Text gray
          900: '#111827',  // Heading gray
        }
      }
    },
  },
  plugins: [],
}

