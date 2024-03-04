import axios from 'axios';
import { renderTop, renderCategories, renderCategory } from './rendering-books';

const BASEURL = 'https://books-backend.p.goit.global';

//Fatch for top books
let savedFetch = JSON.parse(sessionStorage.getItem('savedfetch')) || '';
export const fetchGeneral = async booksPerRow => {

  if(!savedFetch) {
    const endpoint = '/books/top-books/';
    const fetchUrl = BASEURL + endpoint;
  
    try {
      const response = await axios.get(fetchUrl);
      sessionStorage.setItem('savedfetch', JSON.stringify(response.data));
      savedFetch = response.data;
      return renderTop(response.data, booksPerRow);
    } catch (error) {
      console.log(error);
    }
  } else {
    return renderTop(savedFetch, booksPerRow);
  }
  
};

//Fatch for categories
export const fetchCategories = async () => {
  const endpoint = '/books/category-list/';
  const fetchUrl = BASEURL + endpoint;

  try {
    const response = await axios.get(fetchUrl);
    return renderCategories(response.data);
  } catch (error) {
    console.log(error);
  }
};

//Fatch for categories books
export const fetchCategory = async categoryName => {
  const endpoint = '/books/category/';
  const fetchUrl = BASEURL + endpoint;
  const params = {
    category: categoryName,
  };

  try {
    const response = await axios.get(fetchUrl, { params });
    return renderCategory(response.data, categoryName);
  } catch (error) {
    console.log(error);
  }
};

// повертає дані однієї книги по id
export const fetchBookById = async id => {
  const endpoint = `/books/${id}`;
  const fetchUrl = BASEURL + endpoint;

  try {
    const response = await axios.get(fetchUrl);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
