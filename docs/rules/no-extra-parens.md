---
pageClass: rule-details
sidebarDepth: 0
title: vue/no-extra-parens
description: Disallow unnecessary parentheses in `<template>`
since: v7.0.0
---
# vue/no-extra-parens

🚫 This rule is *disabled* in the `no-layout-rules` [config](https://eslint.vuejs.org/user-guide/#bundle-configurations).

🔧 This rule is automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/latest/user-guide/command-line-interface#--fix).

<!-- end auto-generated rule header -->

> Disallow unnecessary parentheses in `<template>`

This rule is the same rule as core [no-extra-parens] rule but it applies to the expressions in `<template>`.

## :book: Rule Details

This rule restricts the use of parentheses to only where they are necessary.
This rule extends the core [no-extra-parens] rule and applies it to the `<template>`. This rule also checks some Vue.js syntax.

<eslint-code-block fix :rules="{'vue/no-extra-parens': ['error']}">

```vue
<template>
  <!-- ✓ GOOD -->
  <div :class="foo + bar" />
  {{ foo + bar }}
  {{ foo + bar | filter }}
  <!-- ✗ BAD -->
  <div :class="(foo + bar)" />
  {{ (foo + bar) }}
  {{ (foo + bar) | filter }}
</template>
```

</eslint-code-block>

## :books: Further Reading

- [no-extra-parens]

[no-extra-parens]: https://eslint.org/docs/rules/no-extra-parens

## :rocket: Version

This rule was introduced in eslint-plugin-vue v7.0.0

## :mag: Implementation

- [Rule source](https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/rules/no-extra-parens.js)
- [Test source](https://github.com/vuejs/eslint-plugin-vue/blob/master/tests/lib/rules/no-extra-parens.js)

<sup>Taken with ❤️ [from ESLint core](https://eslint.org/docs/rules/no-extra-parens)</sup>
