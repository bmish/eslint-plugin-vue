---
pageClass: rule-details
sidebarDepth: 0
title: vue/html-end-tags
description: enforce end tag style
since: v3.0.0
---
# vue/html-end-tags

⚠️ This rule *warns* in the following [configs](https://eslint.vuejs.org/user-guide/#bundle-configurations): ✅ `recommended`, `strongly-recommended`, `vue3-recommended`, `vue3-strongly-recommended`.

🔧 This rule is automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/latest/user-guide/command-line-interface#--fix).

<!-- end auto-generated rule header -->

> enforce end tag style

## :book: Rule Details

This rule aims to disallow lacking end tags.

<eslint-code-block fix :rules="{'vue/html-end-tags': ['error']}">

```vue
<template>
  <!-- ✓ GOOD -->
  <div></div>
  <p></p>
  <p></p>
  <input>
  <br>

  <!-- ✗ BAD -->
  <div>
  <p>
</template>
```

</eslint-code-block>

## :wrench: Options

Nothing.

## :rocket: Version

This rule was introduced in eslint-plugin-vue v3.0.0

## :mag: Implementation

- [Rule source](https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/rules/html-end-tags.js)
- [Test source](https://github.com/vuejs/eslint-plugin-vue/blob/master/tests/lib/rules/html-end-tags.js)
