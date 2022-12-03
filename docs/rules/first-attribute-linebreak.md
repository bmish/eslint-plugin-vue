---
pageClass: rule-details
sidebarDepth: 0
title: vue/first-attribute-linebreak
description: enforce the location of first attribute
since: v8.0.0
---
# vue/first-attribute-linebreak

⚠️🚫 This rule *warns* in the following [configs](https://eslint.vuejs.org/user-guide/#bundle-configurations): ✅ `recommended`, `strongly-recommended`, `vue3-recommended`, `vue3-strongly-recommended`. This rule is *disabled* in the `no-layout-rules` [config](https://eslint.vuejs.org/user-guide/#bundle-configurations).

🔧 This rule is automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/latest/user-guide/command-line-interface#--fix).

<!-- end auto-generated rule header -->

> enforce the location of first attribute

## :book: Rule Details

This rule aims to enforce a consistent location for the first attribute.

<eslint-code-block fix :rules="{'vue/first-attribute-linebreak': ['error']}">

```vue
<template>
  <!-- ✓ GOOD -->
  <MyComponent lorem="1"/>
  <MyComponent lorem="1" ipsum="2"/>
  <MyComponent
    lorem="1"
    ipsum="2"
  />

  <!-- ✗ BAD -->
  <MyComponent lorem="1"
               ipsum="2"/>
</template>
```

</eslint-code-block>

## :wrench: Options

```json
{
  "vue/first-attribute-linebreak": ["error", {
    "singleline": "ignore",
    "multiline": "below"
  }]
}
```

- `singleline` ... The location of the first attribute when the attributes on single line. Default is `"ignore"`.
  - `"below"` ... Requires a newline before the first attribute.
  - `"beside"` ... Disallows a newline before the first attribute.
  - `"ignore"` ... Ignores attribute checking.
- `multiline` ... The location of the first attribute when the attributes span multiple lines. Default is `"below"`.
  - `"below"` ... Requires a newline before the first attribute.
  - `"beside"` ... Disallows a newline before the first attribute.
  - `"ignore"` ... Ignores attribute checking.

### `"singleline": "beside"`

<eslint-code-block fix :rules="{'vue/first-attribute-linebreak': ['error', {singleline: 'beside'}]}">

```vue
<template>
  <!-- ✓ GOOD -->
  <MyComponent lorem="1"/>
  <MyComponent lorem="1" ipsum="2"/>

  <!-- ✗ BAD -->
  <MyComponent
    lorem="1"/>
  <MyComponent
    lorem="1" ipsum="2"
  />
</template>
```

</eslint-code-block>

### `"singleline": "below"`

<eslint-code-block fix :rules="{'vue/first-attribute-linebreak': ['error', {singleline: 'below'}]}">

```vue
<template>
  <!-- ✓ GOOD -->
  <MyComponent
    lorem="1"/>
  <MyComponent
    lorem="1" ipsum="2"
  />

  <!-- ✗ BAD -->
  <MyComponent lorem="1"/>
  <MyComponent lorem="1" ipsum="2"/>
</template>
```

</eslint-code-block>

### `"multiline": "beside"`

<eslint-code-block fix :rules="{'vue/first-attribute-linebreak': ['error', {multiline: 'beside'}]}">

```vue
<template>
  <!-- ✓ GOOD -->
  <MyComponent lorem="1"
               ipsum="2"/>
  <MyComponent :lorem="{
                 a: 1
               }"/>

  <!-- ✗ BAD -->
  <MyComponent
    lorem="1"
    ipsum="2"/>
  <MyComponent
    :lorem="{
      a: 1
    }"/>
</template>
```

</eslint-code-block>

### `"multiline": "below"`

<eslint-code-block fix :rules="{'vue/first-attribute-linebreak': ['error', {multiline: 'below'}]}">

```vue
<template>
  <!-- ✓ GOOD -->
  <MyComponent
    lorem="1"
    ipsum="2"/>
  <MyComponent
    :lorem="{
      a: 1
    }"/>

  <!-- ✗ BAD -->
  <MyComponent lorem="1"
               ipsum="2"/>
  <MyComponent :lorem="{
                 a: 1
               }"/>
</template>
```

</eslint-code-block>

## :couple: Related Rules

- [vue/max-attributes-per-line](./max-attributes-per-line.md)

## :books: Further Reading

- [Style guide - Multi attribute elements](https://vuejs.org/style-guide/rules-strongly-recommended.html#multi-attribute-elements)

## :rocket: Version

This rule was introduced in eslint-plugin-vue v8.0.0

## :mag: Implementation

- [Rule source](https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/rules/first-attribute-linebreak.js)
- [Test source](https://github.com/vuejs/eslint-plugin-vue/blob/master/tests/lib/rules/first-attribute-linebreak.js)
