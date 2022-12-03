---
pageClass: rule-details
sidebarDepth: 0
title: vue/component-definition-name-casing
description: enforce specific casing for component definition name
since: v7.0.0
---
# vue/component-definition-name-casing

⚠️ This rule *warns* in the following [configs](https://eslint.vuejs.org/user-guide/#bundle-configurations): ✅ `recommended`, `strongly-recommended`, `vue3-recommended`, `vue3-strongly-recommended`.

🔧 This rule is automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/latest/user-guide/command-line-interface#--fix).

<!-- end auto-generated rule header -->

> enforce specific casing for component definition name

## :book: Rule Details

This rule aims to warn the component definition names other than the configured casing.

## :wrench: Options

Default casing is set to `PascalCase`.

```json
{
  "vue/component-definition-name-casing": ["error", "PascalCase" | "kebab-case"]
}
```

- `"PascalCase"` (default) ... enforce component definition names to pascal case.
- `"kebab-case"` ... enforce component definition names to kebab case.

### `"PascalCase"` (default)

<eslint-code-block fix :rules="{'vue/component-definition-name-casing': ['error']}">

```vue
<script>
export default {
  /* ✓ GOOD */
  name: 'MyComponent'
}
</script>
```

</eslint-code-block>

<eslint-code-block fix :rules="{'vue/component-definition-name-casing': ['error']}">

```vue
<script>
export default {
  /* ✗ BAD */
  name: 'my-component'
}
</script>
```

</eslint-code-block>

<eslint-code-block fix language="javascript" filename="src/MyComponent.js" :rules="{'vue/component-definition-name-casing': ['error']}">

```js
/* ✓ GOOD */
Vue.component('MyComponent', {

})

/* ✗ BAD */
Vue.component('my-component', {

})
```

</eslint-code-block>

### `"kebab-case"`

<eslint-code-block fix :rules="{'vue/component-definition-name-casing': ['error', 'kebab-case']}">

```vue
<script>
export default {
  /* ✓ GOOD */
  name: 'my-component'
}
</script>
```

</eslint-code-block>

<eslint-code-block fix :rules="{'vue/component-definition-name-casing': ['error', 'kebab-case']}">

```vue
<script>
export default {
  /* ✗ BAD */
  name: 'MyComponent'
}
</script>
```

</eslint-code-block>

<eslint-code-block fix language="javascript" filename="src/MyComponent.js" :rules="{'vue/component-definition-name-casing': ['error', 'kebab-case']}">

```js
/* ✓ GOOD */
Vue.component('my-component', {

})

/* ✗ BAD */
Vue.component('MyComponent', {

})
```

</eslint-code-block>

## :books: Further Reading

- [Style guide - Component name casing in JS/JSX](https://vuejs.org/style-guide/rules-strongly-recommended.html#component-name-casing-in-js-jsx)

## :rocket: Version

This rule was introduced in eslint-plugin-vue v7.0.0

## :mag: Implementation

- [Rule source](https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/rules/component-definition-name-casing.js)
- [Test source](https://github.com/vuejs/eslint-plugin-vue/blob/master/tests/lib/rules/component-definition-name-casing.js)
