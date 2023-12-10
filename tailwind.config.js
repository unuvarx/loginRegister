/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#ffff',
        primary: '#3d7bf1',
        darkblack: "#909090",
        secondary: '#edf8f4',
        brandColor: '#ec1b24',
        primarydark: '#2b4ec6',
        green: '#3ee0a1',
        darkgreen: '#1dbab5',
        grey: '#e5e7eb',
        grey2: '#9999',
      }

    },
  },
  plugins: [],
}
