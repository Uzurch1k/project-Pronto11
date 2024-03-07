import{i as T,a as S,P as de,b as ue,g as pe,c as ge,u as he,s as me,o as K,d as fe,e as be,r as x,f as ye,S as ve,h as R}from"./vendor-dc6e18bd.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(n){if(n.ep)return;n.ep=!0;const a=o(n);fetch(n.href,a)}})();const Z=document.querySelector(".toggle-checkbox");document.addEventListener("DOMContentLoaded",()=>{localStorage.getItem("theme")==="theme-dark"&&(M("theme-dark"),Z.checked=!0)});function M(e){localStorage.setItem("theme",e),document.documentElement.setAttribute("data-theme",e)}Z.addEventListener("click",()=>{localStorage.getItem("theme")==="theme-dark"?M("theme-light"):M("theme-dark")});const q=document.querySelector(".scroll-up");window.addEventListener("scroll",()=>{window.scrollY>120?q.classList.add("show"):q.classList.remove("show")});q.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const c={body:document.querySelector("body"),burger:document.querySelector(".header-btn-burgher"),headerNav:document.querySelector(".header-menu"),headerLink:document.querySelectorAll(".header-nav-item-modal"),home:document.querySelector(".header-home"),shopping:document.querySelector(".header-shopping"),homeMobal:document.querySelector(".header-home-modal"),shoppingMobal:document.querySelector(".header-shopping-modal")};function ke(){c.burger.classList.toggle("active"),c.headerNav.classList.toggle("active"),c.body.classList.toggle("lock")}c.burger.addEventListener("click",ke);window.addEventListener("DOMContentLoaded",()=>{c.home.classList.add("active"),c.homeMobal.classList.add("active")});window.location.href.includes("index.html")?window.addEventListener("DOMContentLoaded",()=>{c.home.classList.add("active"),c.shopping.classList.remove("active"),c.homeMobal.classList.add("active"),c.shoppingMobal.classList.remove("active")}):window.location.href.includes("shopping.html")&&window.addEventListener("DOMContentLoaded",()=>{c.home.classList.remove("active"),c.shopping.classList.add("active"),c.homeMobal.classList.remove("active"),c.shoppingMobal.classList.add("active")});const l={body:document.querySelector("body"),authen:document.querySelector(".authentication"),authenClose:document.querySelector(".authentication-close"),headerSubmitCont:document.querySelector(".authentication-buttons"),headerSubmitContMob:document.querySelector(".authentication-buttons-mob"),headerSubmit:document.querySelector(".header-btn-submit"),headerSubmitModal:document.querySelector(".header-btn-submit-modal"),signUpLink:document.querySelector(".authentication-signup"),signInLink:document.querySelector(".authentication-signin")};function b(e){l.authen.classList.toggle("is-active",e),l.body.classList.toggle("authentication-open",e)}function Le(){document.querySelector(".authentication-form-signup").classList.remove("hide"),l.signUpLink.classList.add("active"),document.querySelector(".authentication-form-signin").classList.add("hide"),l.signInLink.classList.remove("active")}function Se(){document.querySelector(".authentication-form-signin").classList.remove("hide"),l.signInLink.classList.add("active"),document.querySelector(".authentication-form-signup").classList.add("hide"),l.signUpLink.classList.remove("active")}l.authen&&(l.headerSubmitCont.addEventListener("click",e=>{e.target.classList.contains("header-btn-submit")&&b(!0)}),l.headerSubmitContMob.addEventListener("click",e=>{e.target.classList.contains("header-btn-submit")&&b(!0)}),l.authenClose.addEventListener("click",()=>{b(!1)}),l.signUpLink.classList.add("active"),l.signUpLink.addEventListener("click",()=>{Le()}),l.signInLink.addEventListener("click",()=>{Se()}));const j="/project-Pronto11/assets/icons-59613547.svg",J=(e,t)=>!e||e.length===0?`<div class="books-container"><h2 class="books-title">Best Sellers Books</h2>
    </div>${Y()}`:`<h2 class="books-title">Best Sellers Books</h2>${e.map(s=>{const n=s.list_name,a=G(s.books.slice(0,t));return`<div class="books-category-container">
        <h3 class="books-category-title">${n}</h3>
        <ul class="books-list">${a}</ul>
        <div class="books-btn-container">
          <button data-catname="${n}" type="button" class="books-btn">see more</button>
        </div>
      </div>`}).join("")}`,V=e=>`<li class="categories-list">
  <a href="#" data-catname="" class="categories-nav active">All categories</a>
  </li>${e.sort((o,s)=>o.list_name<s.list_name?-1:o.list_name>s.list_name?1:0).map(o=>`<li class="categories-list">
      <a href="#" data-catname="${o.list_name}" class="categories-nav">${o.list_name}</a>
    </li>`).join("")}`;function Y(){return T.error({message:"Sorry, no books found.",position:"topRight",icon:null}),`</div>
  <div class="empty-category">
  <svg class="icon-shopp-stub">
    <use href="${j}#icon-shopp-stub"></use>
    </svg>
  <span>Nothing found</span>
  </div>`}const we=(e,t)=>{if(!e||e.length===0)return`<div class="books-container">
        <h2 class="books-title">${t}</h2>
        </div>${Y()}`;{const o=G(e);return`<h2 class="books-title">${t}</h2>
    <div class="books-category-container">
      <ul class="books-list">${o}</ul>
    </div>`}};function G(e){return e.map(o=>{const{_id:s,book_image:n,title:a,author:i}=o;return`<li class="books-item">
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
          <p class="books-info-author">${i}</p>
        </div>
      </li>`}).join("")}const w="https://books-backend.p.goit.global";let C=JSON.parse(sessionStorage.getItem("savedfetch"))||"";const Ae=async e=>{if(C)return J(C,e);{const o=w+"/books/top-books/";try{const s=await S.get(o);return sessionStorage.setItem("savedfetch",JSON.stringify(s.data)),C=s.data,J(s.data,e)}catch(s){console.log(s)}}};let E=JSON.parse(sessionStorage.getItem("savedcategoriesfetch"))||"";const Ce=async()=>{const t=w+"/books/category-list/";if(E)return V(E);try{const o=await S.get(t);return sessionStorage.setItem("savedcategoriesfetch",JSON.stringify(o.data)),E=o.data,V(o.data)}catch(o){console.log(o)}},Ee=async e=>{const o=w+"/books/category/",s={category:e};try{const n=await S.get(o,{params:s});return we(n.data,e)}catch(n){console.log(n)}},z=async e=>{const t=`/books/${e}`,o=w+t;try{return(await S.get(o)).data}catch(s){console.log(s)}},W=async e=>{const t=await v(),s=(JSON.parse(t)||[]).filter(n=>n._id!==e);await O(JSON.stringify(s))};const L={emptyPage:document.querySelector(".empty-page"),shoppingList:document.querySelector(".shopping-list"),pagesContainer:document.querySelector("#pagination-wrapper")};function Ie(){return matchMedia("(min-width: 768px)").matches?3:2}function $(){const e=L.shoppingList.querySelectorAll(".shopping-item"),t=Ie(),o={totalItems:e.length,itemsPerPage:3,page:1,visiblePages:t,centerAlign:!1,template:{page:'<a href="#" class="tui-page-btn"><span class="number-text">{{page}}</span></a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}} custom-class-{{type}}"><span class="tui-ico-{{type}}"></span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}} custom-class-{{type}}"><span class="tui-ico-{{type}}"></span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip custom-class-{{type}}"><span class="tui-ico-ellip">...</span></a>'}};Math.ceil(e.length/o.itemsPerPage),new de(L.pagesContainer,o).on("afterMove",function(n){o.page=n.page,_(),Me(n.page)})}function _(){Array.from(L.shoppingList.querySelectorAll(".shopping-item")).slice(0,3).forEach(o=>o.classList.remove("hidden"))}function Me(e){const t=Array.from(L.shoppingList.querySelectorAll(".shopping-item")),o=t.filter(n=>Number(n.dataset.pageNumber)===e),s=t.filter(n=>Number(n.dataset.pageNumber)!==e);o.forEach(n=>n.classList.remove("hidden")),s.forEach(n=>n.classList.add("hidden"))}const r={emptyPage:document.querySelector(".empty-page"),shoppingList:document.querySelector(".shopping-list"),pagesContainer:document.querySelector("#pagination-wrapper")},qe=3;async function Be(){r.pagesContainer===null&&r.emptyPage===null&&r.shoppingList===null||(await Te(),ee())}async function Te(){const e=await v(),t=JSON.parse(e)||[];if(t.length===0){r.emptyPage.classList.remove("hidden"),r.shoppingList.innerHTML="";return}r.emptyPage.classList.add("hidden"),Pe(t)}function Pe(e){const t=e.map(o=>`<li class="shopping-item hidden" data-book-id="${o._id}">
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
      </li>`);Oe(t)}function Oe(e){const t=e.join("");r.shoppingList.innerHTML=t;const o=Array.from(r.shoppingList.querySelectorAll(".shopping-item"));Fe(),_(),He(o,qe),Ue()}function He(e,t){console.log(2);let o=0,s=[];for(o=0;o<e.length;o+=t){let i=e.slice(o,o+t);s.push(i)}let n=0,a=[];for(let i=0;i<s.length;i+=1)n+=1,a.push(Ne(s[i],n))}function Ne(e,t){let o=[];return e.forEach(s=>{s.dataset.pageNumber=t,o.push(s)}),o}function Ue(){r.shoppingList.querySelectorAll(".shopping-item").length>3&&$()}function Fe(){r.shoppingList.querySelectorAll(".shopping-item").forEach(t=>{t.addEventListener("click",Re)})}function Re(e){if(e.target.classList.contains("shopping-trash")||e.target.nodeName==="use"||e.target.nodeName==="svg"){const t=e.currentTarget,o=e.currentTarget.dataset.bookId;W(o),t.remove(),ee()}}async function ee(){const e=r.shoppingList.querySelectorAll(".shopping-item");if(e){if(console.log(e),e.length===0){r.emptyPage.classList.remove("hidden"),r.pagesContainer.classList.add("hidden");return}console.log(e.length),e.length>3?($(),r.pagesContainer.classList.remove("hidden")):r.pagesContainer.classList.add("hidden")}}const Je=document.querySelector(".authentication-buttons"),Ve=document.querySelector(".authentication-buttons-mob"),De={apiKey:"AIzaSyAVC9h8-zdX_Zwfa8u_SlIxJpF4-2QNWH4",authDomain:"bookshelf-pronto.firebaseapp.com",databaseURL:"https://bookshelf-pronto-default-rtdb.europe-west1.firebasedatabase.app",projectId:"bookshelf-pronto",storageBucket:"bookshelf-pronto.appspot.com",messagingSenderId:"1040567130254",appId:"1:1040567130254:web:b46de7db5d5f846b0f51df",measurementId:"G-7YPT2SGB8V"};ue(De);const y=pe();function te(){return new Promise((e,t)=>{const o=K(y,s=>{o(),e(s||"")})})}const d=document.querySelector(".authentication-form-signup");d&&d.addEventListener("submit",Xe);async function Xe(e){if(e.preventDefault(),!d.classList.contains("disable")){const t=d.querySelector("#name-up").value,o=d.querySelector("#email-up").value,s=d.querySelector("#password-up").value;ne(d),re(d),await Qe(d,t,o,s),ae(d)}}async function Qe(e,t,o,s){try{const n=await ge(y,o,s);await he(n.user,{displayName:t}),await O(),await se(),P("Registration"),b(!1)}catch(n){ie(e,n.code)}}const p=document.querySelector(".authentication-form-signin");p&&p.addEventListener("submit",Ke);async function Ke(e){if(e.preventDefault(),!p.classList.contains("disable")){const t=p.querySelector("#email-in").value,o=p.querySelector("#password-in").value;ne(p),re(p),await xe(p,t,o),ae(p)}}async function xe(e,t,o){try{const s=await me(y,t,o);P("Authorization"),b(!1)}catch(s){ie(e,s.code)}}Je.addEventListener("click",oe);Ve.addEventListener("click",oe);function oe(e){e.target.classList.contains("log-out")&&y.signOut().then(function(){P("Log out")}).catch(function(o){je("Unable to log out")})}async function se(){try{K(y,e=>{Ze(e),Be()})}catch(e){console.error("Check error:",e.code)}}function Ze(e){const t=document.querySelector(".authentication-buttons"),o=document.querySelector(".authentication-buttons-mob");if(e){const n=`<div class="authorized">
    <button type="button" class="authorized-btn">
      <div class="authorized-data">
        <div class="authorized-ava-wrap">
          <img src="../img/shopping/book-apple.png" alt="" />
        </div>
        <p class="authorized-name">${e.displayName}</p>
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
  </div>`;t.innerHTML=n,o.innerHTML=n}else{const s=`<button type="button" class="header-btn-submit">Sing up
    <svg width="20" height="20" class="header-sing-svg">
      <use href="../img/icons.svg#icon-header-vector-log-left"></use>
    </svg>
  </button>`;t.innerHTML=s,o.innerHTML=s}}se();function ne(e){e.classList.add("disable")}function ae(e){e.classList.remove("disable")}function ie(e,t){let o="An unknown error has occurred. Please try again.";const s=e.querySelector(".authentication-errorcont");t==="auth/email-already-in-use"&&(o="A user with this email address already exists."),t==="auth/invalid-credential"&&(o="Incorrect login or password"),t==="auth/weak-password"&&(o="Your password is too weak"),s.innerHTML=`<p class="auth-error">${o}</p>`}function re(e){const t=e.querySelector(".authentication-errorcont");t.innerHTML=""}function P(e){T.success({message:`${e} is successful`,position:"bottomRight",icon:null})}function je(e){T.error({message:e,position:"bottomRight",icon:null})}const ce=fe();function Ye(e,t){be(x(ce,"users/"+e),{shippinglist:t})}async function Ge(e){const t=x(ce,"users/"+e+"/shippinglist");try{const o=await ye(t);return o.exists()?o.val():null}catch(o){return console.error("Error getting data:",o),null}}async function O(e){e||(e=localStorage.getItem("shoppinglist")||"");const t=await te().then(o=>o).catch(o=>"");if(!t)localStorage.setItem("shoppinglist",e);else{const o=t.uid;e&&Ye(o,e)}}const v=async()=>{const e=await te().then(t=>t).catch(t=>"");if(e){const t=e.uid;return Ge(t)}else return localStorage.getItem("shoppinglist")},u=new ve(".swiper",{direction:"vertical",loop:!1,initialSlide:0,speed:500,slidesPerView:6,effect:"slide",rewind:!0,breakpoints:{292:{slidesPerView:6}},spaceBetween:20,keyboard:{enabled:!0,onlyInViewport:!0},shortSwipes:!1,preventClicks:!0,disableMouseEvents:!0});u.allowTouchMove=!1;u.on("slideChange",function(){u.isEnd?u.allowTouchMove=!1:u.allowTouchMove=!0});const I=document.querySelector(".swiper-button");I.addEventListener("click",function(){u.activeIndex===2?I.classList.add("rotate"):I.classList.remove("rotate"),u.activeIndex<u.slides.length-1?u.slideNext():u.slideTo(0)});const ze="data:image/png;base64,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",We="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOASURBVHgB7VdLaBRBEH3Vm91V/KwK/mIOcQ/GXPwgQQ8qSLz4QUWEXMSLIHjLxd/FY0CCSrxoQJEc1VMgIDkYEURCVEyCEA8aI35WQ0STYEyyO132zOzOdk9mZicQbykYZrrnddXrV101u8CiuUZRL7kjvcWShb0EWiuAlORovG6CwFIiz+BviaT1ks5gCPMhwfdQx0g+UI/bsXA2TLP5RjqPEVQiwe3YyiLZC6JMcQbBXMPmI3F5Im6gs/kBHVE1ZwmlHqt1GWdtMM8K85G4pMroQ2ZsJSpHEDqicCd1kiXVqguQdlLNe+mZfe/C5kLwW6z29CE9rkGCmA4oKWw5wAH30rMfEzYXjhdH9LhGOhTLLAXJXLUCyB4FVS1TAws8PgJ8eaJYCxO3aT9oRRZIpMBTOWD0FfAnh4AMVYeSEExpZh++4TJoRzOQXqn5UPbjNWT3aWDiE7C8BnTwLqhmv4mZGQf3XQMPtqkd6o5puRFXH0hLjbX8U+1x0O6rBgHP1u9Sge8rnHJyrNMg4Fk6A9rXAsqegu5XMItQJcA+eZfVIMqoeg84Uw+sqY/EYcl69yyUTJopN0lYtmcqVzbHKMPV2ypj2Dlvjk92Q4ST8E5vEWxLXZEGVVVCuH5luTFIcDgJVyYydhArQEUQzBREKQFL2M2iiOJ46YhBdA6JSCXsd17gmG05Nglt7OsvPiXILdqS41hKxMSUlCAfIQQowZpsJFHZ4mBYOzts84goURtIPL+DGY8EGWfC7zbgYPoWl2z6N3hs2Cly2rQzGFPIg39+UNhx0Lo6YOmqIlGa06BCSSgV2KBpy/h1ALLrCjj3RjkquJNLVkHsPgfReNHbluy5Ae69Df77y+tGNllx4tb8qoMltL6m1r3tBPo6ysFd18DUOOTTVvWYcKZldwvk85tFCHl3/twPq22vUiRjpI2jzoRSYtILZDuaHNPfwm+yRxGp3Qfuf6Q+3wkEm0rx9GTZJzmbnQklYUnKGRVc8WAqwPtnTuu2K0nTylhq9z+vBTrVgY8+mmVLsOjSP7mxLvvLG/ATEAFj7w7u0eOSb1+Uv7BhSD3U4X8ZYSTV+n0zwpRwsmbJJiVZwW3hC3xJTDDR4bm8AowvbajNz8L+EZnFghkPsqCm9PXcO8Qh4S1r3lhvCdHALKvViUrO52+gXaEq/3kSNMoJfhEUfNH89g83+MD9ZjdiQAAAAABJRU5ErkJggg==";async function $e(){const e=document.querySelector(".books-container");e&&e.addEventListener("click",t);async function t(o){if(o.target.classList.contains("books-overlay")){const s=o.target.dataset.id,n=await z(s);_e(n)}}}async function _e(e){const t=document.querySelector(".popup-backdrop"),o=document.querySelector(".popup-window");o.innerHTML="";const s=st(e);o.insertAdjacentHTML("beforeend",s);const n=document.querySelector(".popup-close-btn");i(),et(),await ot(),t.addEventListener("click",k),document.addEventListener("keydown",F),n.addEventListener("click",m),document.addEventListener("keydown",a);function a(g){g.keyCode===32&&g.preventDefault()}function i(){t.classList.add("is-active"),document.body.classList.add("modal-open")}function m(){A(),n.removeEventListener("click",m),document.removeEventListener("keydown",a)}function k(g){g.target===g.currentTarget&&(A(),t.removeEventListener("click",k),document.removeEventListener("keydown",a))}function F(g){g.keyCode===27&&(A(),document.removeEventListener("keydown",F),document.removeEventListener("keydown",a))}function A(){t.classList.remove("is-active"),document.body.classList.remove("modal-open")}}async function et(){const e=document.querySelector(".popup-book-btn-add-to-shopinglist"),t=e.dataset.id,o=await v();(JSON.parse(o)||[]).map(a=>a._id).includes(t)?(e.textContent="REMOVE FROM THE SHOPPING LIST",e.insertAdjacentHTML("afterend",le())):e.textContent="ADD TO SHOPPING LIST"}async function tt(e){const t=await v(),o=JSON.parse(t)||[];o.push(e),await O(JSON.stringify(o))}async function ot(){const e=document.querySelector(".popup-book-btn-add-to-shopinglist"),t=e.dataset.id,o=await z(t);e.addEventListener("click",s);async function s(){const n=await v();(JSON.parse(n)||[]).map(m=>m._id).includes(t)?(await W(t),document.querySelector(".under-btn-text").remove(),e.textContent="ADD TO SHOPPING LIST"):(tt(o),e.textContent="REMOVE FROM THE SHOPPING LIST",e.insertAdjacentHTML("afterend",le()))}}function st(e){const{_id:t,author:o,title:s,book_image:n,buy_links:a,description:i=""}=e,[m,k]=a;return`<button class="popup-close-btn">
      <svg class="popup-close-btn-icon" width="28" height="28">
        <use href="${j}#icon-header-close"></use>
      </svg>
    </button>
    <div class="popup-book">
      <div class="popup-wrap-img">
        <img class="popup-book-image" src="${n}" alt="обкладинка" />
      </div>
      <div class="popup-book-content">
        <h4 class="popup-book-title">${s}</h4>
        <p class="popup-book-author">${o}</p>
        <p class="popup-book-review">${i}</p>
        <ul class="popup-shopping-links">
          <li>
            <a
              href="${m.url}"
              target="blank"
              rel="nofollow noopener noreferrer"
              aria-label="Link to shop"
              class="amazon popup-shopping-links-icon"
            >
              <img
                src="${ze}"
                class="popup-shopping-links-icon"
                alt="Logo of shop"
                width="62"
              />
            </a>
          </li>
          <li>
            <a
              href="${k.url}"
              target="blank"
              rel="nofollow noopener noreferrer"
              aria-label="Link to shop"
              class="book popup-shopping-links-icon"
            >
              <img
                src="${We}"
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
    </div>`}function le(){return`
      <p class="under-btn-text">
        Congratulations! You have added the book to the shopping list. To
        delete, press the button "Remove from the shopping list".
      </p>
    `}const h=document.querySelector(".books-container"),f=document.querySelector(".categories-menu");let D;async function B(){U();const e=window.innerWidth,t=N(e),o=await Ae(t);h.innerHTML=o,D||($e(),D=!0),H()}async function nt(){const e=await Ce();f.innerHTML=e}async function X(e){U();const t=await Ee(e);h.innerHTML=t,H()}async function H(){const e=document.querySelector(".books-title"),t=e.textContent.split(" "),o=t.pop(),s=t.join(" ")+(t.length>0?` <span  class="books-title-color">${o}</span>`:o);e.innerHTML=s}function N(e){let t=5;return e>=1440&&(t=5),e>=768&&e<1440&&(t=3),e<768&&(t=1),t}const at=window.innerWidth;let Q=N(at);async function it(){const e=document.querySelector(".categories-nav.active");if(e&&!e.dataset.catname){const o=window.innerWidth,s=N(o);Q!==s&&(Q=s,U(),await B(),H())}}h&&(B(),nt(),f.addEventListener("click",e=>{e.preventDefault();const t=e.target;if(t.tagName==="A"){const o=t.dataset.catname;f.querySelector(".active").classList.remove("active"),t.classList.add("active"),R(h,{offset:-24,duration:500}),o?X(o):B()}}),h.addEventListener("click",e=>{e.preventDefault();const t=e.target;if(t.classList.contains("books-btn")){const o=t.dataset.catname;f.querySelector(".active").classList.remove("active"),f.querySelector('[data-catname="'+o+'"]').classList.add("active"),R(h,{offset:-24,duration:700}).on("end",()=>{X(o)})}}),window.addEventListener("resize",it));function U(){h.innerHTML='<li class="loader-container"><span class="loader"></span></li>'}
//# sourceMappingURL=main-78100375.js.map
