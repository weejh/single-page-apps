
console.log(
  [
  [/^\/about$/, 'aboutView'],
  [/^\/products$/, 'shopView'],
  [/^\/products\/(.+)$/, 'productView'],
  [/^\/$/, 'error404View']
].map (e => {
  // console.log(e[0])
  // console.log(e[1])
  return Object.assign({abc: e[0]})
})
)
