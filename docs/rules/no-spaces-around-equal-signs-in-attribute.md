---
pageClass: rule-details
sidebarDepth: 0
title: vue/no-spaces-around-equal-signs-in-attribute
description: disallow spaces around equal signs in attribute
since: v5.0.0
---
# vue/no-spaces-around-equal-signs-in-attribute

⚠️🚫 This rule *warns* in the following [configs](https://eslint.vuejs.org/user-guide/#bundle-configurations): ✅ `recommended`, `strongly-recommended`, `vue3-recommended`, `vue3-strongly-recommended`. This rule is *disabled* in the `no-layout-rules` [config](https://eslint.vuejs.org/user-guide/#bundle-configurations).

🔧 This rule is automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/latest/user-guide/command-line-interface#--fix).

<!-- end auto-generated rule header -->

> disallow spaces around equal signs in attribute

## :book: Rule Details

This rule disallow spaces around equal signs in attribute.

<eslint-code-block fix :rules="{'vue/no-spaces-around-equal-signs-in-attribute': ['error']}">

```vue
<template>
  <!-- ✗ BAD -->
  <div class = "item"></div>
  <!-- ✓ GOOD -->
  <div class="item"></div>
</template>
```

</eslint-code-block>

::: tip Info
HTML5 allows spaces around equal signs. But space-less is easier to read, and groups entities better together.
:::

## :wrench: Options

```json
{
  "vue/no-spaces-around-equal-signs-in-attribute": ["error"]
}
```

## :books: Further Reading

- [HTML5 Style Guide - W3Schools *Spaces and Equal Signs*](https://www.w3schools.com/html/html5_syntax.asp)

## :rocket: Version

This rule was introduced in eslint-plugin-vue v5.0.0

## :mag: Implementation

- [Rule source](https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/rules/no-spaces-around-equal-signs-in-attribute.js)
- [Test source](https://github.com/vuejs/eslint-plugin-vue/blob/master/tests/lib/rules/no-spaces-around-equal-signs-in-attribute.js)
