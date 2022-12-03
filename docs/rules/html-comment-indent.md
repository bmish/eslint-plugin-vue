---
pageClass: rule-details
sidebarDepth: 0
title: vue/html-comment-indent
description: enforce consistent indentation in HTML comments
since: v7.0.0
---
# vue/html-comment-indent

🚫 This rule is *disabled* in the `no-layout-rules` [config](https://eslint.vuejs.org/user-guide/#bundle-configurations).

🔧 This rule is automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/latest/user-guide/command-line-interface#--fix).

<!-- end auto-generated rule header -->

> enforce consistent indentation in HTML comments

## :book: Rule Details

This rule enforces a consistent indentation style in HTML comment (`<!-- ... -->`). The default style is 2 spaces.

<eslint-code-block fix :rules="{'vue/html-comment-indent': ['error']}">

```vue
<template>
  <!-- ✓ GOOD -->
  <!--
    comment
  -->
  <!--
    comment
    comment
  -->
    <!--
      comment
    -->

  <!-- ✗ BAD -->
  <!--
  comment
      comment
  -->
  <!--
    comment
    -->
    <!--
    comment
  -->
</template>
```

</eslint-code-block>

## :wrench: Options

```json
{
  "vue/html-comment-indent": ["error", type]
}
```

- `type` (`number | "tab"`) ... The type of indentation. Default is `2`. If this is a number, it's the number of spaces for one indent. If this is `"tab"`, it uses one tab for one indent.

### `2`

<eslint-code-block fix :rules="{'vue/html-comment-indent': ['error', 2]}">

```vue
<template>
  <!--
    ✓ GOOD
  -->

  <!--
   ✗ BAD
  -->
</template>
```

</eslint-code-block>

### `4`

<eslint-code-block fix :rules="{'vue/html-comment-indent': ['error', 4]}">

```vue
<template>
  <!--
      ✓ GOOD
  -->

  <!--
    ✗ BAD
  -->
</template>
```

</eslint-code-block>

### `0`

<eslint-code-block fix :rules="{'vue/html-comment-indent': ['error', 0]}">

```vue
<template>
  <!--
  ✓ GOOD
  -->

  <!--
    ✗ BAD
  -->
</template>
```

</eslint-code-block>

### `"tab"`

<eslint-code-block fix :rules="{'vue/html-comment-indent': ['error', 'tab']}">

```vue
<template>
  <!--
  	✓ GOOD
  -->

  <!--
    ✗ BAD
  -->
</template>
```

</eslint-code-block>

## :rocket: Version

This rule was introduced in eslint-plugin-vue v7.0.0

## :mag: Implementation

- [Rule source](https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/rules/html-comment-indent.js)
- [Test source](https://github.com/vuejs/eslint-plugin-vue/blob/master/tests/lib/rules/html-comment-indent.js)
