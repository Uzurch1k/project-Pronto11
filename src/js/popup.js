import { fetchBookById } from './fetch-api';

// ==============================================================
// функція спрацьовує при кліку на QUICK VIEW
// ==============================================================

setTimeout(() => {
  popup();
}, 3000);

export async function popup() {
  const booksList = document.querySelector('.books-container');

  booksList.addEventListener('click', onBookLinkClick);

  async function onBookLinkClick(event) {
    const popupBookWrapper = document.querySelector('.popup-book');

    popupBookWrapper.innerHTML = '';

    if (event.target === event.target.closest('.books-overlay')) {
      const bookId = event.target.dataset.id;
      const bookData = await fetchBookById(bookId);

      const markup = template(bookData);

      popupBookWrapper.insertAdjacentHTML('beforeend', markup);

      openModal();
    }
  }
}

// ==============================================================
// логіка відкриття та закриття модалки
// ==============================================================

async function openModal() {
  const backdrop = document.querySelector('.popup-backdrop');
  const closeBtn = document.querySelector('.popup-close-btn');

  showModal();

  backdrop.addEventListener('click', onBackdropClick);
  document.addEventListener('keydown', onEscClick);
  closeBtn.addEventListener('click', onClickCloseBtn);

  function showModal() {
    backdrop.classList.add('is-active');
  }

  function onClickCloseBtn() {
    hideModal();
    closeBtn.removeEventListener('click', onClickCloseBtn);
  }

  function onBackdropClick(event) {
    if (event.target === event.currentTarget) {
      hideModal();
      backdrop.removeEventListener('click', onBackdropClick);
    }
  }

  function onEscClick(event) {
    if (event.keyCode === 27) {
      hideModal();
      document.removeEventListener('keydown', onEscClick);
    }
  }

  function hideModal() {
    backdrop.classList.remove('is-active');
  }
}

// ==============================================================
// шаблон динамічної частини модалки
// ==============================================================
function template(obj) {
  const { author, title, book_image, buy_links, description = '' } = obj;
  const [amazon, appleBook] = buy_links;

  return `
      <div class="popup-wrap-img">
        <img
          class="popup-book-image"
          src="${book_image}"
          alt="обкладинка"
        />
      </div>
      <div class="popup-book-content">
        <h2 class="popup-book-title">${title}</h2>
        <h3 class="popup-book-author">${author}</h3>
        <p class="popup-book-review">
          ${description}
        </p>
        <ul class="popup-shopping-links">
          <li>
            <a
              href="${amazon.url}"
              target="blank"
              rel="nofollow noopener noreferrer"
              aria-label="Link to shop"
              class="amazon popup-shopping-links-icon"
            >
              <img
                class="popup-shopping-links-icon"
                src="./img/shopping/amazon.png"
                alt="Logo of shop"
                width="62"
              />
            </a>
          </li>
          <li>
            <a
              href="${appleBook.url}"
              target="blank"
              rel="nofollow noopener noreferrer"
              aria-label="Link to shop"
              class="book popup-shopping-links-icon"
            >
              <img
                src="./img/shopping/book-apple.png"
                alt="Logo of shop"
                width="33"
              />
            </a>
          </li>
        </ul>
      </div>
    
    `;
}

// ==============================================================
// дописати логіку кнопки ADD TO SHOPPING LIST
// ==============================================================
// const addToShoppingListBtn = document.querySelector(
//   '.popup-book-btn-add-to-shopinglist'
// );

// addToShoppingListBtn.addEventListener('click', addToShoppingListBtnHandler);

// function addToShoppingListBtnHandler() {
//   console.log(
//     "addToShoppingListBtnHandler"
//   );
// }
