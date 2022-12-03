---
pageClass: rule-details
sidebarDepth: 0
title: vue/no-multi-spaces
description: disallow multiple spaces
since: v3.12.0
---
# vue/no-multi-spaces

⚠️🚫 This rule *warns* in the following [configs](https://eslint.vuejs.org/user-guide/#bundle-configurations): ✅ `recommended`, `strongly-recommended`, `vue3-recommended`, `vue3-strongly-recommended`. This rule is *disabled* in the `no-layout-rules` [config](https://eslint.vuejs.org/user-guide/#bundle-configurations).

🔧 This rule is automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/latest/user-guide/command-line-interface#--fix).

<!-- end auto-generated rule header -->

> disallow multiple spaces

## :book: Rule Details

This rule aims at removing multiple spaces in tags, which are not used for indentation.

<eslint-code-block fix :rules="{'vue/no-multi-spaces': ['error']}">

```vue
<template>
  <!-- ✓ GOOD -->
  <div
    class="foo"
    :style="bar" />
  <i
    :class="{
      'fa-angle-up' : isExpanded,
      'fa-angle-down' : !isExpanded,
    }"
  />

  <!-- ✗ BAD -->
  <div     class="foo"
    :style =  "bar"         />
  <i
    :class="{
      'fa-angle-up'   : isExpanded,
      'fa-angle-down' : !isExpanded,
    }"
  />
</template>
```

</eslint-code-block>

## :wrench: Options

```json
{
  "vue/no-multi-spaces": ["error", {
    "ignoreProperties": false
  }]
}
```

- `ignoreProperties` ... whether or not objects' properties should be ignored. default `false`

### `"ignoreProperties": true`

<eslint-code-block fix :rules="{'vue/no-multi-spaces': ['error', { 'ignoreProperties': true }]}">

```vue
<template>
  <!-- ✓ GOOD -->
  <i
    :class="{
      'fa-angle-up'   : isExpanded,
      'fa-angle-down' : !isExpanded,
    }"
  />
</template>
```

</eslint-code-block>

## :rocket: Version

This rule was introduced in eslint-plugin-vue v3.12.0

## :mag: Implementation

- [Rule source](https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/rules/no-multi-spaces.js)
- [Test source](https://github.com/vuejs/eslint-plugin-vue/blob/master/tests/lib/rules/no-multi-spaces.js)
