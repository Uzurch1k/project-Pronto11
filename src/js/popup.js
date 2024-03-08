import { fetchBookById } from './fetch-api';
import { removeBookFromLocalStorage } from './local-storage';
import iconClose from '../img/icons.svg';
import amazonImg from '../img/shopping/amazon.png';
import apple from '../img/shopping/book-apple.png';
import { getBooksJson, addBooksJson } from './authorization';

// ==============================================================

export async function popup() {
  const booksList = document.querySelector('.books-container');
  if (booksList) {
    booksList.addEventListener('click', onBookLinkClick);
  }
  async function onBookLinkClick(event) {
    if (event.target.classList.contains('books-overlay')) {
      const bookId = event.target.dataset.id;
      const bookData = await fetchBookById(bookId);
      openModal(bookData);
    }
  }
}

// ==============================================================

async function openModal(bookData) {
  const backdrop = document.querySelector('.popup-backdrop');
  const popupBookWrapper = document.querySelector('.popup-window');

  popupBookWrapper.innerHTML = '';
  const markup = template(bookData);
  popupBookWrapper.insertAdjacentHTML('beforeend', markup);

  const closeBtn = document.querySelector('.popup-close-btn');
  showModal();
  checkLocalStorage();
  await clickOnAddToShopingListBtn();

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
    document.body.classList.add('modal-open');
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
    document.body.classList.remove('modal-open');
  }
}

// ==============================================================

async function checkLocalStorage() {
  const addToShoppingListBtn = document.querySelector(
    '.popup-book-btn-add-to-shopinglist'
  );
  const bookId = addToShoppingListBtn.dataset.id;
  const booksJson = await getBooksJson();
  const localStorageData = JSON.parse(booksJson) || [];
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

async function setToLocalStorage(bookData) {
  const booksJson = await getBooksJson();
  const shoppingList = JSON.parse(booksJson) || [];
  shoppingList.push(bookData);
  await addBooksJson(JSON.stringify(shoppingList));
}

async function clickOnAddToShopingListBtn() {
  const addToShoppingListBtn = document.querySelector(
    '.popup-book-btn-add-to-shopinglist'
  );
  const bookId = addToShoppingListBtn.dataset.id;
  const bookData = await fetchBookById(bookId);

  addToShoppingListBtn.addEventListener('click', addToShoppingListBtnHandler);

  async function addToShoppingListBtnHandler() {
    const booksJson = await getBooksJson();
    const localStorageData = JSON.parse(booksJson) || [];
    const bookInLocalStorage = localStorageData
      .map(element => element._id)
      .includes(bookId);
    if (!bookInLocalStorage) {
      setToLocalStorage(bookData);
      addToShoppingListBtn.textContent = 'REMOVE FROM THE SHOPPING LIST';
      addToShoppingListBtn.insertAdjacentHTML('afterend', templateForBtn());
    } else {
      await removeBookFromLocalStorage(bookId);
      document.querySelector('.under-btn-text').remove();
      addToShoppingListBtn.textContent = 'ADD TO SHOPPING LIST';
    }
  }
}

// ==============================================================

function template(obj) {
  const { _id, author, title, book_image, buy_links, description = '' } = obj;
  const [amazon, appleBook] = buy_links;
  return `<button class="popup-close-btn">
      <svg class="popup-close-btn-icon" width="28" height="28">
        <use href="${iconClose}#icon-header-close"></use>
      </svg>
    </button>
    <div class="popup-book">
      <div class="popup-wrap-img">
        <img class="popup-book-image" src="${book_image}" alt="обкладинка" />
      </div>
      <div class="popup-book-content">
        <h4 class="popup-book-title">${title}</h4>
        <p class="popup-book-author">${author}</p>
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
                src="${amazonImg}"
                class="popup-shopping-links-icon"
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
                src="${apple}"
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
    </div>`;
}

function templateForBtn() {
  return `
      <p class="under-btn-text">
        Congratulations! You have added the book to the shopping list. To
        delete, press the button "Remove from the shopping list".
      </p>
    `;
}
