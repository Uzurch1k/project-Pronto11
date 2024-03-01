import axios from 'axios';
import { renderTop, renderCategories, renderCategory } from './rendering-books';

const BASEURL = 'https://books-backend.p.goit.global';

export const fetchGeneral = async () => {
    const endpoint = '/books/top-books/'
    const fetchUrl = BASEURL+endpoint;

    try {
        const response = await axios.get(fetchUrl);
        return renderTop(response.data);
    } catch(error) {
        return error;
    }
}


export const fetchCategories = async () => {
    const endpoint = '/books/category-list/'
    const fetchUrl = BASEURL+endpoint;

    try {
        const response = await axios.get(fetchUrl);
        return renderCategories(response.data);
    } catch(error) {
        return error;
    }
}


export const fetchCategory = async (categoryName) => {
    const endpoint = '/books/category/'
    const fetchUrl = BASEURL+endpoint;
    const params = {
        category : categoryName,
    }

    try {
        const response = await axios.get(fetchUrl, {params});
        return renderCategory(response.data);
    } catch(error) {
        console.log(error);
    }
}

// fetchGeneral();
// fetchCategories();
// fetchCategory("Childrens Middle Grade Hardcover");