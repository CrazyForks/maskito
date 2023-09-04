"use strict";(self.webpackChunkmaskito=self.webpackChunkmaskito||[]).push([[5828],{70997:function(t,e,n){n.d(e,{fV:function(){return i}});var o=n(74788),a=n(41823);let i=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[a.JF,a.mG,a.Lx,a.Lq,a.u4]}),t})()},95828:function(t,e,n){n.r(e),n.d(e,{DateMaskDocModule:function(){return q}});var o=n(12057),a=n(87862),i=n(2586),r=n(52494),u=n(70997),c=n(44427),d=n(82847),s=n(79588),m=n(21673),p=n(14707),l=n(10897),y=n(74788),g=n(41823),f=(0,l.tr)({mode:"yyyy/mm/dd",separator:"/"}),h=n(94853),x=n(49510),Z=n(47258);let P=(()=>{class t{constructor(){this.value="2005/10/21",this.filler="yyyy/mm/dd",this.mask=f}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=y.Xpm({type:t,selectors:[["date-mask-doc-example-1"]],decls:3,vars:5,consts:[["tuiTextfieldCustomContent","tuiIconCalendarLarge",3,"tuiTextfieldFiller","ngModel","ngModelChange"],["tuiTextfield","","inputmode","decimal",3,"maskito"]],template:function(t,e){1&t&&(y.TgZ(0,"tui-input",0),y.NdJ("ngModelChange",function(t){return e.value=t}),y._uU(1," Localization "),y._UZ(2,"input",1),y.qZA()),2&t&&(y.Udp("max-width",30,"rem"),y.Q6J("tuiTextfieldFiller",e.filler)("ngModel",e.value),y.xp6(2),y.Q6J("maskito",e.mask))},directives:[m.K3,m.wU,s.B7,s.kD,a.JJ,a.On,h.MB,x.F,Z.r],encapsulation:2,changeDetection:0}),t})();var C=(0,l.tr)({mode:"dd/mm/yyyy",min:new Date(2e3,0,1),max:new Date(2025,4,10)});let M=(()=>{class t{constructor(){this.value="20.01.2023",this.filler="dd.mm.yyyy",this.mask=C}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=y.Xpm({type:t,selectors:[["date-mask-doc-example-2"]],decls:3,vars:5,consts:[["tuiTextfieldCustomContent","tuiIconCalendarLarge",3,"tuiTextfieldFiller","ngModel","ngModelChange"],["tuiTextfield","","inputmode","decimal",3,"maskito"]],template:function(t,e){1&t&&(y.TgZ(0,"tui-input",0),y.NdJ("ngModelChange",function(t){return e.value=t}),y._uU(1," Date "),y._UZ(2,"input",1),y.qZA()),2&t&&(y.Udp("max-width",30,"rem"),y.Q6J("tuiTextfieldFiller",e.filler)("ngModel",e.value),y.xp6(2),y.Q6J("maskito",e.mask))},directives:[m.K3,m.wU,s.B7,s.kD,a.JJ,a.On,h.MB,x.F,Z.r],encapsulation:2,changeDetection:0}),t})();function U(t,e){1&t&&(y._uU(0," Use "),y.TgZ(1,"code"),y._uU(2,"mode"),y.qZA(),y._uU(3," and "),y.TgZ(4,"code"),y._uU(5,"separator"),y.qZA(),y._uU(6," properties to get a mask with a locale specific representation of dates. "))}function T(t,e){1&t&&(y._uU(0," Properties "),y.TgZ(1,"code"),y._uU(2,"min"),y.qZA(),y._uU(3," and "),y.TgZ(4,"code"),y._uU(5,"max"),y.qZA(),y._uU(6," allow you to set the earliest and the latest available dates. They accept native "),y.TgZ(7,"a",6),y._uU(8," Date "),y.qZA(),y._uU(9," . "))}function _(t,e){if(1&t&&(y._uU(0," Use "),y.TgZ(1,"code"),y._uU(2,"maskitoDateOptionsGenerator"),y.qZA(),y._uU(3," to create a mask for date input. "),y.TgZ(4,"tui-doc-example",2),y.YNc(5,U,7,0,"ng-template",null,3,y.W1O),y._UZ(7,"date-mask-doc-example-1"),y.qZA(),y.TgZ(8,"tui-doc-example",4),y.YNc(9,T,10,0,"ng-template",null,5,y.W1O),y._UZ(11,"date-mask-doc-example-2"),y.qZA()),2&t){const t=y.MAs(6),e=y.MAs(10),n=y.oxw();y.xp6(4),y.Q6J("content",n.dateLocalization)("description",t),y.xp6(4),y.Q6J("content",n.dateMinMax)("description",e)}}function k(t,e){if(1&t&&(y.TgZ(0,"tui-input",12),y._uU(1," Enter date "),y._UZ(2,"input",13),y.qZA()),2&t){const t=y.oxw(2);y.Q6J("formControl",t.apiPageControl),y.xp6(2),y.Q6J("maskito",t.maskitoOptions)}}function w(t,e){1&t&&y._uU(0," Date format mode ")}function D(t,e){1&t&&(y._uU(0," Symbol for separating date-segments (days, months, years) "),y.TgZ(1,"p",14),y.TgZ(2,"strong"),y._uU(3,"Default:"),y.qZA(),y.TgZ(4,"code"),y._uU(5,"."),y.qZA(),y._uU(6," (dot) "),y.qZA())}function V(t,e){1&t&&(y._uU(0," Earliest date "),y.TgZ(1,"p",14),y.TgZ(2,"strong"),y._uU(3,"Default:"),y.qZA(),y.TgZ(4,"code"),y._uU(5,"new Date('0001-01-01')"),y.qZA(),y.qZA())}function J(t,e){1&t&&(y._uU(0," Latest date "),y.TgZ(1,"p",14),y.TgZ(2,"strong"),y._uU(3,"Default:"),y.qZA(),y.TgZ(4,"code"),y._uU(5,"new Date('9999-12-31')"),y.qZA(),y.qZA())}function O(t,e){if(1&t){const t=y.EpF();y.TgZ(0,"tui-doc-demo",7),y.YNc(1,k,3,2,"ng-template"),y.qZA(),y.TgZ(2,"tui-doc-documentation"),y.YNc(3,w,1,0,"ng-template",8),y.NdJ("documentationPropertyValueChange",function(e){return y.CHM(t),y.oxw().mode=e})("documentationPropertyValueChange",function(){return y.CHM(t),y.oxw().updateOptions()}),y.YNc(4,D,7,0,"ng-template",9),y.NdJ("documentationPropertyValueChange",function(e){return y.CHM(t),y.oxw().separator=e})("documentationPropertyValueChange",function(){return y.CHM(t),y.oxw().updateOptions()}),y.YNc(5,V,6,0,"ng-template",10),y.NdJ("documentationPropertyValueChange",function(e){return y.CHM(t),y.oxw().minStr=e})("documentationPropertyValueChange",function(){return y.CHM(t),y.oxw().updateDate()}),y.YNc(6,J,6,0,"ng-template",11),y.NdJ("documentationPropertyValueChange",function(e){return y.CHM(t),y.oxw().maxStr=e})("documentationPropertyValueChange",function(){return y.CHM(t),y.oxw().updateDate()}),y.qZA()}if(2&t){const t=y.oxw();y.Q6J("control",t.apiPageControl),y.xp6(3),y.Q6J("documentationPropertyValues",t.modeOptions)("documentationPropertyValue",t.mode),y.xp6(1),y.Q6J("documentationPropertyValues",t.separatorOptions)("documentationPropertyValue",t.separator),y.xp6(1),y.Q6J("documentationPropertyValues",t.minMaxOptions)("documentationPropertyValue",t.minStr),y.xp6(1),y.Q6J("documentationPropertyValues",t.minMaxOptions)("documentationPropertyValue",t.maxStr)}}let A=(()=>{class t{constructor(){this.apiPageControl=new a.NI(""),this.dateLocalization={[p.C.MaskitoOptions]:n.e(1465).then(n.t.bind(n,81465,17))},this.dateMinMax={[p.C.MaskitoOptions]:n.e(9899).then(n.t.bind(n,39899,17))},this.modeOptions=["dd/mm/yyyy","mm/dd/yyyy","yyyy/mm/dd","mm/yy","mm/yyyy","yyyy/mm","yyyy"],this.separatorOptions=[".","/","-"],this.minMaxOptions=["0001-01-01","9999-12-31","2000-01-01","2025-05-10"],this.minStr=this.minMaxOptions[0],this.maxStr=this.minMaxOptions[1],this.mode=this.modeOptions[0],this.separator=this.separatorOptions[0],this.min=new Date(this.minStr),this.max=new Date(this.maxStr),this.maskitoOptions=(0,l.tr)(this)}updateDate(){this.min=new Date(this.minStr),this.max=new Date(this.maxStr),this.updateOptions()}updateOptions(){this.maskitoOptions=(0,l.tr)(this)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=y.Xpm({type:t,selectors:[["date-mask-doc"]],decls:3,vars:0,consts:[["header","Date","package","KIT"],["pageTab",""],["id","date-localization","heading","Date localization",3,"content","description"],["dateLocalizationDescription",""],["id","min-max","heading","Min/Max",3,"content","description"],["minMaxDescription",""],["tuiLink","","href","https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date","target","_blank"],[3,"control"],["documentationPropertyName","mode","documentationPropertyMode","input","documentationPropertyType","MaskitoDateMode",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","separator","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","min","documentationPropertyMode","input","documentationPropertyType","Date",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","max","documentationPropertyMode","input","documentationPropertyType","Date",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["tuiTextfieldCustomContent","tuiIconCalendarLarge",1,"input-date",3,"formControl"],["tuiTextfield","","inputmode","numeric",3,"maskito"],[1,"tui-space_bottom-0"]],template:function(t,e){1&t&&(y.TgZ(0,"tui-doc-page",0),y.YNc(1,_,12,4,"ng-template",1),y.YNc(2,O,7,9,"ng-template",1),y.qZA())},directives:[g.qo,g.nj,g.f2,P,M,d.V,g.FU,g.zb,g.B7,m.K3,m.wU,s.B7,a.JJ,a.oH,h.MB,x.F,Z.r],styles:[".input-date[_ngcontent-%COMP%]{max-width:25rem}.input-date[_ngcontent-%COMP%]:not(:last-child){margin-bottom:1rem}"],changeDetection:0}),t})(),q=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=y.oAB({type:t}),t.\u0275inj=y.cJS({imports:[[o.ez,a.u5,a.UX,r.U5,u.fV,m.Qf,d.j,s.cn,i.Bz.forChild((0,c.Ve)(A))]]}),t})()}}]);