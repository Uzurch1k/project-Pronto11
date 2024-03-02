import{a as r}from"./vendor-0cb09735.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function t(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(o){if(o.ep)return;o.ep=!0;const s=t(o);fetch(o.href,s)}})();const h=e=>`<div class="books-container"><h2 class="books-title">Best Sellers Books</h2>${e.map(t=>{const c=t.list_name,o=g(t.books);return`<div class="books-category-container">
        <h3 class="books-category-title">${c}</h3>
        <ul class="books-list">${o}</ul>
        <div class="books-btn-container">
          <button data-catname="${c}" type="button" class="books-btn">see more</button>
        </div>
      </div>`}).join("")}</div>`,p=e=>(console.log(e),`<li class="categories-list">
    <a href="#" data-catname="" class="categories-nav">All categories</a>
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
  </li>`),b=(e,a)=>{const t=g(e);return`<div class="books-container">
    <h2 class="books-title">${a}</h2>
    <div class="books-category-container">
      <ul class="books-list">${t}</ul>
    </div>
  </div>`};function g(e){return e.map(t=>{const c=t._id,o=t.book_image,s=t.title,n=t.author;return`<li class="books-item">
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
          <p class="books-info-author">${n}</p>
        </div>
      </li>`}).join("")}const l="https://books-backend.p.goit.global",k=async()=>{const a=l+"/books/top-books/";try{const t=await r.get(a);return h(t.data)}catch(t){console.log(t)}},y=async()=>{const a=l+"/books/category-list/";try{const t=await r.get(a);return p(t.data)}catch(t){console.log(t)}},w=async e=>{const t=l+"/books/category/",c={category:e};try{const o=await r.get(t,{params:c});return b(o.data,e)}catch(o){console.log(o)}},d=document.querySelector(".books-container"),u=document.querySelector(".categories-menu");async function H(){const e=await k();d.innerHTML=e,m()}H();async function T(){const e=await y();u.innerHTML=e}T();u.addEventListener("click",e=>{e.preventDefault;const a=e.target;if(a.tagName==="A"){const t=a.dataset.catname;f(t)}});d.addEventListener("click",e=>{e.preventDefault;const a=e.target;if(a.classList.contains("books-btn")){const t=a.dataset.catname;f(t)}});async function f(e){const a=await w(e);d.innerHTML=a,m()}function m(){const e=document.querySelector(".books-title"),a=e.textContent.split(" "),t=a.pop(),c=a.join(" ")+(a.length>0?` <span>${t}</span>`:t);e.innerHTML=c}const v=document.querySelector(".toggle-checkbox");document.addEventListener("DOMContentLoaded",()=>{localStorage.getItem("theme")==="theme-dark"&&(i("theme-dark"),v.checked=!0)});function i(e){localStorage.setItem("theme",e),document.documentElement.setAttribute("data-theme",e)}v.addEventListener("click",()=>{localStorage.getItem("theme")==="theme-dark"?i("theme-light"):i("theme-dark")});
//# sourceMappingURL=main-f676c452.js.map
