---
pageClass: rule-details
sidebarDepth: 0
title: vue/no-deprecated-inline-template
description: disallow using deprecated `inline-template` attribute (in Vue.js 3.0.0+)
since: v7.0.0
---
# vue/no-deprecated-inline-template

💼 This rule is enabled in the following [configs](https://eslint.vuejs.org/user-guide/#bundle-configurations): `vue3-essential`, `vue3-recommended`, `vue3-strongly-recommended`.

<!-- end auto-generated rule header -->

> disallow using deprecated `inline-template` attribute (in Vue.js 3.0.0+)

## :book: Rule Details

This rule reports deprecated `inline-template` attributes (removed in Vue.js v3.0.0+).

See [Migration Guide - Inline Template Attribute](https://v3-migration.vuejs.org/breaking-changes/inline-template-attribute.html) for more details.

<eslint-code-block :rules="{'vue/no-deprecated-inline-template': ['error']}">

```vue
<template>
  <!-- ✓ GOOD -->
  <my-comnponent />

  <!-- ✗ BAD -->
  <my-component inline-template>
    <div>
      <p>These are compiled as the component's own template.</p>
      <p>Not parent's transclusion content.</p>
    </div>
  </my-component>
</template>
```

</eslint-code-block>

### :wrench: Options

Nothing.

## :books: Further Reading

- [Migration Guide - Inline Template Attribute](https://v3-migration.vuejs.org/breaking-changes/inline-template-attribute.html)
- [Vue RFCs - 0016-remove-inline-templates](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0016-remove-inline-templates.md)

## :rocket: Version

This rule was introduced in eslint-plugin-vue v7.0.0

## :mag: Implementation

- [Rule source](https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/rules/no-deprecated-inline-template.js)
- [Test source](https://github.com/vuejs/eslint-plugin-vue/blob/master/tests/lib/rules/no-deprecated-inline-template.js)
