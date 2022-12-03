---
pageClass: rule-details
sidebarDepth: 0
title: vue/define-macros-order
description: enforce order of `defineEmits` and `defineProps` compiler macros
since: v8.7.0
---
# vue/define-macros-order

🚫 This rule is *disabled* in the `no-layout-rules` [config](https://eslint.vuejs.org/user-guide/#bundle-configurations).

🔧 This rule is automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/latest/user-guide/command-line-interface#--fix).

<!-- end auto-generated rule header -->

> enforce order of `defineEmits` and `defineProps` compiler macros

## :book: Rule Details

This rule reports the `defineProps` and `defineEmits` compiler macros when they are not the first statements in `<script setup>` (after any potential import statements or type definitions) or when they are not in the correct order.

## :wrench: Options

```json
{
  "vue/define-macros-order": ["error", {
    "order": ["defineProps", "defineEmits"]
  }]
}
```

- `order` (`string[]`) ... The order of defineEmits and defineProps macros

### `{ "order": ["defineProps", "defineEmits"] }` (default)

<eslint-code-block fix :rules="{'vue/define-macros-order': ['error']}">

```vue
<!-- ✓ GOOD -->
<script setup>
defineProps(/* ... */)
defineEmits(/* ... */)
</script>
```

</eslint-code-block>

<eslint-code-block fix :rules="{'vue/define-macros-order': ['error']}">

```vue
<!-- ✗ BAD -->
<script setup>
defineEmits(/* ... */)
defineProps(/* ... */)
</script>
```

</eslint-code-block>

<eslint-code-block fix :rules="{'vue/define-macros-order': ['error']}">

```vue
<!-- ✗ BAD -->
<script setup>
const bar = ref()
defineProps(/* ... */)
defineEmits(/* ... */)
</script>
```

</eslint-code-block>

## :rocket: Version

This rule was introduced in eslint-plugin-vue v8.7.0

## :mag: Implementation

- [Rule source](https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/rules/define-macros-order.js)
- [Test source](https://github.com/vuejs/eslint-plugin-vue/blob/master/tests/lib/rules/define-macros-order.js)
