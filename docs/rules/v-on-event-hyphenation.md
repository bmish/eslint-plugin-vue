---
pageClass: rule-details
sidebarDepth: 0
title: vue/v-on-event-hyphenation
description: enforce v-on event naming style on custom components in template
since: v7.4.0
---
# vue/v-on-event-hyphenation

⚠️ This rule *warns* in the following [configs](https://eslint.vuejs.org/user-guide/#bundle-configurations): `vue3-recommended`, `vue3-strongly-recommended`.

🔧 This rule is automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/latest/user-guide/command-line-interface#--fix).

<!-- end auto-generated rule header -->

> enforce v-on event naming style on custom components in template

## :book: Rule Details

This rule enforces using hyphenated v-on event names on custom components in Vue templates.

<eslint-code-block fix :rules="{'vue/v-on-event-hyphenation': ['error', 'always', { autofix: true }]}">

```vue
<template>
  <!-- ✓ GOOD -->
  <MyComponent v-on:custom-event="handleEvent"/>
  <MyComponent @custom-event="handleEvent"/>

  <!-- ✗ BAD -->
  <MyComponent v-on:customEvent="handleEvent"/>
  <MyComponent @customEvent="handleEvent"/>
</template>
```

</eslint-code-block>

## :wrench: Options

```json
{
  "vue/v-on-event-hyphenation": ["error", "always" | "never", {
    "autofix": false,
    "ignore": []
  }]
}
```

- `"always"` (default) ... Use hyphenated name.
- `"never"` ... Don't use hyphenated name.
- `"ignore"` ... Array of ignored names
- `"autofix"` ... If `true`, enable autofix. If you are using Vue 2, we recommend that you do not use it due to its side effects.

### `"always"`

It errors on upper case letters.

<eslint-code-block fix :rules="{'vue/v-on-event-hyphenation': ['error', 'always', { autofix: true }]}">

```vue
<template>
  <!-- ✓ GOOD -->
  <MyComponent v-on:custom-event="handleEvent"/>

  <!-- ✗ BAD -->
  <MyComponent v-on:customEvent="handleEvent"/>
</template>
```

</eslint-code-block>

### `"never"`

It errors on hyphens.

<eslint-code-block fix :rules="{'vue/v-on-event-hyphenation': ['error', 'never', { autofix: true }]}">

```vue
<template>
  <!-- ✓ GOOD -->
  <MyComponent v-on:customEvent="handleEvent"/>

  <!-- ✗ BAD -->
  <MyComponent v-on:custom-event="handleEvent"/>
</template>
```

</eslint-code-block>

### `"never", { "ignore": ["custom-event"] }`

Don't use hyphenated name but allow custom event names

<eslint-code-block fix :rules="{'vue/v-on-event-hyphenation': ['error', 'never', { ignore: ['custom-event'], autofix: true }]}">

```vue
<template>
  <!-- ✓ GOOD -->
  <MyComponent v-on:custom-event="handleEvent"/>
  <MyComponent v-on:myEvent="handleEvent"/>

  <!-- ✗ BAD -->
  <MyComponent v-on:my-event="handleEvent"/>
</template>
```

</eslint-code-block>

## :couple: Related Rules

- [vue/custom-event-name-casing](./custom-event-name-casing.md)
- [vue/attribute-hyphenation](./attribute-hyphenation.md)
- [vue/v-on-handler-style](./v-on-handler-style.md)

## :books: Further Reading

- [Guide - Custom Events]

[Guide - Custom Events]: https://vuejs.org/guide/components/events.html

## :rocket: Version

This rule was introduced in eslint-plugin-vue v7.4.0

## :mag: Implementation

- [Rule source](https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/rules/v-on-event-hyphenation.js)
- [Test source](https://github.com/vuejs/eslint-plugin-vue/blob/master/tests/lib/rules/v-on-event-hyphenation.js)
