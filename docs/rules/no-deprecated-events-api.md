---
pageClass: rule-details
sidebarDepth: 0
title: vue/no-deprecated-events-api
description: disallow using deprecated events api (in Vue.js 3.0.0+)
since: v7.0.0
---
# vue/no-deprecated-events-api

💼 This rule is enabled in the following [configs](https://eslint.vuejs.org/user-guide/#bundle-configurations): `vue3-essential`, `vue3-recommended`, `vue3-strongly-recommended`.

<!-- end auto-generated rule header -->

> disallow using deprecated events api (in Vue.js 3.0.0+)

## :book: Rule Details

This rule reports use of deprecated `$on`, `$off` `$once` api. (in Vue.js 3.0.0+).

See [Migration Guide - Events API](https://v3-migration.vuejs.org/breaking-changes/events-api.html) for more details.

<eslint-code-block :rules="{'vue/no-deprecated-events-api': ['error']}">

```vue
<script>
/* ✗ BAD */
export default {
  mounted () {
    this.$on('start', function(args) {
      console.log('start')
    })
    this.$emit('start')
  }
}
</script>
```

</eslint-code-block>

<eslint-code-block :rules="{'vue/no-deprecated-events-api': ['error']}">

```vue
<script>
/* ✓ GOOD */
import mitt from 'mitt'
const emitter = mitt()
export default {
  mounted () {
    emitter.on('start', function(args) {
      console.log('start')
    })
    emitter.emit('start')
  }
}
</script>
```

</eslint-code-block>

## :wrench: Options

Nothing.

## :books: Further Reading

- [Migration Guide - Events API](https://v3-migration.vuejs.org/breaking-changes/events-api.html)
- [Vue RFCs - 0020-events-api-change](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0020-events-api-change.md)

## :rocket: Version

This rule was introduced in eslint-plugin-vue v7.0.0

## :mag: Implementation

- [Rule source](https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/rules/no-deprecated-events-api.js)
- [Test source](https://github.com/vuejs/eslint-plugin-vue/blob/master/tests/lib/rules/no-deprecated-events-api.js)
