---
pageClass: rule-details
sidebarDepth: 0
title: vue/no-reserved-props
description: disallow reserved names in props
since: v8.0.0
---
# vue/no-reserved-props

💼 This rule is enabled in the following [configs](https://eslint.vuejs.org/user-guide/#bundle-configurations): `essential`, ✅ `recommended`, `strongly-recommended`, `vue3-essential`, `vue3-recommended`, `vue3-strongly-recommended`.

<!-- end auto-generated rule header -->

> disallow reserved names in props

## :book: Rule Details

This rule disallow reserved names to be used in props.

<eslint-code-block :rules="{'vue/no-reserved-props': ['error']}">

```vue
<script>
export default {
  props: {
    /* ✗ BAD */
    ref: String,
    key: String,
    /* ✓ GOOD */
    foo: String,
    bar: String,
  }
}
</script>
```

</eslint-code-block>

## :wrench: Options

```json
{
  "vue/no-reserved-props": ["error", {
    "vueVersion": 3, // or 2
  }]
}
```

- `vueVersion` (`2 | 3`) ... Specify the version of Vue you are using. Default is `3`.

## :rocket: Version

This rule was introduced in eslint-plugin-vue v8.0.0

## :mag: Implementation

- [Rule source](https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/rules/no-reserved-props.js)
- [Test source](https://github.com/vuejs/eslint-plugin-vue/blob/master/tests/lib/rules/no-reserved-props.js)
