---
pageClass: rule-details
sidebarDepth: 0
title: vue/no-deprecated-props-default-this
description: disallow deprecated `this` access in props default function (in Vue.js 3.0.0+)
since: v7.0.0
---
# vue/no-deprecated-props-default-this

💼 This rule is enabled in the following [configs](https://eslint.vuejs.org/user-guide/#bundle-configurations): `vue3-essential`, `vue3-recommended`, `vue3-strongly-recommended`.

<!-- end auto-generated rule header -->

> disallow deprecated `this` access in props default function (in Vue.js 3.0.0+)

## :book: Rule Details

This rule reports the use of `this` within the props default value factory functions.
In Vue.js 3.0.0+, props default value factory functions no longer have access to `this`.

See [Migration Guide - Props Default Function `this` Access](https://v3-migration.vuejs.org/breaking-changes/props-default-this.html) for more details.

<eslint-code-block :rules="{'vue/no-deprecated-props-default-this': ['error']}">

```vue
<script>
export default {
  props: {
    a: String,
    b: {
      default () {
        /* ✗ BAD */
        return this.a
      }
    }
  }
}
</script>
```

</eslint-code-block>

<eslint-code-block :rules="{'vue/no-deprecated-props-default-this': ['error']}">

```vue
<script>
export default {
  props: {
    a: String,
    b: {
      default (props) {
        /* ✓ GOOD */
        return props.a
      }
    }
  }
}
</script>
```

</eslint-code-block>

## :wrench: Options

Nothing.

## :books: Further Reading

- [Migration Guide - Props Default Function `this` Access](https://v3-migration.vuejs.org/breaking-changes/props-default-this.html)

## :rocket: Version

This rule was introduced in eslint-plugin-vue v7.0.0

## :mag: Implementation

- [Rule source](https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/rules/no-deprecated-props-default-this.js)
- [Test source](https://github.com/vuejs/eslint-plugin-vue/blob/master/tests/lib/rules/no-deprecated-props-default-this.js)
