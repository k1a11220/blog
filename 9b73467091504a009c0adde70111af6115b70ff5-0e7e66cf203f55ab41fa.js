(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[154],{7228:function(r){r.exports=function(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n},r.exports.default=r.exports,r.exports.__esModule=!0},2858:function(r){r.exports=function(r){if(Array.isArray(r))return r},r.exports.default=r.exports,r.exports.__esModule=!0},3646:function(r,t,e){var n=e(7228);r.exports=function(r){if(Array.isArray(r))return n(r)},r.exports.default=r.exports,r.exports.__esModule=!0},6860:function(r){r.exports=function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)},r.exports.default=r.exports,r.exports.__esModule=!0},3884:function(r){r.exports=function(r,t){var e=r&&("undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"]);if(null!=e){var n,o,a=[],i=!0,u=!1;try{for(e=e.call(r);!(i=(n=e.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(c){u=!0,o=c}finally{try{i||null==e.return||e.return()}finally{if(u)throw o}}return a}},r.exports.default=r.exports,r.exports.__esModule=!0},521:function(r){r.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},r.exports.default=r.exports,r.exports.__esModule=!0},8206:function(r){r.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},r.exports.default=r.exports,r.exports.__esModule=!0},3038:function(r,t,e){var n=e(2858),o=e(3884),a=e(3323),i=e(521);r.exports=function(r,t){return n(r)||o(r,t)||a(r,t)||i()},r.exports.default=r.exports,r.exports.__esModule=!0},319:function(r,t,e){var n=e(3646),o=e(6860),a=e(3323),i=e(8206);r.exports=function(r){return n(r)||o(r)||a(r)||i()},r.exports.default=r.exports,r.exports.__esModule=!0},3323:function(r,t,e){var n=e(7228);r.exports=function(r,t){if(r){if("string"==typeof r)return n(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?n(r,t):void 0}},r.exports.default=r.exports,r.exports.__esModule=!0},7091:function(r){"use strict";var t="%[a-f0-9]{2}",e=new RegExp(t,"gi"),n=new RegExp("("+t+")+","gi");function o(r,t){try{return decodeURIComponent(r.join(""))}catch(a){}if(1===r.length)return r;t=t||1;var e=r.slice(0,t),n=r.slice(t);return Array.prototype.concat.call([],o(e),o(n))}function a(r){try{return decodeURIComponent(r)}catch(a){for(var t=r.match(e),n=1;n<t.length;n++)t=(r=o(t,n).join("")).match(e);return r}}r.exports=function(r){if("string"!=typeof r)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof r+"`");try{return r=r.replace(/\+/g," "),decodeURIComponent(r)}catch(t){return function(r){for(var e={"%FE%FF":"��","%FF%FE":"��"},o=n.exec(r);o;){try{e[o[0]]=decodeURIComponent(o[0])}catch(t){var i=a(o[0]);i!==o[0]&&(e[o[0]]=i)}o=n.exec(r)}e["%C2"]="�";for(var u=Object.keys(e),c=0;c<u.length;c++){var s=u[c];r=r.replace(new RegExp(s,"g"),e[s])}return r}(r)}}},8616:function(r){"use strict";r.exports=function(r,t){for(var e={},n=Object.keys(r),o=Array.isArray(t),a=0;a<n.length;a++){var i=n[a],u=r[i];(o?-1!==t.indexOf(i):t(i,u,r))&&(e[i]=u)}return e}},2203:function(r,t,e){"use strict";var n=e(3038),o=e(319);function a(r,t){var e="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(!e){if(Array.isArray(r)||(e=function(r,t){if(!r)return;if("string"==typeof r)return i(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);"Object"===e&&r.constructor&&(e=r.constructor.name);if("Map"===e||"Set"===e)return Array.from(r);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return i(r,t)}(r))||t&&r&&"number"==typeof r.length){e&&(r=e);var n=0,o=function(){};return{s:o,n:function(){return n>=r.length?{done:!0}:{done:!1,value:r[n++]}},e:function(r){throw r},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,c=!1;return{s:function(){e=e.call(r)},n:function(){var r=e.next();return u=r.done,r},e:function(r){c=!0,a=r},f:function(){try{u||null==e.return||e.return()}finally{if(c)throw a}}}}function i(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}var u=e(6224),c=e(7091),s=e(4734),l=e(8616);function f(r){if("string"!=typeof r||1!==r.length)throw new TypeError("arrayFormatSeparator must be single character string")}function p(r,t){return t.encode?t.strict?u(r):encodeURIComponent(r):r}function d(r,t){return t.decode?c(r):r}function y(r){return Array.isArray(r)?r.sort():"object"==typeof r?y(Object.keys(r)).sort((function(r,t){return Number(r)-Number(t)})).map((function(t){return r[t]})):r}function m(r){var t=r.indexOf("#");return-1!==t&&(r=r.slice(0,t)),r}function g(r){var t=(r=m(r)).indexOf("?");return-1===t?"":r.slice(t+1)}function x(r,t){return t.parseNumbers&&!Number.isNaN(Number(r))&&"string"==typeof r&&""!==r.trim()?r=Number(r):!t.parseBooleans||null===r||"true"!==r.toLowerCase()&&"false"!==r.toLowerCase()||(r="true"===r.toLowerCase()),r}function v(r,t){f((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);var e=function(r){var t;switch(r.arrayFormat){case"index":return function(r,e,n){t=/\[(\d*)\]$/.exec(r),r=r.replace(/\[\d*\]$/,""),t?(void 0===n[r]&&(n[r]={}),n[r][t[1]]=e):n[r]=e};case"bracket":return function(r,e,n){t=/(\[\])$/.exec(r),r=r.replace(/\[\]$/,""),t?void 0!==n[r]?n[r]=[].concat(n[r],e):n[r]=[e]:n[r]=e};case"comma":case"separator":return function(t,e,n){var o="string"==typeof e&&e.includes(r.arrayFormatSeparator),a="string"==typeof e&&!o&&d(e,r).includes(r.arrayFormatSeparator);e=a?d(e,r):e;var i=o||a?e.split(r.arrayFormatSeparator).map((function(t){return d(t,r)})):null===e?e:d(e,r);n[t]=i};case"bracket-separator":return function(t,e,n){var o=/(\[\])$/.test(t);if(t=t.replace(/\[\]$/,""),o){var a=null===e?[]:e.split(r.arrayFormatSeparator).map((function(t){return d(t,r)}));void 0!==n[t]?n[t]=[].concat(n[t],a):n[t]=a}else n[t]=e?d(e,r):e};default:return function(r,t,e){void 0!==e[r]?e[r]=[].concat(e[r],t):e[r]=t}}}(t),o=Object.create(null);if("string"!=typeof r)return o;if(!(r=r.trim().replace(/^[?#&]/,"")))return o;var i,u=a(r.split("&"));try{for(u.s();!(i=u.n()).done;){var c=i.value;if(""!==c){var l=s(t.decode?c.replace(/\+/g," "):c,"="),p=n(l,2),m=p[0],g=p[1];g=void 0===g?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?g:d(g,t),e(d(m,t),g,o)}}}catch(Z){u.e(Z)}finally{u.f()}for(var v=0,b=Object.keys(o);v<b.length;v++){var h=b[v],w=o[h];if("object"==typeof w&&null!==w)for(var k=0,j=Object.keys(w);k<j.length;k++){var S=j[k];w[S]=x(w[S],t)}else o[h]=x(w,t)}return!1===t.sort?o:(!0===t.sort?Object.keys(o).sort():Object.keys(o).sort(t.sort)).reduce((function(r,t){var e=o[t];return Boolean(e)&&"object"==typeof e&&!Array.isArray(e)?r[t]=y(e):r[t]=e,r}),Object.create(null))}t.extract=g,t.parse=v,t.stringify=function(r,t){if(!r)return"";f((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);for(var e=function(e){return t.skipNull&&null==r[e]||t.skipEmptyString&&""===r[e]},n=function(r){switch(r.arrayFormat){case"index":return function(t){return function(e,n){var a=e.length;return void 0===n||r.skipNull&&null===n||r.skipEmptyString&&""===n?e:[].concat(o(e),null===n?[[p(t,r),"[",a,"]"].join("")]:[[p(t,r),"[",p(a,r),"]=",p(n,r)].join("")])}};case"bracket":return function(t){return function(e,n){return void 0===n||r.skipNull&&null===n||r.skipEmptyString&&""===n?e:[].concat(o(e),null===n?[[p(t,r),"[]"].join("")]:[[p(t,r),"[]=",p(n,r)].join("")])}};case"comma":case"separator":case"bracket-separator":var t="bracket-separator"===r.arrayFormat?"[]=":"=";return function(e){return function(n,o){return void 0===o||r.skipNull&&null===o||r.skipEmptyString&&""===o?n:(o=null===o?"":o,0===n.length?[[p(e,r),t,p(o,r)].join("")]:[[n,p(o,r)].join(r.arrayFormatSeparator)])}};default:return function(t){return function(e,n){return void 0===n||r.skipNull&&null===n||r.skipEmptyString&&""===n?e:[].concat(o(e),null===n?[p(t,r)]:[[p(t,r),"=",p(n,r)].join("")])}}}}(t),a={},i=0,u=Object.keys(r);i<u.length;i++){var c=u[i];e(c)||(a[c]=r[c])}var s=Object.keys(a);return!1!==t.sort&&s.sort(t.sort),s.map((function(e){var o=r[e];return void 0===o?"":null===o?p(e,t):Array.isArray(o)?0===o.length&&"bracket-separator"===t.arrayFormat?p(e,t)+"[]":o.reduce(n(e),[]).join("&"):p(e,t)+"="+p(o,t)})).filter((function(r){return r.length>0})).join("&")},t.parseUrl=function(r,t){t=Object.assign({decode:!0},t);var e=s(r,"#"),o=n(e,2),a=o[0],i=o[1];return Object.assign({url:a.split("?")[0]||"",query:v(g(r),t)},t&&t.parseFragmentIdentifier&&i?{fragmentIdentifier:d(i,t)}:{})},t.stringifyUrl=function(r,e){e=Object.assign({encode:!0,strict:!0},e);var n=m(r.url).split("?")[0]||"",o=t.extract(r.url),a=t.parse(o,{sort:!1}),i=Object.assign(a,r.query),u=t.stringify(i,e);u&&(u="?".concat(u));var c=function(r){var t="",e=r.indexOf("#");return-1!==e&&(t=r.slice(e)),t}(r.url);return r.fragmentIdentifier&&(c="#".concat(p(r.fragmentIdentifier,e))),"".concat(n).concat(u).concat(c)},t.pick=function(r,e,n){n=Object.assign({parseFragmentIdentifier:!0},n);var o=t.parseUrl(r,n),a=o.url,i=o.query,u=o.fragmentIdentifier;return t.stringifyUrl({url:a,query:l(i,e),fragmentIdentifier:u},n)},t.exclude=function(r,e,n){var o=Array.isArray(e)?function(r){return!e.includes(r)}:function(r,t){return!e(r,t)};return t.pick(r,o,n)}},6224:function(r){"use strict";r.exports=function(r){return encodeURIComponent(r).replace(/[!'()*]/g,(function(r){return"%".concat(r.charCodeAt(0).toString(16).toUpperCase())}))}},4734:function(r){"use strict";r.exports=function(r,t){if("string"!=typeof r||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[r];var e=r.indexOf(t);return-1===e?[r]:[r.slice(0,e),r.slice(e+t.length)]}},7763:function(r,t,e){"use strict";e.d(t,{Z:function(){return I}});var n,o,a,i,u,c,s,l,f=e(2122),p=e(5761),d=e(7294),y=e(7452),m=e(5444),g=e(1496),x=e(3431),v=(0,y.ZP)(m.rU)(n||(n=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  border-radius: 10px;\n  transition: 0.3s box-shadow;\n  cursor: pointer;\n  transition: all 0.2s ease-in;\n  height: 380px;\n  background-color: ",";\n  &:hover {\n    box-shadow: 0px 20px 25px -5px rgba(0, 0, 0, 0.1),\n      0px 10px 10px -5px rgba(0, 0, 0, 0.04);\n    transform: scale(1.02);\n  }\n"])),(function(r){return r.theme.postCoverColor})),b=(0,y.ZP)(g.Z)(o||(o=(0,p.Z)(["\n  width: 100%;\n  height: 200px;\n  border-radius: 10px 10px 0 0;\n  background-color: #fafafa;\n"]))),h=y.ZP.div(a||(a=(0,p.Z)(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 24px;\n  height: 380px;\n"]))),w=y.ZP.div(i||(i=(0,p.Z)(["\n  display: -webkit-box;\n  overflow: hidden;\n  margin-bottom: 3px;\n  text-overflow: ellipsis;\n  white-space: normal;\n  overflow-wrap: break-word;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  font-size: 20px;\n  font-weight: 700;\n  color: ",";\n"])),(function(r){return r.theme.fontColor})),k=y.ZP.div(u||(u=(0,p.Z)(["\n  font-size: 14px;\n  font-weight: 600;\n  opacity: 0.7;\n  color: #6e6e73;\n"]))),j=y.ZP.div(c||(c=(0,p.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: 0.5rem;\n"]))),S=y.ZP.div(s||(s=(0,p.Z)(["\n  border-radius: 3px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #086bce;\n"]))),Z=function(r){var t=r.title,e=r.date,n=r.categories,o=r.thumbnail.childImageSharp.fluid,a=r.link;return(0,x.tZ)(v,{to:a},(0,x.tZ)(b,{fluid:o,alt:"Post Item Image"}),(0,x.tZ)(h,null,(0,x.tZ)("div",null,(0,x.tZ)(j,null,n.map((function(r){return(0,x.tZ)(S,{key:r},r)}))),(0,x.tZ)(w,null,t)),(0,x.tZ)(k,null,e)))},A=function(r,t){var e=(0,d.useRef)(null),n=(0,d.useRef)(null),o=(0,d.useState)(1),a=o[0],i=o[1],u=(0,d.useMemo)((function(){return t.filter((function(t){var e=t.node.frontmatter.categories;return"All"===r||e.includes(r)}))}),[r]);return(0,d.useEffect)((function(){n.current=new IntersectionObserver((function(r,t){r[0].isIntersecting&&(i((function(r){return r+1})),t.unobserve(r[0].target))}))}),[]),(0,d.useEffect)((function(){return i(1)}),[r]),(0,d.useEffect)((function(){10*a>=u.length||null===e.current||0===e.current.children.length||null===n.current||n.current.observe(e.current.children[e.current.children.length-1])}),[a,r]),{containerRef:e,postList:u.slice(0,10*a)}},O=y.ZP.div(l||(l=(0,p.Z)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-gap: 30px;\n  width: 1200px;\n  margin: 0 auto;\n  padding: 40px 0 100px;\n\n  @media (max-width: 1400px) {\n    grid-template-columns: 1fr 1fr;\n    width: 92%;\n    padding: 32px 0px 50px;\n  }\n\n  @media (max-width: 768px) {\n    grid-template-columns: 1fr;\n  }\n"]))),I=function(r){var t=r.selectedCategory,e=r.posts,n=A(t,e),o=n.containerRef,a=n.postList;return(0,x.tZ)(O,{ref:o},a.map((function(r){var t=r.node,e=t.id,n=t.fields.slug,o=t.frontmatter;return(0,x.tZ)(Z,(0,f.Z)({},o,{link:n,key:e}))})))}}}]);
//# sourceMappingURL=9b73467091504a009c0adde70111af6115b70ff5-0e7e66cf203f55ab41fa.js.map