---
pageClass: rule-details
sidebarDepth: 0
title: vue/this-in-template
description: disallow usage of `this` in template
since: v3.13.0
---
# vue/this-in-template

⚠️ This rule *warns* in the following [configs](https://eslint.vuejs.org/user-guide/#bundle-configurations): ✅ `recommended`, `vue3-recommended`.

🔧 This rule is automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/latest/user-guide/command-line-interface#--fix).

<!-- end auto-generated rule header -->

> disallow usage of `this` in template

## :book: Rule Details

This rule aims at preventing usage of `this` in Vue templates.

<eslint-code-block fix :rules="{'vue/this-in-template': ['error']}">

```vue
<template>
  <!-- ✓ GOOD -->
  <a :href="url">
    {{ text }}
  </a>

  <!-- ✗ BAD -->
  <a :href="this.url">
    {{ this.text }}
  </a>
</template>
```

</eslint-code-block>

## :wrench: Options

```json
{
  "vue/this-in-template": ["error", "always" | "never"]
}
```

- `"always"` ... Always use `this` while accessing properties from Vue.
- `"never"` (default) ... Never use `this` keyword in expressions.

### `"always"`

<eslint-code-block fix :rules="{'vue/this-in-template': ['error', 'always']}">

```vue
<template>
  <!-- ✓ GOOD -->
  <a :href="this.url">
    {{ this.text }}
  </a>

  <!-- ✗ BAD -->
  <a :href="url">
    {{ text }}
  </a>
</template>
```

</eslint-code-block>

## :rocket: Version

This rule was introduced in eslint-plugin-vue v3.13.0

## :mag: Implementation

- [Rule source](https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/rules/this-in-template.js)
- [Test source](https://github.com/vuejs/eslint-plugin-vue/blob/master/tests/lib/rules/this-in-template.js)
