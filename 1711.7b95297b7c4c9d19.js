"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[1711],{1711:e=>{e.exports="import {ChangeDetectionStrategy, Component} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {MaskitoDirective} from '@maskito/angular';\nimport {maskitoNumberOptionsGenerator, maskitoParseNumber} from '@maskito/kit';\n\nimport {UnmaskDirective} from './unmask.directive';\n\n@Component({\n    standalone: true,\n    selector: 'custom-unmask-handler-doc-example-5',\n    imports: [FormsModule, MaskitoDirective, UnmaskDirective],\n    templateUrl: './index.html',\n    changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class UnmaskDocExample5 {\n    /**\n     * Pay attention, this variable (form control value) always contains only NUMBER-type values.\n     * Despite it, textfield's value is always prettified formatted STRING.\n     */\n    protected value = 1000.42;\n\n    protected readonly maskito = maskitoNumberOptionsGenerator({\n        precision: 2,\n        thousandSeparator: ',',\n        decimalSeparator: '.',\n    });\n\n    /**\n     * `maskitoParseNumber` is built-in utility to convert\n     * entered number (as prettified formatted STRING) to number-type value\n     */\n    protected readonly unmaskHandler = maskitoParseNumber;\n}\n"}}]);