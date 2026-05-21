/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        coffee: {
          900: "#4B3326",
          800: "#5A4030",
          700: "#6F4E37",
          600: "#8B684F",
          500: "#A67C52",
          DEFAULT: "#6F4E37",
        },
        midnight: "#1E1E1E",
        sage: "#A3B18A",
        "sage-light": "#D7DFC8",
        cream: "#F5F5DC",
        "cream-soft": "#F8F0DE",
      },
      fontFamily: {
        display: ['"Playfair Display"', "serif"],
        body: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 60px rgba(15, 12, 10, 0.28)",
        glow: "0 18px 45px rgba(163, 177, 138, 0.18)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "0.45", transform: "scale(1)" },
          "50%": { opacity: "0.75", transform: "scale(1.06)" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        "fade-up": "fadeUp 0.8s ease-out both",
        "pulse-slow": "pulseSlow 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
