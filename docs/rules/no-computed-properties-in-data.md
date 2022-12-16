---
pageClass: rule-details
sidebarDepth: 0
title: vue/no-computed-properties-in-data
description: disallow accessing computed properties in `data`.
since: v7.20.0
---
# vue/no-computed-properties-in-data

💼 This rule is enabled in the following [configs](https://eslint.vuejs.org/user-guide/#bundle-configurations): `essential`, ✅ `recommended`, `strongly-recommended`, `vue3-essential`, `vue3-recommended`, `vue3-strongly-recommended`.

<!-- end auto-generated rule header -->

> disallow accessing computed properties in `data`.

## :book: Rule Details

This rule disallow accessing computed properties in `data()`.
The computed property cannot be accessed in `data()` because is before initialization.

<eslint-code-block :rules="{'vue/no-computed-properties-in-data': ['error']}">

```vue
<script>
export default {
  data() {
    return  {
      /* ✗ BAD */
      bar: this.foo
    }
  },
  computed: {
    foo () {}
  }
}
</script>
```

</eslint-code-block>

## :wrench: Options

Nothing.

## :rocket: Version

This rule was introduced in eslint-plugin-vue v7.20.0

## :mag: Implementation

- [Rule source](https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/rules/no-computed-properties-in-data.js)
- [Test source](https://github.com/vuejs/eslint-plugin-vue/blob/master/tests/lib/rules/no-computed-properties-in-data.js)
