self.babelHelpers={asyncToGenerator:function(e){return function(){var r=e.apply(this,arguments);return new Promise(function(e,t){return function n(o,i){try{var c=r[o](i),l=c.value}catch(e){return void t(e)}if(!c.done)return Promise.resolve(l).then(function(e){n("next",e)},function(e){n("throw",e)});e(l)}("next")})}}},this.workbox=this.workbox||{},this.workbox.core=function(){"use strict";try{self.workbox.v["workbox:core:3.3.1"]=1}catch(e){}var e={debug:0,log:1,warn:2,error:3,silent:4};const r=(e,...r)=>{let t=e;return r.length>0&&(t+=` :: ${JSON.stringify(r)}`),t};class t extends Error{constructor(e,t){super(r(e,t)),this.name=e,this.details=t}}const n={prefix:"workbox",suffix:self.registration.scope,googleAnalytics:"googleAnalytics",precache:"precache",runtime:"runtime"},o=e=>[n.prefix,e,n.suffix].filter(e=>e.length>0).join("-"),i={updateDetails:e=>{Object.keys(n).forEach(r=>{void 0!==e[r]&&(n[r]=e[r])})},getGoogleAnalyticsName:e=>e||o(n.googleAnalytics),getPrecacheName:e=>e||o(n.precache),getRuntimeName:e=>e||o(n.runtime)},c=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);let l=(()=>e.warn)();const u=e=>l<=e,s=e=>l=e,a=()=>l,f=e.error,d=function(r,t,n){const o=0===r.indexOf("group")?f:e[r];if(!u(o))return;if(!n||"groupCollapsed"===r&&c)return void console[r](...t);const i=["%cworkbox",`background: ${n}; color: white; padding: 2px 0.5em; `+"border-radius: 0.5em;"];console[r](...i,...t)},h=()=>{u(f)&&console.groupEnd()},p={groupEnd:h,unprefixed:{groupEnd:h}},b={debug:"#7f8c8d",log:"#2ecc71",warn:"#f39c12",error:"#c0392b",groupCollapsed:"#3498db"};var y,g;Object.keys(b).forEach(e=>(e=e,g=b[e],p[e]=((...r)=>d(e,r,g)),void(p.unprefixed[e]=((...r)=>d(e,r)))));var v=new class{constructor(){try{self.workbox.v=self.workbox.v||{}}catch(e){}}get cacheNames(){return{googleAnalytics:i.getGoogleAnalyticsName(),precache:i.getPrecacheName(),runtime:i.getRuntimeName()}}setCacheNameDetails(e){i.updateDetails(e)}get logLevel(){return a()}setLogLevel(r){if(r>e.silent||r<e.debug)throw new t("invalid-value",{paramName:"logLevel",validValueDescription:"Please use a value from LOG_LEVELS, i.e 'logLevel = workbox.core.LOG_LEVELS.debug'.",value:r});s(r)}};class w{constructor(e,r,{onupgradeneeded:t,onversionchange:n=this.e}={}){this.r=e,this.t=r,this.n=t,this.e=n,this.o=null}open(){var e=this;return babelHelpers.asyncToGenerator(function*(){if(!e.o)return e.o=yield new Promise(function(r,t){let n=!1;setTimeout(function(){n=!0,t(new Error("The open request was blocked and timed out"))},e.OPEN_TIMEOUT);const o=indexedDB.open(e.r,e.t);o.onerror=function(e){return t(o.error)},o.onupgradeneeded=function(r){n?(o.transaction.abort(),r.target.result.close()):e.n&&e.n(r)},o.onsuccess=function(t){const o=t.target.result;n?o.close():(o.onversionchange=e.e,r(o))}}),e})()}get(e,...r){var t=this;return babelHelpers.asyncToGenerator(function*(){return yield t.i("get",e,"readonly",...r)})()}add(e,...r){var t=this;return babelHelpers.asyncToGenerator(function*(){return yield t.i("add",e,"readwrite",...r)})()}put(e,...r){var t=this;return babelHelpers.asyncToGenerator(function*(){return yield t.i("put",e,"readwrite",...r)})()}delete(e,...r){var t=this;return babelHelpers.asyncToGenerator(function*(){yield t.i("delete",e,"readwrite",...r)})()}deleteDatabase(){var e=this;return babelHelpers.asyncToGenerator(function*(){e.close(),e.o=null,yield new Promise(function(r,t){const n=indexedDB.deleteDatabase(e.r);n.onerror=function(e){return t(e.target.error)},n.onblocked=function(){return t(new Error("Deletion was blocked."))},n.onsuccess=function(){return r()}})})()}getAll(e,r,t){var n=this;return babelHelpers.asyncToGenerator(function*(){return"getAll"in IDBObjectStore.prototype?yield n.i("getAll",e,"readonly",r,t):yield n.getAllMatching(e,{query:r,count:t})})()}getAllMatching(e,r={}){var t=this;return babelHelpers.asyncToGenerator(function*(){return yield t.transaction([e],"readonly",function(t,n){const o=t[e],i=[];(r.index?o.index(r.index):o).openCursor(r.query,r.direction).onsuccess=function(e){const t=e.target.result;if(t){const{primaryKey:e,key:o,value:c}=t;i.push(r.includeKeys?{primaryKey:e,key:o,value:c}:c),r.count&&i.length>=r.count?n(i):t.continue()}else n(i)}})})()}transaction(e,r,t){var n=this;return babelHelpers.asyncToGenerator(function*(){return yield n.open(),yield new Promise(function(o,i){const c=n.o.transaction(e,r);c.onerror=function(e){return i(e.target.error)},c.onabort=function(e){return i(e.target.error)},c.oncomplete=function(){return o()};const l={};for(const r of e)l[r]=c.objectStore(r);t(l,function(e){return o(e)},function(){i(new Error("The transaction was manually aborted")),c.abort()})})})()}i(e,r,t,...n){var o=this;return babelHelpers.asyncToGenerator(function*(){yield o.open();return yield o.transaction([r],t,function(t,o){t[r][e](...n).onsuccess=function(e){o(e.target.result)}})})()}e(e){this.close()}close(){this.o&&this.o.close()}}w.prototype.OPEN_TIMEOUT=2e3;var m="cacheDidUpdate",E="cacheWillUpdate",L="cachedResponseWillBeUsed",H="fetchDidFail",x="requestWillFetch",k=(e,r)=>e.filter(e=>r in e);let q=(D=babelHelpers.asyncToGenerator(function*(){for(const e of N)yield e()}),function(){return D.apply(this,arguments)});var D;const N=new Set;const O=e=>{const r=new URL(e,location);return r.origin===location.origin?r.pathname:r.href},R=(()=>{var e=babelHelpers.asyncToGenerator(function*(e,r,n,o=[]){if(!n)throw new t("cache-put-with-no-response",{url:O(r.url)});let i=yield W(r,n,o);if(!i)return;const c=yield caches.open(e),l=k(o,m);let u=l.length>0?yield A(e,r):null;try{yield c.put(r,i)}catch(e){throw"QuotaExceededError"===e.name&&(yield q()),e}for(let t of l)yield t[m].call(t,{cacheName:e,request:r,oldResponse:u,newResponse:i})});return function(r,t,n){return e.apply(this,arguments)}})(),A=(P=babelHelpers.asyncToGenerator(function*(e,r,t,n=[]){let o=yield(yield caches.open(e)).match(r,t);for(let i of n)L in i&&(o=yield i[L].call(i,{cacheName:e,request:r,matchOptions:t,cachedResponse:o}));return o}),function(e,r,t){return P.apply(this,arguments)});var P;const W=(S=babelHelpers.asyncToGenerator(function*(e,r,t){let n=r,o=!1;for(let r of t)if(E in r&&(o=!0,!(n=yield r[E].call(r,{request:e,response:n}))))break;return o||(n=n.ok?n:null),n||null}),function(e,r,t){return S.apply(this,arguments)});var S;const _={put:R,match:A},j={fetch:(()=>{var e=babelHelpers.asyncToGenerator(function*(e,r,n=[]){"string"==typeof e&&(e=new Request(e));const o=k(n,H),i=o.length>0?e.clone():null;try{for(let r of n)x in r&&(e=yield r[x].call(r,{request:e.clone()}))}catch(e){throw new t("plugin-error-request-will-fetch",{thrownError:e})}const c=e.clone();try{return yield fetch(e,r)}catch(e){for(let r of o)yield r[H].call(r,{error:e,originalRequest:i.clone(),request:c.clone()});throw e}});return function(r,t){return e.apply(this,arguments)}})()};var B=Object.freeze({DBWrapper:w,WorkboxError:t,assert:null,cacheNames:i,cacheWrapper:_,fetchWrapper:j,getFriendlyURL:O,logger:p,registerQuotaErrorCallback:function(e){N.add(e)}});return Object.assign(v,{LOG_LEVELS:e,_private:B})}();

//# sourceMappingURL=workbox-core.prod.js.map
