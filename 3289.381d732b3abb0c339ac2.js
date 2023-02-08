"use strict";(self.webpackChunkmaskito=self.webpackChunkmaskito||[]).push([[3289],{3289:(E,u,e)=>{e.r(u),e.d(u,{PhoneDocModule:()=>A});var x=e(6104),a=e(3738),p=e(7169),g=e(2905),l=e(6250),d=e(2847),m=e(6117),r=e(1673),o=e(4788);const U={mask:["+","1"," ","(",/\d/,/\d/,/\d/,")"," ",/\d/,/\d/,/\d/,"-",/\d/,/\d/,/\d/,/\d/]};var h=e(1620),f=e(7258);let P=(()=>{class t{constructor(){this.maskitoOptions=U}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["phone-doc-example-1"]],decls:3,vars:3,consts:[["ngModel","+1 (212) 555-2368","tuiTextfieldCustomContent","tuiIconCallLarge"],["tuiTextfield","","inputmode","tel",3,"maskito"]],template:function(n,i){1&n&&(o.TgZ(0,"tui-input",0),o._uU(1," Enter a phone number "),o._UZ(2,"input",1),o.qZA()),2&n&&(o.Udp("max-width",20,"rem"),o.xp6(2),o.Q6J("maskito",i.maskitoOptions))},directives:[r.K3,r.wU,a.JJ,a.On,m.B7,h.MB,f.r],encapsulation:2,changeDetection:0}),t})();const T={mask:["+","7"," ","(",/\d/,/\d/,/\d/,")"," ",/\d/,/\d/,/\d/,"-",/\d/,/\d/,"-",/\d/,/\d/],postprocessor:({value:t,selection:s},n)=>{const c="+7 ".length;return t.length<c&&n.value?{selection:[c,c],value:"+7 "}:{selection:s,value:t}}};let Z=(()=>{class t{constructor(){this.maskitoOptions=T,this.control=new a.NI("")}onFocus(){this.control.value||this.control.patchValue("+7 ")}onBlur(){"+7 "===this.control.value&&this.control.patchValue("")}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["phone-doc-example-2"]],decls:3,vars:4,consts:[["tuiTextfieldCustomContent","tuiIconCallLarge",3,"formControl"],["tuiTextfield","","autocomplete","tel","inputmode","tel",3,"maskito","focus","blur"]],template:function(n,i){1&n&&(o.TgZ(0,"tui-input",0),o._uU(1," Enter a phone number "),o.TgZ(2,"input",1),o.NdJ("focus",function(){return i.onFocus()})("blur",function(){return i.onBlur()}),o.qZA(),o.qZA()),2&n&&(o.Udp("max-width",20,"rem"),o.Q6J("formControl",i.control),o.xp6(2),o.Q6J("maskito",i.maskitoOptions))},directives:[r.K3,r.wU,m.B7,a.JJ,a.oH,h.MB,f.r],encapsulation:2,changeDetection:0}),t})();function D(t,s){if(1&t&&(o._uU(0," The following example demonstrates more complex mask. It shows how to make a country-prefix not-removable. It is achieved by "),o.TgZ(1,"strong"),o._uU(2,"postprocessor"),o.qZA(),o._uU(3," . Read more about it in section "),o.TgZ(4,"a",2),o._uU(5,' "Processors" '),o.qZA(),o._uU(6," . ")),2&t){const n=o.oxw();o.xp6(4),o.Q6J("routerLink",n.processorsDocPage)}}let v=(()=>{class t{constructor(){this.maskExpressionDocPage="/core-concepts/mask-expression",this.processorsDocPage="/core-concepts/processors",this.usPhoneExample1={MaskitoOptions:e.e(793).then(e.t.bind(e,793,17))},this.ruPhoneExample2={MaskitoOptions:e.e(9112).then(e.t.bind(e,135,17)),TypeScript:e.e(9695).then(e.t.bind(e,9695,17)),HTML:e.e(7440).then(e.t.bind(e,7440,17))}}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["phone-doc"]],decls:20,vars:4,consts:[["header","Phone","package","Recipes"],[1,"tui-space_top-0"],["tuiLink","",3,"routerLink"],[1,"tui-space_bottom-0"],["id","us","heading","United States",3,"content"],["id","ru","heading","Russian",3,"content","description"],["ruMaskDescription",""]],template:function(n,i){if(1&n&&(o.TgZ(0,"tui-doc-page",0),o.TgZ(1,"p",1),o._uU(2," The creation of a mask for phone number is simple. The only required knowledge is the "),o.TgZ(3,"strong"),o._uU(4,"pattern\xa0mask\xa0expression"),o.qZA(),o._uU(5," with "),o.TgZ(6,"strong"),o._uU(7,"fixed\xa0characters"),o.qZA(),o._uU(8," . Read more about it in section "),o.TgZ(9,"a",2),o._uU(10,' "Mask\xa0expression" '),o.qZA(),o._uU(11," . "),o.qZA(),o.TgZ(12,"p",3),o._uU(13," This page demonstrates some examples how to create phone number mask for different countries. "),o.qZA(),o.TgZ(14,"tui-doc-example",4),o._UZ(15,"phone-doc-example-1"),o.qZA(),o.TgZ(16,"tui-doc-example",5),o.YNc(17,D,7,1,"ng-template",null,6,o.W1O),o._UZ(19,"phone-doc-example-2"),o.qZA(),o.qZA()),2&n){const c=o.MAs(18);o.xp6(9),o.Q6J("routerLink",i.maskExpressionDocPage),o.xp6(5),o.Q6J("content",i.usPhoneExample1),o.xp6(2),o.Q6J("content",i.ruPhoneExample2)("description",c)}},directives:[l.qo,d.V,p.yS,l.f2,P,Z],encapsulation:2,changeDetection:0}),t})(),A=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[x.ez,a.u5,a.UX,g.U5,l.fV,r.Qf,d.j,m.cn,p.Bz.forChild((0,l.Ve)(v))]]}),t})()}}]);