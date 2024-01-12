"use strict";(self.webpackChunkmaskito=self.webpackChunkmaskito||[]).push([[2139],{70997:function(e,t,o){o.d(t,{fV:function(){return u}});var n=o(74788),i=o(68159);let u=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[i.JF,i.mG,i.Lx,i.Lq,i.u4]}),e})()},42139:function(e,t,o){o.r(t),o.d(t,{TimeMaskDocModule:function(){return w}});var n=o(12057),i=o(87862),u=o(86561),a=o(52494),m=o(70997),s=o(44427),r=o(79588),c=o(21673),l=o(14707),p=o(55046),d=o(74788),g=o(68159),f=(0,p.rC)({mode:"HH:MM:SS"}),M=o(94853),h=o(49510),x=o(47258);let Z=(()=>{class e{constructor(){this.mask=f,this.value="23:59:59"}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d.Xpm({type:e,selectors:[["time-mask-doc-example-1"]],decls:3,vars:4,consts:[["tuiTextfieldCustomContent","tuiIconClockLarge","tuiTextfieldFiller","hh:mm:ss",3,"ngModel","ngModelChange"],["inputmode","decimal","tuiTextfield","",3,"maskito"]],template:function(e,t){1&e&&(d.TgZ(0,"tui-input",0),d.NdJ("ngModelChange",function(e){return t.value=e}),d._uU(1," HH:MM:SS "),d._UZ(2,"input",1),d.qZA()),2&e&&(d.Udp("max-width",20,"rem"),d.Q6J("ngModel",t.value),d.xp6(2),d.Q6J("maskito",t.mask))},directives:[c.K3,c.wU,r.B7,r.kD,i.JJ,i.On,M.MB,h.F,x.r],encapsulation:2,changeDetection:0}),e})();var T=(0,p.rC)({mode:"HH:MM",timeSegmentMaxValues:{hours:12}});let C=(()=>{class e{constructor(){this.value="11:59",this.mask=T}onBlur(){const[e,t=""]=this.value.split(":");this.value=[e,t].map(e=>e.padEnd(2,"0")).join(":")}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d.Xpm({type:e,selectors:[["time-mask-doc-example-2"]],decls:2,vars:5,consts:[["tuiTextfieldCustomContent","tuiIconClockLarge","tuiTextfieldFiller","hh:mm",3,"tuiTextfieldLabelOutside","ngModel","ngModelChange"],["inputmode","decimal","tuiTextfield","",3,"maskito","blur"]],template:function(e,t){1&e&&(d.TgZ(0,"tui-input",0),d.NdJ("ngModelChange",function(e){return t.value=e}),d.TgZ(1,"input",1),d.NdJ("blur",function(){return t.onBlur()}),d.qZA(),d.qZA()),2&e&&(d.Udp("max-width",20,"rem"),d.Q6J("tuiTextfieldLabelOutside",!0)("ngModel",t.value),d.xp6(1),d.Q6J("maskito",t.mask))},directives:[c.K3,c.wU,r.B7,r.kD,r.xT,i.JJ,i.On,M.MB,h.F,x.r],encapsulation:2,changeDetection:0}),e})();function U(e,t){1&e&&(d.TgZ(0,"p",6),d._uU(1," Use "),d.TgZ(2,"code"),d._uU(3,"mode"),d.qZA(),d._uU(4," property to set time format. "),d.qZA(),d.TgZ(5,"p",7),d.TgZ(6,"strong"),d._uU(7,"Available options"),d.qZA(),d._uU(8," : "),d.TgZ(9,"code"),d._uU(10,"HH:MM"),d.qZA(),d._uU(11," , "),d.TgZ(12,"code"),d._uU(13,"HH:MM:SS"),d.qZA(),d._uU(14," or "),d.TgZ(15,"code"),d._uU(16,"HH:MM:SS.MSS"),d.qZA(),d._uU(17," . "),d.qZA())}function k(e,t){1&e&&(d.TgZ(0,"p",6),d._uU(1," Property "),d.TgZ(2,"code"),d._uU(3,"timeSegmentMaxValues"),d.qZA(),d._uU(4," allows you to set max value for every time segment. "),d.qZA(),d.TgZ(5,"p",7),d.TgZ(6,"strong"),d._uU(7,"Time segments"),d.qZA(),d._uU(8," are units of the time which form time string. For example, "),d.TgZ(9,"code"),d._uU(10,"HH:MM"),d.qZA(),d._uU(11," consists of two time segments: hours and minutes. "),d.qZA())}function _(e,t){if(1&e&&(d._uU(0," Use "),d.TgZ(1,"code"),d._uU(2,"maskitoTimeOptionsGenerator"),d.qZA(),d._uU(3," to create a mask for time input. "),d.TgZ(4,"tui-doc-example",2),d.YNc(5,U,18,0,"ng-template",null,3,d.W1O),d._UZ(7,"time-mask-doc-example-1"),d.qZA(),d.TgZ(8,"tui-doc-example",4),d.YNc(9,k,12,0,"ng-template",null,5,d.W1O),d._UZ(11,"time-mask-doc-example-2"),d.qZA()),2&e){const e=d.MAs(6),t=d.MAs(10),o=d.oxw();d.xp6(4),d.Q6J("content",o.modeExample1)("description",e),d.xp6(4),d.Q6J("content",o.modeExample2)("description",t)}}function y(e,t){if(1&e&&(d.TgZ(0,"tui-input",11),d._uU(1," Enter time "),d._UZ(2,"input",12),d.qZA()),2&e){const e=d.oxw(2);d.Q6J("formControl",e.apiPageControl)("tuiTextfieldFiller",e.mode.toLowerCase()),d.xp6(2),d.Q6J("maskito",e.maskitoOptions)}}function S(e,t){1&e&&d._uU(0," Time format mode ")}function A(e,t){1&e&&d._uU(0," Max value for every time segment ")}function H(e,t){if(1&e){const e=d.EpF();d.TgZ(0,"tui-doc-demo",8),d.YNc(1,y,3,3,"ng-template"),d.qZA(),d.TgZ(2,"tui-doc-documentation"),d.YNc(3,S,1,0,"ng-template",9),d.NdJ("documentationPropertyValueChange",function(t){return d.CHM(e),d.oxw().mode=t})("documentationPropertyValueChange",function(){return d.CHM(e),d.oxw().updateOptions()}),d.YNc(4,A,1,0,"ng-template",10),d.NdJ("documentationPropertyValueChange",function(t){return d.CHM(e),d.oxw().timeSegmentMaxValues=t})("documentationPropertyValueChange",function(){return d.CHM(e),d.oxw().updateOptions()}),d.qZA()}if(2&e){const e=d.oxw();d.Q6J("control",e.apiPageControl),d.xp6(3),d.Q6J("documentationPropertyValues",e.modeOptions)("documentationPropertyValue",e.mode),d.xp6(1),d.Q6J("documentationPropertyValues",e.timeSegmentMaxValuesOptions)("documentationPropertyValue",e.timeSegmentMaxValues)}}let V=(()=>{class e{constructor(){this.modeExample1={[l.C.MaskitoOptions]:o.e(2921).then(o.t.bind(o,52921,17))},this.modeExample2={[l.C.MaskitoOptions]:o.e(8729).then(o.t.bind(o,78729,17))},this.apiPageControl=new i.NI(""),this.modeOptions=["HH:MM","HH:MM:SS","HH:MM:SS.MSS","HH"],this.timeSegmentMaxValuesOptions=[{hours:23,minutes:59,seconds:59,milliseconds:999},{hours:11}],this.mode=this.modeOptions[0],this.timeSegmentMaxValues=this.timeSegmentMaxValuesOptions[0],this.maskitoOptions=(0,p.rC)(this)}updateOptions(){this.maskitoOptions=(0,p.rC)(this)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d.Xpm({type:e,selectors:[["time-mask-doc"]],decls:3,vars:0,consts:[["header","Time","package","KIT"],["pageTab",""],["id","mode","heading","Mode",3,"content","description"],["modeDescription",""],["id","twelve-hours","heading","12-hours format",3,"content","description"],["timeSegmentMaxValuesDescription",""],[1,"tui-space_top-0","tui-space_bottom-1"],[1,"tui-space_top-0"],[3,"control"],["documentationPropertyMode","input","documentationPropertyName","mode","documentationPropertyType","MaskitoTimeMode",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","timeSegmentMaxValues","documentationPropertyType","MaskitoTimeSegments<number>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["tuiTextfieldCustomContent","tuiIconClockLarge",1,"input-time",3,"formControl","tuiTextfieldFiller"],["inputmode","numeric","tuiTextfield","",3,"maskito"]],template:function(e,t){1&e&&(d.TgZ(0,"tui-doc-page",0),d.YNc(1,_,12,4,"ng-template",1),d.YNc(2,H,5,5,"ng-template",1),d.qZA())},directives:[g.qo,g.nj,g.f2,Z,C,g.FU,g.zb,g.B7,c.K3,c.wU,r.B7,i.JJ,i.oH,r.kD,M.MB,h.F,x.r],styles:[".input-time[_ngcontent-%COMP%]{max-width:25rem}.input-time[_ngcontent-%COMP%]:not(:last-child){margin-bottom:1rem}"],changeDetection:0}),e})(),w=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=d.oAB({type:e}),e.\u0275inj=d.cJS({imports:[[n.ez,i.u5,i.UX,a.U5,m.fV,c.Qf,r.cn,u.Bz.forChild((0,s.Ve)(V))]]}),e})()}}]);