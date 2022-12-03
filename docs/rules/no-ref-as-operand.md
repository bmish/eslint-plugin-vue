---
pageClass: rule-details
sidebarDepth: 0
title: vue/no-ref-as-operand
description: disallow use of value wrapped by `ref()` (Composition API) as an operand
since: v7.0.0
---
# vue/no-ref-as-operand

💼 This rule is enabled in the following [configs](https://eslint.vuejs.org/user-guide/#bundle-configurations): `essential`, ✅ `recommended`, `strongly-recommended`, `vue3-essential`, `vue3-recommended`, `vue3-strongly-recommended`.

🔧 This rule is automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/latest/user-guide/command-line-interface#--fix).

<!-- end auto-generated rule header -->

> disallow use of value wrapped by `ref()` (Composition API) as an operand

## :book: Rule Details

This rule reports cases where a ref is used incorrectly as an operand.
You must use `.value` to access the `Ref` value.

<eslint-code-block fix :rules="{'vue/no-ref-as-operand': ['error']}">

```vue
<script>
import { ref } from 'vue'

export default {
  setup () {
    const count = ref(0)
    const ok = ref(true)

    /* ✓ GOOD */
    count.value++
    count.value + 1
    1 + count.value
    var msg = ok.value ? 'yes' : 'no'

    /* ✗ BAD */
    count++
    count + 1
    1 + count
    var msg = ok ? 'yes' : 'no'

    return {
      count
    }
  }
}
</script>
```

</eslint-code-block>

## :wrench: Options

Nothing.

## :books: Further Reading

- [Guide - Reactivity - Reactivity Fundamentals / Creating Standalone Reactive Values as `refs`](https://v3.vuejs.org/guide/reactivity-fundamentals.html#creating-standalone-reactive-values-as-refs)
- [Vue RFCs - 0013-composition-api](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0013-composition-api.md)

## :rocket: Version

This rule was introduced in eslint-plugin-vue v7.0.0

## :mag: Implementation

- [Rule source](https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/rules/no-ref-as-operand.js)
- [Test source](https://github.com/vuejs/eslint-plugin-vue/blob/master/tests/lib/rules/no-ref-as-operand.js)
