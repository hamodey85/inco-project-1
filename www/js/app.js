/**
 * #####################################################
 * #####################################################
 * ################### Humburger Menu ##################
 * #####################################################
 * #####################################################
 */
let navbar = document.getElementById('navbar')

let humburger = document.getElementById('nav_humburger_icon')
let humburgerFirstChild = humburger.children[0]
let humburgerSecond = humburger.children[1]
let humburgerLastChild = humburger.children[2]

function togglehumburgerSpans() {
  humburgerFirstChild.classList.toggle('rotate45')
  humburgerSecond.classList.toggle('displayNone')
  humburgerLastChild.classList.toggle('rotate45right')
}

function navToggle() {
  navbar.children[1].classList.toggle('displayinline')
  navbar.children[2].classList.toggle('displayinline')
  navbar.children[3].classList.toggle('displayinline')
}
humburger.addEventListener('click', (e) => {
  navToggle()
  togglehumburgerSpans()
})