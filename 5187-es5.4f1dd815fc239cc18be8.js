!function(){"use strict";function t(t,e,n){return(e=a(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,a(o.key),o)}}function o(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}function a(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,e||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(self.webpackChunkmaskito=self.webpackChunkmaskito||[]).push([[5187],{25187:function(n,a,i){i.r(a),i.d(a,{DateRangeMaskDocModule:function(){return E}});var r,u=i(12057),m=i(23738),d=i(55358),c=i(42905),l=i(7476),p=i(48681),s=i(82847),g=i(16117),h=i(21673),y=i(64762),f=i(14707),x=i(81929),P=i(33770),C=i(44358),M=i(74788),T=(0,x.n9)({mode:"mm/dd/yyyy",separator:"/"}),U=i(81620),k=i(49510),Z=i(47258),v=((r=function(){function t(){e(this,t),this.usDateFormatter=new Intl.DateTimeFormat("en-US",{month:"long",day:"numeric",year:"numeric"}),this.value="09/20/2020\xa0\u2013\xa002/06/2023",this.filler="mm/dd/yyyy\xa0\u2013\xa0mm/dd/yyyy",this.mask=T}return o(t,[{key:"hint",get:function(){var t=this;return this.value.length<this.filler.length?"Complete the date range!":this.value.split("\xa0\u2013\xa0").map(function(e){return t.usDateFormatter.format(new Date(e))}).join("\xa0\u2013\xa0")}}]),t}()).\u0275fac=function(t){return new(t||r)},r.\u0275cmp=M.Xpm({type:r,selectors:[["date-range-mask-doc-example-1"]],decls:3,vars:6,consts:[["tuiTextfieldCustomContent","tuiIconCalendarLarge",3,"tuiTextfieldFiller","tuiHintContent","ngModel","ngModelChange"],["tuiTextfield","","inputmode","decimal",3,"maskito"]],template:function(t,e){1&t&&(M.TgZ(0,"tui-input",0),M.NdJ("ngModelChange",function(t){return e.value=t}),M._uU(1," US format "),M._UZ(2,"input",1),M.qZA()),2&t&&(M.Udp("max-width",30,"rem"),M.Q6J("tuiTextfieldFiller",e.filler)("tuiHintContent",e.hint)("ngModel",e.value),M.xp6(2),M.Q6J("maskito",e.mask))},directives:[h.K3,h.wU,g.B7,g.kD,p.bZ,m.JJ,m.On,U.MB,k.F,Z.r],encapsulation:2,changeDetection:0}),r),w=(0,x.n9)({mode:"dd/mm/yyyy",min:new Date("1711-11-19"),max:new Date("1765-04-15")}),V=function(){var t=o(function t(){e(this,t),this.value="19.11.1711\xa0\u2013\xa015.04.1765",this.filler="dd.mm.yyyy\xa0\u2013\xa0dd.mm.yyyy",this.mask=w});return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=M.Xpm({type:t,selectors:[["date-range-mask-doc-example-2"]],decls:2,vars:6,consts:[["tuiTextfieldCustomContent","tuiIconCalendarLarge",3,"tuiTextfieldLabelOutside","tuiTextfieldFiller","ngModel","ngModelChange"],["tuiTextfield","","inputmode","decimal",3,"maskito"]],template:function(t,e){1&t&&(M.TgZ(0,"tui-input",0),M.NdJ("ngModelChange",function(t){return e.value=t}),M._UZ(1,"input",1),M.qZA()),2&t&&(M.Udp("max-width",30,"rem"),M.Q6J("tuiTextfieldLabelOutside",!0)("tuiTextfieldFiller",e.filler)("ngModel",e.value),M.xp6(1),M.Q6J("maskito",e.mask))},directives:[h.K3,h.wU,g.B7,g.xT,g.kD,m.JJ,m.On,U.MB,k.F,Z.r],encapsulation:2,changeDetection:0}),t}(),_=(0,x.n9)({mode:"dd/mm/yyyy",minLength:{day:3},maxLength:{month:1}}),O=function(){var t=o(function t(){e(this,t),this.value="01.01.2023\xa0\u2013\xa005.01.2023",this.filler="dd.mm.yyyy\xa0\u2013\xa0dd.mm.yyyy",this.mask=_,this.hint="The right date must be at least 3 days after the left one.\nAlso, the difference between the dates must not exceed 1 month."});return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=M.Xpm({type:t,selectors:[["date-range-mask-doc-example-3"]],decls:2,vars:7,consts:[["tuiTextfieldCustomContent","tuiIconCalendarLarge",3,"tuiHintContent","tuiTextfieldLabelOutside","tuiTextfieldFiller","ngModel","ngModelChange"],["tuiTextfield","","inputmode","decimal",3,"maskito"]],template:function(t,e){1&t&&(M.TgZ(0,"tui-input",0),M.NdJ("ngModelChange",function(t){return e.value=t}),M._UZ(1,"input",1),M.qZA()),2&t&&(M.Udp("max-width",30,"rem"),M.Q6J("tuiHintContent",e.hint)("tuiTextfieldLabelOutside",!0)("tuiTextfieldFiller",e.filler)("ngModel",e.value),M.xp6(1),M.Q6J("maskito",e.mask))},directives:[h.K3,h.wU,g.B7,p.bZ,g.xT,g.kD,m.JJ,m.On,U.MB,k.F,Z.r],encapsulation:2,changeDetection:0}),t}();function b(t,e){1&t&&(M._uU(0," Use "),M.TgZ(1,"code"),M._uU(2,"mode"),M.qZA(),M._uU(3," and "),M.TgZ(4,"code"),M._uU(5,"separator"),M.qZA(),M._uU(6," parameters to get a mask with a locale specific representation of dates. "))}function D(t,e){1&t&&(M._uU(0," Parameters "),M.TgZ(1,"code"),M._uU(2,"min"),M.qZA(),M._uU(3," and "),M.TgZ(4,"code"),M._uU(5,"max"),M.qZA(),M._uU(6," allow you to set the earliest and the latest available dates. They accept native "),M.TgZ(7,"a",8),M._uU(8," Date "),M.qZA(),M._uU(9," . "))}function J(t,e){1&t&&(M._uU(0," Use "),M.TgZ(1,"code"),M._uU(2,"minLength"),M.qZA(),M._uU(3," and "),M.TgZ(4,"code"),M._uU(5,"maxLength"),M.qZA(),M._uU(6," parameters to set minimal and maximal length of the date range. "))}function L(t,e){if(1&t&&(M._uU(0," Use "),M.TgZ(1,"code"),M._uU(2,"maskitoDateRangeOptionsGenerator"),M.qZA(),M._uU(3," to create a mask to input a range of dates. "),M.TgZ(4,"tui-doc-example",2),M.YNc(5,b,7,0,"ng-template",null,3,M.W1O),M._UZ(7,"date-range-mask-doc-example-1"),M.qZA(),M.TgZ(8,"tui-doc-example",4),M.YNc(9,D,10,0,"ng-template",null,5,M.W1O),M._UZ(11,"date-range-mask-doc-example-2"),M.qZA(),M.TgZ(12,"tui-doc-example",6),M.YNc(13,J,7,0,"ng-template",null,7,M.W1O),M._UZ(15,"date-range-mask-doc-example-3"),M.qZA()),2&t){var n=M.MAs(6),o=M.MAs(10),a=M.MAs(14),i=M.oxw();M.xp6(4),M.Q6J("content",i.dateLocalizationExample1)("description",n),M.xp6(4),M.Q6J("description",o)("content",i.minMaxExample2),M.xp6(4),M.Q6J("description",a)("content",i.minMaxLengthExample3)}}function N(t,e){if(1&t&&(M.TgZ(0,"tui-input",16),M._uU(1," Enter dates "),M._UZ(2,"input",17),M.qZA()),2&t){var n=M.oxw(2);M.Q6J("tuiTextfieldFiller",n.getPlaceholder(n.mode,n.separator))("formControl",n.apiPageControl),M.xp6(2),M.Q6J("maskito",n.maskitoOptions)}}function A(t,e){1&t&&M._uU(0," Date format mode ")}function q(t,e){1&t&&(M._uU(0," Separator "),M.TgZ(1,"p"),M.TgZ(2,"strong"),M._uU(3,"Default:"),M.qZA(),M.TgZ(4,"code"),M._uU(5,"."),M.qZA(),M._uU(6," (dot). "),M.qZA())}function S(t,e){1&t&&M._uU(0," Earliest date ")}function Q(t,e){1&t&&M._uU(0," Latest date ")}function F(t,e){1&t&&M._uU(0," Minimal length of the range ")}function H(t,e){1&t&&M._uU(0," Maximal length of the range ")}function Y(t,e){if(1&t){var n=M.EpF();M.TgZ(0,"tui-doc-demo",9),M.YNc(1,N,3,3,"ng-template"),M.qZA(),M.TgZ(2,"tui-doc-documentation"),M.YNc(3,A,1,0,"ng-template",10),M.NdJ("documentationPropertyValueChange",function(t){return M.CHM(n),M.oxw().mode=t})("documentationPropertyValueChange",function(){return M.CHM(n),M.oxw().updateOptions()}),M.YNc(4,q,7,0,"ng-template",11),M.NdJ("documentationPropertyValueChange",function(t){return M.CHM(n),M.oxw().separator=t})("documentationPropertyValueChange",function(){return M.CHM(n),M.oxw().updateOptions()}),M.YNc(5,S,1,0,"ng-template",12),M.NdJ("documentationPropertyValueChange",function(t){return M.CHM(n),M.oxw().minStr=t})("documentationPropertyValueChange",function(){return M.CHM(n),M.oxw().updateDate()}),M.YNc(6,Q,1,0,"ng-template",13),M.NdJ("documentationPropertyValueChange",function(t){return M.CHM(n),M.oxw().maxStr=t})("documentationPropertyValueChange",function(){return M.CHM(n),M.oxw().updateDate()}),M.YNc(7,F,1,0,"ng-template",14),M.NdJ("documentationPropertyValueChange",function(t){return M.CHM(n),M.oxw().minLength=t})("documentationPropertyValueChange",function(){return M.CHM(n),M.oxw().updateOptions()}),M.YNc(8,H,1,0,"ng-template",15),M.NdJ("documentationPropertyValueChange",function(t){return M.CHM(n),M.oxw().maxLength=t})("documentationPropertyValueChange",function(){return M.CHM(n),M.oxw().updateOptions()}),M.qZA()}if(2&t){var o=M.oxw();M.Q6J("control",o.apiPageControl),M.xp6(3),M.Q6J("documentationPropertyValues",o.modeOptions)("documentationPropertyValue",o.mode),M.xp6(1),M.Q6J("documentationPropertyValue",o.separator),M.xp6(1),M.Q6J("documentationPropertyValues",o.minMaxOptions)("documentationPropertyValue",o.minStr),M.xp6(1),M.Q6J("documentationPropertyValues",o.minMaxOptions)("documentationPropertyValue",o.maxStr),M.xp6(1),M.Q6J("documentationPropertyValues",o.minLengthOptions)("documentationPropertyValue",o.minLength),M.xp6(1),M.Q6J("documentationPropertyValues",o.maxLengthOptions)("documentationPropertyValue",o.maxLength)}}var B=function(){function n(){e(this,n),this.dateLocalizationExample1=t({},f.C.MaskitoOptions,i.e(2049).then(i.t.bind(i,82049,17))),this.minMaxExample2=t({},f.C.MaskitoOptions,i.e(6901).then(i.t.bind(i,16901,17))),this.minMaxLengthExample3=t({},f.C.MaskitoOptions,i.e(6880).then(i.t.bind(i,6880,17))),this.apiPageControl=new m.NI(""),this.modeOptions=["dd/mm/yyyy","mm/dd/yyyy","yyyy/mm/dd"],this.minMaxOptions=["0001-01-01","9999-12-31","2000-01-01","2025-05-10"],this.minLengthOptions=[{day:3},{day:15}],this.maxLengthOptions=[{day:5},{month:1},{year:1}],this.mode=this.modeOptions[0],this.separator=".",this.minStr=this.minMaxOptions[0],this.maxStr=this.minMaxOptions[1],this.min=new Date(this.minStr),this.max=new Date(this.maxStr),this.minLength={},this.maxLength={},this.maskitoOptions=(0,x.n9)(this)}return o(n,[{key:"getPlaceholder",value:function(t,e){var n="".concat(P.f$).concat(P.F).concat(P.f$);return"".concat(t.replace(/\//g,e)).concat(n).concat(t.replace(/\//g,e))}},{key:"updateOptions",value:function(){this.maskitoOptions=(0,x.n9)(this)}},{key:"updateDate",value:function(){this.min=new Date(this.minStr),this.max=new Date(this.maxStr),this.updateOptions()}}]),n}();B.\u0275fac=function(t){return new(t||B)},B.\u0275cmp=M.Xpm({type:B,selectors:[["date-range-mask-doc"]],decls:3,vars:0,consts:[["header","DateRange","package","KIT"],["pageTab",""],["id","date-localization","heading","Date localization",3,"content","description"],["dateLocalizationDescription",""],["id","min-max","heading","Min and max dates",3,"description","content"],["minMaxDescription",""],["id","min-max-length","heading","Min and max length of range",3,"description","content"],["minMaxLengthDescription",""],["tuiLink","","href","https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date","target","_blank"],[3,"control"],["documentationPropertyName","mode","documentationPropertyMode","input","documentationPropertyType","MaskitoDateMode",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","separator","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","min","documentationPropertyMode","input","documentationPropertyType","Date",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","max","documentationPropertyMode","input","documentationPropertyType","Date",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","minLength","documentationPropertyMode","input","documentationPropertyType","MaskitoDateSegments<number>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","maxLength","documentationPropertyMode","input","documentationPropertyType","MaskitoDateSegments<number>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["tuiTextfieldCustomContent","tuiIconCalendarLarge",3,"tuiTextfieldFiller","formControl"],["tuiTextfield","","inputmode","numeric",3,"maskito"]],template:function(t,e){1&t&&(M.TgZ(0,"tui-doc-page",0),M.YNc(1,L,16,6,"ng-template",1),M.YNc(2,Y,9,12,"ng-template",1),M.qZA())},directives:[l.qo,l.nj,l.f2,v,V,O,s.V,l.FU,l.zb,l.B7,h.K3,h.wU,g.B7,g.kD,m.JJ,m.oH,U.MB,k.F,Z.r],encapsulation:2,changeDetection:0}),(0,y.gn)([C.UM],B.prototype,"getPlaceholder",null);var E=function(){var t=o(function t(){e(this,t)});return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=M.oAB({type:t}),t.\u0275inj=M.cJS({imports:[[u.ez,m.u5,m.UX,c.U5,l.fV,p.go,h.Qf,s.j,g.cn,d.Bz.forChild((0,l.Ve)(B))]]}),t}()}}])}();