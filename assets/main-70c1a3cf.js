import{S as N,a as g,s as w,P as $}from"./vendor-7a68f705.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function o(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(n){if(n.ep)return;n.ep=!0;const a=o(n);fetch(n.href,a)}})();const M=document.querySelector(".toggle-checkbox");document.addEventListener("DOMContentLoaded",()=>{localStorage.getItem("theme")==="theme-dark"&&(b("theme-dark"),M.checked=!0)});function b(e){localStorage.setItem("theme",e),document.documentElement.setAttribute("data-theme",e)}M.addEventListener("click",()=>{localStorage.getItem("theme")==="theme-dark"?b("theme-light"):b("theme-dark")});const f=document.querySelector(".scroll-up");window.addEventListener("scroll",()=>{window.scrollY>120?f.classList.add("show"):f.classList.remove("show")});f.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const i={body:document.querySelector("body"),burger:document.querySelector(".header-btn-burgher"),headerNav:document.querySelector(".header-menu"),headerLink:document.querySelectorAll(".header-nav-item-modal"),logo:document.querySelector(".header-logo"),home:document.querySelector(".header-home"),shopping:document.querySelector(".header-shopping"),homeMobal:document.querySelector(".header-home-modal"),shoppingMobal:document.querySelector(".header-shopping-modal")};function H(){i.burger.classList.toggle("active"),i.headerNav.classList.toggle("active"),i.body.classList.toggle("lock")}i.burger.addEventListener("click",H);function v(){localStorage.setItem("isActive","home")}i.logo.addEventListener("click",v);i.home.addEventListener("click",v);i.homeMobal.addEventListener("click",v);function O(){localStorage.setItem("isActive","shopping")}i.shopping.addEventListener("click",O);i.shoppingMobal.addEventListener("click",O);window.addEventListener("DOMContentLoaded",()=>{const e=localStorage.getItem("isActive");i.home.classList.add("active"),i.homeMobal.classList.add("active"),e==="home"?(i.home.classList.add("active"),i.shopping.classList.remove("active"),i.homeMobal.classList.add("active"),i.shoppingMobal.classList.remove("active")):e==="shopping"&&(i.home.classList.remove("active"),i.shopping.classList.add("active"),i.homeMobal.classList.remove("active"),i.shoppingMobal.classList.add("active"))});const d=new N(".swiper",{direction:"vertical",loop:!1,initialSlide:0,speed:500,slidesPerView:6,effect:"slide",rewind:!0,breakpoints:{292:{slidesPerView:6}},spaceBetween:20,keyboard:{enabled:!0,onlyInViewport:!0}});d.allowTouchMove=!1;const h=document.querySelector(".swiper-button");h.addEventListener("click",function(){d.activeIndex===2?h.classList.add("rotate"):h.classList.remove("rotate"),d.activeIndex<d.slides.length-1?d.slideNext():d.slideTo(0)});const A=(e,t)=>`<div class="books-container"><h2 class="books-title">Best Sellers Books</h2>${e.map(s=>{const n=s.list_name,a=q(s.books.slice(0,t));return`<div class="books-category-container">
        <h3 class="books-category-title">${n}</h3>
        <ul class="books-list">${a}</ul>
        <div class="books-btn-container">
          <button data-catname="${n}" type="button" class="books-btn">see more</button>
        </div>
      </div>`}).join("")}</div>`,R=e=>`<li class="categories-list">
  <a href="#" data-catname="" class="categories-nav active">All categories</a>
  </li>${e.sort((o,s)=>o.list_name<s.list_name?-1:o.list_name>s.list_name?1:0).map(o=>`<li class="categories-list">
      <a href="#" data-catname="${o.list_name}" class="categories-nav">${o.list_name}</a>
    </li>`).join("")}`,D=(e,t)=>{const o=q(e);return`<div class="books-container">
    <h2 class="books-title">${t}</h2>
    <div class="books-category-container">
      <ul class="books-list">${o}</ul>
    </div>
  </div>`};function q(e){return e.map(o=>{const{_id:s,book_image:n,title:a,author:c}=o;return`<li class="books-item">
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
      </li>`}).join("")}const m="https://books-backend.p.goit.global",x=async e=>{const o=m+"/books/top-books/";try{const s=await g.get(o);return A(s.data,e)}catch(s){console.log(s)}},_=async()=>{const t=m+"/books/category-list/";try{const o=await g.get(t);return R(o.data)}catch(o){console.log(o)}},J=async e=>{const o=m+"/books/category/",s={category:e};try{const n=await g.get(o,{params:s});return D(n.data,e)}catch(n){console.log(n)}},B=async e=>{const t=`/books/${e}`,o=m+t;try{return(await g.get(o)).data}catch(s){console.log(s)}},l=document.querySelector(".books-container"),u=document.querySelector(".categories-menu"),I={perRow5:JSON.parse(localStorage.getItem("renderedtops5"))||"",perRow3:JSON.parse(localStorage.getItem("renderedtops3"))||"",perRow1:JSON.parse(localStorage.getItem("renderedtops1"))||""};async function k(){S();const e=window.innerWidth,t=L(e);let o=I["perRow"+t];if(o)l.innerHTML=o;else{const s=await x(t);l.innerHTML=s,localStorage.setItem("renderedtops"+t,JSON.stringify(s)),I["perRow"+t]=s}y()}async function j(){const e=await _();u.innerHTML=e}async function E(e){S();const t=await J(e);l.innerHTML=t,y()}function y(){const e=document.querySelector(".books-title"),t=e.textContent.split(" "),o=t.pop(),s=t.join(" ")+(t.length>0?` <span  class="books-title-color">${o}</span>`:o);e.innerHTML=s}function L(e){let t=5;return e>=1440&&(t=5),e>=768&&e<1440&&(t=3),e<768&&(t=1),t}const F=window.innerWidth;let T=L(F);async function V(){if(!document.querySelector(".categories-nav.active").dataset.catname){const t=window.innerWidth,o=L(t);T!==o&&(T=o,S(),k(),y())}}l&&(k(),j(),u.addEventListener("click",e=>{e.preventDefault();const t=e.target;if(t.tagName==="A"){const o=t.dataset.catname;u.querySelector(".active").classList.remove("active"),t.classList.add("active"),w(l,{offset:-24,duration:200}),o?E(o):k()}}),l.addEventListener("click",e=>{e.preventDefault();const t=e.target;if(t.classList.contains("books-btn")){const o=t.dataset.catname;u.querySelector(".active").classList.remove("active"),u.querySelector('[data-catname="'+o+'"]').classList.add("active"),w(l,{offset:-24,duration:700}).on("end",()=>{E(o)})}}),window.addEventListener("resize",V));function S(){l.innerHTML='<li class="loader-container"><span class="loader"></span></li>'}const C=document.querySelector("#pagination-wrapper");function W(){return matchMedia("(min-width: 768px)").matches?3:2}const G=W(),U={totalItems:10,itemsPerPage:3,visiblePages:G,centerAlign:!1,template:{page:'<a href="#" class="tui-page-btn"><span class="number-text">{{page}}</span></a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}} custom-class-{{type}}"><span class="tui-ico-{{type}}"></span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}} custom-class-{{type}}"><span class="tui-ico-{{type}}"></span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip custom-class-{{type}}"><span class="tui-ico-ellip">...</span></a>'}};function z(){C!==null&&new $(C,U)}z();const K=async e=>{try{const t=await B(e);let o=JSON.parse(localStorage.getItem("shoppinglist"))||[];o.push(t),localStorage.setItem("shoppinglist",JSON.stringify(o))}catch(t){console.error(t)}},Y=async e=>{const o=(JSON.parse(localStorage.getItem("shoppinglist"))||[]).filter(s=>s._id!==e);localStorage.setItem("shoppinglist",JSON.stringify(o))};setTimeout(()=>{Q()},3e3);async function Q(){const e=document.querySelector(".books-container");e&&e.addEventListener("click",t);async function t(o){const s=document.querySelector(".popup-window");if(s.innerHTML="",o.target.classList.contains("books-overlay")){const n=o.target.dataset.id,a=await B(n),c=Z(a);s.insertAdjacentHTML("beforeend",c),X()}}}async function X(){const e=document.querySelector(".popup-backdrop"),t=document.querySelector(".popup-close-btn");s(),ee(),te(),e.addEventListener("click",a),document.addEventListener("keydown",c),t.addEventListener("click",n),document.addEventListener("keydown",o);function o(r){r.keyCode===32&&r.preventDefault()}function s(){e.classList.add("is-active")}function n(){p(),t.removeEventListener("click",n),document.removeEventListener("keydown",o)}function a(r){r.target===r.currentTarget&&(p(),e.removeEventListener("click",a),document.removeEventListener("keydown",o))}function c(r){r.keyCode===27&&(p(),document.removeEventListener("keydown",c),document.removeEventListener("keydown",o))}function p(){e.classList.remove("is-active")}}function Z(e){const{_id:t,author:o,title:s,book_image:n,buy_links:a,description:c=""}=e,[p,r]=a;return`<button class="popup-close-btn">
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
              href="${p.url}"
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
    </div>`}function ee(){const e=document.querySelector(".popup-book-btn-add-to-shopinglist"),t=e.dataset.id;(JSON.parse(localStorage.getItem("shoppinglist"))||[]).map(n=>n._id).includes(t)?(e.textContent="REMOVE FROM THE SHOPPING LIST",e.insertAdjacentHTML("afterend",P())):e.textContent="ADD TO SHOPPING LIST"}function te(){const e=document.querySelector(".popup-book-btn-add-to-shopinglist"),t=e.dataset.id;e.addEventListener("click",o);function o(){(JSON.parse(localStorage.getItem("shoppinglist"))||[]).map(a=>a._id).includes(t)?(Y(t),document.querySelector(".under-btn-text").remove(),e.textContent="ADD TO SHOPPING LIST"):(K(t),e.textContent="REMOVE FROM THE SHOPPING LIST",e.insertAdjacentHTML("afterend",P()))}}function P(){return`
      <p class="under-btn-text">
        Congratulations! You have added the book to the shopping list. To
        delete, press the button "Remove from the shopping list".
      </p>
    `}
//# sourceMappingURL=main-70c1a3cf.js.map
