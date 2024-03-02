import{S as w,a as d}from"./vendor-93e8fa5a.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function a(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=a(o);fetch(o.href,n)}})();new w(".swiper",{direction:"vertical",loop:!1,speed:100,slidesPerView:6,keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{invert:!0},shortSwipes:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});const y=(e,t)=>`<div class="books-container"><h2 class="books-title">Best Sellers Books</h2>${e.map(s=>{const o=s.list_name,n=h(s.books.slice(0,t));return`<div class="books-category-container">
        <h3 class="books-category-title">${o}</h3>
        <ul class="books-list">${n}</ul>
        <div class="books-btn-container">
          <button data-catname="${o}" type="button" class="books-btn">see more</button>
        </div>
      </div>`}).join("")}</div>`,T=e=>`<li class="categories-list">
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
  </li>`,H=(e,t)=>{const a=h(e);return`<div class="books-container">
    <h2 class="books-title">${t}</h2>
    <div class="books-category-container">
      <ul class="books-list">${a}</ul>
    </div>
  </div>`};function h(e){return e.map(a=>{const s=a._id,o=a.book_image,n=a.title,c=a.author;return`<li class="books-item">
        <div class="books-wrapper">
          <img
            class="books-img"
            src="${o}"
            alt="${o}"
          />
          <a href="#" data-id="${s}" class="books-overlay">
            <p class="books-overlay-text">QUICK VIEW</p>
          </a>
        </div>
        <div class="books-info">
          <p class="books-info-title">${n}</p>
          <p class="books-info-author">${c}</p>
        </div>
      </li>`}).join("")}const u="https://books-backend.p.goit.global",b=async e=>{const a=u+"/books/top-books/";try{const s=await d.get(a);return y(s.data,e)}catch(s){console.log(s)}},A=async()=>{const t=u+"/books/category-list/";try{const a=await d.get(t);return T(a.data)}catch(a){console.log(a)}},M=async e=>{const a=u+"/books/category/",s={category:e};try{const o=await d.get(a,{params:s});return H(o.data,e)}catch(o){console.log(o)}},r=document.querySelector(".books-container"),i=document.querySelector(".categories-menu");async function v(){const e=window.innerWidth,t=f(e),a=await b(t);r.innerHTML=a,g()}async function L(){const e=await A();i.innerHTML=e}async function m(e){const t=await M(e);r.innerHTML=t,g()}function g(){const e=document.querySelector(".books-title"),t=e.textContent.split(" "),a=t.pop(),s=t.join(" ")+(t.length>0?` <span>${a}</span>`:a);e.innerHTML=s}function f(e){let t=3;return e>=1440&&(t=5),e<768&&(t=1),t}const C=window.innerWidth;let p=f(C);async function S(){if(!document.querySelector(".categories-nav.active").dataset.catname){const t=window.innerWidth,a=f(t);if(p!==a){p=a;const s=await b(a);r.innerHTML=s,g()}}}r&&(v(),L(),i.addEventListener("click",e=>{e.preventDefault();const t=e.target;if(t.tagName==="A"){const a=t.dataset.catname;i.querySelector(".active").classList.remove("active"),t.classList.add("active"),a?m(a):v()}}),r.addEventListener("click",e=>{e.preventDefault();const t=e.target;if(t.classList.contains("books-btn")){const a=t.dataset.catname;i.querySelector(".active").classList.remove("active"),i.querySelector('[data-catname="'+a+'"]').classList.add("active"),m(a)}}),window.addEventListener("resize",S));const k=document.querySelector(".toggle-checkbox");document.addEventListener("DOMContentLoaded",()=>{localStorage.getItem("theme")==="theme-dark"&&(l("theme-dark"),k.checked=!0)});function l(e){localStorage.setItem("theme",e),document.documentElement.setAttribute("data-theme",e)}k.addEventListener("click",()=>{localStorage.getItem("theme")==="theme-dark"?l("theme-light"):l("theme-dark")});
//# sourceMappingURL=main-aa82cc34.js.map
