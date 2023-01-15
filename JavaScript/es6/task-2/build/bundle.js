(()=>{"use strict";var t,n,e,o,r,a,i,c,s,u,l,d,p,f,v,b,m={314:(t,n,e)=>{e.d(n,{Z:()=>c});var o=e(81),r=e.n(o),a=e(645),i=e.n(a)()(r());i.push([t.id,':root {\n\t--background: #007af7;\n\t--white-text: #fff;\n\t--hover-text: #222;\n\t--button-background: #fff;\n\t--button-background-hover: #000;\n\t--button-text: #007af7;\t\n}\n\n*, *::after, *::before {\n  box-sizing: border-box;\n}\n\nbody {\n  padding: 0;\n  margin: 0;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: -apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif;\n}\n\n.cookie-consent {\n\tdisplay: flex;\n\talign-content: center;\n\talign-items: center;\n\tpadding: 1rem 2rem;\n\tbackground: var(--background);\n\tcolor: var(--white-text);\n\tposition: fixed;\n\tbottom: 0;\n\tleft: 0;\n\tright: 0;\n\tfont-size: 1rem;\n\tgap: 2rem;\n\topacity: 1;\n\tvisibility: visible;\n\tflex-wrap: wrap;\n}\n\n.cookie-consent.hide {\n\topacity: 0;\n\tvisibility: hidden;\n\ttransition: all 0.4s ease;\n}\n\n.cookie-consent.disabled {\n\tdisplay: none;\n}\n\n.cookie-consent a {\n\tcolor: var(--white-color);\n}\n\n.cookie-consent a:hover {\n\tcolor: var(--hover-text);\n}\n\n.cookie-consent__text {\n\tflex: 8 768px;\n}\n\n.cookie-consent__button {\n\tdisplay: block;\n\tflex: 1 150px;\n\tbackground: var(--button-background);\n\tcolor: var(--button-text);\n\tborder: none;\n\tpadding: 0.4rem 1.2rem;\n\tcursor: pointer;\n\tborder-radius: 20px;\n\tfont-size: 1rem;\n}\n\n.cookie-consent__button:hover {\n\tbackground: var(--button-background-hover);\n\t\tcolor: var(--white-text);\n}',""]);const c=i},645:t=>{t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e="",o=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),o&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=t(n),o&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(t,e,o,r,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<t.length;u++){var l=[].concat(t[u]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var n=[];function e(t){for(var e=-1,o=0;o<n.length;o++)if(n[o].identifier===t){e=o;break}return e}function o(t,o){for(var a={},i=[],c=0;c<t.length;c++){var s=t[c],u=o.base?s[0]+o.base:s[0],l=a[u]||0,d="".concat(u," ").concat(l);a[u]=l+1;var p=e(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var v=r(f,o);o.byIndex=c,n.splice(c,0,{identifier:d,updater:v,references:1})}i.push(d)}return i}function r(t,n){var e=n.domAPI(n);return e.update(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap&&n.supports===t.supports&&n.layer===t.layer)return;e.update(t=n)}else e.remove()}}t.exports=function(t,r){var a=o(t=t||[],r=r||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var c=e(a[i]);n[c].references--}for(var s=o(t,r),u=0;u<a.length;u++){var l=e(a[u]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:t=>{var n={};t.exports=function(t,e){var o=function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}},216:t=>{t.exports=function(t){var n=document.createElement("style");return t.setAttributes(n,t.attributes),t.insert(n,t.options),n}},565:(t,n,e)=>{t.exports=function(t){var n=e.nc;n&&t.setAttribute("nonce",n)}},795:t=>{t.exports=function(t){var n=t.insertStyleElement(t);return{update:function(e){!function(t,n,e){var o="";e.supports&&(o+="@supports (".concat(e.supports,") {")),e.media&&(o+="@media ".concat(e.media," {"));var r=void 0!==e.layer;r&&(o+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),o+=e.css,r&&(o+="}"),e.media&&(o+="}"),e.supports&&(o+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,t,n.options)}(n,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)}}}},589:t=>{t.exports=function(t,n){if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}}},h={};function g(t){var n=h[t];if(void 0!==n)return n.exports;var e=h[t]={id:t,exports:{}};return m[t](e,e.exports,g),e.exports}g.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return g.d(n,{a:n}),n},g.d=(t,n)=>{for(var e in n)g.o(n,e)&&!g.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})},g.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),e=g(379),o=g.n(e),r=g(795),a=g.n(r),i=g(569),c=g.n(i),s=g(565),u=g.n(s),l=g(216),d=g.n(l),p=g(589),f=g.n(p),v=g(314),(b={}).styleTagTransform=f(),b.setAttributes=u(),b.insert=c().bind(null,"head"),b.domAPI=a(),b.insertStyleElement=d(),o()(v.Z,b),v.Z&&v.Z.locals&&v.Z.locals,t=document.querySelector("body"),n=document.querySelector(".cookie-consent"),t.addEventListener("click",(function(t){t.target.className.includes("cookie-consent__button")&&(localStorage.setItem("accept","1"),n.classList.add("hide"))})),localStorage.getItem("accept")&&(console.log(!0),n.classList.add("disabled"))})();