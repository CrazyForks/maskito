"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[4047],{4047:t=>{t.exports="# Changelog\n\nAll notable changes to this project will be documented in this file. See\n[standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.\n\n### [2.0.1](https://github.com/taiga-family/maskito/compare/v2.0.0...v2.0.1) (2024-01-31)\n\n### Bug Fixes\n\n- **core:** `maskitoUpdateElement` should not dispatch `InputEvent` if value is not changed\n  ([#977](https://github.com/taiga-family/maskito/issues/977))\n  ([2410b64](https://github.com/taiga-family/maskito/commit/2410b6478c88f4d530b4469d7d50b1e4663d1572))\n- **core:** don't execute `setSelectionRange` if element is not focused\n  ([#937](https://github.com/taiga-family/maskito/issues/937))\n  ([92f288b](https://github.com/taiga-family/maskito/commit/92f288b677dbe77f7978308dd7b1612d6bfd68fb))\n- **kit:** `Number` rejects the first time input of full width digits\n  ([#955](https://github.com/taiga-family/maskito/issues/955))\n  ([c416884](https://github.com/taiga-family/maskito/commit/c41688488630e83d69eba795580916145e5fe17c))\n- **react:** `@maskito/react` library should not include `core-js` imports\n  ([#962](https://github.com/taiga-family/maskito/issues/962))\n  ([3b7e401](https://github.com/taiga-family/maskito/commit/3b7e4014029fae206020723c18762f08e92b8c41))\n\n## [2.0.0](https://github.com/taiga-family/maskito/compare/v1.9.0...v2.0.0) (2024-01-22)\n\n### \u26a0 BREAKING CHANGES\n\n- **core:** merge `MaskitoElementPredicate` & `MaskitoElementPredicateAsync` into single type\n  ([#757](https://github.com/taiga-family/maskito/issues/757))\n- **core:** remove value's calibration on initialization + new `maskitoInitialCalibrationPlugin`\n  ([#778](https://github.com/taiga-family/maskito/issues/778))\n- **core:** bump Firefox browser support (55+ => 87+) ([#876](https://github.com/taiga-family/maskito/issues/876)) and\n  drop legacy fallbacks for `Firefox` ([#756](https://github.com/taiga-family/maskito/issues/756))\n- **kit:** delete deprecated `separator` for `DateRange` (use `dateSeparator` instead)\n  ([#790](https://github.com/taiga-family/maskito/issues/790))\n- **angular:** bump minimum required Angular version (12+ => 15+)\n  ([#710](https://github.com/taiga-family/maskito/issues/710))\n  ([#720](https://github.com/taiga-family/maskito/issues/720))\n  ([#725](https://github.com/taiga-family/maskito/issues/725))\n- **angular:** deprecate `MaskitoModule` (use standalone `MaskitoDirective`, `MaskitoCVA`, `MaskitoPipe`)\n  ([#754](https://github.com/taiga-family/maskito/issues/754))\n\n### \u{1f680} More features\n\n- **core:** new built-in `maskitoStrictCompositionPlugin` ([#881](https://github.com/taiga-family/maskito/issues/881))\n- **kit:** `Number` allows to enter full width numbers ([#864](https://github.com/taiga-family/maskito/issues/864))\n\n### \u{1f41e} Bug Fixes\n\n- **core:** drop some excess dispatches of `Input`-event ([#882](https://github.com/taiga-family/maskito/issues/882))\n- **kit:** add `{bubbles:true}` for `input` events inside all built-in plugins to support `ReactSyntheticEvent`\n  ([#806](https://github.com/taiga-family/maskito/issues/806))\n- **kit:** `Number` has problems when prefix/postfix includes `decimalSeparator` symbol\n  ([#874](https://github.com/taiga-family/maskito/issues/874))\n  ([#816](https://github.com/taiga-family/maskito/issues/816))\n  ([#921](https://github.com/taiga-family/maskito/issues/921))\n- **kit:** `Placeholder` is not compatible with `maskitoEventHandler` + `focus`/`blur` events\n  ([#928](https://github.com/taiga-family/maskito/pull/928))\n\n## [1.9.0](https://github.com/taiga-family/maskito/compare/v1.8.2...v1.9.0) (2023-11-23)\n\n### Features\n\n- **phone:** add ability to configure the separator ([#685](https://github.com/taiga-family/maskito/issues/685))\n  ([ab6bb11](https://github.com/taiga-family/maskito/commit/ab6bb11b1b40e069d31598b676c04456329aaf64))\n\n### [1.8.2](https://github.com/taiga-family/maskito/compare/v1.8.1...v1.8.2) (2023-11-16)\n\n### Bug Fixes\n\n- **kit:** `PrefixPostprocessor` has problems with multi-character prefix\n  ([#669](https://github.com/taiga-family/maskito/issues/669))\n  ([be459e5](https://github.com/taiga-family/maskito/commit/be459e51f3cbf028fa36b1b6a57e47d7fe8482a3))\n\n### [1.8.1](https://github.com/taiga-family/maskito/compare/v1.8.0...v1.8.1) (2023-10-19)\n\n### Bug Fixes\n\n- **kit:** `Date` accept single character date segment during paste\n  ([#610](https://github.com/taiga-family/maskito/issues/610))\n  ([e493198](https://github.com/taiga-family/maskito/commit/e4931987c2fad37894ea07f658f08e35152040df))\n\n## [1.8.0](https://github.com/taiga-family/maskito/compare/v1.7.0...v1.8.0) (2023-10-18)\n\n### Features\n\n- **angular:** allow nullable options ([#605](https://github.com/taiga-family/maskito/issues/605))\n  ([21eaa7c](https://github.com/taiga-family/maskito/commit/21eaa7c0c0e7d5173c6f070f5222ba6492e196a6))\n\n### Bug Fixes\n\n- **kit:** `Number` has broken zero padding when `decimalSeparator` equals to non-default value\n  ([#586](https://github.com/taiga-family/maskito/issues/586))\n  ([7241761](https://github.com/taiga-family/maskito/commit/72417614dd4974c22854dfacc2ee35044c080074))\n\n## [1.7.0](https://github.com/taiga-family/maskito/compare/v1.6.0...v1.7.0) (2023-09-15)\n\n### Features\n\nNew `@maskito/phone` library ([#425](https://github.com/taiga-family/maskito/pull/425))\n([#482](https://github.com/taiga-family/maskito/issues/482))\n\nLearn more: https://maskito.dev/addons/phone\n\n## [1.6.0](https://github.com/taiga-family/maskito/compare/v1.5.1...v1.6.0) (2023-09-15)\n\n### Features\n\n- **react:** `elementPredicate` can accept asynchronous predicate\n  ([#502](https://github.com/taiga-family/maskito/issues/502))\n  ([4bbf758](https://github.com/taiga-family/maskito/commit/4bbf758107ed4b2fdbde5a241f22c0f363c22104))\n\n### Bug Fixes\n\n- **kit:** `Number` should accept all types of spaces as interchangeable characters for `thousandSeparator`\n  ([#505](https://github.com/taiga-family/maskito/issues/505))\n  ([73975bb](https://github.com/taiga-family/maskito/commit/73975bbc676487330359056c367f73e32ea6eaf4))\n\n### [1.5.1](https://github.com/taiga-family/maskito/compare/v1.5.0...v1.5.1) (2023-09-08)\n\n### Bug Fixes\n\n- **vue:** `elementPredicate` should accept `MaskitoElementPredicateAsync` type\n  ([#487](https://github.com/taiga-family/maskito/issues/487))\n  ([fe7e9dc](https://github.com/taiga-family/maskito/commit/fe7e9dcb468bf3ab30978c947d8fa21cc0e51a75))\n\n## [1.5.0](https://github.com/taiga-family/maskito/compare/v1.4.0...v1.5.0) (2023-09-04)\n\n### Features\n\n- **core:** add IME composition support ([#467](https://github.com/taiga-family/maskito/issues/467))\n  ([e7d664b](https://github.com/taiga-family/maskito/commit/e7d664b66a008a742c0a532e341b0e0bb0a0f759))\n- **demo:** documentation is now available at https://maskito.dev\n  ([#392](https://github.com/taiga-family/maskito/issues/392))\n  ([355f87f](https://github.com/taiga-family/maskito/commit/355f87fd536758bc2db59f760ed114d28264122a))\n\n### Bug Fixes\n\n- **kit:** `maskitoCaretGuard` doesn't work after focus on `<select />`\n  ([#462](https://github.com/taiga-family/maskito/issues/462))\n  ([9f456da](https://github.com/taiga-family/maskito/commit/9f456dad7f7f9d02db4eb5993ecb5fb5aabfe613))\n- **kit:** `Number` should drop items from `decimalPseudoSeparators` if any is equal to `thousandSeparator`\n  ([#390](https://github.com/taiga-family/maskito/issues/390))\n  ([2107adc](https://github.com/taiga-family/maskito/commit/2107adc445ed26ce1507c5e0c534b668d7ae5b12))\n\n## [1.4.0](https://github.com/taiga-family/maskito/compare/v1.3.0...v1.4.0) (2023-07-27)\n\n### Features\n\n- **kit:** `Date` & `DateRange` support new modes `yyyy`, `mm/yyyy`, `yyyy/mm`\n  ([#384](https://github.com/taiga-family/maskito/issues/384))\n  ([7886d50](https://github.com/taiga-family/maskito/commit/7886d50012a76fec872816b6d5e2b7e67c931dd7))\n- **kit:** `Time` supports new mode `HH` ([#385](https://github.com/taiga-family/maskito/issues/385))\n  ([3c7a3f6](https://github.com/taiga-family/maskito/commit/3c7a3f65a0013152473ba57af8da28012cb58f32))\n\n## [1.3.0](https://github.com/taiga-family/maskito/compare/v1.2.2...v1.3.0) (2023-07-24)\n\n### Features\n\n- **kit:** `DateRange` add configurable parameter `rangeSeparator`\n  ([#376](https://github.com/taiga-family/maskito/issues/376))\n  ([d904842](https://github.com/taiga-family/maskito/commit/d90484214da76f4c73ad925eef5fe391a154c499))\n\n### Bug Fixes\n\n- **kit:** `Number` has problems with run-time updates of postfix\n  ([#380](https://github.com/taiga-family/maskito/issues/380))\n  ([8210896](https://github.com/taiga-family/maskito/commit/8210896d2095a44e79a27a38e4c8745e2beccdb7))\n\n### [1.2.2](https://github.com/taiga-family/maskito/compare/v1.2.1...v1.2.2) (2023-07-19)\n\n### Bug Fixes\n\n- **kit:** `maskitoCaretGuard` should wait for `mouseup` before execution\n  ([#372](https://github.com/taiga-family/maskito/issues/372))\n  ([8554fea](https://github.com/taiga-family/maskito/commit/8554fead2a2474104f0674fb597cf86467274943))\n- **kit:** `Number` should remove repeated leading zeroes for integer part only on `blur`-event\n  ([#373](https://github.com/taiga-family/maskito/issues/373))\n  ([7cf4938](https://github.com/taiga-family/maskito/commit/7cf4938853ccbd049b89482f8eb22ab4e71fe01f))\n\n### [1.2.1](https://github.com/taiga-family/maskito/compare/v1.2.0...v1.2.1) (2023-07-11)\n\n### Bug Fixes\n\n- **kit:** `Number` with `postfix` should be compatible with `decimalZeroPadding`\n  ([#364](https://github.com/taiga-family/maskito/issues/364))\n  ([501cf9c](https://github.com/taiga-family/maskito/commit/501cf9c747229d1776fb62cc04fbc8879990c617))\n- **kit:** `Prefix`/`Postfix` is incompatible if they end/start with the same character\n  ([#366](https://github.com/taiga-family/maskito/issues/366))\n  ([06afbcb](https://github.com/taiga-family/maskito/commit/06afbcb4a2c5c15e2ef9dc81db4309adf01aa8ef))\n\n## [1.2.0](https://github.com/taiga-family/maskito/compare/v1.1.1...v1.2.0) (2023-07-03)\n\n### Features\n\n- **kit:** `maskitoCaretGuard`'s function has the 2nd argument with current selection range\n  ([#358](https://github.com/taiga-family/maskito/issues/358))\n  ([eedc4d6](https://github.com/taiga-family/maskito/commit/eedc4d610efaf36b98a4049f5c5334561b5b21c5))\n\n### Bug Fixes\n\n- **kit:** `maskitoCaretGuard` incorrectly validates the left side of constraints\n  ([#356](https://github.com/taiga-family/maskito/issues/356))\n  ([17ee90f](https://github.com/taiga-family/maskito/commit/17ee90fe055f6a8370d6ea75ff2b236fd498441e))\n- **kit:** `Number` should skip min/max validation if value does not contain any digits\n  ([#359](https://github.com/taiga-family/maskito/issues/359))\n  ([ed8221e](https://github.com/taiga-family/maskito/commit/ed8221e14eca62334af41b4c8e571eb86ed68247))\n\n### [1.1.1](https://github.com/taiga-family/maskito/compare/v1.1.0...v1.1.1) (2023-06-29)\n\n### Bug Fixes\n\n- **core:** don't ignore native attribute `maxlength` ([#350](https://github.com/taiga-family/maskito/issues/350))\n  ([8504f49](https://github.com/taiga-family/maskito/commit/8504f497152931da06dd745763be2505587f97b4))\n- **kit:** `Number` should ignore new typed decimal separator if it already exists in text field\n  ([#351](https://github.com/taiga-family/maskito/issues/351))\n  ([4ccfdc8](https://github.com/taiga-family/maskito/commit/4ccfdc86ff08bcebfd18c04403aa9c9c83cbbd02))\n\n## [1.1.0](https://github.com/taiga-family/maskito/compare/v1.0.0...v1.1.0) (2023-06-23)\n\n### Features\n\n- **kit:** `maskitoEventHandler` accepts `AddEventListenerOptions` as the 3d optional argument\n  ([#346](https://github.com/taiga-family/maskito/issues/346))\n  ([1d5866e](https://github.com/taiga-family/maskito/commit/1d5866efa5e0e4736dd735ae006e027e9bd01e31))\n- **kit:** use capturing phase for `focus`/`blur` events in plugins\n  ([#347](https://github.com/taiga-family/maskito/issues/347))\n  ([ef539e1](https://github.com/taiga-family/maskito/commit/ef539e160f601023e513036d704f7daff9689286))\n\n### Bug Fixes\n\n- **kit:** `Date` allows to replace the whole selection range with zero\n  ([#345](https://github.com/taiga-family/maskito/issues/345))\n  ([98fd21d](https://github.com/taiga-family/maskito/commit/98fd21d50899db365b864faf597fad9a21a3db06))\n\n## [1.0.0](https://github.com/taiga-family/maskito/compare/v0.16.0...v1.0.0) (2023-06-21)\n\n### \u26a0 BREAKING CHANGES\n\n- **core:** delete deprecated `preprocessor` & `postprocessor` from `MaskitoOptions`\n  ([#337](https://github.com/taiga-family/maskito/issues/337))\n  ([0b6aad2](https://github.com/taiga-family/maskito/commit/0b6aad2622ed152d12c91f8ca64b767709ecdbc2))\n- **kit:** delete deprecated `isNegativeAllowed` parameter from `Number` mask\n  ([#338](https://github.com/taiga-family/maskito/issues/338))\n  ([9fd3005](https://github.com/taiga-family/maskito/commit/9fd30055b3157072076f7a8567045fac05b6af9e))\n\n## [0.16.0](https://github.com/taiga-family/maskito/compare/v0.15.0...v0.16.0) (2023-06-20)\n\n### Features\n\n- **vue:** support async predicate ([#336](https://github.com/taiga-family/maskito/issues/336))\n  ([d1452b5](https://github.com/taiga-family/maskito/commit/d1452b5f1b2f8a252dfd05a5c1eb04ba971a1970))\n\n### Bug Fixes\n\n- **kit:** `Number` fails to parse small number on blur (exponential notation problem)\n  ([#339](https://github.com/taiga-family/maskito/issues/339))\n  ([7f83a7f](https://github.com/taiga-family/maskito/commit/7f83a7f170906c1911eb4444da2d636c0338ed4a))\n\n## [0.15.0](https://github.com/taiga-family/maskito/compare/v0.14.0...v0.15.0) (2023-06-14)\n\n### Features\n\n- **core:** add new parameters `preprocessors` & `postprocessors` and deprecate `preprocessor` & `postprocessor`\n  ([#333](https://github.com/taiga-family/maskito/issues/333))\n  ([0137775](https://github.com/taiga-family/maskito/commit/01377751a9875143257930934b1e2a9143b6da03))\n\n### Bug Fixes\n\n- **kit:** `maskitoParseNumber` should return `NaN` for all strings with no digits\n  ([#331](https://github.com/taiga-family/maskito/issues/331))\n  ([d1ebcec](https://github.com/taiga-family/maskito/commit/d1ebceceedf418b21a68082f7350002d09159ebf))\n- **kit:** `Number` incorrectly implements `min`/`max` behaviour\n  ([#334](https://github.com/taiga-family/maskito/issues/334))\n  ([9876d88](https://github.com/taiga-family/maskito/commit/9876d885f98f86d18db04d723460b468bca3837d))\n\n## [0.14.0](https://github.com/taiga-family/maskito/compare/v0.13.0...v0.14.0) (2023-06-09)\n\n### Features\n\n- **angular:** `[maskitoElement]` can accept asynchronous predicate\n  ([#316](https://github.com/taiga-family/maskito/issues/316))\n  ([3d8949e](https://github.com/taiga-family/maskito/commit/3d8949e878e644079b7f5404cb9ebf6c5eadab86))\n- **kit:** `Number` pads empty integer part with zero on blur (if decimal part exists)\n  ([#328](https://github.com/taiga-family/maskito/issues/328))\n  ([bd01967](https://github.com/taiga-family/maskito/commit/bd01967fba38be26a3c8f0d2f23c0ced12d3b1c2))\n\n## [0.13.0](https://github.com/taiga-family/maskito/compare/v0.12.1...v0.13.0) (2023-06-02)\n\n### Features\n\n- **core:** better layout-independent way to detect `Undo` and `Redo`\n  ([#320](https://github.com/taiga-family/maskito/issues/320))\n  ([4c5a7f6](https://github.com/taiga-family/maskito/commit/4c5a7f64b9a8ac209584c75e17ec022674b87c1b))\n- **vue:** add dedicated Vue package ([#321](https://github.com/taiga-family/maskito/issues/321))\n  ([f6ffb24](https://github.com/taiga-family/maskito/commit/f6ffb24eca5f1a1a57a93103b9e74cdf410e4132))\n\n### [0.12.1](https://github.com/taiga-family/maskito/compare/v0.12.0...v0.12.1) (2023-05-25)\n\n### Bug Fixes\n\n- **kit:** `DateTime` validate min / max if date is complete\n  ([#314](https://github.com/taiga-family/maskito/issues/314))\n  ([5783e76](https://github.com/taiga-family/maskito/commit/5783e766a657abcf0fc7f8a8d12ac1bf412dc18a))\n- **kit:** `Time` & `DateTime` should accept time segment separator typed by user\n  ([#317](https://github.com/taiga-family/maskito/issues/317))\n  ([3bcac7f](https://github.com/taiga-family/maskito/commit/3bcac7f6566043991a9211f04db744a5ec6f019f))\n\n## [0.12.0](https://github.com/taiga-family/maskito/compare/v0.11.1...v0.12.0) (2023-05-19)\n\n### Features\n\n- **core:** add `plugins` to `MaskitoOptions` ([#305](https://github.com/taiga-family/maskito/issues/305))\n  ([b512ae2](https://github.com/taiga-family/maskito/commit/b512ae2c64b2a2c6560e2e5c68d8c72952474c71))\n- **core:** expose `MaskitoMask`, `MaskitoPreprocessor`, `MaskitoPostprocessor` and `MaskitoPlugin`\n  ([#307](https://github.com/taiga-family/maskito/issues/307))\n  ([9315a9f](https://github.com/taiga-family/maskito/commit/9315a9f4620b3be86cf3b7af993861664f281a19))\n- **kit:** new `maskitoWithPlaceholder` utility ([#299](https://github.com/taiga-family/maskito/issues/299))\n  ([21eb69c](https://github.com/taiga-family/maskito/commit/21eb69cfeb73bbe645d5a5879659ab8b6aadbf0c))\n\n### [0.11.1](https://github.com/taiga-family/maskito/compare/v0.11.0...v0.11.1) (2023-05-11)\n\n### Bug Fixes\n\n- **core:** `insertFromDrop` action behaves now in the same way as `insertFromPaste`\n  ([#291](https://github.com/taiga-family/maskito/issues/291))\n  ([58e0fcc](https://github.com/taiga-family/maskito/commit/58e0fccb7ddd3c741ffa3c8b99efbcf4571aab37))\n- **kit:** `Time` doesn't validate time segments on `drop` event\n  ([#289](https://github.com/taiga-family/maskito/issues/289))\n  ([0c6d1b9](https://github.com/taiga-family/maskito/commit/0c6d1b9917d0c86a98c0d215c38a0e2076ff5680))\n\n## [0.11.0](https://github.com/taiga-family/maskito/compare/v0.10.0...v0.11.0) (2023-05-02)\n\n### Features\n\n- **react:** new library `@maskito/react` ([#273](https://github.com/taiga-family/maskito/issues/273))\n  ([4c2f755](https://github.com/taiga-family/maskito/commit/4c2f755bac9513689964af7fdb7f4deec56bfb52))\n\n## [0.10.0](https://github.com/taiga-family/maskito/compare/v0.9.0...v0.10.0) (2023-04-25)\n\n### Features\n\n- **kit:** `Number` keeps untouched decimal part if `precision: Infinity`\n  ([#253](https://github.com/taiga-family/maskito/issues/253))\n  ([261779e](https://github.com/taiga-family/maskito/commit/261779ead327397a61b27e634bc827ee70b718f4))\n- **kit:** `Number` supports new `prefix` & `postfix` parameters\n  ([#264](https://github.com/taiga-family/maskito/issues/264))\n  ([6e78581](https://github.com/taiga-family/maskito/commit/6e785818dabcde623d8c1c40a584166a0a66f5b6))\n- **kit:** new `maskitoPostfixPostprocessorGenerator` ([#257](https://github.com/taiga-family/maskito/issues/257))\n  ([fdc86db](https://github.com/taiga-family/maskito/commit/fdc86dbad368bfc17efd1047b7d68d9622968bb0))\n\n### Bug Fixes\n\n- **kit:** `Number` fails to trim leading zeroes after deleting of leading digit\n  ([#268](https://github.com/taiga-family/maskito/issues/268))\n  ([4ae0010](https://github.com/taiga-family/maskito/commit/4ae0010ef2149694d22d7ae9eb8c9880120c8c75))\n- **kit:** `Number` should trim redundant thousand separators\n  ([#267](https://github.com/taiga-family/maskito/issues/267))\n  ([100b793](https://github.com/taiga-family/maskito/commit/100b79317a420103ca98a3b43fe646a6f77d19d5))\n- **kit:** fix first zero in short-format date-mask ([#251](https://github.com/taiga-family/maskito/issues/251))\n  ([08bdfd2](https://github.com/taiga-family/maskito/commit/08bdfd26727777c3a6fc870e433003be2b64cc0e))\n\n## [0.9.0](https://github.com/taiga-family/maskito/compare/v0.8.1...v0.9.0) (2023-03-31)\n\n### Features\n\n- **kit:** new `maskitoPrefixPostprocessorGenerator` ([#235](https://github.com/taiga-family/maskito/issues/235))\n  ([50f0d58](https://github.com/taiga-family/maskito/commit/50f0d58ccbfa22d15174d76479a9d642687db099))\n\n### Bug Fixes\n\n- **angular:** Jest throws `Class constructor DefaultValueAccessor cannot be invoked without 'new'`\n  ([#232](https://github.com/taiga-family/maskito/issues/232))\n  ([5089612](https://github.com/taiga-family/maskito/commit/508961288898a5fdd21cc0e26b23ecc8845f9068))\n\n### [0.8.1](https://github.com/taiga-family/maskito/compare/v0.8.0...v0.8.1) (2023-03-27)\n\n### Bug Fixes\n\n- `@maskito/core` & `@maskito/kit` now include both `UMD` and `ESM` module formats\n  ([#227](https://github.com/taiga-family/maskito/issues/227))\n  ([fa1c514](https://github.com/taiga-family/maskito/commit/fa1c514a5753e3bca20e8b0994e4bf9f1c0ab6a4))\n\n## [0.8.0](https://github.com/taiga-family/maskito/compare/v0.7.2...v0.8.0) (2023-03-23)\n\n### Features\n\n- **kit:** `DateRange` swaps dates if the 2nd date is less than the 1st one\n  ([#212](https://github.com/taiga-family/maskito/issues/212))\n  ([3efbb42](https://github.com/taiga-family/maskito/commit/3efbb42f2dd5c4e43ff514da7a82abfc7c4b3a38))\n\n### Bug Fixes\n\n- **core:** incorrect order of actions during update of native element\n  ([#225](https://github.com/taiga-family/maskito/issues/225))\n  ([394d5d9](https://github.com/taiga-family/maskito/commit/394d5d996bdb9d21229ea0301eb3f776bee05d30))\n\n### [0.7.2](https://github.com/taiga-family/maskito/compare/v0.7.1...v0.7.2) (2023-03-23)\n\n### Bug Fixes\n\n- **angular:** `@maskito/angular` should not depend on `@maskito/kit`\n  ([#221](https://github.com/taiga-family/maskito/issues/221))\n  ([0ae7b20](https://github.com/taiga-family/maskito/commit/0ae7b2089ec0436caa8dbb14d5c696ae93e9e7ed))\n- **angular:** `npm i @maskito/angular` throws `unable to resolve dependency tree`\n  ([#220](https://github.com/taiga-family/maskito/issues/220))\n  ([8b4d6e6](https://github.com/taiga-family/maskito/commit/8b4d6e6186db47f97d328186b7afd9af75a3889b))\n\n### [0.7.1](https://github.com/taiga-family/maskito/compare/v0.7.0...v0.7.1) (2023-03-22)\n\n### Bug Fixes\n\n- **angular:** use `@nrwl/angular:package` executor instead of `@nrwl/angular:ng-packagr-lite`\n  ([#216](https://github.com/taiga-family/maskito/issues/216))\n  ([164d015](https://github.com/taiga-family/maskito/commit/164d015c2f18a279e195b45329e84c0d023c9483))\n- **kit:** `Number` broken `Delete`-button navigation if `decimalZeroPadding=true`\n  ([#211](https://github.com/taiga-family/maskito/issues/211))\n  ([1b750d1](https://github.com/taiga-family/maskito/commit/1b750d135ebd53bfeda2ca734425de08a808b1af))\n\n## [0.7.0](https://github.com/taiga-family/maskito/compare/v0.6.0...v0.7.0) (2023-03-20)\n\n### Features\n\n- **core:** add `deleteSoftLineBackward` & `deleteSoftLineForward` support\n  ([#207](https://github.com/taiga-family/maskito/issues/207))\n  ([cbd5479](https://github.com/taiga-family/maskito/commit/cbd5479c04c07113804eee6ea6c9838ee8681597))\n- **kit:** use 1 as min segment value in `Date`-related masks\n  ([#197](https://github.com/taiga-family/maskito/issues/197))\n  ([c85ca23](https://github.com/taiga-family/maskito/commit/c85ca2355cb0b6fcef73f3e7497f7c31fa82c87c))\n\n### Bug Fixes\n\n- **core:** `Maskito` losses valid characters on invalid insertion (`overwriteMode: replace`)\n  ([#208](https://github.com/taiga-family/maskito/issues/208))\n  ([ef183b4](https://github.com/taiga-family/maskito/commit/ef183b454e4a7db5b2cb48cbe26129bf303f676a))\n- **kit:** `Number` should drop leading zeroes for negative numbers\n  ([#204](https://github.com/taiga-family/maskito/issues/204))\n  ([6e9adf7](https://github.com/taiga-family/maskito/commit/6e9adf758aa585944ee08f2e2aff81a5664adefd))\n\n## [0.6.0](https://github.com/taiga-family/maskito/compare/v0.5.0...v0.6.0) (2023-03-15)\n\n### Features\n\n- **angular:** add CVA and pipe ([#187](https://github.com/taiga-family/maskito/issues/187))\n  ([a099257](https://github.com/taiga-family/maskito/commit/a099257a16b569444cdae9276ce66e9a806f531e))\n- **core:** add `deleteWordBackward` & `deleteWordForward` support\n  ([#193](https://github.com/taiga-family/maskito/issues/193))\n  ([24b761c](https://github.com/taiga-family/maskito/commit/24b761c84d0947df5e4c78a2114f1de8f6ca20f4))\n\n### Bug Fixes\n\n- **core:** show trailing fixed characters + duplicated fixed character on `Drop`\n  ([#185](https://github.com/taiga-family/maskito/issues/185))\n  ([c7f6a1b](https://github.com/taiga-family/maskito/commit/c7f6a1bb8098b5641ed8c6921c2ebc86c6135b58))\n- **kit:** `maskitoParseNumber` incorrectly parses negative numbers\n  ([#190](https://github.com/taiga-family/maskito/issues/190))\n  ([d713bd1](https://github.com/taiga-family/maskito/commit/d713bd143e5090870a406ea14498cb99843bb9d0))\n- **kit:** `Number` should drop decimal part on paste from clipboard if `precision=0`\n  ([#195](https://github.com/taiga-family/maskito/issues/195))\n  ([ba85c38](https://github.com/taiga-family/maskito/commit/ba85c38ec0c81a22ff758f4ba386d045ac49ffd5))\n\n## [0.5.0](https://github.com/taiga-family/maskito/compare/v0.4.0...v0.5.0) (2023-03-09)\n\n### Features\n\n- **core:** new utility `maskitoTransform(value, maskitoOptions)`\n  ([#177](https://github.com/taiga-family/maskito/issues/177))\n  ([20316f1](https://github.com/taiga-family/maskito/commit/20316f15e153bfeeb45eda6406b8792e00f3238f))\n- **kit:** new utility `maskitoParseNumber` ([#178](https://github.com/taiga-family/maskito/issues/178))\n  ([fc58141](https://github.com/taiga-family/maskito/commit/fc58141625ecbdc7d804aa382a69b38bf7146fc4))\n\n### Bug Fixes\n\n- **kit:** `Number` mask throws an error on empty string in `thousandSeparator`\n  ([#176](https://github.com/taiga-family/maskito/issues/176))\n  ([cd52fad](https://github.com/taiga-family/maskito/commit/cd52fad80bc278f171dafa1709c54cba3f8fbc81))\n\n## [0.4.0](https://github.com/taiga-family/maskito/compare/v0.3.0...v0.4.0) (2023-03-02)\n\n### Features\n\n- **angular:** `maskitoElement` add new input ([#164](https://github.com/taiga-family/maskito/issues/164))\n  ([407c131](https://github.com/taiga-family/maskito/commit/407c131d2d8f8514173ad7a5e248759e2d4f8abc))\n\n### Bug Fixes\n\n- **kit:** `Number` pads empty integer part when paste from clipboard\n  ([#168](https://github.com/taiga-family/maskito/issues/168))\n  ([d043a82](https://github.com/taiga-family/maskito/commit/d043a82561cbed94b19d59d174fa6da7f08d49d4))\n\n## [0.3.0](https://github.com/taiga-family/maskito/compare/v0.2.0...v0.3.0) (2023-03-01)\n\n### Features\n\n- **angular:** add other maskito packages to `ng-update.packageGroup` of `package.json`\n  ([#161](https://github.com/taiga-family/maskito/issues/161))\n  ([bdecdaa](https://github.com/taiga-family/maskito/commit/bdecdaa9cac2681e35191cabd2d5d853eb97a09d))\n\n### Bug Fixes\n\n- **kit:** `Date`-mask fix wrong year that appears using the min property\n  ([#157](https://github.com/taiga-family/maskito/issues/157))\n  ([544e891](https://github.com/taiga-family/maskito/commit/544e8912d2752e0fc8f77757e935070b94823f65))\n\n## [0.2.0](https://github.com/taiga-family/maskito/compare/v0.1.1...v0.2.0) (2023-02-28)\n\n### Features\n\n- **kit:** new `DateTime` mask ([#146](https://github.com/taiga-family/maskito/issues/146))\n  ([6d6b2c1](https://github.com/taiga-family/maskito/commit/6d6b2c17b5c0f62bc804451524cd4b2ce3e50660))\n\n### Bug Fixes\n\n- **kit:** `Number` is now replacing hyphen, en-dash and em-dash with minus sign\n  ([#153](https://github.com/taiga-family/maskito/issues/153))\n  ([1f21f11](https://github.com/taiga-family/maskito/commit/1f21f1159baadcef65e49bacaec77eba3b6f36d8))\n\n### [0.1.1](https://github.com/taiga-family/maskito/compare/v0.1.0...v0.1.1) (2023-02-15)\n\n### Bug Fixes\n\n- **core:** `Module parse failed: 'import' and 'export' may appear only with 'sourceType: module'`\n  ([#131](https://github.com/taiga-family/maskito/issues/131))\n  ([41e05c0](https://github.com/taiga-family/maskito/commit/41e05c09e41ed611e0c2b9aa07a953dfbe049da7))\n\n## 0.1.0 (2023-02-14)\n\nThis release introduces the first publishing of the following packages:\n\n- `@maskito/core` <br /> It is the main zero-dependency and framework-agnostic package. It can be used alone in Vanilla\n  JavaScript project. It listens `beforeinput` and `input` events to validate and calibrate textfield's value. <br />\n  Read more: https://maskito.dev/core-concepts/overview\n- `@maskito/kit` <br /> The optional framework-agnostic package. It contains ready-to-use masks with configurable\n  parameters. This release introduces the following masks:\n  - [Number](https://maskito.dev/kit/number)\n  - [Time](https://maskito.dev/kit/time)\n  - [Date](https://maskito.dev/kit/date)\n  - [DateRange](https://maskito.dev/kit/date-range)\n- `@maskito/angular`<br /> The Angular-specific library. It provides two convenient ways of using Maskito:\n  - Basic directive approach (when developer has direct access to native input element).\n  - Dependency Injection approach (when native input element is hidden somewhere deep inside another component).\n"}}]);