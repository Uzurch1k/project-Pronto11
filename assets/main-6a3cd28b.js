import{S,a as u}from"./vendor-93e8fa5a.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const r of c.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function o(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(s){if(s.ep)return;s.ep=!0;const c=o(s);fetch(s.href,c)}})();new S(".swiper",{direction:"vertical",loop:!1,speed:100,slidesPerView:6,keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{invert:!0},shortSwipes:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});const n={body:document.querySelector("body"),burger:document.querySelector(".header-btn-burgher"),headerNav:document.querySelector(".header-menu"),headerLink:document.querySelectorAll(".header-nav-item-modal"),logo:document.querySelector(".header-logo"),home:document.querySelector(".header-home"),shopping:document.querySelector(".header-shopping"),homeMobal:document.querySelector(".header-home-modal"),shoppingMobal:document.querySelector(".header-shopping-modal")};function C(){n.burger.classList.toggle("active"),n.headerNav.classList.toggle("active"),n.body.classList.toggle("lock")}n.burger.addEventListener("click",C);function m(){localStorage.setItem("isActive","home")}n.logo.addEventListener("click",m);n.home.addEventListener("click",m);n.homeMobal.addEventListener("click",m);function y(){localStorage.setItem("isActive","shopping")}n.shopping.addEventListener("click",y);n.shoppingMobal.addEventListener("click",y);window.addEventListener("DOMContentLoaded",()=>{const e=localStorage.getItem("isActive");n.home.classList.add("active"),n.homeMobal.classList.add("active"),e==="home"?(n.home.classList.add("active"),n.shopping.classList.remove("active"),n.homeMobal.classList.add("active"),n.shoppingMobal.classList.remove("active")):e==="shopping"&&(n.home.classList.remove("active"),n.shopping.classList.add("active"),n.homeMobal.classList.remove("active"),n.shoppingMobal.classList.add("active"))});const E=(e,t)=>`<div class="books-container"><h2 class="books-title">Best Sellers Books</h2>${e.map(a=>{const s=a.list_name,c=k(a.books.slice(0,t));return`<div class="books-category-container">
        <h3 class="books-category-title">${s}</h3>
        <ul class="books-list">${c}</ul>
        <div class="books-btn-container">
          <button data-catname="${s}" type="button" class="books-btn">see more</button>
        </div>
      </div>`}).join("")}</div>`,q=e=>`<li class="categories-list">
  <a href="#" data-catname="" class="categories-nav active">All categories</a>
  </li>${e.map(o=>`<li class="categories-list">
      <a href="#" data-catname="${o.list_name}" class="categories-nav">${o.list_name}</a>
    </li>`).join("")}`,M=(e,t)=>{const o=k(e);return`<div class="books-container">
    <h2 class="books-title">${t}</h2>
    <div class="books-category-container">
      <ul class="books-list">${o}</ul>
    </div>
  </div>`};function k(e){return e.map(o=>{const{_id:a,book_image:s,title:c,author:r}=o;return`<li class="books-item">
        <div class="books-wrapper">
          <img
            class="books-img"
            src="${s}"
            alt="${c}"
          />
          <a href="#" data-id="${a}" class="books-overlay">
            <p class="books-overlay-text">QUICK VIEW</p>
          </a>
        </div>
        <div class="books-info">
          <p class="books-info-title">${c}</p>
          <p class="books-info-author">${r}</p>
        </div>
      </li>`}).join("")}const p="https://books-backend.p.goit.global",L=async e=>{const o=p+"/books/top-books/";try{const a=await u.get(o);return E(a.data,e)}catch(a){console.log(a)}},$=async()=>{const t=p+"/books/category-list/";try{const o=await u.get(t);return q(o.data)}catch(o){console.log(o)}},T=async e=>{const o=p+"/books/category/",a={category:e};try{const s=await u.get(o,{params:a});return M(s.data,e)}catch(s){console.log(s)}},l=document.querySelector(".books-container"),i=document.querySelector(".categories-menu");async function v(){const e=window.innerWidth,t=h(e),o=await L(t);l.innerHTML=o,g()}async function I(){const e=await $();i.innerHTML=e}async function b(e){const t=await T(e);l.innerHTML=t,g()}function g(){const e=document.querySelector(".books-title"),t=e.textContent.split(" "),o=t.pop(),a=t.join(" ")+(t.length>0?` <span>${o}</span>`:o);e.innerHTML=a}function h(e){let t=3;return e>=1440&&(t=5),e<768&&(t=1),t}const A=window.innerWidth;let f=h(A);async function H(){if(!document.querySelector(".categories-nav.active").dataset.catname){const t=window.innerWidth,o=h(t);if(f!==o){f=o;const a=await L(o);l.innerHTML=a,g()}}}l&&(v(),I(),i.addEventListener("click",e=>{e.preventDefault();const t=e.target;if(t.tagName==="A"){const o=t.dataset.catname;i.querySelector(".active").classList.remove("active"),t.classList.add("active"),o?b(o):v()}}),l.addEventListener("click",e=>{e.preventDefault();const t=e.target;if(t.classList.contains("books-btn")){const o=t.dataset.catname;i.querySelector(".active").classList.remove("active"),i.querySelector('[data-catname="'+o+'"]').classList.add("active"),b(o)}}),window.addEventListener("resize",H));const w=document.querySelector(".toggle-checkbox");document.addEventListener("DOMContentLoaded",()=>{localStorage.getItem("theme")==="theme-dark"&&(d("theme-dark"),w.checked=!0)});function d(e){localStorage.setItem("theme",e),document.documentElement.setAttribute("data-theme",e)}w.addEventListener("click",()=>{localStorage.getItem("theme")==="theme-dark"?d("theme-light"):d("theme-dark")});
//# sourceMappingURL=main-6a3cd28b.js.map
