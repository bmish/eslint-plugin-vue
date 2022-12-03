---
pageClass: rule-details
sidebarDepth: 0
title: vue/no-deprecated-filter
description: disallow using deprecated filters syntax (in Vue.js 3.0.0+)
since: v7.0.0
---
# vue/no-deprecated-filter

💼 This rule is enabled in the following [configs](https://eslint.vuejs.org/user-guide/#bundle-configurations): `vue3-essential`, `vue3-recommended`, `vue3-strongly-recommended`.

<!-- end auto-generated rule header -->

> disallow using deprecated filters syntax (in Vue.js 3.0.0+)

## :book: Rule Details

This rule reports deprecated `filters` syntax (removed in Vue.js v3.0.0+).

See [Migration Guide - Filters](https://v3-migration.vuejs.org/breaking-changes/filters.html) for more details.

<eslint-code-block :rules="{'vue/no-deprecated-filter': ['error']}">

```vue
<template>
  <!-- ✓ GOOD -->
  {{ filter(msg) }}
  {{ filter(msg, '€') }}
  {{ filterB(filterA(msg)) }}
  <div v-bind:id="filter(msg)"></div>
  <div v-bind:id="filter(msg, '€')"></div>
  <div v-bind:id="filterB(filterA(msg))"></div>

  <!-- ✗ BAD -->
  {{ msg | filter }}
  {{ msg | filter('€') }}
  {{ msg | filterA | filterB }}
  <div v-bind:id="msg | filter"></div>
  <div v-bind:id="msg | filter('€')"></div>
  <div v-bind:id="msg | filterA | filterB"></div>
</template>
```

</eslint-code-block>

:::warning
Do not disable [`"parserOptions.vueFeatures.filter"`](https://github.com/vuejs/vue-eslint-parser#parseroptionsvuefeaturesfilter) to use this rule.

```json5
{
  "parser": "vue-eslint-parser",
  "parserOptions": {
    "vueFeatures": {
      "filter": false // Don't!!
    }
  }
}
```

:::

### :wrench: Options

Nothing.

## :books: Further Reading

- [Migration Guide - Filters](https://v3-migration.vuejs.org/breaking-changes/filters.html)
- [Vue RFCs - 0015-remove-filters](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0015-remove-filters.md)

## :rocket: Version

This rule was introduced in eslint-plugin-vue v7.0.0

## :mag: Implementation

- [Rule source](https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/rules/no-deprecated-filter.js)
- [Test source](https://github.com/vuejs/eslint-plugin-vue/blob/master/tests/lib/rules/no-deprecated-filter.js)
