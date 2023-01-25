/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        toggleBg: "var( --toggle-bg)",
        screenBg: "var(--screen-bg)",
        toggleColor: "var(--toggle-color)",
        toggleShadow: "var(--toggle-shadow)",
        mainKeyBg: "var(--main-key-bg)",
        mainKeyShadow: "var(--main-key-shadow)",
        keyBg: "var(--key-bg)",
        keyShadow: "var(--key-shadow)",
        textPrimary: "var(--text-primary)",
        textSecondary: "var(--text-secondary)",
        textDark: "var(--text-dark)",
      },
      fontSize: {
        key: "2rem",
      },
      boxShadow: {
        btn: "0px 3px 0px 0px rgba(0,0,0,0.4)",
      },
    },
  },
  plugins: [],
};
