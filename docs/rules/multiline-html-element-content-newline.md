---
pageClass: rule-details
sidebarDepth: 0
title: vue/multiline-html-element-content-newline
description: require a line break before and after the contents of a multiline element
since: v5.0.0
---
# vue/multiline-html-element-content-newline

⚠️🚫 This rule *warns* in the following [configs](https://eslint.vuejs.org/user-guide/#bundle-configurations): ✅ `recommended`, `strongly-recommended`, `vue3-recommended`, `vue3-strongly-recommended`. This rule is *disabled* in the `no-layout-rules` [config](https://eslint.vuejs.org/user-guide/#bundle-configurations).

🔧 This rule is automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/latest/user-guide/command-line-interface#--fix).

<!-- end auto-generated rule header -->

> require a line break before and after the contents of a multiline element

## :book: Rule Details

This rule enforces a line break before and after the contents of a multiline element.

<eslint-code-block fix :rules="{'vue/multiline-html-element-content-newline': ['error']}">

```vue
<template>
  <!-- ✓ GOOD -->
  <div>
    multiline
    content
  </div>

  <pre>some
  content</pre>

  <div
    attr
  >
    multiline start tag
  </div>

  <table>
    <tr>
      <td>multiline</td>
      <td>children</td>
    </tr>
  </table>

  <div>
    <!-- multiline
         comment -->
  </div>

  <div
  >
  </div>

  <div attr>singleline element</div>

  <!-- ✗ BAD -->
  <div>multiline
    content</div>

  <div
    attr
  >multiline start tag</div>

  <table><tr><td>multiline</td>
    <td>children</td></tr></table>

  <div><!-- multiline
    comment --></div>

  <div
  ></div>
</template>
```

</eslint-code-block>

## :wrench: Options

```js
{
    "vue/multiline-html-element-content-newline": ["error", {
        "ignoreWhenEmpty": true,
        "ignores": ["pre", "textarea", ...INLINE_ELEMENTS],
        "allowEmptyLines": false
    }]
}
```

- `ignoreWhenEmpty` ... disables reporting when element has no content.
    default `true`
- `ignores` ... the configuration for element names to ignore line breaks style.
    default `["pre", "textarea", ...INLINE_ELEMENTS]`.
- `allowEmptyLines` ... if `true`, it allows empty lines around content. If you want to disallow multiple empty lines, use [no-multiple-empty-lines] in combination.
    default `false`

::: info
  All inline non void elements can be found [here](https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/utils/inline-non-void-elements.json).
:::

### `"ignores": ["VueComponent", "pre", "textarea"]`

<eslint-code-block fix :rules="{'vue/multiline-html-element-content-newline': ['error', { ignores: ['VueComponent', 'pre', 'textarea'] }]}">

```vue
<template>
  <!-- ✓ GOOD -->
  <VueComponent>multiline
  content</VueComponent>

  <pre>some
  content</pre>

  <VueComponent><span
    class="bold">For example,</span>
  Defines the Vue component that accepts preformatted text.</VueComponent>
</template>
```

</eslint-code-block>

### `"allowEmptyLines": true`

<eslint-code-block fix :rules="{'vue/multiline-html-element-content-newline': ['error', { allowEmptyLines: true }]}">

```vue
<template>
  <!-- ✓ GOOD -->
  <div>
    content
  </div>
  <div>

    content

  </div>

  <!-- ✗ BAD -->
  <div>content
    content</div>
</template>
```

</eslint-code-block>

## :books: Further Reading

- [no-multiple-empty-lines]

[no-multiple-empty-lines]: https://eslint.org/docs/rules/no-multiple-empty-lines

## :rocket: Version

This rule was introduced in eslint-plugin-vue v5.0.0

## :mag: Implementation

- [Rule source](https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/rules/multiline-html-element-content-newline.js)
- [Test source](https://github.com/vuejs/eslint-plugin-vue/blob/master/tests/lib/rules/multiline-html-element-content-newline.js)
