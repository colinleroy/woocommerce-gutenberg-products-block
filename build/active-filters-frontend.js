!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=238)}({0:function(e,t){!function(){e.exports=this.wp.element}()},1:function(e,t){!function(){e.exports=this.wp.i18n}()},10:function(e,t){function r(){return e.exports=r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,r.apply(this,arguments)}e.exports=r,e.exports.default=e.exports,e.exports.__esModule=!0},11:function(e,t){!function(){e.exports=this.wp.data}()},110:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(2);function o(e,t){var r=Object(n.useRef)();return Object(n.useEffect)((function(){r.current===e||t&&!t(e,r.current)||(r.current=e)}),[e,t]),r.current}},12:function(e,t,r){"use strict";r.d(t,"k",(function(){return c})),r.d(t,"i",(function(){return a})),r.d(t,"j",(function(){return i})),r.d(t,"f",(function(){return u})),r.d(t,"b",(function(){return l})),r.d(t,"e",(function(){return p})),r.d(t,"d",(function(){return f})),r.d(t,"h",(function(){return b})),r.d(t,"g",(function(){return d})),r.d(t,"a",(function(){return m})),r.d(t,"c",(function(){return y})),r.d(t,"l",(function(){return v}));var n,o=r(5),c=Object(o.getSetting)("wcBlocksConfig",{buildPhase:1,pluginUrl:"",productCount:0,restApiRoutes:{},wordCountType:"words"}),a=c.pluginUrl+"assets/",i=c.pluginUrl+"build/",s=c.buildPhase,u=null===(n=o.STORE_PAGES.shop)||void 0===n?void 0:n.permalink,l=(o.STORE_PAGES.checkout.id,o.STORE_PAGES.checkout.permalink),p=o.STORE_PAGES.privacy.permalink,f=o.STORE_PAGES.privacy.title,b=o.STORE_PAGES.terms.permalink,d=o.STORE_PAGES.terms.title,m=(o.STORE_PAGES.cart.id,o.STORE_PAGES.cart.permalink),y=o.STORE_PAGES.myaccount.permalink?o.STORE_PAGES.myaccount.permalink:Object(o.getSetting)("wpLoginUrl","/wp-login.php"),v=(r(41),function(){return s>1})},121:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n=r(10),o=r.n(n),c=r(7),a=r.n(c),i=r(0),s=r(44);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=[".wp-block-woocommerce-cart"],f=function(e){var t=e.Block,r=e.containers,n=e.getProps,c=void 0===n?function(){}:n,a=e.getErrorBoundaryProps,u=void 0===a?function(){}:a;0!==r.length&&Array.prototype.forEach.call(r,(function(e,r){var n=c(e,r),a=u(e,r),p=l(l({},e.dataset),n.attributes);e.classList.remove("is-loading"),Object(i.render)(React.createElement(s.a,a,React.createElement(i.Suspense,{fallback:React.createElement("div",{className:"wc-block-placeholder"})},React.createElement(t,o()({},n,{attributes:p})))),e)}))},b=function(e){var t=e.Block,r=e.getProps,n=e.getErrorBoundaryProps,o=e.selector,c=e.wrappers,a=document.body.querySelectorAll(o);c.length>0&&Array.prototype.filter.call(a,(function(e){return!function(e,t){return Array.prototype.some.call(t,(function(t){return t.contains(e)&&!t.isSameNode(e)}))}(e,c)})),f({Block:t,containers:a,getProps:r,getErrorBoundaryProps:n})},d=function(e){var t=document.body.querySelectorAll(p.join(","));b(l(l({},e),{},{wrappers:t})),Array.prototype.forEach.call(t,(function(t){t.addEventListener("wc-blocks_render_blocks_frontend",(function(){var r,n,o,c,a,i;r=l(l({},e),{},{wrapper:t}),n=r.Block,o=r.getProps,c=r.getErrorBoundaryProps,a=r.selector,i=r.wrapper.querySelectorAll(a),f({Block:n,containers:i,getProps:o,getErrorBoundaryProps:c})}))}))}},124:function(e,t){},127:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r(14),o=r(11),c=r(0),a=r(53),i=r(99),s=function(e){var t=e.namespace,r=e.resourceName,s=e.resourceValues,u=void 0===s?[]:s,l=e.query,p=void 0===l?{}:l,f=e.shouldSelect,b=void 0===f||f;if(!t||!r)throw new Error("The options object must have valid values for the namespace and the resource properties.");var d=Object(c.useRef)({results:[],isLoading:!0}),m=Object(a.a)(p),y=Object(a.a)(u),v=Object(i.a)(),g=Object(o.useSelect)((function(e){if(!b)return null;var o=e(n.COLLECTIONS_STORE_KEY),c=[t,r,m,y],a=o.getCollectionError.apply(o,c);return a&&v(a),{results:o.getCollection.apply(o,c),isLoading:!o.hasFinishedResolution("getCollection",c)}}),[t,r,y,m,b]);return null!==g&&(d.current=g),d.current}},139:function(e,t,r){"use strict";var n=r(7),o=r.n(n),c=r(15),a=r.n(c),i=r(0);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.a=function(e){var t=e.srcElement,r=e.size,n=void 0===r?24:r,c=a()(e,["srcElement","size"]);return Object(i.isValidElement)(t)?Object(i.cloneElement)(t,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({width:n,height:n},c)):null}},14:function(e,t){!function(){e.exports=this.wc.wcBlocksData}()},141:function(e,t,r){"use strict";var n=r(0),o=r(14),c=r(11),a=r(12);t.a=function(e){return function(t){var r;return r=Object(n.useRef)(a.k.restApiRoutes||{}),Object(c.useSelect)((function(e,t){if(r.current){var n=e(o.SCHEMA_STORE_KEY),c=n.isResolving,a=n.hasFinishedResolution,i=t.dispatch(o.SCHEMA_STORE_KEY),s=i.receiveRoutes,u=i.startResolution,l=i.finishResolution;Object.keys(r.current).forEach((function(e){var t=r.current[e];c("getRoutes",[e])||a("getRoutes",[e])||(u("getRoutes",[e]),s(t,[e]),l("getRoutes",[e]))}))}}),[]),React.createElement(e,t)}}},15:function(e,t,r){var n=r(72);e.exports=function(e,t){if(null==e)return{};var r,o,c=n(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c},e.exports.default=e.exports,e.exports.__esModule=!0},150:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return i}));var n=r(5),o=Object(n.getSetting)("attributes",[]),c=o.reduce((function(e,t){var r,n=(r=t)&&r.attribute_name?{id:parseInt(r.attribute_id,10),name:r.attribute_name,taxonomy:"pa_"+r.attribute_name,label:r.attribute_label}:null;return n.id&&e.push(n),e}),[]),a=function(e){if(e)return c.find((function(t){return t.id===e}))},i=function(e){if(e)return c.find((function(t){return t.taxonomy===e}))}},151:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return c}));var n=r(8),o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},r=arguments.length>2?arguments[2]:void 0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",c=e.filter((function(e){return e.attribute===r.taxonomy})),a=c.length?c[0]:null;if(a&&a.slug&&Array.isArray(a.slug)&&a.slug.includes(o)){var i=a.slug.filter((function(e){return e!==o})),s=e.filter((function(e){return e.attribute!==r.taxonomy}));i.length>0&&(a.slug=i.sort(),s.push(a)),t(Object(n.sortBy)(s,"attribute"))}},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},r=arguments.length>2?arguments[2]:void 0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"in",a=e.filter((function(e){return e.attribute!==r.taxonomy}));0===o.length?t(a):(a.push({attribute:r.taxonomy,operator:c,slug:Object(n.map)(o,"slug").sort()}),t(Object(n.sortBy)(a,"attribute")))}},158:function(e,t,r){"use strict";var n=r(10),o=r.n(n),c=r(15),a=r.n(c),i=(r(3),r(4)),s=r.n(i),u=r(1),l=r(139),p=r(174),f=(r(124),function(e){var t=e.text,r=e.screenReaderText,n=void 0===r?"":r,c=e.element,i=void 0===c?"li":c,u=e.className,l=void 0===u?"":u,p=e.radius,f=void 0===p?"small":p,b=e.children,d=void 0===b?null:b,m=a()(e,["text","screenReaderText","element","className","radius","children"]),y=i,v=s()(l,"wc-block-components-chip","wc-block-components-chip--radius-"+f),g=Boolean(n&&n!==t);return React.createElement(y,o()({className:v},m),React.createElement("span",{"aria-hidden":g,className:"wc-block-components-chip__text"},t),g&&React.createElement("span",{className:"screen-reader-text"},n),d)});t.a=function(e){var t=e.ariaLabel,r=void 0===t?"":t,n=e.className,c=void 0===n?"":n,i=e.disabled,b=void 0!==i&&i,d=e.onRemove,m=void 0===d?function(){}:d,y=e.removeOnAnyClick,v=void 0!==y&&y,g=e.text,O=e.screenReaderText,_=void 0===O?"":O,h=a()(e,["ariaLabel","className","disabled","onRemove","removeOnAnyClick","text","screenReaderText"]),x=v?"span":"button";if(!r){var E=_&&"string"==typeof _?_:g;r="string"!=typeof E?Object(u.__)("Remove","woo-gutenberg-products-block"):Object(u.sprintf)(Object(u.__)('Remove "%s"',"woo-gutenberg-products-block"),E)}var j={"aria-label":r,disabled:b,onClick:m,onKeyDown:function(e){"Backspace"!==e.key&&"Delete"!==e.key||m()}},w=v?j:{},R=v?{"aria-hidden":!0}:j;return React.createElement(f,o()({},h,w,{className:s()(c,"is-removable"),element:v?"button":h.element,screenReaderText:_,text:g}),React.createElement(x,o()({className:"wc-block-components-chip__remove"},R),React.createElement(l.a,{className:"wc-block-components-chip__remove-icon",srcElement:p.a,size:16})))}},174:function(e,t,r){"use strict";var n=r(10),o=r.n(n),c=r(15),a=r.n(c),i=r(28),s=function(e){var t=e.className,r=e.size,n=a()(e,["className","size"]);return React.createElement(i.SVG,o()({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",className:t,width:r,height:r},n),React.createElement("path",{d:"M14.95 6.46L11.41 10l3.54 3.54-1.41 1.41L10 11.42l-3.53 3.53-1.42-1.42L8.58 10 5.05 6.47l1.42-1.42L10 8.58l3.54-3.53z"}))},u=React.createElement(s,null);t.a=u},18:function(e,t){!function(){e.exports=this.wp.htmlEntities}()},2:function(e,t){!function(){e.exports=this.React}()},20:function(e,t){function r(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(e.exports=r=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),r(t)}e.exports=r,e.exports.default=e.exports,e.exports.__esModule=!0},21:function(e,t){!function(){e.exports=this.wp.isShallowEqual}()},22:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.default=e.exports,e.exports.__esModule=!0},238:function(e,t,r){e.exports=r(286)},239:function(e,t){},25:function(e,t){function r(t){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.default=e.exports,e.exports.__esModule=!0,r(t)}e.exports=r,e.exports.default=e.exports,e.exports.__esModule=!0},28:function(e,t){!function(){e.exports=this.wp.primitives}()},286:function(e,t,r){"use strict";r.r(t);var n=r(141),o=r(121),c=r(9),a=r.n(c),i=r(1),s=r(98),u=r(0),l=r(4),p=r.n(l),f=(r(3),r(31)),b=(r(239),r(150)),d=r(40),m=r(158),y=function(e,t){return Number.isFinite(e)&&Number.isFinite(t)?Object(i.sprintf)(Object(i.__)("Between %1$s and %2$s","woo-gutenberg-products-block"),Object(d.formatPrice)(e),Object(d.formatPrice)(t)):Number.isFinite(e)?Object(i.sprintf)(Object(i.__)("From %s","woo-gutenberg-products-block"),Object(d.formatPrice)(e)):Object(i.sprintf)(Object(i.__)("Up to %s","woo-gutenberg-products-block"),Object(d.formatPrice)(t))},v=function(e){var t=e.type,r=e.name,n=e.prefix,o=e.removeCallback,c=void 0===o?function(){}:o,a=e.showLabel,s=void 0===a||a,u=e.displayStyle,l=n?React.createElement(React.Fragment,null,n," ",r):r,p=Object(i.sprintf)(Object(i.__)("Remove %s filter","woo-gutenberg-products-block"),r);return React.createElement("li",{className:"wc-block-active-filters__list-item",key:t+":"+r},s&&React.createElement("span",{className:"wc-block-active-filters__list-item-type"},t+": "),"chips"===u?React.createElement(m.a,{element:"span",text:l,onRemove:c,radius:"large",ariaLabel:p}):React.createElement("span",{className:"wc-block-active-filters__list-item-name"},l,React.createElement("button",{className:"wc-block-active-filters__list-item-remove",onClick:c},React.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},React.createElement("ellipse",{cx:"8",cy:"8",rx:"8",ry:"8",transform:"rotate(-180 8 8)",fill:"currentColor",fillOpacity:"0.7"}),React.createElement("rect",{x:"10.636",y:"3.94983",width:"2",height:"9.9466",transform:"rotate(45 10.636 3.94983)",fill:"white"}),React.createElement("rect",{x:"12.0503",y:"11.0209",width:"2",height:"9.9466",transform:"rotate(135 12.0503 11.0209)",fill:"white"})),React.createElement(f.a,{screenReaderLabel:p}))))},g=r(127),O=r(18),_=r(151),h=function(e){var t=e.attributeObject,r=void 0===t?{}:t,n=e.slugs,o=void 0===n?[]:n,c=e.operator,u=void 0===c?"in":c,l=e.displayStyle,p=Object(g.a)({namespace:"/wc/store",resourceName:"products/attributes/terms",resourceValues:[r.id]}),f=p.results,b=p.isLoading,d=Object(s.b)("attributes",[]),m=a()(d,2),y=m[0],h=m[1];if(b)return null;var x=r.label;return React.createElement("li",null,React.createElement("span",{className:"wc-block-active-filters__list-item-type"},x,":"),React.createElement("ul",null,o.map((function(e,t){var n=f.find((function(t){return t.slug===e}));if(!n)return null;var o="";return t>0&&"and"===u&&(o=React.createElement("span",{className:"wc-block-active-filters__list-item-operator"},Object(i.__)("and","woo-gutenberg-products-block"))),v({type:x,name:Object(O.decodeEntities)(n.name||e),prefix:o,removeCallback:function(){Object(_.a)(y,h,r,e)},showLabel:!1,displayStyle:l})}))))},x=function(e){var t=e.attributes,r=e.isEditor,n=void 0!==r&&r,o=Object(s.b)("attributes",[]),c=a()(o,2),l=c[0],d=c[1],m=Object(s.b)("min_price"),g=a()(m,2),O=g[0],_=g[1],x=Object(s.b)("max_price"),E=a()(x,2),j=E[0],w=E[1],R=Object(u.useMemo)((function(){return Number.isFinite(O)||Number.isFinite(j)?v({type:Object(i.__)("Price","woo-gutenberg-products-block"),name:y(O,j),removeCallback:function(){_(void 0),w(void 0)},displayStyle:t.displayStyle}):null}),[O,j,t.displayStyle,_,w]),S=Object(u.useMemo)((function(){return l.map((function(e){var r=Object(b.b)(e.attribute);return React.createElement(h,{attributeObject:r,displayStyle:t.displayStyle,slugs:e.slug,key:e.attribute,operator:e.operator})}))}),[l,t.displayStyle]);if(!(l.length>0||Number.isFinite(O)||Number.isFinite(j)||n))return null;var k="h".concat(t.headingLevel),P=p()("wc-block-active-filters__list",{"wc-block-active-filters__list--chips":"chips"===t.displayStyle});return React.createElement(React.Fragment,null,!n&&t.heading&&React.createElement(k,null,t.heading),React.createElement("div",{className:"wc-block-active-filters"},React.createElement("ul",{className:P},n?React.createElement(React.Fragment,null,v({type:Object(i.__)("Size","woo-gutenberg-products-block"),name:Object(i.__)("Small","woo-gutenberg-products-block"),displayStyle:t.displayStyle}),v({type:Object(i.__)("Color","woo-gutenberg-products-block"),name:Object(i.__)("Blue","woo-gutenberg-products-block"),displayStyle:t.displayStyle})):React.createElement(React.Fragment,null,R,S)),React.createElement("button",{className:"wc-block-active-filters__clear-all",onClick:function(){_(void 0),w(void 0),d([])}},React.createElement(f.a,{label:Object(i.__)("Clear All","woo-gutenberg-products-block"),screenReaderLabel:Object(i.__)("Clear All Filters","woo-gutenberg-products-block")}))))};Object(o.a)({selector:".wp-block-woocommerce-active-filters",Block:Object(n.a)(x),getProps:function(e){return{attributes:{displayStyle:e.dataset.displayStyle,heading:e.dataset.heading,headingLevel:e.dataset.headingLevel||3}}}})},3:function(e,t,r){e.exports=r(75)()},31:function(e,t,r){"use strict";var n=r(7),o=r.n(n),c=r(0),a=r(4),i=r.n(a);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.a=function(e){var t,r=e.label,n=e.screenReaderLabel,o=e.wrapperElement,a=e.wrapperProps,s=void 0===a?{}:a,l=null!=r,p=null!=n;return!l&&p?(t=o||"span",s=u(u({},s),{},{className:i()(s.className,"screen-reader-text")}),React.createElement(t,s,n)):(t=o||c.Fragment,l&&p&&r!==n?React.createElement(t,s,React.createElement("span",{"aria-hidden":"true"},r),React.createElement("span",{className:"screen-reader-text"},n)):React.createElement(t,s,r))}},32:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.default=e.exports,e.exports.__esModule=!0},33:function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e},e.exports.default=e.exports,e.exports.__esModule=!0},34:function(e,t,r){var n=r(65);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)},e.exports.default=e.exports,e.exports.__esModule=!0},35:function(e,t,r){var n=r(20).default,o=r(22);e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?o(e):t},e.exports.default=e.exports,e.exports.__esModule=!0},4:function(e,t,r){var n;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)&&n.length){var a=o.apply(null,n);a&&e.push(a)}else if("object"===c)for(var i in n)r.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},40:function(e,t){!function(){e.exports=this.wc.priceFormat}()},41:function(e,t){!function(){e.exports=this.wp.blocks}()},44:function(e,t,r){"use strict";var n=r(32),o=r.n(n),c=r(33),a=r.n(c),i=r(22),s=r.n(i),u=r(34),l=r.n(u),p=r(35),f=r.n(p),b=r(25),d=r.n(b),m=r(7),y=r.n(m),v=(r(3),r(2)),g=r(1),O=r(12),_=function(e){var t=e.imageUrl,r=void 0===t?"".concat(O.i,"img/block-error.svg"):t,n=e.header,o=void 0===n?Object(g.__)("Oops!","woo-gutenberg-products-block"):n,c=e.text,a=void 0===c?Object(g.__)("There was an error loading the content.","woo-gutenberg-products-block"):c,i=e.errorMessage,s=e.errorMessagePrefix,u=void 0===s?Object(g.__)("Error:","woo-gutenberg-products-block"):s;return React.createElement("div",{className:"wc-block-error wc-block-components-error"},r&&React.createElement("img",{className:"wc-block-error__image wc-block-components-error__image",src:r,alt:""}),React.createElement("div",{className:"wc-block-error__content wc-block-components-error__content"},o&&React.createElement("p",{className:"wc-block-error__header wc-block-components-error__header"},o),a&&React.createElement("p",{className:"wc-block-error__text wc-block-components-error__text"},a),i&&React.createElement("p",{className:"wc-block-error__message wc-block-components-error__message"},u?u+" ":"",i)))};r(77);function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=d()(e);if(t){var o=d()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return f()(this,r)}}var x=function(e){l()(r,e);var t=h(r);function r(){var e;o()(this,r);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return e=t.call.apply(t,[this].concat(c)),y()(s()(e),"state",{errorMessage:"",hasError:!1}),e}return a()(r,[{key:"render",value:function(){var e=this.props,t=e.header,r=e.imageUrl,n=e.showErrorMessage,o=e.text,c=e.errorMessagePrefix,a=e.renderError,i=this.state,s=i.errorMessage;return i.hasError?"function"==typeof a?a({errorMessage:s}):React.createElement(_,{errorMessage:n?s:null,header:t,imageUrl:r,text:o,errorMessagePrefix:c}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return void 0!==e.statusText&&void 0!==e.status?{errorMessage:React.createElement(React.Fragment,null,React.createElement("strong",null,e.status),": ",e.statusText),hasError:!0}:{errorMessage:e.message,hasError:!0}}}]),r}(v.Component);x.defaultProps={showErrorMessage:!0};t.a=x},5:function(e,t){!function(){e.exports=this.wc.wcSettings}()},53:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(0),o=r(21),c=r.n(o);function a(e){var t=Object(n.useRef)();return void 0!==t.current&&c()(e,t.current)||(t.current=e),t.current}},61:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(0),o=Object(n.createContext)("page"),c=function(){return Object(n.useContext)(o)};o.Provider},65:function(e,t){function r(t,n){return e.exports=r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},e.exports.default=e.exports,e.exports.__esModule=!0,r(t,n)}e.exports=r,e.exports.default=e.exports,e.exports.__esModule=!0},69:function(e,t,r){var n=r(70);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},7:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},70:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.default=e.exports,e.exports.__esModule=!0},72:function(e,t){e.exports=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o},e.exports.default=e.exports,e.exports.__esModule=!0},75:function(e,t,r){"use strict";var n=r(76);function o(){}function c(){}c.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,c,a){if(a!==n){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:c,resetWarningCache:o};return r.PropTypes=r,r}},76:function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},77:function(e,t){},8:function(e,t){!function(){e.exports=this.lodash}()},86:function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},87:function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,c=void 0;try{for(var a,i=e[Symbol.iterator]();!(n=(a=i.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,c=e}finally{try{n||null==i.return||i.return()}finally{if(o)throw c}}return r}},e.exports.default=e.exports,e.exports.__esModule=!0},88:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},9:function(e,t,r){var n=r(86),o=r(87),c=r(69),a=r(88);e.exports=function(e,t){return n(e)||o(e,t)||c(e,t)||a()},e.exports.default=e.exports,e.exports.__esModule=!0},98:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d})),r.d(t,"c",(function(){return m}));var n=r(9),o=r.n(n),c=r(14),a=r(11),i=r(0),s=r(21),u=r.n(s),l=r(53),p=r(110),f=r(61),b=function(e){var t=Object(f.a)();e=e||t;var r=Object(a.useSelect)((function(t){return t(c.QUERY_STATE_STORE_KEY).getValueForQueryContext(e,void 0)}),[e]),n=Object(a.useDispatch)(c.QUERY_STATE_STORE_KEY).setValueForQueryContext;return[r,Object(i.useCallback)((function(t){n(e,t)}),[e,n])]},d=function(e,t,r){var n=Object(f.a)();r=r||n;var o=Object(a.useSelect)((function(n){return n(c.QUERY_STATE_STORE_KEY).getValueForQueryKey(r,e,t)}),[r,e]),s=Object(a.useDispatch)(c.QUERY_STATE_STORE_KEY).setQueryValue;return[o,Object(i.useCallback)((function(t){s(r,e,t)}),[r,e,s])]},m=function(e,t){var r=Object(f.a)(),n=b(t=t||r),c=o()(n,2),a=c[0],s=c[1],d=Object(l.a)(a),m=Object(l.a)(e),y=Object(p.a)(m),v=Object(i.useRef)(!1);return Object(i.useEffect)((function(){u()(y,m)||(s(Object.assign({},d,m)),v.current=!0)}),[d,m,y,s]),v.current?[a,s]:[e,s]}},99:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(9),o=r.n(n),c=r(0),a=function(){var e=Object(c.useState)(),t=o()(e,2)[1];return Object(c.useCallback)((function(e){t((function(){throw e}))}),[])}}});