---
pageClass: rule-details
sidebarDepth: 0
title: vue/return-in-emits-validator
description: enforce that a return statement is present in emits validator
since: v7.0.0
---
# vue/return-in-emits-validator

💼 This rule is enabled in the following [configs](https://eslint.vuejs.org/user-guide/#bundle-configurations): `essential`, ✅ `recommended`, `strongly-recommended`, `vue3-essential`, `vue3-recommended`, `vue3-strongly-recommended`.

<!-- end auto-generated rule header -->

> enforce that a return statement is present in emits validator

## :book: Rule Details

This rule enforces that a `return` statement is present in `emits` validators.

<eslint-code-block :rules="{'vue/return-in-emits-validator': ['error']}">

```vue
<script>
export default {
  emits: {
    /* ✓ GOOD */
    foo (evt) {
      if (evt) {
        return true
      } else {
        return false
      }
    },
    bar: function () {
      return true
    },
    baz (evt) {
      if (evt) {
        return true
      }
    },
    /* ✗ BAD */
    qux: function () {},
    quux (evt) {
      if (!evt) {
        return false
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

- [Guide - Custom Events / Validate Emitted Events](https://vuejs.org/guide/components/events.html#events-validation)
- [Vue RFCs - 0030-emits-option](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0030-emits-option.md)

## :rocket: Version

This rule was introduced in eslint-plugin-vue v7.0.0

## :mag: Implementation

- [Rule source](https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/rules/return-in-emits-validator.js)
- [Test source](https://github.com/vuejs/eslint-plugin-vue/blob/master/tests/lib/rules/return-in-emits-validator.js)
