var t={264:(t,n,r)=>{t.exports=r(588)},588:t=>{var n=function(t){var n,r=Object.prototype,e=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,n,r){return Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{s({},"")}catch(t){s=function(t,n,r){return t[n]=r}}function u(t,n,r,e){var o=n&&n.prototype instanceof y?n:y,a=Object.create(o.prototype),i=new S(e||[]);return a._invoke=function(t,n,r){var e=l;return function(o,a){if(e===d)throw new Error("Generator is already running");if(e===p){if("throw"===o)throw a;return A()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=_(i,r);if(c){if(c===m)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(e===l)throw e=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);e=d;var s=f(t,n,r);if("normal"===s.type){if(e=r.done?p:h,s.arg===m)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(e=p,r.method="throw",r.arg=s.arg)}}}(t,r,i),a}function f(t,n,r){try{return{type:"normal",arg:t.call(n,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var l="suspendedStart",h="suspendedYield",d="executing",p="completed",m={};function y(){}function v(){}function g(){}var w={};w[a]=function(){return this};var b=Object.getPrototypeOf,x=b&&b(b(P([])));x&&x!==r&&e.call(x,a)&&(w=x);var L=g.prototype=y.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(n){s(t,n,(function(t){return this._invoke(n,t)}))}))}function k(t,n){function r(o,a,i,c){var s=f(t[o],t,a);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"==typeof l&&e.call(l,"__await")?n.resolve(l.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):n.resolve(l).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,c)}))}c(s.arg)}var o;this._invoke=function(t,e){function a(){return new n((function(n,o){r(t,e,n,o)}))}return o=o?o.then(a,a):a()}}function _(t,r){var e=t.iterator[r.method];if(e===n){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=n,_(t,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=f(e,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,m;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=n),r.delegate=null,m):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function O(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function j(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function P(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(e.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=n,r.done=!0,r};return i.next=i}}return{next:A}}function A(){return{value:n,done:!0}}return v.prototype=L.constructor=g,g.constructor=v,v.displayName=s(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===v||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s(t,c,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},E(k.prototype),k.prototype[i]=function(){return this},t.AsyncIterator=k,t.async=function(n,r,e,o,a){void 0===a&&(a=Promise);var i=new k(u(n,r,e,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(L),s(L,c,"Generator"),L[a]=function(){return this},L.toString=function(){return"[object Generator]"},t.keys=function(t){var n=[];for(var r in t)n.push(r);return n.reverse(),function r(){for(;n.length;){var e=n.pop();if(e in t)return r.value=e,r.done=!1,r}return r.done=!0,r}},t.values=P,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(j),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(e,o){return c.type="throw",c.arg=t,r.next=e,o&&(r.method="next",r.arg=n),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=e.call(i,"catchLoc"),u=e.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,n){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=n&&n<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=n,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),m},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),m}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc===t){var e=r.completion;if("throw"===e.type){var o=e.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:P(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=n),m}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var a=n[e]={exports:{}};return t[e](a,a.exports,r),a.exports}r.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return r.d(n,{a:n}),n},r.d=(t,n)=>{for(var e in n)r.o(n,e)&&!r.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})},r.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n);var e={};(()=>{r.d(e,{Z:()=>v});var t=function(t){return"string"==typeof t?t:null},n=function(t){return"string"==typeof t?t:Array.isArray(t)?t.join(";"):null},o=function(t,n,r,e){return!![t,n,r,e].every((function(t){return"string"==typeof t}))},a={selector:".char-animation--hoverStyle",declaration:"color: inherit; -webkit-text-stroke: 1px inherit;"},i=function(r,e){var o=function(r,e){var o=t(r),a=n(e);return!(!o||!a)}(r,e),a=document.styleSheets.length>0;if(o){var i=t(r),c=n(e);a?function(t,n){var r=document.styleSheets[0],e=r.rules.length;r.insertRule("".concat(t," { ").concat(n," }"),e)}(i,c):function(t,n){var r=document.querySelector("head"),e=document.createElement("style");e.append("".concat(t," { ").concat(n," }")),r.append(e)}(i,c)}else console.error("TypeError: An argument passed is incompatible with the type expected by the function")},c=function(t){switch(t){case"rubberBand":i(".char-animation--rubberBand","animation: char-animation--rubberBand 1.2s ease-in-out forwards;"),i("@keyframes char-animation--rubberBand","0% {\n          transform: scale3d(1,1,1);\n        }\n        30% {\n          transform: scale3d(1.25,0.75,1);\n        }\n        40% {\n          transform: scale3d(0.75,1.25,1);\n        }\n        50% {\n          transform: scale3d(1.15,0.85,1);\n        }\n        65% {\n          transform: scale3d(0.95,1.05,1);\n        }\n        75% {\n          transform: scale3d(1.05,0.95,1);\n        }\n        100% {\n          transform: scale3d(1,1,1);\n        }");break;case"bounce":i(".char-animation--bounce","animation: char-animation--bounce 1.2s both;"),i("@keyframes char-animation--bounce","0%, 100%, 10%, 53%, 80% {\n            transition-timing-function: cubic-bezier(0.215, .61, .355, 1);\n            transform: translate3d(0, 0, 0)\n          }\n          40%, 43% {\n            transition-timing-function: cubic-bezier(0.755, .050, .855, .060);\n            transform: translate3d(0, -20px, 0)\n          }\n          70% {\n            transition-timing-function: cubic-bezier(0.755, .050, .855, .060);\n            transform: translate3d(0, -10px, 0)\n          }\n          90% {\n            transform: translate3d(0, -2px, 0);\n          }");break;case"pulse":i(".char-animation--pulse","animation: char-animation--pulse 1.2s both;"),i("@keyframes char-animation--pulse","0% {\n        transform: scale3d(1, 1, 1)\n      }\n      50% {\n        transform: scale3d(1.1, 1.1, 1.1)\n      }\n      100% {\n        transform: scale3d(1, 1, 1)\n      }");break;case"tada":i(".char-animation--tada","animation: char-animation--tada 1.2s both;"),i("@keyframes char-animation--tada","0% {\n        transform: scale3d(1, 1, 1)\n      }\n      10%, 20% {\n        transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)\n      }\n      30%, 50%, 70%, 90% {\n        transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)\n      }\n      40%, 60%, 80% {\n        transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)\n      }\n      100% {\n        transform: scale3d(1, 1, 1)\n      }");break;case"swing":i(".char-animation--swing","transform-origin: top center; animation: char-animation--swing 1.2s both;"),i("@keyframes char-animation--swing","20% {\n        transform: rotate3d(0, 0, 1, 15deg)\n      }\n      40% {\n        transform: rotate3d(0, 0, 1, -10deg)\n      }\n      60% {\n        transform: rotate3d(0, 0, 1, 5deg)\n      }\n      80% {\n        transform: rotate3d(0, 0, 1, -5deg)\n      }\n      100% {\n        transform: rotate3d(0, 0, 1, 0deg)\n      }");break;default:console.log("Animation is not defined")}},s=function(t,n,r,e){a.declaration="color: ".concat(r,";  -webkit-text-stroke: 1px ").concat(e,";"),i(".char-animation--singleChar","display: inline-block;"),i(a.selector,a.declaration),document.querySelectorAll(t).forEach((function(t){var r=t.textContent,e=Array.from(r),o=[];t.textContent="",e.forEach((function(t){var r=document.createElement("span");r.textContent=t," "!==r.textContent&&r.classList.add("char-animation--singleChar","char-animation--singleChar--".concat(n)),o.push(r)})),t.append.apply(t,o)}))};function u(t,n,r,e,o,a,i){try{var c=t[a](i),s=c.value}catch(t){return void r(t)}c.done?n(s):Promise.resolve(s).then(e,o)}function f(t){return function(){var n=this,r=arguments;return new Promise((function(e,o){var a=t.apply(n,r);function i(t){u(a,e,o,i,c,"next",t)}function c(t){u(a,e,o,i,c,"throw",t)}i(void 0)}))}}var l=r(264),h=r.n(l),d=function(t,n){return new Promise((function(r,e){setTimeout((function(){t.classList.add("char-animation--".concat(n),"char-animation--hoverStyle"),r()}),0)}))},p=function(t,n){return new Promise((function(r,e){setTimeout((function(){t.classList.remove("char-animation--".concat(n),"char-animation--hoverStyle"),r()}),0)}))};function m(){return(m=f(h().mark((function t(n,r){return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p(n,r);case 2:return t.next=4,d(n,r);case 4:return t.next=6,setTimeout((function(){p(n,r)}),1200);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var y=function(t){var n=document.querySelectorAll(".char-animation--singleChar--".concat(t));n.forEach((function(n){n.addEventListener("mouseenter",(function(r){d(n,t)}))})),n.forEach((function(n){n.addEventListener("mouseleave",(function(r){!function(t,n){m.apply(this,arguments)}(n,t)}))}))};const v=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.selector,r=t.animation,e=t.color,a=void 0===e?"inherit;":e,i=t.stroke,u=void 0===i?"inherit":i,f=o(n,r,a,u);f?(s(n,r,a,u),c(r),y(r)):console.error("TypeError: An argument passed is incompatible with the type expected by the function")}})();var o=e.Z;export{o as default};