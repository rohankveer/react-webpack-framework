"use strict";(self.webpackChunkreact_webpack_framework=self.webpackChunkreact_webpack_framework||[]).push([[162],{55648:function(n,t,e){e.d(t,{Ep:function(){return f},aU:function(){return r},cP:function(){return s},q_:function(){return o}});var r,a=e(87462);!function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"}(r||(r={}));var u="beforeunload";function o(n){void 0===n&&(n={});var t=n.window,e=void 0===t?document.defaultView:t,o=e.history;function l(){var n=s(e.location.hash.substr(1)),t=n.pathname,r=void 0===t?"/":t,a=n.search,u=void 0===a?"":a,i=n.hash,c=void 0===i?"":i,f=o.state||{};return[f.idx,{pathname:r,search:u,hash:c,state:f.usr||null,key:f.key||"default"}]}var h=null;function v(){if(h)m.call(h),h=null;else{var n=r.Pop,t=l(),e=t[0],a=t[1];if(m.length){if(null!=e){var u=g-e;u&&(h={action:n,location:a,retry:function(){S(-1*u)}},S(u))}}else x(n)}}e.addEventListener("popstate",v),e.addEventListener("hashchange",(function(){f(l()[1])!==f(b)&&v()}));var p=r.Pop,d=l(),g=d[0],b=d[1],k=c(),m=c();function y(n){return function(){var n=document.querySelector("base"),t="";if(n&&n.getAttribute("href")){var r=e.location.href,a=r.indexOf("#");t=-1===a?r:r.slice(0,a)}return t}()+"#"+("string"==typeof n?n:f(n))}function w(n,t){return void 0===t&&(t=null),(0,a.Z)({pathname:b.pathname,hash:"",search:""},"string"==typeof n?s(n):n,{state:t,key:Math.random().toString(36).substr(2,8)})}function P(n,t){return[{usr:n.state,key:n.key,idx:t},y(n)]}function E(n,t,e){return!m.length||(m.call({action:n,location:t,retry:e}),!1)}function x(n){p=n;var t=l();g=t[0],b=t[1],k.call({action:p,location:b})}function S(n){o.go(n)}return null==g&&(g=0,o.replaceState((0,a.Z)({},o.state,{idx:g}),"")),{get action(){return p},get location(){return b},createHref:y,push:function n(t,a){var u=r.Push,i=w(t,a);if(E(u,i,(function(){n(t,a)}))){var c=P(i,g+1),f=c[0],s=c[1];try{o.pushState(f,"",s)}catch(n){e.location.assign(s)}x(u)}},replace:function n(t,e){var a=r.Replace,u=w(t,e);if(E(a,u,(function(){n(t,e)}))){var i=P(u,g),c=i[0],f=i[1];o.replaceState(c,"",f),x(a)}},go:S,back:function(){S(-1)},forward:function(){S(1)},listen:function(n){return k.push(n)},block:function(n){var t=m.push(n);return 1===m.length&&e.addEventListener(u,i),function(){t(),m.length||e.removeEventListener(u,i)}}}}function i(n){n.preventDefault(),n.returnValue=""}function c(){var n=[];return{get length(){return n.length},push:function(t){return n.push(t),function(){n=n.filter((function(n){return n!==t}))}},call:function(t){n.forEach((function(n){return n&&n(t)}))}}}function f(n){var t=n.pathname,e=void 0===t?"/":t,r=n.search,a=void 0===r?"":r,u=n.hash,o=void 0===u?"":u;return a&&"?"!==a&&(e+="?"===a.charAt(0)?a:"?"+a),o&&"#"!==o&&(e+="#"===o.charAt(0)?o:"#"+o),e}function s(n){var t={};if(n){var e=n.indexOf("#");e>=0&&(t.hash=n.substr(e),n=n.substr(0,e));var r=n.indexOf("?");r>=0&&(t.search=n.substr(r),n=n.substr(0,r)),n&&(t.pathname=n)}return t}}}]);