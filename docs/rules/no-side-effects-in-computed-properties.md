---
pageClass: rule-details
sidebarDepth: 0
title: vue/no-side-effects-in-computed-properties
description: disallow side effects in computed properties
since: v3.6.0
---
# vue/no-side-effects-in-computed-properties

💼 This rule is enabled in the following [configs](https://eslint.vuejs.org/user-guide/#bundle-configurations): `essential`, ✅ `recommended`, `strongly-recommended`, `vue3-essential`, `vue3-recommended`, `vue3-strongly-recommended`.

<!-- end auto-generated rule header -->

> disallow side effects in computed properties

## :book: Rule Details

This rule is aimed at preventing the code which makes side effects in computed properties and functions.

It is considered a very bad practice to introduce side effects inside computed properties and functions. It makes the code not predictable and hard to understand.

<eslint-code-block :rules="{'vue/no-side-effects-in-computed-properties': ['error']}">

```vue
<script>
/* ✓ GOOD */
export default {
  computed: {
    fullName () {
      return `${this.firstName} ${this.lastName}`
    },
    reversedArray () {
      return this.array.slice(0).reverse() // .slice makes a copy of the array, instead of mutating the orginal
    }
  }
}
</script>
```

</eslint-code-block>

<eslint-code-block :rules="{'vue/no-side-effects-in-computed-properties': ['error']}">

```vue
<script>
/* ✗ BAD */
export default {
  computed: {
    fullName () {
      this.firstName = 'lorem' // <- side effect
      return `${this.firstName} ${this.lastName}`
    },
    reversedArray () {
      return this.array.reverse() // <- side effect - orginal array is being mutated
    }
  }
}
</script>
```

</eslint-code-block>

<eslint-code-block :rules="{'vue/no-side-effects-in-computed-properties': ['error']}">

```vue
<script>
import {computed} from 'vue'
/* ✓ GOOD */
export default {
  setup() {
    const foo = useFoo()

    const fullName = computed(() => `${foo.firstName} ${foo.lastName}`)
    const reversedArray = computed(() => {
      return foo.array.slice(0).reverse() // .slice makes a copy of the array, instead of mutating the orginal
    })
  }
}
</script>
```

</eslint-code-block>

<eslint-code-block :rules="{'vue/no-side-effects-in-computed-properties': ['error']}">

```vue
<script>
import {computed} from 'vue'
/* ✗ BAD */
export default {
  setup() {
    const foo = useFoo()

    const fullName = computed(() => {
      foo.firstName = 'lorem' // <- side effect
      return `${foo.firstName} ${foo.lastName}`
    })
    const reversedArray = computed(() => {
      return foo.array.reverse() // <- side effect - orginal array is being mutated
    })
  }
}
</script>
```

</eslint-code-block>

## :wrench: Options

Nothing.

## :books: Further Reading

- [Guide - Computed Caching vs Methods](https://vuejs.org/guide/essentials/computed.html#computed-caching-vs-methods)

## :rocket: Version

This rule was introduced in eslint-plugin-vue v3.6.0

## :mag: Implementation

- [Rule source](https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/rules/no-side-effects-in-computed-properties.js)
- [Test source](https://github.com/vuejs/eslint-plugin-vue/blob/master/tests/lib/rules/no-side-effects-in-computed-properties.js)
