import { fetchBookById } from './fetch-api';

export const saveBookToLocalStorage = async (bookId) => {
    try {
        const bookData = await fetchBookById(bookId);
        
        let shoppingList = JSON.parse(localStorage.getItem('shoppinglist')) || [];
        
        shoppingList.push(bookData);
        
        localStorage.setItem('shoppinglist', JSON.stringify(shoppingList));
    } catch (error) {
        console.error(error);
    }
};

export const removeBookFromLocalStorage = async (bookId) => {
    try {    
        const shoppinglist = JSON.parse(localStorage.getItem('shoppinglist')) || [];
        localStorage.setItem('shoppinglist', JSON.stringify(shoppinglist.filter(item => item._id !== bookId)));
    } catch (error) {
        console.error(error);
    }        
}