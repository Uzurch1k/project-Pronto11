// ==============================================================

import {
  saveBookToLocalStorage,
  removeBookFromLocalStorage,
} from './local-storage';

import icon from '../img/icons.svg';
import amazon from '../img/shopping/amazon.png';
import apple from '../img/shopping/book-apple.png';

import {
  createButtonsPagination,
  checkPageNumberOfBooks,
  checkFirstPage,
} from './pagination';
import { getBooksJson } from './authorization';

const refs = {
  emptyPage: document.querySelector('.empty-page'),
  shoppingList: document.querySelector('.shopping-list'),
  pagesContainer: document.querySelector('#pagination-wrapper'),
};

export const perPage = 3;

// ==============================================================

export async function checkIsThereElementOnPage() {
  if (
    refs.pagesContainer === null &&
    refs.emptyPage === null &&
    refs.shoppingList === null
  ) {
    return;
  }

  await islocalStorageEmpty();
  isShoppingListEmpty();
}

async function islocalStorageEmpty() {
  const booksJson = await getBooksJson();
  const books = JSON.parse(booksJson) || [];

  if (books.length === 0) {
    refs.emptyPage.classList.remove('hidden');
    refs.shoppingList.innerHTML = '';
    return;
  }

  refs.emptyPage.classList.add('hidden');
  createMarkup(books);
}

function createMarkup(books) {
  const elementsMarkup = books.map(book => {
    return `<li class="shopping-item hidden" data-book-id="${book._id}">
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
              src="${amazon}"
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

  markupRender(elementsMarkup);
}

function markupRender(elementsMarkup) {
  const markup = elementsMarkup.join('');
  refs.shoppingList.innerHTML = markup;

  const bookCollection = Array.from(
    refs.shoppingList.querySelectorAll('.shopping-item')
  );

  addListenersToRemoveButtons();
  checkFirstPage();
  chunkArray(bookCollection, perPage);
  checkQuantityElements();
}

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
}

function addPageNumber(booksGroup, pageNumber) {
  let booksCollection = [];

  booksGroup.forEach(book => {
    book.dataset.pageNumber = pageNumber;
    booksCollection.push(book);
  });

  return booksCollection;
}

function checkQuantityElements() {
  const books = refs.shoppingList.querySelectorAll('.shopping-item');

  if (books.length > 3) {
    createButtonsPagination();
  }
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

    isShoppingListEmpty();
  }
}

export async function isShoppingListEmpty() {
  const booksCollection = refs.shoppingList.querySelectorAll('.shopping-item');

  if (booksCollection) {
    console.log(booksCollection);

    if (booksCollection.length === 0) {
      refs.emptyPage.classList.remove('hidden');
      refs.pagesContainer.classList.add('hidden');
      return;
    }

    console.log(booksCollection.length);

    if (booksCollection.length > 3) {
      createButtonsPagination();
      refs.pagesContainer.classList.remove('hidden');
    } else {
      refs.pagesContainer.classList.add('hidden');
    }
  }
}
