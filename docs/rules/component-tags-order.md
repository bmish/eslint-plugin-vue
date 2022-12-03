---
pageClass: rule-details
sidebarDepth: 0
title: vue/component-tags-order
description: enforce order of component top-level elements
since: v6.1.0
---
# vue/component-tags-order

⚠️ This rule *warns* in the following [configs](https://eslint.vuejs.org/user-guide/#bundle-configurations): ✅ `recommended`, `vue3-recommended`.

🔧 This rule is automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/latest/user-guide/command-line-interface#--fix).

<!-- end auto-generated rule header -->

> enforce order of component top-level elements

## :book: Rule Details

This rule warns about the order of the top-level tags, such as `<script>`, `<template>` & `<style>`.

## :wrench: Options

```json
{
  "vue/component-tags-order": ["error", {
    "order": [ [ "script", "template" ], "style" ]
  }]
}
```

- `order` (`(string|string[])[]`) ... The order of top-level element names. default `[ [ "script", "template" ], "style" ]`. May also be CSS selectors, such as `script[setup]` and `i18n:not([locale=en])`.

### `{ "order": [ [ "script", "template" ], "style" ] }` (default)

<eslint-code-block fix :rules="{'vue/component-tags-order': ['error']}">

```vue
<!-- ✓ GOOD -->
<script>/* ... */</script>
<template>...</template>
<style>/* ... */</style>
```

</eslint-code-block>

<eslint-code-block fix :rules="{'vue/component-tags-order': ['error']}">

```vue
<!-- ✓ GOOD -->
<template>...</template>
<script>/* ... */</script>
<style>/* ... */</style>
```

</eslint-code-block>

<eslint-code-block fix :rules="{'vue/component-tags-order': ['error']}">

```vue
<!-- ✗ BAD -->
<style>/* ... */</style>
<script>/* ... */</script>
<template>...</template>
```

</eslint-code-block>

### `{ "order": ["template", "script", "style"] }`

<eslint-code-block fix :rules="{'vue/component-tags-order': ['error', { 'order': ['template', 'script', 'style'] }]}">

```vue
<!-- ✓ GOOD -->
<template>...</template>
<script>/* ... */</script>
<style>/* ... */</style>
```

</eslint-code-block>

<eslint-code-block fix :rules="{'vue/component-tags-order': ['error', { 'order': ['template', 'script', 'style'] }]}">

```vue
<!-- ✗ BAD -->
<script>/* ... */</script>
<template>...</template>
<style>/* ... */</style>
```

</eslint-code-block>

### `{ "order": ["docs", "template", "script", "style"] }`

<eslint-code-block fix :rules="{'vue/component-tags-order': ['error', { 'order': ['docs', 'template', 'script', 'style'] }]}">

```vue
<!-- ✓ GOOD -->
<docs> documentation </docs>
<template>...</template>
<script>/* ... */</script>
<style>/* ... */</style>
```

</eslint-code-block>

<eslint-code-block fix :rules="{'vue/component-tags-order': ['error', { 'order': ['docs', 'template', 'script', 'style'] }]}">

```vue
<!-- ✗ BAD -->
<template>...</template>
<script>/* ... */</script>
<docs> documentation </docs>
<style>/* ... */</style>
```

</eslint-code-block>

### `{ 'order': ['template', 'script:not([setup])', 'script[setup]'] }`

<eslint-code-block fix :rules="{'vue/component-tags-order': ['error', { 'order': ['template', 'script:not([setup])', 'script[setup]'] }]}">

```vue
<!-- ✓ GOOD -->
<template>...</template>
<script>/* ... */</script>
<script setup>/* ... */</script>
```

</eslint-code-block>

<eslint-code-block fix :rules="{'vue/component-tags-order': ['error', { 'order': ['template', 'script:not([setup])', 'script[setup]'] }]}">

```vue
<!-- ✗ BAD -->
<template>...</template>
<script setup>/* ... */</script>
<script>/* ... */</script>
```

</eslint-code-block>

### `{ 'order': ['template', 'style:not([scoped])', 'style[scoped]'] }`

<eslint-code-block fix :rules="{'vue/component-tags-order': ['error', { 'order': ['template', 'style:not([scoped])', 'style[scoped]'] }]}">

```vue
<!-- ✓ GOOD -->
<template>...</template>
<style>/* ... */</style>
<style scoped>/* ... */</style>
```

</eslint-code-block>

<eslint-code-block fix :rules="{'vue/component-tags-order': ['error', { 'order': ['template', 'style:not([scoped])', 'style[scoped]'] }]}">

```vue
<!-- ✗ BAD -->
<template>...</template>
<style scoped>/* ... */</style>
<style>/* ... */</style>
```

</eslint-code-block>

### `{ 'order': ['template', 'i18n:not([locale=en])', 'i18n[locale=en]'] }`

<eslint-code-block fix :rules="{'vue/component-tags-order': ['error', { 'order': ['template', 'i18n:not([locale=en])', 'i18n[locale=en]'] }]}">

```vue
<!-- ✓ GOOD -->
<template>...</template>
<i18n locale="ja">/* ... */</i18n>
<i18n locale="en">/* ... */</i18n>
```

</eslint-code-block>

<eslint-code-block fix :rules="{'vue/component-tags-order': ['error', { 'order': ['template', 'i18n:not([locale=en])', 'i18n[locale=en]'] }]}">

```vue
<!-- ✗ BAD -->
<template>...</template>
<i18n locale="en">/* ... */</i18n>
<i18n locale="ja">/* ... */</i18n>
```

</eslint-code-block>

## :books: Further Reading

- [Style guide - Single-file component top-level element order](https://vuejs.org/style-guide/rules-recommended.html#single-file-component-top-level-element-order)

## :rocket: Version

This rule was introduced in eslint-plugin-vue v6.1.0

## :mag: Implementation

- [Rule source](https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/rules/component-tags-order.js)
- [Test source](https://github.com/vuejs/eslint-plugin-vue/blob/master/tests/lib/rules/component-tags-order.js)
