(()=>{"use strict";var e={473:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(81),i=n.n(r),a=n(645),s=n.n(a)()(i());s.push([e.id,".slider-container {\r\n    width: 640px;\r\n    height: 360px;\r\n    background-color: #222;\r\n}\r\n\r\n.slides {\r\n    width: 100%;\r\n    height: 100%;\r\n    position: relative;\r\n}\r\n\r\n.slides .slide-navigation-container {\r\n    height: 100%;\r\n    width: 100%;\r\n    z-index: 2;\r\n    position: absolute;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-template-rows: 1fr;\r\n    align-items: center;\r\n    padding: 0 12px;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.slide-navigation {\r\n    width: 48px;\r\n    height: 48px;\r\n    background-color: rgba(255, 255, 255, 0.4);\r\n    border-radius: 100%;\r\n    border: 1px solid #888;\r\n}\r\n\r\n.slide-navigation:hover {\r\n    background-color: rgba(255, 255, 255, 0.8);\r\n    cursor: pointer;\r\n}\r\n\r\n.slide-navigation-prev {\r\n    justify-self: start;\r\n    grid-column: 1 / 2;\r\n    grid-row: 1;\r\n}\r\n\r\n.slide-navigation-next {\r\n    justify-self: end;\r\n    grid-column: 2 / 3;\r\n    grid-row: 1;\r\n}\r\n\r\n.slides > img {\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: contain;\r\n}",""]);const o=s},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,i,a){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var o=0;o<this.length;o++){var c=this[o][0];null!=c&&(s[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&s[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},s=[],o=0;o<e.length;o++){var c=e[o],d=r.base?c[0]+r.base:c[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=n(u),g={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(g);else{var h=i(g,r);r.byIndex=o,t.splice(o,0,{identifier:u,updater:h,references:1})}s.push(u)}return s}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var a=r(e=e||[],i=i||{});return function(e){e=e||[];for(var s=0;s<a.length;s++){var o=n(a[s]);t[o].references--}for(var c=r(e,i),d=0;d<a.length;d++){var l=n(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,i&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},723:(e,t,n)=>{n.d(t,{Z:()=>v});var r=n(379),i=n.n(r),a=n(795),s=n.n(a),o=n(569),c=n.n(o),d=n(565),l=n.n(d),u=n(216),p=n.n(u),g=n(589),h=n.n(g),m=n(473),f={};f.styleTagTransform=h(),f.setAttributes=l(),f.insert=c().bind(null,"head"),f.domAPI=s(),f.insertStyleElement=p(),i()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;class v{constructor(e){return console.log(Array.isArray(e)),this.sliderContainer=document.createElement("div"),this.sliderContainer.classList.add("slider-container"),e&&Array.isArray(e)&&0!==e.length?(this.images=e,this.currentImageIndex=0,this.currentImage=this.images[this.currentImageIndex],this.render(),this.nextImageTimeout=setTimeout((()=>this.nextImage()),5e3),this.sliderContainer):this.sliderContainer}render(){const e=document.createElement("div");e.classList.add("slides");const t=document.createElement("div");t.classList.add("slide-navigation-container");const n=document.createElement("div");n.classList.add("slide-navigation","slide-navigation-next"),n.addEventListener("click",(()=>this.nextImage()));const r=document.createElement("div");r.classList.add("slide-navigation","slide-navigation-prev"),r.addEventListener("click",(()=>this.previousImage())),t.append(n,r),e.appendChild(t),this.slideImg=document.createElement("img"),this.slideImg.src=this.currentImage,e.appendChild(this.slideImg),this.sliderContainer.appendChild(e)}nextImage(){console.log("nextImage called"),1!==this.images.length&&(this.currentImageIndex+1>=this.images.length?this.currentImageIndex=0:this.currentImageIndex++,this.updateImage())}previousImage(){console.log("previousImage called"),console.log(this.currentImageIndex),1!==this.images.length&&(this.currentImageIndex-1<0?this.currentImageIndex=this.images.length-1:this.currentImageIndex--,this.updateImage())}updateImage(){this.currentImage=this.images[this.currentImageIndex],this.slideImg.src=this.currentImage,clearTimeout(this.nextImageTimeout),this.nextImageTimeout=setTimeout((()=>this.nextImage()),5e3)}}}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{var e=n(723);const t=n.p+"0b3b7472fa2a930a3377.jpg",r=n.p+"6512ba5698f98d0101f1.jpg",i=new e.Z([t,r]);document.body.appendChild(i)})()})();