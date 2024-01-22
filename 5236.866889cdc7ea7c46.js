"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[5236],{997:(T,r,e)=>{e.d(r,{TuiAddonDocModule:()=>h});var g=e(4537),u=e(9439);let h=(()=>{class l{}return l.\u0275fac=function(Z){return new(Z||l)},l.\u0275mod=g.oAB({type:l}),l.\u0275inj=g.cJS({imports:[u.JF,u.mG,u.Lx,u.Lq,u.u4]}),l})()},5236:(T,r,e)=>{e.r(r),e.d(r,{default:()=>O});var g=e(2497),u=e(3178),h=e(3139),d=e(391),l=e(997),f=e(885),Z=e(2847),c=e(9900),p=e(1673),t=e(4537);let U=(()=>{var o;class s{constructor(){this.value="",this.nameMask={mask:/^[a-zA-Z\s]+$/,postprocessors:[({value:n,selection:a})=>({value:n.toUpperCase(),selection:a})]},this.predicate=n=>n.querySelector("tui-input input")}}return(o=s).\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["nested-doc-example-1"]],standalone:!0,features:[t.jDz],decls:2,vars:2,consts:[[3,"maskito","ngModel","ngModelChange"]],template:function(n,a){1&n&&(t.TgZ(0,"tui-input",0),t.NdJ("ngModelChange",function(m){return a.value=m}),t._uU(1," Name on the card\n"),t.qZA()),2&n&&t.Q6J("maskito",a.nameMask)("ngModel",a.value)},dependencies:[d.ro,c.u5,c.JJ,c.On,p.Qf,p.K3,p.wU],encapsulation:2,changeDetection:0}),s})();var x=e(3063);let M=(()=>{var o;class s{constructor(){this.show=!1,this.value=""}}return(o=s).\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["nested-doc-example-2"]],standalone:!0,features:[t.jDz],decls:4,vars:3,consts:[[1,"tui-space_bottom-3",3,"ngModel","ngModelChange"],[3,"disabled","ngModel","ngModelChange"]],template:function(n,a){1&n&&(t.TgZ(0,"tui-checkbox-labeled",0),t.NdJ("ngModelChange",function(m){return a.show=m}),t._uU(1," Add card holder name\n"),t.qZA(),t.TgZ(2,"tui-input",1),t.NdJ("ngModelChange",function(m){return a.value=m}),t._uU(3," Name on the card\n"),t.qZA()),2&n&&(t.Q6J("ngModel",a.show),t.xp6(2),t.Q6J("disabled",!a.show)("ngModel",a.value))},dependencies:[c.u5,c.JJ,c.On,p.Qf,p.K3,p.wU,x.s,x.p],encapsulation:2,changeDetection:0}),s})();var D=e(6730);let y=(()=>{var o;class s{constructor(){this.control=new c.NI(""),this.maskito=(0,D.f8)({precision:2})}setValue(){this.control.setValue("12345.6789")}}return(o=s).\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["cva-doc-example-3"]],standalone:!0,features:[t.jDz],decls:3,vars:2,consts:[[3,"formControl","maskito"],[3,"click"]],template:function(n,a){1&n&&(t._UZ(0,"input",0),t.TgZ(1,"button",1),t.NdJ("click",function(){return a.setValue()}),t._uU(2,"Set 12345.6789"),t.qZA()),2&n&&t.Q6J("formControl",a.control)("maskito",a.maskito)},dependencies:[d.ro,d.XE,c.UX,c.Fj,c.JJ,c.oH],encapsulation:2,changeDetection:0}),s})(),C=(()=>{var o;class s{constructor(){this.value=12345.67,this.options=(0,D.f8)({precision:2})}}return(o=s).\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["pipe-doc-example-4"]],standalone:!0,features:[t.jDz],decls:2,vars:4,template:function(n,a){1&n&&(t._uU(0),t.ALo(1,"maskito")),2&n&&t.hij("Balance: $",t.xi3(1,1,a.value,a.options),"\n")},dependencies:[d.cl],encapsulation:2,changeDetection:0}),s})();var v=e(9439);function E(o,s){1&o&&(t._uU(0," When directly on native input/textarea tag, "),t.TgZ(1,"code"),t._uU(2,"MaskitoCVA"),t.qZA(),t._uU(3," formats value set programmatically with Angular forms. "))}function J(o,s){if(1&o&&(t.TgZ(0,"code"),t._uU(1,"@maskito/angular"),t.qZA(),t._uU(2," is a light-weighted library to use "),t.TgZ(3,"strong"),t._uU(4,"Maskito"),t.qZA(),t._uU(5," in an Angular-way. "),t.TgZ(6,"tui-notification",3)(7,"strong"),t._uU(8,"Prerequisites"),t.qZA(),t.TgZ(9,"p",4),t._uU(10," To get the most out of this guide, you should review the topic "),t.TgZ(11,"a",5),t._uU(12,' "Core\xa0Concepts" '),t.qZA(),t._uU(13," first. "),t.qZA()(),t.TgZ(14,"section",6)(15,"h2"),t._uU(16,"Write less code"),t.qZA(),t.TgZ(17,"ul",7)(18,"li",8)(19,"strong"),t._uU(20,"No need to query element from DOM."),t.qZA(),t._uU(21," Just pass all required options to "),t.TgZ(22,"code"),t._uU(23,"[maskito]"),t.qZA(),t._uU(24," directive. "),t.qZA(),t.TgZ(25,"li",8)(26,"strong"),t._uU(27,"No need to worry about clean-ups."),t.qZA(),t._uU(28," All created event listeners are automatically removed after element is detached from DOM. "),t.qZA()()(),t.TgZ(29,"section",6)(30,"h2"),t._uU(31,"Basic directive approach"),t.qZA(),t.TgZ(32,"p"),t._uU(33,"Use it when you have direct access to native input element."),t.qZA(),t._UZ(34,"tui-doc-code",9),t.qZA(),t.TgZ(35,"section",6)(36,"h2"),t._uU(37,"Nested input element"),t.qZA(),t.TgZ(38,"p"),t._uU(39," Pass a predicate to "),t.TgZ(40,"strong"),t._uU(41,"maskito"),t.qZA(),t._uU(42," to find input element for you, if you do not have a direct access to it. "),t.qZA(),t.TgZ(43,"tui-notification"),t._uU(44," By default "),t.TgZ(45,"strong"),t._uU(46,"maskito"),t.qZA(),t._uU(47," will try to find input/textarea by querying its host: "),t.TgZ(48,"code"),t._uU(49,"host.querySelector('input,textarea')"),t.qZA(),t._uU(50," so that might be sufficient. Use custom predicate if you need custom logic. "),t.qZA(),t._UZ(51,"tui-doc-code",9),t.qZA(),t.TgZ(52,"tui-doc-example",10)(53,"tui-notification",11),t._uU(54," Default behavior is enough for "),t.TgZ(55,"a",12),t._uU(56," Taiga UI "),t.qZA(),t._uU(57," inputs "),t.qZA(),t._UZ(58,"nested-doc-example-1",13,14),t.TgZ(60,"tui-notification",15),t._uU(61," Custom predicate is required if target input is not the first on in the DOM "),t.qZA(),t._UZ(62,"nested-doc-example-2",16),t.qZA(),t.TgZ(63,"tui-doc-example",17),t.YNc(64,E,4,0,"ng-template",null,18,t.W1O),t._UZ(66,"cva-doc-example-3"),t.qZA(),t.TgZ(67,"tui-doc-example",19),t._UZ(68,"pipe-doc-example-4"),t.qZA()),2&o){const i=t.MAs(59),n=t.MAs(65),a=t.oxw();t.xp6(11),t.Q6J("routerLink",a.coreConceptsOverviewDocPage),t.xp6(23),t.Q6J("code",a.basicDirectiveApproach),t.xp6(17),t.Q6J("code",a.customInputExample),t.xp6(1),t.Q6J("content",a.nestedInputExample),t.xp6(10),t.Q6J("maskito",i.nameMask)("maskitoElement",i.predicate),t.xp6(1),t.Q6J("content",a.cvaExample)("description",n),t.xp6(4),t.Q6J("content",a.pipeExample)}}function N(o,s){if(1&o&&(t.TgZ(0,"section")(1,"ol",20)(2,"li",8),t._uU(3," Install libraries "),t._UZ(4,"tui-doc-code",21),t.qZA(),t.TgZ(5,"li",22),t._uU(6," Import "),t.TgZ(7,"code"),t._uU(8,"MaskitoDirective"),t.qZA(),t._uU(9," to your component / module "),t._UZ(10,"tui-doc-code",9),t.qZA()()()),2&o){const i=t.oxw();t.xp6(10),t.Q6J("code",i.importMaskitoExample)}}const O=(0,g.Ve)((()=>{var o;class s{constructor(){this.coreConceptsOverviewDocPage=`/${h.x.CoreConceptsOverview}`,this.importMaskitoExample=e.e(7937).then(e.t.bind(e,7937,17)),this.basicDirectiveApproach=e.e(1069).then(e.t.bind(e,1069,17)),this.customInputExample=e.e(8602).then(e.t.bind(e,8602,17)),this.nestedInputExample={TypeScript:e.e(2472).then(e.t.bind(e,2472,17)),Default:e.e(1026).then(e.t.bind(e,1026,17)),Custom:e.e(8884).then(e.t.bind(e,8884,17))},this.cvaExample={TypeScript:e.e(1541).then(e.t.bind(e,1541,17)),HTML:e.e(7383).then(e.t.bind(e,7383,17))},this.pipeExample={TypeScript:e.e(608).then(e.t.bind(e,608,17)),HTML:e.e(8307).then(e.t.bind(e,8307,17))}}}return(o=s).\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["angular-doc-page"]],standalone:!0,features:[t.jDz],decls:3,vars:0,consts:[["header","Angular","path","angular"],["pageTab","Overview"],["pageTab","Setup"],["status","warning",1,"tui-space_top-6"],[1,"tui-space_bottom-0"],["tuiLink","",3,"routerLink"],[1,"tui-space_top-12"],[1,"tui-list"],[1,"tui-list__item"],["filename","your.component.ts",3,"code"],["id","custom-input","description","See querying nested input in action","heading","Custom input",3,"content"],[1,"example","tui-space_bottom-3"],["href","https://github.com/Tinkoff/taiga-ui","tuiLink",""],[1,"example"],["example",""],[1,"example","tui-space_vertical-3"],[1,"example",3,"maskito","maskitoElement"],["id","cva","heading","CVA",3,"content","description"],["cvaDescription",""],["id","pipe","description","Format arbitrary value with the same options","heading","Pipe",3,"content"],[1,"tui-list","tui-list_ordered"],["code","npm install @maskito/{core,angular}","filename","/your/project/path>"],[1,"tui-list__item","tui-space_top-8"]],template:function(n,a){1&n&&(t.TgZ(0,"tui-doc-page",0),t.YNc(1,J,69,9,"ng-template",1),t.YNc(2,N,11,1,"ng-template",2),t.qZA())},dependencies:[d.ro,u.rH,l.TuiAddonDocModule,v.c0,v.qo,v.nj,v.f2,f.H,f.L,Z.j,Z.V,U,M,y,C],styles:[".example[_ngcontent-%COMP%]{display:block;width:20rem}"],changeDetection:0}),s})())}}]);