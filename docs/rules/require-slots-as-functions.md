---
pageClass: rule-details
sidebarDepth: 0
title: vue/require-slots-as-functions
description: enforce properties of `$slots` to be used as a function
since: v7.0.0
---
# vue/require-slots-as-functions

💼 This rule is enabled in the following [configs](https://eslint.vuejs.org/user-guide/#bundle-configurations): `vue3-essential`, `vue3-recommended`, `vue3-strongly-recommended`.

<!-- end auto-generated rule header -->

> enforce properties of `$slots` to be used as a function

## :book: Rule Details

This rule enforces the properties of `$slots` to be used as a function.
`this.$slots.default` was an array of VNode in Vue.js 2.x, but changed to a function that returns an array of VNode in Vue.js 3.x.

<eslint-code-block :rules="{'vue/require-slots-as-functions': ['error']}">

```vue
<script>
export default {
  render(h) {
    /* ✓ GOOD */
    var children = this.$slots.default()
    var children = this.$slots.default && this.$slots.default()

    /* ✗ BAD */
    var children = [...this.$slots.default]
    var children = this.$slots.default.filter(test)
  }
}
</script>
```

</eslint-code-block>

## :wrench: Options

Nothing.

## :books: Further Reading

- [API - $slots](https://vuejs.org/api/component-instance.html#slots)
- [Vue RFCs - 0006-slots-unification](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0006-slots-unification.md)

## :rocket: Version

This rule was introduced in eslint-plugin-vue v7.0.0

## :mag: Implementation

- [Rule source](https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/rules/require-slots-as-functions.js)
- [Test source](https://github.com/vuejs/eslint-plugin-vue/blob/master/tests/lib/rules/require-slots-as-functions.js)
