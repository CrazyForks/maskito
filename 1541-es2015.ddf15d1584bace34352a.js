"use strict";(self.webpackChunkmaskito=self.webpackChunkmaskito||[]).push([[1541],{31541:function(n){n.exports="import {ChangeDetectionStrategy, Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {maskitoNumberOptionsGenerator} from '@maskito/kit';\n\n@Component({\n    selector: 'cva-doc-example-3',\n    templateUrl: './template.html',\n    changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class CvaDocExample3 {\n    readonly control = new FormControl();\n\n    readonly maskito = maskitoNumberOptionsGenerator({precision: 2});\n\n    setValue(): void {\n        this.control.setValue(12345.67);\n    }\n}\n"}}]);