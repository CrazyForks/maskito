"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[2400],{2400:n=>{n.exports="```js\nimport {Maskito, MASKITO_DEFAULT_OPTIONS} from '@maskito/core';\nimport {maskitoPhoneOptionsGenerator} from '@maskito/phone';\n\nconst element = document.querySelector('input,textarea');\n\nlet maskedInput;\n\n(async function initMask() {\n  const maskitoOptions = maskitoPhoneOptionsGenerator({\n    countryIsoCode: 'RU',\n    metadata: await import('libphonenumber-js/min/metadata').then((m) => m.default),\n  });\n\n  maskedInput = new Maskito(element, maskitoOptions);\n})();\n\n// Call this function when the element is detached from DOM\nmaskedInput.destroy();\n```\n"}}]);