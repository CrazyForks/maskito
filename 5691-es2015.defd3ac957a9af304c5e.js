"use strict";(self.webpackChunkmaskito=self.webpackChunkmaskito||[]).push([[5691],{35691:function(s){s.exports="import {MaskitoOptions} from '@maskito/core';\nimport {maskitoDateOptionsGenerator, maskitoWithPlaceholder} from '@maskito/kit';\n\nexport const PLACEHOLDER = 'dd/mm/yyyy';\n\nconst dateOptions = maskitoDateOptionsGenerator({\n    mode: 'dd/mm/yyyy',\n    separator: '/',\n});\n\nconst {\n    plugins, // plugins keeps caret inside actual value and remove placeholder on blur\n    ...placeholderOptions\n    // pass 'true' as second argument to add plugin to hide placeholder when input is not focused\n} = maskitoWithPlaceholder(PLACEHOLDER, true);\n\nexport default {\n    ...dateOptions,\n    plugins: plugins.concat(dateOptions.plugins || []),\n    preprocessors: [\n        // Always put it BEFORE all other preprocessors\n        ...placeholderOptions.preprocessors,\n        ...dateOptions.preprocessors,\n    ],\n    postprocessors: [\n        ...dateOptions.postprocessors,\n        // Always put it AFTER all other postprocessors\n        ...placeholderOptions.postprocessors,\n    ],\n} as Required<MaskitoOptions>;\n"}}]);