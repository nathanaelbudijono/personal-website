/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
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
        "typography-50": "#fafafa",
        "typography-100": "#f5f5f5",
        "typography-200": "#e5e5e5",
        "typography-300": "#d4d4d4",
        "typography-400": "#a3a3a3",
        "typography-500": "#737373",
        "typography-600": "#525252",
        "typography-700": "#404040",
        "typography-800": "#262626",
        "typography-900": "#171717",
        "typography-950": "#0a0a0a",

        "ready-400": "#4ade80",
        "ready-500": "#22c55e",
        "ready-600": "#16a34a",

        "danger-400": "#f87171",
        "danger-500": "#ef4444",
        "danger-600": "#dc2626",
        "danger-700": "#b91c1c",

        "color-100": "#F9F7F7",

        "d-100": "#FBD1D3",
        "d-200": "#F198AF",
        "d-300": "#EBB2D6",
        "d-400": "#DBE2EF",
        "d-500": "#9F81CD",
        "d-600": "#766DC1",
        "d-700": "#18406E",

        "n-100": "#281036",
        "n-200": "#632A6C",
        "n-300": "#C86B98",
        "n-400": "#F09F9C",
        "n-500": "#FFC1A0",
        "n-600": "#FD9C7F",
      },
    },
  },
  plugins: [],
};
