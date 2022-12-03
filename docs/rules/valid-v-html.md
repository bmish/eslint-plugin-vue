---
pageClass: rule-details
sidebarDepth: 0
title: vue/valid-v-html
description: enforce valid `v-html` directives
since: v3.11.0
---
# vue/valid-v-html

💼 This rule is enabled in the following [configs](https://eslint.vuejs.org/user-guide/#bundle-configurations): `essential`, ✅ `recommended`, `strongly-recommended`, `vue3-essential`, `vue3-recommended`, `vue3-strongly-recommended`.

<!-- end auto-generated rule header -->

> enforce valid `v-html` directives

This rule checks whether every `v-html` directive is valid.

## :book: Rule Details

This rule reports `v-html` directives in the following cases:

- The directive has that argument. E.g. `<div v-html:aaa></div>`
- The directive has that modifier. E.g. `<div v-html.bbb></div>`
- The directive does not have that attribute value. E.g. `<div v-html></div>`

<eslint-code-block :rules="{'vue/valid-v-html': ['error']}">

```vue
<template>
  <!-- ✓ GOOD -->
  <div v-html="foo"/>

  <!-- ✗ BAD -->
  <div v-html/>
  <div v-html:aaa="foo"/>
  <div v-html.bbb="foo"/>
</template>
```

</eslint-code-block>

::: warning Note
This rule does not check syntax errors in directives because it's checked by [vue/no-parsing-error] rule.
:::

## :wrench: Options

Nothing.

## :couple: Related Rules

- [vue/no-parsing-error]

[vue/no-parsing-error]: ./no-parsing-error.md

## :rocket: Version

This rule was introduced in eslint-plugin-vue v3.11.0

## :mag: Implementation

- [Rule source](https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/rules/valid-v-html.js)
- [Test source](https://github.com/vuejs/eslint-plugin-vue/blob/master/tests/lib/rules/valid-v-html.js)
