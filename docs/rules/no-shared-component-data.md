---
pageClass: rule-details
sidebarDepth: 0
title: vue/no-shared-component-data
description: enforce component's data property to be a function
since: v3.8.0
---
# vue/no-shared-component-data

💼 This rule is enabled in the following [configs](https://eslint.vuejs.org/user-guide/#bundle-configurations): `essential`, ✅ `recommended`, `strongly-recommended`, `vue3-essential`, `vue3-recommended`, `vue3-strongly-recommended`.

🔧 This rule is automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/latest/user-guide/command-line-interface#--fix).

<!-- end auto-generated rule header -->

> enforce component's data property to be a function
When using the data property on a component (i.e. anywhere except on `new Vue`), the value must be a function that returns an object.

## :book: Rule Details

When the value of `data` is an object, it’s shared across all instances of a component.

<eslint-code-block fix :rules="{'vue/no-shared-component-data': ['error']}">

```vue
<script>
/* ✓ GOOD */
Vue.component('some-comp', {
  data: function () {
    return {
      foo: 'bar'
    }
  }
})

export default {
  data () {
    return {
      foo: 'bar'
    }
  }
}
</script>
```

</eslint-code-block>

<eslint-code-block fix :rules="{'vue/no-shared-component-data': ['error']}">

```vue
<script>
/* ✗ BAD */
Vue.component('some-comp', {
  data: {
    foo: 'bar'
  }
})

export default {
  data: {
    foo: 'bar'
  }
}
</script>
```

</eslint-code-block>

## :wrench: Options

Nothing.

## :books: Further Reading

- [Style guide (for v2) - Component data](https://v2.vuejs.org/v2/style-guide/#Component-data-essential)
- [API - data](https://v3.vuejs.org/api/options-data.html#data-2)
- [API (for v2) - data](https://v3.vuejs.org/api/options-data.html#data-2)

## :rocket: Version

This rule was introduced in eslint-plugin-vue v3.8.0

## :mag: Implementation

- [Rule source](https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/rules/no-shared-component-data.js)
- [Test source](https://github.com/vuejs/eslint-plugin-vue/blob/master/tests/lib/rules/no-shared-component-data.js)
