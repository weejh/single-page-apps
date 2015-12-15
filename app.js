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

document.addEventListener('change', event => {
  // console.dir(event.target.value)
  // console.log(window.location.pathname)
  if (window.location.pathname === '/products') {
    window.history.replaceState(null, '', window.location.pathname + '?' + document.querySelector('#color').value + '+' + document.querySelector('#size').value)
  }
  if (window.location.pathname === '/about') {
      // console.log(window.location.pathname)
      // console.log(document.querySelector('#group').value)
    window.history.replaceState(null, '', window.location.pathname + '?' + document.querySelector('#group').value)
  }
  // route()
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
