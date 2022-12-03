---
pageClass: rule-details
sidebarDepth: 0
title: vue/multiline-ternary
description: Enforce newlines between operands of ternary expressions in `<template>`
since: v9.7.0
---
# vue/multiline-ternary

🚫 This rule is *disabled* in the `no-layout-rules` [config](https://eslint.vuejs.org/user-guide/#bundle-configurations).

🔧 This rule is automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/latest/user-guide/command-line-interface#--fix).

<!-- end auto-generated rule header -->

> Enforce newlines between operands of ternary expressions in `<template>`

This rule is the same rule as core [multiline-ternary] rule but it applies to the expressions in `<template>` and `<style>`.

## :book: Rule Details

<eslint-code-block fix :rules="{'vue/multiline-ternary': ['error']}">

```vue
<template>
  <div>
    <!-- ✓ GOOD -->
    <div :class="isEnabled
      ? 'check'
      : 'stop'" />

    <!-- ✗ BAD -->
    <div :class="isEnabled ? 'check' : 'stop'" />
  </div>
</template>

<style>
div {
  /* ✓ GOOD */
  color: v-bind('myFlag
    ? foo
    : bar');

  /* ✗ BAD */
  color: v-bind('myFlag ? foo : bar');
}
</style>
```

</eslint-code-block>

## :books: Further Reading

- [multiline-ternary]

[multiline-ternary]: https://eslint.org/docs/rules/multiline-ternary

## :rocket: Version

This rule was introduced in eslint-plugin-vue v9.7.0

## :mag: Implementation

- [Rule source](https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/rules/multiline-ternary.js)
- [Test source](https://github.com/vuejs/eslint-plugin-vue/blob/master/tests/lib/rules/multiline-ternary.js)

<sup>Taken with ❤️ [from ESLint core](https://eslint.org/docs/rules/multiline-ternary)</sup>
