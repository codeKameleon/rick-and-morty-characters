!function(){function t(t){return t&&t.__esModule?t.default:t}function e(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function r(t){return function(){var r=this,n=arguments;return new Promise((function(o,a){var i=t.apply(r,n);function c(t){e(i,o,a,c,u,"next",t)}function u(t){e(i,o,a,c,u,"throw",t)}c(void 0)}))}}var n={},o=function(t){var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,a=Object.create(o.prototype),i=new k(n||[]);return a._invoke=function(t,e,r){var n=h;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw a;return O()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=N(i,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=s(t,e,r);if("normal"===u.type){if(n=r.done?d:f,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var h="suspendedStart",f="suspendedYield",p="executing",d="completed",v={};function m(){}function y(){}function g(){}var w={};u(w,a,(function(){return this}));var x=Object.getPrototypeOf,L=x&&x(x(j([])));L&&L!==r&&n.call(L,a)&&(w=L);var E=g.prototype=m.prototype=Object.create(w);function b(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function C(t,e){function r(o,a,i,c){var u=s(t[o],t,a);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(h).then((function(t){l.value=t,i(l)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function N(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,N(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function j(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:O}}function O(){return{value:e,done:!0}}return y.prototype=g,u(E,"constructor",g),u(g,"constructor",y),y.displayName=u(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,c,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},b(C.prototype),u(C.prototype,i,(function(){return this})),t.AsyncIterator=C,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new C(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(E),u(E,c,"Generator"),u(E,a,(function(){return this})),u(E,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=j,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(u&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:j(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(n);try{regeneratorRuntime=o}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}var a=JSON.parse(localStorage.getItem("characters"))||[],i=document.querySelector(".searchbar"),c=document.querySelector(".autocomplete-results"),u=document.querySelector(".characters"),l=document.querySelector(".load-more-btn"),s=0,h=!1,f=r(t(n).mark((function e(){var r,o,i,c,u;return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s++,r="https://rickandmortyapi.com/api/character?page=".concat(s),t.next=4,fetch(r);case 4:return o=t.sent,console.log(o),t.next=8,o.json();case 8:if(i=t.sent,c=i.results,0==a.length||h){for(u=0;u<c.length;u++)a.push(c[u]);localStorage.setItem("characters",JSON.stringify(a)),d(a)}case 11:case"end":return t.stop()}}),e)}))),p=function(){var t=a.filter((function(t){return t.name.toLowerCase().includes(i.value.toLowerCase())}));d(t)},d=function(e){u.innerHTML="";var o=!0,a=!1,i=void 0;try{for(var c,l=function(e,o){var a=o.value,i=document.createElement("div");i.className="character-card";var c=document.createElement("img");c.className="character-image",c.src=a.image;var l=document.createElement("div");l.className="character-details";var s=document.createElement("span");s.className="character-name",s.textContent=a.name;var h=document.createElement("span");h.className="character-species",h.textContent=a.species;var f=document.createElement("div");f.className="character-location-wrapper";var p=document.createElement("span");p.className="character-location-label",p.textContent="Last known location : ";var d=document.createElement("span");d.textContent=a.location.name;var v=document.createElement("div");v.className="character-episode-wrapper";var m=document.createElement("span");m.className="character-episode-label",m.textContent="First seen in : ";var y=document.createElement("span");r(t(n).mark((function e(){var r,o,i,c;return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.episode[0],t.next=3,fetch(r);case 3:return o=t.sent,t.next=6,o.json();case 6:return i=t.sent,c=[i.name,i.episode],y.textContent="".concat(c[0],"  (").concat(c[1],")"),t.abrupt("return",c);case 10:case"end":return t.stop()}}),e)})))(),v.appendChild(m),v.appendChild(y),f.appendChild(p),f.appendChild(d),l.appendChild(s),l.appendChild(h),l.appendChild(f),l.appendChild(v),i.appendChild(c),i.appendChild(l),u.appendChild(i)},s=e[Symbol.iterator]();!(o=(c=s.next()).done);o=!0)l(0,c)}catch(t){a=!0,i=t}finally{try{o||null==s.return||s.return()}finally{if(a)throw i}}};i.addEventListener("input",(function(){p(),function(){var t=i.value,e=a.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})),r=!0,n=!1,o=void 0;try{for(var u,l=e[Symbol.iterator]();!(r=(u=l.next()).done);r=!0){var s=u.value,h=document.createElement("li");h.textContent=s.name,h.className="autocomplete-result",h.addEventListener("click",(function(t){i.value=t.target.textContent,p(),c.classList.remove("show-autocomplete")})),c.appendChild(h)}}catch(t){n=!0,o=t}finally{try{r||null==l.return||l.return()}finally{if(n)throw o}}c.classList.add("show-autocomplete")}()})),l.addEventListener("click",(function(){h=!0,f()})),document.addEventListener("click",(function(t){i.contains(t.target)||c.classList.remove("show-autocomplete")})),i.value="",f(),d(a)}();
//# sourceMappingURL=index.c610f171.js.map