//Render top books
export const renderTop = (data) => {;
    const categoriesTop = data.map(el => {
        const catName = el.list_name;
        const books = renderOneBook(el.books)
        return `<div class="books-category-container">
        <h3 class="books-category-title">${catName}</h3>
        <ul class="books-list">${books}</ul>
        <div class="books-btn-container">
          <button data-catname="${catName}" type="button" class="books-btn">see more</button>
        </div>
      </div>`;
    }).join('');

    return `<div class="books-container"><h2 class="books-title">Best Sellers Books</h2>${categoriesTop}</div>`;
}

//Render categories
export const renderCategories = (data) => {
    console.log(data);
    return  `<li class="categories-list">
    <a href="#" data-catname="" class="categories-nav">All categories</a>
  </li>
  <li class="categories-list">
    <a href="#" data-catname="Advice How-To and Miscellaneous" class="categories-nav">Print and E-book Fiction</a>
  </li>
  <li class="categories-list">
    <a href="#" data-catname="Advice How-To and Miscellaneous" class="categories-nav">Combined Print & E-book Nonfiction</a>
  </li>
  <li class="categories-list">
    <a href="#" data-catname="Advice How-To and Miscellaneous" class="categories-nav">Hardcover fiction</a>
  </li>
  <li class="categories-list">
    <a href="#" data-catname="Advice How-To and Miscellaneous" class="categories-nav">Hardcover nonfiction</a>
  </li>
  <li class="categories-list">
    <a href="#" data-catname="Advice How-To and Miscellaneous" class="categories-nav">Paperback trade fiction</a>
  </li>
  <li class="categories-list">
    <a href="#" data-catname="Advice How-To and Miscellaneous" class="categories-nav">Paperback nonfiction</a>
  </li>
  <li class="categories-list">
    <a href="#" data-catname="Advice How-To and Miscellaneous" class="categories-nav">Advice, how-to & Miscellaneous</a>
  </li>
  <li class="categories-list">
    <a href="#" data-catname="Advice How-To and Miscellaneous" class="categories-nav">Children’s middle grade hardcover</a>
  </li>
  <li class="categories-list">
    <a href="#" data-catname="Advice How-To and Miscellaneous" class="categories-nav">Children’s middle grade hardcover</a>
  </li>
  <li class="categories-list">
    <a href="#" data-catname="Advice How-To and Miscellaneous" class="categories-nav">Print and E-book Fiction</a>
  </li>
  <li class="categories-list">
    <a href="#" data-catname="Advice How-To and Miscellaneous" class="categories-nav">Combined Print & E-book Nonfiction</a>
  </li>
  <li class="categories-list">
    <a href="#" data-catname="Advice How-To and Miscellaneous" class="categories-nav">Hardcover fiction</a>
  </li>
  <li class="categories-list">
    <a href="#" data-catname="Advice How-To and Miscellaneous" class="categories-nav">Hardcover nonfiction</a>
  </li>
  <li class="categories-list">
    <a href="#" data-catname="Advice How-To and Miscellaneous" class="categories-nav">Paperback trade fiction</a>
  </li>
  <li class="categories-list">
    <a href="#" data-catname="Advice How-To and Miscellaneous" class="categories-nav">Paperback nonfiction</a>
  </li>
  <li class="categories-list">
    <a href="#" data-catname="Advice How-To and Miscellaneous" class="categories-nav">Advice, how-to & Miscellaneous</a>
  </li>`;
}

//Render category books
export const renderCategory = (data, categoryName) => {
    const books = renderOneBook(data)
    const categoryHtml = `<div class="books-container">
    <h2 class="books-title">${categoryName}</h2>
    <div class="books-category-container">
      <ul class="books-list">${books}</ul>
    </div>
  </div>`;

    return categoryHtml;
}

//Render one book
function renderOneBook(books) {
    const booksRendered = books.map(el => {
        const id = el._id;
        const image = el.book_image;
        const title = el.title;
        const authoe = el.author;
        return `<li class="books-item">
        <div class="books-wrapper">
          <img
            class="books-img"
            src="${image}"
            alt="${image}"
          />
          <a href="#" data-id="${id}" class="books-overlay">
            <p class="books-overlay-text">QUICK VIEW</p>
          </a>
        </div>
        <div class="books-info">
          <p class="books-info-title">${title}</p>
          <p class="books-info-author">${authoe}</p>
        </div>
      </li>`;
    }).join('');

    return booksRendered;
} 