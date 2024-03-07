// ==============================================================
import amazonImg from '../img/shopping/amazon.png';
import apple from '../img/shopping/book-apple.png';
import icon from '../img/icons.svg';

import {
  saveBookToLocalStorage,
  removeBookFromLocalStorage,
} from './local-storage';

import {
  instance,
  checkPageNumberOfBooks,
  checkFirstPage,
  options,
  // isCurrentPageEmpty,
} from './pagination';

const refs = {
  emptyPage: document.querySelector('.empty-page'),
  shoppingList: document.querySelector('.shopping-list'),
  pagesContainer: document.querySelector('#pagination-wrapper'),
};

export const perPage = 3;

// ==============================================================
export function getTotalItems() {
  const books = JSON.parse(localStorage.getItem('shoppinglist')) || [];
  return books.length;
}

getTotalItems();

function checkIsThereElementOnPage() {
  if (
    refs.pagesContainer === null &&
    refs.emptyPage === null &&
    refs.shoppingList === null
  ) {
    console.log('hello');
    return;
  }

  islocalStorageEmpty();
}

checkIsThereElementOnPage();

function islocalStorageEmpty() {
  const books = JSON.parse(localStorage.getItem('shoppinglist')) || [];

  if (books.length === 0) {
    refs.emptyPage.classList.remove('hidden');
    return;
  }

  refs.emptyPage.classList.add('hidden');
  createMarkup(books);
}

function checkQuantityElements() {
  const books = Array.from(
    refs.shoppingList.querySelectorAll('.shopping-item')
  );

  if (books.length === 0) {
    refs.emptyPage.classList.remove('hidden');
    return;
  }

  if (books.length > 3) {
    chunkArray(books, perPage);
  }
}

function createMarkup(books) {
  const elementsMarkup = books.map(book => {
    return `<li class="shopping-item hidden" data-book-id="${book._id}" data-page-number="">
      <div class="shopping-photo">
        <img src="${book.book_image}" alt="book cover" />
      </div>
      <div class="shopping-content">
        <div>
          <h4 class="shopping-subtitle">${book.title}</h4>
          <p class="genre">${book.list_name}</p>
          <p class="book-desc">${book.description}</p>
        </div>
        <p class="shopping-author">${book.author}</p>
      </div>
      <button type="button" class="shopping-trash">
        <svg width="18" height="18" class="trash-icon">
          <use href="${icon}#icon-shopp-trash"></use>
        </svg>
      </button>

      <div class="shop-buttons">
        <a href="#" target="_blank" class="shop-amazon">
          <img
            src="${amazonImg}"
            alt="Logo of shop"
            width="62"
          />
        </a>
        <a href="#" target="_blank" class="shop-apple">
          <img
            src="${apple}"
            alt="Logo of shop"
            width="33"
          />
        </a>
      </div>
    </li>`;
  });

  const markup = elementsMarkup.join('');
  markupRender(markup);
}

function markupRender(markup) {
  refs.shoppingList.insertAdjacentHTML('beforeend', markup);

  addListenersToRemoveButtons();
  checkQuantityElements();
  checkFirstPage();
}

// const totalPages = Math.ceil(collectionBooks.length / 3);

function chunkArray(myArray, chunk_size) {
  console.log(2);
  let index = 0;
  let tempArray = [];

  for (index = 0; index < myArray.length; index += chunk_size) {
    let myChunk = myArray.slice(index, index + chunk_size);

    tempArray.push(myChunk);
  }

  let pageNumber = 0;
  let pageBooks = [];

  for (let i = 0; i < tempArray.length; i += 1) {
    pageNumber += 1;
    pageBooks.push(addPageNumber(tempArray[i], pageNumber));
  }

  const result = pageBooks.flat();
  console.log(result);
  checkPageNumberOfBooks(result);
}

function addPageNumber(booksGroup, pageNumber) {
  let booksCollection = [];

  booksGroup.forEach(book => {
    book.dataset.pageNumber = pageNumber;
    booksCollection.push(book);
  });

  return booksCollection;
}

function addListenersToRemoveButtons() {
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

    checkQuantityElements();
    // isCurrentPageEmpty(Number(currentBook.dataset.pageNumber));
    // console.log(currentBook.dataset.pageNumber);
  }
}

// function isCurrentPageEmpty() {}
