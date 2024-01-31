"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[3033],{997:(A,m,e)=>{e.d(m,{TuiAddonDocModule:()=>x});var f=e(4537),c=e(9439);let x=(()=>{class a{}return a.\u0275fac=function(g){return new(g||a)},a.\u0275mod=f.oAB({type:a}),a.\u0275inj=f.cJS({imports:[c.JF,c.mG,c.Lx,c.Lq,c.u4]}),a})()},3033:(A,m,e)=>{e.r(m),e.d(m,{default:()=>C});var f=e(3178),c=e(3139),x=e(997),h=e(885),a=e(2847),r=e(9900),g=e(391),u=e(1673);const P={mask:({value:t})=>{const s=Array.from(t.replace(/%/g,"")).map(()=>/\d/);return s.length?[...s,"%"]:[/\d/]}};var o=e(4537),v=e(5640);let T=(()=>{var t;class s{constructor(){this.maskitoOptions=P,this.value=""}}return(t=s).\u0275fac=function(n){return new(n||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["postfix-doc-example-1"]],standalone:!0,features:[o.jDz],decls:3,vars:4,consts:[[3,"ngModel","ngModelChange"],["inputmode","tel","tuiTextfield","",3,"maskito"]],template:function(n,p){1&n&&(o.TgZ(0,"tui-input",0),o.NdJ("ngModelChange",function(l){return p.value=l}),o._uU(1," Enter percentage amount "),o._UZ(2,"input",1),o.qZA()),2&n&&(o.Udp("max-width",20,"rem"),o.Q6J("ngModel",p.value),o.xp6(2),o.Q6J("maskito",p.maskitoOptions))},dependencies:[r.u5,r.JJ,r.On,g.ro,u.Qf,u.K3,u.wU,v.MB],encapsulation:2,changeDetection:0}),s})();var d=e(4845);const E={mask:/^\$?\d*(\.0{0,2})?$/,postprocessors:[(0,d.jX)("$"),(0,d.A7)(".00")],plugins:[(0,d.Q7)("$.00"),(0,d.hM)("$.00"),(0,d.nQ)(t=>[1,t.length-3])]};let Z=(()=>{var t;class s{constructor(){this.maskitoOptions=E,this.value=""}}return(t=s).\u0275fac=function(n){return new(n||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["postfix-doc-example-2"]],standalone:!0,features:[o.jDz],decls:3,vars:4,consts:[[3,"ngModel","ngModelChange"],["inputmode","numeric","tuiTextfield","",3,"maskito"]],template:function(n,p){1&n&&(o.TgZ(0,"tui-input",0),o.NdJ("ngModelChange",function(l){return p.value=l}),o._uU(1," Enter price "),o._UZ(2,"input",1),o.qZA()),2&n&&(o.Udp("max-width",20,"rem"),o.Q6J("ngModel",p.value),o.xp6(2),o.Q6J("maskito",p.maskitoOptions))},dependencies:[r.u5,r.JJ,r.On,g.ro,u.Qf,u.K3,u.wU,v.MB],encapsulation:2,changeDetection:0}),s})();var M=e(9439);function U(t,s){if(1&t&&(o._uU(0," This example demonstrates how to create postfix via dynamic "),o.TgZ(1,"strong")(2,"a",5),o._uU(3," pattern\xa0mask\xa0expression "),o.qZA()(),o._uU(4," . Percent symbol is a trailing fixed character, which will be automatically added when user enters the first digit. ")),2&t){const i=o.oxw();o.xp6(2),o.Q6J("routerLink",i.maskExpressionDocPage)}}function y(t,s){if(1&t&&(o.TgZ(0,"p",6),o._uU(1," This example demonstrates how to create postfix via "),o.TgZ(2,"strong")(3,"a",5),o._uU(4," postprocessor "),o.qZA()(),o._uU(5," . It provides more flexibility, and you can configure any desired behaviour. You can use built-in "),o.TgZ(6,"code"),o._uU(7,"maskitoPostfixPostprocessorGenerator"),o.qZA(),o._uU(8," or create your own. "),o.qZA(),o.TgZ(9,"tui-notification",7),o._uU(10," Don't forget that "),o.TgZ(11,"code"),o._uU(12,"mask"),o.qZA(),o._uU(13," property should be compatible with a new prefix / postfix! "),o.qZA()),2&t){const i=o.oxw();o.xp6(3),o.Q6J("routerLink",i.processorsDocPage)}}let C=(()=>{var t;class s{constructor(){this.maskExpressionDocPage=`/${c.x.MaskExpression}`,this.processorsDocPage=`/${c.x.Processors}`,this.patternMaskApproachExample1={[c.C.MaskitoOptions]:e.e(6988).then(e.t.bind(e,6988,17))},this.postprocessorApproachExample2={[c.C.MaskitoOptions]:e.e(1165).then(e.t.bind(e,1165,17))}}}return(t=s).\u0275fac=function(n){return new(n||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["postfix-doc"]],standalone:!0,features:[o.jDz],decls:13,vars:4,consts:[["header","With postfix","package","Recipes"],["id","by-pattern-mask-expression","heading","By pattern mask expression",3,"content","description"],["patternMaskApproachDescription",""],["id","by-postprocessor","heading","By postprocessor",3,"content","description"],["postprocessorApproachDescription",""],["tuiLink","",3,"routerLink"],[1,"tui-space_top-0"],["status","warning"]],template:function(n,p){if(1&n&&(o.TgZ(0,"tui-doc-page",0),o._uU(1," There are two approaches to add "),o.TgZ(2,"strong"),o._uU(3,"postfix"),o.qZA(),o._uU(4," for masked input. Every approach has its own behaviour and requires basic understanding of different core concepts. "),o.TgZ(5,"tui-doc-example",1),o.YNc(6,U,5,1,"ng-template",null,2,o.W1O),o._UZ(8,"postfix-doc-example-1"),o.qZA(),o.TgZ(9,"tui-doc-example",3),o.YNc(10,y,14,1,"ng-template",null,4,o.W1O),o._UZ(12,"postfix-doc-example-2"),o.qZA()()),2&n){const D=o.MAs(7),l=o.MAs(11);o.xp6(5),o.Q6J("content",p.patternMaskApproachExample1)("description",D),o.xp6(4),o.Q6J("content",p.postprocessorApproachExample2)("description",l)}},dependencies:[x.TuiAddonDocModule,M.qo,M.f2,h.H,h.L,a.j,a.V,f.rH,T,Z],encapsulation:2,changeDetection:0}),s})()}}]);