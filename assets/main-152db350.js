import{S as y,a as d}from"./vendor-93e8fa5a.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const n of c.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(o){if(o.ep)return;o.ep=!0;const c=a(o);fetch(o.href,c)}})();new y(".swiper",{direction:"vertical",loop:!1,speed:100,slidesPerView:6,keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{invert:!0},shortSwipes:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});const T=(e,t)=>`<div class="books-container"><h2 class="books-title">Best Sellers Books</h2>${e.map(s=>{const o=s.list_name,c=h(s.books.slice(0,t));return`<div class="books-category-container">
        <h3 class="books-category-title">${o}</h3>
        <ul class="books-list">${c}</ul>
        <div class="books-btn-container">
          <button data-catname="${o}" type="button" class="books-btn">see more</button>
        </div>
      </div>`}).join("")}</div>`,H=e=>`<li class="categories-list">
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
  </li>`,A=(e,t)=>{const a=h(e);return`<div class="books-container">
    <h2 class="books-title">${t}</h2>
    <div class="books-category-container">
      <ul class="books-list">${a}</ul>
    </div>
  </div>`};function h(e){return e.map(a=>{const s=a._id,o=a.book_image,c=a.title,n=a.author;return`<li class="books-item">
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
          <p class="books-info-title">${c}</p>
          <p class="books-info-author">${n}</p>
        </div>
      </li>`}).join("")}const u="https://books-backend.p.goit.global",b=async e=>{const a=u+"/books/top-books/";try{const s=await d.get(a);return T(s.data,e)}catch(s){console.log(s)}},M=async()=>{const t=u+"/books/category-list/";try{const a=await d.get(t);return H(a.data)}catch(a){console.log(a)}},L=async e=>{const a=u+"/books/category/",s={category:e};try{const o=await d.get(a,{params:s});return A(o.data,e)}catch(o){console.log(o)}},r=document.querySelector(".books-container"),i=document.querySelector(".categories-menu"),k=window.innerWidth;async function v(){const e=f(k),t=await b(e);r.innerHTML=t,g()}async function C(){const e=await M();i.innerHTML=e}async function m(e){const t=await L(e);r.innerHTML=t,g()}function g(){const e=document.querySelector(".books-title"),t=e.textContent.split(" "),a=t.pop(),s=t.join(" ")+(t.length>0?` <span>${a}</span>`:a);e.innerHTML=s}function f(e){let t=3;return e>=1440&&(t=5),e<768&&(t=1),t}let p=f(k);async function S(){if(!document.querySelector(".categories-nav.active").dataset.catname){const t=window.innerWidth,a=f(t);if(p!==a){p=a;const s=await b(a);r.innerHTML=s,g()}}}r&&(v(),C(),i.addEventListener("click",e=>{e.preventDefault();const t=e.target;if(t.tagName==="A"){const a=t.dataset.catname;i.querySelector(".active").classList.remove("active"),t.classList.add("active"),a?m(a):v()}}),r.addEventListener("click",e=>{e.preventDefault();const t=e.target;if(t.classList.contains("books-btn")){const a=t.dataset.catname;i.querySelector(".active").classList.remove("active"),i.querySelector('[data-catname="'+a+'"]').classList.add("active"),m(a)}}),window.addEventListener("resize",S));const w=document.querySelector(".toggle-checkbox");document.addEventListener("DOMContentLoaded",()=>{localStorage.getItem("theme")==="theme-dark"&&(l("theme-dark"),w.checked=!0)});function l(e){localStorage.setItem("theme",e),document.documentElement.setAttribute("data-theme",e)}w.addEventListener("click",()=>{localStorage.getItem("theme")==="theme-dark"?l("theme-light"):l("theme-dark")});
//# sourceMappingURL=main-152db350.js.map
