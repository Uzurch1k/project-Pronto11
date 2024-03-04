import{S as B,a as u,s as y,P}from"./vendor-7a68f705.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=o(s);fetch(s.href,a)}})();new B(".swiper",{direction:"vertical",loop:!1,speed:100,slidesPerView:6,keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{invert:!0},shortSwipes:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});const i={body:document.querySelector("body"),burger:document.querySelector(".header-btn-burgher"),headerNav:document.querySelector(".header-menu"),headerLink:document.querySelectorAll(".header-nav-item-modal"),logo:document.querySelector(".header-logo"),home:document.querySelector(".header-home"),shopping:document.querySelector(".header-shopping"),homeMobal:document.querySelector(".header-home-modal"),shoppingMobal:document.querySelector(".header-shopping-modal")};function $(){i.burger.classList.toggle("active"),i.headerNav.classList.toggle("active"),i.body.classList.toggle("lock")}i.burger.addEventListener("click",$);function b(){localStorage.setItem("isActive","home")}i.logo.addEventListener("click",b);i.home.addEventListener("click",b);i.homeMobal.addEventListener("click",b);function T(){localStorage.setItem("isActive","shopping")}i.shopping.addEventListener("click",T);i.shoppingMobal.addEventListener("click",T);window.addEventListener("DOMContentLoaded",()=>{const e=localStorage.getItem("isActive");i.home.classList.add("active"),i.homeMobal.classList.add("active"),e==="home"?(i.home.classList.add("active"),i.shopping.classList.remove("active"),i.homeMobal.classList.add("active"),i.shoppingMobal.classList.remove("active")):e==="shopping"&&(i.home.classList.remove("active"),i.shopping.classList.add("active"),i.homeMobal.classList.remove("active"),i.shoppingMobal.classList.add("active"))});const H=(e,t)=>`<div class="books-container"><h2 class="books-title">Best Sellers Books</h2>${e.map(n=>{const s=n.list_name,a=C(n.books.slice(0,t));return`<div class="books-category-container">
        <h3 class="books-category-title">${s}</h3>
        <ul class="books-list">${a}</ul>
        <div class="books-btn-container">
          <button data-catname="${s}" type="button" class="books-btn">see more</button>
        </div>
      </div>`}).join("")}</div>`,A=e=>(console.log(e),`<li class="categories-list">
  <a href="#" data-catname="" class="categories-nav active">All categories</a>
  </li>${e.sort((o,n)=>o.list_name<n.list_name?-1:o.list_name>n.list_name?1:0).map(o=>`<li class="categories-list">
      <a href="#" data-catname="${o.list_name}" class="categories-nav">${o.list_name}</a>
    </li>`).join("")}`),N=(e,t)=>{const o=C(e);return`<div class="books-container">
    <h2 class="books-title">${t}</h2>
    <div class="books-category-container">
      <ul class="books-list">${o}</ul>
    </div>
  </div>`};function C(e){return e.map(o=>{const{_id:n,book_image:s,title:a,author:c}=o;return`<li class="books-item">
        <div class="books-wrapper">
          <img
            class="books-img"
            src="${s}"
            alt="${a}"
          />
          <a href="#" data-id="${n}" class="books-overlay">
            QUICK VIEW
          </a>
        </div>
        <div class="books-info">
          <p class="books-info-title">${a}</p>
          <p class="books-info-author">${c}</p>
        </div>
      </li>`}).join("")}const g="https://books-backend.p.goit.global",I=async e=>{const o=g+"/books/top-books/";try{const n=await u.get(o);return H(n.data,e)}catch(n){console.log(n)}},D=async()=>{const t=g+"/books/category-list/";try{const o=await u.get(t);return A(o.data)}catch(o){console.log(o)}},_=async e=>{const o=g+"/books/category/",n={category:e};try{const s=await u.get(o,{params:n});return N(s.data,e)}catch(s){console.log(s)}},M=async e=>{const t=`/books/${e}`,o=g+t;try{return(await u.get(o)).data}catch(n){console.log(n)}},l=document.querySelector(".books-container"),p=document.querySelector(".categories-menu");async function L(){v();const e=window.innerWidth,t=f(e),o=await I(t);l.innerHTML=o,k()}async function x(){const e=await D();p.innerHTML=e}async function S(e){v();const t=await _(e);l.innerHTML=t,k()}function k(){const e=document.querySelector(".books-title"),t=e.textContent.split(" "),o=t.pop(),n=t.join(" ")+(t.length>0?` <span  class="books-title-color">${o}</span>`:o);e.innerHTML=n}function f(e){let t=3;return e>=1440&&(t=5),e<768&&(t=1),t}const R=window.innerWidth;let w=f(R);async function W(){if(!document.querySelector(".categories-nav.active").dataset.catname){const t=window.innerWidth,o=f(t);if(w!==o){v(),w=o;const n=await I(o);l.innerHTML=n,k()}}}l&&(L(),x(),p.addEventListener("click",e=>{e.preventDefault();const t=e.target;if(t.tagName==="A"){const o=t.dataset.catname;p.querySelector(".active").classList.remove("active"),t.classList.add("active"),y(l,{offset:-24,duration:200}),o?S(o):L()}}),l.addEventListener("click",e=>{e.preventDefault();const t=e.target;if(t.classList.contains("books-btn")){const o=t.dataset.catname;p.querySelector(".active").classList.remove("active"),p.querySelector('[data-catname="'+o+'"]').classList.add("active"),y(l,{offset:-24,duration:700}).on("end",()=>{S(o)})}}),window.addEventListener("resize",W));function v(){l.innerHTML='<li class="loader-container"><span class="loader"></span></li>'}const E=document.querySelector("#pagination-wrapper");function j(){return matchMedia("(min-width: 768px)").matches?3:2}const F=j(),J={totalItems:10,itemsPerPage:3,visiblePages:F,centerAlign:!1,template:{page:'<a href="#" class="tui-page-btn"><span class="number-text">{{page}}</span></a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}} custom-class-{{type}}"><span class="tui-ico-{{type}}"></span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}} custom-class-{{type}}"><span class="tui-ico-{{type}}"></span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip custom-class-{{type}}"><span class="tui-ico-ellip">...</span></a>'}};function U(){E!==null&&new P(E,J)}U();const V=async e=>{try{const t=await M(e);let o=JSON.parse(localStorage.getItem("shoppinglist"))||[];o.push(t),localStorage.setItem("shoppinglist",JSON.stringify(o))}catch(t){console.error(t)}},G=async e=>{const o=(JSON.parse(localStorage.getItem("shoppinglist"))||[]).filter(n=>n._id!==e);localStorage.setItem("shoppinglist",JSON.stringify(o))};setTimeout(()=>{z()},3e3);async function z(){const e=document.querySelector(".books-container");e&&e.addEventListener("click",t);async function t(o){const n=document.querySelector(".popup-window");if(n.innerHTML="",o.target.classList.contains("books-overlay")){const s=o.target.dataset.id,a=await M(s),c=Y(a);n.insertAdjacentHTML("beforeend",c),K()}}}async function K(){const e=document.querySelector(".popup-backdrop"),t=document.querySelector(".popup-close-btn");n(),Q(),X(),e.addEventListener("click",a),document.addEventListener("keydown",c),t.addEventListener("click",s),document.addEventListener("keydown",o);function o(r){r.keyCode===32&&r.preventDefault()}function n(){e.classList.add("is-active")}function s(){d(),t.removeEventListener("click",s),document.removeEventListener("keydown",o)}function a(r){r.target===r.currentTarget&&(d(),e.removeEventListener("click",a),document.removeEventListener("keydown",o))}function c(r){r.keyCode===27&&(d(),document.removeEventListener("keydown",c),document.removeEventListener("keydown",o))}function d(){e.classList.remove("is-active")}}function Y(e){const{_id:t,author:o,title:n,book_image:s,buy_links:a,description:c=""}=e,[d,r]=a;return`
<button class="popup-close-btn">
      <svg class="popup-close-btn-icon" width="28" height="28">
        <use href="/img/icons.svg#icon-header-close"></use>
      </svg>
    </button>
    <div class="popup-book">
      <div class="popup-wrap-img">
        <img class="popup-book-image" src="${s}" alt="обкладинка" />
      </div>
      <div class="popup-book-content">
        <h2 class="popup-book-title">${n}</h2>
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
                src="/img/shopping/amazon.png"
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
                src="/img/shopping/book-apple.png"
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

    `}function Q(){const e=document.querySelector(".popup-book-btn-add-to-shopinglist"),t=e.dataset.id;(JSON.parse(localStorage.getItem("shoppinglist"))||[]).map(s=>s._id).includes(t)?(e.textContent="REMOVE FROM THE SHOPPING LIST",e.insertAdjacentHTML("afterend",q())):e.textContent="ADD TO SHOPPING LIST"}function X(){const e=document.querySelector(".popup-book-btn-add-to-shopinglist"),t=e.dataset.id;e.addEventListener("click",o);function o(){(JSON.parse(localStorage.getItem("shoppinglist"))||[]).map(a=>a._id).includes(t)?(G(t),document.querySelector(".under-btn-text").remove(),e.textContent="ADD TO SHOPPING LIST"):(V(t),e.textContent="REMOVE FROM THE SHOPPING LIST",e.insertAdjacentHTML("afterend",q()))}}function q(){return`
      <p class="under-btn-text">
        Congratulations! You have added the book to the shopping list. To
        delete, press the button "Remove from the shopping list".
      </p>
    `}const O=document.querySelector(".toggle-checkbox");document.addEventListener("DOMContentLoaded",()=>{localStorage.getItem("theme")==="theme-dark"&&(m("theme-dark"),O.checked=!0)});function m(e){localStorage.setItem("theme",e),document.documentElement.setAttribute("data-theme",e)}O.addEventListener("click",()=>{localStorage.getItem("theme")==="theme-dark"?m("theme-light"):m("theme-dark")});const h=document.querySelector(".scroll-up");window.addEventListener("scroll",()=>{window.scrollY>120?h.classList.add("show"):h.classList.remove("show")});h.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=main-546e5eb7.js.map
