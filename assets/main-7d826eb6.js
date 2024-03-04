import{S as $,a as g,s as S,P as H}from"./vendor-7a68f705.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function o(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(n){if(n.ep)return;n.ep=!0;const a=o(n);fetch(n.href,a)}})();const i={body:document.querySelector("body"),burger:document.querySelector(".header-btn-burgher"),headerNav:document.querySelector(".header-menu"),headerLink:document.querySelectorAll(".header-nav-item-modal"),logo:document.querySelector(".header-logo"),home:document.querySelector(".header-home"),shopping:document.querySelector(".header-shopping"),homeMobal:document.querySelector(".header-home-modal"),shoppingMobal:document.querySelector(".header-shopping-modal")};function N(){i.burger.classList.toggle("active"),i.headerNav.classList.toggle("active"),i.body.classList.toggle("lock")}i.burger.addEventListener("click",N);function f(){localStorage.setItem("isActive","home")}i.logo.addEventListener("click",f);i.home.addEventListener("click",f);i.homeMobal.addEventListener("click",f);function C(){localStorage.setItem("isActive","shopping")}i.shopping.addEventListener("click",C);i.shoppingMobal.addEventListener("click",C);window.addEventListener("DOMContentLoaded",()=>{const e=localStorage.getItem("isActive");i.home.classList.add("active"),i.homeMobal.classList.add("active"),e==="home"?(i.home.classList.add("active"),i.shopping.classList.remove("active"),i.homeMobal.classList.add("active"),i.shoppingMobal.classList.remove("active")):e==="shopping"&&(i.home.classList.remove("active"),i.shopping.classList.add("active"),i.homeMobal.classList.remove("active"),i.shoppingMobal.classList.add("active"))});const p=new $(".swiper",{direction:"vertical",loop:!1,initialSlide:0,speed:500,slidesPerView:6,effect:"slide",rewind:!0,breakpoints:{292:{slidesPerView:6}},spaceBetween:20,keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{enabled:!1},shortSwipes:!1,preventClicks:!0,noSwiping:!0,disableMouseEvents:!0}),h=document.querySelector(".swiper-button");h.addEventListener("click",function(){p.activeIndex===2?h.classList.add("rotate"):h.classList.remove("rotate"),p.activeIndex<p.slides.length-1?p.slideNext():p.slideTo(0)});const A=(e,t)=>`<div class="books-container"><h2 class="books-title">Best Sellers Books</h2>${e.map(s=>{const n=s.list_name,a=M(s.books.slice(0,t));return`<div class="books-category-container">
        <h3 class="books-category-title">${n}</h3>
        <ul class="books-list">${a}</ul>
        <div class="books-btn-container">
          <button data-catname="${n}" type="button" class="books-btn">see more</button>
        </div>
      </div>`}).join("")}</div>`,D=e=>(console.log(e),`<li class="categories-list">
  <a href="#" data-catname="" class="categories-nav active">All categories</a>
  </li>${e.sort((o,s)=>o.list_name<s.list_name?-1:o.list_name>s.list_name?1:0).map(o=>`<li class="categories-list">
      <a href="#" data-catname="${o.list_name}" class="categories-nav">${o.list_name}</a>
    </li>`).join("")}`),x=(e,t)=>{const o=M(e);return`<div class="books-container">
    <h2 class="books-title">${t}</h2>
    <div class="books-category-container">
      <ul class="books-list">${o}</ul>
    </div>
  </div>`};function M(e){return e.map(o=>{const{_id:s,book_image:n,title:a,author:c}=o;return`<li class="books-item">
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
      </li>`}).join("")}const m="https://books-backend.p.goit.global",q=async e=>{const o=m+"/books/top-books/";try{const s=await g.get(o);return A(s.data,e)}catch(s){console.log(s)}},_=async()=>{const t=m+"/books/category-list/";try{const o=await g.get(t);return D(o.data)}catch(o){console.log(o)}},R=async e=>{const o=m+"/books/category/",s={category:e};try{const n=await g.get(o,{params:s});return x(n.data,e)}catch(n){console.log(n)}},B=async e=>{const t=`/books/${e}`,o=m+t;try{return(await g.get(o)).data}catch(s){console.log(s)}},l=document.querySelector(".books-container"),u=document.querySelector(".categories-menu");async function w(){L();const e=window.innerWidth,t=y(e),o=await q(t);l.innerHTML=o,v()}async function W(){const e=await _();u.innerHTML=e}async function E(e){L();const t=await R(e);l.innerHTML=t,v()}function v(){const e=document.querySelector(".books-title"),t=e.textContent.split(" "),o=t.pop(),s=t.join(" ")+(t.length>0?` <span  class="books-title-color">${o}</span>`:o);e.innerHTML=s}function y(e){let t=3;return e>=1440&&(t=5),e<768&&(t=1),t}const j=window.innerWidth;let T=y(j);async function V(){if(!document.querySelector(".categories-nav.active").dataset.catname){const t=window.innerWidth,o=y(t);if(T!==o){L(),T=o;const s=await q(o);l.innerHTML=s,v()}}}l&&(w(),W(),u.addEventListener("click",e=>{e.preventDefault();const t=e.target;if(t.tagName==="A"){const o=t.dataset.catname;u.querySelector(".active").classList.remove("active"),t.classList.add("active"),S(l,{offset:-24,duration:200}),o?E(o):w()}}),l.addEventListener("click",e=>{e.preventDefault();const t=e.target;if(t.classList.contains("books-btn")){const o=t.dataset.catname;u.querySelector(".active").classList.remove("active"),u.querySelector('[data-catname="'+o+'"]').classList.add("active"),S(l,{offset:-24,duration:700}).on("end",()=>{E(o)})}}),window.addEventListener("resize",V));function L(){l.innerHTML='<li class="loader-container"><span class="loader"></span></li>'}const I=document.querySelector("#pagination-wrapper");function F(){return matchMedia("(min-width: 768px)").matches?3:2}const J=F(),U={totalItems:10,itemsPerPage:3,visiblePages:J,centerAlign:!1,template:{page:'<a href="#" class="tui-page-btn"><span class="number-text">{{page}}</span></a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}} custom-class-{{type}}"><span class="tui-ico-{{type}}"></span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}} custom-class-{{type}}"><span class="tui-ico-{{type}}"></span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip custom-class-{{type}}"><span class="tui-ico-ellip">...</span></a>'}};function G(){I!==null&&new H(I,U)}G();const z=async e=>{try{const t=await B(e);let o=JSON.parse(localStorage.getItem("shoppinglist"))||[];o.push(t),localStorage.setItem("shoppinglist",JSON.stringify(o))}catch(t){console.error(t)}},K=async e=>{const o=(JSON.parse(localStorage.getItem("shoppinglist"))||[]).filter(s=>s._id!==e);localStorage.setItem("shoppinglist",JSON.stringify(o))};setTimeout(()=>{Y()},3e3);async function Y(){const e=document.querySelector(".books-container");e&&e.addEventListener("click",t);async function t(o){const s=document.querySelector(".popup-window");if(s.innerHTML="",o.target.classList.contains("books-overlay")){const n=o.target.dataset.id,a=await B(n),c=X(a);s.insertAdjacentHTML("beforeend",c),Q()}}}async function Q(){const e=document.querySelector(".popup-backdrop"),t=document.querySelector(".popup-close-btn");s(),Z(),ee(),e.addEventListener("click",a),document.addEventListener("keydown",c),t.addEventListener("click",n),document.addEventListener("keydown",o);function o(r){r.keyCode===32&&r.preventDefault()}function s(){e.classList.add("is-active")}function n(){d(),t.removeEventListener("click",n),document.removeEventListener("keydown",o)}function a(r){r.target===r.currentTarget&&(d(),e.removeEventListener("click",a),document.removeEventListener("keydown",o))}function c(r){r.keyCode===27&&(d(),document.removeEventListener("keydown",c),document.removeEventListener("keydown",o))}function d(){e.classList.remove("is-active")}}function X(e){const{_id:t,author:o,title:s,book_image:n,buy_links:a,description:c=""}=e,[d,r]=a;return`
<button class="popup-close-btn">
      <svg class="popup-close-btn-icon" width="28" height="28">
        <use href="/img/icons.svg#icon-header-close"></use>
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

    `}function Z(){const e=document.querySelector(".popup-book-btn-add-to-shopinglist"),t=e.dataset.id;(JSON.parse(localStorage.getItem("shoppinglist"))||[]).map(n=>n._id).includes(t)?(e.textContent="REMOVE FROM THE SHOPPING LIST",e.insertAdjacentHTML("afterend",O())):e.textContent="ADD TO SHOPPING LIST"}function ee(){const e=document.querySelector(".popup-book-btn-add-to-shopinglist"),t=e.dataset.id;e.addEventListener("click",o);function o(){(JSON.parse(localStorage.getItem("shoppinglist"))||[]).map(a=>a._id).includes(t)?(K(t),document.querySelector(".under-btn-text").remove(),e.textContent="ADD TO SHOPPING LIST"):(z(t),e.textContent="REMOVE FROM THE SHOPPING LIST",e.insertAdjacentHTML("afterend",O()))}}function O(){return`
      <p class="under-btn-text">
        Congratulations! You have added the book to the shopping list. To
        delete, press the button "Remove from the shopping list".
      </p>
    `}const P=document.querySelector(".toggle-checkbox");document.addEventListener("DOMContentLoaded",()=>{localStorage.getItem("theme")==="theme-dark"&&(b("theme-dark"),P.checked=!0)});function b(e){localStorage.setItem("theme",e),document.documentElement.setAttribute("data-theme",e)}P.addEventListener("click",()=>{localStorage.getItem("theme")==="theme-dark"?b("theme-light"):b("theme-dark")});const k=document.querySelector(".scroll-up");window.addEventListener("scroll",()=>{window.scrollY>120?k.classList.add("show"):k.classList.remove("show")});k.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=main-7d826eb6.js.map
