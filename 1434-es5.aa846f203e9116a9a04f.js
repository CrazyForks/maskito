!function(){"use strict";function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,(o=i.key,a=void 0,"symbol"==typeof(a=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(o,"string"))?a:String(a)),i)}var o,a}function t(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(self.webpackChunkmaskito=self.webpackChunkmaskito||[]).push([[1434],{70997:function(e,i,o){o.d(i,{fV:function(){return c}});var a,u=o(74788),r=o(68159),c=((a=t(function e(){n(this,e)})).\u0275fac=function(e){return new(e||a)},a.\u0275mod=u.oAB({type:a}),a.\u0275inj=u.cJS({imports:[r.JF,r.mG,r.Lx,r.Lq,r.u4]}),a)},31434:function(e,i,o){o.r(i),o.d(i,{AngularDocPageModule:function(){return M}});var a,u=o(12057),r=o(87862),c=o(86561),s=o(52494),l=o(70997),p=o(44427),d=o(82847),m=o(60885),g=o(21673),f=o(44711),h=o(74788),Z=o(68159),v=o(47258),_=((a=t(function e(){n(this,e),this.value="",this.nameMask={mask:/^[a-zA-Z\s]+$/,postprocessors:[function(e){var t=e.value,n=e.selection;return{value:t.toUpperCase(),selection:n}}]},this.predicate=function(e){return e.querySelector("tui-input input")}})).\u0275fac=function(e){return new(e||a)},a.\u0275cmp=h.Xpm({type:a,selectors:[["nested-doc-example-1"]],decls:2,vars:2,consts:[[3,"maskito","ngModel","ngModelChange"]],template:function(e,t){1&e&&(h.TgZ(0,"tui-input",0),h.NdJ("ngModelChange",function(e){return t.value=e}),h._uU(1," Name on the card\n"),h.qZA()),2&e&&h.Q6J("maskito",t.nameMask)("ngModel",t.value)},directives:[g.K3,g.wU,v.r,r.JJ,r.On],encapsulation:2,changeDetection:0}),a),U=function(){var e=t(function e(){n(this,e),this.show=!1,this.value=""});return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=h.Xpm({type:e,selectors:[["nested-doc-example-2"]],decls:4,vars:3,consts:[[1,"tui-space_bottom-3",3,"ngModel","ngModelChange"],[3,"disabled","ngModel","ngModelChange"]],template:function(e,t){1&e&&(h.TgZ(0,"tui-checkbox-labeled",0),h.NdJ("ngModelChange",function(e){return t.show=e}),h._uU(1," Add card holder name\n"),h.qZA(),h.TgZ(2,"tui-input",1),h.NdJ("ngModelChange",function(e){return t.value=e}),h._uU(3," Name on the card\n"),h.qZA()),2&e&&(h.Q6J("ngModel",t.show),h.xp6(2),h.Q6J("disabled",!t.show)("ngModel",t.value))},directives:[f.p,r.JJ,r.On,g.K3,g.wU],encapsulation:2,changeDetection:0}),e}(),A=o(55046),T=o(49510),q=function(){var e=function(){function e(){n(this,e),this.control=new r.NI,this.maskito=(0,A.f8)({precision:2})}return t(e,[{key:"setValue",value:function(){this.control.setValue(12345.67)}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=h.Xpm({type:e,selectors:[["cva-doc-example-3"]],decls:3,vars:2,consts:[[3,"formControl","maskito"],[3,"click"]],template:function(e,t){1&e&&(h._UZ(0,"input",0),h.TgZ(1,"button",1),h.NdJ("click",function(){return t.setValue()}),h._uU(2,"Set 12345.67"),h.qZA()),2&e&&h.Q6J("formControl",t.control)("maskito",t.maskito)},directives:[r.Fj,T.F,r.JJ,r.oH,v.r],encapsulation:2,changeDetection:0}),e}(),y=o(40635),b=function(){var e=t(function e(){n(this,e),this.value=12345.67,this.options=(0,A.f8)({precision:2})});return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=h.Xpm({type:e,selectors:[["pipe-doc-example-4"]],decls:2,vars:4,template:function(e,t){1&e&&(h._uU(0),h.ALo(1,"maskito")),2&e&&h.hij("Balance: $",h.xi3(1,1,t.value,t.options),"\n")},pipes:[y.c],encapsulation:2,changeDetection:0}),e}();function x(e,t){if(1&e&&(h.TgZ(0,"code"),h._uU(1,"@maskito/angular"),h.qZA(),h._uU(2," is a light-weighted library to use "),h.TgZ(3,"strong"),h._uU(4,"Maskito"),h.qZA(),h._uU(5," in an Angular-way. "),h.TgZ(6,"tui-notification",3),h.TgZ(7,"strong"),h._uU(8,"Prerequisites"),h.qZA(),h.TgZ(9,"p",4),h._uU(10," To get the most out of this guide, you should review the topic "),h.TgZ(11,"a",5),h._uU(12,' "Core\xa0Concepts" '),h.qZA(),h._uU(13," first. "),h.qZA(),h.qZA(),h.TgZ(14,"section",6),h.TgZ(15,"h2"),h._uU(16,"Write less code"),h.qZA(),h.TgZ(17,"ul",7),h.TgZ(18,"li",8),h.TgZ(19,"strong"),h._uU(20,"No need to query element from DOM."),h.qZA(),h._uU(21," Just pass all required options to "),h.TgZ(22,"code"),h._uU(23,"[maskito]"),h.qZA(),h._uU(24," directive. "),h.qZA(),h.TgZ(25,"li",8),h.TgZ(26,"strong"),h._uU(27,"No need to worry about clean-ups."),h.qZA(),h._uU(28," All created event listeners are automatically removed after element is detached from DOM. "),h.qZA(),h.qZA(),h.qZA(),h.TgZ(29,"section",6),h.TgZ(30,"h2"),h._uU(31,"Basic directive approach"),h.qZA(),h.TgZ(32,"p"),h._uU(33,"Use it when you have direct access to native input element."),h.qZA(),h._UZ(34,"tui-doc-code",9),h.qZA(),h.TgZ(35,"section",6),h.TgZ(36,"h2"),h._uU(37,"Nested input element"),h.qZA(),h.TgZ(38,"p"),h._uU(39," Pass a predicate to "),h.TgZ(40,"strong"),h._uU(41,"maskito"),h.qZA(),h._uU(42," to find input element for you, if you do not have a direct access to it. "),h.qZA(),h.TgZ(43,"tui-notification"),h._uU(44," By default "),h.TgZ(45,"strong"),h._uU(46,"maskito"),h.qZA(),h._uU(47," will try to find input/textarea by querying its host: "),h.TgZ(48,"code"),h._uU(49,"host.querySelector('input,textarea')"),h.qZA(),h._uU(50," so that might be sufficient. Use custom predicate if you need custom logic. "),h.qZA(),h._UZ(51,"tui-doc-code",9),h.qZA(),h.TgZ(52,"tui-doc-example",10),h.TgZ(53,"tui-notification",11),h._uU(54," Default behavior is enough for "),h.TgZ(55,"a",12),h._uU(56," Taiga UI "),h.qZA(),h._uU(57," inputs "),h.qZA(),h._UZ(58,"nested-doc-example-1",13,14),h.TgZ(60,"tui-notification",15),h._uU(61," Custom predicate is required if target input is not the first on in the DOM "),h.qZA(),h._UZ(62,"nested-doc-example-2",16),h.qZA(),h.TgZ(63,"tui-doc-example",17),h._UZ(64,"cva-doc-example-3"),h.qZA(),h.TgZ(65,"tui-doc-example",18),h._UZ(66,"pipe-doc-example-4"),h.qZA()),2&e){var n=h.MAs(59),i=h.oxw();h.xp6(11),h.Q6J("routerLink",i.coreConceptsOverviewDocPage),h.xp6(23),h.Q6J("code",i.basicDirectiveApproach),h.xp6(17),h.Q6J("code",i.customInputExample),h.xp6(1),h.Q6J("content",i.nestedInputExample),h.xp6(10),h.Q6J("maskito",n.nameMask)("maskitoElement",n.predicate),h.xp6(1),h.Q6J("content",i.cvaExample),h.xp6(2),h.Q6J("content",i.pipeExample)}}function k(e,t){if(1&e&&(h.TgZ(0,"section"),h.TgZ(1,"ol",19),h.TgZ(2,"li",8),h._uU(3," Install libraries "),h._UZ(4,"tui-doc-code",20),h.qZA(),h.TgZ(5,"li",21),h._uU(6," Import "),h.TgZ(7,"code"),h._uU(8,"MaskitoModule"),h.qZA(),h._uU(9," to your module "),h._UZ(10,"tui-doc-code",22),h.qZA(),h.qZA(),h.qZA()),2&e){var n=h.oxw();h.xp6(10),h.Q6J("code",n.importMaskitoModuleExample)}}var w=function(){var e=t(function e(){n(this,e),this.coreConceptsOverviewDocPage="/core-concepts/overview",this.importMaskitoModuleExample=o.e(8935).then(o.t.bind(o,18935,17)),this.basicDirectiveApproach=o.e(1069).then(o.t.bind(o,81069,17)),this.customInputExample=o.e(8602).then(o.t.bind(o,48602,17)),this.nestedInputExample={TypeScript:o.e(2472).then(o.t.bind(o,22472,17)),Default:o.e(1026).then(o.t.bind(o,71026,17)),Custom:o.e(8884).then(o.t.bind(o,8884,17))},this.cvaExample={TypeScript:o.e(1541).then(o.t.bind(o,31541,17)),HTML:o.e(7383).then(o.t.bind(o,37383,17))},this.pipeExample={TypeScript:o.e(608).then(o.t.bind(o,60608,17)),HTML:o.e(8307).then(o.t.bind(o,88307,17))}});return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=h.Xpm({type:e,selectors:[["angular-doc-page"]],decls:3,vars:0,consts:[["header","Angular","path","angular"],["pageTab","Overview"],["pageTab","Setup"],["status","warning",1,"tui-space_top-6"],[1,"tui-space_bottom-0"],["tuiLink","",3,"routerLink"],[1,"tui-space_top-12"],[1,"tui-list"],[1,"tui-list__item"],["filename","your.component.ts",3,"code"],["description","See querying nested input in action","heading","Custom input",3,"content"],[1,"example","tui-space_bottom-3"],["href","https://github.com/Tinkoff/taiga-ui","tuiLink",""],[1,"example"],["example",""],[1,"example","tui-space_vertical-3"],[1,"example",3,"maskito","maskitoElement"],["description","When directly on native input/textarea tag, maskito directive formats value set programmatically with Angular forms.","heading","Form controls",3,"content"],["description","Format arbitrary value with the same options","heading","Pipe",3,"content"],[1,"tui-list","tui-list_ordered"],["code","npm install @maskito/{core,angular}","filename","/your/project/path>"],[1,"tui-list__item","tui-space_top-8"],["filename","your.module.ts",3,"code"]],template:function(e,t){1&e&&(h.TgZ(0,"tui-doc-page",0),h.YNc(1,x,67,8,"ng-template",1),h.YNc(2,k,11,1,"ng-template",2),h.qZA())},directives:[Z.qo,Z.nj,m.L,d.V,c.yS,Z.c0,Z.f2,_,U,v.r,q,b],styles:[".example[_ngcontent-%COMP%]{display:block;width:20rem}"],changeDetection:0}),e}(),M=function(){var e=t(function e(){n(this,e)});return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=h.oAB({type:e}),e.\u0275inj=h.cJS({imports:[[u.ez,r.u5,r.UX,s.U5,g.Qf,d.j,m.H,f.s,l.fV,c.Bz.forChild((0,p.Ve)(w))]]}),e}()}}])}();