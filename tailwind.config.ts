import type { Config } from "tailwindcss";

const config: {
  plugins: any[];
  theme: {
    extend: {
      fontFamily: {
        "futura-bold": string[];
        "futura-light": string[];
        avenir: string[];
        "futura-semi": string[];
        "avenir-bold": string[];
        futura: string[];
        "futura-medium": string[];
        arcade: string[];
        "futura-extra": string[];
        "avenir-it": string[];
      };
      backgroundImage: { "gradient-conic": string; "gradient-radial": string };
      colors: {
        shark: {
          "100": string;
          "200": string;
          "300": string;
          "400": string;
          "950": string;
          "500": string;
          "600": string;
          "700": string;
          "800": string;
          "900": string;
          "50": string;
        };
      };
    };
  };
  content: string[];
} = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        futura: ["Futura", "sans-serif"],
        "futura-bold": ["Futura-Bold", "sans-serif"],
        "futura-medium": ["Futura-Medium", "sans-serif"],
        "futura-light": ["Futura-Light", "sans-serif"],
        "futura-semi": ["Futura-Semi", "sans-serif"],
        "futura-extra": ["Futura-ExtraBold", "sans-serif"],
        avenir: ["Avenir", "sans-serif"],
        "avenir-bold": ["Avenir-Bold", "sans-serif"],
        "avenir-it": ["Avenir-It", "sans-serif"],
        arcade: ["Arcade", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        shark: {
          "50": "#f7f7f8",
          "100": "#eeeef0",
          "200": "#dadadd",
          "300": "#babbbf",
          "400": "#94959c",
          "500": "#777880",
          "600": "#606169",
          "700": "#4e4e56",
          "800": "#434349",
          "900": "#3b3c3f",
          "950": "#28282b",
        },
      },
    },
  },
  plugins: [],
};
export default config;
