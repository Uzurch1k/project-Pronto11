import{S as x,i as A,a as m,s as E,P as _}from"./vendor-0f9dcf05.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function o(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(n){if(n.ep)return;n.ep=!0;const a=o(n);fetch(n.href,a)}})();const $=document.querySelector(".toggle-checkbox");document.addEventListener("DOMContentLoaded",()=>{localStorage.getItem("theme")==="theme-dark"&&(v("theme-dark"),$.checked=!0)});function v(e){localStorage.setItem("theme",e),document.documentElement.setAttribute("data-theme",e)}$.addEventListener("click",()=>{localStorage.getItem("theme")==="theme-dark"?v("theme-light"):v("theme-dark")});const y=document.querySelector(".scroll-up");window.addEventListener("scroll",()=>{window.scrollY>120?y.classList.add("show"):y.classList.remove("show")});y.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const i={body:document.querySelector("body"),burger:document.querySelector(".header-btn-burgher"),headerNav:document.querySelector(".header-menu"),headerLink:document.querySelectorAll(".header-nav-item-modal"),home:document.querySelector(".header-home"),shopping:document.querySelector(".header-shopping"),homeMobal:document.querySelector(".header-home-modal"),shoppingMobal:document.querySelector(".header-shopping-modal")};function R(){i.burger.classList.toggle("active"),i.headerNav.classList.toggle("active"),i.body.classList.toggle("lock")}i.burger.addEventListener("click",R);window.location.href.includes("index.html")?window.addEventListener("DOMContentLoaded",()=>{i.home.classList.add("active"),i.shopping.classList.remove("active"),i.homeMobal.classList.add("active"),i.shoppingMobal.classList.remove("active")}):window.addEventListener("DOMContentLoaded",()=>{i.home.classList.remove("active"),i.shopping.classList.add("active"),i.homeMobal.classList.remove("active"),i.shoppingMobal.classList.add("active")});const c=new x(".swiper",{direction:"vertical",loop:!1,initialSlide:0,speed:500,slidesPerView:6,effect:"slide",rewind:!0,breakpoints:{292:{slidesPerView:6}},spaceBetween:20,keyboard:{enabled:!0,onlyInViewport:!0},shortSwipes:!1,preventClicks:!0,disableMouseEvents:!0});c.allowTouchMove=!1;c.on("slideChange",function(){c.isEnd?c.allowTouchMove=!1:c.allowTouchMove=!0});const b=document.querySelector(".swiper-button");b.addEventListener("click",function(){c.activeIndex===2?b.classList.add("rotate"):b.classList.remove("rotate"),c.activeIndex<c.slides.length-1?c.slideNext():c.slideTo(0)});const j="/project-Pronto11/assets/icons-f8f0c595.svg",I=(e,t)=>!e||e.length===0?`<div class="books-container"><h2 class="books-title">Best Sellers Books</h2>
    </div>${P()}`:`<h2 class="books-title">Best Sellers Books</h2>${e.map(s=>{const n=s.list_name,a=H(s.books.slice(0,t));return`<div class="books-category-container">
        <h3 class="books-category-title">${n}</h3>
        <ul class="books-list">${a}</ul>
        <div class="books-btn-container">
          <button data-catname="${n}" type="button" class="books-btn">see more</button>
        </div>
      </div>`}).join("")}`,F=e=>`<li class="categories-list">
  <a href="#" data-catname="" class="categories-nav active">All categories</a>
  </li>${e.sort((o,s)=>o.list_name<s.list_name?-1:o.list_name>s.list_name?1:0).map(o=>`<li class="categories-list">
      <a href="#" data-catname="${o.list_name}" class="categories-nav">${o.list_name}</a>
    </li>`).join("")}`;function P(){return A.error({message:"Sorry, no books found.",position:"topRight",icon:null}),`</div>
  <div class="empty-category">
  <svg class="icon-shopp-stub">
    <use href="${j}#icon-shopp-stub"></use>
    </svg>
  <span>Nothing found</span>
  </div>`}const J=(e,t)=>{if(!e||e.length===0)return`<div class="books-container">
        <h2 class="books-title">${t}</h2>
        </div>${P()}`;{const o=H(e);return`<h2 class="books-title">${t}</h2>
    <div class="books-category-container">
      <ul class="books-list">${o}</ul>
    </div>`}};function H(e){return e.map(o=>{const{_id:s,book_image:n,title:a,author:r}=o;return`<li class="books-item">
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
          <h4 class="books-info-title">${a}</h4>
          <p class="books-info-author">${r}</p>
        </div>
      </li>`}).join("")}const h="https://books-backend.p.goit.global";let k=JSON.parse(sessionStorage.getItem("savedfetch"))||"";const V=async e=>{if(k)return I(k,e);{const o=h+"/books/top-books/";try{const s=await m.get(o);return sessionStorage.setItem("savedfetch",JSON.stringify(s.data)),k=s.data,I(s.data,e)}catch(s){console.log(s)}}},W=async()=>{const t=h+"/books/category-list/";try{const o=await m.get(t);return F(o.data)}catch(o){console.log(o)}},U=async e=>{const o=h+"/books/category/",s={category:e};try{const n=await m.get(o,{params:s});return J(n.data,e)}catch(n){console.log(n)}},N=async e=>{const t=`/books/${e}`,o=h+t;try{return(await m.get(o)).data}catch(s){console.log(s)}},z=async e=>{try{const t=await N(e);let o=JSON.parse(localStorage.getItem("shoppinglist"))||[];o.push(t),localStorage.setItem("shoppinglist",JSON.stringify(o))}catch(t){console.error(t)}},G=async e=>{const o=(JSON.parse(localStorage.getItem("shoppinglist"))||[]).filter(s=>s._id!==e);localStorage.setItem("shoppinglist",JSON.stringify(o))};async function K(){const e=document.querySelector(".books-container");e&&e.addEventListener("click",t);async function t(o){if(o.target.classList.contains("books-overlay")){const s=o.target.dataset.id,n=await N(s);Y(n)}}}async function Y(e){const t=document.querySelector(".popup-backdrop"),o=document.querySelector(".popup-window");o.innerHTML="";const s=Q(e);o.insertAdjacentHTML("beforeend",s);const n=document.querySelector(".popup-close-btn");r(),X(),Z(),t.addEventListener("click",g),document.addEventListener("keydown",T),n.addEventListener("click",u),document.addEventListener("keydown",a);function a(l){l.keyCode===32&&l.preventDefault()}function r(){t.classList.add("is-active"),document.body.classList.add("modal-open")}function u(){f(),n.removeEventListener("click",u),document.removeEventListener("keydown",a)}function g(l){l.target===l.currentTarget&&(f(),t.removeEventListener("click",g),document.removeEventListener("keydown",a))}function T(l){l.keyCode===27&&(f(),document.removeEventListener("keydown",T),document.removeEventListener("keydown",a))}function f(){t.classList.remove("is-active"),document.body.classList.remove("modal-open")}}function Q(e){const{_id:t,author:o,title:s,book_image:n,buy_links:a,description:r=""}=e,[u,g]=a;return`<button class="popup-close-btn">
      <svg class="popup-close-btn-icon" width="28" height="28">
        <use href="./img/icons.svg#icon-header-close"></use>
      </svg>
    </button>
    <div class="popup-book">
      <div class="popup-wrap-img">
        <img class="popup-book-image" src="${n}" alt="обкладинка" />
      </div>
      <div class="popup-book-content">
        <h4 class="popup-book-title">${s}</h4>
        <p class="popup-book-author">${o}</p>
        <p class="popup-book-review">${r}</p>
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
    </div>`}function X(){const e=document.querySelector(".popup-book-btn-add-to-shopinglist"),t=e.dataset.id;(JSON.parse(localStorage.getItem("shoppinglist"))||[]).map(n=>n._id).includes(t)?(e.textContent="REMOVE FROM THE SHOPPING LIST",e.insertAdjacentHTML("afterend",D())):e.textContent="ADD TO SHOPPING LIST"}function Z(){const e=document.querySelector(".popup-book-btn-add-to-shopinglist"),t=e.dataset.id;e.addEventListener("click",o);function o(){(JSON.parse(localStorage.getItem("shoppinglist"))||[]).map(a=>a._id).includes(t)?(G(t),document.querySelector(".under-btn-text").remove(),e.textContent="ADD TO SHOPPING LIST"):(z(t),e.textContent="REMOVE FROM THE SHOPPING LIST",e.insertAdjacentHTML("afterend",D()))}}function D(){return`
      <p class="under-btn-text">
        Congratulations! You have added the book to the shopping list. To
        delete, press the button "Remove from the shopping list".
      </p>
    `}const d=document.querySelector(".books-container"),p=document.querySelector(".categories-menu");let M;async function L(){C();const e=window.innerWidth,t=w(e),o=await V(t);d.innerHTML=o,M||(K(),M=!0),S()}async function ee(){const e=await W();p.innerHTML=e}async function B(e){C();const t=await U(e);d.innerHTML=t,S()}async function S(){const e=document.querySelector(".books-title"),t=e.textContent.split(" "),o=t.pop(),s=t.join(" ")+(t.length>0?` <span  class="books-title-color">${o}</span>`:o);e.innerHTML=s}function w(e){let t=5;return e>=1440&&(t=5),e>=768&&e<1440&&(t=3),e<768&&(t=1),t}const te=window.innerWidth;let O=w(te);async function oe(){if(!document.querySelector(".categories-nav.active").dataset.catname){const t=window.innerWidth,o=w(t);O!==o&&(O=o,C(),await L(),S())}}d&&(L(),ee(),p.addEventListener("click",e=>{e.preventDefault();const t=e.target;if(t.tagName==="A"){const o=t.dataset.catname;p.querySelector(".active").classList.remove("active"),t.classList.add("active"),E(d,{offset:-24,duration:500}),o?B(o):L()}}),d.addEventListener("click",e=>{e.preventDefault();const t=e.target;if(t.classList.contains("books-btn")){const o=t.dataset.catname;p.querySelector(".active").classList.remove("active"),p.querySelector('[data-catname="'+o+'"]').classList.add("active"),E(d,{offset:-24,duration:700}).on("end",()=>{B(o)})}}),window.addEventListener("resize",oe));function C(){d.innerHTML='<li class="loader-container"><span class="loader"></span></li>'}const q=document.querySelector("#pagination-wrapper");function se(){return matchMedia("(min-width: 768px)").matches?3:2}const ne=se(),ae={totalItems:10,itemsPerPage:3,visiblePages:ne,centerAlign:!1,template:{page:'<a href="#" class="tui-page-btn"><span class="number-text">{{page}}</span></a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}} custom-class-{{type}}"><span class="tui-ico-{{type}}"></span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}} custom-class-{{type}}"><span class="tui-ico-{{type}}"></span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip custom-class-{{type}}"><span class="tui-ico-ellip">...</span></a>'}};function ie(){q!==null&&new _(q,ae)}ie();
//# sourceMappingURL=main-f7889fbc.js.map
