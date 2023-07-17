// show and hide menu using js

const listItem2 = document.querySelector('.nav--list-item2');
const dropdown2 = document.querySelector('.nav--list-item2-drop2');

listItem2.addEventListener('click', () => {
  event.stopPropagation();
  dropdown2.classList.toggle('show');
  // console.log('i am showing');
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.nav--list-item2')) {
    // if (event.target !== '.nav--list-item2') {
    dropdown2.classList.remove('show');
  }
  // console.log('i have been removed');
});
