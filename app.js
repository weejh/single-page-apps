
var Router = require('spa-route')

var router = new Router([
  {
    route: /^\/$/,
    title: 'Homepage',
    element: '#landing'
  },
  {
    route: /^\/about/,
    title: 'About Us',
    element: '#about'
  },
  {
    route: /^\/products/,
    title: 'products',
    element: '#products'
  },
  {
    route: /^$/,
    element: '#error404'
  }
])
