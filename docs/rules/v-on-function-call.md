---
pageClass: rule-details
sidebarDepth: 0
title: vue/v-on-function-call
description: enforce or forbid parentheses after method calls without arguments in `v-on` directives
since: v5.2.0
---
# vue/v-on-function-call

❌ This rule is deprecated. It was replaced by [`vue/v-on-handler-style`](../../docs/rules/v-on-handler-style.md).

🔧 This rule is automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/latest/user-guide/command-line-interface#--fix).

<!-- end auto-generated rule header -->

> enforce or forbid parentheses after method calls without arguments in `v-on` directives

- :warning: This rule was **deprecated** and replaced by [vue/v-on-handler-style](v-on-handler-style.md) rule.

## :book: Rule Details

This rule aims to enforce to bind methods to `v-on` or call methods on `v-on` when without arguments.

<eslint-code-block fix :rules="{'vue/v-on-function-call': ['error']}">

```vue
<template>
  <!-- ✓ GOOD -->
  <button v-on:click="closeModal">
    Close
  </button>

  <!-- ✗ BAD -->
  <button v-on:click="closeModal()">
    Close
  </button>
</template>
```

</eslint-code-block>

## :wrench: Options

Default is set to `never`.

```json
{
  "vue/v-on-function-call": ["error",
    "always"|"never",
    {
      "ignoreIncludesComment": false
    }
  ]
}
```

- `"always"` ... Always use parentheses in `v-on` directives.
- `"never"` ... Never use parentheses in `v-on` directives for method calls without arguments. this is default.
- `ignoreIncludesComment` ... If `true`, do not report expressions containing comments. default `false`.

### `"always"` - Always use parentheses in `v-on` directives

<eslint-code-block fix :rules="{'vue/v-on-function-call': ['error', 'always']}">

```vue
<template>
  <!-- ✓ GOOD -->
  <button v-on:click="closeModal()">
    Close
  </button>

  <!-- ✗ BAD -->
  <button v-on:click="closeModal">
    Close
  </button>
</template>
```

</eslint-code-block>

### `"never"` - Never use parentheses in `v-on` directives for method calls without arguments

<eslint-code-block fix :rules="{'vue/v-on-function-call': ['error', 'never']}">

```vue
<template>
  <!-- ✓ GOOD -->
  <button v-on:click="closeModal">
    Close
  </button>
  <button v-on:click="closeModal(arg)">
    Close
  </button>

  <!-- ✗ BAD -->
  <button v-on:click="closeModal()">
    Close
  </button>
</template>
```

</eslint-code-block>

### `"never", { "ignoreIncludesComment": true }`

<eslint-code-block fix :rules="{'vue/v-on-function-call': ['error', 'never', {ignoreIncludesComment: true}]}">

```vue
<template>
  <!-- ✓ GOOD -->
  <button v-on:click="closeModal">
    Close
  </button>
  <button v-on:click="closeModal() /* comment */">
    Close
  </button>

  <!-- ✗ BAD -->
  <button v-on:click="closeModal()">
    Close
  </button>
</template>
```

</eslint-code-block>

## :rocket: Version

This rule was introduced in eslint-plugin-vue v5.2.0

## :mag: Implementation

- [Rule source](https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/rules/v-on-function-call.js)
- [Test source](https://github.com/vuejs/eslint-plugin-vue/blob/master/tests/lib/rules/v-on-function-call.js)
