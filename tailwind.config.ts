import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        angel: {
          950: "#08281D",
          900: "#0B3D2E",
          800: "#104A38",
          700: "#14523E",
          600: "#1A5C43",
        },
        gold: {
          300: "#E8C989",
          500: "#C9A66B",
        },
        cream: "#F5EFE4",
        ink: "#12100E",
        coral: "#C47B6A",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        site: "1440px",
      },
      letterSpacing: {
        brand: "0.28em",
        nav: "0.12em",
        wide2: "0.08em",
      },
      boxShadow: {
        gold: "0 10px 28px rgba(201, 166, 107, 0.28)",
        card: "0 18px 40px rgba(8, 40, 29, 0.16)",
      },
    },
  },
  plugins: [],
};

export default config;
