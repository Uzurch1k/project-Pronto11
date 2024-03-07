import { fetchBookById } from './fetch-api';
import { getBooksJson, addBooksJson } from './authorization';

export const saveBookToLocalStorage = async bookId => {
  try {
    const bookData = await fetchBookById(bookId);
    const shoppingList = JSON.parse(getBooksJson()) || [];

    shoppingList.push(bookData);

    localStorage.setItem('shoppinglist', JSON.stringify(shoppingList));
  } catch (error) {
    console.error(error);
  }
};

export const removeBookFromLocalStorage = async bookId => {
  const booksJson = await getBooksJson();
  const shoppinglist = JSON.parse(booksJson) || [];
  const filteredList = shoppinglist.filter(item => item._id !== bookId);
  await addBooksJson(JSON.stringify(filteredList));
};
