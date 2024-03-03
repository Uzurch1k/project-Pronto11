import{S as M,a as p,P as q}from"./vendor-b0d3e993.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=o(s);fetch(s.href,a)}})();new M(".swiper",{direction:"vertical",loop:!1,speed:100,slidesPerView:6,keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{invert:!0},shortSwipes:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});const i={body:document.querySelector("body"),burger:document.querySelector(".header-btn-burgher"),headerNav:document.querySelector(".header-menu"),headerLink:document.querySelectorAll(".header-nav-item-modal"),logo:document.querySelector(".header-logo"),home:document.querySelector(".header-home"),shopping:document.querySelector(".header-shopping"),homeMobal:document.querySelector(".header-home-modal"),shoppingMobal:document.querySelector(".header-shopping-modal")};function $(){i.burger.classList.toggle("active"),i.headerNav.classList.toggle("active"),i.body.classList.toggle("lock")}i.burger.addEventListener("click",$);function m(){localStorage.setItem("isActive","home")}i.logo.addEventListener("click",m);i.home.addEventListener("click",m);i.homeMobal.addEventListener("click",m);function w(){localStorage.setItem("isActive","shopping")}i.shopping.addEventListener("click",w);i.shoppingMobal.addEventListener("click",w);window.addEventListener("DOMContentLoaded",()=>{const e=localStorage.getItem("isActive");i.home.classList.add("active"),i.homeMobal.classList.add("active"),e==="home"?(i.home.classList.add("active"),i.shopping.classList.remove("active"),i.homeMobal.classList.add("active"),i.shoppingMobal.classList.remove("active")):e==="shopping"&&(i.home.classList.remove("active"),i.shopping.classList.add("active"),i.homeMobal.classList.remove("active"),i.shoppingMobal.classList.add("active"))});const T=(e,t)=>`<div class="books-container"><h2 class="books-title">Best Sellers Books</h2>${e.map(n=>{const s=n.list_name,a=S(n.books.slice(0,t));return`<div class="books-category-container">
        <h3 class="books-category-title">${s}</h3>
        <ul class="books-list">${a}</ul>
        <div class="books-btn-container">
          <button data-catname="${s}" type="button" class="books-btn">see more</button>
        </div>
      </div>`}).join("")}</div>`,B=e=>`<li class="categories-list">
  <a href="#" data-catname="" class="categories-nav active">All categories</a>
  </li>${e.map(o=>`<li class="categories-list">
      <a href="#" data-catname="${o.list_name}" class="categories-nav">${o.list_name}</a>
    </li>`).join("")}`,P=(e,t)=>{const o=S(e);return`<div class="books-container">
    <h2 class="books-title">${t}</h2>
    <div class="books-category-container">
      <ul class="books-list">${o}</ul>
    </div>
  </div>`};function S(e){return e.map(o=>{const{_id:n,book_image:s,title:a,author:c}=o;return`<li class="books-item">
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
      </li>`}).join("")}const u="https://books-backend.p.goit.global",C=async e=>{const o=u+"/books/top-books/";try{const n=await p.get(o);return T(n.data,e)}catch(n){console.log(n)}},I=async()=>{const t=u+"/books/category-list/";try{const o=await p.get(t);return B(o.data)}catch(o){console.log(o)}},A=async e=>{const o=u+"/books/category/",n={category:e};try{const s=await p.get(o,{params:n});return P(s.data,e)}catch(s){console.log(s)}},H=async e=>{const t=`/books/${e}`,o=u+t;try{return(await p.get(o)).data}catch(n){console.log(n)}},l=document.querySelector(".books-container"),d=document.querySelector(".categories-menu");async function f(){k();const e=window.innerWidth,t=b(e),o=await C(t);l.innerHTML=o,h()}async function O(){const e=await I();d.innerHTML=e}async function v(e){k();const t=await A(e);l.innerHTML=t,h()}function h(){const e=document.querySelector(".books-title"),t=e.textContent.split(" "),o=t.pop(),n=t.join(" ")+(t.length>0?` <span  class="books-title-color">${o}</span>`:o);e.innerHTML=n}function b(e){let t=3;return e>=1440&&(t=5),e<768&&(t=1),t}const N=window.innerWidth;let y=b(N);async function W(){if(!document.querySelector(".categories-nav.active").dataset.catname){const t=window.innerWidth,o=b(t);if(y!==o){k(),y=o;const n=await C(o);l.innerHTML=n,h()}}}l&&(f(),O(),d.addEventListener("click",e=>{e.preventDefault();const t=e.target;if(t.tagName==="A"){const o=t.dataset.catname;d.querySelector(".active").classList.remove("active"),t.classList.add("active"),o?v(o):f()}}),l.addEventListener("click",e=>{e.preventDefault();const t=e.target;if(t.classList.contains("books-btn")){const o=t.dataset.catname;d.querySelector(".active").classList.remove("active"),d.querySelector('[data-catname="'+o+'"]').classList.add("active"),v(o)}}),window.addEventListener("resize",W));function k(){l.innerHTML='<li class="loader-container"><span class="loader"></span></li>'}const L=document.querySelector("#pagination-wrapper");function x(){return matchMedia("(min-width: 768px)").matches?3:2}const _=x(),D={totalItems:10,itemsPerPage:3,visiblePages:_,centerAlign:!1,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}} custom-class-{{type}}"><span class="tui-ico-{{type}}"></span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}} custom-class-{{type}}"><span class="tui-ico-{{type}}"></span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip custom-class-{{type}}"><span class="tui-ico-ellip">...</span></a>'}};function R(){L!==null&&new q(L,D)}R();setTimeout(()=>{U()},3e3);async function U(){document.querySelector(".books-container").addEventListener("click",t);async function t(o){const n=document.querySelector(".popup-book");if(n.innerHTML="",o.target===o.target.closest(".books-overlay")){const s=o.target.dataset.id,a=await H(s),c=z(a);n.insertAdjacentHTML("beforeend",c),j()}}}async function j(){const e=document.querySelector(".popup-backdrop"),t=document.querySelector(".popup-close-btn");o(),e.addEventListener("click",s),document.addEventListener("keydown",a),t.addEventListener("click",n);function o(){e.classList.add("is-active")}function n(){c(),t.removeEventListener("click",n)}function s(r){r.target===r.currentTarget&&(c(),e.removeEventListener("click",s))}function a(r){r.keyCode===27&&(c(),document.removeEventListener("keydown",a))}function c(){e.classList.remove("is-active")}}function z(e){const{author:t,title:o,book_image:n,buy_links:s,description:a=""}=e,[c,r]=s;return`
      <div class="popup-wrap-img">
        <img
          class="popup-book-image"
          src="${n}"
          alt="обкладинка"
        />
      </div>
      <div class="popup-book-content">
        <h2 class="popup-book-title">${o}</h2>
        <h3 class="popup-book-author">${t}</h3>
        <p class="popup-book-review">
          ${a}
        </p>
        <ul class="popup-shopping-links">
          <li>
            <a
              href="${c.url}"
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
    
    `}const E=document.querySelector(".toggle-checkbox");document.addEventListener("DOMContentLoaded",()=>{localStorage.getItem("theme")==="theme-dark"&&(g("theme-dark"),E.checked=!0)});function g(e){localStorage.setItem("theme",e),document.documentElement.setAttribute("data-theme",e)}E.addEventListener("click",()=>{localStorage.getItem("theme")==="theme-dark"?g("theme-light"):g("theme-dark")});
//# sourceMappingURL=main-db9db757.js.map
