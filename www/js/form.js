const popUpModule = document.getElementById('pop_up_container')
const closeIcon = document.getElementById('close_icon')
const form = document.getElementById('form')
const values = {}
let temp  ;

popUpModule.addEventListener('click', (e) => {
  popUpModule.classList.add('hideModal')
})

form.addEventListener('submit', (e) => {
  e.preventDefault()
  
for(let i=0;i<form.length -1;i++) {

  if( form[i].value !== '' && i === form.length -2) popUpModule.classList.remove('hideModal')
  temp = form[i].name
  values[temp]= form[i].value;
}
console.table(values)
})
// closeIcon.addEventListener('click', (e) => {
//   popUpModule.classList.add('hideModal')
// })


