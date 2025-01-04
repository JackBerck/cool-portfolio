/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/_components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "blue-base": "#186EFF",
        "dark-base": "#2D383F",
        "light-base": "#f8fafc",
        "rose-base": "#FF3366",
      },
    },
  },
  plugins: [],
};
