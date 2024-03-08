// ==============================================================

import { perPage } from './shopping';
import Pagination from 'tui-pagination';
import '../css/pagination.css';

const refs = {
  emptyPage: document.querySelector('.empty-page'),
  shoppingList: document.querySelector('.shopping-list'),
  pagesContainer: document.querySelector('#pagination-wrapper'),
};

// ==============================================================

function getVisiblePagesNumber() {
  if (matchMedia('(min-width: 768px)').matches) {
    return 3;
  }

  return 2;
}

export function createButtonsPagination(selectedPage) {
  const books = refs.shoppingList.querySelectorAll('.shopping-item');

  const visiblePageNumber = getVisiblePagesNumber();
  selectedPage = selectedPage ? selectedPage : 1;
  const options = {
    totalItems: books.length,
    itemsPerPage: 3,
    page: +selectedPage,
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

  const totalPages = Math.ceil(books.length / options.itemsPerPage);

  const instance = new Pagination(refs.pagesContainer, options);

  instance.on('afterMove', function (eventData) {
    options.page = eventData.page;
    checkFirstPage();
    checkPageNumberOfBooks(eventData.page);
  });
}

export function checkFirstPage() {
  const bookCollection = Array.from(
    refs.shoppingList.querySelectorAll('.shopping-item')
  );

  const firstPageBook = bookCollection.slice(0, 3);

  firstPageBook.forEach(book => book.classList.remove('hidden'));
}

export function checkPageNumberOfBooks(currentPage) {
  const bookCollection = Array.from(
    refs.shoppingList.querySelectorAll('.shopping-item')
  );

  const currentBooks = bookCollection.filter(book => {
    return Number(book.dataset.pageNumber) === currentPage;
  });

  const notCurrentBook = bookCollection.filter(book => {
    return Number(book.dataset.pageNumber) !== currentPage;
  });

  currentBooks.forEach(book => book.classList.remove('hidden'));
  notCurrentBook.forEach(book => book.classList.add('hidden'));
}

// ==============================================================
