(()=>{"use strict";var r,n,e,t,o,i,a,s,c,d,u,l,p,f,v={473:(r,n,e)=>{e.d(n,{Z:()=>s});var t=e(81),o=e.n(t),i=e(645),a=e.n(i)()(o());a.push([r.id,".slider-container {\r\n    width: 640px;\r\n    height: 360px;\r\n    background-color: #222;\r\n}\r\n\r\n.slides {\r\n    width: 100%;\r\n    height: 100%;\r\n    position: relative;\r\n}\r\n\r\n.slides .slide-navigation-container {\r\n    height: 100%;\r\n    width: 100%;\r\n    z-index: 2;\r\n    position: absolute;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-template-rows: 1fr;\r\n    align-items: center;\r\n    padding: 0 12px;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.slide-navigation {\r\n    width: 48px;\r\n    height: 48px;\r\n    background-color: rgba(255, 255, 255, 0.4);\r\n    border-radius: 100%;\r\n    border: 1px solid #888;\r\n}\r\n\r\n.slide-navigation:hover {\r\n    background-color: rgba(255, 255, 255, 0.8);\r\n    cursor: pointer;\r\n}\r\n\r\n.slide-navigation-prev {\r\n    justify-self: start;\r\n    grid-column: 1 / 2;\r\n    grid-row: 1;\r\n}\r\n\r\n.slide-navigation-next {\r\n    justify-self: end;\r\n    grid-column: 2 / 3;\r\n    grid-row: 1;\r\n}\r\n\r\n.slides > img {\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: contain;\r\n}",""]);const s=a},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e="",t=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),t&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=r(n),t&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(r,e,t,o,i){"string"==typeof r&&(r=[[null,r,void 0]]);var a={};if(t)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var d=0;d<r.length;d++){var u=[].concat(r[d]);t&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),e&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=e):u[2]=e),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},81:r=>{r.exports=function(r){return r[1]}},379:r=>{var n=[];function e(r){for(var e=-1,t=0;t<n.length;t++)if(n[t].identifier===r){e=t;break}return e}function t(r,t){for(var i={},a=[],s=0;s<r.length;s++){var c=r[s],d=t.base?c[0]+t.base:c[0],u=i[d]||0,l="".concat(d," ").concat(u);i[d]=u+1;var p=e(l),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var v=o(f,t);t.byIndex=s,n.splice(s,0,{identifier:l,updater:v,references:1})}a.push(l)}return a}function o(r,n){var e=n.domAPI(n);return e.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap&&n.supports===r.supports&&n.layer===r.layer)return;e.update(r=n)}else e.remove()}}r.exports=function(r,o){var i=t(r=r||[],o=o||{});return function(r){r=r||[];for(var a=0;a<i.length;a++){var s=e(i[a]);n[s].references--}for(var c=t(r,o),d=0;d<i.length;d++){var u=e(i[d]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}i=c}}},569:r=>{var n={};r.exports=function(r,e){var t=function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}n[r]=e}return n[r]}(r);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:r=>{r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n,r.options),n}},565:(r,n,e)=>{r.exports=function(r){var n=e.nc;n&&r.setAttribute("nonce",n)}},795:r=>{r.exports=function(r){var n=r.insertStyleElement(r);return{update:function(e){!function(r,n,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(t,r,n.options)}(n,r,e)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},589:r=>{r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}}},h={};function g(r){var n=h[r];if(void 0!==n)return n.exports;var e=h[r]={id:r,exports:{}};return v[r](e,e.exports,g),e.exports}g.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return g.d(n,{a:n}),n},g.d=(r,n)=>{for(var e in n)g.o(n,e)&&!g.o(r,e)&&Object.defineProperty(r,e,{enumerable:!0,get:n[e]})},g.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),g.nc=void 0,r=g(379),n=g.n(r),e=g(795),t=g.n(e),o=g(569),i=g.n(o),a=g(565),s=g.n(a),c=g(216),d=g.n(c),u=g(589),l=g.n(u),p=g(473),(f={}).styleTagTransform=l(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=t(),f.insertStyleElement=d(),n()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals})();