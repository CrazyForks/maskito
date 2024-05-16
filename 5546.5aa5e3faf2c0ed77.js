"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[5546],{997:(E,p,n)=>{n.d(p,{TuiAddonDocModule:()=>f});var g=n(4537),c=n(9439);let f=(()=>{class l{}return l.\u0275fac=function(u){return new(u||l)},l.\u0275mod=g.oAB({type:l}),l.\u0275inj=g.cJS({imports:[c.JF,c.mG,c.Lx,c.Lq,c.u4]}),l})()},5546:(E,p,n)=>{n.r(p),n.d(p,{default:()=>J});var g=n(3178),c=n(3139),f=n(997),h=n(885),l=n(2847),v=n(6119),u=n(9900),x=n(1156),T=n(1064),r=n(1673);const U={mask:/^\d{0,3}$/,plugins:[e=>{const a=()=>{const s=e.value;e.addEventListener("beforeinput",o=>{o.defaultPrevented&&s===e.value&&e.dispatchEvent(new CustomEvent("maskitoReject",{bubbles:!0}))},{once:!0})};return e.addEventListener("beforeinput",a,!0),()=>e.removeEventListener("beforeinput",a,!0)}]};var t=n(4537),D=n(5640);let M=(()=>{var e;class a{constructor(){this.maskitoOptions={...U,plugins:[T.Bb]},this.value="",this.reject=-1}}return(e=a).\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["plugins-reject-doc-example-1"]],standalone:!0,features:[t.jDz],decls:3,vars:10,consts:[[3,"ngModel","ngModelChange","maskitoReject"],["tuiTextfield","",3,"maskito"]],template:function(o,i){1&o&&(t.TgZ(0,"tui-input",0),t.NdJ("ngModelChange",function(m){return i.value=m})("maskitoReject",function(){return i.reject=i.reject+1}),t._uU(1," CVC "),t._UZ(2,"input",1),t.qZA()),2&o&&(t.Udp("animation-duration",300,"ms")("animation-iteration-count",1)("animation-name","reject-"+i.reject%2)("max-width",20,"rem"),t.Q6J("ngModel",i.value),t.xp6(2),t.Q6J("maskito",i.maskitoOptions))},dependencies:[u.u5,u.JJ,u.On,x.ro,r.Qf,r.K3,r.wU,D.MB],styles:["@keyframes reject-0{0%{box-shadow:0 0 #f45725}to{box-shadow:0 0 1rem #f457251f}}@keyframes reject-1{0%{box-shadow:0 0 #f45725}to{box-shadow:0 0 1rem #f457251f}}\n"],encapsulation:2,changeDetection:0}),a})();var Z=n(8654);const C={mask:/^\d{0,3}$/,plugins:[(0,Z.D2)()]};let A=(()=>{var e;class a{constructor(){this.maskitoOptions=C,this.value="12345"}}return(e=a).\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["plugins-initial-calibration-doc-example-2"]],standalone:!0,features:[t.jDz],decls:3,vars:4,consts:[[3,"ngModel","ngModelChange"],["tuiTextfield","",3,"maskito"]],template:function(o,i){1&o&&(t.TgZ(0,"tui-input",0),t.NdJ("ngModelChange",function(m){return i.value=m}),t._uU(1," Enter number "),t._UZ(2,"input",1),t.qZA()),2&o&&(t.Udp("max-width",20,"rem"),t.Q6J("ngModel",i.value),t.xp6(2),t.Q6J("maskito",i.maskitoOptions))},dependencies:[u.u5,u.JJ,u.On,x.ro,r.Qf,r.K3,r.wU,D.MB],encapsulation:2,changeDetection:0}),a})();const y={mask:/^[0-9\uff10-\uff19]*$/,plugins:[(0,Z.qs)()]};let k=(()=>{var e;class a{constructor(){this.maskitoOptions=y,this.value=""}}return(e=a).\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["plugins-strict-composition-doc-example-3"]],standalone:!0,features:[t.jDz],decls:2,vars:4,consts:[[3,"maskito","ngModel","ngModelChange"]],template:function(o,i){1&o&&(t.TgZ(0,"tui-input",0),t.NdJ("ngModelChange",function(m){return i.value=m}),t._uU(1," Enter number "),t.qZA()),2&o&&(t.Udp("max-width",20,"rem"),t.Q6J("maskito",i.maskitoOptions)("ngModel",i.value))},dependencies:[u.u5,u.JJ,u.On,x.ro,r.Qf,r.K3,r.wU],encapsulation:2,changeDetection:0}),a})();var P=n(9439);function j(e,a){if(1&e&&(t.TgZ(0,"strong"),t._uU(1,"Maskito"),t.qZA(),t._uU(2," libraries were created to prevent "),t.TgZ(3,"u"),t._uU(4,"only user"),t.qZA(),t._uU(5," from typing invalid value. However, sometimes you (developer) need to enable mask but you not sure that you programmatically patched textfield with valid value. In this case you can use "),t.TgZ(6,"a",8)(7,"code"),t._uU(8,"maskitoTransform"),t.qZA()(),t._uU(9," or just add "),t.TgZ(10,"code"),t._uU(11,"maskitoInitialCalibrationPlugin"),t.qZA(),t._uU(12," to mask options. ")),2&e){const s=t.oxw();t.xp6(6),t.Q6J("routerLink",s.transformerDocPage)}}function O(e,a){1&e&&(t.TgZ(0,"p",1),t._uU(1," By default, "),t.TgZ(2,"strong"),t._uU(3,"Maskito"),t.qZA(),t._uU(4," does not break IME Composition and waits until "),t.TgZ(5,"a",9)(6,"code"),t._uU(7,"compositionend"),t.qZA()(),t._uU(8," fires to begin calibration of the textfield's value. It is especially important for East Asian languages such as Chinese, Japanese, Korean, and other languages with complex characters. "),t.qZA(),t.TgZ(9,"p"),t._uU(10," However, sometimes this behaviour is not desired and you can want to enable mask validation on every keystroke (to be like a classic not-composition input). For example, some Android devices with enabled system autocomplete can interpret user's input as part of composition event \u2013 waiting for "),t.TgZ(11,"code"),t._uU(12,"compositionend"),t.qZA(),t._uU(13," can be not required for some cases (e.g. entering of numbers or your application is not used by East Asian clients). For this cases, you can use "),t.TgZ(14,"code"),t._uU(15,"maskitoStrictCompositionPlugin"),t.qZA(),t._uU(16," . It applies mask's constraints on ANY intermediate value of IME composition. "),t.qZA())}let J=(()=>{var e;class a{constructor(){this.transformerDocPage=`/${c.x.Transformer}`,this.rejectExample={[c.C.MaskitoOptions]:n.e(8364).then(n.t.bind(n,8364,17)),"index.less":n.e(5703).then(n.t.bind(n,5703,17)),"index.ts":n.e(6600).then(n.t.bind(n,6600,17))},this.initialCalibrationExample={[c.C.MaskitoOptions]:n.e(2021).then(n.t.bind(n,436,17)),"index.ts":n.e(5569).then(n.t.bind(n,5569,17))},this.strictCompositionExample={[c.C.MaskitoOptions]:n.e(7634).then(n.t.bind(n,7634,17))}}}return(e=a).\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["plugins-mode-doc-page"]],standalone:!0,features:[t.jDz],decls:23,vars:5,consts:[["header","Plugins"],[1,"tui-space_top-0"],["id","reject","heading","Visualize rejected characters",3,"content"],[1,"tui-space_bottom-3"],["id","initial-calibration","heading","Built-in initial calibration plugin",3,"content","description"],["initialCalibrationDescription",""],["id","strict-composition","heading","Built-in plugin for composition event",3,"content","description"],["strictCompositionDescription",""],["tuiLink","",3,"routerLink"],["href","https://developer.mozilla.org/en-US/docs/Web/API/Element/compositionend_event","rel","noreferrer","target","_blank","tuiLink",""]],template:function(o,i){if(1&o&&(t.TgZ(0,"tui-doc-page",0)(1,"p",1)(2,"strong"),t._uU(3,"Plugins"),t.qZA(),t._uU(4," are functions that are called with input/textarea element and mask options as arguments upon mask initialization. They can optionally return cleanup logic and allow you to extend mask with arbitrary additional behavior. "),t.qZA(),t.TgZ(5,"tui-doc-example",2)(6,"tui-notification",3),t._uU(7," This plugin is available as "),t.TgZ(8,"code"),t._uU(9,"maskitoRejectEvent"),t.qZA(),t._uU(10," in "),t.TgZ(11,"code"),t._uU(12,"@maskito/kit"),t.qZA()(),t._UZ(13,"plugins-reject-doc-example-1"),t.qZA(),t.TgZ(14,"tui-doc-example",4),t.YNc(15,j,13,1,"ng-template",null,5,t.W1O),t._UZ(17,"plugins-initial-calibration-doc-example-2"),t.qZA(),t.TgZ(18,"tui-doc-example",6),t.YNc(19,O,17,0,"ng-template",null,7,t.W1O),t._UZ(21,"plugins-strict-composition-doc-example-3"),t.qZA(),t._UZ(22,"next-steps"),t.qZA()),2&o){const d=t.MAs(16),m=t.MAs(20);t.xp6(5),t.Q6J("content",i.rejectExample),t.xp6(9),t.Q6J("content",i.initialCalibrationExample)("description",d),t.xp6(4),t.Q6J("content",i.strictCompositionExample)("description",m)}},dependencies:[g.rH,f.TuiAddonDocModule,P.qo,P.f2,h.H,h.L,l.j,l.V,v.R,M,A,k],encapsulation:2,changeDetection:0}),a})()}}]);