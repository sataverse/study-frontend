/** @type {import('tailwindcss').Config} */

function getRem(from, to) {
  const rems = {};
  for (i = from; i <= to; i++) {
    rems[`${i}px`] = `${(0.0625 * i).toFixed(3)}rem`;
  }
  return rems;
}

module.exports = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      spacing: getRem(0, 1000),
      borderWidth: getRem(0, 10),
      borderRadius: getRem(0, 100),
      lineHeight: getRem(0, 200),
      fontSize: getRem(0, 200),
      colors: {
        "lightbg-0": "#ffffff",
        "lightbg-1": "#f4f4f4",
        "lightfg-0": "#121212",
        "darkbg-0": "#0a0a0a",
        "darkbg-1": "#242424",
        "darkfg-0": "#ededed",
      },
    },
  },
  plugins: [],
};
