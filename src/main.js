//=========modalBtn===============
let modalBtn = document.querySelector('.header-btn-menu');
let modalBtnClose = document.querySelector('.header-btn-esc');
let modal = document.querySelector('.header-menu');

//=========modalBtn===============
modalBtn.addEventListener('click', function () {
  modalBtn.classList.toggle('active');
  modal.classList.toggle('active');
});
modalBtnClose.addEventListener('click', function () {
  modalBtnClose.classList.toggle('active');
  modal.classList.toggle('active');
});
//================================

//=========modalBtnLink;==========
let modalBtnLink = document.querySelectorAll('.item');
let modalLink = document.querySelector('.header-menu');

let firstItem = modalBtnLink[0];
let twoItem = modalBtnLink[1];
let threeItem = modalBtnLink[2];
let fourItem = modalBtnLink[3];
let fifthItem = modalBtnLink[4];

//=========modalBtnLink;==========
firstItem.addEventListener('click', function () {
  firstItem.classList.toggle('active');
  modalLink.classList.toggle('active');
});
twoItem.addEventListener('click', function () {
  twoItem.classList.toggle('active');
  modalLink.classList.toggle('active');
});
threeItem.addEventListener('click', function () {
  threeItem.classList.toggle('active');
  modalLink.classList.toggle('active');
});
fourItem.addEventListener('click', function () {
  fourItem.classList.toggle('active');
  modalLink.classList.toggle('active');
});
fifthItem.addEventListener('click', function () {
  fifthItem.classList.toggle('active');
  modalLink.classList.toggle('active');
});
