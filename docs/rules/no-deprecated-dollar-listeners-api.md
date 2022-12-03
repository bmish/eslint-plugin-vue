---
pageClass: rule-details
sidebarDepth: 0
title: vue/no-deprecated-dollar-listeners-api
description: disallow using deprecated `$listeners` (in Vue.js 3.0.0+)
since: v7.0.0
---
# vue/no-deprecated-dollar-listeners-api

💼 This rule is enabled in the following [configs](https://eslint.vuejs.org/user-guide/#bundle-configurations): `vue3-essential`, `vue3-recommended`, `vue3-strongly-recommended`.

<!-- end auto-generated rule header -->

> disallow using deprecated `$listeners` (in Vue.js 3.0.0+)

## :book: Rule Details

This rule reports use of deprecated `$listeners`. (in Vue.js 3.0.0+).

<eslint-code-block :rules="{'vue/no-deprecated-dollar-listeners-api': ['error']}">

```vue
<template>
  <!-- ✗ BAD -->
  <MyInput v-on="$listeners">
</template>
<script>
export default {
  computed: {
    listeners() {
      return {
        /* ✗ BAD */
        ...this.$listeners,
        input() { /* */ }
      }
    }
  }
}
</script>
```

</eslint-code-block>

## :wrench: Options

Nothing.

## :books: Further Reading

- [Vue RFCs - 0031-attr-fallthrough](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0031-attr-fallthrough.md)

## :rocket: Version

This rule was introduced in eslint-plugin-vue v7.0.0

## :mag: Implementation

- [Rule source](https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/rules/no-deprecated-dollar-listeners-api.js)
- [Test source](https://github.com/vuejs/eslint-plugin-vue/blob/master/tests/lib/rules/no-deprecated-dollar-listeners-api.js)
