"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[7829],{7829:e=>{e.exports="import type {AfterViewInit} from '@angular/core';\nimport {Directive, inject, Input} from '@angular/core';\nimport {DefaultValueAccessor} from '@angular/forms';\nimport {MaskitoDirective} from '@maskito/angular';\nimport {maskitoTransform} from '@maskito/core';\nimport {identity} from 'rxjs';\n\n@Directive({\n    standalone: true,\n    selector: '[maskito][unmaskHandler]',\n})\nexport class UnmaskDirective implements AfterViewInit {\n    private readonly accessor = inject(DefaultValueAccessor);\n    private readonly maskitoDirective = inject(MaskitoDirective);\n\n    @Input()\n    public unmaskHandler: (value: string) => any = identity;\n\n    @Input()\n    public maskHandler: (value: any) => string = (value) =>\n        this.maskitoDirective.options\n            ? maskitoTransform(String(value), this.maskitoDirective.options)\n            : value;\n\n    public ngAfterViewInit(): void {\n        const originalOnChange = this.accessor.onChange.bind(this.accessor);\n        const originalWriteValue = this.accessor.writeValue.bind(this.accessor);\n\n        this.accessor.onChange = (value) => originalOnChange(this.unmaskHandler(value));\n        this.accessor.writeValue = (value) => originalWriteValue(this.maskHandler(value));\n    }\n}\n"}}]);