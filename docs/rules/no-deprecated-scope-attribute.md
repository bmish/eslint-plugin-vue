---
pageClass: rule-details
sidebarDepth: 0
title: vue/no-deprecated-scope-attribute
description: disallow deprecated `scope` attribute (in Vue.js 2.5.0+)
since: v6.0.0
---
# vue/no-deprecated-scope-attribute

💼 This rule is enabled in the following [configs](https://eslint.vuejs.org/user-guide/#bundle-configurations): `vue3-essential`, `vue3-recommended`, `vue3-strongly-recommended`.

🔧 This rule is automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/latest/user-guide/command-line-interface#--fix).

<!-- end auto-generated rule header -->

> disallow deprecated `scope` attribute (in Vue.js 2.5.0+)

## :book: Rule Details

This rule reports deprecated `scope` attribute in Vue.js v2.5.0+.

<eslint-code-block fix :rules="{'vue/no-deprecated-scope-attribute': ['error']}">

```vue
<template>
  <ListComponent>
    <!-- ✓ GOOD -->
    <template v-slot:name="props">
      {{ props.title }}
    </template>
    <template slot="name" slot-scope="props">
      {{ props.title }}
    </template>
  </ListComponent>
  <ListComponent>
    <!-- ✗ BAD -->
    <template slot="name" scope="props">
      {{ props.title }}
    </template>
  </ListComponent>
</template>
```

</eslint-code-block>

## :books: Further Reading

- [API - scope](https://v2.vuejs.org/v2/api/#scope-removed)

## :rocket: Version

This rule was introduced in eslint-plugin-vue v6.0.0

## :mag: Implementation

- [Rule source](https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/rules/no-deprecated-scope-attribute.js)
- [Test source](https://github.com/vuejs/eslint-plugin-vue/blob/master/tests/lib/rules/no-deprecated-scope-attribute.js)
