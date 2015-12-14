window.addEventListener('popstate', event => {
  console.log(event)
  route()
})

document.addEventListener('click', event => {
  if (event.target.tagName === 'A') {
    if (event.target.href.startsWith(window.location.origin)) {
      event.preventDefault()
      console.log(event)
      window.history.pushState(null, '', event.target.attributes.href.value)
      route()
    }
  }
})

function route () {
  Array.from(document.querySelectorAll('section'))
    .forEach(section =>
        section.style.display = 'none'
      )
  switch (window.location.pathname) {
    case '/about':
      document.title = 'About us'
      document.querySelector('#about')
        .style.display = 'block'
      break
    case '/products':
      document.title = 'products'
      document.querySelector('#products')
        .style.display = 'block'
      break
    case '/':
      break
  }
}

route()
// Array.from(document.querySelectorAll('nav a'))
//   .forEach(anchor =>
//     anchor.addEventListener('click', event => {
//       event.preventDefault()
//       // console.dir(anchor)
//       window.history.pushState(null, '', anchor.attributes.href.value)
//       Array.from(document.querySelectorAll('section'))
//         .forEach(section =>
//           section.style.display = 'none'
//         )
//       switch (anchor.attributes.href.value) {
//         case '/about':
//           document.title = 'About us'
//           document.querySelector('#about')
//             .style.display = 'block'
//           break
//         case '/products':
//           document.title = 'products'
//           document.querySelector('#products')
//             .style.display = 'block'
//           break
//         case '/':
//           break
//       }
//     })
//   )
