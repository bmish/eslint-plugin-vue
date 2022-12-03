---
pageClass: rule-details
sidebarDepth: 0
title: vue/no-deprecated-data-object-declaration
description: disallow using deprecated object declaration on data (in Vue.js 3.0.0+)
since: v7.0.0
---
# vue/no-deprecated-data-object-declaration

💼 This rule is enabled in the following [configs](https://eslint.vuejs.org/user-guide/#bundle-configurations): `vue3-essential`, `vue3-recommended`, `vue3-strongly-recommended`.

🔧 This rule is automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/latest/user-guide/command-line-interface#--fix).

<!-- end auto-generated rule header -->

> disallow using deprecated object declaration on data (in Vue.js 3.0.0+)

## :book: Rule Details

This rule reports use of deprecated object declaration on `data` property (in Vue.js 3.0.0+).
The different from `vue/no-shared-component-data` is the root instance being also disallowed.

See [Migration Guide - Data Option](https://v3-migration.vuejs.org/breaking-changes/data-option.html) for more details.

<eslint-code-block fix :rules="{'vue/no-deprecated-data-object-declaration': ['error']}" language="javascript" filename="example.js">

```js
createApp({
  /* ✗ BAD */
  data: {
    foo: null
  }
}).mount('#app')

createApp({
  /* ✓ GOOD */
  data () {
    return {
      foo: null
    }
  }
}).mount('#app')
```

</eslint-code-block>

<eslint-code-block fix :rules="{'vue/no-deprecated-data-object-declaration': ['error']}">

```vue
<script>
export default {
  /* ✗ BAD */
  data: {
    foo: null
  }
}
</script>
```

</eslint-code-block>

<eslint-code-block fix :rules="{'vue/no-deprecated-data-object-declaration': ['error']}">

```vue
<script>
export default {
  /* ✓ GOOD */
  data () {
    return {
      foo: null
    }
  }
}
</script>
```

</eslint-code-block>

## :wrench: Options

Nothing.

## :books: Further Reading

- [Migration Guide - Data Option](https://v3-migration.vuejs.org/breaking-changes/data-option.html)
- [Vue RFCs - 0019-remove-data-object-declaration](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0019-remove-data-object-declaration.md)

## :rocket: Version

This rule was introduced in eslint-plugin-vue v7.0.0

## :mag: Implementation

- [Rule source](https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/rules/no-deprecated-data-object-declaration.js)
- [Test source](https://github.com/vuejs/eslint-plugin-vue/blob/master/tests/lib/rules/no-deprecated-data-object-declaration.js)
