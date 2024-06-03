"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[7148],{997:(h,_,a)=>{a.d(_,{TuiAddonDocModule:()=>d});var g=a(4537),r=a(9439);let d=(()=>{class c{}return c.\u0275fac=function(y){return new(y||c)},c.\u0275mod=g.oAB({type:c}),c.\u0275inj=g.cJS({imports:[r.JF,r.mG,r.Lx,r.Lq,r.u4]}),c})()},7148:(h,_,a)=>{a.r(_),a.d(_,{default:()=>w});var g=a(7980),r=a(9900),d=a(3139),D=a(1156),c=a(369),M=a(997),y=a(2847),l=a(8940),s=a(1673);const C=(0,c.tr)({mode:"yyyy/mm/dd",separator:"/"});var t=a(4537),x=a(5640);let T=(()=>{var e;class m{constructor(){this.value="2005/10/21",this.filler="yyyy/mm/dd",this.mask=C}}return(e=m).\u0275fac=function(i){return new(i||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["date-mask-doc-example-1"]],standalone:!0,features:[t.jDz],decls:3,vars:5,consts:[["tuiTextfieldCustomContent","tuiIconCalendarLarge",3,"tuiTextfieldFiller","ngModel","ngModelChange"],["inputmode","decimal","tuiTextfield","",3,"maskito"]],template:function(i,o){1&i&&(t.TgZ(0,"tui-input",0),t.NdJ("ngModelChange",function(f){return o.value=f}),t._uU(1," Localization "),t._UZ(2,"input",1),t.qZA()),2&i&&(t.Udp("max-width",30,"rem"),t.Q6J("tuiTextfieldFiller",o.filler)("ngModel",o.value),t.xp6(2),t.Q6J("maskito",o.mask))},dependencies:[s.Qf,s.K3,s.wU,x.MB,l.cn,l.B7,l.kD,r.u5,r.JJ,r.On,D.ro],encapsulation:2,changeDetection:0}),m})();const P=(0,c.tr)({mode:"dd/mm/yyyy",min:new Date(2e3,0,1),max:new Date(2025,4,10)});let k=(()=>{var e;class m{constructor(){this.value="20.01.2023",this.filler="dd.mm.yyyy",this.mask=P}}return(e=m).\u0275fac=function(i){return new(i||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["date-mask-doc-example-2"]],standalone:!0,features:[t.jDz],decls:3,vars:5,consts:[["tuiTextfieldCustomContent","tuiIconCalendarLarge",3,"tuiTextfieldFiller","ngModel","ngModelChange"],["inputmode","decimal","tuiTextfield","",3,"maskito"]],template:function(i,o){1&i&&(t.TgZ(0,"tui-input",0),t.NdJ("ngModelChange",function(f){return o.value=f}),t._uU(1," Date "),t._UZ(2,"input",1),t.qZA()),2&i&&(t.Udp("max-width",30,"rem"),t.Q6J("tuiTextfieldFiller",o.filler)("ngModel",o.value),t.xp6(2),t.Q6J("maskito",o.mask))},dependencies:[s.Qf,s.K3,s.wU,x.MB,l.cn,l.B7,l.kD,r.u5,r.JJ,r.On,D.ro],encapsulation:2,changeDetection:0}),m})();var p=a(9439);function U(e,m){1&e&&(t._uU(0," Use "),t.TgZ(1,"code"),t._uU(2,"mode"),t.qZA(),t._uU(3," and "),t.TgZ(4,"code"),t._uU(5,"separator"),t.qZA(),t._uU(6," properties to get a mask with a locale specific representation of dates. "))}function Z(e,m){1&e&&(t._uU(0," Properties "),t.TgZ(1,"code"),t._uU(2,"min"),t.qZA(),t._uU(3," and "),t.TgZ(4,"code"),t._uU(5,"max"),t.qZA(),t._uU(6," allow you to set the earliest and the latest available dates. They accept native "),t.TgZ(7,"a",6),t._uU(8," Date "),t.qZA(),t._uU(9," . "))}function V(e,m){if(1&e&&(t._uU(0," Use "),t.TgZ(1,"code"),t._uU(2,"maskitoDateOptionsGenerator"),t.qZA(),t._uU(3," to create a mask for date input. "),t.TgZ(4,"tui-doc-example",2),t.YNc(5,U,7,0,"ng-template",null,3,t.W1O),t._UZ(7,"date-mask-doc-example-1"),t.qZA(),t.TgZ(8,"tui-doc-example",4),t.YNc(9,Z,10,0,"ng-template",null,5,t.W1O),t._UZ(11,"date-mask-doc-example-2"),t.qZA()),2&e){const n=t.MAs(6),i=t.MAs(10),o=t.oxw();t.xp6(4),t.Q6J("content",o.dateLocalization)("description",n),t.xp6(4),t.Q6J("content",o.dateMinMax)("description",i)}}function v(e,m){if(1&e&&(t.TgZ(0,"tui-input",12),t._uU(1," Enter date "),t._UZ(2,"input",13),t.qZA()),2&e){const n=t.oxw(2);t.Q6J("formControl",n.apiPageControl),t.xp6(2),t.Q6J("maskito",n.maskitoOptions)}}function O(e,m){1&e&&t._uU(0," Date format mode ")}function A(e,m){1&e&&(t._uU(0," Symbol for separating date-segments (days, months, years) "),t.TgZ(1,"p",14)(2,"strong"),t._uU(3,"Default:"),t.qZA(),t.TgZ(4,"code"),t._uU(5,"."),t.qZA(),t._uU(6," (dot) "),t.qZA())}function J(e,m){1&e&&(t._uU(0," Earliest date "),t.TgZ(1,"p",14)(2,"strong"),t._uU(3,"Default:"),t.qZA(),t.TgZ(4,"code"),t._uU(5,"new Date('0001-01-01')"),t.qZA()())}function E(e,m){1&e&&(t._uU(0," Latest date "),t.TgZ(1,"p",14)(2,"strong"),t._uU(3,"Default:"),t.qZA(),t.TgZ(4,"code"),t._uU(5,"new Date('9999-12-31')"),t.qZA()())}function N(e,m){if(1&e){const n=t.EpF();t.TgZ(0,"tui-doc-demo",7),t.YNc(1,v,3,2,"ng-template"),t.qZA(),t.TgZ(2,"tui-doc-documentation"),t.YNc(3,O,1,0,"ng-template",8),t.NdJ("documentationPropertyValueChange",function(o){t.CHM(n);const u=t.oxw();return t.KtG(u.mode=o)})("documentationPropertyValueChange",function(){t.CHM(n);const o=t.oxw();return t.KtG(o.updateOptions())}),t.YNc(4,A,7,0,"ng-template",9),t.NdJ("documentationPropertyValueChange",function(o){t.CHM(n);const u=t.oxw();return t.KtG(u.separator=o)})("documentationPropertyValueChange",function(){t.CHM(n);const o=t.oxw();return t.KtG(o.updateOptions())}),t.YNc(5,J,6,0,"ng-template",10),t.NdJ("documentationPropertyValueChange",function(o){t.CHM(n);const u=t.oxw();return t.KtG(u.minStr=o)})("documentationPropertyValueChange",function(){t.CHM(n);const o=t.oxw();return t.KtG(o.updateDate())}),t.YNc(6,E,6,0,"ng-template",11),t.NdJ("documentationPropertyValueChange",function(o){t.CHM(n);const u=t.oxw();return t.KtG(u.maxStr=o)})("documentationPropertyValueChange",function(){t.CHM(n);const o=t.oxw();return t.KtG(o.updateDate())}),t.qZA()}if(2&e){const n=t.oxw();t.Q6J("control",n.apiPageControl),t.xp6(3),t.Q6J("documentationPropertyValues",n.modeOptions)("documentationPropertyValue",n.mode),t.xp6(1),t.Q6J("documentationPropertyValues",n.separatorOptions)("documentationPropertyValue",n.separator),t.xp6(1),t.Q6J("documentationPropertyValues",n.minMaxOptions)("documentationPropertyValue",n.minStr),t.xp6(1),t.Q6J("documentationPropertyValues",n.minMaxOptions)("documentationPropertyValue",n.maxStr)}}const w=(0,g.Ve)((()=>{var e;class m{constructor(){this.apiPageControl=new r.NI(""),this.dateLocalization={[d.C.MaskitoOptions]:a.e(1465).then(a.t.bind(a,1465,17))},this.dateMinMax={[d.C.MaskitoOptions]:a.e(9899).then(a.t.bind(a,9899,17))},this.modeOptions=["dd/mm/yyyy","mm/dd/yyyy","yyyy/mm/dd","mm/yy","mm/yyyy","yyyy/mm","yyyy"],this.separatorOptions=[".","/","-"],this.minMaxOptions=["0001-01-01","9999-12-31","2000-01-01","2025-05-10"],this.minStr=this.minMaxOptions[0],this.maxStr=this.minMaxOptions[1],this.mode=this.modeOptions[0],this.separator=this.separatorOptions[0],this.min=new Date(this.minStr),this.max=new Date(this.maxStr),this.maskitoOptions=(0,c.tr)(this)}updateDate(){this.min=new Date(this.minStr),this.max=new Date(this.maxStr),this.updateOptions()}updateOptions(){this.maskitoOptions=(0,c.tr)(this)}}return(e=m).\u0275fac=function(i){return new(i||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["date-mask-doc"]],standalone:!0,features:[t.jDz],decls:3,vars:0,consts:[["header","Date","package","KIT"],["pageTab",""],["id","date-localization","heading","Date localization",3,"content","description"],["dateLocalizationDescription",""],["id","min-max","heading","Min/Max",3,"content","description"],["minMaxDescription",""],["href","https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date","rel","noreferrer","target","_blank","tuiLink",""],[3,"control"],["documentationPropertyMode","input","documentationPropertyName","mode","documentationPropertyType","MaskitoDateMode",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","separator","documentationPropertyType","string",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","min","documentationPropertyType","Date",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","max","documentationPropertyType","Date",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["tuiTextfieldCustomContent","tuiIconCalendarLarge",1,"input-date",3,"formControl"],["inputmode","numeric","tuiTextfield","",3,"maskito"],[1,"tui-space_bottom-0"]],template:function(i,o){1&i&&(t.TgZ(0,"tui-doc-page",0),t.YNc(1,V,12,4,"ng-template",1),t.YNc(2,N,7,9,"ng-template",1),t.qZA())},dependencies:[M.TuiAddonDocModule,p.FU,p.zb,p.B7,p.qo,p.nj,p.f2,y.j,y.V,T,k,s.Qf,s.K3,s.wU,x.MB,l.cn,l.B7,r.UX,r.JJ,r.oH,D.ro],styles:[".input-date[_ngcontent-%COMP%]{max-width:25rem}.input-date[_ngcontent-%COMP%]:not(:last-child){margin-bottom:1rem}"],changeDetection:0}),m})())}}]);