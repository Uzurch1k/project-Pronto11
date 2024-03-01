const modalBtnOpen = document.querySelector(".header-btn-burgher");
const modalBtnClose = document.querySelector('.header-btn-esc');
const modal = document.querySelector('.header-menu');

modalBtnOpen.addEventListener('click', function () {
    modalBtnOpen.classList.toggle('hidden');
    modal.classList.toggle('active');
    modal.classList.toggle('hidden');
    modalBtnClose.classList.toggle('active');
});

modalBtnClose.addEventListener('click', function () {
    modalBtnOpen.classList.toggle('hidden');
    modal.classList.toggle('active');
    modal.classList.toggle('hidden');
    modalBtnClose.classList.toggle('active');
});

