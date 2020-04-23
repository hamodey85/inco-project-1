const popUpModule = document.getElementById('pop_up_container')
const closeIcon = document.getElementById('close_icon')
const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  console.log(new FormData(form))
  popUpModule.classList.remove('hideModal')
})
closeIcon.addEventListener('click', (e) => {
  popUpModule.classList.add('hideModal')
})
popUpModule.addEventListener('click', (e) => {
  popUpModule.classList.add('hideModal')
})
