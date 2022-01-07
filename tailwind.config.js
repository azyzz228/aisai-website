module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {

        'test': "url('/src/img/test.jpg')",
        'hero': "url('/src/img/hero.png')",

      },
      fontFamily: {
        opensans: "'Open Sans', sans-serif;",
        natosansdisplay: "'Noto Sans Display', sans-serif;"
      },
    },
  },
  plugins: [],
}
