import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#06142E",
          deep: "#020A18",
          surface: "#0B1D3A",
        },
        yellow: {
          electric: "#FFD600",
          warm: "#FFCB05",
        },
        off: "#F6F7F2",
        cream: "#F3EFE8",
        muted: "#9BA6B5",
        "muted-dark": "#6B6459",
        dark: "#07111F",
        rust: {
          DEFAULT: "#C1502E",
          light: "#D9714F",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Space Grotesk", "sans-serif"],
        body: ["var(--font-body)", "Inter", "sans-serif"],
        accent: ["var(--font-accent)", "Georgia", "serif"],
      },
      fontSize: {
        "hero-sm": ["3.5rem", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        "hero": ["6.5rem", { lineHeight: "0.98", letterSpacing: "-0.03em" }],
        "hero-lg": ["6.875rem", { lineHeight: "0.96", letterSpacing: "-0.035em" }],
        "display-lg": ["5.5rem", { lineHeight: "1.0", letterSpacing: "-0.03em" }],
      },
      maxWidth: {
        content: "1440px",
      },
      spacing: {
        section: "160px",
        "section-sm": "88px",
      },
      backgroundImage: {
        "radial-glow": "radial-gradient(circle at center, rgba(193,80,46,0.35) 0%, rgba(193,80,46,0) 70%)",
        "navy-grad": "linear-gradient(180deg, #06142E 0%, #020A18 100%)",
        "grain": "url('/noise.svg')",
      },
      borderColor: {
        hairline: "rgba(255,255,255,0.12)",
        "hairline-dark": "rgba(7,17,31,0.12)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-18px) rotate(2deg)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        float: "float 8s ease-in-out infinite",
        "spin-slow": "spin-slow 40s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
