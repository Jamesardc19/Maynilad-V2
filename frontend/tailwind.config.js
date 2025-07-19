/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F3C3E', // Dark green from the reference image
          light: '#1A5658',
          medium: '#15494B',
          dark: '#092728',
          accent: '#2A7476', // Lighter green accent for highlights
        },
        background: {
          DEFAULT: '#FFFFFF',
          dark: '#F5F5F5',
          green: '#E8F0F0', // Very light green for backgrounds
        },
        text: {
          DEFAULT: '#0F3C3E', // Using primary green for text
          light: '#15494B',
          white: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'Roboto', 'sans-serif'],
        serif: ['Georgia', 'Merriweather', 'serif'],
        heading: ['Montserrat', 'sans-serif'],
        body: ['poppins-v2', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
