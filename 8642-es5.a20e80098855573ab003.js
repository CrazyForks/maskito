!function(){"use strict";function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(i=r.key,n=void 0,"symbol"==typeof(n=function(e,t){if("object"!=typeof e||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var r=o.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(i,"string"))?n:String(n)),r)}var i,n}function t(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(self.webpackChunkmaskito=self.webpackChunkmaskito||[]).push([[8642],{70997:function(e,r,i){i.d(r,{fV:function(){return c}});var n,a=i(74788),s=i(41823),c=((n=t(function e(){o(this,e)})).\u0275fac=function(e){return new(e||n)},n.\u0275mod=a.oAB({type:n}),n.\u0275inj=a.cJS({imports:[s.JF,s.mG,s.Lx,s.Lq,s.u4]}),n)},8642:function(e,r,i){i.r(r),i.d(r,{CoreConceptsOverviewDocPageModule:function(){return h}});var n,a=i(12057),s=i(2586),c=i(70997),u=i(44427),p=i(82847),l=i(60885),g=i(46841),m=i(45019),d=i(74788),Z=i(41823),f=((n=t(function e(){o(this,e),this.maskitoPublicApiDemo=i.e(1865).then(i.t.bind(i,81865,17)),this.maskExpressionDocPage="/core-concepts/mask-expression",this.processorsDocPage="/core-concepts/processors",this.pluginsDocPage="/core-concepts/plugins",this.overwriteModeDocPage="/core-concepts/overwrite-mode",this.transformerDocPage="/core-concepts/transformer"})).\u0275fac=function(e){return new(e||n)},n.\u0275cmp=d.Xpm({type:n,selectors:[["core-concepts-overview-doc-page"]],decls:65,vars:11,consts:[["header","Core concepts"],[1,"tui-space_bottom-4"],[1,"tui-space_top-0"],[1,"tui-list","tui-list_ordered"],[1,"tui-list__item"],["href","https://github.com/taiga-family/maskito/blob/main/projects/core/src/lib/types/mask-options.ts","rel","noreferrer","target","_blank","tuiLink",""],[1,"tui-space_bottom-4",3,"code"],["status","warning"],[1,"tui-space_bottom-0"],[1,"islands-wrapper"],["tuiIsland","",1,"island",3,"hoverable","routerLink"],[1,"tui-island__title"],[1,"tui-island__paragraph"]],template:function(e,t){1&e&&(d.TgZ(0,"tui-doc-page",0),d.TgZ(1,"section",1),d.TgZ(2,"p",2),d._uU(3," The main entity of Maskito core library is "),d.TgZ(4,"code"),d._uU(5,"Maskito"),d.qZA(),d._uU(6," class which accepts 2 arguments in constructor: "),d.qZA(),d.TgZ(7,"ol",3),d.TgZ(8,"li",4),d._uU(9," native "),d.TgZ(10,"code"),d._uU(11,"HTMLInputElement"),d.qZA(),d._uU(12," or "),d.TgZ(13,"code"),d._uU(14,"HTMLTextAreaElement"),d.qZA(),d.qZA(),d.TgZ(15,"li",4),d._uU(16," set of configurable "),d.TgZ(17,"a",5),d.TgZ(18,"code"),d._uU(19,"MaskitoOptions"),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d._UZ(20,"tui-doc-code",6),d.TgZ(21,"tui-notification",7),d.TgZ(22,"div"),d.TgZ(23,"strong"),d._uU(24,"Avoid wasting computation power or memory resources!"),d.qZA(),d.qZA(),d.TgZ(25,"p",8),d._uU(26," The only available public method "),d.TgZ(27,"code"),d._uU(28,"destroy"),d.qZA(),d._uU(29," removes all created event listeners. Call it to clean everything up when the work is finished. "),d.qZA(),d.qZA(),d.TgZ(30,"section"),d.TgZ(31,"p"),d._uU(32," To understand the capabilities of the Maskito library, you need to learn about the following features and concepts: "),d.qZA(),d.TgZ(33,"div",9),d.TgZ(34,"a",10),d.TgZ(35,"h3",11),d._uU(36,"Mask expression"),d.qZA(),d.TgZ(37,"p",12),d._uU(38,' Learn how to predefine your mask format via mask\xa0expression. This section describes different\xa0types of mask\xa0expression and explains meaning of "fixed\xa0character" term. '),d.qZA(),d.qZA(),d.TgZ(39,"a",10),d.TgZ(40,"h3",11),d._uU(41,"Processors"),d.qZA(),d.TgZ(42,"p",12),d._uU(43,"Learn about preprocessors and postprocessors."),d.qZA(),d.qZA(),d.TgZ(44,"a",10),d.TgZ(45,"h3",11),d._uU(46,"Plugins"),d.qZA(),d.TgZ(47,"p",12),d._uU(48," Learn how you can augment masking with some custom logic bound to the masked HTML element. "),d.qZA(),d.qZA(),d.TgZ(49,"a",10),d.TgZ(50,"h3",11),d._uU(51,"Overwrite mode"),d.qZA(),d.TgZ(52,"p",12),d._uU(53," Maskito can behave differently when user inserts new character in the middle of text field value. Learn how to control this behaviour via "),d.TgZ(54,"code"),d._uU(55,"overwriteMode"),d.qZA(),d._uU(56," parameter. "),d.qZA(),d.qZA(),d.TgZ(57,"a",10),d.TgZ(58,"h3",11),d._uU(59,"Transformer"),d.qZA(),d.TgZ(60,"p",12),d._uU(61," Learn how to correctly programatically update element's\xa0value via "),d.TgZ(62,"code"),d._uU(63,"maskitoTransform"),d.qZA(),d._uU(64," . "),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA()),2&e&&(d.xp6(20),d.Q6J("code",t.maskitoPublicApiDemo),d.xp6(14),d.Q6J("hoverable",!0)("routerLink",t.maskExpressionDocPage),d.xp6(5),d.Q6J("hoverable",!0)("routerLink",t.processorsDocPage),d.xp6(5),d.Q6J("hoverable",!0)("routerLink",t.pluginsDocPage),d.xp6(5),d.Q6J("hoverable",!0)("routerLink",t.overwriteModeDocPage),d.xp6(8),d.Q6J("hoverable",!0)("routerLink",t.transformerDocPage))},directives:[Z.qo,p.V,Z.c0,l.L,g.h,s.yS],styles:[".islands-wrapper[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center;grid-gap:2rem;gap:2rem}@media screen and (max-width: 47.9625em){.islands-wrapper[_ngcontent-%COMP%]{flex-direction:column}}.island[_ngcontent-%COMP%]{flex:1;min-width:14rem}@media screen and (min-width: 64em){.island[_ngcontent-%COMP%]{max-width:40%}}"],changeDetection:0}),n),h=function(){var e=t(function e(){o(this,e)});return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=d.oAB({type:e}),e.\u0275inj=d.cJS({imports:[[a.ez,c.fV,g.y,p.j,m.z,l.H,s.Bz.forChild((0,u.Ve)(f))]]}),e}()}}])}();