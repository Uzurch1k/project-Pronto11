// ==============================================================
import {
  saveBookToLocalStorage,
  removeBookFromLocalStorage,
} from './local-storage';
import Pagination from 'tui-pagination';
import '../css/pagination.css';

const refs = {
  emptyPage: document.querySelector('.empty-page'),
  shoppingList: document.querySelector('.shopping-list'),
};

// ==============================================================

export const pagesContainer = document.querySelector('#pagination-wrapper');

function getVisiblePagesNumber() {
  if (matchMedia('(min-width: 768px)').matches) {
    return 3;
  }

  return 2;
}

const visiblePageNumber = getVisiblePagesNumber();

const options = {
  totalItems: 10,
  itemsPerPage: 3,
  visiblePages: visiblePageNumber,
  centerAlign: false,
  template: {
    page: '<a href="#" class="tui-page-btn"><span class="number-text">{{page}}</span></a>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}} custom-class-{{type}}">' +
      '<span class="tui-ico-{{type}}"></span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}} custom-class-{{type}}">' +
      '<span class="tui-ico-{{type}}"></span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip custom-class-{{type}}">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};

function checkIsThereElementOnPage() {
  if (
    pagesContainer === null &&
    refs.emptyPage === null &&
    refs.shoppingList === null
  ) {
    return;
  }

  islocalStorageEmpty();
}

checkIsThereElementOnPage();
// ==============================================================

function islocalStorageEmpty() {
  const books = JSON.parse(localStorage.getItem('shoppinglist')) || [];

  if (books.length === 0) {
    refs.emptyPage.classList.remove('hidden');
    return;
  }

  refs.emptyPage.classList.add('hidden');
  createMarkup(books);
}

function createMarkup(books) {
  const elementsMarkup = books.map(book => {
    return `<li class="shopping-item" data-book-id="${book._id}">
      <div class="shopping-photo">
        <img src="${book.book_image}" alt="book cover" />
      </div>
      <div class="shopping-content">
        <div>
          <p class="shopping-subtitle">${book.title}</p>
          <p class="genre">${book.list_name}</p>
          <p class="book-desc">${book.description}</p>
        </div>
        <p class="shopping-author">${book.author}</p>
      </div>
      <button type="button" class="shopping-trash">
        <svg width="18" height="18" class="trash-icon">
          <use href="./img/icons.svg#icon-shopp-trash"></use>
        </svg>
      </button>

      <div class="shop-buttons">
        <a href="#" target="_blank" class="shop-amazon">
          <img
            src="./img/shopping/amazon.png"
            alt="Logo of shop"
            width="62"
          />
        </a>
        <a href="#" target="_blank" class="shop-apple">
          <img
            src="./img/shopping/book-apple.png"
            alt="Logo of shop"
            width="33"
          />
        </a>
      </div>
    </li>`;
  });

  markupRender(elementsMarkup);
}

function markupRender(elementsMarkup) {
  const markup = elementsMarkup.join('');
  refs.shoppingList.insertAdjacentHTML('beforeend', markup);

  addListenersToRemoveButtons();
}

function addListenersToRemoveButtons() {
  // const removeButtons = refs.shoppingList.querySelectorAll('.shopping-trash');
  const booksCollection = refs.shoppingList.querySelectorAll('.shopping-item');

  booksCollection.forEach(book => {
    book.addEventListener('click', removeBook);
  });
}

function removeBook(evt) {
  if (
    evt.target.classList.contains('shopping-trash') ||
    evt.target.nodeName === 'use' ||
    evt.target.nodeName === 'svg'
  ) {
    const currentBook = evt.currentTarget;
    const bookId = evt.currentTarget.dataset.bookId;

    removeBookFromLocalStorage(bookId);
    currentBook.remove();
    isShoppingListEmpty();
  }
}

function isShoppingListEmpty() {
  const booksCollection = refs.shoppingList.querySelectorAll('.shopping-item');

  if(booksCollection.length === 0) {
    refs.emptyPage.classList.remove('hidden')
  }
}
