---
pageClass: rule-details
sidebarDepth: 0
title: vue/no-deprecated-v-on-native-modifier
description: disallow using deprecated `.native` modifiers (in Vue.js 3.0.0+)
since: v7.0.0
---
# vue/no-deprecated-v-on-native-modifier

💼 This rule is enabled in the following [configs](https://eslint.vuejs.org/user-guide/#bundle-configurations): `vue3-essential`, `vue3-recommended`, `vue3-strongly-recommended`.

<!-- end auto-generated rule header -->

> disallow using deprecated `.native` modifiers (in Vue.js 3.0.0+)

## :book: Rule Details

This rule reports use of deprecated `.native` modifier on `v-on` directive (in Vue.js 3.0.0+)

<eslint-code-block :rules="{'vue/no-deprecated-v-on-native-modifier': ['error']}">

```vue
<template>
  <!-- ✓ GOOD -->
  <CoolInput v-on:keydown.enter="onKeydownEnter" />
  <CoolInput @keydown.enter="onKeydownEnter" />

  <!-- ✗ BAD -->
  <CoolInput v-on:keydown.native="onKeydown" />
  <CoolInput @keydown.enter.native="onKeydownEnter" />
</template>
```

</eslint-code-block>

## :wrench: Options

Nothing.

## :couple: Related Rules

- [vue/valid-v-on]

[vue/valid-v-on]: ./valid-v-on.md

## :books: Further Reading

- [Vue RFCs - 0031-attr-fallthrough](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0031-attr-fallthrough.md)

## :rocket: Version

This rule was introduced in eslint-plugin-vue v7.0.0

## :mag: Implementation

- [Rule source](https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/rules/no-deprecated-v-on-native-modifier.js)
- [Test source](https://github.com/vuejs/eslint-plugin-vue/blob/master/tests/lib/rules/no-deprecated-v-on-native-modifier.js)
