---
pageClass: rule-details
sidebarDepth: 0
title: vue/no-mutating-props
description: disallow mutation of component props
since: v7.0.0
---
# vue/no-mutating-props

💼 This rule is enabled in the following [configs](https://eslint.vuejs.org/user-guide/#bundle-configurations): `essential`, ✅ `recommended`, `strongly-recommended`, `vue3-essential`, `vue3-recommended`, `vue3-strongly-recommended`.

<!-- end auto-generated rule header -->

> disallow mutation of component props

## :book: Rule Details

This rule reports mutation of component props.

<eslint-code-block :rules="{'vue/no-mutating-props': ['error']}">

```vue
<!-- ✗ BAD -->
<template>
  <div>
    <input v-model="value" @click="openModal">
  </div>
</template>
<script>
  export default {
    props: {
      value: {
        type: String,
        required: true
      }
    },
    methods: {
      openModal() {
        this.value = 'test'
      }
    }
  }
</script>
```

</eslint-code-block>

<eslint-code-block :rules="{'vue/no-mutating-props': ['error']}">

```vue
<!-- ✓ GOOD -->
<template>
  <div>
    <input :value="value" @input="$emit('input', $event.target.value)" @click="openModal">
  </div>
</template>
<script>
  export default {
    props: {
      value: {
        type: String,
        required: true
      }
    },
    methods: {
      openModal() {
        this.$emit('input', 'test')
      }
    }
  }
</script>
```

</eslint-code-block>

<eslint-code-block :rules="{'vue/no-mutating-props': ['error']}">

```vue
<script>
  export default {
    setup (props) {
      // ✗ BAD
      props.value = 'test'
    }
  }
</script>
```

</eslint-code-block>

## :wrench: Options

Nothing.

## :books: Further Reading

- [Style guide - Implicit parent-child communication](https://vuejs.org/style-guide/rules-use-with-caution.html#implicit-parent-child-communication)
- [Vue - Prop Mutation - deprecated](https://v2.vuejs.org/v2/guide/migration.html#Prop-Mutation-deprecated)

## :rocket: Version

This rule was introduced in eslint-plugin-vue v7.0.0

## :mag: Implementation

- [Rule source](https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/rules/no-mutating-props.js)
- [Test source](https://github.com/vuejs/eslint-plugin-vue/blob/master/tests/lib/rules/no-mutating-props.js)
