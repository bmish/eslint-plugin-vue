---
pageClass: rule-details
sidebarDepth: 0
title: vue/no-deprecated-v-bind-sync
description: disallow use of deprecated `.sync` modifier on `v-bind` directive (in Vue.js 3.0.0+)
since: v7.0.0
---
# vue/no-deprecated-v-bind-sync

💼 This rule is enabled in the following [configs](https://eslint.vuejs.org/user-guide/#bundle-configurations): `vue3-essential`, `vue3-recommended`, `vue3-strongly-recommended`.

🔧 This rule is automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/latest/user-guide/command-line-interface#--fix).

<!-- end auto-generated rule header -->

> disallow use of deprecated `.sync` modifier on `v-bind` directive (in Vue.js 3.0.0+)

## :book: Rule Details

This rule reports use of deprecated `.sync` modifier on `v-bind` directive (in Vue.js 3.0.0+).

See [Migration Guide - `v-model`](https://v3-migration.vuejs.org/breaking-changes/v-model.html) for more details.

<eslint-code-block fix :rules="{'vue/no-deprecated-v-bind-sync': ['error']}">

```vue
<template>
  <!-- ✓ GOOD -->
  <MyComponent v-bind:propName="foo"/>
  <MyComponent :propName="foo"/>


  <!-- ✗ BAD -->
  <MyComponent v-bind:propName.sync="foo"/>
  <MyComponent v-bind:[dynamiArg].sync="foo"/>
  <MyComponent v-bind.sync="foo"/>
  <MyComponent :propName.sync="foo"/>
</template>
```

</eslint-code-block>

## :wrench: Options

Nothing.

## :couple: Related Rules

- [vue/valid-v-bind]

[vue/valid-v-bind]: ./valid-v-bind.md

## :books: Further Reading

- [Migration Guide - `v-model`](https://v3-migration.vuejs.org/breaking-changes/v-model.html)
- [Vue RFCs - 0005-replace-v-bind-sync-with-v-model-argument](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0005-replace-v-bind-sync-with-v-model-argument.md)

## :rocket: Version

This rule was introduced in eslint-plugin-vue v7.0.0

## :mag: Implementation

- [Rule source](https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/rules/no-deprecated-v-bind-sync.js)
- [Test source](https://github.com/vuejs/eslint-plugin-vue/blob/master/tests/lib/rules/no-deprecated-v-bind-sync.js)
