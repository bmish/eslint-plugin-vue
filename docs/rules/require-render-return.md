---
pageClass: rule-details
sidebarDepth: 0
title: vue/require-render-return
description: enforce render function to always return value
since: v3.10.0
---
# vue/require-render-return

💼 This rule is enabled in the following [configs](https://eslint.vuejs.org/user-guide/#bundle-configurations): `essential`, ✅ `recommended`, `strongly-recommended`, `vue3-essential`, `vue3-recommended`, `vue3-strongly-recommended`.

<!-- end auto-generated rule header -->

> enforce render function to always return value

## :book: Rule Details

This rule aims to enforce render function to always return value

<eslint-code-block :rules="{'vue/require-render-return': ['error']}">

```vue
<script>
export default {
  /* ✓ GOOD */
  render (h) {
    return h('div', 'hello')
  }
}
</script>
```

</eslint-code-block>

<eslint-code-block :rules="{'vue/require-render-return': ['error']}">

```vue
<script>
export default {
  /* ✗ BAD */
  render (h) {
    if (foo) {
      return h('div', 'hello')
    }
  }
}
</script>
```

</eslint-code-block>

## :wrench: Options

Nothing.

## :books: Further Reading

- [Guide - Render Functions](https://vuejs.org/guide/extras/render-function.html)

## :rocket: Version

This rule was introduced in eslint-plugin-vue v3.10.0

## :mag: Implementation

- [Rule source](https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/rules/require-render-return.js)
- [Test source](https://github.com/vuejs/eslint-plugin-vue/blob/master/tests/lib/rules/require-render-return.js)
