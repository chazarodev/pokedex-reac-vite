module.exports = {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    colors: {
      current: 'currentColor',
      'fondo': '#D31C2D',
      'fondog': '#FFA699', 
      'marco': '#2F4858',
      'btn': '#FFF6F4',
      'encabezado': '#FFE5DE',
      'texto': '#2F4858',
      'white': '#FFF',
      'sombra': '#6A0000',
      'borde': '#facc15',
      'error': '#dc2626',
      'stats': '#3b74fb'
    },
    fontFamily: {
      sans: ['Rajdhani', 'sans-serif']
    },
    screens: {
      'movilsm': '360px',
      'movil': '640px',
      'tablet': '768px',
      'laptop': '810px',
    },
    extend: {},
  },
  plugins: [],
}
