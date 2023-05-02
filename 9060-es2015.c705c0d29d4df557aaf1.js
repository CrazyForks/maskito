"use strict";(self.webpackChunkmaskito=self.webpackChunkmaskito||[]).push([[9060],{19060:function(n){n.exports="```tsx\nimport type {MaskitoOptions} from '@maskito/core';\nimport {useMaskito} from '@maskito/react';\n\nconst digitsOnlyMask: MaskitoOptions = {\n  mask: /^\\d+$/,\n};\n\nconst App = () => {\n  const inputRef = useMaskito({options: digitsOnlyMask});\n  const textareaRef = useMaskito({options: digitsOnlyMask});\n\n  return (\n    <>\n      <input ref={inputRef} />\n      <textarea ref={textareaRef} />\n    </>\n  );\n};\n```\n"}}]);