import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true
    },
    extend: {  fontFamily: {
        poppins: ["var(--font-poppins)"],
        montserrat: ["var(--font-montserrat)"],

      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      boxShadow: {
        Popup: "2px 2px 20px rgba(0, 0, 0, 0.08), -1px -1px 20px rgba(0, 0, 0, 0.06)",
        Modal: "0px 0px 12px rgba(0, 0, 0, 0.08)",
        Table: "0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)",
        Button: "0px 1px 2px rgba(16, 24, 40, 0.05)",
        ButtonHover: "0px 0px 3px 1px rgba(16, 24, 40, 0.05)"
      },
      colors: {
        "pink": {
          "50": "#feedf0",
          "100": "#fedbe0",
          "200": "#fdb7c2",
          "300": "#fb94a3",
          "400": "#fa7085",
          "500": "#f94c66",
          "600": "#c73d52",
          "700": "#952e3d",
          "800": "#641e29",
          "900": "#320f14"
        },
        "yellow": {
          "50": "#fff9ed",
          "100": "#fff3db",
          "200": "#ffe8b8",
          "300": "#ffdc94",
          "400": "#ffd171",
          "500": "#ffc54d",
          "600": "#cc9e3e",
          "700": "#99762e",
          "800": "#664f1f",
          "900": "#33270f"
        },
        "purple": {
          "50": "#f8ecf4",
          "100": "#f2d9e9",
          "200": "#e5b3d3",
          "300": "#d78ebd",
          "400": "#ca68a7",
          "500": "#bd4291",
          "600": "#973574",
          "700": "#712857",
          "800": "#4c1a3a",
          "900": "#260d1d"
        },
        "green": {
          "50": "#eef9f5",
          "100": "#ddf2eb",
          "200": "#bae5d8",
          "300": "#98d9c4",
          "400": "#75ccb1",
          "500": "#53bf9d",
          "600": "#42997e",
          "700": "#32735e",
          "800": "#214c3f",
          "900": "#11261f"
        }
      },
      spacing: {
        '18': '4.5rem',
      },
      letterSpacing: {
        '08': '0.8px',
      },
      // boxShadow: {
      //   "grey-025":"0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      //   '3xl': '0 2px 12px 0 rgba(0, 0, 0, 0.08)',
      // },
      dropShadow: {
        'card-drop-shadow': '0 4px 4px 0px rgba(0, 0, 0, 0.25)',
      },
      fontWeight: {
        "extraLightDesktop":"275",
      },
      fontSize: {
        "28":"28px",
        "42":"42px",
        "66":"66px",
        "xxs":"10px",
      },
      lineHeight: {
        "12":"48px",
        "22":"88px",
        "20":"",
        "42":"42px",
        "40":"40px"
      }}
  },
  variants: {
  },
  plugins: [],
};
export default config;
