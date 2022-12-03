---
pageClass: rule-details
sidebarDepth: 0
title: vue/html-quotes
description: enforce quotes style of HTML attributes
since: v3.0.0
---
# vue/html-quotes

⚠️🚫 This rule *warns* in the following [configs](https://eslint.vuejs.org/user-guide/#bundle-configurations): ✅ `recommended`, `strongly-recommended`, `vue3-recommended`, `vue3-strongly-recommended`. This rule is *disabled* in the `no-layout-rules` [config](https://eslint.vuejs.org/user-guide/#bundle-configurations).

🔧 This rule is automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/latest/user-guide/command-line-interface#--fix).

<!-- end auto-generated rule header -->

> enforce quotes style of HTML attributes
You can choose quotes of HTML attributes from:

- Double quotes: `<div class="foo">`
- Single quotes: `<div class='foo'>`
- No quotes: `<div class=foo>`

This rule enforces the quotes style of HTML attributes.

## :book: Rule Details

This rule reports the quotes of attributes if it is different to configured quotes.

<eslint-code-block fix :rules="{'vue/html-quotes': ['error']}">

```vue
<template>
  <!-- ✓ GOOD -->
  <img src="./logo.png">

  <!-- ✗ BAD -->
  <img src='./logo.png'>
  <img src=./logo.png>
</template>
```

</eslint-code-block>

## :wrench: Options

Default is set to `double`.

```json
{
  "vue/html-quotes": [ "error", "double" | "single", { "avoidEscape": false } ]
}
```

String option:

- `"double"` (default) ... requires double quotes.
- `"single"` ... requires single quotes.

Object option:

- `avoidEscape` ... If `true`, allows strings to use single-quotes or double-quotes so long as the string contains a quote that would have to be escaped otherwise.

### `"single"`

<eslint-code-block fix :rules="{'vue/html-quotes': ['error', 'single']}">

```vue
<template>
  <!-- ✓ GOOD -->
  <img src='./logo.png'>

  <!-- ✗ BAD -->
  <img src="./logo.png">
  <img src=./logo.png>
</template>
```

</eslint-code-block>

### `"double", { "avoidEscape": true }`

<eslint-code-block fix :rules="{'vue/html-quotes': ['error', 'double', { avoidEscape: true }]}">

```vue
<template>
  <!-- ✓ GOOD -->
  <img title='a string containing "double" quotes'>

  <!-- ✗ BAD -->
  <img title='foo'>
  <img title=bar>
</template>
```

</eslint-code-block>

## :books: Further Reading

- [Style guide - Quoted attribute values](https://vuejs.org/style-guide/rules-strongly-recommended.html#quoted-attribute-values)

## :rocket: Version

This rule was introduced in eslint-plugin-vue v3.0.0

## :mag: Implementation

- [Rule source](https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/rules/html-quotes.js)
- [Test source](https://github.com/vuejs/eslint-plugin-vue/blob/master/tests/lib/rules/html-quotes.js)
