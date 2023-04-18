"use strict";(self.webpackChunkmaskito=self.webpackChunkmaskito||[]).push([[7139],{7139:($,Z,i)=>{i.r(Z),i.d(Z,{NumberMaskDocModule:()=>G});var M=i(6104),m=i(3738),T=i(5358),N=i(2905),s=i(7476),x=i(885),f=i(6117),l=i(1673),c=i(4278),y=i(409),e=i(4788),g=i(1620);const P=(0,c.f8)({isNegativeAllowed:!1,precision:8});var _=i(9510),h=i(7258);let C=(()=>{class t{constructor(){this.value="",this.maskitoOptions=P}onBlur(){this.value=this.value.startsWith(",")?`0${this.value}`:this.value}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["number-mask-doc-example-1"]],decls:5,vars:4,consts:[[3,"ngModel","ngModelChange"],["tuiTextfield","","placeholder","3,141...","inputmode","decimal",3,"maskito","blur"]],template:function(n,a){1&n&&(e.TgZ(0,"tui-input",0),e.NdJ("ngModelChange",function(u){return a.value=u}),e.TgZ(1,"strong"),e._uU(2,"\u03c0"),e.qZA(),e._uU(3," -value "),e.TgZ(4,"input",1),e.NdJ("blur",function(){return a.onBlur()}),e.qZA(),e.qZA()),2&n&&(e.Udp("max-width",30,"rem"),e.Q6J("ngModel",a.value),e.xp6(4),e.Q6J("maskito",a.maskitoOptions))},directives:[l.K3,l.wU,m.JJ,m.On,g.MB,_.F,h.r],encapsulation:2,changeDetection:0}),t})();const b=(0,c.f8)({decimalSeparator:",",thousandSeparator:".",precision:2});let U=(()=>{class t{constructor(){this.maskitoOptions=b,this.value=""}onBlur(){this.value=this.value.startsWith(",")?`0${this.value}`:this.value}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["number-mask-doc-example-2"]],decls:3,vars:4,consts:[[3,"ngModel","ngModelChange"],["tuiTextfield","","placeholder","1.000,42","inputmode","decimal",3,"maskito","blur"]],template:function(n,a){1&n&&(e.TgZ(0,"tui-input",0),e.NdJ("ngModelChange",function(u){return a.value=u}),e._uU(1," Type number like a German "),e.TgZ(2,"input",1),e.NdJ("blur",function(){return a.onBlur()}),e.qZA(),e.qZA()),2&n&&(e.Udp("max-width",30,"rem"),e.Q6J("ngModel",a.value),e.xp6(2),e.Q6J("maskito",a.maskitoOptions))},directives:[l.K3,l.wU,m.JJ,m.On,g.MB,_.F,h.r],encapsulation:2,changeDetection:0}),t})();const k=(0,c.f8)({decimalZeroPadding:!0,precision:2,decimalSeparator:".",isNegativeAllowed:!1});let D=(()=>{class t{constructor(){this.value="100.00",this.maskitoOptions=k}onBlur(){this.value=this.value.startsWith(".")?`0${this.value}`:this.value}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["number-mask-doc-example-3"]],decls:3,vars:4,consts:[["tuiTextfieldPrefix","$",3,"ngModel","ngModelChange"],["tuiTextfield","","inputmode","decimal",3,"maskito","blur"]],template:function(n,a){1&n&&(e.TgZ(0,"tui-input",0),e.NdJ("ngModelChange",function(u){return a.value=u}),e._uU(1," Cost "),e.TgZ(2,"input",1),e.NdJ("blur",function(){return a.onBlur()}),e.qZA(),e.qZA()),2&n&&(e.Udp("max-width",30,"rem"),e.Q6J("ngModel",a.value),e.xp6(2),e.Q6J("maskito",a.maskitoOptions))},directives:[l.K3,l.wU,f.A7,m.JJ,m.On,g.MB,_.F,h.r],encapsulation:2,changeDetection:0}),t})();var v=i(4762),A=i(4358);class d{constructor(){this.value="42",this.decimalZeroPadding=this.value.includes(".")}getMaskOptions(o){return(0,c.f8)({decimalZeroPadding:o,precision:2,decimalSeparator:".",isNegativeAllowed:!1})}onBlur(){this.value=this.value.startsWith(".")?`0${this.value}`:this.value}handleBeforeInput(o){const{inputType:n,target:a,data:r}=o;if(n.includes("delete")){const u=a,[p,K]=this.getNotEmptySelection([u.selectionStart||0,u.selectionEnd||0],n.includes("Forward")),L=this.value.slice(p,K).includes(".");this.decimalZeroPadding=this.decimalZeroPadding&&!L}else this.decimalZeroPadding=[".",",","\u0431","\u044e"].some(u=>(null==r?void 0:r.includes(u))||this.value.includes(u))}getNotEmptySelection([o,n],a){return o!==n?[o,n]:a?[o,n+1]:[Math.max(o-1,0),n]}}function J(t,o){1&t&&(e._uU(0," Use "),e.TgZ(1,"code"),e._uU(2,"precision"),e.qZA(),e._uU(3," parameter to configure the number of digits after decimal separator. "))}function E(t,o){1&t&&(e._uU(0," Use "),e.TgZ(1,"code"),e._uU(2,"decimalSeparator"),e.qZA(),e._uU(3," and "),e.TgZ(4,"code"),e._uU(5,"thousandSeparator"),e.qZA(),e._uU(6," to get mask with locale specific representation of numbers. "))}function O(t,o){1&t&&(e._uU(0," Set "),e.TgZ(1,"code"),e._uU(2,"decimalZeroPadding: true"),e.qZA(),e._uU(3," to always show trailing zeroes. "))}function S(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1," You can change options on the fly to build complex logic. "),e.qZA(),e.TgZ(2,"div"),e._uU(3," This example shows how to initially disable "),e.TgZ(4,"code"),e._uU(5,"decimalZeroPadding"),e.qZA(),e._uU(6," and enable it only after user inserts decimal separator. "),e.qZA())}function Q(t,o){if(1&t&&(e._uU(0," Use "),e.TgZ(1,"code"),e._uU(2,"maskitoNumberOptionsGenerator"),e.qZA(),e._uU(3," to create a mask for entering a formatted number. "),e.TgZ(4,"tui-notification",2),e._uU(5," Despite the name of the mask, element's raw value is still string. "),e.TgZ(6,"p"),e._uU(7," Use "),e.TgZ(8,"code"),e._uU(9,"maskitoParseNumber"),e.qZA(),e._uU(10," to get number-type value. "),e.qZA(),e._UZ(11,"tui-doc-code",3),e.qZA(),e.TgZ(12,"tui-doc-example",4),e.YNc(13,J,4,0,"ng-template",null,5,e.W1O),e._UZ(15,"number-mask-doc-example-1"),e.qZA(),e.TgZ(16,"tui-doc-example",6),e.YNc(17,E,7,0,"ng-template",null,7,e.W1O),e.TgZ(19,"tui-notification",8),e._uU(20," In Germany people use comma as decimal separator and dot for thousands "),e.qZA(),e._UZ(21,"number-mask-doc-example-2"),e.qZA(),e.TgZ(22,"tui-doc-example",9),e.YNc(23,O,4,0,"ng-template",null,10,e.W1O),e._UZ(25,"number-mask-doc-example-3"),e.qZA(),e.TgZ(26,"tui-doc-example",11),e.YNc(27,S,7,0,"ng-template",null,12,e.W1O),e._UZ(29,"number-mask-doc-example-4"),e.qZA()),2&t){const n=e.MAs(14),a=e.MAs(18),r=e.MAs(24),u=e.MAs(28),p=e.oxw();e.xp6(11),e.Q6J("code",p.maskitoParseNumberDemo),e.xp6(1),e.Q6J("content",p.highPrecisionExample1)("description",n),e.xp6(4),e.Q6J("content",p.separatorsExample2)("description",a),e.xp6(3),e.Udp("max-width",30,"rem"),e.xp6(3),e.Q6J("content",p.decimalZeroPaddingExample3)("description",r),e.xp6(4),e.Q6J("content",p.decimalZeroPaddingExample4)("description",u)}}function q(t,o){if(1&t&&(e.TgZ(0,"tui-input",21),e._uU(1," Enter a number "),e._UZ(2,"input",22),e.qZA()),2&t){const n=e.oxw(2);e.Q6J("formControl",n.apiPageControl),e.xp6(2),e.Q6J("maskito",n.maskitoOptions)}}function w(t,o){1&t&&(e._uU(0," Allows to input negative sign (minus). "),e.TgZ(1,"p"),e.TgZ(2,"strong"),e._uU(3,"Default:"),e.qZA(),e.TgZ(4,"code"),e._uU(5,"true"),e.qZA(),e._uU(6," . "),e.qZA())}function B(t,o){1&t&&(e._uU(0," The greatest permitted value. "),e.TgZ(1,"p"),e.TgZ(2,"strong"),e._uU(3,"Default:"),e.qZA(),e.TgZ(4,"code"),e._uU(5,"Number.MAX_SAFE_INTEGER"),e.qZA(),e._uU(6," . "),e.qZA())}function H(t,o){1&t&&(e._uU(0," A number of digits after "),e.TgZ(1,"code"),e._uU(2,"decimalSeparator"),e.qZA(),e._uU(3," . "),e.TgZ(4,"p"),e._uU(5," Use "),e.TgZ(6,"code"),e._uU(7,"Infinity"),e.qZA(),e._uU(8," for an untouched decimal part. "),e.qZA(),e.TgZ(9,"p"),e.TgZ(10,"strong"),e._uU(11,"Default:"),e.qZA(),e.TgZ(12,"code"),e._uU(13,"0"),e.qZA(),e._uU(14," (decimal part is forbidden). "),e.qZA())}function F(t,o){1&t&&(e._uU(0," Symbol for separating fraction. "),e.TgZ(1,"p"),e.TgZ(2,"strong"),e._uU(3,"Default:"),e.qZA(),e._uU(4," dot. "),e.qZA())}function Y(t,o){1&t&&(e._uU(0," Symbols to be replaced with "),e.TgZ(1,"code"),e._uU(2,"decimalSeparator"),e.qZA(),e._uU(3," . "),e.TgZ(4,"p"),e.TgZ(5,"strong"),e._uU(6,"Default:"),e.qZA(),e.TgZ(7,"code"),e._uU(8,"['.', '\u044e', '\u0431']"),e.qZA(),e._uU(9," . "),e.qZA())}function I(t,o){1&t&&(e._uU(0," If number of digits after "),e.TgZ(1,"code"),e._uU(2,"decimalSeparator"),e.qZA(),e._uU(3," is "),e.TgZ(4,"strong"),e._uU(5,"always equal"),e.qZA(),e._uU(6," to the "),e.TgZ(7,"code"),e._uU(8,"precision"),e.qZA(),e._uU(9," . "),e.TgZ(10,"p"),e.TgZ(11,"strong"),e._uU(12,"Default:"),e.qZA(),e.TgZ(13,"code"),e._uU(14,"false"),e.qZA(),e._uU(15," (number of digits can be less than precision) . "),e.qZA())}function z(t,o){1&t&&(e._uU(0," Symbol for separating thousands. "),e.TgZ(1,"p"),e.TgZ(2,"strong"),e._uU(3,"Default:"),e.qZA(),e._uU(4," non-breaking space. "),e.qZA())}function W(t,o){if(1&t){const n=e.EpF();e.TgZ(0,"tui-doc-demo",13),e.YNc(1,q,3,2,"ng-template"),e.qZA(),e.TgZ(2,"tui-doc-documentation"),e.YNc(3,w,7,0,"ng-template",14),e.NdJ("documentationPropertyValueChange",function(r){return e.CHM(n),e.oxw().isNegativeAllowed=r})("documentationPropertyValueChange",function(){return e.CHM(n),e.oxw().updateOptions()}),e.YNc(4,B,7,0,"ng-template",15),e.NdJ("documentationPropertyValueChange",function(r){return e.CHM(n),e.oxw().max=r})("documentationPropertyValueChange",function(){return e.CHM(n),e.oxw().updateOptions()}),e.YNc(5,H,15,0,"ng-template",16),e.NdJ("documentationPropertyValueChange",function(r){return e.CHM(n),e.oxw().precision=r})("documentationPropertyValueChange",function(){return e.CHM(n),e.oxw().updateOptions()}),e.YNc(6,F,5,0,"ng-template",17),e.NdJ("documentationPropertyValueChange",function(r){return e.CHM(n),e.oxw().decimalSeparator=r})("documentationPropertyValueChange",function(){return e.CHM(n),e.oxw().updateOptions()}),e.YNc(7,Y,10,0,"ng-template",18),e.NdJ("documentationPropertyValueChange",function(r){return e.CHM(n),e.oxw().decimalPseudoSeparators=r})("documentationPropertyValueChange",function(){return e.CHM(n),e.oxw().updateOptions()}),e.YNc(8,I,16,0,"ng-template",19),e.NdJ("documentationPropertyValueChange",function(r){return e.CHM(n),e.oxw().decimalZeroPadding=r})("documentationPropertyValueChange",function(){return e.CHM(n),e.oxw().updateOptions()}),e.YNc(9,z,5,0,"ng-template",20),e.NdJ("documentationPropertyValueChange",function(r){return e.CHM(n),e.oxw().thousandSeparator=r})("documentationPropertyValueChange",function(){return e.CHM(n),e.oxw().updateOptions()}),e.qZA()}if(2&t){const n=e.oxw();e.Q6J("control",n.apiPageControl),e.xp6(3),e.Q6J("documentationPropertyValue",n.isNegativeAllowed),e.xp6(1),e.Q6J("documentationPropertyValue",n.max),e.xp6(1),e.Q6J("documentationPropertyValues",n.precisionOptions)("documentationPropertyValue",n.precision),e.xp6(1),e.Q6J("documentationPropertyValue",n.decimalSeparator),e.xp6(1),e.Q6J("documentationPropertyValues",n.decimalPseudoSeparatorsOptions)("documentationPropertyValue",n.decimalPseudoSeparators),e.xp6(1),e.Q6J("documentationPropertyValue",n.decimalZeroPadding),e.xp6(1),e.Q6J("documentationPropertyValue",n.thousandSeparator)}}d.\u0275fac=function(o){return new(o||d)},d.\u0275cmp=e.Xpm({type:d,selectors:[["number-mask-doc-example-4"]],decls:3,vars:5,consts:[["tuiLabel","Enable decimal zero padding by typing dot"],[3,"tuiTextfieldLabelOutside","ngModel","ngModelChange"],["tuiTextfield","","inputmode","decimal",3,"maskito","beforeinput.capture","blur"]],template:function(o,n){1&o&&(e.TgZ(0,"label",0),e.TgZ(1,"tui-input",1),e.NdJ("ngModelChange",function(r){return n.value=r}),e.TgZ(2,"input",2),e.NdJ("beforeinput.capture",function(r){return n.handleBeforeInput(r)})("blur",function(){return n.onBlur()}),e.qZA(),e.qZA(),e.qZA()),2&o&&(e.xp6(1),e.Udp("max-width",30,"rem"),e.Q6J("tuiTextfieldLabelOutside",!0)("ngModel",n.value),e.xp6(1),e.Q6J("maskito",n.getMaskOptions(n.decimalZeroPadding)))},directives:[l.K3,l.wU,f.xT,m.JJ,m.On,g.MB,_.F,h.r],encapsulation:2,changeDetection:0}),(0,v.gn)([A.UM],d.prototype,"getMaskOptions",null);let X=(()=>{class t{constructor(){this.maskitoParseNumberDemo=i.e(8507).then(i.t.bind(i,8507,17)),this.highPrecisionExample1={MaskitoOptions:i.e(3533).then(i.t.bind(i,3533,17))},this.separatorsExample2={MaskitoOptions:i.e(1335).then(i.t.bind(i,1335,17))},this.decimalZeroPaddingExample3={MaskitoOptions:i.e(820).then(i.t.bind(i,820,17))},this.decimalZeroPaddingExample4={MaskitoOptions:i.e(677).then(i.t.bind(i,677,17)),Component:i.e(739).then(i.t.bind(i,739,17))},this.apiPageControl=new m.NI(""),this.maskitoOptions=(0,c.f8)(this),this.decimalPseudoSeparatorsOptions=[[".",",","\u0431","\u044e"],["."],[","]],this.precisionOptions=[0,1,2,5,10,1/0],this.precision=0,this.isNegativeAllowed=!0,this.max=Number.MAX_SAFE_INTEGER,this.decimalSeparator=".",this.decimalZeroPadding=!1,this.decimalPseudoSeparators=this.decimalPseudoSeparatorsOptions[0],this.thousandSeparator="\xa0"}updateOptions(){this.maskitoOptions=(0,c.f8)(this)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["number-mask-doc"]],features:[e._Bn([(0,y.iL)({min:Number.MIN_SAFE_INTEGER})])],decls:3,vars:0,consts:[["header","Number","package","KIT"],["pageTab",""],[1,"tui-space_top-4"],[3,"code"],["id","high-precision","heading","High precision",3,"content","description"],["precisionDescription",""],["id","separators","heading","Separators",3,"content","description"],["separatorsDescription",""],[1,"tui-space_bottom-4"],["id","decimal-zero-padding","heading","Decimal zero padding",3,"content","description"],["decimalZeroPaddingDescription",""],["id","dynamic-decimal-zero-padding","heading","Dynamic decimal zero padding",3,"content","description"],["dynamicDecimalZeroPaddingDescription",""],[3,"control"],["documentationPropertyName","isNegativeAllowed","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","max","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","precision","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","decimalSeparator","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","decimalPseudoSeparators","documentationPropertyMode","input","documentationPropertyType","string[]",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","decimalZeroPadding","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","thousandSeparator","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["tuiHintContent","Only digits (+ decimal separator) are allowed",3,"formControl"],["tuiTextfield","","inputmode","decimal",3,"maskito"]],template:function(n,a){1&n&&(e.TgZ(0,"tui-doc-page",0),e.YNc(1,Q,30,11,"ng-template",1),e.YNc(2,W,10,10,"ng-template",1),e.qZA())},directives:[s.qo,s.nj,x.Ls,s.c0,s.f2,C,U,D,d,s.FU,s.zb,s.B7,l.K3,l.wU,m.JJ,m.oH,g.MB,_.F,h.r],encapsulation:2,changeDetection:0}),t})(),G=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[M.ez,m.u5,m.UX,N.U5,s.fV,l.Qf,x.Hi,f.cn,T.Bz.forChild((0,s.Ve)(X))]]}),t})()}}]);