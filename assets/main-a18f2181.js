import{S as C,a as p}from"./vendor-93e8fa5a.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();new C(".swiper",{direction:"vertical",loop:!1,speed:100,slidesPerView:6,keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{invert:!0},shortSwipes:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});const c={body:document.querySelector("body"),burger:document.querySelector(".header-btn-burgher"),headerNav:document.querySelector(".header-menu"),headerLink:document.querySelectorAll(".header-nav-item-modal"),logo:document.querySelector(".header-logo"),home:document.querySelector(".header-home"),shopping:document.querySelector(".header-shopping"),homeMobal:document.querySelector(".header-home-modal"),shoppingMobal:document.querySelector(".header-shopping-modal")};function E(){c.burger.classList.toggle("active"),c.headerNav.classList.toggle("active"),c.body.classList.toggle("lock")}c.burger.addEventListener("click",E);function m(){localStorage.setItem("isActive","home")}c.logo.addEventListener("click",m);c.home.addEventListener("click",m);c.homeMobal.addEventListener("click",m);function y(){localStorage.setItem("isActive","shopping")}c.shopping.addEventListener("click",y);c.shoppingMobal.addEventListener("click",y);window.addEventListener("DOMContentLoaded",()=>{const e=localStorage.getItem("isActive");c.home.classList.add("active"),c.homeMobal.classList.add("active"),e==="home"?(c.home.classList.add("active"),c.shopping.classList.remove("active"),c.homeMobal.classList.add("active"),c.shoppingMobal.classList.remove("active")):e==="shopping"&&(c.home.classList.remove("active"),c.shopping.classList.add("active"),c.homeMobal.classList.remove("active"),c.shoppingMobal.classList.add("active"))});const $=(e,o)=>`<div class="books-container"><h2 class="books-title">Best Sellers Books</h2>${e.map(n=>{const s=n.list_name,a=L(n.books.slice(0,o));return`<div class="books-category-container">
        <h3 class="books-category-title">${s}</h3>
        <ul class="books-list">${a}</ul>
        <div class="books-btn-container">
          <button data-catname="${s}" type="button" class="books-btn">see more</button>
        </div>
      </div>`}).join("")}</div>`,q=e=>`<li class="categories-list">
  <a href="#" data-catname="" class="categories-nav active">All categories</a>
  </li>${e.map(t=>`<li class="categories-list">
      <a href="#" data-catname="${t.list_name}" class="categories-nav">${t.list_name}</a>
    </li>`).join("")}`,M=(e,o)=>{const t=L(e);return`<div class="books-container">
    <h2 class="books-title">${o}</h2>
    <div class="books-category-container">
      <ul class="books-list">${t}</ul>
    </div>
  </div>`};function L(e){return e.map(t=>{const{_id:n,book_image:s,title:a,author:i}=t;return`<li class="books-item">
        <div class="books-wrapper">
          <img
            class="books-img"
            src="${s}"
            alt="${a}"
          />
          <a href="#" data-id="${n}" class="books-overlay">
            <p class="books-overlay-text">QUICK VIEW</p>
          </a>
        </div>
        <div class="books-info">
          <p class="books-info-title">${a}</p>
          <p class="books-info-author">${i}</p>
        </div>
      </li>`}).join("")}const g="https://books-backend.p.goit.global",w=async e=>{const t=g+"/books/top-books/";try{const n=await p.get(t);return $(n.data,e)}catch(n){console.log(n)}},T=async()=>{const o=g+"/books/category-list/";try{const t=await p.get(o);return q(t.data)}catch(t){console.log(t)}},B=async e=>{const t=g+"/books/category/",n={category:e};try{const s=await p.get(t,{params:n});return M(s.data,e)}catch(s){console.log(s)}},d=document.querySelector(".books-container"),l=document.querySelector(".categories-menu");async function b(){const e=window.innerWidth,o=k(e),t=await w(o);d.innerHTML=t,h()}async function I(){const e=await T();l.innerHTML=e}async function f(e){const o=await B(e);d.innerHTML=o,h()}function h(){const e=document.querySelector(".books-title"),o=e.textContent.split(" "),t=o.pop(),n=o.join(" ")+(o.length>0?` <span  class="books-title-color">${t}</span>`:t);e.innerHTML=n}function k(e){let o=3;return e>=1440&&(o=5),e<768&&(o=1),o}const A=window.innerWidth;let v=k(A);async function H(){if(!document.querySelector(".categories-nav.active").dataset.catname){const o=window.innerWidth,t=k(o);if(v!==t){v=t;const n=await w(t);d.innerHTML=n,h()}}}d&&(b(),I(),l.addEventListener("click",e=>{e.preventDefault();const o=e.target;if(o.tagName==="A"){const t=o.dataset.catname;l.querySelector(".active").classList.remove("active"),o.classList.add("active"),t?f(t):b()}}),d.addEventListener("click",e=>{e.preventDefault();const o=e.target;if(o.classList.contains("books-btn")){const t=o.dataset.catname;l.querySelector(".active").classList.remove("active"),l.querySelector('[data-catname="'+t+'"]').classList.add("active"),f(t)}}),window.addEventListener("resize",H));const O="https://books-backend.p.goit.global",W=async e=>{const o=`/books/${e}`,t=O+o;try{return(await p.get(t)).data}catch(n){console.log(n)}};setTimeout(()=>{P()},3e3);async function P(){document.querySelector(".books-container").addEventListener("click",o);async function o(t){const n=document.querySelector(".popup-book");if(n.innerHTML="",t.target===t.target.closest(".books-overlay")){const s=t.target.dataset.id,a=await W(s),i=N(a);n.insertAdjacentHTML("beforeend",i),x()}}}async function x(){const e=document.querySelector(".popup-backdrop"),o=document.querySelector(".popup-close-btn");t(),e.addEventListener("click",s),document.addEventListener("keydown",a),o.addEventListener("click",n);function t(){e.classList.add("is-active")}function n(){i(),o.removeEventListener("click",n)}function s(r){r.target===r.currentTarget&&(i(),e.removeEventListener("click",s))}function a(r){r.keyCode===27&&(i(),document.removeEventListener("keydown",a))}function i(){e.classList.remove("is-active")}}function N(e){const{author:o,title:t,book_image:n,buy_links:s,description:a=""}=e,[i,r]=s;return`
      <div class="popup-wrap-img">
        <img
          class="popup-book-image"
          src="${n}"
          alt="обкладинка"
        />
      </div>
      <div class="popup-book-content">
        <h2 class="popup-book-title">${t}</h2>
        <h3 class="popup-book-author">${o}</h3>
        <p class="popup-book-review">
          ${a}
        </p>
        <ul class="popup-shopping-links">
          <li>
            <a
              href="${i.url}"
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
    
    `}const S=document.querySelector(".toggle-checkbox");document.addEventListener("DOMContentLoaded",()=>{localStorage.getItem("theme")==="theme-dark"&&(u("theme-dark"),S.checked=!0)});function u(e){localStorage.setItem("theme",e),document.documentElement.setAttribute("data-theme",e)}S.addEventListener("click",()=>{localStorage.getItem("theme")==="theme-dark"?u("theme-light"):u("theme-dark")});
//# sourceMappingURL=main-a18f2181.js.map
