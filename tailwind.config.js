import daisyui from "daisyui";

export default {
  content: [
    "index.html",
    "assets/js/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: ["dark"],
  },
};
