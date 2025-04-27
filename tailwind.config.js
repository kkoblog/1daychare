/** @type {import('tailwindcss').Config} */
module.exports = {
  "content": [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  "theme": {
    "extend": {
      colors: {
        // メインのローズ系パステル
        rose: {
          50: '#FCE8F1',
          100: '#F8D1E3',
          200: '#F3AEC8',
          300: '#ED8BAC',
          400: '#E96791',
          500: '#E7437C',
          600: '#C9366B',
          700: '#A92B58',
        },
        // アクセントにぴったりなベージュ系
        beige: {
          50: '#FAF5F0',
          100: '#F4E8DE',
          200: '#EAD2BD',
          300: '#DEB89A',
          400: '#D29C78',
          500: '#C68057',
          600: '#AE5F3F',
          700: '#894B33',
        }
      }
    },
    "plugins": []
  },
  "variants": {}
}