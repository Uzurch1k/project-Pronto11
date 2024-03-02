import{S as h,a as d}from"./vendor-93e8fa5a.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function t(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(o){if(o.ep)return;o.ep=!0;const s=t(o);fetch(o.href,s)}})();new h(".swiper",{direction:"vertical",loop:!1,speed:100,slidesPerView:6,keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{invert:!0},shortSwipes:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});const b=e=>`<div class="books-container"><h2 class="books-title">Best Sellers Books</h2>${e.map(t=>{const c=t.list_name,o=v(t.books);return`<div class="books-category-container">
        <h3 class="books-category-title">${c}</h3>
        <ul class="books-list top-mode">${o}</ul>
        <div class="books-btn-container">
          <button data-catname="${c}" type="button" class="books-btn">see more</button>
        </div>
      </div>`}).join("")}</div>`,k=e=>`<li class="categories-list">
    <a href="#" data-catname="" class="categories-nav active">All categories</a>
  </li>
  <li class="categories-list">
    <a href="#" data-catname="Advice How-To and Miscellaneous" class="categories-nav">Print and E-book Fiction</a>
  </li>
  <li class="categories-list">
    <a href="#" data-catname="Advice How-To and Miscellaneous" class="categories-nav">Combined Print & E-book Nonfiction</a>
  </li>
  <li class="categories-list">
    <a href="#" data-catname="Advice How-To and Miscellaneous" class="categories-nav">Hardcover fiction</a>
  </li>
  <li class="categories-list">
    <a href="#" data-catname="Advice How-To and Miscellaneous" class="categories-nav">Hardcover nonfiction</a>
  </li>
  <li class="categories-list">
    <a href="#" data-catname="Advice How-To and Miscellaneous" class="categories-nav">Paperback trade fiction</a>
  </li>
  <li class="categories-list">
    <a href="#" data-catname="Advice How-To and Miscellaneous" class="categories-nav">Paperback nonfiction</a>
  </li>
  <li class="categories-list">
    <a href="#" data-catname="Advice How-To and Miscellaneous" class="categories-nav">Advice, how-to & Miscellaneous</a>
  </li>
  <li class="categories-list">
    <a href="#" data-catname="Advice How-To and Miscellaneous" class="categories-nav">Children’s middle grade hardcover</a>
  </li>
  <li class="categories-list">
    <a href="#" data-catname="Advice How-To and Miscellaneous" class="categories-nav">Children’s middle grade hardcover</a>
  </li>
  <li class="categories-list">
    <a href="#" data-catname="Advice How-To and Miscellaneous" class="categories-nav">Print and E-book Fiction</a>
  </li>
  <li class="categories-list">
    <a href="#" data-catname="Advice How-To and Miscellaneous" class="categories-nav">Combined Print & E-book Nonfiction</a>
  </li>
  <li class="categories-list">
    <a href="#" data-catname="Advice How-To and Miscellaneous" class="categories-nav">Hardcover fiction</a>
  </li>
  <li class="categories-list">
    <a href="#" data-catname="Advice How-To and Miscellaneous" class="categories-nav">Hardcover nonfiction</a>
  </li>
  <li class="categories-list">
    <a href="#" data-catname="Advice How-To and Miscellaneous" class="categories-nav">Paperback trade fiction</a>
  </li>
  <li class="categories-list">
    <a href="#" data-catname="Advice How-To and Miscellaneous" class="categories-nav">Paperback nonfiction</a>
  </li>
  <li class="categories-list">
    <a href="#" data-catname="Advice How-To and Miscellaneous" class="categories-nav">Advice, how-to & Miscellaneous</a>
  </li>`,y=(e,a)=>{const t=v(e);return`<div class="books-container">
    <h2 class="books-title">${a}</h2>
    <div class="books-category-container">
      <ul class="books-list">${t}</ul>
    </div>
  </div>`};function v(e){return e.map(t=>{const c=t._id,o=t.book_image,s=t.title,i=t.author;return`<li class="books-item">
        <div class="books-wrapper">
          <img
            class="books-img"
            src="${o}"
            alt="${o}"
          />
          <a href="#" data-id="${c}" class="books-overlay">
            <p class="books-overlay-text">QUICK VIEW</p>
          </a>
        </div>
        <div class="books-info">
          <p class="books-info-title">${s}</p>
          <p class="books-info-author">${i}</p>
        </div>
      </li>`}).join("")}const u="https://books-backend.p.goit.global",w=async()=>{const a=u+"/books/top-books/";try{const t=await d.get(a);return b(t.data)}catch(t){console.log(t)}},H=async()=>{const a=u+"/books/category-list/";try{const t=await d.get(a);return k(t.data)}catch(t){console.log(t)}},T=async e=>{const t=u+"/books/category/",c={category:e};try{const o=await d.get(t,{params:c});return y(o.data,e)}catch(o){console.log(o)}},r=document.querySelector(".books-container"),n=document.querySelector(".categories-menu");async function g(){const e=await w();r.innerHTML=e,m()}async function M(){const e=await H();n.innerHTML=e}async function f(e){const a=await T(e);r.innerHTML=a,m()}function m(){const e=document.querySelector(".books-title"),a=e.textContent.split(" "),t=a.pop(),c=a.join(" ")+(a.length>0?` <span>${t}</span>`:t);e.innerHTML=c}r&&(g(),M(),n.addEventListener("click",e=>{e.preventDefault();const a=e.target;if(a.tagName==="A"){const t=a.dataset.catname;n.querySelector(".active").classList.remove("active"),a.classList.add("active"),t?f(t):g()}}),r.addEventListener("click",e=>{e.preventDefault();const a=e.target;if(a.classList.contains("books-btn")){const t=a.dataset.catname;n.querySelector(".active").classList.remove("active"),n.querySelector('[data-catname="'+t+'"]').classList.add("active"),f(t)}}));const p=document.querySelector(".toggle-checkbox");document.addEventListener("DOMContentLoaded",()=>{localStorage.getItem("theme")==="theme-dark"&&(l("theme-dark"),p.checked=!0)});function l(e){localStorage.setItem("theme",e),document.documentElement.setAttribute("data-theme",e)}p.addEventListener("click",()=>{localStorage.getItem("theme")==="theme-dark"?l("theme-light"):l("theme-dark")});
//# sourceMappingURL=main-065de454.js.map
