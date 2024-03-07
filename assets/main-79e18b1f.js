import{i as $,g as _,c as ee,u as te,s as oe,o as se,a as M,S as ne,b as v,d as U,P as ae}from"./vendor-5f004ee5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function o(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(n){if(n.ep)return;n.ep=!0;const a=o(n);fetch(n.href,a)}})();const X=document.querySelector(".toggle-checkbox");document.addEventListener("DOMContentLoaded",()=>{localStorage.getItem("theme")==="theme-dark"&&(I("theme-dark"),X.checked=!0)});function I(e){localStorage.setItem("theme",e),document.documentElement.setAttribute("data-theme",e)}X.addEventListener("click",()=>{localStorage.getItem("theme")==="theme-dark"?I("theme-light"):I("theme-dark")});const C=document.querySelector(".scroll-up");window.addEventListener("scroll",()=>{window.scrollY>120?C.classList.add("show"):C.classList.remove("show")});C.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const i={body:document.querySelector("body"),burger:document.querySelector(".header-btn-burgher"),headerNav:document.querySelector(".header-menu"),headerLink:document.querySelectorAll(".header-nav-item-modal"),home:document.querySelector(".header-home"),shopping:document.querySelector(".header-shopping"),homeMobal:document.querySelector(".header-home-modal"),shoppingMobal:document.querySelector(".header-shopping-modal")};function ie(){i.burger.classList.toggle("active"),i.headerNav.classList.toggle("active"),i.body.classList.toggle("lock")}i.burger.addEventListener("click",ie);window.addEventListener("DOMContentLoaded",()=>{i.home.classList.add("active"),i.homeMobal.classList.add("active")});window.location.href.includes("index.html")?window.addEventListener("DOMContentLoaded",()=>{i.home.classList.add("active"),i.shopping.classList.remove("active"),i.homeMobal.classList.add("active"),i.shoppingMobal.classList.remove("active")}):window.location.href.includes("shopping.html")&&window.addEventListener("DOMContentLoaded",()=>{i.home.classList.remove("active"),i.shopping.classList.add("active"),i.homeMobal.classList.remove("active"),i.shoppingMobal.classList.add("active")});const r={body:document.querySelector("body"),authen:document.querySelector(".authentication"),authenClose:document.querySelector(".authentication-close"),headerSubmitCont:document.querySelector(".authentication-buttons"),headerSubmit:document.querySelector(".header-btn-submit"),headerSubmitModal:document.querySelector(".header-btn-submit-modal"),signUpLink:document.querySelector(".authentication-signup"),signInLink:document.querySelector(".authentication-signin")};function m(e){r.authen.classList.toggle("is-active",e),r.body.classList.toggle("authentication-open",e)}function re(){document.querySelector(".authentication-form-signup").classList.remove("hide"),r.signUpLink.classList.add("active"),document.querySelector(".authentication-form-signin").classList.add("hide"),r.signInLink.classList.remove("active")}function ce(){document.querySelector(".authentication-form-signin").classList.remove("hide"),r.signInLink.classList.add("active"),document.querySelector(".authentication-form-signup").classList.add("hide"),r.signUpLink.classList.remove("active")}r.authen&&(r.headerSubmitCont.addEventListener("click",e=>{e.target.classList.contains("header-btn-submit")&&m(!0)}),r.headerSubmitModal.addEventListener("click",()=>{m(!0)}),r.authenClose.addEventListener("click",()=>{m(!1)}),r.signUpLink.classList.add("active"),r.signUpLink.addEventListener("click",()=>{re()}),r.signInLink.addEventListener("click",()=>{ce()}));const le=document.querySelector(".authentication-buttons"),de={apiKey:"AIzaSyAVC9h8-zdX_Zwfa8u_SlIxJpF4-2QNWH4",authDomain:"bookshelf-pronto.firebaseapp.com",projectId:"bookshelf-pronto",storageBucket:"bookshelf-pronto.appspot.com",messagingSenderId:"1040567130254",appId:"1:1040567130254:web:b46de7db5d5f846b0f51df",measurementId:"G-7YPT2SGB8V"};$(de);const y=_(),l=document.querySelector(".authentication-form-signup");l&&l.addEventListener("submit",ue);async function ue(e){if(e.preventDefault(),!l.classList.contains("disable")){const t=l.querySelector("#name-up").value,o=l.querySelector("#email-up").value,s=l.querySelector("#password-up").value;Q(l),Y(l),await pe(l,t,o,s),K(l)}}async function pe(e,t,o,s){try{const n=await ee(y,o,s);await te(n.user,{displayName:t}),D(),T("Registration"),m(!1)}catch(n){Z(e,n.code)}}const u=document.querySelector(".authentication-form-signin");u&&u.addEventListener("submit",ge);async function ge(e){if(e.preventDefault(),!u.classList.contains("disable")){const t=u.querySelector("#email-in").value,o=u.querySelector("#password-in").value;Q(u),Y(u),await he(u,t,o),K(u)}}async function he(e,t,o){try{const s=await oe(y,t,o);T("Authorization"),m(!1)}catch(s){Z(e,s.code)}}le.addEventListener("click",e=>{e.target.classList.contains("log-out")&&y.signOut().then(function(){T("Log out")}).catch(function(o){fe("Unable to log out")})});async function D(){try{se(y,e=>{me(e)})}catch(e){console.error("Check error:",e.code)}}function me(e){const t=document.querySelector(".authentication-buttons");if(!e)t.innerHTML=`<button type="button" class="header-btn-submit">Sing up
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
  </div>`}}D();function Q(e){e.classList.add("disable")}function K(e){e.classList.remove("disable")}function Z(e,t){console.log(t);let o="An unknown error has occurred. Please try again.";const s=e.querySelector(".authentication-errorcont");t==="auth/email-already-in-use"&&(o="A user with this email address already exists."),t==="auth/invalid-credential"&&(o="Incorrect login or password"),t==="auth/weak-password"&&(o="Your password is too weak"),s.innerHTML=`<p class="auth-error">${o}</p>`}function Y(e){const t=e.querySelector(".authentication-errorcont");t.innerHTML=""}function T(e){M.success({message:`${e} is successful`,position:"bottomRight",icon:null})}function fe(e){M.error({message:e,position:"bottomRight",icon:null})}const d=new ne(".swiper",{direction:"vertical",loop:!1,initialSlide:0,speed:500,slidesPerView:6,effect:"slide",rewind:!0,breakpoints:{292:{slidesPerView:6}},spaceBetween:20,keyboard:{enabled:!0,onlyInViewport:!0},shortSwipes:!1,preventClicks:!0,disableMouseEvents:!0});d.allowTouchMove=!1;d.on("slideChange",function(){d.isEnd?d.allowTouchMove=!1:d.allowTouchMove=!0});const S=document.querySelector(".swiper-button");S.addEventListener("click",function(){d.activeIndex===2?S.classList.add("rotate"):S.classList.remove("rotate"),d.activeIndex<d.slides.length-1?d.slideNext():d.slideTo(0)});const x="/project-Pronto11/assets/icons-59613547.svg",F=(e,t)=>!e||e.length===0?`<div class="books-container"><h2 class="books-title">Best Sellers Books</h2>
    </div>${G()}`:`<h2 class="books-title">Best Sellers Books</h2>${e.map(s=>{const n=s.list_name,a=j(s.books.slice(0,t));return`<div class="books-category-container">
        <h3 class="books-category-title">${n}</h3>
        <ul class="books-list">${a}</ul>
        <div class="books-btn-container">
          <button data-catname="${n}" type="button" class="books-btn">see more</button>
        </div>
      </div>`}).join("")}`,R=e=>`<li class="categories-list">
  <a href="#" data-catname="" class="categories-nav active">All categories</a>
  </li>${e.sort((o,s)=>o.list_name<s.list_name?-1:o.list_name>s.list_name?1:0).map(o=>`<li class="categories-list">
      <a href="#" data-catname="${o.list_name}" class="categories-nav">${o.list_name}</a>
    </li>`).join("")}`;function G(){return M.error({message:"Sorry, no books found.",position:"topRight",icon:null}),`</div>
  <div class="empty-category">
  <svg class="icon-shopp-stub">
    <use href="${x}#icon-shopp-stub"></use>
    </svg>
  <span>Nothing found</span>
  </div>`}const be=(e,t)=>{if(!e||e.length===0)return`<div class="books-container">
        <h2 class="books-title">${t}</h2>
        </div>${G()}`;{const o=j(e);return`<h2 class="books-title">${t}</h2>
    <div class="books-category-container">
      <ul class="books-list">${o}</ul>
    </div>`}};function j(e){return e.map(o=>{const{_id:s,book_image:n,title:a,author:c}=o;return`<li class="books-item">
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
          <p class="books-info-author">${c}</p>
        </div>
      </li>`}).join("")}const L="https://books-backend.p.goit.global";let A=JSON.parse(sessionStorage.getItem("savedfetch"))||"";const ve=async e=>{if(A)return F(A,e);{const o=L+"/books/top-books/";try{const s=await v.get(o);return sessionStorage.setItem("savedfetch",JSON.stringify(s.data)),A=s.data,F(s.data,e)}catch(s){console.log(s)}}};let w=JSON.parse(sessionStorage.getItem("savedcategoriesfetch"))||"";const ye=async()=>{const t=L+"/books/category-list/";if(w)return R(w);try{const o=await v.get(t);return sessionStorage.setItem("savedcategoriesfetch",JSON.stringify(o.data)),w=o.data,R(o.data)}catch(o){console.log(o)}},Le=async e=>{const o=L+"/books/category/",s={category:e};try{const n=await v.get(o,{params:s});return be(n.data,e)}catch(n){console.log(n)}},z=async e=>{const t=`/books/${e}`,o=L+t;try{return(await v.get(o)).data}catch(s){console.log(s)}},ke=async e=>{const o=(JSON.parse(localStorage.getItem("shoppinglist"))||[]).filter(s=>s._id!==e);localStorage.setItem("shoppinglist",JSON.stringify(o))},Se="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAAUCAYAAADV9o4UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAc1SURBVHgBxVdrbFRFFD4z925pSxfa2gZoy+522yAUAYFUKyJiQDCQqICAiQZreGrAgkBiVFKg4Yc/BIKhPAI/KkpKMGBigoSXJiK04VHAoLQu2+22JV1anoV27Xbv+M3du5eb0iaVLvFsZud13nPOmbmMLOBwOPJUIV7FMJ6EqNZU9YzP57sb3R86dGhOv1CoH2fsZmcwGCK7PV/jXMVWhcRLS0uzJyUkTBCcA4WdtdIa/FNUxiYIohFM024DrcpTV1cV3Zf09vj4bMhm1BXi4ppqa2sD0akLQOHwGFKUIKaXIavJspesBoMZQVUNNTQ0/J3rcIwME+VpjEFcRJ4uwJWePlhJSNgFhWYQY6pFnIfbbG97PJ6rcuJ2uZqg1CAM9woh8mHcaB1LiD/CjBWC8DtplEFbyzs7J3kaGxvkJMfpnIW9vRimWPgL8Nh23edbJcduh2MK5J+gbgCe/Mrj8302fvx42+2Wls1QfIl0h7EdAN0Gr8+3Q9fT4SjCfKu+o2kfE+dbMOpn6LrR6/cXczmG0SXQ4E0oxtF+xNIhg2Gu6OjYZJEfPYk3TKP1VTZKIdpvMVpCtlDVZTqTzMws7G2XRqOvhdN2Y9woKTEuglNeMpS6h/+7lhaKMgsL0Sr7O7durYESyw2jT4LfX+gHgc/Xbrc73/Bm3COP8XWm0RFdVyEiBkvDGULgeRBK75fX1tXN8tbVzQHDSp0J5+OoCwA1XguHC9DPNdeI0oE7DZuvR6b6X57udEUZLqTRQmga0ZRav38plotMWk0rkL23vv48ZKfIhhAeA/ywIbC+LRjcOnnyZBXjIoN3BfCmKjbbWExb4IwEEQ4XdaPrORYMSsccM5bsaLrhAsbmQ5n4lLS0wtTU1AG58gSE4Aal2pUZwq7S19BQCZrDmHbqjiSqQg4eRxidgFdbDKE6D7kGGQkP2tsHIsd8slYAx2Eqx3m8lT+8qSB/D+Mg9HWZRoFA4CH4yygbpMsT4qjskYb/QE6loess3TmG4w28kuuBwE3GebnFGQmmUdlO55I7LS0fJtvt4zRJwB6vL1HQjLCTOoFLEMhJYPbA6uaIVGYq4HQ6RyAdVg9wueZh205C9Mj/gsu1Bvt6pCEMd9f5fKd0hwsxkqJ6CXHfNI6xgNEn3qiuTkYhNHmFOW/U94jaLRKZfiJup7MUG99gKIXth2LzgFTVk2LMYpCI5r1lravXZAWG0fKEFsJpjSg4n6Iv7o53TlZWLkJ/nTG9HhcObzBlCaF0R2OmhDQ0MZH3pKsVOK4Yt1RIn2naIeTNewjhgyBopj4CM0KOa9oH6PTQVjs6ZiOXtyiMne6OBAXxB8jur9Mxtqi6vv5GdFNVFF90DMb9TSLG7PpapE7do14Ah1LpZFwLINKvHhxQPHiMMnCSjLx5cmAsNzps4/ymoWS+uU2UKfsch2MRNsZE1xEVP6PiNyAi92RmZg4jVb2I/UhNUZRJspfXG5ww0eBzWuZ8LzSCU202eW1oujKMzc12OBYgnsrBZIiBY/d7vSXUNzDz0aaqJZCxQl4r5i5jc0Y4nUMg/8UudPEi4pSFcaq6C0bdB26ZTiLEa6hLX95pbt4GXbPkGh5TpdRLUFEpa6CIDO35mA9BX4bTCELgJnh3pVSaqepJ6gOgKJXiynwfwwFIwI9kgYKyZyDnMMbL0J9tZ6ydR15s5+UjRtO0a3jZdWA+DPvTmZHfuAG+QEq+jOFwIJdEix303YzX24He6qSX/hBeNyrnp5gMb0VpQ4iVy6cdKvFF1tnpRc5fMvDXYy8duXfBNIroczwukkF7ycK32Irn8fuvZmdkvAAHFsKIJCTYZcg5mJKS0oZX2Hnc0eXyusrLy1vbBqgt9HVSGg2kVPinhg6w9bQR6fes5CWfrenp6flJiYnvwuQCyA3D6J+g4xGKXmOcH8M7IxGHqMEZeq3CE/kKKqBeUMOaVsd64x28s6aC5Rm2lNroKYLYQS548hOYuxjykozle7jVZ7JF9DvFEHivsDrID0XOiZ1UJB49W2MPHLmq0W9oM9EmQtJarA4kef4xhl4bIfaSGy/no6CIg4I7odh+RICfYgyijJ6hIMk3fg2eR16cNnKenmNL6CrFEP7T6Yld8D5yGk2ehAz7X8HhW0RDRV+cAKfacaqzwWsGeL1F8sOD0XyM5cdLMXi7KcbwRGErtuMrTCX5hTXRsuxBqwDHP6HwFRjihTl+toAemnS/gKqGMrCfh6gZi96NVgCa4SQLraBWtNX4yNyHghaEo48Dbx9bDOfGGPqUr6KUXoFiK8FFfpHZe0CTz8kQDFKAp3YjU+B3DXz2oJaUseV0S1/8Ht/trbiultIK3FiCYgwxKVQ4mTRwegd5Px39aKjpMIzsBlmXKl9vDRgfgcEnjBsj9Biq0F/9MTea6ClUaHyhKzQNhofw+chQE1TcxmGyYbUNJtyAc5oxa2ILqZX+R/gXwX4lQjhmK8gAAAAASUVORK5CYII=",Ae="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOASURBVHgB7VdLaBRBEH3Vm91V/KwK/mIOcQ/GXPwgQQ8qSLz4QUWEXMSLIHjLxd/FY0CCSrxoQJEc1VMgIDkYEURCVEyCEA8aI35WQ0STYEyyO132zOzOdk9mZicQbykYZrrnddXrV101u8CiuUZRL7kjvcWShb0EWiuAlORovG6CwFIiz+BviaT1ks5gCPMhwfdQx0g+UI/bsXA2TLP5RjqPEVQiwe3YyiLZC6JMcQbBXMPmI3F5Im6gs/kBHVE1ZwmlHqt1GWdtMM8K85G4pMroQ2ZsJSpHEDqicCd1kiXVqguQdlLNe+mZfe/C5kLwW6z29CE9rkGCmA4oKWw5wAH30rMfEzYXjhdH9LhGOhTLLAXJXLUCyB4FVS1TAws8PgJ8eaJYCxO3aT9oRRZIpMBTOWD0FfAnh4AMVYeSEExpZh++4TJoRzOQXqn5UPbjNWT3aWDiE7C8BnTwLqhmv4mZGQf3XQMPtqkd6o5puRFXH0hLjbX8U+1x0O6rBgHP1u9Sge8rnHJyrNMg4Fk6A9rXAsqegu5XMItQJcA+eZfVIMqoeg84Uw+sqY/EYcl69yyUTJopN0lYtmcqVzbHKMPV2ypj2Dlvjk92Q4ST8E5vEWxLXZEGVVVCuH5luTFIcDgJVyYydhArQEUQzBREKQFL2M2iiOJ46YhBdA6JSCXsd17gmG05Nglt7OsvPiXILdqS41hKxMSUlCAfIQQowZpsJFHZ4mBYOzts84goURtIPL+DGY8EGWfC7zbgYPoWl2z6N3hs2Cly2rQzGFPIg39+UNhx0Lo6YOmqIlGa06BCSSgV2KBpy/h1ALLrCjj3RjkquJNLVkHsPgfReNHbluy5Ae69Df77y+tGNllx4tb8qoMltL6m1r3tBPo6ysFd18DUOOTTVvWYcKZldwvk85tFCHl3/twPq22vUiRjpI2jzoRSYtILZDuaHNPfwm+yRxGp3Qfuf6Q+3wkEm0rx9GTZJzmbnQklYUnKGRVc8WAqwPtnTuu2K0nTylhq9z+vBTrVgY8+mmVLsOjSP7mxLvvLG/ATEAFj7w7u0eOSb1+Uv7BhSD3U4X8ZYSTV+n0zwpRwsmbJJiVZwW3hC3xJTDDR4bm8AowvbajNz8L+EZnFghkPsqCm9PXcO8Qh4S1r3lhvCdHALKvViUrO52+gXaEq/3kSNMoJfhEUfNH89g83+MD9ZjdiQAAAAABJRU5ErkJggg==";async function we(){const e=document.querySelector(".books-container");e&&e.addEventListener("click",t);async function t(o){if(o.target.classList.contains("books-overlay")){const s=o.target.dataset.id,n=await z(s);Ie(n)}}}async function Ie(e){const t=document.querySelector(".popup-backdrop"),o=document.querySelector(".popup-window");o.innerHTML="";const s=Te(e);o.insertAdjacentHTML("beforeend",s);const n=document.querySelector(".popup-close-btn");c(),Ce(),await Me(),t.addEventListener("click",b),document.addEventListener("keydown",H),n.addEventListener("click",f),document.addEventListener("keydown",a);function a(p){p.keyCode===32&&p.preventDefault()}function c(){t.classList.add("is-active"),document.body.classList.add("modal-open")}function f(){k(),n.removeEventListener("click",f),document.removeEventListener("keydown",a)}function b(p){p.target===p.currentTarget&&(k(),t.removeEventListener("click",b),document.removeEventListener("keydown",a))}function H(p){p.keyCode===27&&(k(),document.removeEventListener("keydown",H),document.removeEventListener("keydown",a))}function k(){t.classList.remove("is-active"),document.body.classList.remove("modal-open")}}function Ce(){const e=document.querySelector(".popup-book-btn-add-to-shopinglist"),t=e.dataset.id;(JSON.parse(localStorage.getItem("shoppinglist"))||[]).map(n=>n._id).includes(t)?(e.textContent="REMOVE FROM THE SHOPPING LIST",e.insertAdjacentHTML("afterend",W())):e.textContent="ADD TO SHOPPING LIST"}function Ee(e){let t=JSON.parse(localStorage.getItem("shoppinglist"))||[];t.push(e),localStorage.setItem("shoppinglist",JSON.stringify(t))}async function Me(){const e=document.querySelector(".popup-book-btn-add-to-shopinglist"),t=e.dataset.id,o=await z(t);e.addEventListener("click",s);function s(){(JSON.parse(localStorage.getItem("shoppinglist"))||[]).map(c=>c._id).includes(t)?(ke(t),document.querySelector(".under-btn-text").remove(),e.textContent="ADD TO SHOPPING LIST"):(Ee(o),e.textContent="REMOVE FROM THE SHOPPING LIST",e.insertAdjacentHTML("afterend",W()))}}function Te(e){const{_id:t,author:o,title:s,book_image:n,buy_links:a,description:c=""}=e,[f,b]=a;return`<button class="popup-close-btn">
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
        <p class="popup-book-review">${c}</p>
        <ul class="popup-shopping-links">
          <li>
            <a
              href="${f.url}"
              target="blank"
              rel="nofollow noopener noreferrer"
              aria-label="Link to shop"
              class="amazon popup-shopping-links-icon"
            >
              <img
                src="${Se}"
                class="popup-shopping-links-icon"
                alt="Logo of shop"
                width="62"
              />
            </a>
          </li>
          <li>
            <a
              href="${b.url}"
              target="blank"
              rel="nofollow noopener noreferrer"
              aria-label="Link to shop"
              class="book popup-shopping-links-icon"
            >
              <img
                src="${Ae}"
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
    </div>`}function W(){return`
      <p class="under-btn-text">
        Congratulations! You have added the book to the shopping list. To
        delete, press the button "Remove from the shopping list".
      </p>
    `}const g=document.querySelector(".books-container"),h=document.querySelector(".categories-menu");let P;async function E(){O();const e=window.innerWidth,t=B(e),o=await ve(t);g.innerHTML=o,P||(we(),P=!0),q()}async function qe(){const e=await ye();h.innerHTML=e}async function N(e){O();const t=await Le(e);g.innerHTML=t,q()}async function q(){const e=document.querySelector(".books-title"),t=e.textContent.split(" "),o=t.pop(),s=t.join(" ")+(t.length>0?` <span  class="books-title-color">${o}</span>`:o);e.innerHTML=s}function B(e){let t=5;return e>=1440&&(t=5),e>=768&&e<1440&&(t=3),e<768&&(t=1),t}const Be=window.innerWidth;let V=B(Be);async function Oe(){const e=document.querySelector(".categories-nav.active");if(e&&!e.dataset.catname){const o=window.innerWidth,s=B(o);V!==s&&(V=s,O(),await E(),q())}}g&&(E(),qe(),h.addEventListener("click",e=>{e.preventDefault();const t=e.target;if(t.tagName==="A"){const o=t.dataset.catname;h.querySelector(".active").classList.remove("active"),t.classList.add("active"),U(g,{offset:-24,duration:500}),o?N(o):E()}}),g.addEventListener("click",e=>{e.preventDefault();const t=e.target;if(t.classList.contains("books-btn")){const o=t.dataset.catname;h.querySelector(".active").classList.remove("active"),h.querySelector('[data-catname="'+o+'"]').classList.add("active"),U(g,{offset:-24,duration:700}).on("end",()=>{N(o)})}}),window.addEventListener("resize",Oe));function O(){g.innerHTML='<li class="loader-container"><span class="loader"></span></li>'}const J=document.querySelector("#pagination-wrapper");function He(){return matchMedia("(min-width: 768px)").matches?3:2}const Ue=He(),Fe={totalItems:10,itemsPerPage:3,visiblePages:Ue,centerAlign:!1,template:{page:'<a href="#" class="tui-page-btn"><span class="number-text">{{page}}</span></a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}} custom-class-{{type}}"><span class="tui-ico-{{type}}"></span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}} custom-class-{{type}}"><span class="tui-ico-{{type}}"></span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip custom-class-{{type}}"><span class="tui-ico-ellip">...</span></a>'}};function Re(){J!==null&&new ae(J,Fe)}Re();
//# sourceMappingURL=main-79e18b1f.js.map
