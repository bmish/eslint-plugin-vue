---
pageClass: rule-details
sidebarDepth: 0
title: vue/prefer-import-from-vue
description: enforce import from 'vue' instead of import from '@vue/*'
since: v8.5.0
---
# vue/prefer-import-from-vue

💼 This rule is enabled in the following [configs](https://eslint.vuejs.org/user-guide/#bundle-configurations): `vue3-essential`, `vue3-recommended`, `vue3-strongly-recommended`.

🔧 This rule is automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/latest/user-guide/command-line-interface#--fix).

<!-- end auto-generated rule header -->

> enforce import from 'vue' instead of import from '@vue/*'

## :book: Rule Details

This rule aims to use imports from `'vue'` instead of imports from `'@vue/*'`.

Imports from the following modules are almost always wrong. You should import from `vue` instead.

- `@vue/runtime-dom`
- `@vue/runtime-core`
- `@vue/reactivity`
- `@vue/shared`

<eslint-code-block fix :rules="{'vue/prefer-import-from-vue': ['error']}" filename="example.js" language="javascript">

```js
/* ✓ GOOD */
import { createApp, ref, Component } from 'vue'
```

</eslint-code-block>

<eslint-code-block fix :rules="{'vue/prefer-import-from-vue': ['error']}" filename="example.js" language="javascript">

```js
/* ✗ BAD */
import { createApp } from '@vue/runtime-dom'
import { Component } from '@vue/runtime-core'
import { ref } from '@vue/reactivity'
```

</eslint-code-block>

## :wrench: Options

Nothing.

## :rocket: Version

This rule was introduced in eslint-plugin-vue v8.5.0

## :mag: Implementation

- [Rule source](https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/rules/prefer-import-from-vue.js)
- [Test source](https://github.com/vuejs/eslint-plugin-vue/blob/master/tests/lib/rules/prefer-import-from-vue.js)
