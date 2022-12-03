---
pageClass: rule-details
sidebarDepth: 0
title: vue/valid-define-props
description: enforce valid `defineProps` compiler macro
since: v7.13.0
---
# vue/valid-define-props

💼 This rule is enabled in the following [configs](https://eslint.vuejs.org/user-guide/#bundle-configurations): `essential`, ✅ `recommended`, `strongly-recommended`, `vue3-essential`, `vue3-recommended`, `vue3-strongly-recommended`.

<!-- end auto-generated rule header -->

> enforce valid `defineProps` compiler macro

This rule checks whether `defineProps` compiler macro is valid.

## :book: Rule Details

This rule reports `defineProps` compiler macros in the following cases:

- `defineProps` are referencing locally declared variables.
- `defineProps` has both a literal type and an argument. e.g. `defineProps<{/*props*/}>({/*props*/})`
- `defineProps` has been called multiple times.
- Props are defined in both `defineProps` and `export default {}`.
- Props are not defined in either `defineProps` or `export default {}`.

<eslint-code-block :rules="{'vue/valid-define-props': ['error']}">

```vue
<script setup>
/* ✓ GOOD */
defineProps({ msg: String })
</script>
```

</eslint-code-block>

<eslint-code-block :rules="{'vue/valid-define-props': ['error']}">

```vue
<script setup>
/* ✓ GOOD */
defineProps(['msg'])
</script>
```

</eslint-code-block>

<eslint-code-block :rules="{'vue/valid-define-props': ['error']}">

```vue
<script setup lang="ts">
/* ✓ GOOD */
defineProps<{ msg?: string }>()
</script>
```

</eslint-code-block>

<eslint-code-block :rules="{'vue/valid-define-props': ['error']}">

```vue
<script>
const def = { msg: String }
</script>
<script setup>
/* ✓ GOOD */
defineProps(def)
</script>
```

</eslint-code-block>

<eslint-code-block :rules="{'vue/valid-define-props': ['error']}">

```vue
<script setup>
/* ✗ BAD */
const def = { msg: String }
defineProps(def)
</script>
```

</eslint-code-block>

<eslint-code-block :rules="{'vue/valid-define-props': ['error']}">

```vue
<script setup lang="ts">
/* ✗ BAD */
defineProps<{ msg?: string }>({ msg: String })
</script>
```

</eslint-code-block>

<eslint-code-block :rules="{'vue/valid-define-props': ['error']}">

```vue
<script setup>
/* ✗ BAD */
defineProps({ msg: String })
defineProps({ count: Number })
</script>
```

</eslint-code-block>

<eslint-code-block :rules="{'vue/valid-define-props': ['error']}">

```vue
<script>
export default {
  props: { msg: String }
}
</script>
<script setup>
/* ✗ BAD */
defineProps({ count: Number })
</script>
```

</eslint-code-block>

<eslint-code-block :rules="{'vue/valid-define-props': ['error']}">

```vue
<script setup>
/* ✗ BAD */
defineProps()
</script>
```

</eslint-code-block>

## :wrench: Options

Nothing.

## :couple: Related Rules

- [vue/define-props-declaration](./define-props-declaration.md)
- [vue/valid-define-emits](./valid-define-emits.md)

## :rocket: Version

This rule was introduced in eslint-plugin-vue v7.13.0

## :mag: Implementation

- [Rule source](https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/rules/valid-define-props.js)
- [Test source](https://github.com/vuejs/eslint-plugin-vue/blob/master/tests/lib/rules/valid-define-props.js)
