!function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=5)}([function(t,n,r){var e=r(1),o=r(2);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var a={insert:"head",singleton:!1},i=(e(o,a),o.locals?o.locals:{});t.exports=i},function(t,n,r){"use strict";var e,o=function(){return void 0===e&&(e=Boolean(window&&document&&document.all&&!window.atob)),e},a=function(){var t={};return function(n){if(void 0===t[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}t[n]=r}return t[n]}}(),i=[];function c(t){for(var n=-1,r=0;r<i.length;r++)if(i[r].identifier===t){n=r;break}return n}function s(t,n){for(var r={},e=[],o=0;o<t.length;o++){var a=t[o],s=n.base?a[0]+n.base:a[0],d=r[s]||0,l="".concat(s," ").concat(d);r[s]=d+1;var u=c(l),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(i[u].references++,i[u].updater(f)):i.push({identifier:l,updater:v(f,n),references:1}),e.push(l)}return e}function d(t){var n=document.createElement("style"),e=t.attributes||{};if(void 0===e.nonce){var o=r.nc;o&&(e.nonce=o)}if(Object.keys(e).forEach((function(t){n.setAttribute(t,e[t])})),"function"==typeof t.insert)t.insert(n);else{var i=a(t.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var l,u=(l=[],function(t,n){return l[t]=n,l.filter(Boolean).join("\n")});function f(t,n,r,e){var o=r?"":e.media?"@media ".concat(e.media," {").concat(e.css,"}"):e.css;if(t.styleSheet)t.styleSheet.cssText=u(n,o);else{var a=document.createTextNode(o),i=t.childNodes;i[n]&&t.removeChild(i[n]),i.length?t.insertBefore(a,i[n]):t.appendChild(a)}}function p(t,n,r){var e=r.css,o=r.media,a=r.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),a&&btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}var m=null,h=0;function v(t,n){var r,e,o;if(n.singleton){var a=h++;r=m||(m=d(n)),e=f.bind(null,r,a,!1),o=f.bind(null,r,a,!0)}else r=d(n),e=p.bind(null,r,n),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(r)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else o()}}t.exports=function(t,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=o());var r=s(t=t||[],n);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var e=0;e<r.length;e++){var o=c(r[e]);i[o].references--}for(var a=s(t,n),d=0;d<r.length;d++){var l=c(r[d]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}r=a}}}},function(t,n,r){(n=r(3)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Baloo+Paaji+2&display=swap);"]),n.push([t.i,"body {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tbox-sizing: border-box;\r\n\tfont-family: 'Baloo Paaji 2', cursive;\r\n}\r\n\r\n#main-container {\r\n\twidth: 90vw;\r\n\theight: 100vh;\r\n\toverflow: auto;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: space-between;\r\n}\r\n#header-content h5,\r\n.navbar-brand {\r\n\tword-spacing: 4px;\r\n\tletter-spacing: 1px;\r\n}\r\n\r\n#nav-list {\r\n\tmargin: 0 1.4rem;\r\n}\r\n\r\n#body-content {\r\n\tmargin-top: 1rem;\r\n}\r\n\r\n.card-header span {\r\n\tletter-spacing: 1px;\r\n}\r\n\r\n.jumbotron {\r\n\tpadding: 2rem 1rem 0 1rem;\r\n\tmargin-bottom: ;\r\n\tborder-radius: 0;\r\n\tbackground-color: transparent;\r\n}\r\n\r\n#card-wrapper {\r\n\theight: 70%;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: space-between;\r\n}\r\n\r\n#card-wrapper .card {\r\n\twidth: 18vw;\r\n\tmargin-top: 1rem;\r\n}\r\n\r\n#card-table {\r\n\theight: 60vh;\r\n\toverflow: auto;\r\n}\r\n\r\n#card-table table thead th {\r\n\tposition: sticky;\r\n\ttop: 0;\r\n}\r\n\r\nfooter .navbar {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\tcolor: #fff;\r\n\tpadding: .8rem 0;\r\n}\r\n\r\nfooter small {\r\n\tfont-size: 1rem;\r\n\tletter-spacing: 1px;\r\n}\r\n\r\nsmall i {\r\n\tfont-size: .7rem;\r\n}\r\n\r\n@media (max-width: 992px) {\r\n\t#main-container {\r\n\t\toverflow: auto;\r\n\t\twidth: 100vw;\r\n\t}\r\n\r\n\t#nav-list {\r\n\tmargin: 0;\r\n}\r\n\r\n\t#main-content {\r\n\t\tpadding: 0;\r\n\t}\r\n\r\n\t#body-content {\r\n\t\tmargin-bottom: 2rem;\r\n\t}\r\n\r\n\t#card-table {\r\n\t\theight: 80vh;\r\n\t}\r\n\r\n\t#card-wrapper {\r\n\t\tflex-direction: row;\r\n\t\talign-items: center;\r\n\t\theight: 30vh;\r\n\t}\r\n\r\n\t#card-wrapper .card {\r\n\twidth: 100vw;\r\n}\r\n\r\n}\r\n\r\n@media (max-width: 425px) {\r\n\t#nav-list .navbar-brand {\r\n\t\tmargin-right: 4rem;\r\n\t}\r\n\r\n\t#card-wrapper {\r\n\t\tflex-direction: column;\r\n\t\theight: 70vh;\r\n\t}\r\n\r\n\t#card-wrapper .card {\r\n\t\twidth: 84vw;\r\n\t}\r\n}",""]),t.exports=n},function(t,n,r){"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var r=function(t,n){var r=t[1]||"",e=t[3];if(!e)return r;if(n&&"function"==typeof btoa){var o=(i=e,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),a=e.sources.map((function(t){return"/*# sourceURL=".concat(e.sourceRoot||"").concat(t," */")}));return[r].concat(a).concat([o]).join("\n")}var i,c,s;return[r].join("\n")}(n,t);return n[2]?"@media ".concat(n[2]," {").concat(r,"}"):r})).join("")},n.i=function(t,r,e){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(e)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<t.length;c++){var s=[].concat(t[c]);e&&o[s[0]]||(r&&(s[2]?s[2]="".concat(r," and ").concat(s[2]):s[2]=r),n.push(s))}},n}},function(t,n){class r extends HTMLElement{constructor(){super()}connectedCallback(){this.render()}render(){this.innerHTML='\n\t\t\t<nav class="navbar navbar-dark bg-info">\n\t\t\t\t<div class="container-fluid text-white" id="nav-list">\n\t\t\t\t\t<a class="navbar-brand" href="#"><i>COVID-19</i> Information</a>\n\t\t\t\t\t<span id="time"></span>\n\t\t\t\t\t<span id="date"></span>\n\t\t\t\t</div>\n\t\t\t</nav>\n\t\t'}}customElements.define("app-bar",r)},function(t,n,r){"use strict";r.r(n);r(0),r(4);var e=function(){const t={confirmed:"",recovered:"",deaths:"",countries:[]},n=t=>(new Intl.NumberFormat).format(t),r={header:{"Access-Control-Allow-Headers":"Authorization, Content-Type","Access-Control-Allow-Origin":"*","Content-Type":"application/json; charset=utf-8"}};$(document).on("DOMContentLoaded",()=>{fetch("https://covid.mathdro.id/api").then(t=>t.json()).then(n=>{t.confirmed=n.confirmed.value,t.recovered=n.recovered.value,t.deaths=n.deaths.value}).catch(t=>console.log(t)).then(()=>($("#confirmed-value").html(n(t.confirmed)+" people"),$("#recovered-value").html(n(t.recovered)+" people"),void $("#deaths-value").html(n(t.deaths)+" people"))),fetch("https://api.kawalcorona.com",r).then(t=>t.json()).then(n=>t.countries=n).then(()=>(()=>{let r="";$.each(t.countries,(t,e)=>{r+=`\n\t\t\t\t<tr>\n\t\t      <th scope="row">${t+=1}</th>\n\t\t      <td>${e.attributes.Country_Region}</td>\n\t\t      <td>${n(e.attributes.Confirmed)}</td>\n\t\t      <td>${n(e.attributes.Recovered)}</td>\n\t\t      <td>${n(e.attributes.Deaths)}</td>\n\t\t    </tr>\n\t\t\t`}),$("#country").html(r)})())})};const o=()=>{moment.locale("id"),$("#time").text(moment().format("LTS")),$("#date").text(moment().format("LL")),setTimeout(o,1e3)};o(),e()}]);