---
pageClass: rule-details
sidebarDepth: 0
title: vue/no-setup-props-destructure
description: disallow destructuring of `props` passed to `setup`
since: v7.0.0
---
# vue/no-setup-props-destructure

💼 This rule is enabled in the following [configs](https://eslint.vuejs.org/user-guide/#bundle-configurations): `essential`, ✅ `recommended`, `strongly-recommended`, `vue3-essential`, `vue3-recommended`, `vue3-strongly-recommended`.

<!-- end auto-generated rule header -->

> disallow destructuring of `props` passed to `setup`

## :book: Rule Details

This rule reports the destructuring of `props` passed to `setup` causing the value to lose reactivity.

<eslint-code-block :rules="{'vue/no-setup-props-destructure': ['error']}">

```vue
<script>
export default {
  /* ✓ GOOD */
  setup(props) {
    watch(() => props.count, () => {
      console.log(props.count)
    })

    return () => {
      return h('div', props.count)
    }
  }
}
</script>
```

</eslint-code-block>

Destructuring the `props` passed to `setup` will cause the value to lose reactivity.

<eslint-code-block :rules="{'vue/no-setup-props-destructure': ['error']}">

```vue
<script>
export default {
  /* ✗ BAD */
  setup({ count }) {
    watch(() => count, () => { // not going to detect changes
      console.log(count)
    })

    return () => {
      return h('div', count) // not going to update
    }
  }
}
</script>
```

</eslint-code-block>

Also, destructuring in root scope of `setup()` should error, but ok inside nested callbacks or returned render functions:

<eslint-code-block :rules="{'vue/no-setup-props-destructure': ['error']}">

```vue
<script>
export default {
  setup(props) {
    /* ✗ BAD */
    const { count } = props

    watch(() => props.count, () => {
      /* ✓ GOOD */
      const { count } = props
      console.log(count)
    })

    return () => {
      /* ✓ GOOD */
      const { count } = props
      return h('div', count)
    }
  }
}
</script>
```

</eslint-code-block>

## :wrench: Options

Nothing.

## :books: Further Reading

- [Guide - Composition API - Setup](https://vuejs.org/api/composition-api-setup.html)
- [Vue RFCs - 0013-composition-api](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0013-composition-api.md)

## :rocket: Version

This rule was introduced in eslint-plugin-vue v7.0.0

## :mag: Implementation

- [Rule source](https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/rules/no-setup-props-destructure.js)
- [Test source](https://github.com/vuejs/eslint-plugin-vue/blob/master/tests/lib/rules/no-setup-props-destructure.js)
