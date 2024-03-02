// ==============================================================

// ==============================================================

// ==============================================================

import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.css';
import '../css/shopping.css';

export const pagesContainer = document.querySelector('#pagination-wrapper');

const options = {
  totalItems: 10,
  itemsPerPage: 3,
  visiblePages: 2,
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

const instance = new Pagination(pagesContainer, options);

console.log(instance);

// ==============================================================
