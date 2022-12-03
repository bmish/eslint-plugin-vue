---
pageClass: rule-details
sidebarDepth: 0
title: vue/attribute-hyphenation
description: enforce attribute naming style on custom components in template
since: v3.9.0
---
# vue/attribute-hyphenation

⚠️ This rule *warns* in the following [configs](https://eslint.vuejs.org/user-guide/#bundle-configurations): ✅ `recommended`, `strongly-recommended`, `vue3-recommended`, `vue3-strongly-recommended`.

🔧 This rule is automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/latest/user-guide/command-line-interface#--fix).

<!-- end auto-generated rule header -->

> enforce attribute naming style on custom components in template

## :book: Rule Details

This rule enforces using hyphenated attribute names on custom components in Vue templates.

<eslint-code-block fix :rules="{'vue/attribute-hyphenation': ['error', 'always']}">

```vue
<template>
  <!-- ✓ GOOD -->
  <MyComponent my-prop="prop" />

  <!-- ✗ BAD -->
  <MyComponent myProp="prop" />
</template>
```

</eslint-code-block>

## :wrench: Options

```json
{
  "vue/attribute-hyphenation": ["error", "always" | "never", {
    "ignore": []
  }]
}
```

Default casing is set to `always`. By default the following attributes are ignored: `data-`, `aria-`, `slot-scope`,
and all the [SVG attributes](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute) with either an upper case letter or an hyphen.

- `"always"` (default) ... Use hyphenated name.
- `"never"` ... Don't use hyphenated name except the ones that are ignored.
- `"ignore"` ... Array of ignored names

### `"always"`

It errors on upper case letters.

<eslint-code-block fix :rules="{'vue/attribute-hyphenation': ['error', 'always']}">

```vue
<template>
  <!-- ✓ GOOD -->
  <MyComponent my-prop="prop" />

  <!-- ✗ BAD -->
  <MyComponent myProp="prop" />
</template>
```

</eslint-code-block>

### `"never"`

It errors on hyphens except on the attributes in the ignored attributes list.

<eslint-code-block fix :rules="{'vue/attribute-hyphenation': ['error', 'never']}">

```vue
<template>
  <!-- ✓ GOOD -->
  <MyComponent myProp="prop" />
  <MyComponent data-id="prop" />
  <MyComponent aria-role="button" />
  <MyComponent slot-scope="prop" />

  <!-- ✗ BAD -->
  <MyComponent my-prop="prop" />
</template>
```

</eslint-code-block>

### `"never", { "ignore": ["custom-prop"] }`

Don't use hyphenated name but allow custom attributes

<eslint-code-block fix :rules="{'vue/attribute-hyphenation': ['error', 'never', { ignore: ['custom-prop']}]}">

```vue
<template>
  <!-- ✓ GOOD -->
  <MyComponent myProp="prop" />
  <MyComponent custom-prop="prop" />
  <MyComponent data-id="prop" />
  <MyComponent aria-role="button" />
  <MyComponent slot-scope="prop" />

  <!-- ✗ BAD -->
  <MyComponent my-prop="prop" />
</template>
```

</eslint-code-block>

## :couple: Related Rules

- [vue/v-on-event-hyphenation](./v-on-event-hyphenation.md)
- [vue/prop-name-casing](./prop-name-casing.md)

## :rocket: Version

This rule was introduced in eslint-plugin-vue v3.9.0

## :mag: Implementation

- [Rule source](https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/rules/attribute-hyphenation.js)
- [Test source](https://github.com/vuejs/eslint-plugin-vue/blob/master/tests/lib/rules/attribute-hyphenation.js)
