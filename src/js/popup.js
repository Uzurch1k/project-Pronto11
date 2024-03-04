import { fetchBookById } from './fetch-api';
import {
  removeBookFromLocalStorage,
  saveBookToLocalStorage,
} from './local-storage';

// ==============================================================
// функція спрацьовує при кліку на QUICK VIEW
// ==============================================================

setTimeout(() => {
  popup();
}, 3000);

export async function popup() {
  const booksList = document.querySelector('.books-container');

  if (booksList) {
    booksList.addEventListener('click', onBookLinkClick);
  }

  async function onBookLinkClick(event) {
    const popupBookWrapper = document.querySelector('.popup-window');

    popupBookWrapper.innerHTML = '';

    if (event.target.classList.contains('books-overlay')) {
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
  checkLocalStorage();
  clickOnAddToShopingListBtn();

  backdrop.addEventListener('click', onBackdropClick);
  document.addEventListener('keydown', onEscClick);
  closeBtn.addEventListener('click', onClickCloseBtn);
  document.addEventListener('keydown', onSpaceButtonClick);

  function onSpaceButtonClick(event) {
    if (event.keyCode === 32) {
      event.preventDefault();
    }
  }

  function showModal() {
    backdrop.classList.add('is-active');
  }

  function onClickCloseBtn() {
    hideModal();
    closeBtn.removeEventListener('click', onClickCloseBtn);
    document.removeEventListener('keydown', onSpaceButtonClick);
  }

  function onBackdropClick(event) {
    if (event.target === event.currentTarget) {
      hideModal();
      backdrop.removeEventListener('click', onBackdropClick);
      document.removeEventListener('keydown', onSpaceButtonClick);
    }
  }

  function onEscClick(event) {
    if (event.keyCode === 27) {
      hideModal();
      document.removeEventListener('keydown', onEscClick);
      document.removeEventListener('keydown', onSpaceButtonClick);
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
  const { _id, author, title, book_image, buy_links, description = '' } = obj;
  const [amazon, appleBook] = buy_links;

  return `
<button class="popup-close-btn">
      <svg class="popup-close-btn-icon" width="28" height="28">
        <use href="/img/icons.svg#icon-header-close"></use>
      </svg>
    </button>
    <div class="popup-book">
      <div class="popup-wrap-img">
        <img class="popup-book-image" src="${book_image}" alt="обкладинка" />
      </div>
      <div class="popup-book-content">
        <h2 class="popup-book-title">${title}</h2>
        <h3 class="popup-book-author">${author}</h3>
        <p class="popup-book-review">${description}</p>
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
                src="/img/shopping/amazon.png"
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
                src="/img/shopping/book-apple.png"
                alt="Logo of shop"
                width="33"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="popup-book-btn-add">
      <button
        type="button"
        class="popup-book-btn-add-to-shopinglist"
        data-id="${_id}"
        id="add"
        aria-label="Add card to shopping list"
      ></button>
    </div>

    `;
}

// ==============================================================
// логіка перевірки LocalStorage та відпрацювання кнопки ADD TO SHOPPING LIST
// ==============================================================

function checkLocalStorage() {
  const addToShoppingListBtn = document.querySelector(
    '.popup-book-btn-add-to-shopinglist'
  );
  const bookId = addToShoppingListBtn.dataset.id;

  const localStorageData =
    JSON.parse(localStorage.getItem('shoppinglist')) || [];

  const bookInLocalStorage = localStorageData
    .map(element => element._id)
    .includes(bookId);

  if (bookInLocalStorage) {
    addToShoppingListBtn.textContent = 'REMOVE FROM THE SHOPPING LIST';
    addToShoppingListBtn.insertAdjacentHTML('afterend', templateForBtn());
  } else {
    addToShoppingListBtn.textContent = 'ADD TO SHOPPING LIST';
  }
}

function clickOnAddToShopingListBtn() {
  const addToShoppingListBtn = document.querySelector(
    '.popup-book-btn-add-to-shopinglist'
  );
  const bookId = addToShoppingListBtn.dataset.id;

  addToShoppingListBtn.addEventListener('click', addToShoppingListBtnHandler);

  function addToShoppingListBtnHandler() {
    const localStorageData =
      JSON.parse(localStorage.getItem('shoppinglist')) || [];

    const bookInLocalStorage = localStorageData
      .map(element => element._id)
      .includes(bookId);

    if (!bookInLocalStorage) {
      saveBookToLocalStorage(bookId);

      addToShoppingListBtn.textContent = 'REMOVE FROM THE SHOPPING LIST';
      addToShoppingListBtn.insertAdjacentHTML('afterend', templateForBtn());
    } else {
      removeBookFromLocalStorage(bookId);

      document.querySelector('.under-btn-text').remove();
      addToShoppingListBtn.textContent = 'ADD TO SHOPPING LIST';
    }
  }
}

function templateForBtn() {
  return `
      <p class="under-btn-text">
        Congratulations! You have added the book to the shopping list. To
        delete, press the button "Remove from the shopping list".
      </p>
    `;
}
