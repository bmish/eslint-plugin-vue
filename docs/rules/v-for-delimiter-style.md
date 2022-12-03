---
pageClass: rule-details
sidebarDepth: 0
title: vue/v-for-delimiter-style
description: enforce `v-for` directive's delimiter style
since: v7.0.0
---
# vue/v-for-delimiter-style

🚫 This rule is *disabled* in the `no-layout-rules` [config](https://eslint.vuejs.org/user-guide/#bundle-configurations).

🔧 This rule is automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/latest/user-guide/command-line-interface#--fix).

<!-- end auto-generated rule header -->

> enforce `v-for` directive's delimiter style

## :book: Rule Details

This rule enforces which delimiter (`in` or `of`) should be used in `v-for` directives.

<eslint-code-block fix :rules="{'vue/v-for-delimiter-style': ['error']}">

```vue
<template>
  <!-- ✓ GOOD -->
  <div v-for="x in xs" />

  <!-- ✗ BAD -->
  <div v-for="x of xs" />
</template>
```

</eslint-code-block>

## :wrench: Options

Default is set to `in`.

```json
{
  "vue/v-for-delimiter-style": ["error", "in" | "of"]
}
```

- `"in"` (default) ... requires using `in`.
- `"of"` ... requires using `of`.

### `"of"`

<eslint-code-block fix :rules="{'vue/v-for-delimiter-style': ['error', 'of']}">

```vue
<template>
  <!-- ✓ GOOD -->
  <div v-for="x of xs" />

  <!-- ✗ BAD -->
  <div v-for="x in xs" />
</template>
```

</eslint-code-block>

## :books: Further Reading

- [Guide - List Rendering](https://vuejs.org/guide/essentials/list.html)

## :rocket: Version

This rule was introduced in eslint-plugin-vue v7.0.0

## :mag: Implementation

- [Rule source](https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/rules/v-for-delimiter-style.js)
- [Test source](https://github.com/vuejs/eslint-plugin-vue/blob/master/tests/lib/rules/v-for-delimiter-style.js)
