
const form = document.querySelector('#userForm')
const input = document.querySelector('#firstName');
const list = document.querySelector('#list');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const firstName = input.value;
  const newLi = document.createElement('li');
  newLi.innerText = firstName;
  list.append(newLi);
  input.value = '';
})