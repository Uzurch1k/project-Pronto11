import{i as te,g as oe,c as se,u as ne,s as ae,o as ie,a as q,S as ce,b as y,d as U,P as re}from"./vendor-5f004ee5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function o(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(n){if(n.ep)return;n.ep=!0;const a=o(n);fetch(n.href,a)}})();const Q=document.querySelector(".toggle-checkbox");document.addEventListener("DOMContentLoaded",()=>{localStorage.getItem("theme")==="theme-dark"&&(I("theme-dark"),Q.checked=!0)});function I(e){localStorage.setItem("theme",e),document.documentElement.setAttribute("data-theme",e)}Q.addEventListener("click",()=>{localStorage.getItem("theme")==="theme-dark"?I("theme-light"):I("theme-dark")});const E=document.querySelector(".scroll-up");window.addEventListener("scroll",()=>{window.scrollY>120?E.classList.add("show"):E.classList.remove("show")});E.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const i={body:document.querySelector("body"),burger:document.querySelector(".header-btn-burgher"),headerNav:document.querySelector(".header-menu"),headerLink:document.querySelectorAll(".header-nav-item-modal"),home:document.querySelector(".header-home"),shopping:document.querySelector(".header-shopping"),homeMobal:document.querySelector(".header-home-modal"),shoppingMobal:document.querySelector(".header-shopping-modal")};function le(){i.burger.classList.toggle("active"),i.headerNav.classList.toggle("active"),i.body.classList.toggle("lock")}i.burger.addEventListener("click",le);window.addEventListener("DOMContentLoaded",()=>{i.home.classList.add("active"),i.homeMobal.classList.add("active")});window.location.href.includes("index.html")?window.addEventListener("DOMContentLoaded",()=>{i.home.classList.add("active"),i.shopping.classList.remove("active"),i.homeMobal.classList.add("active"),i.shoppingMobal.classList.remove("active")}):window.location.href.includes("shopping.html")&&window.addEventListener("DOMContentLoaded",()=>{i.home.classList.remove("active"),i.shopping.classList.add("active"),i.homeMobal.classList.remove("active"),i.shoppingMobal.classList.add("active")});const c={body:document.querySelector("body"),authen:document.querySelector(".authentication"),authenClose:document.querySelector(".authentication-close"),headerSubmitCont:document.querySelector(".authentication-buttons"),headerSubmit:document.querySelector(".header-btn-submit"),headerSubmitModal:document.querySelector(".header-btn-submit-modal"),signUpLink:document.querySelector(".authentication-signup"),signInLink:document.querySelector(".authentication-signin")};function f(e){c.authen.classList.toggle("is-active",e),c.body.classList.toggle("authentication-open",e)}function de(){document.querySelector(".authentication-form-signup").classList.remove("hide"),c.signUpLink.classList.add("active"),document.querySelector(".authentication-form-signin").classList.add("hide"),c.signInLink.classList.remove("active")}function ue(){document.querySelector(".authentication-form-signin").classList.remove("hide"),c.signInLink.classList.add("active"),document.querySelector(".authentication-form-signup").classList.add("hide"),c.signUpLink.classList.remove("active")}c.authen&&(c.headerSubmitCont.addEventListener("click",e=>{e.target.classList.contains("header-btn-submit")&&f(!0)}),c.headerSubmitModal.addEventListener("click",()=>{f(!0)}),c.authenClose.addEventListener("click",()=>{f(!1)}),c.signUpLink.classList.add("active"),c.signUpLink.addEventListener("click",()=>{de()}),c.signInLink.addEventListener("click",()=>{ue()}));const pe=document.querySelector(".authentication-buttons"),ge={apiKey:"AIzaSyAVC9h8-zdX_Zwfa8u_SlIxJpF4-2QNWH4",authDomain:"bookshelf-pronto.firebaseapp.com",projectId:"bookshelf-pronto",storageBucket:"bookshelf-pronto.appspot.com",messagingSenderId:"1040567130254",appId:"1:1040567130254:web:b46de7db5d5f846b0f51df",measurementId:"G-7YPT2SGB8V"};te(ge);const L=oe(),d=document.querySelector(".authentication-form-signup");d&&d.addEventListener("submit",he);async function he(e){if(e.preventDefault(),!d.classList.contains("disable")){const t=d.querySelector("#name-up").value,o=d.querySelector("#email-up").value,s=d.querySelector("#password-up").value;K(d),Y(d),await me(d,t,o,s),Z(d)}}async function me(e,t,o,s){try{const n=await se(L,o,s);await ne(n.user,{displayName:t}),D(),T("Registration"),f(!1)}catch(n){j(e,n.code)}}const p=document.querySelector(".authentication-form-signin");p&&p.addEventListener("submit",fe);async function fe(e){if(e.preventDefault(),!p.classList.contains("disable")){const t=p.querySelector("#email-in").value,o=p.querySelector("#password-in").value;K(p),Y(p),await be(p,t,o),Z(p)}}async function be(e,t,o){try{const s=await ae(L,t,o);T("Authorization"),f(!1)}catch(s){j(e,s.code)}}pe.addEventListener("click",e=>{e.target.classList.contains("log-out")&&L.signOut().then(function(){T("Log out")}).catch(function(o){ye("Unable to log out")})});async function D(){try{ie(L,e=>{ve(e)})}catch(e){console.error("Check error:",e.code)}}function ve(e){const t=document.querySelector(".authentication-buttons");if(!e)t.innerHTML=`<button type="button" class="header-btn-submit">Sing up
    <svg width="20" height="20" class="header-sing-svg">
      <use href="../img/icons.svg#icon-header-vector-log-left"></use>
    </svg>
  </button>`;else{const o=e.displayName;t.innerHTML=`<div class="authorized">
    <button type="button" class="authorized-btn">
      <div class="authorized-data">
        <div class="authorized-ava-wrap">
          <img src="../img/shopping/book-apple.png" alt="" />
        </div>
        <p class="authorized-name">${o}</p>
      </div>
      <div class="authorized-vector-wrap">
        <svg width="23" height="26" class="authorized-vector">
          <use href="../img/icons.svg#icon-header-vector-down"></use>
        </svg>
      </div>
    </button>
    <button type="button" class="log-out">
      Log out
      <svg width="20" height="20" class="header-sing-svg">
        <use href="../img/icons.svg#icon-header-vector-log-left"></use>
      </svg>
    </button>
  </div>`}}D();function K(e){e.classList.add("disable")}function Z(e){e.classList.remove("disable")}function j(e,t){console.log(t);let o="An unknown error has occurred. Please try again.";const s=e.querySelector(".authentication-errorcont");t==="auth/email-already-in-use"&&(o="A user with this email address already exists."),t==="auth/invalid-credential"&&(o="Incorrect login or password"),t==="auth/weak-password"&&(o="Your password is too weak"),s.innerHTML=`<p class="auth-error">${o}</p>`}function Y(e){const t=e.querySelector(".authentication-errorcont");t.innerHTML=""}function T(e){q.success({message:`${e} is successful`,position:"bottomRight",icon:null})}function ye(e){q.error({message:e,position:"bottomRight",icon:null})}const u=new ce(".swiper",{direction:"vertical",loop:!1,initialSlide:0,speed:500,slidesPerView:6,effect:"slide",rewind:!0,breakpoints:{292:{slidesPerView:6}},spaceBetween:20,keyboard:{enabled:!0,onlyInViewport:!0},shortSwipes:!1,preventClicks:!0,disableMouseEvents:!0});u.allowTouchMove=!1;u.on("slideChange",function(){u.isEnd?u.allowTouchMove=!1:u.allowTouchMove=!0});const A=document.querySelector(".swiper-button");A.addEventListener("click",function(){u.activeIndex===2?A.classList.add("rotate"):A.classList.remove("rotate"),u.activeIndex<u.slides.length-1?u.slideNext():u.slideTo(0)});const x="/project-Pronto11/assets/icons-59613547.svg",F=(e,t)=>!e||e.length===0?`<div class="books-container"><h2 class="books-title">Best Sellers Books</h2>
    </div>${G()}`:`<h2 class="books-title">Best Sellers Books</h2>${e.map(s=>{const n=s.list_name,a=z(s.books.slice(0,t));return`<div class="books-category-container">
        <h3 class="books-category-title">${n}</h3>
        <ul class="books-list">${a}</ul>
        <div class="books-btn-container">
          <button data-catname="${n}" type="button" class="books-btn">see more</button>
        </div>
      </div>`}).join("")}`,R=e=>`<li class="categories-list">
  <a href="#" data-catname="" class="categories-nav active">All categories</a>
  </li>${e.sort((o,s)=>o.list_name<s.list_name?-1:o.list_name>s.list_name?1:0).map(o=>`<li class="categories-list">
      <a href="#" data-catname="${o.list_name}" class="categories-nav">${o.list_name}</a>
    </li>`).join("")}`;function G(){return q.error({message:"Sorry, no books found.",position:"topRight",icon:null}),`</div>
  <div class="empty-category">
  <svg class="icon-shopp-stub">
    <use href="${x}#icon-shopp-stub"></use>
    </svg>
  <span>Nothing found</span>
  </div>`}const Le=(e,t)=>{if(!e||e.length===0)return`<div class="books-container">
        <h2 class="books-title">${t}</h2>
        </div>${G()}`;{const o=z(e);return`<h2 class="books-title">${t}</h2>
    <div class="books-category-container">
      <ul class="books-list">${o}</ul>
    </div>`}};function z(e){return e.map(o=>{const{_id:s,book_image:n,title:a,author:l}=o;return`<li class="books-item">
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
          <p class="books-info-author">${l}</p>
        </div>
      </li>`}).join("")}const k="https://books-backend.p.goit.global";let w=JSON.parse(sessionStorage.getItem("savedfetch"))||"";const ke=async e=>{if(w)return F(w,e);{const o=k+"/books/top-books/";try{const s=await y.get(o);return sessionStorage.setItem("savedfetch",JSON.stringify(s.data)),w=s.data,F(s.data,e)}catch(s){console.log(s)}}};let C=JSON.parse(sessionStorage.getItem("savedcategoriesfetch"))||"";const Se=async()=>{const t=k+"/books/category-list/";if(C)return R(C);try{const o=await y.get(t);return sessionStorage.setItem("savedcategoriesfetch",JSON.stringify(o.data)),C=o.data,R(o.data)}catch(o){console.log(o)}},Ae=async e=>{const o=k+"/books/category/",s={category:e};try{const n=await y.get(o,{params:s});return Le(n.data,e)}catch(n){console.log(n)}},W=async e=>{const t=`/books/${e}`,o=k+t;try{return(await y.get(o)).data}catch(s){console.log(s)}},$=async e=>{const o=(JSON.parse(localStorage.getItem("shoppinglist"))||[]).filter(s=>s._id!==e);localStorage.setItem("shoppinglist",JSON.stringify(o))},we="data:image/png;base64,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",Ce="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOASURBVHgB7VdLaBRBEH3Vm91V/KwK/mIOcQ/GXPwgQQ8qSLz4QUWEXMSLIHjLxd/FY0CCSrxoQJEc1VMgIDkYEURCVEyCEA8aI35WQ0STYEyyO132zOzOdk9mZicQbykYZrrnddXrV101u8CiuUZRL7kjvcWShb0EWiuAlORovG6CwFIiz+BviaT1ks5gCPMhwfdQx0g+UI/bsXA2TLP5RjqPEVQiwe3YyiLZC6JMcQbBXMPmI3F5Im6gs/kBHVE1ZwmlHqt1GWdtMM8K85G4pMroQ2ZsJSpHEDqicCd1kiXVqguQdlLNe+mZfe/C5kLwW6z29CE9rkGCmA4oKWw5wAH30rMfEzYXjhdH9LhGOhTLLAXJXLUCyB4FVS1TAws8PgJ8eaJYCxO3aT9oRRZIpMBTOWD0FfAnh4AMVYeSEExpZh++4TJoRzOQXqn5UPbjNWT3aWDiE7C8BnTwLqhmv4mZGQf3XQMPtqkd6o5puRFXH0hLjbX8U+1x0O6rBgHP1u9Sge8rnHJyrNMg4Fk6A9rXAsqegu5XMItQJcA+eZfVIMqoeg84Uw+sqY/EYcl69yyUTJopN0lYtmcqVzbHKMPV2ypj2Dlvjk92Q4ST8E5vEWxLXZEGVVVCuH5luTFIcDgJVyYydhArQEUQzBREKQFL2M2iiOJ46YhBdA6JSCXsd17gmG05Nglt7OsvPiXILdqS41hKxMSUlCAfIQQowZpsJFHZ4mBYOzts84goURtIPL+DGY8EGWfC7zbgYPoWl2z6N3hs2Cly2rQzGFPIg39+UNhx0Lo6YOmqIlGa06BCSSgV2KBpy/h1ALLrCjj3RjkquJNLVkHsPgfReNHbluy5Ae69Df77y+tGNllx4tb8qoMltL6m1r3tBPo6ysFd18DUOOTTVvWYcKZldwvk85tFCHl3/twPq22vUiRjpI2jzoRSYtILZDuaHNPfwm+yRxGp3Qfuf6Q+3wkEm0rx9GTZJzmbnQklYUnKGRVc8WAqwPtnTuu2K0nTylhq9z+vBTrVgY8+mmVLsOjSP7mxLvvLG/ATEAFj7w7u0eOSb1+Uv7BhSD3U4X8ZYSTV+n0zwpRwsmbJJiVZwW3hC3xJTDDR4bm8AowvbajNz8L+EZnFghkPsqCm9PXcO8Qh4S1r3lhvCdHALKvViUrO52+gXaEq/3kSNMoJfhEUfNH89g83+MD9ZjdiQAAAAABJRU5ErkJggg==";async function Ie(){const e=document.querySelector(".books-container");e&&e.addEventListener("click",t);async function t(o){if(o.target.classList.contains("books-overlay")){const s=o.target.dataset.id,n=await W(s);Ee(n)}}}async function Ee(e){const t=document.querySelector(".popup-backdrop"),o=document.querySelector(".popup-window");o.innerHTML="";const s=Be(e);o.insertAdjacentHTML("beforeend",s);const n=document.querySelector(".popup-close-btn");l(),Me(),await Te(),t.addEventListener("click",v),document.addEventListener("keydown",H),n.addEventListener("click",b),document.addEventListener("keydown",a);function a(g){g.keyCode===32&&g.preventDefault()}function l(){t.classList.add("is-active"),document.body.classList.add("modal-open")}function b(){S(),n.removeEventListener("click",b),document.removeEventListener("keydown",a)}function v(g){g.target===g.currentTarget&&(S(),t.removeEventListener("click",v),document.removeEventListener("keydown",a))}function H(g){g.keyCode===27&&(S(),document.removeEventListener("keydown",H),document.removeEventListener("keydown",a))}function S(){t.classList.remove("is-active"),document.body.classList.remove("modal-open")}}function Me(){const e=document.querySelector(".popup-book-btn-add-to-shopinglist"),t=e.dataset.id;(JSON.parse(localStorage.getItem("shoppinglist"))||[]).map(n=>n._id).includes(t)?(e.textContent="REMOVE FROM THE SHOPPING LIST",e.insertAdjacentHTML("afterend",_())):e.textContent="ADD TO SHOPPING LIST"}function qe(e){let t=JSON.parse(localStorage.getItem("shoppinglist"))||[];t.push(e),localStorage.setItem("shoppinglist",JSON.stringify(t))}async function Te(){const e=document.querySelector(".popup-book-btn-add-to-shopinglist"),t=e.dataset.id,o=await W(t);e.addEventListener("click",s);function s(){(JSON.parse(localStorage.getItem("shoppinglist"))||[]).map(l=>l._id).includes(t)?($(t),document.querySelector(".under-btn-text").remove(),e.textContent="ADD TO SHOPPING LIST"):(qe(o),e.textContent="REMOVE FROM THE SHOPPING LIST",e.insertAdjacentHTML("afterend",_()))}}function Be(e){const{_id:t,author:o,title:s,book_image:n,buy_links:a,description:l=""}=e,[b,v]=a;return`<button class="popup-close-btn">
      <svg class="popup-close-btn-icon" width="28" height="28">
        <use href="${x}#icon-header-close"></use>
      </svg>
    </button>
    <div class="popup-book">
      <div class="popup-wrap-img">
        <img class="popup-book-image" src="${n}" alt="обкладинка" />
      </div>
      <div class="popup-book-content">
        <h4 class="popup-book-title">${s}</h4>
        <p class="popup-book-author">${o}</p>
        <p class="popup-book-review">${l}</p>
        <ul class="popup-shopping-links">
          <li>
            <a
              href="${b.url}"
              target="blank"
              rel="nofollow noopener noreferrer"
              aria-label="Link to shop"
              class="amazon popup-shopping-links-icon"
            >
              <img
                src="${we}"
                class="popup-shopping-links-icon"
                alt="Logo of shop"
                width="62"
              />
            </a>
          </li>
          <li>
            <a
              href="${v.url}"
              target="blank"
              rel="nofollow noopener noreferrer"
              aria-label="Link to shop"
              class="book popup-shopping-links-icon"
            >
              <img
                src="${Ce}"
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
    </div>`}function _(){return`
      <p class="under-btn-text">
        Congratulations! You have added the book to the shopping list. To
        delete, press the button "Remove from the shopping list".
      </p>
    `}const h=document.querySelector(".books-container"),m=document.querySelector(".categories-menu");let N;async function M(){O();const e=window.innerWidth,t=P(e),o=await ke(t);h.innerHTML=o,N||(Ie(),N=!0),B()}async function Pe(){const e=await Se();m.innerHTML=e}async function V(e){O();const t=await Ae(e);h.innerHTML=t,B()}async function B(){const e=document.querySelector(".books-title"),t=e.textContent.split(" "),o=t.pop(),s=t.join(" ")+(t.length>0?` <span  class="books-title-color">${o}</span>`:o);e.innerHTML=s}function P(e){let t=5;return e>=1440&&(t=5),e>=768&&e<1440&&(t=3),e<768&&(t=1),t}const Oe=window.innerWidth;let J=P(Oe);async function He(){const e=document.querySelector(".categories-nav.active");if(e&&!e.dataset.catname){const o=window.innerWidth,s=P(o);J!==s&&(J=s,O(),await M(),B())}}h&&(M(),Pe(),m.addEventListener("click",e=>{e.preventDefault();const t=e.target;if(t.tagName==="A"){const o=t.dataset.catname;m.querySelector(".active").classList.remove("active"),t.classList.add("active"),U(h,{offset:-24,duration:500}),o?V(o):M()}}),h.addEventListener("click",e=>{e.preventDefault();const t=e.target;if(t.classList.contains("books-btn")){const o=t.dataset.catname;m.querySelector(".active").classList.remove("active"),m.querySelector('[data-catname="'+o+'"]').classList.add("active"),U(h,{offset:-24,duration:700}).on("end",()=>{V(o)})}}),window.addEventListener("resize",He));function O(){h.innerHTML='<li class="loader-container"><span class="loader"></span></li>'}const X={emptyPage:document.querySelector(".empty-page"),shoppingList:document.querySelector(".shopping-list"),pagesContainer:document.querySelector("#pagination-wrapper")};function Ue(){return matchMedia("(min-width: 768px)").matches?3:2}function ee(){const e=X.shoppingList.querySelectorAll(".shopping-item"),t=Ue(),o={totalItems:e.length,itemsPerPage:3,page:1,visiblePages:t,centerAlign:!1,template:{page:'<a href="#" class="tui-page-btn"><span class="number-text">{{page}}</span></a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}} custom-class-{{type}}"><span class="tui-ico-{{type}}"></span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}} custom-class-{{type}}"><span class="tui-ico-{{type}}"></span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip custom-class-{{type}}"><span class="tui-ico-ellip">...</span></a>'}};Math.ceil(e.length/o.itemsPerPage),new re(X.pagesContainer,o).on("afterMove",function(n){console.log(n),o.page=n.page})}const r={emptyPage:document.querySelector(".empty-page"),shoppingList:document.querySelector(".shopping-list"),pagesContainer:document.querySelector("#pagination-wrapper")},Fe=3;function Re(){r.pagesContainer===null&&r.emptyPage===null&&r.shoppingList===null||Ne()}Re();function Ne(){const e=JSON.parse(localStorage.getItem("shoppinglist"))||[];if(e.length===0){r.emptyPage.classList.remove("hidden");return}r.emptyPage.classList.add("hidden"),Ve(e)}function Ve(e){const t=e.map(o=>`<li class="shopping-item" data-book-id="${o._id}">
      <div class="shopping-photo">
        <img src="${o.book_image}" alt="book cover" />
      </div>
      <div class="shopping-content">
        <div>
          <p class="shopping-subtitle">${o.title}</p>
          <p class="genre">${o.list_name}</p>
          <p class="book-desc">${o.description}</p>
        </div>
        <p class="shopping-author">${o.author}</p>
      </div>
      <button type="button" class="shopping-trash">
        <svg width="18" height="18" class="trash-icon">
          <use href="./img/icons.svg#icon-shopp-trash"></use>
        </svg>
      </button>

      <div class="shop-buttons">
        <a href="#" target="_blank" class="shop-amazon">
          <img
            src="./img/shopping/amazon.png"
            alt="Logo of shop"
            width="62"
          />
        </a>
        <a href="#" target="_blank" class="shop-apple">
          <img
            src="./img/shopping/book-apple.png"
            alt="Logo of shop"
            width="33"
          />
        </a>
      </div>
    </li>`);Je(t)}function Je(e){const t=e.join("");r.shoppingList.insertAdjacentHTML("beforeend",t),De(),Xe(),Qe()}function Xe(){const e=Array.from(r.shoppingList.querySelectorAll(".shopping-item")),t=Math.ceil(e.length/Fe);for(let o=0;o<t;o+=1)e.slice(o*3,o*3+(o+3))}function Qe(){r.shoppingList.querySelectorAll(".shopping-item").length>3&&ee()}function De(){r.shoppingList.querySelectorAll(".shopping-item").forEach(t=>{t.addEventListener("click",Ke)})}function Ke(e){if(e.target.classList.contains("shopping-trash")||e.target.nodeName==="use"||e.target.nodeName==="svg"){const t=e.currentTarget,o=e.currentTarget.dataset.bookId;$(o),t.remove(),Ze()}}function Ze(){const e=r.shoppingList.querySelectorAll(".shopping-item");if(console.log(e),e.length===0){r.emptyPage.classList.remove("hidden");return}e.length>3?ee():r.pagesContainer.classList.add("hidden")}
//# sourceMappingURL=main-32b4ed23.js.map
