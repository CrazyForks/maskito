!function(){"use strict";(self.webpackChunkmaskito=self.webpackChunkmaskito||[]).push([[6976],{16976:function(n){n.exports="```ts\n// Best Practice \u2705\nuseMaskito({\n  options: maskitoOptions,\n  elementPredicate: predicate,\n});\n\n// Anti-Pattern \u274c\nuseMaskito({\n  options: {mask: /^.*$/},\n  elementPredicate: () => e.querySelector('input#my-input'),\n});\n```\n"}}])}();