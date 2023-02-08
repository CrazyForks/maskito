"use strict";(self.webpackChunkmaskito=self.webpackChunkmaskito||[]).push([[7681],{7681:e=>{e.exports="```ts\nimport {Maskito} from '@maskito/core';\n\nconst numberInput = new Maskito(element, {\n  mask: /^\\d+(,\\d*)?$/,\n  postprocessor: ({value, selection}, initialElementState) => {\n    const [from, to] = selection;\n    const noRepeatedLeadingZeroesValue = value.replace(/^0+/, '0');\n    const removedCharacters = value.length - noRepeatedLeadingZeroesValue.length;\n\n    return {\n      value: noRepeatedLeadingZeroesValue, // User types \"000000\" => 0|\n      selection: [Math.max(from - removedCharacters, 0), Math.max(to - removedCharacters, 0)],\n    };\n  },\n});\n```\n"}}]);