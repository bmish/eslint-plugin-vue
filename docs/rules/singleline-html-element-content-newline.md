---
pageClass: rule-details
sidebarDepth: 0
title: vue/singleline-html-element-content-newline
description: require a line break before and after the contents of a singleline element
since: v5.0.0
---
# vue/singleline-html-element-content-newline

⚠️🚫 This rule *warns* in the following [configs](https://eslint.vuejs.org/user-guide/#bundle-configurations): ✅ `recommended`, `strongly-recommended`, `vue3-recommended`, `vue3-strongly-recommended`. This rule is *disabled* in the `no-layout-rules` [config](https://eslint.vuejs.org/user-guide/#bundle-configurations).

🔧 This rule is automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/latest/user-guide/command-line-interface#--fix).

<!-- end auto-generated rule header -->

> require a line break before and after the contents of a singleline element

## :book: Rule Details

This rule enforces a line break before and after the contents of a singleline element.

<eslint-code-block fix :rules="{'vue/singleline-html-element-content-newline': ['error']}">

```vue
<template>
  <!-- ✓ GOOD -->
  <div attr>
    content
  </div>

  <tr attr>
    <td>
      {{ data1 }}
    </td>
    <td>
      {{ data2 }}
    </td>
  </tr>

  <div attr>
    <!-- comment -->
  </div>

  <!-- ✗ BAD -->
  <div attr>content</div>

  <tr attr><td>{{ data1 }}</td><td>{{ data2 }}</td></tr>

  <div attr><!-- comment --></div>
</template>
```

</eslint-code-block>

## :wrench: Options

```js
{
  "vue/singleline-html-element-content-newline": ["error", {
    "ignoreWhenNoAttributes": true,
    "ignoreWhenEmpty": true,
    "ignores": ["pre", "textarea", ...INLINE_ELEMENTS]
  }]
}
```

- `ignoreWhenNoAttributes` ... allows having contents in one line, when given element has no attributes.
    default `true`
- `ignoreWhenEmpty` ... disables reporting when element has no content.
    default `true`
- `ignores` ... the configuration for element names to ignore line breaks style.
    default `["pre", "textarea", ...INLINE_ELEMENTS]`.

::: info
  All inline non void elements can be found [here](https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/utils/inline-non-void-elements.json).
:::

### `"ignoreWhenNoAttributes": true`

<eslint-code-block fix :rules="{'vue/singleline-html-element-content-newline': ['error', {'ignoreWhenNoAttributes': true}]}">

```vue
<template>
  <!-- ✗ BAD -->
  <div attr>content</div>

  <tr attr><td>{{ data1 }}</td><td>{{ data2 }}</td></tr>

  <div attr><!-- comment --></div>
</template>
```

</eslint-code-block>

### `"ignoreWhenNoAttributes": false`

<eslint-code-block fix :rules="{'vue/singleline-html-element-content-newline': ['error', {'ignoreWhenNoAttributes': false}]}">

```vue
<template>
  <!-- ✗ BAD -->
  <div>content</div>

  <tr><td>{{ data1 }}</td><td>{{ data2 }}</td></tr>

  <div><!-- comment --></div>
</template>
```

</eslint-code-block>

## :rocket: Version

This rule was introduced in eslint-plugin-vue v5.0.0

## :mag: Implementation

- [Rule source](https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/rules/singleline-html-element-content-newline.js)
- [Test source](https://github.com/vuejs/eslint-plugin-vue/blob/master/tests/lib/rules/singleline-html-element-content-newline.js)
