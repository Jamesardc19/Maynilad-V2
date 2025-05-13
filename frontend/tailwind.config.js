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
          dark: '#092728',
        },
        secondary: {
          DEFAULT: '#F2C94C', // Gold accent color
        },
        background: {
          DEFAULT: '#FFFFFF',
          dark: '#F5F5F5',
        },
        text: {
          DEFAULT: '#333333',
          light: '#666666',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
}
