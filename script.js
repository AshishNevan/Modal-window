'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const closeModal = function () {
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
};
const openModal = function () {
  console.log('button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

console.log(btnsOpenModal);
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

overlay.addEventListener('click', closeModal);
btnCloseModal.addEventListener('click', closeModal);
