---
pageClass: rule-details
sidebarDepth: 0
title: vue/valid-next-tick
description: enforce valid `nextTick` function calls
since: v7.5.0
---
# vue/valid-next-tick

💼 This rule is enabled in the following [configs](https://eslint.vuejs.org/user-guide/#bundle-configurations): `essential`, ✅ `recommended`, `strongly-recommended`, `vue3-essential`, `vue3-recommended`, `vue3-strongly-recommended`.

🔧💡 This rule is automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/latest/user-guide/command-line-interface#--fix) and manually fixable by [editor suggestions](https://eslint.org/docs/developer-guide/working-with-rules#providing-suggestions).

<!-- end auto-generated rule header -->

> enforce valid `nextTick` function calls

## :book: Rule Details

Calling `Vue.nextTick` or `vm.$nextTick` without passing a callback and without awaiting the returned Promise is likely a mistake (probably a missing `await`).

<eslint-code-block fix :rules="{'vue/valid-next-tick': ['error']}">

```vue
<script>
import { nextTick as nt } from 'vue';

export default {
  async mounted() {
    /* ✗ BAD: no callback function or awaited Promise */
    nt();
    Vue.nextTick();
    this.$nextTick();

    /* ✗ BAD: too many parameters */
    nt(callback, anotherCallback);
    Vue.nextTick(callback, anotherCallback);
    this.$nextTick(callback, anotherCallback);

    /* ✗ BAD: no function call */
    nt.then(callback);
    Vue.nextTick.then(callback);
    this.$nextTick.then(callback);
    await nt;
    await Vue.nextTick;
    await this.$nextTick;

    /* ✗ BAD: both callback function and awaited Promise */
    nt(callback).then(anotherCallback);
    Vue.nextTick(callback).then(anotherCallback);
    this.$nextTick(callback).then(anotherCallback);
    await nt(callback);
    await Vue.nextTick(callback);
    await this.$nextTick(callback);

    /* ✓ GOOD */
    await nt();
    await Vue.nextTick();
    await this.$nextTick();

    /* ✓ GOOD */
    nt().then(callback);
    Vue.nextTick().then(callback);
    this.$nextTick().then(callback);

    /* ✓ GOOD */
    nt(callback);
    Vue.nextTick(callback);
    this.$nextTick(callback);
  }
}
</script>
```

</eslint-code-block>

## :wrench: Options

Nothing.

## :books: Further Reading

- [`Vue.nextTick` API in Vue 2](https://v2.vuejs.org/v2/api/#Vue-nextTick)
- [`vm.$nextTick` API in Vue 2](https://v2.vuejs.org/v2/api/#vm-nextTick)
- [Global API Treeshaking](https://v3-migration.vuejs.org/breaking-changes/global-api-treeshaking.html)
- [Global `nextTick` API in Vue 3](https://vuejs.org/api/general.html#nexttick)
- [Instance `$nextTick` API in Vue 3](https://vuejs.org/api/component-instance.html#nexttick)

## :rocket: Version

This rule was introduced in eslint-plugin-vue v7.5.0

## :mag: Implementation

- [Rule source](https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/rules/valid-next-tick.js)
- [Test source](https://github.com/vuejs/eslint-plugin-vue/blob/master/tests/lib/rules/valid-next-tick.js)
