!function(){"use strict";(self.webpackChunkmaskito=self.webpackChunkmaskito||[]).push([[1165],{71165:function(o){o.exports="import {MaskitoOptions, maskitoPipe} from '@maskito/core';\nimport {\n    maskitoPostfixPostprocessorGenerator,\n    maskitoPrefixPostprocessorGenerator,\n} from '@maskito/kit';\n\nexport default {\n    // prefix (dollar sign) + digits + postfix ('.00')\n    mask: /^\\$?\\d*(\\.0{0,2})?$/,\n    postprocessor: maskitoPipe(\n        maskitoPrefixPostprocessorGenerator('$'),\n        maskitoPostfixPostprocessorGenerator('.00'),\n    ),\n} as MaskitoOptions;\n"}}])}();