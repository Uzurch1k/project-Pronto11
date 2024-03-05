import{S as x,a as m,s as C,P as _}from"./vendor-7a68f705.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function o(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(n){if(n.ep)return;n.ep=!0;const a=o(n);fetch(n.href,a)}})();const $=document.querySelector(".toggle-checkbox");document.addEventListener("DOMContentLoaded",()=>{localStorage.getItem("theme")==="theme-dark"&&(v("theme-dark"),$.checked=!0)});function v(e){localStorage.setItem("theme",e),document.documentElement.setAttribute("data-theme",e)}$.addEventListener("click",()=>{localStorage.getItem("theme")==="theme-dark"?v("theme-light"):v("theme-dark")});const y=document.querySelector(".scroll-up");window.addEventListener("scroll",()=>{window.scrollY>120?y.classList.add("show"):y.classList.remove("show")});y.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const i={body:document.querySelector("body"),burger:document.querySelector(".header-btn-burgher"),headerNav:document.querySelector(".header-menu"),headerLink:document.querySelectorAll(".header-nav-item-modal"),logo:document.querySelector(".header-logo"),home:document.querySelector(".header-home"),shopping:document.querySelector(".header-shopping"),homeMobal:document.querySelector(".header-home-modal"),shoppingMobal:document.querySelector(".header-shopping-modal")};function R(){i.burger.classList.toggle("active"),i.headerNav.classList.toggle("active"),i.body.classList.toggle("lock")}i.burger.addEventListener("click",R);function S(){localStorage.setItem("isActive","home")}i.logo.addEventListener("click",S);i.home.addEventListener("click",S);i.homeMobal.addEventListener("click",S);function N(){localStorage.setItem("isActive","shopping")}i.shopping.addEventListener("click",N);i.shoppingMobal.addEventListener("click",N);window.addEventListener("DOMContentLoaded",()=>{const e=localStorage.getItem("isActive");i.home.classList.add("active"),i.homeMobal.classList.add("active"),e==="home"?(i.home.classList.add("active"),i.shopping.classList.remove("active"),i.homeMobal.classList.add("active"),i.shoppingMobal.classList.remove("active")):e==="shopping"&&(i.home.classList.remove("active"),i.shopping.classList.add("active"),i.homeMobal.classList.remove("active"),i.shoppingMobal.classList.add("active"))});const d=new x(".swiper",{direction:"vertical",loop:!1,initialSlide:0,speed:500,slidesPerView:6,effect:"slide",rewind:!0,breakpoints:{292:{slidesPerView:6}},spaceBetween:20,keyboard:{enabled:!0,onlyInViewport:!0}});d.allowTouchMove=!1;const f=document.querySelector(".swiper-button");f.addEventListener("click",function(){d.activeIndex===2?f.classList.add("rotate"):f.classList.remove("rotate"),d.activeIndex<d.slides.length-1?d.slideNext():d.slideTo(0)});const M=(e,t)=>`<div class="books-container"><h2 class="books-title">Best Sellers Books</h2>${e.map(s=>{const n=s.list_name,a=H(s.books.slice(0,t));return`<div class="books-category-container">
        <h3 class="books-category-title">${n}</h3>
        <ul class="books-list">${a}</ul>
        <div class="books-btn-container">
          <button data-catname="${n}" type="button" class="books-btn">see more</button>
        </div>
      </div>`}).join("")}</div>`,F=e=>`<li class="categories-list">
  <a href="#" data-catname="" class="categories-nav active">All categories</a>
  </li>${e.sort((o,s)=>o.list_name<s.list_name?-1:o.list_name>s.list_name?1:0).map(o=>`<li class="categories-list">
      <a href="#" data-catname="${o.list_name}" class="categories-nav">${o.list_name}</a>
    </li>`).join("")}`,J=(e,t)=>{const o=H(e);return`<div class="books-container">
    <h2 class="books-title">${t}</h2>
    <div class="books-category-container">
      <ul class="books-list">${o}</ul>
    </div>
  </div>`};function H(e){return e.map(o=>{const{_id:s,book_image:n,title:a,author:c}=o;return`<li class="books-item">
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
      </li>`}).join("")}const h="https://books-backend.p.goit.global";let k=JSON.parse(sessionStorage.getItem("savedfetch"))||"";const j=async e=>{if(k)return M(k,e);{const o=h+"/books/top-books/";try{const s=await m.get(o);return sessionStorage.setItem("savedfetch",JSON.stringify(s.data)),k=s.data,M(s.data,e)}catch(s){console.log(s)}}},V=async()=>{const t=h+"/books/category-list/";try{const o=await m.get(t);return F(o.data)}catch(o){console.log(o)}},W=async e=>{const o=h+"/books/category/",s={category:e};try{const n=await m.get(o,{params:s});return J(n.data,e)}catch(n){console.log(n)}},A=async e=>{const t=`/books/${e}`,o=h+t;try{return(await m.get(o)).data}catch(s){console.log(s)}},U=async e=>{try{const t=await A(e);let o=JSON.parse(localStorage.getItem("shoppinglist"))||[];o.push(t),localStorage.setItem("shoppinglist",JSON.stringify(o))}catch(t){console.error(t)}},G=async e=>{const o=(JSON.parse(localStorage.getItem("shoppinglist"))||[]).filter(s=>s._id!==e);localStorage.setItem("shoppinglist",JSON.stringify(o))};async function z(){const e=document.querySelector(".books-container");e&&e.addEventListener("click",t);async function t(o){if(o.target.classList.contains("books-overlay")){const s=o.target.dataset.id,n=await A(s);K(n)}}}async function K(e){const t=document.querySelector(".popup-backdrop"),o=document.querySelector(".popup-window");o.innerHTML="";const s=Y(e);o.insertAdjacentHTML("beforeend",s);const n=document.querySelector(".popup-close-btn");c(),Q(),X(),t.addEventListener("click",g),document.addEventListener("keydown",T),n.addEventListener("click",u),document.addEventListener("keydown",a);function a(r){r.keyCode===32&&r.preventDefault()}function c(){t.classList.add("is-active"),document.body.classList.add("modal-open")}function u(){b(),n.removeEventListener("click",u),document.removeEventListener("keydown",a)}function g(r){r.target===r.currentTarget&&(b(),t.removeEventListener("click",g),document.removeEventListener("keydown",a))}function T(r){r.keyCode===27&&(b(),document.removeEventListener("keydown",T),document.removeEventListener("keydown",a))}function b(){t.classList.remove("is-active"),document.body.classList.remove("modal-open")}}function Y(e){const{_id:t,author:o,title:s,book_image:n,buy_links:a,description:c=""}=e,[u,g]=a;return`<button class="popup-close-btn">
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
              href="${u.url}"
              target="blank"
              rel="nofollow noopener noreferrer"
              aria-label="Link to shop"
              class="amazon popup-shopping-links-icon"
            >
              <img
                src="./img/shopping/amazon.png"
                class="popup-shopping-links-icon"
                alt="Logo of shop"
                width="62"
              />
            </a>
          </li>
          <li>
            <a
              href="${g.url}"
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
    </div>`}function Q(){const e=document.querySelector(".popup-book-btn-add-to-shopinglist"),t=e.dataset.id;(JSON.parse(localStorage.getItem("shoppinglist"))||[]).map(n=>n._id).includes(t)?(e.textContent="REMOVE FROM THE SHOPPING LIST",e.insertAdjacentHTML("afterend",D())):e.textContent="ADD TO SHOPPING LIST"}function X(){const e=document.querySelector(".popup-book-btn-add-to-shopinglist"),t=e.dataset.id;e.addEventListener("click",o);function o(){(JSON.parse(localStorage.getItem("shoppinglist"))||[]).map(a=>a._id).includes(t)?(G(t),document.querySelector(".under-btn-text").remove(),e.textContent="ADD TO SHOPPING LIST"):(U(t),e.textContent="REMOVE FROM THE SHOPPING LIST",e.insertAdjacentHTML("afterend",D()))}}function D(){return`
      <p class="under-btn-text">
        Congratulations! You have added the book to the shopping list. To
        delete, press the button "Remove from the shopping list".
      </p>
    `}const l=document.querySelector(".books-container"),p=document.querySelector(".categories-menu");let O;async function L(){I();const e=window.innerWidth,t=E(e),o=await j(t);l.innerHTML=o,O||(z(),O=!0),w()}async function Z(){const e=await V();p.innerHTML=e}async function q(e){I();const t=await W(e);l.innerHTML=t,w()}async function w(){const e=document.querySelector(".books-title"),t=e.textContent.split(" "),o=t.pop(),s=t.join(" ")+(t.length>0?` <span  class="books-title-color">${o}</span>`:o);e.innerHTML=s}function E(e){let t=5;return e>=1440&&(t=5),e>=768&&e<1440&&(t=3),e<768&&(t=1),t}const ee=window.innerWidth;let B=E(ee);async function te(){if(!document.querySelector(".categories-nav.active").dataset.catname){const t=window.innerWidth,o=E(t);B!==o&&(B=o,I(),await L(),w())}}l&&(L(),Z(),p.addEventListener("click",e=>{e.preventDefault();const t=e.target;if(t.tagName==="A"){const o=t.dataset.catname;p.querySelector(".active").classList.remove("active"),t.classList.add("active"),C(l,{offset:-24,duration:500}),o?q(o):L()}}),l.addEventListener("click",e=>{e.preventDefault();const t=e.target;if(t.classList.contains("books-btn")){const o=t.dataset.catname;p.querySelector(".active").classList.remove("active"),p.querySelector('[data-catname="'+o+'"]').classList.add("active"),C(l,{offset:-24,duration:700}).on("end",()=>{q(o)})}}),window.addEventListener("resize",te));function I(){l.innerHTML='<li class="loader-container"><span class="loader"></span></li>'}const P=document.querySelector("#pagination-wrapper");function oe(){return matchMedia("(min-width: 768px)").matches?3:2}const se=oe(),ne={totalItems:10,itemsPerPage:3,visiblePages:se,centerAlign:!1,template:{page:'<a href="#" class="tui-page-btn"><span class="number-text">{{page}}</span></a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}} custom-class-{{type}}"><span class="tui-ico-{{type}}"></span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}} custom-class-{{type}}"><span class="tui-ico-{{type}}"></span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip custom-class-{{type}}"><span class="tui-ico-ellip">...</span></a>'}};function ae(){P!==null&&new _(P,ne)}ae();
//# sourceMappingURL=main-0c9bf7d0.js.map
