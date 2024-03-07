// ==============================================================

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

export function createButtonsPagination() {
  const books = refs.shoppingList.querySelectorAll('.shopping-item');

  const visiblePageNumber = getVisiblePagesNumber();
  const options = {
    totalItems: books.length,
    itemsPerPage: 3,
    page: 1,
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
    console.log(eventData);
    options.page = eventData.page;
  });
}

// ==============================================================
