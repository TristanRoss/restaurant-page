!function(e){var t={};function n(o){if(t[o])return t[o].exports;var l=t[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(o,l,function(t){return e[t]}.bind(null,l));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function o(){const e=document.createElement("div");return e.style.backgroundImage="url('../food.jpg')",e.style.backgroundSize="cover",e.style.backgroundRepeat="no-repeat",e.style.height="1000px",e.style.color="white",e.style.textShadow="1px 1px 5px black",e.style.textAlign="center",e.style.fontFamily="'Jost', sans-serif",e}function l(){const e=document.createElement("ul");e.style.listStyleType="none",e.style.margin="0px",e.style.padding="20px",e.style.float="right";const t=document.createElement("li");t.style.display="inline";const n=document.createElement("button");n.id="home",n.textContent="Home",n.style.display="inline",n.style.margin="10px",n.style.padding="5px",n.style.fontSize="17px",n.style.color="white",n.style.fontFamily="'Jost', sans-serif",n.style.border="1px solid white",n.style.borderRadius="1px",n.style.backgroundColor="#1c1c1c",n.addEventListener("mouseenter",()=>{n.style.backgroundColor="black"}),n.addEventListener("mouseleave",()=>{n.style.backgroundColor="#1c1c1c"}),t.appendChild(n);const o=document.createElement("li");o.style.display="inline";const l=document.createElement("button");l.id="contact",l.textContent="Contact",l.style.margin="10px",l.style.padding="5px",l.style.fontSize="17px",l.style.color="white",l.style.fontFamily="'Jost', sans-serif",l.style.border="1px solid white",l.style.borderRadius="1px",l.style.backgroundColor="#1c1c1c",l.addEventListener("mouseenter",()=>{l.style.backgroundColor="black"}),l.addEventListener("mouseleave",()=>{l.style.backgroundColor="#1c1c1c"}),o.appendChild(l);const r=document.createElement("li");r.style.display="inline";const i=document.createElement("button");return i.id="menu",i.textContent="Menu",i.style.display="inline",i.style.margin="10px",i.style.padding="5px",i.style.fontSize="17px",i.style.color="white",i.style.fontFamily="'Jost', sans-serif",i.style.border="1px solid white",i.style.borderRadius="1px",i.style.backgroundColor="#1c1c1c",i.addEventListener("mouseenter",()=>{i.style.backgroundColor="black"}),i.addEventListener("mouseleave",()=>{i.style.backgroundColor="#1c1c1c"}),r.appendChild(i),e.appendChild(t),e.appendChild(o),e.appendChild(r),e}function r(){const e=document.createElement("h1");e.textContent="The Groove",e.style.fontSize="50px",e.style.width="50%",e.style.margin="auto",e.style.paddingTop="200px",e.style.textAlign="center";const t=document.createElement("p");t.textContent="At The Groove, you'll find the best tasting fictional food on the market. With 100% fresh fake food, and world class lying, The Groove is sure not to disappoint. Why? Well because The Groove isn't a real place.",t.style.fontSize="25px",t.style.padding="70px",t.style.marginTop="100px",t.style.fontWeight="bold";const n=o(),r=l();return n.appendChild(r),n.appendChild(e),n.appendChild(t),n}function i(){const e=document.querySelector("#content");for(;e.firstChild;)e.removeChild(e.firstChild)}n.r(t),document.body.style.padding="0",document.body.style.margin="0";const s=document.querySelector("#content");function d(){document.querySelector("#home").addEventListener("click",()=>{i(),s.appendChild(r()),d(),a()})}function a(){document.querySelector("#contact").addEventListener("click",()=>{i(),s.appendChild(function(){const e=document.createElement("h1");e.textContent="Contact",e.style.fontSize="50px",e.style.width="50%",e.style.margin="auto",e.style.paddingTop="200px",e.style.textAlign="center";const t=document.createElement("h2");t.textContent="(555)-555-5555",t.style.fontSize="30px",t.style.width="50%",t.style.margin="auto",t.style.paddingTop="50px",t.style.textAlign="center",t.style.letterSpacing="3px";const n=document.createElement("h2");n.textContent="P. Sherman, 42 Wallaby Way, Fakeland",n.style.fontSize="30px",n.style.textAlign="center",n.style.margin="0";const r=document.createElement("h2");r.textContent="notarealemail@fakemail.fake",r.style.fontSize="30px",r.style.textAlign="center",r.style.margin="0";const i=o(),s=l();return i.appendChild(s),i.appendChild(e),i.appendChild(t),i.appendChild(n),i.appendChild(r),i}()),d(),a()})}s.appendChild(r()),d(),a()}]);