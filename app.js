// Array.from(document.querySelectorAll('nav'))
//   .forEach(function (anchor) {
//     anchor.addEventListener('click', function (event) {
//       event.preventDefault()
//       console.dir(anchor)
//       // location.pushState(null, '', )
//     })
//   })
Array.from(document.querySelectorAll('nav a'))
  .forEach(anchor =>
    anchor.addEventListener('click', event => {
      event.preventDefault()
      // console.dir(anchor)
      window.history.pushState(null, '', anchor.attributes.href.value)
      Array.from(document.querySelectorAll('section'))
        .forEach(section =>
          section.style.display = 'none'
        )
      switch (anchor.attributes.href.value) {
        case '/about':
          document.title = 'About us'
          // document.querySelectorAll('section')
          //   .style.display = ''
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
    })
  )
