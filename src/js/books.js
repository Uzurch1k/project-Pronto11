import { fetchGeneral, fetchCategories, fetchCategory } from './fetch-api';


//Books container
const booksContainer = document.querySelector('.books-container');
const catsContainer = document.querySelector('.categories-menu');

// ==============================================================
//Function for display books
export async function displayTop() {
     const renderedTop = await fetchGeneral();

     booksContainer.innerHTML = renderedTop;
     wrapLastWord();
};

displayTop();

// ==============================================================
//Function for display categories
export async function displayCategories() {
    const renderedCats = await fetchCategories();

    catsContainer.innerHTML = renderedCats;
};

displayCategories();

// ==============================================================
catsContainer.addEventListener('click', e => {
    e.preventDefault;

    const target = e.target;

    if(target.tagName === 'A') {
        const catName = target.dataset.catname;
        
        displayCategory(catName);
    }
});

booksContainer.addEventListener('click', e => {
    e.preventDefault;

    const target = e.target;

    if(target.classList.contains('books-btn')) {
        const catName = target.dataset.catname;
        
        displayCategory(catName);
    }
});

//Function for display category books
export async function displayCategory(catName) {
    const renderedCat = await fetchCategory(catName);

     booksContainer.innerHTML = renderedCat;
     wrapLastWord();
}

// ==============================================================



//Function for wrapp last title word
function wrapLastWord() {
    const title = document.querySelector('.books-title');
    const textContent = title.textContent.split(" ");
    const lastWord = textContent.pop();

    const updatedContent = textContent.join(" ") + (textContent.length > 0 ? ` <span>${lastWord}</span>` : lastWord);

    title.innerHTML = updatedContent;
}