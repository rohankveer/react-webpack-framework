(self.webpackChunkreact_webpack_framework=self.webpackChunkreact_webpack_framework||[]).push([[179],{43896:function(n,e,t){var r={"./de.json":[45382,382],"./en.json":[85526,526]};function i(n){if(!t.o(r,n))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=r[n],i=e[0];return t.e(e[1]).then((function(){return t.t(i,19)}))}i.keys=function(){return Object.keys(r)},i.id=43896,n.exports=i},88748:function(){window.$RefreshReg$=function(){},window.$RefreshSig$=function(){return function(){}}},28516:function(n,e,t){"use strict";t(88748);var r=t(20745),i=t(39711),a=t(96974),c=(t(28594),t(35666),t(85893));function o(){return(0,c.jsx)("div",{children:(0,c.jsxs)("nav",{className:"nav nav-pills nav-justified",children:[(0,c.jsx)(i.OL,{className:function(n){return n.isActive?"nav-link active":"nav-link"},to:"/",children:"Home"}),(0,c.jsx)(i.OL,{className:function(n){return n.isActive?"nav-link active":"nav-link"},to:"/view",children:"Main Pages"}),(0,c.jsx)(i.OL,{className:function(n){return n.isActive?"nav-link active":"nav-link"},to:"/error",children:"Error Pages"})]})})}function s(){return(0,c.jsx)("h2",{children:"Error Layout"})}function u(){return(0,c.jsx)("div",{children:(0,c.jsxs)("nav",{className:"nav nav-pills nav-justified",children:[(0,c.jsx)(i.OL,{className:function(n){return n.isActive?"nav-link active":"nav-link"},to:"view",children:"Home"}),(0,c.jsx)(i.OL,{className:function(n){return n.isActive?"nav-link active":"nav-link"},to:"page-1",children:"Page 1"}),(0,c.jsx)(i.OL,{className:function(n){return n.isActive?"nav-link active":"nav-link"},to:"page-2",children:"Page 2"})]})})}var l=JSON.parse('{"D":"React with webpack 5"}'),f={log:function(n){0},error:function(n){0}};function h(){return f.log("Hello from log"),(0,c.jsxs)("div",{id:"main-wrapper",children:[(0,c.jsx)(u,{}),(0,c.jsx)("h4",{children:l.D}),(0,c.jsx)("h4",{children:L10n.t("hello")}),(0,c.jsx)("h4",{children:L10n.t("dynamicVariables",{variable:"Hello"})}),(0,c.jsx)(a.j3,{})]})}var d=t.p+"assets/525fd8bf282149719dcc.png";function v(){var n=(0,a.UO)().pageId;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("img",{src:d,height:50,width:50}),(0,c.jsx)("h2",{children:"Page Layout ".concat(n)})]})}var j=t(91826),m=t.n(j);function x(n){return new Promise((function(e,r){(function(n){return new Promise((function(e,r){t(43896)("./".concat(n,".json")).then((function(n){e(n.default)})).catch((function(){r()}))}))})(n).then((function(n){m().setTexts(n),e()})).catch((function(){r()}))}))}window.L10n=m(),m().t=function(n,e){return m().translate(n,e)};var p=t(67294);function g(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==t)return;var r,i,a=[],c=!0,o=!1;try{for(t=t.call(n);!(c=(r=t.next()).done)&&(a.push(r.value),!e||a.length!==e);c=!0);}catch(n){o=!0,i=n}finally{try{c||null==t.return||t.return()}finally{if(o)throw i}}return a}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return w(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return w(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}t(27449);var y=function(){var n=g((0,p.useState)(!0),2),e=n[0],t=n[1],r=g((0,p.useState)(""),2),u=r[0],l=r[1];return x(localStorage.getItem("locale")||"en").then((function(){t(!1)})).catch((function(){l("Oops something went wrong")})),(0,c.jsxs)(c.Fragment,{children:[e&&(0,c.jsx)("h4",{children:"Loading......"}),u&&(0,c.jsx)("h4",{children:u}),!e&&!u&&(0,c.jsx)(i.UT,{children:(0,c.jsxs)(a.Z5,{children:[(0,c.jsx)(a.AW,{path:"error",element:(0,c.jsx)(s,{})}),(0,c.jsxs)(a.AW,{path:"view",element:(0,c.jsx)(h,{}),children:[(0,c.jsx)(a.AW,{index:!0,element:(0,c.jsx)("h4",{children:"Index route for main layout"})}),(0,c.jsx)(a.AW,{path:":pageId",element:(0,c.jsx)(v,{})})]}),(0,c.jsx)(a.AW,{path:"/",element:(0,c.jsx)(o,{})})]})})]})};(0,r.s)(document.getElementById("eui-app-container")).render((0,c.jsx)(y,{}))},27449:function(n,e,t){"use strict";t.r(e)}},function(n){n.O(0,[912,25,105,655,398,612,70,617,216,162],(function(){return e=28516,n(n.s=e);var e}));n.O()}]);