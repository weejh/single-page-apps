
import Router from 'spa-route'
import routes from './routes'
var router = new Router(routes)
export default router
// var Router = require('spa-route')
// var routes = require('./routes')
// var router = new Router(routes)
// var router = new Router([
//   {
//     route: /^\/$/,
//     title: 'Homepage',
//     element: '#landing'
//   },
//   {
//     route: /^\/about$/,
//     title: 'About Us',
//     element: '#about'
//   },
//   {
//     route: /^\/products$/,
//     title: 'products',
//     element: '#products'
//   },
//   {
//     route: /^$/,
//     element: '#error404'
//   }
// ])
