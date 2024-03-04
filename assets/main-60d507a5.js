import{S as q,a as u,s as O,P}from"./vendor-7a68f705.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function o(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(n){if(n.ep)return;n.ep=!0;const a=o(n);fetch(n.href,a)}})();new q(".swiper",{direction:"vertical",loop:!1,speed:100,slidesPerView:6,keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{invert:!0},shortSwipes:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});const i={body:document.querySelector("body"),burger:document.querySelector(".header-btn-burgher"),headerNav:document.querySelector(".header-menu"),headerLink:document.querySelectorAll(".header-nav-item-modal"),logo:document.querySelector(".header-logo"),home:document.querySelector(".header-home"),shopping:document.querySelector(".header-shopping"),homeMobal:document.querySelector(".header-home-modal"),shoppingMobal:document.querySelector(".header-shopping-modal")};function B(){i.burger.classList.toggle("active"),i.headerNav.classList.toggle("active"),i.body.classList.toggle("lock")}i.burger.addEventListener("click",B);function h(){localStorage.setItem("isActive","home")}i.logo.addEventListener("click",h);i.home.addEventListener("click",h);i.homeMobal.addEventListener("click",h);function w(){localStorage.setItem("isActive","shopping")}i.shopping.addEventListener("click",w);i.shoppingMobal.addEventListener("click",w);window.addEventListener("DOMContentLoaded",()=>{const e=localStorage.getItem("isActive");i.home.classList.add("active"),i.homeMobal.classList.add("active"),e==="home"?(i.home.classList.add("active"),i.shopping.classList.remove("active"),i.homeMobal.classList.add("active"),i.shoppingMobal.classList.remove("active")):e==="shopping"&&(i.home.classList.remove("active"),i.shopping.classList.add("active"),i.homeMobal.classList.remove("active"),i.shoppingMobal.classList.add("active"))});const $=(e,t)=>`<div class="books-container"><h2 class="books-title">Best Sellers Books</h2>${e.map(s=>{const n=s.list_name,a=E(s.books.slice(0,t));return`<div class="books-category-container">
        <h3 class="books-category-title">${n}</h3>
        <ul class="books-list">${a}</ul>
        <div class="books-btn-container">
          <button data-catname="${n}" type="button" class="books-btn">see more</button>
        </div>
      </div>`}).join("")}</div>`,H=e=>`<li class="categories-list">
  <a href="#" data-catname="" class="categories-nav active">All categories</a>
  </li>${e.map(o=>`<li class="categories-list">
      <a href="#" data-catname="${o.list_name}" class="categories-nav">${o.list_name}</a>
    </li>`).join("")}`,A=(e,t)=>{const o=E(e);return`<div class="books-container">
    <h2 class="books-title">${t}</h2>
    <div class="books-category-container">
      <ul class="books-list">${o}</ul>
    </div>
  </div>`};function E(e){return e.map(o=>{const{_id:s,book_image:n,title:a,author:c}=o;return`<li class="books-item">
        <div class="books-wrapper">
          <img
            class="books-img"
            src="${n}"
            alt="${a}"
          />
          <a href="#" data-id="${s}" class="books-overlay">
            QUICK VIEW
          </a>
        </div>
        <div class="books-info">
          <p class="books-info-title">${a}</p>
          <p class="books-info-author">${c}</p>
        </div>
      </li>`}).join("")}const g="https://books-backend.p.goit.global",C=async e=>{const o=g+"/books/top-books/";try{const s=await u.get(o);return $(s.data,e)}catch(s){console.log(s)}},N=async()=>{const t=g+"/books/category-list/";try{const o=await u.get(t);return H(o.data)}catch(o){console.log(o)}},D=async e=>{const o=g+"/books/category/",s={category:e};try{const n=await u.get(o,{params:s});return A(n.data,e)}catch(n){console.log(n)}},T=async e=>{const t=`/books/${e}`,o=g+t;try{return(await u.get(o)).data}catch(s){console.log(s)}},l=document.querySelector(".books-container"),p=document.querySelector(".categories-menu");async function v(){f();const e=window.innerWidth,t=k(e),o=await C(t);l.innerHTML=o,b()}async function x(){const e=await N();p.innerHTML=e}async function y(e){f();const t=await D(e);l.innerHTML=t,b()}function b(){const e=document.querySelector(".books-title"),t=e.textContent.split(" "),o=t.pop(),s=t.join(" ")+(t.length>0?` <span  class="books-title-color">${o}</span>`:o);e.innerHTML=s}function k(e){let t=3;return e>=1440&&(t=5),e<768&&(t=1),t}const R=window.innerWidth;let L=k(R);async function _(){if(!document.querySelector(".categories-nav.active").dataset.catname){const t=window.innerWidth,o=k(t);if(L!==o){f(),L=o;const s=await C(o);l.innerHTML=s,b()}}}l&&(v(),x(),p.addEventListener("click",e=>{e.preventDefault();const t=e.target;if(t.tagName==="A"){const o=t.dataset.catname;p.querySelector(".active").classList.remove("active"),t.classList.add("active"),o?y(o):v()}}),l.addEventListener("click",e=>{e.preventDefault();const t=e.target;if(t.classList.contains("books-btn")){const o=t.dataset.catname;p.querySelector(".active").classList.remove("active"),p.querySelector('[data-catname="'+o+'"]').classList.add("active"),O(l,{offset:-24,duration:1e3}).on("end",()=>{y(o)})}}),window.addEventListener("resize",_));function f(){l.innerHTML='<li class="loader-container"><span class="loader"></span></li>'}const S=document.querySelector("#pagination-wrapper");function W(){return matchMedia("(min-width: 768px)").matches?3:2}const j=W(),U={totalItems:10,itemsPerPage:3,visiblePages:j,centerAlign:!1,template:{page:'<a href="#" class="tui-page-btn"><span class="number-text">{{page}}</span></a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}} custom-class-{{type}}"><span class="tui-ico-{{type}}"></span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}} custom-class-{{type}}"><span class="tui-ico-{{type}}"></span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip custom-class-{{type}}"><span class="tui-ico-ellip">...</span></a>'}};function V(){S!==null&&new P(S,U)}V();const F=async e=>{try{const t=await T(e);let o=JSON.parse(localStorage.getItem("shoppinglist"))||[];o.push(t),localStorage.setItem("shoppinglist",JSON.stringify(o))}catch(t){console.error(t)}};setTimeout(()=>{G()},3e3);async function G(){const e=document.querySelector(".books-container");e&&e.addEventListener("click",t);async function t(o){const s=document.querySelector(".popup-window");if(s.innerHTML="",o.target.classList.contains("books-overlay")){const n=o.target.dataset.id,a=await T(n),c=J(a);s.insertAdjacentHTML("beforeend",c),z()}}}async function z(){const e=document.querySelector(".popup-backdrop"),t=document.querySelector(".popup-close-btn");s(),K(),Q(),e.addEventListener("click",a),document.addEventListener("keydown",c),t.addEventListener("click",n),document.addEventListener("keydown",o);function o(r){r.keyCode===32&&r.preventDefault()}function s(){e.classList.add("is-active")}function n(){d(),t.removeEventListener("click",n),document.removeEventListener("keydown",o)}function a(r){r.target===r.currentTarget&&(d(),e.removeEventListener("click",a),document.removeEventListener("keydown",o))}function c(r){r.keyCode===27&&(d(),document.removeEventListener("keydown",c),document.removeEventListener("keydown",o))}function d(){e.classList.remove("is-active")}}function J(e){const{_id:t,author:o,title:s,book_image:n,buy_links:a,description:c=""}=e,[d,r]=a;return`
<button class="popup-close-btn">
      <svg class="popup-close-btn-icon" width="28" height="28">
        <use href="./img/icons.svg#icon-header-close"></use>
      </svg>
    </button>
    <div class="popup-book">
      <div class="popup-wrap-img">
        <img class="popup-book-image" src="${n}" alt="обкладинка" />
      </div>
      <div class="popup-book-content">
        <h2 class="popup-book-title">${s}</h2>
        <h3 class="popup-book-author">${o}</h3>
        <p class="popup-book-review">${c}</p>
        <ul class="popup-shopping-links">
          <li>
            <a
              href="${d.url}"
              target="blank"
              rel="nofollow noopener noreferrer"
              aria-label="Link to shop"
              class="amazon popup-shopping-links-icon"
            >
              <img
                class="popup-shopping-links-icon"
                src="./img/shopping/amazon.png"
                alt="Logo of shop"
                width="62"
              />
            </a>
          </li>
          <li>
            <a
              href="${r.url}"
              target="blank"
              rel="nofollow noopener noreferrer"
              aria-label="Link to shop"
              class="book popup-shopping-links-icon"
            >
              <img
                src="./img/shopping/book-apple.png"
                alt="Logo of shop"
                width="33"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="popup-book-btn-add">
      <button
        type="button"
        class="popup-book-btn-add-to-shopinglist"
        data-id="${t}"
        id="add"
        aria-label="Add card to shopping list"
      ></button>
    </div>

    `}function K(){const e=document.querySelector(".popup-book-btn-add-to-shopinglist"),t=e.dataset.id;(JSON.parse(localStorage.getItem("shoppinglist"))||[]).map(n=>n._id).includes(t)?(e.textContent="REMOVE FROM THE SHOPPING LIST",e.insertAdjacentHTML("afterend",I())):e.textContent="ADD TO SHOPPING LIST"}function Q(){const e=document.querySelector(".popup-book-btn-add-to-shopinglist"),t=e.dataset.id;e.addEventListener("click",o);function o(){(JSON.parse(localStorage.getItem("shoppinglist"))||[]).map(a=>a._id).includes(t)?(document.querySelector(".under-btn-text").remove(),e.textContent="ADD TO SHOPPING LIST"):(F(t),e.textContent="REMOVE FROM THE SHOPPING LIST",e.insertAdjacentHTML("afterend",I()))}}function I(){return`
      <p class="under-btn-text">
        Congratulations! You have added the book to the shopping list. To
        delete, press the button "Remove from the shopping list".
      </p>
    `}const M=document.querySelector(".toggle-checkbox");document.addEventListener("DOMContentLoaded",()=>{localStorage.getItem("theme")==="theme-dark"&&(m("theme-dark"),M.checked=!0)});function m(e){localStorage.setItem("theme",e),document.documentElement.setAttribute("data-theme",e)}M.addEventListener("click",()=>{localStorage.getItem("theme")==="theme-dark"?m("theme-light"):m("theme-dark")});
//# sourceMappingURL=main-60d507a5.js.map
