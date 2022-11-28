


document.addEventListener('scroll', function () {
  if (window.innerWidth > 978) {
    if (window.scrollY > 100) {
      $('.navbar').addClass('navbar-fixed')
    } else {
      $('.navbar').removeClass('navbar-fixed')
    }

  }
})
/**
 * Easy selector helper function
 */
const select = (el, all = false) => {
  el = el.trim()
  if (all) {
    return [...document.querySelectorAll(el)]
  } else {
    return document.querySelector(el)
  }
}
/**
   * Easy event listener function
   */
const on = (type, el, listener, all = false) => {
  let selectEl = select(el, all)
  if (selectEl) {
    if (all) {
      selectEl.forEach(e => e.addEventListener(type, listener))
    } else {
      selectEl.addEventListener(type, listener)
    }
  }
}
/**
   * Scrolls to an element with header offset
   */
const scrollto = (el) => {
  let elementPos = select(el).offsetTop - 100
  window.scrollTo({
    top: elementPos,
    behavior: 'smooth'
  })
}
/**
 * Scrool with ofset on links with a class name .scrollto
 */
on('click', '.nav-link', function (e) {
  if (select(this.hash)) {
    e.preventDefault()

    let body = select('body')
    if (body.classList.contains('mobile-nav-active')) {
      body.classList.remove('mobile-nav-active')
      let navbarToggle = select('.mobile-nav-toggle')
      navbarToggle.classList.toggle('bi-list')
      navbarToggle.classList.toggle('bi-x')
    }
    scrollto(this.hash)
  }
}, true)
/**
 * Navbar links active state on scroll
 */
let navbarlinks = document.querySelectorAll('.nav-link')
// let navbarlinks = select('#navbar .scrollto', true)
const navbarlinksActive = () => {
  let position = window.scrollY + 200
  navbarlinks.forEach(navbarlink => {
    if (!navbarlink.hash) return
    let section = select(navbarlink.hash)
    if (!section) return
    if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
      navbarlink.classList.add('nav-link-active')
    } else {
      navbarlink.classList.remove('nav-link-active')
    }
  })
}
document.addEventListener('scroll', navbarlinksActive)
/**
   * Back to top button
   */
let backtotop = select('.back-to-top')
if (backtotop) {
  const toggleBacktotop = () => {
    if (window.scrollY > 100) {
      backtotop.classList.add('active')
    } else {
      backtotop.classList.remove('active')
    }
  }
  window.addEventListener('load', toggleBacktotop)
  document.addEventListener('scroll', toggleBacktotop)
}

  /**
   * Portfolio details slider
   */
  new Swiper('.events-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });
  
  /**
   * Animation on scroll
   */
   window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: true
    })
  });

