"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[3381],{3381:n=>{n.exports="import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {MaskitoDirective} from '@maskito/angular';\nimport {MASKITO_DEFAULT_OPTIONS} from '@maskito/core';\nimport {maskitoPhoneOptionsGenerator} from '@maskito/phone';\nimport {TuiTextfieldControllerModule} from '@taiga-ui/core';\nimport {TuiInputModule} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    selector: 'phone-doc-example-4',\n    imports: [\n        TuiInputModule,\n        TuiTextfieldControllerModule,\n        FormsModule,\n        MaskitoDirective,\n    ],\n    template: `\n        <tui-input\n            tuiTextfieldCustomContent=\"tuiIconPhoneLarge\"\n            [style.max-width.rem]=\"30\"\n            [(ngModel)]=\"value\"\n        >\n            Lazy metadata\n            <input\n                autocomplete=\"tel\"\n                inputmode=\"tel\"\n                tuiTextfield\n                [maskito]=\"mask\"\n            />\n        </tui-input>\n    `,\n    changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class PhoneMaskDocExample4 implements OnInit {\n    value = '+7 920 123-4567';\n    mask = MASKITO_DEFAULT_OPTIONS;\n\n    async ngOnInit(): Promise<void> {\n        this.mask = maskitoPhoneOptionsGenerator({\n            countryIsoCode: 'RU',\n            metadata: await import('libphonenumber-js/min/metadata').then(m => m.default),\n        });\n    }\n}\n"}}]);