"use strict";(self.webpackChunkmaskito=self.webpackChunkmaskito||[]).push([[9200],{9200:(R,j,c)=>{c.r(j),c.d(j,{StackblitzStarterModule:()=>H});var N=c(5358),P=c(719),I=c(4762),x=c(6250),k=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],C={clickToLoad:function(t){return h("ctl",t)},devToolsHeight:function(t){return z("devtoolsheight",t)},forceEmbedLayout:function(t){return h("embed",t)},hideDevTools:function(t){return h("hidedevtools",t)},hideExplorer:function(t){return h("hideExplorer",t)},hideNavigation:function(t){return h("hideNavigation",t)},showSidebar:function(t){return"boolean"==typeof(e=t)?"showSidebar="+(e?"1":"0"):"";var e},openFile:function(t){return(e=t,(Array.isArray(e)?e:[e]).filter(function(r){return"string"==typeof r&&""!==r.trim()}).map(function(r){return"file="+encodeURIComponent(r.trim())})).join("&");var e},terminalHeight:function(t){return z("terminalHeight",t)},theme:function(t){return T("theme",["light","dark"],t)},view:function(t){return T("view",["preview","editor"],t)}};function h(t,n){return!0===n?t+"=1":""}function z(t,n){return"number"==typeof n&&n>=0&&n<=100?t+"="+Math.round(n):""}function T(t,n,e){return"string"==typeof e&&n.includes(e)?t+"="+e:""}function g(t,n){return""+function(t){return void 0===t&&(t={}),"string"==typeof t.origin?t.origin:"https://stackblitz.com"}(n)+t+function(t){void 0===t&&(t={});var n=Object.entries(t).map(function(e){var r=e[0],i=e[1];return null!=i&&C.hasOwnProperty(r)?C[r](i):""}).filter(Boolean);return n.length?"?"+n.join("&"):""}(n)}function f(t,n){var e=document.createElement("input");return e.type="hidden",e.name=t,e.value=n,e}var B_openProject=function(t,n){var r,i;r=n,(i=function(t){if(!k.includes(t.template)){var n=k.map(function(i){return"'"+i+"'"}).join(", ");console.warn("Unsupported project.template: must be one of "+n)}var e="node"===t.template,r=document.createElement("form");return r.method="POST",r.setAttribute("style","display:none!important;"),r.appendChild(f("project[title]",t.title)),r.appendChild(f("project[description]",t.description)),r.appendChild(f("project[template]",t.template)),t.dependencies&&(e?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):r.appendChild(f("project[dependencies]",JSON.stringify(t.dependencies)))),t.settings&&r.appendChild(f("project[settings]",JSON.stringify(t.settings))),Object.keys(t.files).forEach(function(i){var o="project[files]["+i.replace(/\[/g,"%5B").replace(/\]/g,"%5D")+"]",a=t.files[i];"string"==typeof a&&r.appendChild(f(o,a))}),r}(t)).action=g("/run",r),i.target=function(t){return t&&!1===t.newWindow?"_self":"_blank"}(r),document.body.appendChild(i),i.submit(),document.body.removeChild(i)},u=c(4788);let L=(()=>{class t{constructor(){this.baseProjectConfigs={template:"typescript",dependencies:{"@maskito/core":"*","@maskito/kit":"*"}}}openStarter({title:e,description:r,files:i},o){return B_openProject(Object.assign(Object.assign({},this.baseProjectConfigs),{title:e,description:r,files:i}),o)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=u.Yz7({token:t,factory:t.\u0275fac}),t})(),G=(()=>{class t{constructor(e){this.stackblitz=e}ngOnInit(){return(0,I.mG)(this,void 0,void 0,function*(){yield this.openStackblitz()})}openStackblitz(){return(0,I.mG)(this,void 0,void 0,function*(){const[e,r,i]=yield Promise.all([c.e(1961).then(c.t.bind(c,1961,17)),c.e(5950).then(c.t.bind(c,5950,17)),c.e(9727).then(c.t.bind(c,9727,17))].map(x.JQ));return this.stackblitz.openStarter({title:"Maskito Starter",description:"A starter with Maskito library\nDocumentation: https://tinkoff.github.io/maskito",files:{"index.html":e,"index.ts":r,"styles.css":i}},{newWindow:!1,openFile:"index.ts",hideExplorer:!0})})}}return t.\u0275fac=function(e){return new(e||t)(u.Y36(L))},t.\u0275cmp=u.Xpm({type:t,selectors:[["stackblitz-starter"]],features:[u._Bn([L])],decls:1,vars:1,consts:[["size","xxl","textContent","Stackblitz loading...",1,"loader",3,"overlay"]],template:function(e,r){1&e&&u._UZ(0,"tui-loader",0),2&e&&u.Q6J("overlay",!0)},directives:[P.kM],styles:[".loader[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;background:var(--tui-base-01);z-index:1}"],changeDetection:0}),t})(),H=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=u.oAB({type:t}),t.\u0275inj=u.cJS({imports:[[P.dS,N.Bz.forChild([{path:"",component:G}])]]}),t})()}}]);