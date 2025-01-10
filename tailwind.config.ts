import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'red': '#900000',
        'red-1': '#ee2400',
        'light': '#ffb09c',
        'light-1': '#fbd9d3',
        'light-2': '#ffefea',
      },
    },
  },
  plugins: [],
} satisfies Config;
