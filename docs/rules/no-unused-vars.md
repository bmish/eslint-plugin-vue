---
pageClass: rule-details
sidebarDepth: 0
title: vue/no-unused-vars
description: disallow unused variable definitions of v-for directives or scope attributes
since: v3.14.0
---
# vue/no-unused-vars

💼 This rule is enabled in the following [configs](https://eslint.vuejs.org/user-guide/#bundle-configurations): `essential`, ✅ `recommended`, `strongly-recommended`, `vue3-essential`, `vue3-recommended`, `vue3-strongly-recommended`.

💡 This rule is manually fixable by [editor suggestions](https://eslint.org/docs/developer-guide/working-with-rules#providing-suggestions).

<!-- end auto-generated rule header -->

> disallow unused variable definitions of v-for directives or scope attributes

## :book: Rule Details

This rule report variable definitions of v-for directives or scope attributes if those are not used.

<eslint-code-block :rules="{'vue/no-unused-vars': ['error']}">

```vue
<template>
  <!-- ✓ GOOD -->
  <ol v-for="i in 5">
    <li>{{ i }}</li>
  </ol>

  <!-- ✗ BAD -->
  <ol v-for="i in 5">
    <li>item</li>
  </ol>
</template>
```

</eslint-code-block>

## :wrench: Options

```json
{
    "vue/no-unused-vars": ["error", {
        "ignorePattern": "^_"
    }]
}
```

- `ignorePattern` ... disables reporting when your definitions of v-for directives or scope attributes match your ignorePattern Regular expression. default `null`, will ignore nothing

## :rocket: Suggestion

- When your ignorePattern set to `^_`, we could provide a suggestion which add a prefix`_` to your variable and no more eslint error

## :rocket: Version

This rule was introduced in eslint-plugin-vue v3.14.0

## :mag: Implementation

- [Rule source](https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/rules/no-unused-vars.js)
- [Test source](https://github.com/vuejs/eslint-plugin-vue/blob/master/tests/lib/rules/no-unused-vars.js)
