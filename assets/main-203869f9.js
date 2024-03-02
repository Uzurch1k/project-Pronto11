import{S as v,a as d}from"./vendor-93e8fa5a.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();new v(".swiper",{direction:"vertical",loop:!1,speed:100,slidesPerView:6,keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{invert:!0},shortSwipes:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});const w=(e,t)=>`<div class="books-container"><h2 class="books-title">Best Sellers Books</h2>${e.map(n=>{const s=n.list_name,r=h(n.books.slice(0,t));return`<div class="books-category-container">
        <h3 class="books-category-title">${s}</h3>
        <ul class="books-list">${r}</ul>
        <div class="books-btn-container">
          <button data-catname="${s}" type="button" class="books-btn">see more</button>
        </div>
      </div>`}).join("")}</div>`,L=e=>`<li class="categories-list">
  <a href="#" data-catname="" class="categories-nav active">All categories</a>
  </li>${e.map(o=>`<li class="categories-list">
      <a href="#" data-catname="${o.list_name}" class="categories-nav">${o.list_name}</a>
    </li>`).join("")}`,C=(e,t)=>{const o=h(e);return`<div class="books-container">
    <h2 class="books-title">${t}</h2>
    <div class="books-category-container">
      <ul class="books-list">${o}</ul>
    </div>
  </div>`};function h(e){return e.map(o=>{const n=o._id,s=o.book_image,r=o.title,a=o.author;return`<li class="books-item">
        <div class="books-wrapper">
          <img
            class="books-img"
            src="${s}"
            alt="${s}"
          />
          <a href="#" data-id="${n}" class="books-overlay">
            <p class="books-overlay-text">QUICK VIEW</p>
          </a>
        </div>
        <div class="books-info">
          <p class="books-info-title">${r}</p>
          <p class="books-info-author">${a}</p>
        </div>
      </li>`}).join("")}const u="https://books-backend.p.goit.global",y=async e=>{const o=u+"/books/top-books/";try{const n=await d.get(o);return w(n.data,e)}catch(n){console.log(n)}},S=async()=>{const t=u+"/books/category-list/";try{const o=await d.get(t);return L(o.data)}catch(o){console.log(o)}},$=async e=>{const o=u+"/books/category/",n={category:e};try{const s=await d.get(o,{params:n});return C(s.data,e)}catch(s){console.log(s)}},i=document.querySelector(".books-container"),c=document.querySelector(".categories-menu");async function g(){const e=window.innerWidth,t=m(e),o=await y(t);i.innerHTML=o,p()}async function T(){const e=await S();c.innerHTML=e}async function f(e){const t=await $(e);i.innerHTML=t,p()}function p(){const e=document.querySelector(".books-title"),t=e.textContent.split(" "),o=t.pop(),n=t.join(" ")+(t.length>0?` <span>${o}</span>`:o);e.innerHTML=n}function m(e){let t=3;return e>=1440&&(t=5),e<768&&(t=1),t}const E=window.innerWidth;let b=m(E);async function q(){if(!document.querySelector(".categories-nav.active").dataset.catname){const t=window.innerWidth,o=m(t);if(b!==o){b=o;const n=await y(o);i.innerHTML=n,p()}}}i&&(g(),T(),c.addEventListener("click",e=>{e.preventDefault();const t=e.target;if(t.tagName==="A"){const o=t.dataset.catname;c.querySelector(".active").classList.remove("active"),t.classList.add("active"),o?f(o):g()}}),i.addEventListener("click",e=>{e.preventDefault();const t=e.target;if(t.classList.contains("books-btn")){const o=t.dataset.catname;c.querySelector(".active").classList.remove("active"),c.querySelector('[data-catname="'+o+'"]').classList.add("active"),f(o)}}),window.addEventListener("resize",q));const k=document.querySelector(".toggle-checkbox");document.addEventListener("DOMContentLoaded",()=>{localStorage.getItem("theme")==="theme-dark"&&(l("theme-dark"),k.checked=!0)});function l(e){localStorage.setItem("theme",e),document.documentElement.setAttribute("data-theme",e)}k.addEventListener("click",()=>{localStorage.getItem("theme")==="theme-dark"?l("theme-light"):l("theme-dark")});
//# sourceMappingURL=main-203869f9.js.map
