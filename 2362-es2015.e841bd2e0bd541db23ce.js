"use strict";(self.webpackChunkmaskito=self.webpackChunkmaskito||[]).push([[2362],{92362:function(n){n.exports='<form\n    autocomplete="on"\n    tuiGroup\n    class="wrapper"\n    [formGroup]="form"\n>\n    <tui-input\n        formControlName="cardNumber"\n        class="number"\n    >\n        Card number\n        <input\n            autocomplete="cc-number"\n            inputmode="numeric"\n            placeholder="0000 0000 0000 0000"\n            tuiTextfield\n            [maskito]="cardMask"\n        />\n    </tui-input>\n    <tui-input\n        formControlName="expire"\n        class="expired"\n    >\n        EXP\n        <input\n            autocomplete="cc-exp"\n            inputmode="numeric"\n            placeholder="mm/yy"\n            tuiTextfield\n            [maskito]="expiredMask"\n        />\n    </tui-input>\n    <tui-input\n        formControlName="cvv"\n        class="cvv"\n    >\n        CVV\n        <input\n            autocomplete="cc-csc"\n            inputmode="numeric"\n            placeholder="000"\n            tuiTextfield\n            [maskito]="cvvMask"\n        />\n    </tui-input>\n</form>\n'}}]);