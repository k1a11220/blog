(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[351],{5761:function(e,t,r){"use strict";function n(e,t){return t||(t=e.slice(0)),e.raw=t,e}r.d(t,{Z:function(){return n}})},6872:function(e){e.exports=function(e,t,r,n){var i=r?r.call(n,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),c=0;c<a.length;c++){var l=a[c];if(!s(l))return!1;var u=e[l],f=t[l];if(!1===(i=r?r.call(n,u,f,l):void 0)||void 0===i&&u!==f)return!1}return!0}},3583:function(e,t,r){"use strict";r.d(t,{f6:function(){return Re},vJ:function(){return Ne},ZP:function(){return ze}});var n=r(8812),i=r(7294),a=r(6872),o=r.n(a);var s=function(e){function t(e,n,c,l,d){for(var h,p,g,m,k,S=0,C=0,A=0,x=0,I=0,T=0,N=g=h=0,M=0,D=0,L=0,B=0,$=c.length,F=$-1,H="",U="",Y="",G="";M<$;){if(p=c.charCodeAt(M),M===F&&0!==C+x+A+S&&(0!==C&&(p=47===C?10:47),x=A=S=0,$++,F++),0===C+x+A+S){if(M===F&&(0<D&&(H=H.replace(f,"")),0<H.trim().length)){switch(p){case 32:case 9:case 59:case 13:case 10:break;default:H+=c.charAt(M)}p=59}switch(p){case 123:for(h=(H=H.trim()).charCodeAt(0),g=1,B=++M;M<$;){switch(p=c.charCodeAt(M)){case 123:g++;break;case 125:g--;break;case 47:switch(p=c.charCodeAt(M+1)){case 42:case 47:e:{for(N=M+1;N<F;++N)switch(c.charCodeAt(N)){case 47:if(42===p&&42===c.charCodeAt(N-1)&&M+2!==N){M=N+1;break e}break;case 10:if(47===p){M=N+1;break e}}M=N}}break;case 91:p++;case 40:p++;case 34:case 39:for(;M++<F&&c.charCodeAt(M)!==p;);}if(0===g)break;M++}switch(g=c.substring(B,M),0===h&&(h=(H=H.replace(u,"").trim()).charCodeAt(0)),h){case 64:switch(0<D&&(H=H.replace(f,"")),p=H.charCodeAt(1)){case 100:case 109:case 115:case 45:D=n;break;default:D=_}if(B=(g=t(n,D,g,p,d+1)).length,0<j&&(k=s(3,g,D=r(_,H,L),n,E,P,B,p,d,l),H=D.join(""),void 0!==k&&0===(B=(g=k.trim()).length)&&(p=0,g="")),0<B)switch(p){case 115:H=H.replace(w,o);case 100:case 109:case 45:g=H+"{"+g+"}";break;case 107:g=(H=H.replace(v,"$1 $2"))+"{"+g+"}",g=1===O||2===O&&a("@"+g,3)?"@-webkit-"+g+"@"+g:"@"+g;break;default:g=H+g,112===l&&(U+=g,g="")}else g="";break;default:g=t(n,r(n,H,L),g,l,d+1)}Y+=g,g=L=D=N=h=0,H="",p=c.charCodeAt(++M);break;case 125:case 59:if(1<(B=(H=(0<D?H.replace(f,""):H).trim()).length))switch(0===N&&(h=H.charCodeAt(0),45===h||96<h&&123>h)&&(B=(H=H.replace(" ",":")).length),0<j&&void 0!==(k=s(1,H,n,e,E,P,U.length,l,d,l))&&0===(B=(H=k.trim()).length)&&(H="\0\0"),h=H.charCodeAt(0),p=H.charCodeAt(1),h){case 0:break;case 64:if(105===p||99===p){G+=H+c.charAt(M);break}default:58!==H.charCodeAt(B-1)&&(U+=i(H,h,p,H.charCodeAt(2)))}L=D=N=h=0,H="",p=c.charCodeAt(++M)}}switch(p){case 13:case 10:47===C?C=0:0===1+h&&107!==l&&0<H.length&&(D=1,H+="\0"),0<j*z&&s(0,H,n,e,E,P,U.length,l,d,l),P=1,E++;break;case 59:case 125:if(0===C+x+A+S){P++;break}default:switch(P++,m=c.charAt(M),p){case 9:case 32:if(0===x+S+C)switch(I){case 44:case 58:case 9:case 32:m="";break;default:32!==p&&(m=" ")}break;case 0:m="\\0";break;case 12:m="\\f";break;case 11:m="\\v";break;case 38:0===x+C+S&&(D=L=1,m="\f"+m);break;case 108:if(0===x+C+S+R&&0<N)switch(M-N){case 2:112===I&&58===c.charCodeAt(M-3)&&(R=I);case 8:111===T&&(R=T)}break;case 58:0===x+C+S&&(N=M);break;case 44:0===C+A+x+S&&(D=1,m+="\r");break;case 34:case 39:0===C&&(x=x===p?0:0===x?p:x);break;case 91:0===x+C+A&&S++;break;case 93:0===x+C+A&&S--;break;case 41:0===x+C+S&&A--;break;case 40:if(0===x+C+S){if(0===h)switch(2*I+3*T){case 533:break;default:h=1}A++}break;case 64:0===C+A+x+S+N+g&&(g=1);break;case 42:case 47:if(!(0<x+S+A))switch(C){case 0:switch(2*p+3*c.charCodeAt(M+1)){case 235:C=47;break;case 220:B=M,C=42}break;case 42:47===p&&42===I&&B+2!==M&&(33===c.charCodeAt(B+2)&&(U+=c.substring(B,M+1)),m="",C=0)}}0===C&&(H+=m)}T=I,I=p,M++}if(0<(B=U.length)){if(D=n,0<j&&(void 0!==(k=s(2,U,D,e,E,P,B,l,d,l))&&0===(U=k).length))return G+U+Y;if(U=D.join(",")+"{"+U+"}",0!=O*R){switch(2!==O||a(U,2)||(R=0),R){case 111:U=U.replace(b,":-moz-$1")+U;break;case 112:U=U.replace(y,"::-webkit-input-$1")+U.replace(y,"::-moz-$1")+U.replace(y,":-ms-input-$1")+U}R=0}}return G+U+Y}function r(e,t,r){var i=t.trim().split(g);t=i;var a=i.length,o=e.length;switch(o){case 0:case 1:var s=0;for(e=0===o?"":e[0]+" ";s<a;++s)t[s]=n(e,t[s],r).trim();break;default:var c=s=0;for(t=[];s<a;++s)for(var l=0;l<o;++l)t[c++]=n(e[l]+" ",i[s],r).trim()}return t}function n(e,t,r){var n=t.charCodeAt(0);switch(33>n&&(n=(t=t.trim()).charCodeAt(0)),n){case 38:return t.replace(m,"$1"+e.trim());case 58:return e.trim()+t.replace(m,"$1"+e.trim());default:if(0<1*r&&0<t.indexOf("\f"))return t.replace(m,(58===e.charCodeAt(0)?"":"$1")+e.trim())}return e+t}function i(e,t,r,n){var o=e+";",s=2*t+3*r+4*n;if(944===s){e=o.indexOf(":",9)+1;var c=o.substring(e,o.length-1).trim();return c=o.substring(0,e).trim()+c+";",1===O||2===O&&a(c,1)?"-webkit-"+c+c:c}if(0===O||2===O&&!a(o,1))return o;switch(s){case 1015:return 97===o.charCodeAt(10)?"-webkit-"+o+o:o;case 951:return 116===o.charCodeAt(3)?"-webkit-"+o+o:o;case 963:return 110===o.charCodeAt(5)?"-webkit-"+o+o:o;case 1009:if(100!==o.charCodeAt(4))break;case 969:case 942:return"-webkit-"+o+o;case 978:return"-webkit-"+o+"-moz-"+o+o;case 1019:case 983:return"-webkit-"+o+"-moz-"+o+"-ms-"+o+o;case 883:if(45===o.charCodeAt(8))return"-webkit-"+o+o;if(0<o.indexOf("image-set(",11))return o.replace(I,"$1-webkit-$2")+o;break;case 932:if(45===o.charCodeAt(4))switch(o.charCodeAt(5)){case 103:return"-webkit-box-"+o.replace("-grow","")+"-webkit-"+o+"-ms-"+o.replace("grow","positive")+o;case 115:return"-webkit-"+o+"-ms-"+o.replace("shrink","negative")+o;case 98:return"-webkit-"+o+"-ms-"+o.replace("basis","preferred-size")+o}return"-webkit-"+o+"-ms-"+o+o;case 964:return"-webkit-"+o+"-ms-flex-"+o+o;case 1023:if(99!==o.charCodeAt(8))break;return"-webkit-box-pack"+(c=o.substring(o.indexOf(":",15)).replace("flex-","").replace("space-between","justify"))+"-webkit-"+o+"-ms-flex-pack"+c+o;case 1005:return h.test(o)?o.replace(d,":-webkit-")+o.replace(d,":-moz-")+o:o;case 1e3:switch(t=(c=o.substring(13).trim()).indexOf("-")+1,c.charCodeAt(0)+c.charCodeAt(t)){case 226:c=o.replace(k,"tb");break;case 232:c=o.replace(k,"tb-rl");break;case 220:c=o.replace(k,"lr");break;default:return o}return"-webkit-"+o+"-ms-"+c+o;case 1017:if(-1===o.indexOf("sticky",9))break;case 975:switch(t=(o=e).length-10,s=(c=(33===o.charCodeAt(t)?o.substring(0,t):o).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|c.charCodeAt(7))){case 203:if(111>c.charCodeAt(8))break;case 115:o=o.replace(c,"-webkit-"+c)+";"+o;break;case 207:case 102:o=o.replace(c,"-webkit-"+(102<s?"inline-":"")+"box")+";"+o.replace(c,"-webkit-"+c)+";"+o.replace(c,"-ms-"+c+"box")+";"+o}return o+";";case 938:if(45===o.charCodeAt(5))switch(o.charCodeAt(6)){case 105:return c=o.replace("-items",""),"-webkit-"+o+"-webkit-box-"+c+"-ms-flex-"+c+o;case 115:return"-webkit-"+o+"-ms-flex-item-"+o.replace(C,"")+o;default:return"-webkit-"+o+"-ms-flex-line-pack"+o.replace("align-content","").replace(C,"")+o}break;case 973:case 989:if(45!==o.charCodeAt(3)||122===o.charCodeAt(4))break;case 931:case 953:if(!0===x.test(e))return 115===(c=e.substring(e.indexOf(":")+1)).charCodeAt(0)?i(e.replace("stretch","fill-available"),t,r,n).replace(":fill-available",":stretch"):o.replace(c,"-webkit-"+c)+o.replace(c,"-moz-"+c.replace("fill-",""))+o;break;case 962:if(o="-webkit-"+o+(102===o.charCodeAt(5)?"-ms-"+o:"")+o,211===r+n&&105===o.charCodeAt(13)&&0<o.indexOf("transform",10))return o.substring(0,o.indexOf(";",27)+1).replace(p,"$1-webkit-$2")+o}return o}function a(e,t){var r=e.indexOf(1===t?":":"{"),n=e.substring(0,3!==t?r:10);return r=e.substring(r+1,e.length-1),N(2!==t?n:n.replace(A,"$1"),r,t)}function o(e,t){var r=i(t,t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2));return r!==t+";"?r.replace(S," or ($1)").substring(4):"("+t+")"}function s(e,t,r,n,i,a,o,s,c,u){for(var f,d=0,h=t;d<j;++d)switch(f=T[d].call(l,e,h,r,n,i,a,o,s,c,u)){case void 0:case!1:case!0:case null:break;default:h=f}if(h!==t)return h}function c(e){return void 0!==(e=e.prefix)&&(N=null,e?"function"!=typeof e?O=1:(O=2,N=e):O=0),c}function l(e,r){var n=e;if(33>n.charCodeAt(0)&&(n=n.trim()),n=[n],0<j){var i=s(-1,r,n,n,E,P,0,0,0,0);void 0!==i&&"string"==typeof i&&(r=i)}var a=t(_,n,r,0,0);return 0<j&&(void 0!==(i=s(-2,a,n,n,E,P,a.length,0,0,0))&&(a=i)),"",R=0,P=E=1,a}var u=/^\0+/g,f=/[\0\r\f]/g,d=/: */g,h=/zoo|gra/,p=/([,: ])(transform)/g,g=/,\r+?/g,m=/([\t\r\n ])*\f?&/g,v=/@(k\w+)\s*(\S*)\s*/,y=/::(place)/g,b=/:(read-only)/g,k=/[svh]\w+-[tblr]{2}/,w=/\(\s*(.*)\s*\)/g,S=/([\s\S]*?);/g,C=/-self|flex-/g,A=/[^]*?(:[rp][el]a[\w-]+)[^]*/,x=/stretch|:\s*\w+\-(?:conte|avail)/,I=/([^-])(image-set\()/,P=1,E=1,R=0,O=1,_=[],T=[],j=0,N=null,z=0;return l.use=function e(t){switch(t){case void 0:case null:j=T.length=0;break;default:if("function"==typeof t)T[j++]=t;else if("object"==typeof t)for(var r=0,n=t.length;r<n;++r)e(t[r]);else z=0|!!t}return e},l.set=c,void 0!==e&&c(e),l},c=r(4759);var l=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,u=function(e){var t={};return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}((function(e){return l.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})),f=r(5706),d=r.n(f);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var p=function(e,t){for(var r=[e[0]],n=0,i=t.length;n<i;n+=1)r.push(t[n],e[n+1]);return r},g=function(e){return null!==e&&"object"==typeof e&&"[object Object]"===(e.toString?e.toString():Object.prototype.toString.call(e))&&!(0,n.typeOf)(e)},m=Object.freeze([]),v=Object.freeze({});function y(e){return"function"==typeof e}function b(e){return e.displayName||e.name||"Component"}function k(e){return e&&"string"==typeof e.styledComponentId}var w="undefined"!=typeof process&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",S="undefined"!=typeof window&&"HTMLElement"in window,C=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={}.REACT_APP_SC_DISABLE_SPEEDY&&{}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={}.SC_DISABLE_SPEEDY&&""!=={}.SC_DISABLE_SPEEDY&&("false"!=={}.SC_DISABLE_SPEEDY&&{}.SC_DISABLE_SPEEDY)),A={};function x(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(r.length>0?" Args: "+r.join(", "):""))}var I=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,n=r.length,i=n;e>=i;)(i<<=1)<0&&x(16,""+e);this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var a=n;a<i;a++)this.groupSizes[a]=0}for(var o=this.indexOfGroup(e+1),s=0,c=t.length;s<c;s++)this.tag.insertRule(o,t[s])&&(this.groupSizes[e]++,o++)},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),n=r+t;this.groupSizes[e]=0;for(var i=r;i<n;i++)this.tag.deleteRule(r)}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var r=this.groupSizes[e],n=this.indexOfGroup(e),i=n+r,a=n;a<i;a++)t+=this.tag.getRule(a)+"/*!sc*/\n";return t},e}(),P=new Map,E=new Map,R=1,O=function(e){if(P.has(e))return P.get(e);for(;E.has(R);)R++;var t=R++;return P.set(e,t),E.set(t,e),t},_=function(e){return E.get(e)},T=function(e,t){P.set(e,t),E.set(t,e)},j="style["+w+'][data-styled-version="5.3.0"]',N=new RegExp("^"+w+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),z=function(e,t,r){for(var n,i=r.split(","),a=0,o=i.length;a<o;a++)(n=i[a])&&e.registerName(t,n)},M=function(e,t){for(var r=t.innerHTML.split("/*!sc*/\n"),n=[],i=0,a=r.length;i<a;i++){var o=r[i].trim();if(o){var s=o.match(N);if(s){var c=0|parseInt(s[1],10),l=s[2];0!==c&&(T(l,c),z(e,l,s[3]),e.getTag().insertRules(c,n)),n.length=0}else n.push(o)}}},D=function(){return"undefined"!=typeof window&&void 0!==window.__webpack_nonce__?window.__webpack_nonce__:null},L=function(e){var t=document.head,r=e||t,n=document.createElement("style"),i=function(e){for(var t=e.childNodes,r=t.length;r>=0;r--){var n=t[r];if(n&&1===n.nodeType&&n.hasAttribute(w))return n}}(r),a=void 0!==i?i.nextSibling:null;n.setAttribute(w,"active"),n.setAttribute("data-styled-version","5.3.0");var o=D();return o&&n.setAttribute("nonce",o),r.insertBefore(n,a),n},B=function(){function e(e){var t=this.element=L(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,r=0,n=t.length;r<n;r++){var i=t[r];if(i.ownerNode===e)return i}x(17)}(t),this.length=0}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),$=function(){function e(e){var t=this.element=L(e);this.nodes=t.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t),n=this.nodes[e];return this.element.insertBefore(r,n||null),this.length++,!0}return!1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),F=function(){function e(e){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),H=S,U={isServer:!S,useCSSOMInjection:!C},Y=function(){function e(e,t,r){void 0===e&&(e=v),void 0===t&&(t={}),this.options=h({},U,{},e),this.gs=t,this.names=new Map(r),!this.options.isServer&&S&&H&&(H=!1,function(e){for(var t=document.querySelectorAll(j),r=0,n=t.length;r<n;r++){var i=t[r];i&&"active"!==i.getAttribute(w)&&(M(e,i),i.parentNode&&i.parentNode.removeChild(i))}}(this))}e.registerId=function(e){return O(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,r){return void 0===r&&(r=!0),new e(h({},this.options,{},t),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=(r=(t=this.options).isServer,n=t.useCSSOMInjection,i=t.target,e=r?new F(i):n?new B(i):new $(i),new I(e)));var e,t,r,n,i},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(O(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},t.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(O(e),r)},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.clearRules=function(e){this.getTag().clearGroup(O(e)),this.clearNames(e)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(e){for(var t=e.getTag(),r=t.length,n="",i=0;i<r;i++){var a=_(i);if(void 0!==a){var o=e.names.get(a),s=t.getGroup(i);if(void 0!==o&&0!==s.length){var c=w+".g"+i+'[id="'+a+'"]',l="";void 0!==o&&o.forEach((function(e){e.length>0&&(l+=e+",")})),n+=""+s+c+'{content:"'+l+'"}/*!sc*/\n'}}}return n}(this)},e}(),G=/(a)(d)/gi,q=function(e){return String.fromCharCode(e+(e>25?39:97))};function W(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=q(t%52)+r;return(q(t%52)+r).replace(G,"$1-$2")}var V=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},X=function(e){return V(5381,e)};function Z(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(y(r)&&!k(r))return!1}return!0}var J=X("5.3.0"),K=function(){function e(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===r||r.isStatic)&&Z(e),this.componentId=t,this.baseHash=V(J,t),this.baseStyle=r,Y.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,r){var n=this.componentId,i=[];if(this.baseStyle&&i.push(this.baseStyle.generateAndInjectStyles(e,t,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(n,this.staticRulesId))i.push(this.staticRulesId);else{var a=me(this.rules,e,t,r).join(""),o=W(V(this.baseHash,a.length)>>>0);if(!t.hasNameForId(n,o)){var s=r(a,"."+o,void 0,n);t.insertRules(n,o,s)}i.push(o),this.staticRulesId=o}else{for(var c=this.rules.length,l=V(this.baseHash,r.hash),u="",f=0;f<c;f++){var d=this.rules[f];if("string"==typeof d)u+=d;else if(d){var h=me(d,e,t,r),p=Array.isArray(h)?h.join(""):h;l=V(l,p+f),u+=p}}if(u){var g=W(l>>>0);if(!t.hasNameForId(n,g)){var m=r(u,"."+g,void 0,n);t.insertRules(n,g,m)}i.push(g)}}return i.join(" ")},e}(),Q=/^\s*\/\/.*$/gm,ee=[":","[",".","#"];function te(e){var t,r,n,i,a=void 0===e?v:e,o=a.options,c=void 0===o?v:o,l=a.plugins,u=void 0===l?m:l,f=new s(c),d=[],h=function(e){function t(t){if(t)try{e(t+"}")}catch(e){}}return function(r,n,i,a,o,s,c,l,u,f){switch(r){case 1:if(0===u&&64===n.charCodeAt(0))return e(n+";"),"";break;case 2:if(0===l)return n+"/*|*/";break;case 3:switch(l){case 102:case 112:return e(i[0]+n),"";default:return n+(0===f?"/*|*/":"")}case-2:n.split("/*|*/}").forEach(t)}}}((function(e){d.push(e)})),p=function(e,n,a){return 0===n&&-1!==ee.indexOf(a[r.length])||a.match(i)?e:"."+t};function g(e,a,o,s){void 0===s&&(s="&");var c=e.replace(Q,""),l=a&&o?o+" "+a+" { "+c+" }":c;return t=s,r=a,n=new RegExp("\\"+r+"\\b","g"),i=new RegExp("(\\"+r+"\\b){2,}"),f(o||!a?"":a,l)}return f.use([].concat(u,[function(e,t,i){2===e&&i.length&&i[0].lastIndexOf(r)>0&&(i[0]=i[0].replace(n,p))},h,function(e){if(-2===e){var t=d;return d=[],t}}])),g.hash=u.length?u.reduce((function(e,t){return t.name||x(15),V(e,t.name)}),5381).toString():"",g}var re=i.createContext(),ne=(re.Consumer,i.createContext()),ie=(ne.Consumer,new Y),ae=te();function oe(){return(0,i.useContext)(re)||ie}function se(){return(0,i.useContext)(ne)||ae}function ce(e){var t=(0,i.useState)(e.stylisPlugins),r=t[0],n=t[1],a=oe(),s=(0,i.useMemo)((function(){var t=a;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target]),c=(0,i.useMemo)((function(){return te({options:{prefix:!e.disableVendorPrefixes},plugins:r})}),[e.disableVendorPrefixes,r]);return(0,i.useEffect)((function(){o()(r,e.stylisPlugins)||n(e.stylisPlugins)}),[e.stylisPlugins]),i.createElement(re.Provider,{value:s},i.createElement(ne.Provider,{value:c},e.children))}var le=function(){function e(e,t){var r=this;this.inject=function(e,t){void 0===t&&(t=ae);var n=r.name+t.hash;e.hasNameForId(r.id,n)||e.insertRules(r.id,n,t(r.rules,n,"@keyframes"))},this.toString=function(){return x(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t}return e.prototype.getName=function(e){return void 0===e&&(e=ae),this.name+e.hash},e}(),ue=/([A-Z])/,fe=/([A-Z])/g,de=/^ms-/,he=function(e){return"-"+e.toLowerCase()};function pe(e){return ue.test(e)?e.replace(fe,he).replace(de,"-ms-"):e}var ge=function(e){return null==e||!1===e||""===e};function me(e,t,r,n){if(Array.isArray(e)){for(var i,a=[],o=0,s=e.length;o<s;o+=1)""!==(i=me(e[o],t,r,n))&&(Array.isArray(i)?a.push.apply(a,i):a.push(i));return a}return ge(e)?"":k(e)?"."+e.styledComponentId:y(e)?"function"!=typeof(l=e)||l.prototype&&l.prototype.isReactComponent||!t?e:me(e(t),t,r,n):e instanceof le?r?(e.inject(r,n),e.getName(n)):e:g(e)?function e(t,r){var n,i,a=[];for(var o in t)t.hasOwnProperty(o)&&!ge(t[o])&&(g(t[o])?a.push.apply(a,e(t[o],o)):y(t[o])?a.push(pe(o)+":",t[o],";"):a.push(pe(o)+": "+(n=o,(null==(i=t[o])||"boolean"==typeof i||""===i?"":"number"!=typeof i||0===i||n in c.Z?String(i).trim():i+"px")+";")));return r?[r+" {"].concat(a,["}"]):a}(e):e.toString();var l}function ve(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return y(e)||g(e)?me(p(m,[e].concat(r))):0===r.length&&1===e.length&&"string"==typeof e[0]?e:me(p(e,r))}new Set;var ye=function(e,t,r){return void 0===r&&(r=v),e.theme!==r.theme&&e.theme||t||r.theme},be=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ke=/(^-|-$)/g;function we(e){return e.replace(be,"-").replace(ke,"")}var Se=function(e){return W(X(e)>>>0)};function Ce(e){return"string"==typeof e&&!0}var Ae=function(e){return"function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},xe=function(e){return"__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function Ie(e,t,r){var n=e[r];Ae(t)&&Ae(n)?Pe(n,t):e[r]=t}function Pe(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];for(var i=0,a=r;i<a.length;i++){var o=a[i];if(Ae(o))for(var s in o)xe(s)&&Ie(e,o[s],s)}return e}var Ee=i.createContext();Ee.Consumer;function Re(e){var t=(0,i.useContext)(Ee),r=(0,i.useMemo)((function(){return function(e,t){return e?y(e)?e(t):Array.isArray(e)||"object"!=typeof e?x(8):t?h({},t,{},e):e:x(14)}(e.theme,t)}),[e.theme,t]);return e.children?i.createElement(Ee.Provider,{value:r},e.children):null}var Oe={};function _e(e,t,r){var n=k(e),a=!Ce(e),o=t.attrs,s=void 0===o?m:o,c=t.componentId,l=void 0===c?function(e,t){var r="string"!=typeof e?"sc":we(e);Oe[r]=(Oe[r]||0)+1;var n=r+"-"+Se("5.3.0"+r+Oe[r]);return t?t+"-"+n:n}(t.displayName,t.parentComponentId):c,f=t.displayName,p=void 0===f?function(e){return Ce(e)?"styled."+e:"Styled("+b(e)+")"}(e):f,g=t.displayName&&t.componentId?we(t.displayName)+"-"+t.componentId:t.componentId||l,w=n&&e.attrs?Array.prototype.concat(e.attrs,s).filter(Boolean):s,S=t.shouldForwardProp;n&&e.shouldForwardProp&&(S=t.shouldForwardProp?function(r,n,i){return e.shouldForwardProp(r,n,i)&&t.shouldForwardProp(r,n,i)}:e.shouldForwardProp);var C,A=new K(r,g,n?e.componentStyle:void 0),x=A.isStatic&&0===s.length,I=function(e,t){return function(e,t,r,n){var a=e.attrs,o=e.componentStyle,s=e.defaultProps,c=e.foldedComponentIds,l=e.shouldForwardProp,f=e.styledComponentId,d=e.target,p=function(e,t,r){void 0===e&&(e=v);var n=h({},t,{theme:e}),i={};return r.forEach((function(e){var t,r,a,o=e;for(t in y(o)&&(o=o(n)),o)n[t]=i[t]="className"===t?(r=i[t],a=o[t],r&&a?r+" "+a:r||a):o[t]})),[n,i]}(ye(t,(0,i.useContext)(Ee),s)||v,t,a),g=p[0],m=p[1],b=function(e,t,r,n){var i=oe(),a=se();return t?e.generateAndInjectStyles(v,i,a):e.generateAndInjectStyles(r,i,a)}(o,n,g),k=r,w=m.$as||t.$as||m.as||t.as||d,S=Ce(w),C=m!==t?h({},t,{},m):t,A={};for(var x in C)"$"!==x[0]&&"as"!==x&&("forwardedAs"===x?A.as=C[x]:(l?l(x,u,w):!S||u(x))&&(A[x]=C[x]));return t.style&&m.style!==t.style&&(A.style=h({},t.style,{},m.style)),A.className=Array.prototype.concat(c,f,b!==f?b:null,t.className,m.className).filter(Boolean).join(" "),A.ref=k,(0,i.createElement)(w,A)}(C,e,t,x)};return I.displayName=p,(C=i.forwardRef(I)).attrs=w,C.componentStyle=A,C.displayName=p,C.shouldForwardProp=S,C.foldedComponentIds=n?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):m,C.styledComponentId=g,C.target=n?e.target:e,C.withComponent=function(e){var n=t.componentId,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(t,["componentId"]),a=n&&n+"-"+(Ce(e)?e:we(b(e)));return _e(e,h({},i,{attrs:w,componentId:a}),r)},Object.defineProperty(C,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=n?Pe({},e.defaultProps,t):t}}),C.toString=function(){return"."+C.styledComponentId},a&&d()(C,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),C}var Te=function(e){return function e(t,r,i){if(void 0===i&&(i=v),!(0,n.isValidElementType)(r))return x(1,String(r));var a=function(){return t(r,i,ve.apply(void 0,arguments))};return a.withConfig=function(n){return e(t,r,h({},i,{},n))},a.attrs=function(n){return e(t,r,h({},i,{attrs:Array.prototype.concat(i.attrs,n).filter(Boolean)}))},a}(_e,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach((function(e){Te[e]=Te(e)}));var je=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Z(e),Y.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(e,t,r,n){var i=n(me(this.rules,t,r,n).join(""),""),a=this.componentId+e;r.insertRules(a,a,i)},t.removeStyles=function(e,t){t.clearRules(this.componentId+e)},t.renderStyles=function(e,t,r,n){e>2&&Y.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,t,r,n)},e}();function Ne(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var a=ve.apply(void 0,[e].concat(r)),o="sc-global-"+Se(JSON.stringify(a)),s=new je(a,o);function c(e){var t=oe(),r=se(),n=(0,i.useContext)(Ee),a=(0,i.useRef)(t.allocateGSInstance(o)).current;return(0,i.useLayoutEffect)((function(){return l(a,e,t,n,r),function(){return s.removeStyles(a,t)}}),[a,e,t,n,r]),null}function l(e,t,r,n,i){if(s.isStatic)s.renderStyles(e,A,r,i);else{var a=h({},t,{theme:ye(t,n,c.defaultProps)});s.renderStyles(e,a,r,i)}}return i.memo(c)}!function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString(),r=D();return"<style "+[r&&'nonce="'+r+'"',w+'="true"','data-styled-version="5.3.0"'].filter(Boolean).join(" ")+">"+t+"</style>"},this.getStyleTags=function(){return e.sealed?x(2):e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)return x(2);var r=((t={})[w]="",t["data-styled-version"]="5.3.0",t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),n=D();return n&&(r.nonce=n),[i.createElement("style",h({},r,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new Y({isServer:!0}),this.sealed=!1}var t=e.prototype;t.collectStyles=function(e){return this.sealed?x(2):i.createElement(ce,{sheet:this.instance},e)},t.interleaveWithNodeStream=function(e){return x(3)}}();var ze=Te},838:function(e,t,r){"use strict";r.d(t,{n:function(){return a}});var n,i=r(5761),a=(0,r(3583).vJ)(n||(n=(0,i.Z)(["\n @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');\n @import url('https://fonts.googleapis.com/css2?family=Oxygen+Mono&display=swap');\n\n  * {\n    margin: 0;\n    padding: 0;\n    color: ",';\n    transition: background-color 0.2s ease;\n\n    &:not(code > span) {\n      font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,\n      Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;\n    }\n  }\n  \n  html,\n  body {\n    width: 100vw;\n    background-color: ',";\n    display: flex;\n    justify-content: center;\n    text-rendering: optimizeLegibility;\n    font-size: 16px;\n  }\n\n  p, a, li {\n    font-weight: 400;\n    text-decoration: none;\n  }\n"])),(function(e){return e.theme.fontColor}),(function(e){return e.theme.bgColor}))}}]);
//# sourceMappingURL=commons-236b690e90c22314d47b.js.map