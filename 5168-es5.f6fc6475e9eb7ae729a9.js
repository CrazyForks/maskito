!function(){"use strict";(self.webpackChunkmaskito=self.webpackChunkmaskito||[]).push([[5168],{25168:function(n){n.exports="import type {MaskitoOptions} from '@maskito/core';\nimport {useMaskito} from '@maskito/react';\n\nconst digitsOnlyMask: MaskitoOptions = {\n    mask: /^\\d+$/,\n};\n\nexport const App = () => {\n    const inputRef = useMaskito({options: digitsOnlyMask});\n\n    return (\n        <input\n            ref={inputRef}\n            placeholder=\"Enter a number\"\n        />\n    );\n};\n"}}])}();