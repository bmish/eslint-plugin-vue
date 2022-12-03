---
pageClass: rule-details
sidebarDepth: 0
title: vue/no-expose-after-await
description: disallow asynchronously registered `expose`
since: v8.1.0
---
# vue/no-expose-after-await

💼 This rule is enabled in the following [configs](https://eslint.vuejs.org/user-guide/#bundle-configurations): `vue3-essential`, `vue3-recommended`, `vue3-strongly-recommended`.

<!-- end auto-generated rule header -->

> disallow asynchronously registered `expose`

## :book: Rule Details

This rule reports usages of `expose()` and `defineExpose()` after an `await` expression.
In the `setup()` function, `expose()` should be registered synchronously.
In the `<script setup>`, `defineExpose()` should be registered synchronously.

<eslint-code-block :rules="{'vue/no-expose-after-await': ['error']}">

```vue
<script>
export default {
  async setup(props, { expose }) {
    /* ✓ GOOD */
    expose({/* ... */})

    await doSomething()

    /* ✗ BAD */
    expose({/* ... */})
  }
}
</script>
```

</eslint-code-block>

<eslint-code-block :rules="{'vue/no-expose-after-await': ['error']}">

```vue
<script setup>
/* ✓ GOOD */
defineExpose({/* ... */})

await doSomething()

/* ✗ BAD */
defineExpose({/* ... */})
</script>
```

</eslint-code-block>

## :wrench: Options

Nothing.

## :books: Further Reading

- [Vue RFCs - 0042-expose-api](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0042-expose-api.md)
- [Vue RFCs - 0013-composition-api](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0013-composition-api.md)

## :rocket: Version

This rule was introduced in eslint-plugin-vue v8.1.0

## :mag: Implementation

- [Rule source](https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/rules/no-expose-after-await.js)
- [Test source](https://github.com/vuejs/eslint-plugin-vue/blob/master/tests/lib/rules/no-expose-after-await.js)
