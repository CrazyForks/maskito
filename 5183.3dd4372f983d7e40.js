"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[5183],{997:(T,f,o)=>{o.d(f,{TuiAddonDocModule:()=>x});var m=o(4537),p=o(9439);let x=(()=>{class s{}return s.\u0275fac=function(n){return new(n||s)},s.\u0275mod=m.oAB({type:s}),s.\u0275inj=m.cJS({imports:[p.JF,p.mG,p.Lx,p.Lq,p.u4]}),s})()},1824:(T,f,o)=>{o.d(f,{I:()=>h,T:()=>s});var m=o(4537),p=o(4789),x=o(8269),c=o(1081);let s=(()=>{class n{constructor(l){this.svgOptions=l,this.staticPath=this.svgOptions.path("tuiIcon").replace("tuiIcon.svg#tuiIcon","").replace(`tuiIcon.svg${x.uJ}#tuiIcon`,"")}transform(l){if(!l)return null;switch(l){case c.X.BL:case c.X.BQ:case c.X.CW:case c.X.GF:case c.X.GP:case c.X.MF:case c.X.MQ:case c.X.NC:case c.X.RE:case c.X.YT:return`${this.staticPath}${c.X.FR}.png`;case c.X.SX:return`${this.staticPath}${c.X.NL}.png`;default:return`${this.staticPath}${l}.png`}}}return n.\u0275fac=function(l){return new(l||n)(m.Y36(p.$E,16))},n.\u0275pipe=m.Yjl({name:"tuiFlag",type:n,pure:!0}),n})(),h=(()=>{class n{}return n.\u0275fac=function(l){return new(l||n)},n.\u0275mod=m.oAB({type:n}),n.\u0275inj=m.cJS({}),n})()},5183:(T,f,o)=>{o.r(f),o.d(f,{default:()=>j});var m=o(3178),p=o(3139),x=o(997),c=o(2847),s=o(9900),h=o(1156),n=o(8940),u=o(1673),l=o(1064);const A={...(0,l.Oe)("xxx"),mask:/^\d{0,3}$/};var e=o(4537),_=o(5640);let O=(()=>{var t;class a{constructor(){this.maskitoOptions=A,this.value="xxx"}}return(t=a).\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["placeholder-doc-example-1"]],standalone:!0,features:[e.jDz],decls:3,vars:4,consts:[["tuiTextfieldCustomContent","tuiIconCreditCardLarge",3,"ngModel","ngModelChange"],["inputmode","numeric","tuiTextfield","",3,"maskito"]],template:function(i,d){1&i&&(e.TgZ(0,"tui-input",0),e.NdJ("ngModelChange",function(g){return d.value=g}),e._uU(1," Enter CVC code "),e._UZ(2,"input",1),e.qZA()),2&i&&(e.Udp("max-width",20,"rem"),e.Q6J("ngModel",d.value),e.xp6(2),e.Q6J("maskito",d.maskitoOptions))},dependencies:[s.u5,s.JJ,s.On,h.ro,u.Qf,u.K3,u.wU,_.MB,n.cn,n.B7],encapsulation:2,changeDetection:0}),a})();var v=o(1824),M=o(8654);const E="+\u2000 (\u2000\u2000\u2000) ___-____",{removePlaceholder:k,plugins:y,...U}=(0,l.Oe)(E),L={preprocessors:U.preprocessors,postprocessors:[(0,l.jX)("+1"),...U.postprocessors],mask:["+","1"," ","(",/\d/,/\d/,/\d/,")"," ",/\d/,/\d/,/\d/,"-",/\d/,/\d/,/\d/,/\d/],plugins:[...y,(0,l.L9)("focus",t=>{const a=t.value||"+1 (";(0,M.fD)(t,a+E.slice(a.length))}),(0,l.L9)("blur",t=>{const a=k(t.value);(0,M.fD)(t,"+1"===a?"":a)})]};function J(t,a){1&t&&(e._UZ(0,"img",3),e.ALo(1,"tuiFlag")),2&t&&e.Q6J("src",e.lcZ(1,1,"US"),e.LSH)}let F=(()=>{var t;class a{constructor(){this.maskitoOptions=L,this.value=""}}return(t=a).\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["placeholder-doc-example-2"]],standalone:!0,features:[e.jDz],decls:5,vars:5,consts:[[3,"tuiTextfieldCustomContent","ngModel","ngModelChange"],["inputmode","tel","tuiTextfield","",3,"maskito"],["usFlag",""],["alt","Flag of the United States","width","28",3,"src"]],template:function(i,d){if(1&i&&(e.TgZ(0,"tui-input",0),e.NdJ("ngModelChange",function(g){return d.value=g}),e._uU(1," Enter US phone number "),e._UZ(2,"input",1),e.YNc(3,J,2,3,"ng-template",null,2,e.W1O),e.qZA()),2&i){const D=e.MAs(4);e.Udp("max-width",20,"rem"),e.Q6J("tuiTextfieldCustomContent",D)("ngModel",d.value),e.xp6(2),e.Q6J("maskito",d.maskitoOptions)}},dependencies:[s.u5,s.JJ,s.On,h.ro,v.I,v.T,u.Qf,u.K3,u.wU,_.MB,n.cn,n.B7],encapsulation:2,changeDetection:0}),a})();const P=(0,l.tr)({mode:"dd/mm/yyyy",separator:"/"}),{plugins:X,...Z}=(0,l.Oe)("dd/mm/yyyy",!0),B={...P,plugins:X.concat(P.plugins||[]),preprocessors:[...Z.preprocessors,...P.preprocessors],postprocessors:[...P.postprocessors,...Z.postprocessors]};let W=(()=>{var t;class a{constructor(){this.maskitoOptions=B,this.value=""}}return(t=a).\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["placeholder-doc-example-3"]],standalone:!0,features:[e.jDz],decls:3,vars:4,consts:[["tuiTextfieldCustomContent","tuiIconCalendarLarge",3,"ngModel","ngModelChange"],["inputmode","numeric","tuiTextfield","",3,"maskito"]],template:function(i,d){1&i&&(e.TgZ(0,"tui-input",0),e.NdJ("ngModelChange",function(g){return d.value=g}),e._uU(1," Enter date "),e._UZ(2,"input",1),e.qZA()),2&i&&(e.Udp("max-width",20,"rem"),e.Q6J("ngModel",d.value),e.xp6(2),e.Q6J("maskito",d.maskitoOptions))},dependencies:[s.u5,s.JJ,s.On,h.ro,u.Qf,u.K3,u.wU,_.MB,n.cn,n.B7],encapsulation:2,changeDetection:0}),a})();var C=o(9439);function I(t,a){if(1&t&&(e.TgZ(0,"p",8),e._uU(1," This example is the simplest demonstration how to create masked input with "),e.TgZ(2,"strong"),e._uU(3,"placeholder"),e.qZA(),e._uU(4," . "),e.qZA(),e.TgZ(5,"p",9),e._uU(6," The only required prerequisite is basic understanding of "),e.TgZ(7,"a",10),e._uU(8,' "Mask\xa0expression" '),e.qZA(),e._uU(9," concept. "),e.qZA()),2&t){const r=e.oxw();e.xp6(7),e.Q6J("routerLink",r.maskExpressionDocPage)}}function R(t,a){if(1&t&&(e.TgZ(0,"p",8),e._uU(1," The following example explains return type of "),e.TgZ(2,"code"),e._uU(3,"maskitoWithPlaceholder"),e.qZA(),e._uU(4," utility \u2014 an\xa0object which partially implements "),e.TgZ(5,"code"),e._uU(6,"MaskitoOptions"),e.qZA(),e._uU(7," interface. It contains its own "),e.TgZ(8,"a",10),e._uU(9," processor and postprocessor "),e.qZA(),e._uU(10," and "),e.TgZ(11,"a",10),e._uU(12," plugins "),e.qZA(),e._uU(13," to keep caret from getting into placeholder part of the value. "),e.qZA(),e._UZ(14,"p",8),e.TgZ(15,"p",9),e._uU(16," Also, this complex example uses built-in postprocessor "),e.TgZ(17,"a",11),e._uU(18," maskitoPrefixPostprocessorGenerator "),e.qZA(),e._uU(19," from "),e.TgZ(20,"code"),e._uU(21,"@maskito/kit"),e.qZA(),e._uU(22," . "),e.qZA()),2&t){const r=e.oxw();e.xp6(8),e.Q6J("routerLink",r.processorsDocPage),e.xp6(3),e.Q6J("routerLink",r.pluginsDocPage),e.xp6(6),e.Q6J("routerLink",r.prefixDocPage)}}function $(t,a){1&t&&(e._uU(0," This last example demonstrates how to integrate "),e.TgZ(1,"code"),e._uU(2,"maskitoWithPlaceholder"),e.qZA(),e._uU(3," with any built-in mask from "),e.TgZ(4,"code"),e._uU(5,"@maskito/kit"),e.qZA(),e._uU(6," . "))}let j=(()=>{var t;class a{constructor(){this.maskExpressionDocPage=`/${p.x.MaskExpression}`,this.processorsDocPage=`/${p.x.Processors}`,this.pluginsDocPage=`/${p.x.Plugins}`,this.prefixDocPage=`/${p.x.Prefix}`,this.cvcExample1={[p.C.MaskitoOptions]:o.e(960).then(o.t.bind(o,960,17))},this.phoneExample2={[p.C.MaskitoOptions]:o.e(6304).then(o.t.bind(o,6304,17))},this.dateExample3={[p.C.MaskitoOptions]:o.e(5691).then(o.t.bind(o,5691,17))}}}return(t=a).\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["placeholder-doc"]],standalone:!0,features:[e.jDz],decls:17,vars:6,consts:[["header","With placeholder","package","Recipes"],[1,"tui-space_top-0"],["id","cvc","heading","Card Verification Code",3,"content","description"],["cvcDescription",""],["id","phone","heading","Phone",3,"content","description"],["phoneDescription",""],["id","date","heading","Date",3,"content","description"],["dateExampleDescription",""],[1,"tui-space_top-0","tui-space_bottom-2"],[1,"tui-space_top-0","tui-space_bottom-0"],["tuiLink","",3,"routerLink"],["fragment","by-postprocessor","tuiLink","",3,"routerLink"]],template:function(i,d){if(1&i&&(e.TgZ(0,"tui-doc-page",0)(1,"p",1)(2,"code"),e._uU(3,"maskitoWithPlaceholder"),e.qZA(),e._uU(4," helps to show placeholder mask characters. The placeholder character represents the fillable spot in the mask. "),e.qZA(),e.TgZ(5,"tui-doc-example",2),e.YNc(6,I,10,1,"ng-template",null,3,e.W1O),e._UZ(8,"placeholder-doc-example-1"),e.qZA(),e.TgZ(9,"tui-doc-example",4),e.YNc(10,R,23,3,"ng-template",null,5,e.W1O),e._UZ(12,"placeholder-doc-example-2"),e.qZA(),e.TgZ(13,"tui-doc-example",6),e.YNc(14,$,7,0,"ng-template",null,7,e.W1O),e._UZ(16,"placeholder-doc-example-3"),e.qZA()()),2&i){const D=e.MAs(7),g=e.MAs(11),K=e.MAs(15);e.xp6(5),e.Q6J("content",d.cvcExample1)("description",D),e.xp6(4),e.Q6J("content",d.phoneExample2)("description",g),e.xp6(4),e.Q6J("content",d.dateExample3)("description",K)}},dependencies:[x.TuiAddonDocModule,C.qo,C.f2,c.j,c.V,m.rH,O,F,W],encapsulation:2,changeDetection:0}),a})()}}]);