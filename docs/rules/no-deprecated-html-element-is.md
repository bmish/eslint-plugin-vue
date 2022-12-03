---
pageClass: rule-details
sidebarDepth: 0
title: vue/no-deprecated-html-element-is
description: disallow using deprecated the `is` attribute on HTML elements (in Vue.js 3.0.0+)
since: v7.0.0
---
# vue/no-deprecated-html-element-is

💼 This rule is enabled in the following [configs](https://eslint.vuejs.org/user-guide/#bundle-configurations): `vue3-essential`, `vue3-recommended`, `vue3-strongly-recommended`.

<!-- end auto-generated rule header -->

> disallow using deprecated the `is` attribute on HTML elements (in Vue.js 3.0.0+)

## :book: Rule Details

This rule reports deprecated the `is` attribute on HTML elements (removed in Vue.js v3.0.0+).

See [Migration Guide - Custom Elements Interop](https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html#customized-built-in-elements) for more details.

<eslint-code-block :rules="{'vue/no-deprecated-html-element-is': ['error']}">

```vue
<template>
  <!-- ✓ GOOD -->
  <div />
  <component is="foo">

  <!-- ✗ BAD -->
  <div is="foo" />
  <div :is="foo" />
</template>
```

</eslint-code-block>

### :wrench: Options

Nothing.

## :books: Further Reading

- [Migration Guide - Custom Elements Interop](https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html#customized-built-in-elements)
- [Vue RFCs - 0027-custom-elements-interop](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0027-custom-elements-interop.md)

## :rocket: Version

This rule was introduced in eslint-plugin-vue v7.0.0

## :mag: Implementation

- [Rule source](https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/rules/no-deprecated-html-element-is.js)
- [Test source](https://github.com/vuejs/eslint-plugin-vue/blob/master/tests/lib/rules/no-deprecated-html-element-is.js)
