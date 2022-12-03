---
pageClass: rule-details
sidebarDepth: 0
title: vue/valid-model-definition
description: require valid keys in model option
since: v9.0.0
---
# vue/valid-model-definition

💼 This rule is enabled in the following [configs](https://eslint.vuejs.org/user-guide/#bundle-configurations): `essential`, ✅ `recommended`, `strongly-recommended`.

<!-- end auto-generated rule header -->

> require valid keys in model option

## :book: Rule Details

This rule is aimed at preventing invalid keys in model option.

<eslint-code-block :rules="{'vue/valid-model-definition': ['error']}">

```vue
<script>
/* ✓ GOOD */
export default {
  model: {
    prop: 'list',
  }
}
</script>
```

</eslint-code-block>

<eslint-code-block :rules="{'vue/valid-model-definition': ['error']}">

```vue
<script>
/* ✓ GOOD */
export default {
  model: {
    event: 'update'
  }
}
</script>
```

</eslint-code-block>

<eslint-code-block :rules="{'vue/valid-model-definition': ['error']}">

```vue
<script>
/* ✓ GOOD */
export default {
  model: {
    prop: 'list',
    event: 'update'
  }
}
</script>
```

</eslint-code-block>

<eslint-code-block :rules="{'vue/valid-model-definition': ['error']}">

```vue
<script>
/* ✗ BAD */
export default {
  model: {
    prop: 'list',
    events: 'update'
  }
}
</script>
```

</eslint-code-block>

<eslint-code-block :rules="{'vue/valid-model-definition': ['error']}">

```vue
<script>
/* ✗ BAD */
export default {
  model: {
    props: 'list',
    events: 'update'
  }
}
</script>
```

</eslint-code-block>

<eslint-code-block :rules="{'vue/valid-model-definition': ['error']}">

```vue
<script>
/* ✗ BAD */
export default {
  model: {
    name: 'checked',
    props: 'list',
    event: 'update'
  }
}
</script>
```

</eslint-code-block>

## :rocket: Version

This rule was introduced in eslint-plugin-vue v9.0.0

## :mag: Implementation

- [Rule source](https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/rules/valid-model-definition.js)
- [Test source](https://github.com/vuejs/eslint-plugin-vue/blob/master/tests/lib/rules/valid-model-definition.js)
