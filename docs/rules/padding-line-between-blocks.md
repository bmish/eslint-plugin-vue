---
pageClass: rule-details
sidebarDepth: 0
title: vue/padding-line-between-blocks
description: require or disallow padding lines between blocks
since: v6.2.0
---
# vue/padding-line-between-blocks

🚫 This rule is *disabled* in the `no-layout-rules` [config](https://eslint.vuejs.org/user-guide/#bundle-configurations).

🔧 This rule is automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/latest/user-guide/command-line-interface#--fix).

<!-- end auto-generated rule header -->

> require or disallow padding lines between blocks

## :book: Rule Details

This rule requires or disallows blank lines between the given 2 blocks. Properly blank lines help developers to understand the code.

<eslint-code-block fix :rules="{'vue/padding-line-between-blocks': ['error']}">

```vue
<!-- ✓ GOOD -->
<template>
  <div></div>
</template>

<script>
export default {}
</script>

<style></style>
```

</eslint-code-block>

<eslint-code-block fix :rules="{'vue/padding-line-between-blocks': ['error']}">

```vue
<!-- ✗ BAD -->
<template>
  <div></div>
</template>
<script>
export default {}
</script>
<style></style>
```

</eslint-code-block>

## :wrench: Options

```json
{
  "vue/padding-line-between-blocks": ["error", "always" | "never"]
}
```

- `"always"` (default) ... Requires one or more blank lines. Note it does not count lines that comments exist as blank lines.
- `"never"` ... Disallows blank lines.

### `"always"` (default)

<eslint-code-block fix :rules="{'vue/padding-line-between-blocks': ['error']}">

```vue
<!-- ✓ GOOD -->
<template>
  <div></div>
</template>

<script>
export default {}
</script>

<style></style>
```

</eslint-code-block>

<eslint-code-block fix :rules="{'vue/padding-line-between-blocks': ['error']}">

```vue
<!-- ✗ BAD -->
<template>
  <div></div>
</template>
<script>
export default {}
</script>
<style></style>
```

</eslint-code-block>

### `"never"`

<eslint-code-block fix :rules="{'vue/padding-line-between-blocks': ['error', 'never']}">

```vue
<!-- ✓ GOOD -->
<template>
  <div></div>
</template>
<script>
export default {}
</script>
<style></style>
```

</eslint-code-block>

<eslint-code-block fix :rules="{'vue/padding-line-between-blocks': ['error', 'never']}">

```vue
<!-- ✗ BAD -->
<template>
  <div></div>
</template>

<script>
export default {}
</script>

<style></style>
```

</eslint-code-block>

## :books: Further Reading

- [padding-line-between-statements]
- [lines-between-class-members]

[padding-line-between-statements]: https://eslint.org/docs/rules/padding-line-between-statements
[lines-between-class-members]: https://eslint.org/docs/rules/lines-between-class-members

## :rocket: Version

This rule was introduced in eslint-plugin-vue v6.2.0

## :mag: Implementation

- [Rule source](https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/rules/padding-line-between-blocks.js)
- [Test source](https://github.com/vuejs/eslint-plugin-vue/blob/master/tests/lib/rules/padding-line-between-blocks.js)
