!function(){"use strict";(self.webpackChunkmaskito=self.webpackChunkmaskito||[]).push([[1223],{51223:function(e){e.exports="```ts\nimport './styles.css';\nimport {Maskito} from '@maskito/core';\nimport mask from './mask';\n\nconst element: HTMLInputElement | HTMLTextAreaElement | null = document.querySelector('input, textarea');\n\nif (element) {\n  const maskedElement = new Maskito(element, mask);\n\n  console.info('Call this function when the element is detached from DOM', maskedElement.destroy);\n}\n```\n"}}])}();