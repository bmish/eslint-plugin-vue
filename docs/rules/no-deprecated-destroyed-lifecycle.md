---
pageClass: rule-details
sidebarDepth: 0
title: vue/no-deprecated-destroyed-lifecycle
description: disallow using deprecated `destroyed` and `beforeDestroy` lifecycle hooks (in Vue.js 3.0.0+)
since: v7.0.0
---
# vue/no-deprecated-destroyed-lifecycle

💼 This rule is enabled in the following [configs](https://eslint.vuejs.org/user-guide/#bundle-configurations): `vue3-essential`, `vue3-recommended`, `vue3-strongly-recommended`.

🔧 This rule is automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/latest/user-guide/command-line-interface#--fix).

<!-- end auto-generated rule header -->

> disallow using deprecated `destroyed` and `beforeDestroy` lifecycle hooks (in Vue.js 3.0.0+)

## :book: Rule Details

This rule reports use of deprecated `destroyed` and `beforeDestroy` lifecycle hooks. (in Vue.js 3.0.0+).

<eslint-code-block fix :rules="{'vue/no-deprecated-destroyed-lifecycle': ['error']}">

```vue
<script>
export default {
  /* ✓ GOOD */
  beforeMount () {},
  mounted () {},
  beforeUnmount () {},
  unmounted () {},

  /* ✗ BAD */
  beforeDestroy () {},
  destroyed () {}
}
</script>
```

</eslint-code-block>

## :wrench: Options

Nothing.

## :rocket: Version

This rule was introduced in eslint-plugin-vue v7.0.0

## :mag: Implementation

- [Rule source](https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/rules/no-deprecated-destroyed-lifecycle.js)
- [Test source](https://github.com/vuejs/eslint-plugin-vue/blob/master/tests/lib/rules/no-deprecated-destroyed-lifecycle.js)
