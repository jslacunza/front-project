import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'gray-light': '#EEEEEE',
        'gray-dark': '#404040',
        'stroke-light': '#8F8F8F',
        'stroke-dark': '#3B3B3B',
        'font-light': '#737373',
        'font-dark': '#3B3B3B',
        'tag-bg': '#F5F5F4',
        'tag-color': '#3B3B3B',
        'button-dark': '#585660'
      },
      flexGrow: {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6'
      },
      height: {
        breadcrum: '4.5rem'
      }
    },
  },
  plugins: [],
};
export default config;
