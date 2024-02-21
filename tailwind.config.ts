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
    },
    colors: {
      gray93: "#EDEDED",
      blackRussian: "#222325",
      undaTheC: "#211B7B",
      Turquoise: "#AE25B2",
      shadedYellow: "#FBC706",
      ludzmilla: "#7F5DDF",
    },
  },
  plugins: [],
};
export default config;
