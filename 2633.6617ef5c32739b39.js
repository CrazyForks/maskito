"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[2633],{997:(A,l,t)=>{t.d(l,{TuiAddonDocModule:()=>f});var m=t(4537),r=t(9439);let f=(()=>{class i{}return i.\u0275fac=function(x){return new(x||i)},i.\u0275mod=m.oAB({type:i}),i.\u0275inj=m.cJS({imports:[r.JF,r.mG,r.Lx,r.Lq,r.u4]}),i})()},2633:(A,l,t)=>{t.r(l),t.d(l,{default:()=>C});var m=t(3178),r=t(3139),f=t(997),g=t(2847),i=t(885),p=t(9900),x=t(391),u=t(1673);const T={mask:({value:o})=>{const s=o.replace(/\D/g,"").length;return["$",...new Array(s||1).fill(/\d/)]}};var e=t(4537),v=t(5640);let Z=(()=>{var o;class s{constructor(){this.maskitoOptions=T,this.value=""}}return(o=s).\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["prefix-doc-example-1"]],standalone:!0,features:[e.jDz],decls:3,vars:4,consts:[[3,"ngModel","ngModelChange"],["inputmode","tel","tuiTextfield","",3,"maskito"]],template:function(n,c){1&n&&(e.TgZ(0,"tui-input",0),e.NdJ("ngModelChange",function(d){return c.value=d}),e._uU(1," Enter price "),e._UZ(2,"input",1),e.qZA()),2&n&&(e.Udp("max-width",20,"rem"),e.Q6J("ngModel",c.value),e.xp6(2),e.Q6J("maskito",c.maskitoOptions))},dependencies:[p.u5,p.JJ,p.On,x.ro,u.Qf,u.K3,u.wU,v.MB],encapsulation:2,changeDetection:0}),s})();var h=t(6730);const P={mask:/^\$?\d*$/,postprocessors:[(0,h.jX)("$")],plugins:[(0,h.Q7)("$"),(0,h.hM)("$")]};let E=(()=>{var o;class s{constructor(){this.maskitoOptions=P,this.value=""}}return(o=s).\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["prefix-doc-example-2"]],standalone:!0,features:[e.jDz],decls:3,vars:4,consts:[[3,"ngModel","ngModelChange"],["inputmode","tel","tuiTextfield","",3,"maskito"]],template:function(n,c){1&n&&(e.TgZ(0,"tui-input",0),e.NdJ("ngModelChange",function(d){return c.value=d}),e._uU(1," Enter price "),e._UZ(2,"input",1),e.qZA()),2&n&&(e.Udp("max-width",20,"rem"),e.Q6J("ngModel",c.value),e.xp6(2),e.Q6J("maskito",c.maskitoOptions))},dependencies:[p.u5,p.JJ,p.On,x.ro,u.Qf,u.K3,u.wU,v.MB],encapsulation:2,changeDetection:0}),s})();var M=t(9439);function U(o,s){if(1&o&&(e._uU(0," This example demonstrates how to create prefix via dynamic "),e.TgZ(1,"strong")(2,"a",7),e._uU(3," pattern\xa0mask\xa0expression "),e.qZA()(),e._uU(4," . Dollar symbol is a fixed character, which will be automatically added when user forgets to type it or deleted when user erase all digits. ")),2&o){const a=e.oxw();e.xp6(2),e.Q6J("routerLink",a.maskExpressionDocPage)}}function y(o,s){if(1&o&&(e.TgZ(0,"p",1),e._uU(1," This example demonstrates how to create prefix via "),e.TgZ(2,"strong")(3,"a",7),e._uU(4," postprocessor "),e.qZA()(),e._uU(5," . It provides more flexibility, and you can configure any desired behaviour. You can use built-in "),e.TgZ(6,"code"),e._uU(7,"maskitoPrefixPostprocessorGenerator"),e.qZA(),e._uU(8," or create your own. "),e.qZA(),e.TgZ(9,"tui-notification",8),e._uU(10," Don't forget that "),e.TgZ(11,"code"),e._uU(12,"mask"),e.qZA(),e._uU(13," property should be compatible with a new prefix! "),e.qZA()),2&o){const a=e.oxw();e.xp6(3),e.Q6J("routerLink",a.processorsDocPage)}}let C=(()=>{var o;class s{constructor(){this.maskExpressionDocPage=`/${r.x.MaskExpression}`,this.processorsDocPage=`/${r.x.Processors}`,this.patternMaskApproachExample1={[r.C.MaskitoOptions]:t.e(2830).then(t.t.bind(t,2830,17))},this.postprocessorApproachExample2={[r.C.MaskitoOptions]:t.e(9328).then(t.t.bind(t,9328,17))}}}return(o=s).\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["prefix-doc"]],standalone:!0,features:[e.jDz],decls:14,vars:4,consts:[["header","With prefix","package","Recipes"],[1,"tui-space_top-0"],[1,"tui-space_bottom-0"],["id","by-pattern-mask-expression","heading","By pattern mask expression",3,"content","description"],["patternMaskApproachDescription",""],["id","by-postprocessor","heading","By postprocessor",3,"content","description"],["postprocessorApproachDescription",""],["tuiLink","",3,"routerLink"],["status","warning"]],template:function(n,c){if(1&n&&(e.TgZ(0,"tui-doc-page",0)(1,"section")(2,"p",1),e._uU(3," Use prefixes to indicate things like currencies, area / phone country codes and etc. "),e.qZA(),e.TgZ(4,"p",2),e._uU(5," There are two approaches to add prefix for masked input. Every approach has its own behaviour and requires basic understanding of different core concepts. "),e.qZA()(),e.TgZ(6,"tui-doc-example",3),e.YNc(7,U,5,1,"ng-template",null,4,e.W1O),e._UZ(9,"prefix-doc-example-1"),e.qZA(),e.TgZ(10,"tui-doc-example",5),e.YNc(11,y,14,1,"ng-template",null,6,e.W1O),e._UZ(13,"prefix-doc-example-2"),e.qZA()()),2&n){const D=e.MAs(8),d=e.MAs(12);e.xp6(6),e.Q6J("content",c.patternMaskApproachExample1)("description",D),e.xp6(4),e.Q6J("content",c.postprocessorApproachExample2)("description",d)}},dependencies:[f.TuiAddonDocModule,M.qo,M.f2,g.j,g.V,i.H,i.L,m.rH,Z,E],encapsulation:2,changeDetection:0}),s})()}}]);