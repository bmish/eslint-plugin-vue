---
pageClass: rule-details
sidebarDepth: 0
title: vue/no-deprecated-functional-template
description: disallow using deprecated the `functional` template (in Vue.js 3.0.0+)
since: v7.0.0
---
# vue/no-deprecated-functional-template

💼 This rule is enabled in the following [configs](https://eslint.vuejs.org/user-guide/#bundle-configurations): `vue3-essential`, `vue3-recommended`, `vue3-strongly-recommended`.

<!-- end auto-generated rule header -->

> disallow using deprecated the `functional` template (in Vue.js 3.0.0+)

## :book: Rule Details

This rule reports deprecated the `functional` template (in Vue.js 3.0.0+).

See [Migration Guide - Functional Components](https://v3-migration.vuejs.org/breaking-changes/functional-components.html) for more details.

<eslint-code-block :rules="{'vue/no-deprecated-functional-template': ['error']}">

```vue
<!-- ✗ BAD -->
<template functional>
  <!-- ... -->
</template>
```

</eslint-code-block>

### :wrench: Options

Nothing.

## :books: Further Reading

- [Migration Guide - Functional Components](https://v3-migration.vuejs.org/breaking-changes/functional-components.html)
- [Vue RFCs - 0007-functional-async-api-change](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0007-functional-async-api-change.md)
- [Guide - Functional Components](https://v2.vuejs.org/v2/guide/render-function.html#Functional-Components)

## :rocket: Version

This rule was introduced in eslint-plugin-vue v7.0.0

## :mag: Implementation

- [Rule source](https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/rules/no-deprecated-functional-template.js)
- [Test source](https://github.com/vuejs/eslint-plugin-vue/blob/master/tests/lib/rules/no-deprecated-functional-template.js)
