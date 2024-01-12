!function(){"use strict";(self.webpackChunkmaskito=self.webpackChunkmaskito||[]).push([[7948],{87948:function(n){n.exports='import {ChangeDetectionStrategy, Component, ElementRef, ViewChild} from \'@angular/core\';\n\nimport mask, {PLACEHOLDER, removePlaceholder} from \'./mask\';\n\n@Component({\n    selector: \'placeholder-doc-example-2\',\n    template: `\n        <tui-input\n            [style.max-width.rem]="20"\n            [tuiTextfieldCustomContent]="usFlag"\n            [(ngModel)]="value"\n        >\n            Enter US phone number\n            <input\n                #inputRef\n                inputmode="tel"\n                tuiTextfield\n                [maskito]="maskitoOptions"\n                (blur)="onBlur()"\n                (focus)="onFocus()"\n            />\n\n            <ng-template #usFlag>\n                <img\n                    alt="Flag of the United States"\n                    width="28"\n                    [src]="\'US\' | tuiFlag"\n                />\n            </ng-template>\n        </tui-input>\n    `,\n    changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class PlaceholderDocExample2 {\n    @ViewChild(\'inputRef\', {read: ElementRef})\n    inputRef!: ElementRef<HTMLInputElement>;\n\n    readonly maskitoOptions = mask;\n    value = \'\';\n\n    onBlur(): void {\n        const cleanValue = removePlaceholder(this.value);\n\n        this.value = cleanValue === \'+1\' ? \'\' : cleanValue;\n    }\n\n    onFocus(): void {\n        const initialValue = this.value || \'+1 (\';\n\n        this.value = initialValue + PLACEHOLDER.slice(initialValue.length);\n    }\n}\n'}}])}();