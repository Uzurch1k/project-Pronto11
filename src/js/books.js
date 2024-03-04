import { fetchGeneral, fetchCategories, fetchCategory } from './fetch-api';
import scrollToElement  from 'scroll-to-element';


//Containers
const booksContainer = document.querySelector('.books-container');
const catsContainer = document.querySelector('.categories-menu');


// ==============================================================
//Function for display books
async function displayTop() {
    addingLoader();
    const windowWidth = window.innerWidth;
    const booksPerRowForDisplay = booksPerRowFunc(windowWidth);
    const renderedTop = await fetchGeneral(booksPerRowForDisplay);
   
    booksContainer.innerHTML = renderedTop;

    wrapLastWord();
};


// ==============================================================
//Function for display categories
async function displayCategories() {
    const renderedCats = await fetchCategories();

    catsContainer.innerHTML = renderedCats;
};


// ==============================================================
//Function for display category books
async function displayCategory(catName) {
    addingLoader();

    const renderedCat = await fetchCategory(catName);

     booksContainer.innerHTML = renderedCat;
     wrapLastWord();
}

// ==============================================================
//Function for wrapp last title word
async function wrapLastWord() {
    const title = document.querySelector('.books-title');
    const textContent = title.textContent.split(" ");
    const lastWord = textContent.pop();

    const updatedContent = textContent.join(" ") + (textContent.length > 0 ? ` <span  class="books-title-color">${lastWord}</span>` : lastWord);

    title.innerHTML = updatedContent;
}


//Fontiono for detectiong books per row
function booksPerRowFunc(windowWith) {
    let booksCount = 5;

    if(windowWith >= 1440) {
        booksCount = 5;
    } 

    if(windowWith >= 768 && windowWith < 1440) {
        booksCount = 3;
    } 
    
    if(windowWith < 768) {
        booksCount = 1;
    }

    return booksCount;
}


//function for change books display
const windowWidthStart = window.innerWidth;
let ctrlBreikpoint = booksPerRowFunc(windowWidthStart);

async function changeTopDisplay() {
    const isAllCats = document.querySelector('.categories-nav.active').dataset.catname;

    if(!isAllCats) {
        const windowWidth = window.innerWidth;
        const booksPerRow = booksPerRowFunc(windowWidth);

        if(ctrlBreikpoint !== booksPerRow) {
            ctrlBreikpoint = booksPerRow;

            addingLoader();
            await displayTop();
            wrapLastWord();
        }
    }
}



// ==============================================================
if(booksContainer) {
    displayTop();
    displayCategories();

    catsContainer.addEventListener('click', e => {
        e.preventDefault();
    
        const target = e.target;
    
        if(target.tagName === 'A') {
            const catName = target.dataset.catname;
    
            catsContainer.querySelector('.active').classList.remove('active');
            target.classList.add('active');
            
            scrollToElement(booksContainer, {
                offset: -24,
                duration: 500
            });

            if(catName) {
                displayCategory(catName);
            } else {
                displayTop();
            }
        }
    });
    
    booksContainer.addEventListener('click', e => {
        e.preventDefault();
    
        const target = e.target;
    
        if(target.classList.contains('books-btn')) {
            const catName = target.dataset.catname;
    
            catsContainer.querySelector('.active').classList.remove('active');
            catsContainer.querySelector('[data-catname="'+catName+'"]').classList.add('active');
            
            scrollToElement(booksContainer, {
                offset: -24,
                duration: 700
            }).on('end', () => {
                displayCategory(catName);
            });
        }
    });


    window.addEventListener("resize", changeTopDisplay);
}


//Loader function
function addingLoader() {
    booksContainer.innerHTML = '<li class="loader-container"><span class="loader"></span></li>';
}