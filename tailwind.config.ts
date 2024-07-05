import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00995D",
        secondary: "#B1D34B",
      },
      backgroundImage: {
        "bg-header": "linear-gradient(to right, #ee6065 30%, #ffd7df 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
