!function(){function e(t){var r="function"==typeof Map?new Map:void 0;return e=function(e){if(null===e||(t=e,-1===Function.toString.call(t).indexOf("[native code]")))return e;var t;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(e))return r.get(e);r.set(e,o)}function o(){return n(e,arguments,u(this).constructor)}return o.prototype=Object.create(e.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),i(o,e)},e(t)}function n(e,t,r){return n=c()?Reflect.construct.bind():function(e,n,t){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(e,r));return t&&i(o,t.prototype),o},n.apply(null,arguments)}function t(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,o,a,c=[],u=!0,l=!1;try{if(o=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;u=!1}else for(;!(u=(r=o.call(t)).done)&&(c.push(r.value),c.length!==n);u=!0);}catch(s){l=!0,i=s}finally{try{if(!u&&null!=t.return&&(a=t.return(),Object(a)!==a))return}finally{if(l)throw i}}return c}}(e,n)||s(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&i(e,n)}function i(e,n){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,n){return e.__proto__=n,e},i(e,n)}function o(e){var n=c();return function(){var t,r=u(e);if(n){var i=u(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return a(this,t)}}function a(e,n){if(n&&("object"==typeof n||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function u(e){return u=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},u(e)}function l(e){return function(e){if(Array.isArray(e))return f(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||s(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,n){if(e){if("string"==typeof e)return f(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?f(e,n):void 0}}function f(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function g(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function d(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(i=r.key,o=void 0,"symbol"==typeof(o=function(e,n){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,n||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(i,"string"))?o:String(o)),r)}var i,o}function h(e,n,t){return n&&d(e.prototype,n),t&&d(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}(self.webpackChunkmaskito=self.webpackChunkmaskito||[]).push([[9358],{31075:function(n){function i(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(function(n){var t=e[n],r=typeof t;("object"===r||"function"===r)&&!Object.isFrozen(t)&&i(t)}),e}var a=function(){function e(n){g(this,e),void 0===n.data&&(n.data={}),this.data=n.data,this.isMatchIgnored=!1}return h(e,[{key:"ignoreMatch",value:function(){this.isMatchIgnored=!0}}]),e}();function c(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function u(e){var n=Object.create(null);for(var t in e)n[t]=e[t];for(var r=arguments.length,i=new Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];return i.forEach(function(e){for(var t in e)n[t]=e[t]}),n}var s=function(e){return!!e.scope},f=function(){function e(n,t){g(this,e),this.buffer="",this.classPrefix=t.classPrefix,n.walk(this)}return h(e,[{key:"addText",value:function(e){this.buffer+=c(e)}},{key:"openNode",value:function(e){if(s(e)){var n=function(e,n){var t=n.prefix;if(e.startsWith("language:"))return e.replace("language:","language-");if(e.includes(".")){var r=e.split(".");return["".concat(t).concat(r.shift())].concat(l(r.map(function(e,n){return"".concat(e).concat("_".repeat(n+1))}))).join(" ")}return"".concat(t).concat(e)}(e.scope,{prefix:this.classPrefix});this.span(n)}}},{key:"closeNode",value:function(e){!s(e)||(this.buffer+="</span>")}},{key:"value",value:function(){return this.buffer}},{key:"span",value:function(e){this.buffer+='<span class="'.concat(e,'">')}}]),e}(),d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n={children:[]};return Object.assign(n,e),n},p=function(e){r(t,e);var n=o(t);function t(e){var r;return g(this,t),(r=n.call(this)).options=e,r}return h(t,[{key:"addText",value:function(e){""!==e&&this.add(e)}},{key:"startScope",value:function(e){this.openNode(e)}},{key:"endScope",value:function(){this.closeNode()}},{key:"__addSublanguage",value:function(e,n){var t=e.root;n&&(t.scope="language:".concat(n)),this.add(t)}},{key:"toHTML",value:function(){return new f(this,this.options).value()}},{key:"finalize",value:function(){return this.closeAllNodes(),!0}}]),t}(function(){function e(){g(this,e),this.rootNode=d(),this.stack=[this.rootNode]}return h(e,[{key:"top",get:function(){return this.stack[this.stack.length-1]}},{key:"root",get:function(){return this.rootNode}},{key:"add",value:function(e){this.top.children.push(e)}},{key:"openNode",value:function(e){var n=d({scope:e});this.add(n),this.stack.push(n)}},{key:"closeNode",value:function(){if(this.stack.length>1)return this.stack.pop()}},{key:"closeAllNodes",value:function(){for(;this.closeNode(););}},{key:"toJSON",value:function(){return JSON.stringify(this.rootNode,null,4)}},{key:"walk",value:function(e){return this.constructor._walk(e,this.rootNode)}}],[{key:"_walk",value:function(e,n){var t=this;return"string"==typeof n?e.addText(n):n.children&&(e.openNode(n),n.children.forEach(function(n){return t._walk(e,n)}),e.closeNode(n)),e}},{key:"_collapse",value:function(n){"string"!=typeof n&&(!n.children||(n.children.every(function(e){return"string"==typeof e})?n.children=[n.children.join("")]:n.children.forEach(function(n){e._collapse(n)})))}}]),e}());function b(e){return e?"string"==typeof e?e:e.source:null}function v(e){return w("(?=",e,")")}function y(e){return w("(?:",e,")*")}function m(e){return w("(?:",e,")?")}function w(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.map(function(e){return b(e)}).join("")}function E(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var r=function(e){var n=e[e.length-1];return"object"==typeof n&&n.constructor===Object?(e.splice(e.length-1,1),n):{}}(n);return"("+(r.capture?"":"?:")+n.map(function(e){return b(e)}).join("|")+")"}function x(e){return new RegExp(e.toString()+"|").exec("").length-1}var _=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function k(e,n){var t=n.joinWith,r=0;return e.map(function(e){for(var n=r+=1,t=b(e),i="";t.length>0;){var o=_.exec(t);if(!o){i+=t;break}i+=t.substring(0,o.index),t=t.substring(o.index+o[0].length),"\\"===o[0][0]&&o[1]?i+="\\"+String(Number(o[1])+n):(i+=o[0],"("===o[0]&&r++)}return i}).map(function(e){return"(".concat(e,")")}).join(t)}var O="[a-zA-Z]\\w*",S="[a-zA-Z_]\\w*",j="\\b\\d+(\\.\\d+)?",A="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",M="\\b(0b[01]+)",N={begin:"\\\\[\\s\\S]",relevance:0},R={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[N]},I={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[N]},T=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=u({scope:"comment",begin:e,end:n,contains:[]},t);r.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});var i=E("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return r.contains.push({begin:w(/[ ]+/,"(",i,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),r},L=T("//","$"),B=T("/\\*","\\*/"),P=T("#","$"),C=Object.freeze({__proto__:null,MATCH_NOTHING_RE:/\b\B/,IDENT_RE:O,UNDERSCORE_IDENT_RE:S,NUMBER_RE:j,C_NUMBER_RE:A,BINARY_NUMBER_RE:M,RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",SHEBANG:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=/^#![ ]*\//;return e.binary&&(e.begin=w(n,/.*\b/,e.binary,/\b.*/)),u({scope:"meta",begin:n,end:/$/,relevance:0,"on:begin":function(e,n){0!==e.index&&n.ignoreMatch()}},e)},BACKSLASH_ESCAPE:N,APOS_STRING_MODE:R,QUOTE_STRING_MODE:I,PHRASAL_WORDS_MODE:{begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},COMMENT:T,C_LINE_COMMENT_MODE:L,C_BLOCK_COMMENT_MODE:B,HASH_COMMENT_MODE:P,NUMBER_MODE:{scope:"number",begin:j,relevance:0},C_NUMBER_MODE:{scope:"number",begin:A,relevance:0},BINARY_NUMBER_MODE:{scope:"number",begin:M,relevance:0},REGEXP_MODE:{begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[N,{begin:/\[/,end:/\]/,relevance:0,contains:[N]}]}]},TITLE_MODE:{scope:"title",begin:O,relevance:0},UNDERSCORE_TITLE_MODE:{scope:"title",begin:S,relevance:0},METHOD_GUARD:{begin:"\\.\\s*"+S,relevance:0},END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":function(e,n){n.data._beginMatch=e[1]},"on:end":function(e,n){n.data._beginMatch!==e[1]&&n.ignoreMatch()}})}});function H(e,n){"."===e.input[e.index-1]&&n.ignoreMatch()}function D(e,n){void 0!==e.className&&(e.scope=e.className,delete e.className)}function U(e,n){!n||!e.beginKeywords||(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=H,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,void 0===e.relevance&&(e.relevance=0))}function z(e,n){!Array.isArray(e.illegal)||(e.illegal=E.apply(void 0,l(e.illegal)))}function W(e,n){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function X(e,n){void 0===e.relevance&&(e.relevance=1)}var F=function(e,n){if(e.beforeMatch){if(e.starts)throw new Error("beforeMatch cannot be used with starts");var t=Object.assign({},e);Object.keys(e).forEach(function(n){delete e[n]}),e.keywords=t.keywords,e.begin=w(t.beforeMatch,v(t.begin)),e.starts={relevance:0,contains:[Object.assign(t,{endsParent:!0})]},e.relevance=0,delete t.beforeMatch}},G=["of","and","for","in","not","or","if","then","parent","list","value"];function K(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"keyword",r=Object.create(null);return"string"==typeof e?i(t,e.split(" ")):Array.isArray(e)?i(t,e):Object.keys(e).forEach(function(t){Object.assign(r,K(e[t],n,t))}),r;function i(e,t){n&&(t=t.map(function(e){return e.toLowerCase()})),t.forEach(function(n){var t=n.split("|");r[t[0]]=[e,$(t[0],t[1])]})}}function $(e,n){return n?Number(n):function(e){return G.includes(e.toLowerCase())}(e)?0:1}var Z={},J=function(e){console.error(e)},V=function(e){for(var n,t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];(n=console).log.apply(n,["WARN: ".concat(e)].concat(r))},q=function(e,n){Z["".concat(e,"/").concat(n)]||(console.log("Deprecated as of ".concat(e,". ").concat(n)),Z["".concat(e,"/").concat(n)]=!0)},Y=new Error;function Q(e,n,t){for(var r=t.key,i=0,o=e[r],a={},c={},u=1;u<=n.length;u++)c[u+i]=o[u],a[u+i]=!0,i+=x(n[u-1]);e[r]=c,e[r]._emit=a,e[r]._multi=!0}function ee(e){(function(e){e.scope&&"object"==typeof e.scope&&null!==e.scope&&(e.beginScope=e.scope,delete e.scope)})(e),"string"==typeof e.beginScope&&(e.beginScope={_wrap:e.beginScope}),"string"==typeof e.endScope&&(e.endScope={_wrap:e.endScope}),function(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw J("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Y;if("object"!=typeof e.beginScope||null===e.beginScope)throw J("beginScope must be object"),Y;Q(e,e.begin,{key:"beginScope"}),e.begin=k(e.begin,{joinWith:""})}}(e),function(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw J("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Y;if("object"!=typeof e.endScope||null===e.endScope)throw J("endScope must be object"),Y;Q(e,e.end,{key:"endScope"}),e.end=k(e.end,{joinWith:""})}}(e)}function ne(e){function n(n,t){return new RegExp(b(n),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(t?"g":""))}var r=function(){function e(){g(this,e),this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}return h(e,[{key:"addRule",value:function(e,n){n.position=this.position++,this.matchIndexes[this.matchAt]=n,this.regexes.push([n,e]),this.matchAt+=x(e)+1}},{key:"compile",value:function(){0===this.regexes.length&&(this.exec=function(){return null});var e=this.regexes.map(function(e){return e[1]});this.matcherRe=n(k(e,{joinWith:"|"}),!0),this.lastIndex=0}},{key:"exec",value:function(e){this.matcherRe.lastIndex=this.lastIndex;var n=this.matcherRe.exec(e);if(!n)return null;var t=n.findIndex(function(e,n){return n>0&&void 0!==e}),r=this.matchIndexes[t];return n.splice(0,t),Object.assign(n,r)}}]),e}(),i=function(){function e(){g(this,e),this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}return h(e,[{key:"getMatcher",value:function(e){if(this.multiRegexes[e])return this.multiRegexes[e];var n=new r;return this.rules.slice(e).forEach(function(e){var r=t(e,2),i=r[0],o=r[1];return n.addRule(i,o)}),n.compile(),this.multiRegexes[e]=n,n}},{key:"resumingScanAtSamePosition",value:function(){return 0!==this.regexIndex}},{key:"considerAll",value:function(){this.regexIndex=0}},{key:"addRule",value:function(e,n){this.rules.push([e,n]),"begin"===n.type&&this.count++}},{key:"exec",value:function(e){var n=this.getMatcher(this.regexIndex);n.lastIndex=this.lastIndex;var t=n.exec(e);if(this.resumingScanAtSamePosition()&&(!t||t.index!==this.lastIndex)){var r=this.getMatcher(0);r.lastIndex=this.lastIndex+1,t=r.exec(e)}return t&&(this.regexIndex+=t.position+1,this.regexIndex===this.count&&this.considerAll()),t}}]),e}();if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=u(e.classNameAliases||{}),function t(r,o){var a,c=r;if(r.isCompiled)return c;[D,W,ee,F].forEach(function(e){return e(r,o)}),e.compilerExtensions.forEach(function(e){return e(r,o)}),r.__beforeBegin=null,[U,z,X].forEach(function(e){return e(r,o)}),r.isCompiled=!0;var s=null;return"object"==typeof r.keywords&&r.keywords.$pattern&&(r.keywords=Object.assign({},r.keywords),s=r.keywords.$pattern,delete r.keywords.$pattern),s=s||/\w+/,r.keywords&&(r.keywords=K(r.keywords,e.case_insensitive)),c.keywordPatternRe=n(s,!0),o&&(r.begin||(r.begin=/\B|\b/),c.beginRe=n(c.begin),!r.end&&!r.endsWithParent&&(r.end=/\B|\b/),r.end&&(c.endRe=n(c.end)),c.terminatorEnd=b(c.end)||"",r.endsWithParent&&o.terminatorEnd&&(c.terminatorEnd+=(r.end?"|":"")+o.terminatorEnd)),r.illegal&&(c.illegalRe=n(r.illegal)),r.contains||(r.contains=[]),r.contains=(a=[]).concat.apply(a,l(r.contains.map(function(e){return function(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(n){return u(e,{variants:null},n)})),e.cachedVariants?e.cachedVariants:te(e)?u(e,{starts:e.starts?u(e.starts):null}):Object.isFrozen(e)?u(e):e}("self"===e?r:e)}))),r.contains.forEach(function(e){t(e,c)}),r.starts&&t(r.starts,o),c.matcher=function(e){var n=new i;return e.contains.forEach(function(e){return n.addRule(e.begin,{rule:e,type:"begin"})}),e.terminatorEnd&&n.addRule(e.terminatorEnd,{type:"end"}),e.illegal&&n.addRule(e.illegal,{type:"illegal"}),n}(c),c}(e)}function te(e){return!!e&&(e.endsWithParent||te(e.starts))}var re=function(e){r(t,e);var n=o(t);function t(e,r){var i;return g(this,t),(i=n.call(this,e)).name="HTMLInjectionError",i.html=r,i}return h(t)}(e(Error)),ie=c,oe=u,ae=Symbol("nomatch"),ce=function(e){var n=Object.create(null),r=Object.create(null),o=[],c=!0,u="Could not find the language '{}', did you forget to load/include a language module?",l={disableAutodetect:!0,name:"Plain text",contains:[]},s={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:p};function f(e){return s.noHighlightRe.test(e)}function g(e,n,t){var r="",i="";"object"==typeof n?(r=e,t=n.ignoreIllegals,i=n.language):(q("10.7.0","highlight(lang, code, ...args) has been deprecated."),q("10.7.0","Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"),i=e,r=n),void 0===t&&(t=!0);var o={code:r,language:i};j("before:highlight",o);var a=o.result?o.result:d(o.language,o.code,t);return a.code=o.code,j("after:highlight",a),a}function d(e,r,i,o){var l=Object.create(null);function f(e,n){return e.keywords[n]}function g(){if(A.keywords){var e=0;A.keywordPatternRe.lastIndex=0;for(var n=A.keywordPatternRe.exec(R),r="";n;){r+=R.substring(e,n.index);var i=O.case_insensitive?n[0].toLowerCase():n[0],o=f(A,i);if(o){var a=t(o,2),c=a[0],u=a[1];N.addText(r),r="",l[i]=(l[i]||0)+1,l[i]<=7&&(I+=u),c.startsWith("_")?r+=n[0]:b(n[0],O.classNameAliases[c]||c)}else r+=n[0];e=A.keywordPatternRe.lastIndex,n=A.keywordPatternRe.exec(R)}r+=R.substring(e),N.addText(r)}else N.addText(R)}function p(){null!=A.subLanguage?function(){if(""!==R){var e=null;if("string"==typeof A.subLanguage){if(!n[A.subLanguage])return void N.addText(R);e=d(A.subLanguage,R,!0,M[A.subLanguage]),M[A.subLanguage]=e._top}else e=h(R,A.subLanguage.length?A.subLanguage:null);A.relevance>0&&(I+=e.relevance),N.__addSublanguage(e._emitter,e.language)}}():g(),R=""}function b(e,n){""!==e&&(N.startScope(n),N.addText(e),N.endScope())}function v(e,n){for(var t=1,r=n.length-1;t<=r;)if(e._emit[t]){var i=O.classNameAliases[e[t]]||e[t],o=n[t];i?b(o,i):(R=o,g(),R=""),t++}else t++}function y(e,n){return e.scope&&"string"==typeof e.scope&&N.openNode(O.classNameAliases[e.scope]||e.scope),e.beginScope&&(e.beginScope._wrap?(b(R,O.classNameAliases[e.beginScope._wrap]||e.beginScope._wrap),R=""):e.beginScope._multi&&(v(e.beginScope,n),R="")),A=Object.create(e,{parent:{value:A}})}function m(e,n,t){var r=function(e,n){var t=e&&e.exec(n);return t&&0===t.index}(e.endRe,t);if(r){if(e["on:end"]){var i=new a(e);e["on:end"](n,i),i.isMatchIgnored&&(r=!1)}if(r){for(;e.endsParent&&e.parent;)e=e.parent;return e}}if(e.endsWithParent)return m(e.parent,n,t)}function w(e){return 0===A.matcher.regexIndex?(R+=e[0],1):(B=!0,0)}function E(e){var n=e[0],t=r.substring(e.index),i=m(A,e,t);if(!i)return ae;var o=A;A.endScope&&A.endScope._wrap?(p(),b(n,A.endScope._wrap)):A.endScope&&A.endScope._multi?(p(),v(A.endScope,e)):o.skip?R+=n:(o.returnEnd||o.excludeEnd||(R+=n),p(),o.excludeEnd&&(R=n));do{A.scope&&N.closeNode(),!A.skip&&!A.subLanguage&&(I+=A.relevance),A=A.parent}while(A!==i.parent);return i.starts&&y(i.starts,e),o.returnEnd?0:n.length}var x={};function _(n,t){var o=t&&t[0];if(R+=n,null==o)return p(),0;if("begin"===x.type&&"end"===t.type&&x.index===t.index&&""===o){if(R+=r.slice(t.index,t.index+1),!c){var u=new Error("0 width match regex (".concat(e,")"));throw u.languageName=e,u.badRule=x.rule,u}return 1}if(x=t,"begin"===t.type)return function(e){for(var n=e[0],t=e.rule,r=new a(t),i=0,o=[t.__beforeBegin,t["on:begin"]];i<o.length;i++){var c=o[i];if(c&&(c(e,r),r.isMatchIgnored))return w(n)}return t.skip?R+=n:(t.excludeBegin&&(R+=n),p(),!t.returnBegin&&!t.excludeBegin&&(R=n)),y(t,e),t.returnBegin?0:n.length}(t);if("illegal"===t.type&&!i){var l=new Error('Illegal lexeme "'+o+'" for mode "'+(A.scope||"<unnamed>")+'"');throw l.mode=A,l}if("end"===t.type){var s=E(t);if(s!==ae)return s}if("illegal"===t.type&&""===o)return 1;if(L>1e5&&L>3*t.index)throw new Error("potential infinite loop, way more iterations than matches");return R+=o,o.length}var O=k(e);if(!O)throw J(u.replace("{}",e)),new Error('Unknown language: "'+e+'"');var S=ne(O),j="",A=o||S,M={},N=new s.__emitter(s);!function(){for(var e=[],n=A;n!==O;n=n.parent)n.scope&&e.unshift(n.scope);e.forEach(function(e){return N.openNode(e)})}();var R="",I=0,T=0,L=0,B=!1;try{if(O.__emitTokens)O.__emitTokens(r,N);else{for(A.matcher.considerAll();;){L++,B?B=!1:A.matcher.considerAll(),A.matcher.lastIndex=T;var P=A.matcher.exec(r);if(!P)break;var C=_(r.substring(T,P.index),P);T=P.index+C}_(r.substring(T))}return N.finalize(),j=N.toHTML(),{language:e,value:j,relevance:I,illegal:!1,_emitter:N,_top:A}}catch(P){if(P.message&&P.message.includes("Illegal"))return{language:e,value:ie(r),illegal:!0,relevance:0,_illegalBy:{message:P.message,index:T,context:r.slice(T-100,T+100),mode:P.mode,resultSoFar:j},_emitter:N};if(c)return{language:e,value:ie(r),illegal:!1,relevance:0,errorRaised:P,_emitter:N,_top:A};throw P}}function h(e,r){r=r||s.languages||Object.keys(n);var i=function(e){var n={value:ie(e),illegal:!1,relevance:0,_top:l,_emitter:new s.__emitter(s)};return n._emitter.addText(e),n}(e),o=r.filter(k).filter(S).map(function(n){return d(n,e,!1)});o.unshift(i);var a=t(o.sort(function(e,n){if(e.relevance!==n.relevance)return n.relevance-e.relevance;if(e.language&&n.language){if(k(e.language).supersetOf===n.language)return 1;if(k(n.language).supersetOf===e.language)return-1}return 0}),2),c=a[0],u=a[1],f=c;return f.secondBest=u,f}function b(e){var n=function(e){var n=e.className+" ";n+=e.parentNode?e.parentNode.className:"";var t=s.languageDetectRe.exec(n);if(t){var r=k(t[1]);return r||(V(u.replace("{}",t[1])),V("Falling back to no-highlight mode for this block.",e)),r?t[1]:"no-highlight"}return n.split(/\s+/).find(function(e){return f(e)||k(e)})}(e);if(!f(n)){if(j("before:highlightElement",{el:e,language:n}),e.children.length>0&&(s.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(e)),s.throwUnescapedHTML))throw new re("One of your code blocks includes unescaped HTML.",e.innerHTML);var t=e.textContent,i=n?g(t,{language:n,ignoreIllegals:!0}):h(t);e.innerHTML=i.value,function(e,n,t){var i=n&&r[n]||t;e.classList.add("hljs"),e.classList.add("language-".concat(i))}(e,n,i.language),e.result={language:i.language,re:i.relevance,relevance:i.relevance},i.secondBest&&(e.secondBest={language:i.secondBest.language,relevance:i.secondBest.relevance}),j("after:highlightElement",{el:e,result:i,text:t})}}var x=!1;function _(){"loading"!==document.readyState?document.querySelectorAll(s.cssSelector).forEach(b):x=!0}function k(e){return e=(e||"").toLowerCase(),n[e]||n[r[e]]}function O(e,n){var t=n.languageName;"string"==typeof e&&(e=[e]),e.forEach(function(e){r[e.toLowerCase()]=t})}function S(e){var n=k(e);return n&&!n.disableAutodetect}function j(e,n){var t=e;o.forEach(function(e){e[t]&&e[t](n)})}for(var A in"undefined"!=typeof window&&window.addEventListener&&window.addEventListener("DOMContentLoaded",function(){x&&_()},!1),Object.assign(e,{highlight:g,highlightAuto:h,highlightAll:_,highlightElement:b,highlightBlock:function(e){return q("10.7.0","highlightBlock will be removed entirely in v12.0"),q("10.7.0","Please use highlightElement now."),b(e)},configure:function(e){s=oe(s,e)},initHighlighting:function(){_(),q("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")},initHighlightingOnLoad:function(){_(),q("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")},registerLanguage:function(t,r){var i=null;try{i=r(e)}catch(o){if(J("Language definition for '{}' could not be registered.".replace("{}",t)),!c)throw o;J(o),i=l}i.name||(i.name=t),n[t]=i,i.rawDefinition=r.bind(null,e),i.aliases&&O(i.aliases,{languageName:t})},unregisterLanguage:function(e){delete n[e];for(var t=0,i=Object.keys(r);t<i.length;t++){var o=i[t];r[o]===e&&delete r[o]}},listLanguages:function(){return Object.keys(n)},getLanguage:k,registerAliases:O,autoDetection:S,inherit:oe,addPlugin:function(e){(function(e){e["before:highlightBlock"]&&!e["before:highlightElement"]&&(e["before:highlightElement"]=function(n){e["before:highlightBlock"](Object.assign({block:n.el},n))}),e["after:highlightBlock"]&&!e["after:highlightElement"]&&(e["after:highlightElement"]=function(n){e["after:highlightBlock"](Object.assign({block:n.el},n))})})(e),o.push(e)},removePlugin:function(e){var n=o.indexOf(e);-1!==n&&o.splice(n,1)}}),e.debugMode=function(){c=!1},e.safeMode=function(){c=!0},e.versionString="11.8.0",e.regex={concat:w,lookahead:v,either:E,optional:m,anyNumberOfTimes:y},C)"object"==typeof C[A]&&i(C[A]);return Object.assign(e,C),e},ue=ce({});ue.newInstance=function(){return ce({})},n.exports=ue,ue.HighlightJS=ue,ue.default=ue},29358:function(e,n,t){"use strict";t.r(n),t.d(n,{HighlightJS:function(){return r}});var r=t(31075);n.default=r}}])}();