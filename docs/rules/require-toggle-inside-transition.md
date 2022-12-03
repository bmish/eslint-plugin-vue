---
pageClass: rule-details
sidebarDepth: 0
title: vue/require-toggle-inside-transition
description: require control the display of the content inside `<transition>`
since: v7.0.0
---
# vue/require-toggle-inside-transition

💼 This rule is enabled in the following [configs](https://eslint.vuejs.org/user-guide/#bundle-configurations): `vue3-essential`, `vue3-recommended`, `vue3-strongly-recommended`.

<!-- end auto-generated rule header -->

> require control the display of the content inside `<transition>`

## :book: Rule Details

This rule reports elements inside `<transition>` that do not control the display.

<eslint-code-block :rules="{'vue/require-toggle-inside-transition': ['error']}">

```vue
<template>
  <!-- ✓ GOOD -->
  <transition><div v-if="show" /></transition>
  <transition><div v-show="show" /></transition>

  <!-- ✗ BAD -->
  <transition><div /></transition>
</template>
```

</eslint-code-block>

## :wrench: Options

Nothing.

## :books: Further Reading

- [Vue RFCs - 0017-transition-as-root](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0017-transition-as-root.md)

## :rocket: Version

This rule was introduced in eslint-plugin-vue v7.0.0

## :mag: Implementation

- [Rule source](https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/rules/require-toggle-inside-transition.js)
- [Test source](https://github.com/vuejs/eslint-plugin-vue/blob/master/tests/lib/rules/require-toggle-inside-transition.js)
