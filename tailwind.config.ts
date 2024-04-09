import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
        satoshi: ["Satoshi", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        transparent: "transparent",
        current: "currentColor",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        dark1: "#F79489",
        dark2: "#F8AFA6",
        light1: "#FADCD9",
        light2: "#F9F1F0",
        pal1: "#8C1F28",
        pal2: "#591C21",
        pal3: "#044040",
        pal4: "#D92525",
        pal5: "#F2F2F2",
        pal6: "#57375D",
        pal7: "#FF3FA4",
        pal8: "#FF9B82",
        pal9: "#FFC8C8",
        darkGrey: "#121212",
        darkPrimary: "#1F1B24",
        darkError: "#CF6679",
        primaryVar: "#3700B3",
        darkBlue: "#090336",
      },
      scale: {
        110: "110%",
        120: "120%",
      },
      boxShadow: {
        card: "0px 0px 5px 3px rgba(255,255,255, 0.8), 0px 0px 13px 5px rgba(255,255,255, 0.5)",
        lightCard: "0 0 51px 15px rgb(249 64 221 / 59%)",
        darkCard: "0px 0px 56px 13px rgba(0, 0, 0, 0.4)",
        medievalCard: "0px 0px 56px 13px rgba(33, 30, 53, 0.6)",
      },
      screens: {
        xs: "450px",
        xs2: "350px"
      },
    },
    
  },
  plugins: [],
};
export default config;
