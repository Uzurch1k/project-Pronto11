// ==============================================================

// ==============================================================

// ==============================================================

import Pagination from 'tui-pagination';
import '../css/shopping.css';

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
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
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
  if (pagesContainer === null) {
    return;
  }

  const instance = new Pagination(pagesContainer, options);
}

checkIsThereElementOnPage();
// ==============================================================
