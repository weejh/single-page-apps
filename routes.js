import aboutView from './views/about'
import shopView from './views/shop'
import productView from './views/product'
import homepageView from'./views/homepage'
import error404View from './views/error404'

export default [
  {
    route: /^\/about$/,
    view: aboutView
  },
  {
    route: /^\/products$/,
    view: shopView
  },
  {
    route: /^\/products\/(.+)$/,
    view: productView
  },
  {
    route: /^\/$/,
    view: homepageView
  },
  {
    route: /^\/(.+)$/,
    view: error404View
  }
]

// var aboutView = require('./views/about')
// var shopView = require('./views/shop')
// var productView = require('./views/product')
// var homepageView = require('./views/homepage')
// var error404View = require('./views/error404')
// var arrayRouteView = [
//   [/^\/about$/, aboutView],
//   [/^\/products$/, shopView],
//   [/^\/products\/(.+)$/, productView],
//   [/^\/$/, homepageView],
//   [/^\/(.+)$/, error404View]
// ]
// module.exports = arrayRouteView.map(e => {
// // console.log(e[0])
// // console.log(e[1])
//   return Object.assign({route: e[0]}, e[1])
// })
//
// module.exports = [
//   Object.assign({
//     route: /^\/about$/
//   }, aboutView),
//   Object.assign({
//     route: /^\/products$/
//   }, shopView),
//   Object.assign({
//     route: /^\/products\/(.+)$/
//   }, productView),
//   Object.assign({
//     route: /^\/$/
//   }, homepageView),
//   Object.assign({
//     route: /^\/(.+)$/
//   }, error404View)
// ]
