import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import icon from '../img/icons.svg';

export const renderTop = (data, booksPerRow) => {
  if (!data || data.length === 0) {
    const emptyCategoryHtml = `<div class="books-container"><h2 class="books-title">Best Sellers Books</h2>
    </div>${getEmtyCategoryHtml()}`;
    return emptyCategoryHtml;
  } else {
    const categoriesTop = data
      .map(el => {
        const catName = el.list_name;
        const books = renderOneBook(el.books.slice(0, booksPerRow));
        return `<div class="books-category-container">
        <h3 class="books-category-title">${catName}</h3>
        <ul class="books-list">${books}</ul>
        <div class="books-btn-container">
          <button data-catname="${catName}" type="button" class="books-btn">see more</button>
        </div>
      </div>`;
      })
      .join('');
    return `<h2 class="books-title">Best Sellers Books</h2>${categoriesTop}`;
  }
};

export const renderCategories = data => {
  const categoriesItems = data
    .sort((a, b) => {
      if (a.list_name < b.list_name) {
        return -1;
      }
      if (a.list_name > b.list_name) {
        return 1;
      }
      return 0;
    })
    .map(el => {
      return `<li class="categories-list">
      <a href="#" data-catname="${el.list_name}" class="categories-nav">${el.list_name}</a>
    </li>`;
    })
    .join('');
  return `<li class="categories-list">
  <a href="#" data-catname="" class="categories-nav active">All categories</a>
  </li>${categoriesItems}`;
};

function getEmtyCategoryHtml() {
  iziToast.error({
    message: 'Sorry, no books found.',
    position: 'topRight',
    icon: null,
  });
  return `</div>
  <div class="empty-category">
  <svg class="icon-shopp-stub">
    <use href="${icon}#icon-shopp-stub"></use>
    </svg>
  <span>Nothing found</span>
  </div>`;
}

export const renderCategory = (data, categoryName) => {
  if (!data || data.length === 0) {
    const emptyCategoryHtml = `<div class="books-container">
        <h2 class="books-title">${categoryName}</h2>
        </div>${getEmtyCategoryHtml()}`;
    return emptyCategoryHtml;
  } else {
    const books = renderOneBook(data);
    const categoryHtml = `<h2 class="books-title">${categoryName}</h2>
    <div class="books-category-container">
      <ul class="books-list">${books}</ul>
    </div>`;
    return categoryHtml;
  }
};

function renderOneBook(books) {
  const booksRendered = books
    .map(el => {
      const { _id, book_image, title, author } = el;
      return `<li class="books-item">
        <div class="books-wrapper">
          <img
            class="books-img"
            src="${book_image}"
            alt="${title}"
          />
          <a href="#" data-id="${_id}" class="books-overlay">
            QUICK VIEW
          </a>
        </div>
        <div class="books-info">
          <h4 class="books-info-title">${title}</h4>
          <p class="books-info-author">${author}</p>
        </div>
      </li>`;
    })
    .join('');
  return booksRendered;
}
