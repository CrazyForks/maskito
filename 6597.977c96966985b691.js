"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[6597],{997:(O,m,n)=>{n.d(m,{TuiAddonDocModule:()=>d});var h=n(4537),i=n(9439);let d=(()=>{class c{}return c.\u0275fac=function(f){return new(f||c)},c.\u0275mod=h.oAB({type:c}),c.\u0275inj=h.cJS({imports:[i.JF,i.mG,i.Lx,i.Lq,i.u4]}),c})()},6597:(O,m,n)=>{n.r(m),n.d(m,{PlaceholderDocModule:()=>Y});var h=n(8692),i=n(9900),d=n(3178),U=n(997),c=n(2497),g=n(1824),f=n(2847),x=n(8940),p=n(1673),D=n(4707),e=n(4537),M=n(9439),u=n(8225);const k=Object.assign(Object.assign({},(0,u.Oe)("xxx")),{mask:/^\d{0,3}$/});var P=n(7258),Z=n(5640);const J=["inputRef"];let Q=(()=>{class t{constructor(){this.maskitoOptions=k,this.value="xxx"}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["placeholder-doc-example-1"]],viewQuery:function(o,a){if(1&o&&e.Gf(J,5,e.SBq),2&o){let s;e.iGM(s=e.CRH())&&(a.inputRef=s.first)}},decls:4,vars:4,consts:[["tuiTextfieldCustomContent","tuiIconCreditCardLarge",3,"ngModel","ngModelChange"],["inputmode","numeric","tuiTextfield","",3,"maskito"],["inputRef",""]],template:function(o,a){1&o&&(e.TgZ(0,"tui-input",0),e.NdJ("ngModelChange",function(r){return a.value=r}),e._uU(1," Enter CVC code "),e._UZ(2,"input",1,2),e.qZA()),2&o&&(e.Udp("max-width",20,"rem"),e.Q6J("ngModel",a.value),e.xp6(2),e.Q6J("maskito",a.maskitoOptions))},dependencies:[i.JJ,i.On,P.r,p.K3,p.wU,Z.MB,x.B7],encapsulation:2,changeDetection:0}),t})();var v,C=n(4911);const A="+\u2000 (\u2000\u2000\u2000) ___-____",{removePlaceholder:L,plugins:R}=v=(0,u.Oe)(A),E=(0,C._T)(v,["removePlaceholder","plugins"]),B={preprocessors:E.preprocessors,postprocessors:[(0,u.jX)("+1"),...E.postprocessors],plugins:R,mask:["+","1"," ","(",/\d/,/\d/,/\d/,")"," ",/\d/,/\d/,/\d/,"-",/\d/,/\d/,/\d/,/\d/]},F=["inputRef"];function G(t,l){1&t&&(e._UZ(0,"img",4),e.ALo(1,"tuiFlag")),2&t&&e.Q6J("src",e.lcZ(1,1,"US"),e.LSH)}let W=(()=>{class t{constructor(){this.maskitoOptions=B,this.value=""}onBlur(){const o=L(this.value);this.value="+1"===o?"":o}onFocus(){const o=this.value||"+1 (";this.value=o+A.slice(o.length)}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["placeholder-doc-example-2"]],viewQuery:function(o,a){if(1&o&&e.Gf(F,5,e.SBq),2&o){let s;e.iGM(s=e.CRH())&&(a.inputRef=s.first)}},decls:6,vars:5,consts:[[3,"tuiTextfieldCustomContent","ngModel","ngModelChange"],["inputmode","tel","tuiTextfield","",3,"maskito","blur","focus"],["inputRef",""],["usFlag",""],["alt","Flag of the United States","width","28",3,"src"]],template:function(o,a){if(1&o&&(e.TgZ(0,"tui-input",0),e.NdJ("ngModelChange",function(r){return a.value=r}),e._uU(1," Enter US phone number "),e.TgZ(2,"input",1,2),e.NdJ("blur",function(){return a.onBlur()})("focus",function(){return a.onFocus()}),e.qZA(),e.YNc(4,G,2,3,"ng-template",null,3,e.W1O),e.qZA()),2&o){const s=e.MAs(5);e.Udp("max-width",20,"rem"),e.Q6J("tuiTextfieldCustomContent",s)("ngModel",a.value),e.xp6(2),e.Q6J("maskito",a.maskitoOptions)}},dependencies:[i.JJ,i.On,P.r,p.K3,p.wU,Z.MB,x.B7,g.T],encapsulation:2,changeDetection:0}),t})();const T=(0,u.tr)({mode:"dd/mm/yyyy",separator:"/"}),_=(0,u.Oe)("dd/mm/yyyy",!0),{plugins:S}=_,y=(0,C._T)(_,["plugins"]),N=Object.assign(Object.assign({},T),{plugins:S.concat(T.plugins||[]),preprocessors:[...y.preprocessors,...T.preprocessors],postprocessors:[...T.postprocessors,...y.postprocessors]}),H=["inputRef"];let I=(()=>{class t{constructor(){this.maskitoOptions=N,this.value=""}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["placeholder-doc-example-3"]],viewQuery:function(o,a){if(1&o&&e.Gf(H,5,e.SBq),2&o){let s;e.iGM(s=e.CRH())&&(a.inputRef=s.first)}},decls:4,vars:4,consts:[["tuiTextfieldCustomContent","tuiIconCalendarLarge",3,"ngModel","ngModelChange"],["inputmode","numeric","tuiTextfield","",3,"maskito"],["inputRef",""]],template:function(o,a){1&o&&(e.TgZ(0,"tui-input",0),e.NdJ("ngModelChange",function(r){return a.value=r}),e._uU(1," Enter date "),e._UZ(2,"input",1,2),e.qZA()),2&o&&(e.Udp("max-width",20,"rem"),e.Q6J("ngModel",a.value),e.xp6(2),e.Q6J("maskito",a.maskitoOptions))},dependencies:[i.JJ,i.On,P.r,p.K3,p.wU,Z.MB,x.B7],encapsulation:2,changeDetection:0}),t})();function V(t,l){if(1&t&&(e.TgZ(0,"p",8),e._uU(1," This example is the simplest demonstration how to create masked input with "),e.TgZ(2,"strong"),e._uU(3,"placeholder"),e.qZA(),e._uU(4," . "),e.qZA(),e.TgZ(5,"p",9),e._uU(6," The only required prerequisite is basic understanding of "),e.TgZ(7,"a",10),e._uU(8,' "Mask\xa0expression" '),e.qZA(),e._uU(9," concept. "),e.qZA()),2&t){const o=e.oxw();e.xp6(7),e.Q6J("routerLink",o.maskExpressionDocPage)}}function K(t,l){if(1&t&&(e.TgZ(0,"p",8),e._uU(1," The following example explains return type of "),e.TgZ(2,"code"),e._uU(3,"maskitoWithPlaceholder"),e.qZA(),e._uU(4," utility \u2014 an\xa0object which partially implements "),e.TgZ(5,"code"),e._uU(6,"MaskitoOptions"),e.qZA(),e._uU(7," interface. It contains its own "),e.TgZ(8,"a",10),e._uU(9," processor and postprocessor "),e.qZA(),e._uU(10," and "),e.TgZ(11,"a",10),e._uU(12," plugins "),e.qZA(),e._uU(13," to keep caret from getting into placeholder part of the value. "),e.qZA(),e._UZ(14,"p",8),e.TgZ(15,"p",9),e._uU(16," Also, this complex example uses built-in postprocessor "),e.TgZ(17,"a",11),e._uU(18," maskitoPrefixPostprocessorGenerator "),e.qZA(),e._uU(19," from "),e.TgZ(20,"code"),e._uU(21,"@maskito/kit"),e.qZA(),e._uU(22," . "),e.qZA()),2&t){const o=e.oxw();e.xp6(8),e.Q6J("routerLink",o.processorsDocPage),e.xp6(3),e.Q6J("routerLink",o.pluginsDocPage),e.xp6(6),e.Q6J("routerLink",o.prefixDocPage)}}function X(t,l){1&t&&(e._uU(0," This last example demonstrates how to integrate "),e.TgZ(1,"code"),e._uU(2,"maskitoWithPlaceholder"),e.qZA(),e._uU(3," with any built-in mask from "),e.TgZ(4,"code"),e._uU(5,"@maskito/kit"),e.qZA(),e._uU(6," . "))}let $=(()=>{class t{constructor(){this.maskExpressionDocPage="/core-concepts/mask-expression",this.processorsDocPage="/core-concepts/processors",this.pluginsDocPage="/core-concepts/plugins",this.prefixDocPage="/recipes/prefix",this.cvcExample1={[D.C.MaskitoOptions]:n.e(960).then(n.t.bind(n,960,17))},this.phoneExample2={[D.C.MaskitoOptions]:n.e(6304).then(n.t.bind(n,6304,17)),[D.C.Angular]:n.e(7948).then(n.t.bind(n,7948,17))},this.dateExample3={[D.C.MaskitoOptions]:n.e(5691).then(n.t.bind(n,5691,17))}}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["placeholder-doc"]],decls:17,vars:6,consts:[["header","With placeholder","package","Recipes"],[1,"tui-space_top-0"],["id","cvc","heading","Card Verification Code",3,"content","description"],["cvcDescription",""],["id","phone","heading","Phone",3,"content","description"],["phoneDescription",""],["id","date","heading","Date",3,"content","description"],["dateExampleDescription",""],[1,"tui-space_top-0","tui-space_bottom-2"],[1,"tui-space_top-0","tui-space_bottom-0"],["tuiLink","",3,"routerLink"],["fragment","by-postprocessor","tuiLink","",3,"routerLink"]],template:function(o,a){if(1&o&&(e.TgZ(0,"tui-doc-page",0)(1,"p",1)(2,"code"),e._uU(3,"maskitoWithPlaceholder"),e.qZA(),e._uU(4," helps to show placeholder mask characters. The placeholder character represents the fillable spot in the mask. "),e.qZA(),e.TgZ(5,"tui-doc-example",2),e.YNc(6,V,10,1,"ng-template",null,3,e.W1O),e._UZ(8,"placeholder-doc-example-1"),e.qZA(),e.TgZ(9,"tui-doc-example",4),e.YNc(10,K,23,3,"ng-template",null,5,e.W1O),e._UZ(12,"placeholder-doc-example-2"),e.qZA(),e.TgZ(13,"tui-doc-example",6),e.YNc(14,X,7,0,"ng-template",null,7,e.W1O),e._UZ(16,"placeholder-doc-example-3"),e.qZA()()),2&o){const s=e.MAs(7),r=e.MAs(11),z=e.MAs(15);e.xp6(5),e.Q6J("content",a.cvcExample1)("description",s),e.xp6(4),e.Q6J("content",a.phoneExample2)("description",r),e.xp6(4),e.Q6J("content",a.dateExample3)("description",z)}},dependencies:[M.qo,M.f2,f.V,d.rH,Q,W,I],encapsulation:2,changeDetection:0}),t})(),Y=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[h.ez,i.u5,U.TuiAddonDocModule,g.I,p.Qf,f.j,x.cn,d.Bz.forChild((0,c.Ve)($))]}),t})()}}]);