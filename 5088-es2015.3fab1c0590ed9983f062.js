"use strict";(self.webpackChunkmaskito=self.webpackChunkmaskito||[]).push([[5088],{55088:function(n){n.exports="import {forwardRef} from 'react';\n\nconst hiddenInputStyles = {\n    display: 'none',\n};\n\nexport const AwesomeInput = forwardRef<HTMLInputElement>((props, ref) => (\n    <div\n        id=\"awesome-input-wrapper\"\n        ref={ref}\n    >\n        <input style={hiddenInputStyles} />\n        <input\n            className=\"real-input\"\n            {...props}\n        />\n        <input style={hiddenInputStyles} />\n    </div>\n));\n"}}]);