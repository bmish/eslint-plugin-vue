---
pageClass: rule-details
sidebarDepth: 0
title: vue/no-useless-mustaches
description: disallow unnecessary mustache interpolations
since: v7.0.0
---
# vue/no-useless-mustaches

🔧 This rule is automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/latest/user-guide/command-line-interface#--fix).

<!-- end auto-generated rule header -->

> disallow unnecessary mustache interpolations

## :book: Rule Details

This rule reports mustache interpolation with a string literal value.
The mustache interpolation with a string literal value can be changed to a static contents.

<eslint-code-block fix :rules="{'vue/no-useless-mustaches': ['error']}">

```vue
<template>
  <!-- ✓ GOOD -->
  Lorem ipsum
  {{ foo }}

  <!-- ✗ BAD -->
  {{ 'Lorem ipsum' }}
  {{ "Lorem ipsum" }}
  {{ `Lorem ipsum` }}
</template>
```

</eslint-code-block>

## :wrench: Options

```js
{
  "vue/no-useless-mustaches": ["error", {
    "ignoreIncludesComment": false,
    "ignoreStringEscape": false
  }]
}
```

- `ignoreIncludesComment` ... If `true`, do not report expressions containing comments. default `false`.
- `ignoreStringEscape` ... If `true`, do not report string literals with useful escapes. default `false`.

### `"ignoreIncludesComment": true`

<eslint-code-block fix :rules="{'vue/no-useless-mustaches': ['error', {ignoreIncludesComment: true}]}">

```vue
<template>
  <!-- ✓ GOOD -->
  {{ 'Lorem ipsum'/* comment */ }}

  <!-- ✗ BAD -->
  {{ 'Lorem ipsum' }}
</template>
```

</eslint-code-block>

### `"ignoreStringEscape": true`

<eslint-code-block fix :rules="{'vue/no-useless-mustaches': ['error', {ignoreStringEscape: true}]}">

```vue
<template>
  <!-- ✓ GOOD -->
  {{ 'Lorem \n ipsum' }}
</template>
```

</eslint-code-block>

## :couple: Related Rules

- [vue/no-useless-v-bind]
- [vue/no-useless-concat]

[vue/no-useless-v-bind]: ./no-useless-v-bind.md
[vue/no-useless-concat]: ./no-useless-concat.md

## :rocket: Version

This rule was introduced in eslint-plugin-vue v7.0.0

## :mag: Implementation

- [Rule source](https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/rules/no-useless-mustaches.js)
- [Test source](https://github.com/vuejs/eslint-plugin-vue/blob/master/tests/lib/rules/no-useless-mustaches.js)
