!function(){"use strict";(self.webpackChunkmaskito=self.webpackChunkmaskito||[]).push([[677],{30677:function(o){o.exports="import {MaskitoOptions} from '@maskito/core';\nimport {maskitoNumberOptionsGenerator} from '@maskito/kit';\n\nexport function getMaskitoOptions(decimalZeroPadding: boolean): MaskitoOptions {\n    return maskitoNumberOptionsGenerator({\n        decimalZeroPadding,\n        precision: 2,\n        decimalSeparator: '.',\n        isNegativeAllowed: false,\n    });\n}\n"}}])}();