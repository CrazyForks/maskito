"use strict";(self.webpackChunkmaskito=self.webpackChunkmaskito||[]).push([[846],{7846:(k,l,n)=>{n.r(l),n.d(l,{NumberMaskDocModule:()=>D});var d=n(6104),c=n(3738),g=n(7169),C=n(2905),m=n(5826),s=n(8681),p=n(1673),_=n(6654),f=n(185),t=n(4788),y=n(1620),P=n(7258);function h(e,r){1&e&&(t._uU(0," This would be the content of a first tab "),t.TgZ(1,"tui-doc-example",2),t._uU(2," TODO "),t.qZA())}function T(e,r){if(1&e&&(t.TgZ(0,"tui-input",9),t.TgZ(1,"strong"),t._uU(2,"\u03c0"),t.qZA(),t._uU(3," -value "),t._UZ(4,"input",10),t.qZA()),2&e){const o=t.oxw(2);t.Q6J("formControl",o.apiPageControl),t.xp6(4),t.Q6J("maskito",o.maskitoOptions)}}function N(e,r){1&e&&(t._uU(0," A number of digits after "),t.TgZ(1,"code"),t._uU(2,"decimalSeparator"),t.qZA(),t._uU(3," . "),t.TgZ(4,"p"),t.TgZ(5,"strong"),t._uU(6,"Default:"),t.qZA(),t.TgZ(7,"code"),t._uU(8,"0"),t.qZA(),t._uU(9," (decimal part is forbidden). "),t.qZA())}function Z(e,r){1&e&&(t._uU(0," Symbol for separating fraction. "),t.TgZ(1,"p"),t.TgZ(2,"strong"),t._uU(3,"Default:"),t.qZA(),t._uU(4," comma. "),t.qZA())}function M(e,r){1&e&&(t._uU(0," If number of digits after "),t.TgZ(1,"code"),t._uU(2,"decimalSeparator"),t.qZA(),t._uU(3," is "),t.TgZ(4,"strong"),t._uU(5,"always equal"),t.qZA(),t._uU(6," to the "),t.TgZ(7,"code"),t._uU(8,"precision"),t.qZA(),t._uU(9," . "),t.TgZ(10,"p"),t.TgZ(11,"strong"),t._uU(12,"Default:"),t.qZA(),t.TgZ(13,"code"),t._uU(14,"false"),t.qZA(),t._uU(15," (number of digits can be less than precision) . "),t.qZA())}function x(e,r){1&e&&(t._uU(0," Symbols to be replaced with "),t.TgZ(1,"code"),t._uU(2,"decimalSeparator"),t.qZA(),t._uU(3," . "),t.TgZ(4,"p"),t.TgZ(5,"strong"),t._uU(6,"Default:"),t.qZA(),t.TgZ(7,"code"),t._uU(8,"['.', '\u044e', '\u0431']"),t.qZA(),t._uU(9," . "),t.qZA())}function V(e,r){1&e&&(t._uU(0," Symbol for separating thousands. "),t.TgZ(1,"p"),t.TgZ(2,"strong"),t._uU(3,"Default:"),t.qZA(),t._uU(4," non-breaking space. "),t.qZA())}function b(e,r){if(1&e){const o=t.EpF();t.TgZ(0,"tui-doc-demo",3),t.YNc(1,T,5,2,"ng-template"),t.qZA(),t.TgZ(2,"tui-doc-documentation"),t.YNc(3,N,10,0,"ng-template",4),t.NdJ("documentationPropertyValueChange",function(a){return t.CHM(o),t.oxw().precision=a})("documentationPropertyValueChange",function(){return t.CHM(o),t.oxw().updateOptions()}),t.YNc(4,Z,5,0,"ng-template",5),t.NdJ("documentationPropertyValueChange",function(a){return t.CHM(o),t.oxw().decimalSeparator=a})("documentationPropertyValueChange",function(){return t.CHM(o),t.oxw().updateOptions()}),t.YNc(5,M,16,0,"ng-template",6),t.NdJ("documentationPropertyValueChange",function(a){return t.CHM(o),t.oxw().decimalZeroPadding=a})("documentationPropertyValueChange",function(){return t.CHM(o),t.oxw().updateOptions()}),t.YNc(6,x,10,0,"ng-template",7),t.NdJ("documentationPropertyValueChange",function(a){return t.CHM(o),t.oxw().decimalPseudoSeparators=a})("documentationPropertyValueChange",function(){return t.CHM(o),t.oxw().updateOptions()}),t.YNc(7,V,5,0,"ng-template",8),t.NdJ("documentationPropertyValueChange",function(a){return t.CHM(o),t.oxw().thousandSeparator=a})("documentationPropertyValueChange",function(){return t.CHM(o),t.oxw().updateOptions()}),t.qZA()}if(2&e){const o=t.oxw();t.Q6J("control",o.apiPageControl),t.xp6(3),t.Q6J("documentationPropertyValue",o.precision),t.xp6(1),t.Q6J("documentationPropertyValue",o.decimalSeparator),t.xp6(1),t.Q6J("documentationPropertyValue",o.decimalZeroPadding),t.xp6(1),t.Q6J("documentationPropertyValues",o.decimalPseudoSeparatorsOptions)("documentationPropertyValue",o.decimalPseudoSeparators),t.xp6(1),t.Q6J("documentationPropertyValue",o.thousandSeparator)}}let U=(()=>{class e{constructor(){this.apiPageControl=new c.NI(""),this.maskitoOptions=(0,_.f)(this),this.decimalPseudoSeparatorsOptions=[[".","\u0431","\u044e"],["."]],this.precision=0,this.min=Number.MIN_SAFE_INTEGER,this.max=Number.MAX_SAFE_INTEGER,this.decimalSeparator=",",this.decimalZeroPadding=!1,this.decimalPseudoSeparators=this.decimalPseudoSeparatorsOptions[0],this.thousandSeparator="\xa0"}updateOptions(){this.maskitoOptions=(0,_.f)(this)}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["number-mask-doc"]],features:[t._Bn([(0,f.iL)({min:Number.MIN_SAFE_INTEGER})])],decls:3,vars:0,consts:[["header","Number","package","KIT"],["pageTab",""],["id","basic","heading","Basic usage"],[3,"control"],["documentationPropertyName","precision","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","decimalSeparator","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","decimalZeroPadding","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","decimalPseudoSeparators","documentationPropertyMode","input","documentationPropertyType","string[]",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","thousandSeparator","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["tuiHintContent","Only digits (+ decimal separator) are allowed",3,"formControl"],["tuiTextfield","","placeholder","3,141...","inputmode","decimal",3,"maskito"]],template:function(o,u){1&o&&(t.TgZ(0,"tui-doc-page",0),t.YNc(1,h,3,0,"ng-template",1),t.YNc(2,b,8,7,"ng-template",1),t.qZA())},directives:[m.qo,m.nj,m.f2,m.FU,m.zb,m.B7,p.K3,p.wU,s.bZ,c.JJ,c.oH,y.MB,P.r],encapsulation:2,changeDetection:0}),e})(),D=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[d.ez,c.u5,c.UX,C.U5,m.fV,s.go,p.Qf,g.Bz.forChild((0,m.Ve)(U))]]}),e})()}}]);