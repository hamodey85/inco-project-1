const popUp = document.getElementById('pop_up_container')
const form = document.getElementById('form')
let values = {}
let temp;

popUp.addEventListener('click', (e) => {
  popUp.classList.add('hideModal')
})

form.addEventListener('submit', (e) => {
  e.preventDefault()
for(let i=0;i<form.length -1;i++) {
  if( form[i].value !== '' && i === form.length -2) popUp.classList.remove('hideModal')
  temp = form[i].name
  values[temp]= form[i].value;
  form[i].value=''
}
console.table(values)
})