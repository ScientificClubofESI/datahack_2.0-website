/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        '2lg': '1089px',
        '3xl': '1716px',
        '9xl': '1750px',
      },
      boxShadow: {
        'custom-glow': '0px 0px 40px rgba(199, 131, 251, 0.2)',
      },
      backgroundImage: {
        'image-mentors': "url('/images/mentors/test-shapes.png')",
      },
      fontFamily: {
        hubotSans: ["Hubot Sans", "sans-serif"],
        aspekta: ["Aspekta", "sans-serif"],
      },
      colors: {
        background: {
          Light: "#F0F7FF",
          Dark: "#14161F",
        },
        Monotone: {
          White: "#FFFFFF",
          Black: "#000000",
        },
        Primary: {
          50: "#EEFCFF",
          100: "#D9F8FF",
          200:"#B0F0FF",
          300:"#88E8FF",
          400: "#5FE1FF",
          500: "#36D9FF",
          600:"#00CDFD",
          700:"#00A0C5",
          800:"#00728D",
          900:"#004555",
          950:"#002E39",
        },
        Tritary: {
          50: "#EFDCFE",
          100: "#E2BFFD",
          200:"#C783FB",
          300:"#AC48F9",
          400: "#910DF7",
          500: "#6F06C1",
          600:"#6105A8",
          700:"#530490",
          800:"#440477",
          900:"#36035E",
          950:"#2F0352",
        },
        Neutral: {
          50: "#F8F9FA",
          100: "#F3F4F5",
          200:"#E2E5E6",
          300:"#D1D4D5",
          400: "#A0A5A6",
          500: "#707778",
          600:"#4E565B",
          700:"#3F494B",
          800:"#273133",
          900:"#192427",
          950:"#0D181B",
        },
      },
    },
  },
  plugins: [],
};
