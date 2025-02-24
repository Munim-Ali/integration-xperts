import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#1559ED",
        darkBlue: "#151D48",
        gray: "#737791 ",
      },
      screens: {
        "3xl": "1660px",
      },
    },
  },
  plugins: [],
} satisfies Config;
